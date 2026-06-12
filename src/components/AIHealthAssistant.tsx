import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Sparkles, X, BrainCircuit, Activity, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

export default function AIHealthAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);
  
  // Use lazy initialization for messages to check localStorage first
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('techAtriocareChatHistory');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse chat history', e);
        }
      }
    }
    return [
      { role: 'ai', content: "Welcome to Tech AtrioCare Support. I can assist with clinical analysis, rehabilitation advice, or general medical tech inquiries. How can I help you today?" }
    ];
  });
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('techAtriocareChatHistory', JSON.stringify(messages));
    }
    if (scrollRef.current) {
      // Use scrollTop for maximum cross-browser compatibility (iOS, old Safari, etc)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (messageOverride?: string) => {
    const userMessage = messageOverride || input;
    if (!userMessage.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Fast-path local intelligence pattern matching
    const getLocalResponse = (message: string, exactOnly: boolean = false) => {
      const lowerMsg = message.toLowerCase();
      
      if (lowerMsg.includes('haal chaal') || lowerMsg.includes('challenge')) {
        return "The **Haal-Chaal Pravartak 1.0** is India's First Immunity Challenge for Smarter Breathing. Participation fee is **INR 500/-**. Through this 7-day challenge, you'll perform humming exercises and daily wellness self-assessments to improve your respiratory health and track your Airway Patency Score.";
      } else if (lowerMsg.includes('v-sync') || lowerMsg.includes('vsync') || lowerMsg.includes('v sync')) {
        return "**V-sync** is our digital platform designed to offer seamless respiratory and health tracking. It helps patients manage and track their physiological data accurately.";
      } else if (lowerMsg.includes('novicule') || lowerMsg.includes('novicule-ta')) {
        return "**Novicule-TA** is our flagship hardware innovation—an advanced smart inhalation and diagnostic device for proactive pulmonary care.";
      } else if (lowerMsg.includes('who are you') || lowerMsg.includes('what are you') || lowerMsg.includes('name')) {
        return "I am the **Tech AtrioCare Support Assistant**, your clinical and technical helper. I am here to assist you with any questions regarding our innovations, challenges, and services.";
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('support') || lowerMsg.includes('phone')) {
        return "You can consult the Tech Atriocare support team anytime via email at **service.techatriocare@gmail.com** or visit our offices at Krastay, Saidulajab, New Delhi.";
      } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('fee')) {
        return "The only active challenge right now is the Haal-Chaal Pravartak Challenge with a participation fee of **INR 500/-**.";
      } else if (lowerMsg.includes('prize') || lowerMsg.includes('win') || lowerMsg.includes('reward')) {
        return "The Haal-Chaal Pravartak challenge includes several prize tiers:\n\n- **Level 1 Winner:** INR 50,000\n- **Level 2 (10 participants):** INR 1,500 each\n- **Level 3 (20 participants):** INR 1,000 each\n- **Level 4 (30 participants):** INR 500 each\n\nThere are also separate prizes for referrals!";
      } else if (lowerMsg.includes('rule') || lowerMsg.includes('how to play') || lowerMsg.includes('activities') || lowerMsg.includes('humming')) {
        return "**Challenge Activities:**\n1. **Humming Voice Notes:** Send 7-second humming audios, 2 per slot, 3 times a day via WhatsApp.\n2. **Wellness Questionnaire:** Complete a daily self-assessment.\n3. **Daily Video Submission:** Share your experience on social media or WhatsApp.";
      } else if (lowerMsg.includes('health') || lowerMsg.includes('breathe') || lowerMsg.includes('lung') || lowerMsg.includes('respiratory')) {
        return "Respiratory health is central to what we do. Our products like Novicule-TA and V-sync are designed to optimize lung function directly, while Challenges like Haal-Chaal Pravartak encourage daily preventive habits like structured humming.";
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi ') || lowerMsg === 'hi' || lowerMsg.includes('hey')) {
        return "Hello! I am ready to assist you. Feel free to ask me questions about Haal-Chaal Pravartak, Novicule-TA, V-sync, or how to contact us!";
      } else if (exactOnly) {
        return null;
      } else {
        return "I'm currently operating in a focused mode and am best equipped to answer questions about the **Haal-Chaal Challenge**, **Novicule-TA**, **V-sync**, or general Tech AtrioCare services. How can I help you with those today?";
      }
    };

    setIsLoading(true);

    // Fast-path: Answer instantly directly from local database if we have a match
    const fastLocalMatch = getLocalResponse(userMessage, true);
    if (fastLocalMatch) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: fastLocalMatch }]);
        setIsLoading(false);
      }, 400); // Small natural delay
      return;
    }

    if (isOffline) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: getLocalResponse(userMessage) }]);
        setIsLoading(false);
      }, 400);
      return;
    }

    try {
      // Prepare history for backend/direct API
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: userMessage,
          history: history.slice(-6) // Send last 6 messages as context
        }),
      });

      if (!res.ok) {
        throw new Error('Non-ok response from server');
      }

      const textData = await res.text();
      let data;
      try {
        data = JSON.parse(textData);
      } catch {
        throw new Error('Invalid JSON response');
      }

      setMessages(prev => [...prev, { role: 'ai', content: data.text || data.error || getLocalResponse(userMessage) }]);
    } catch (error: any) {
      console.warn('API connection failed, falling back to local intelligence...', error);
      // Fast, accurate local fallback without exposing API errors to the user
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', content: getLocalResponse(userMessage) }]);
      }, 300);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click-away overlay for premium mobile & desktop focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-[115] cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.95 }}
              className="fixed bottom-0 right-0 left-0 sm:left-auto sm:bottom-24 sm:right-8 z-[120] w-full sm:w-[420px] h-[85dvh] sm:h-[650px] bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.12),0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:origin-bottom-right border border-slate-100 pb-[env(safe-area-inset-bottom)]"
            >
              {/* Optional Mobile Top Notch Handle */}
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-2 sm:hidden flex-shrink-0" />

              {/* Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-brand-blue to-brand-teal text-white flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <BrainCircuit className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide text-white">AtrioCare Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <span className={cn("w-2 h-2 rounded-full", isOffline ? "bg-amber-400" : "bg-green-400 animate-pulse")} />
                      <span className="text-[10px] uppercase tracking-wider font-bold opacity-95 text-[#e0f1f1]">
                        {isOffline ? "Offline Mode (Local)" : "Online Support"}
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 active:scale-95 transition-all text-xs font-black font-sans tracking-wide shadow-md select-none text-brand-blue cursor-pointer"
                  id="close-chat-btn"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-brand-blue stroke-[3px]" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* Messages */}
              <div 
                ref={scrollRef}
                className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar bg-slate-50 relative"
              >
                {messages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    key={i} 
                    className={cn(
                      "flex md:max-w-[85%] w-full gap-3",
                      msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
                    )}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm",
                      msg.role === 'user' ? "bg-slate-200 text-slate-600" : "bg-gradient-to-tr from-brand-blue to-brand-teal text-white"
                    )}>
                      {msg.role === 'user' ? (
                        <span className="text-xs font-bold uppercase">U</span>
                      ) : (
                        <BrainCircuit className="w-4 h-4" />
                      )}
                    </div>
                    
                    <div className={cn(
                      "flex flex-col min-w-0 max-w-[calc(100%-2.5rem)]",
                      msg.role === 'user' ? "items-end" : "items-start"
                    )}>
                      <div className={cn(
                        "p-3 sm:p-4 rounded-2xl text-sm leading-relaxed overflow-hidden",
                        msg.role === 'user' 
                          ? "bg-brand-teal text-white tracking-wide rounded-tr-none shadow-md shadow-brand-teal/10" 
                          : "bg-white border text-slate-800 rounded-tl-none shadow-sm border-slate-100"
                      )}>
                        {msg.role === 'user' ? msg.content : <div className="chat-markdown break-words"><ReactMarkdown>{msg.content}</ReactMarkdown></div>}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 uppercase font-mono tracking-tighter">
                        {msg.role === 'user' ? 'Sent' : 'AtrioCare Support'}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-brand-teal">
                    <Activity className="w-4 h-4 animate-spin" />
                    <span className="text-xs font-mono uppercase tracking-widest animate-pulse">Thinking...</span>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-6 py-3 border-t border-brand-border bg-slate-50 shadow-inner flex-shrink-0">
                {["What is the Haal-Chaal Challenge?", "What are the prizes?", "Participation Fee", "Contact Support"].map((qr) => (
                  <button
                    key={qr}
                    onClick={() => {
                      setInput(qr);
                      handleSend(qr);
                    }}
                    className="flex-shrink-0 whitespace-nowrap text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border shadow-sm border-brand-teal/20 bg-white text-brand-teal hover:bg-brand-teal hover:text-white transition-all active:scale-95"
                  >
                    {qr}
                  </button>
                ))}
              </div>
              <div className="p-4 sm:p-6 pt-3 sm:pt-4 bg-white flex-shrink-0">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask a question..."
                    className="w-full bg-slate-50 border border-brand-border rounded-xl py-3 sm:py-4 px-4 sm:px-6 pr-14 text-sm text-slate-900 focus:outline-none focus:border-brand-teal transition-colors shadow-inner"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={isLoading}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-brand-teal text-white rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between gap-4 text-gray-400">
                   <div className="flex items-center gap-2">
                     <HeartPulse className="w-3 h-3 text-brand-teal" />
                     <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.15em] opacity-80">Secure Connection</span>
                   </div>
                   <button 
                     onClick={() => setIsOpen(false)}
                     className="text-[10px] uppercase font-bold tracking-wider text-slate-500 hover:text-slate-800 transition-colors select-none cursor-pointer"
                     id="close-chat-bottom-text"
                   >
                     Minimize Chat
                   </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 bg-gradient-to-tr from-brand-blue to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl text-white relative group",
          isOpen ? "hidden" : "flex"
        )}
      >
        <div className="absolute inset-0 bg-brand-teal blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X className="stroke-[3px]" /> : <MessageSquare className="w-8 h-8" />}
      </motion.button>
    </div>
  );
}
