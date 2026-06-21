import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Shared in-memory video stream cache to prevent multiple fetches and rate-limiting from Google Drive CDN
const videoCache = new Map<string, { buffer: Buffer; contentType: string }>();

function serveBufferWithRanges(req: express.Request, res: express.Response, buffer: Buffer, contentType: string) {
  const totalLength = buffer.length;
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Content-Type", contentType);

  const range = req.headers.range;
  if (!range) {
    res.setHeader("Content-Length", totalLength);
    return res.status(200).send(buffer);
  }

  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : totalLength - 1;

  if (start >= totalLength || end >= totalLength || start > end) {
    res.setHeader("Content-Range", `bytes */${totalLength}`);
    return res.status(416).send("Requested Range Not Satisfiable");
  }

  const chunksize = (end - start) + 1;
  const chunk = buffer.subarray(start, end + 1);

  res.status(206);
  res.setHeader("Content-Range", `bytes ${start}-${end}/${totalLength}`);
  res.setHeader("Content-Length", chunksize);
  res.send(chunk);
}

// Lazy initialization for Gemini to catch missing API keys gracefully
let genAI: GoogleGenAI | null = null;
function getGenAI() {
  if (!genAI) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    genAI = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return genAI;
}

// API routes
app.post("/api/analyze-biometric", async (req, res) => {
  const { input } = req.body;
  
  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze this respiratory or clinical scenario and provide a medical technology recommendation using AtrioCare's suite (Haal-Chaal Pravartak 1.0, V-sync, or NOVICULE-TA).
      Focus on non-invasive screening and computational insights.
      
      Scenario: ${input}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosis_insight: { type: Type.STRING },
            recommended_tech: { type: Type.STRING },
            rehab_protocol: { type: Type.STRING },
            confidence_score: { type: Type.NUMBER }
          },
          required: ["diagnosis_insight", "recommended_tech", "rehab_protocol", "confidence_score"]
        }
      }
    });

    res.json(JSON.parse(response.text || '{}'));
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [...(history || []), { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `You are the AtrioCare Tech Support assistant, a high-end medical technology advisor. 
        You specialize in medical robotics, clinical diagnostics, and patient rehabilitation.
        
        Knowledge Base:
        - Haal-Chaal Pravartak 1.0: India's First Immunity Challenge for Smarter Breathing. A 7-day challenge for INR 500/-. Level 1 prize is INR 50,000.
        - Novicule-TA: A flagship hardware innovation for smart inhalation and proactive pulmonary care.
        - V-sync: Digital platform for seamless respiratory and health tracking.
        - Contact: service.techatriocare@gmail.com
        
        Rules:
        1. Be professional, clinical, and reassuring.
        2. Mention Tech AtrioCare technologies where relevant (Neural Sync, Robotic Physio, Biomed analytics).
        3. Always add a disclaimer: "This is an automated biometric simulation and not a substitute for professional medical advice."
        4. Use structured markdown formatting.`,
      }
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "Connectivity lost. Please check your secure bio-link." });
  }
});

// High-performance video streaming proxy route with multi-chunk range response support and aggressive memory caching to bypass Google Drive limits on mobile
app.get("/api/video-stream", async (req, res) => {
  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).send("Video ID is required");
  }

  try {
    // Check cache
    if (videoCache.has(id)) {
      const cached = videoCache.get(id)!;
      return serveBufferWithRanges(req, res, cached.buffer, cached.contentType);
    }

    let targetUrl = `https://drive.google.com/uc?export=download&id=${id}`;
    const initialHeaders: Record<string, string> = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };

    // Step 1: Initial request to see if we get redirected or receive download warning cookies
    let driveRes = await fetch(targetUrl, { 
      method: "GET", 
      headers: initialHeaders,
      redirect: "manual" 
    });

    let isRedirect = [301, 302, 303, 307, 308].includes(driveRes.status);
    let cookieHeader = driveRes.headers.get("set-cookie") || "";

    if (isRedirect) {
      const location = driveRes.headers.get("location");
      if (location) {
        targetUrl = location;
        driveRes = await fetch(targetUrl, { 
          method: "GET", 
          headers: initialHeaders 
        });
        const nextCookie = driveRes.headers.get("set-cookie");
        if (nextCookie) {
          cookieHeader = [cookieHeader, nextCookie].filter(Boolean).join("; ");
        }
      }
    }

    let contentTypeHeader = driveRes.headers.get("content-type") || "";
    let buffer: Buffer;

    // Step 2: Check if Google returns the HTML virus warning confirmation screen
    if (contentTypeHeader.includes("text/html")) {
      const htmlText = await driveRes.text();
      // Look for the confirmation token from the form action or link
      const confirmMatch = htmlText.match(/confirm=([a-zA-Z0-9_-]+)/);
      if (confirmMatch) {
        const confirmToken = confirmMatch[1];
        targetUrl = `https://drive.google.com/uc?export=download&id=${id}&confirm=${confirmToken}`;
        
        const finalHeaders: Record<string, string> = {
          "User-Agent": initialHeaders["User-Agent"],
        };
        if (cookieHeader) {
          finalHeaders["Cookie"] = cookieHeader;
        }

        const confirmRes = await fetch(targetUrl, {
          method: "GET",
          headers: finalHeaders,
        });

        const arrayBuf = await confirmRes.arrayBuffer();
        buffer = Buffer.from(arrayBuf);
        contentTypeHeader = confirmRes.headers.get("content-type") || "video/mp4";
      } else {
        // Fallback: download direct target input
        const arrayBuf = await fetch(targetUrl, { method: "GET", headers: initialHeaders }).then(r => r.arrayBuffer());
        buffer = Buffer.from(arrayBuf);
      }
    } else {
      const arrayBuf = await driveRes.arrayBuffer();
      buffer = Buffer.from(arrayBuf);
    }

    // Set fallback content type and save to server memory cache
    const finalContentType = contentTypeHeader.includes("text/html") ? "video/mp4" : contentTypeHeader;
    videoCache.set(id, { buffer, contentType: finalContentType });

    // Serve with support for client-side range headers
    return serveBufferWithRanges(req, res, buffer, finalContentType);
  } catch (error) {
    console.error("Video proxy streaming exception:", error);
    res.status(500).send("Video streaming pipeline error occurred.");
  }
});

async function startServer() {
  if (!process.env.VERCEL) {
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
