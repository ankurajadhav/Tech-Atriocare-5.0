import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Shared in-memory cache for resolved Google Drive download URLs to bypass antivirus checkpoints and rate limits
const directUrlCache = new Map<string, { url: string; headers: Record<string, string> }>();

async function resolveDriveUrl(id: string): Promise<{ url: string; headers: Record<string, string> }> {
  if (directUrlCache.has(id)) {
    return directUrlCache.get(id)!;
  }

  const initialUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  const initialHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  };

  // Step 1: Initial request to handle potential 302 redirects and collect confirmation cookies
  let res = await fetch(initialUrl, {
    method: "GET",
    headers: initialHeaders,
    redirect: "manual"
  });

  let status = res.status;
  let cookieHeader = res.headers.get("set-cookie") || "";
  let finalUrl = initialUrl;

  if ([301, 302, 303, 307, 308].includes(status)) {
    const loc = res.headers.get("location");
    if (loc) {
      finalUrl = loc;
      // Follow the redirect manually to collect any warning skip keys
      res = await fetch(finalUrl, {
        method: "GET",
         headers: {
          ...initialHeaders,
          ...(cookieHeader ? { "Cookie": cookieHeader } : {})
        },
        redirect: "manual"
      });
      const nextCookie = res.headers.get("set-cookie");
      if (nextCookie) {
        cookieHeader = [cookieHeader, nextCookie].filter(Boolean).join("; ");
      }
    }
  }

  // Step 2: Check for Google's large file virus confirmation gate page
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    const htmlText = await res.text();
    const confirmMatch = htmlText.match(/confirm=([a-zA-Z0-9_-]+)/);
    if (confirmMatch) {
      const confirmToken = confirmMatch[1];
      finalUrl = `https://drive.google.com/uc?export=download&id=${id}&confirm=${confirmToken}`;
    }
  }

  const result = {
    url: finalUrl,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      ...(cookieHeader ? { "Cookie": cookieHeader } : {})
    }
  };

  directUrlCache.set(id, result);
  return result;
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

// High-performance video streaming proxy route with multi-chunk range response support and non-blocking streaming
app.get("/api/video-stream", async (req, res) => {
  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).send("Video ID is required");
  }

  try {
    const { url, headers } = await resolveDriveUrl(id);

    // Prepare range headers if requested by the mobile browser / client video player
    const driveHeaders: Record<string, string> = { ...headers };
    if (req.headers.range) {
      driveHeaders["Range"] = req.headers.range;
    }

    // Step 3: Fetch the range segment from Google Drive
    let driveRes = await fetch(url, {
      method: "GET",
      headers: driveHeaders,
    });

    if (!driveRes.ok && driveRes.status !== 206) {
      // If we got a stale URL or rate-limit error, delete the cached URL and resolve again
      directUrlCache.delete(id);
      const retry = await resolveDriveUrl(id);
      const retryHeaders = { ...retry.headers };
      if (req.headers.range) {
        retryHeaders["Range"] = req.headers.range;
      }
      driveRes = await fetch(retry.url, {
        method: "GET",
        headers: retryHeaders,
      });
      if (!driveRes.ok && driveRes.status !== 206) {
        return res.status(driveRes.status).send("Failed to stream from remote file storage.");
      }
    }

    // Step 4: Map status, copy headers, and pipe stream chunks directly to bypass any memory buffers:
    const contentType = driveRes.headers.get("content-type") || "video/mp4";
    const contentLength = driveRes.headers.get("content-length");
    const contentRange = driveRes.headers.get("content-range");
    const acceptRanges = driveRes.headers.get("accept-ranges");

    res.setHeader("Content-Disposition", "inline");
    res.setHeader("Content-Type", contentType.includes("text/html") ? "video/mp4" : contentType);
    if (contentLength) res.setHeader("Content-Length", contentLength);
    if (contentRange) res.setHeader("Content-Range", contentRange);
    res.setHeader("Accept-Ranges", acceptRanges || "bytes");

    res.status(driveRes.status);

    if (driveRes.body) {
      Readable.fromWeb(driveRes.body as any).pipe(res);
    } else {
      res.end();
    }
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
