import { motion, AnimatePresence } from 'motion/react';
import { Activity, Wind, Sparkle, Check, X, Play, Pause, Volume2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import wellnessCompanion from '../assets/images/wellness_companion_character_1779008484828.png';
import vaaniResonance from '../assets/images/vaani_vocal_resonance_1779011238955.png';
import verveConnection from '../assets/images/verve_energy_connection_1779011260055.png';
import vibesResonance from '../assets/images/vibes_neural_resonance_1779011276325.png';
import vsyncHeroAbstract from '../assets/images/vsync_hero_abstract_1779006839698.png';

const tutorialSteps = [
  {
    id: 1,
    title: "Choose a distraction-free environment",
    description: "Find a quiet, comfortable space where you won't be interrupted during your V-sync session.",
    details: "Minimizing external auditory interference keeps your resonance calibration pure."
  },
  {
    id: 2,
    title: "Plug-in good-quality mic/headphones",
    description: "Use quality audio equipment to ensure clear sound transmission and reception.",
    details: "Optimal physical equipment captures micro-vocal vibrations precisely."
  },
  {
    id: 3,
    title: "Select your mode: Host/Joinee/Instant",
    description: "Choose whether you want to host a session, join someone else's, or use instant mode on the same device.",
    details: "Custom session links allow physiological sync across distances."
  },
  {
    id: 4,
    title: "Click a selfie & Press Record Audio",
    description: "Take a photo to feel your partner's presence and start recording audio for synchronization.",
    details: "Capturing a visual moment triggers emotional focus before audio synthesis."
  },
  {
    id: 5,
    title: "Take a deep breath & Start humming",
    description: "Breathe deeply and begin humming like 'hmmmmmmmmmm...' to create the synchronization sound.",
    details: "The bi-layered algorithm records deep vocal alignment across key frequencies."
  },
  {
    id: 6,
    title: "Check the pop-up spectrogram",
    description: "Monitor the visual spectrogram display and click 'Proceed - V-sync' when ready.",
    details: "Verify visual acoustic response cycles before calculating match indexes."
  },
  {
    id: 7,
    title: "Perfect synchronization achieved!",
    description: "Outstanding! Your bio-resonance is locked at 98.4% alignment. Your vibe report is ready.",
    details: "Your voice and heart cycles are verified in pristine physiological harmony."
  }
];

const getStepCircleColor = (step: number) => {
  switch (step) {
    case 1: return "bg-[#2563eb]"; // Strong blue
    case 2: return "bg-[#12b76a]"; // Emerald green
    case 3: return "bg-[#9333ea]"; // Vibrant purple
    case 4: return "bg-[#f97316]"; // Vivid orange
    case 5: return "bg-[#0d9488]"; // Teal
    case 6: return "bg-[#db2777]"; // Magenta pink
    case 7: return "bg-[#f59e0b]"; // Warm gold
    default: return "bg-[#2563eb]";
  }
};

const renderStepIcon = (step: number) => {
  switch (step) {
    case 1:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-pink-300/10 rounded-full blur-xl animate-pulse" />
          <motion.img
            key={step}
            initial={{ scale: 0.9, rotate: -2, y: 5 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            src={wellnessCompanion}
            alt="Meditation Character Companion"
            className="w-28 h-28 object-contain z-10 select-none"
          />
        </div>
      );
    case 2:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-emerald-300/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-lg z-10"
          >
            <defs>
              <linearGradient id="silverGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <linearGradient id="innerPadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
            </defs>
            <path
              d="M 32 76 C 32 32, 96 32, 96 76"
              stroke="url(#silverGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 32 76 C 32 32, 96 32, 96 76"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              opacity="0.6"
            />
            <rect x="18" y="64" width="22" height="38" rx="11" fill="url(#silverGrad)" stroke="#d1d5db" strokeWidth="2" />
            <rect x="24" y="70" width="10" height="26" rx="5" fill="url(#innerPadGrad)" />
            <rect x="88" y="64" width="22" height="38" rx="11" fill="url(#silverGrad)" stroke="#d1d5db" strokeWidth="2" />
            <rect x="94" y="70" width="10" height="26" rx="5" fill="url(#innerPadGrad)" />
            <rect x="26" y="58" width="6" height="12" rx="3" fill="#9ca3af" />
            <rect x="96" y="58" width="6" height="12" rx="3" fill="#9ca3af" />
          </motion.svg>
        </div>
      );
    case 3:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-purple-300/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-lg z-10"
          >
            <defs>
              <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="60%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id="indigoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="60%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
            </defs>
            <g transform="translate(-10, 0)">
              <circle cx="58" cy="46" r="18" fill="url(#purpleGrad)" />
              <path d="M30 90 C30 72, 42 66, 58 66 C74 66, 86 72, 86 90 V96 H30 V90 Z" fill="url(#purpleGrad)" />
            </g>
            <g transform="translate(14, 4)">
              <circle cx="58" cy="46" r="18" fill="url(#indigoGrad)" stroke="#ffffff" strokeWidth="3" />
              <path d="M30 90 C30 72, 42 66, 58 66 C74 66, 86 72, 86 90 V96 H30 V90 Z" fill="url(#indigoGrad)" stroke="#ffffff" strokeWidth="3" />
            </g>
          </motion.svg>
        </div>
      );
    case 4:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-orange-300/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-lg z-10"
          >
            <defs>
              <linearGradient id="camBodyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
              <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            <rect x="20" y="44" width="88" height="56" rx="14" fill="url(#camBodyGrad)" stroke="#374151" strokeWidth="2" />
            <rect x="36" y="34" width="22" height="10" rx="4" fill="#6b7280" />
            <circle cx="86" cy="36" r="6" fill="#ef4444" />
            <circle cx="64" cy="72" r="24" fill="#1f2937" stroke="#4b5563" strokeWidth="3" />
            <circle cx="64" cy="72" r="17" fill="url(#lensGrad)" />
            <circle cx="58" cy="66" r="6" fill="#ffffff" opacity="0.4" />
            <path
              d="M20 28 L23 18 L33 15 L23 12 L20 2 L17 12 L7 15 L17 18 Z"
              fill="url(#starGrad)"
              className="animate-pulse"
            />
          </motion.svg>
        </div>
      );
    case 5:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-teal-300/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-lg z-10"
          >
            <defs>
              <linearGradient id="musicGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>
            <ellipse cx="38" cy="88" rx="15" ry="11" fill="url(#musicGrad)" transform="rotate(-15, 38, 88)" />
            <ellipse cx="88" cy="78" rx="15" ry="11" fill="url(#musicGrad)" transform="rotate(-15, 88, 78)" />
            <rect x="47" y="36" width="6" height="52" fill="url(#musicGrad)" />
            <rect x="97" y="26" width="6" height="52" fill="url(#musicGrad)" />
            <path
              d="M47 36 L103 26 V36 L47 46 Z"
              fill="url(#musicGrad)"
            />
          </motion.svg>
        </div>
      );
    case 6:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-pink-300/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-lg z-10"
          >
            <defs>
              <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#e5e7eb" />
              </linearGradient>
              <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
              <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="88" height="88" rx="20" fill="url(#cardGrad)" stroke="#d1d5db" strokeWidth="2" />
            <line x1="20" y1="42" x2="108" y2="42" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="20" y1="64" x2="108" y2="64" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="20" y1="86" x2="108" y2="86" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="49" y1="20" x2="49" y2="108" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1="79" y1="20" x2="79" y2="108" stroke="#e5e7eb" strokeWidth="1.5" />
            
            <rect x="32" y="48" width="12" height="46" rx="4" fill="url(#bar1)" />
            <rect x="58" y="68" width="12" height="26" rx="4" fill="url(#bar2)" />
            <rect x="84" y="34" width="12" height="60" rx="4" fill="url(#bar3)" />
          </motion.svg>
        </div>
      );
    default:
      return (
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-[#fde047]/10 rounded-full blur-xl animate-pulse" />
          <motion.svg
            key={step}
            initial={{ scale: 0.9, y: 5 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            width="112"
            height="112"
            viewBox="0 0 128 128"
            fill="none"
            className="w-28 h-28 drop-shadow-xl z-10 animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <linearGradient id="checkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
            <path
              d="M64 12 L78 44 L112 48 L86 72 L94 106 L64 88 L34 106 L42 72 L16 48 L50 44 Z"
              fill="url(#goldGrad)"
              opacity="0.3"
            />
            
            <circle cx="64" cy="64" r="32" fill="url(#checkGrad)" stroke="#ffffff" strokeWidth="4" />
            <path
              d="M48 64 L58 74 L80 50"
              stroke="#ffffff"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      );
  }
};

export default function VSyncPage() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsPurchaseOpen(false);
    }, 3000);
  };

  useEffect(() => {
    let timer: any;
    if (isAutoPlay && isTutorialOpen) {
      timer = setInterval(() => {
        setAutoPlayProgress((prev) => {
          if (prev >= 100) {
            setCurrentStep((step) => (step < 7 ? step + 1 : 1));
            return 0;
          }
          return prev + 2; // 50 increments * 90ms = 4.5 seconds per step
        });
      }, 90);
    } else {
      setAutoPlayProgress(0);
    }
    return () => clearInterval(timer);
  }, [isAutoPlay, isTutorialOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    const action = params.get('action');
    if (action === 'subscribe') {
      setIsPurchaseOpen(true);
    } else if (action === 'quickstart' || action === 'quick-start' || action === 'tutorial') {
      setIsTutorialOpen(true);
      setCurrentStep(1);
      setIsAutoPlay(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff7eb3] via-[#ff529a] to-[#913fc1] text-white font-sans selection:bg-white/30 selection:text-white overflow-x-hidden relative">
      
      {/* Advanced Animated Mesh Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-700/50 blur-[140px] mix-blend-overlay animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff7eb3]/60 blur-[140px] mix-blend-overlay animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-violet-500/40 blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[20%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-purple-900/30 blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-white opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Logo & Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col space-y-4">
                {/* Logo Row containing Left ECG, "sync", Right ECG */}
                <div className="flex items-center select-none">
                  {/* Left ECG Pulse */}
                  <svg width="130" height="90" viewBox="0 0 130 90" className="shrink-0 -mr-4">
                    <path
                      d="M 10 45 L 35 45 L 42 25 L 49 65 L 54 45 L 64 45 L 72 15 L 81 80 L 89 45 L 95 52 L 100 38 L 105 45 L 130 45"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* "sync" Cursive text */}
                  <span 
                    style={{ fontFamily: '"Dancing Script", "Satisfy", "Great Vibes", cursive' }}
                    className="text-8xl md:text-9xl text-white font-normal leading-none tracking-normal drop-shadow-[0_4px_24px_rgba(255,255,255,0.6)] select-text py-2"
                  >
                    sync
                  </span>

                  {/* Right ECG Pulse */}
                  <svg width="130" height="90" viewBox="0 0 130 90" className="shrink-0 -ml-4">
                    <path
                      d="M 0 45 L 25 45 L 32 30 L 39 60 L 44 45 L 53 45 L 61 10 L 70 85 L 77 45 L 83 52 L 88 38 L 93 45 L 120 45"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Subtitle "vaani, verve & vibes" below it, beautifully cursive */}
                <p 
                  style={{ fontFamily: '"Dancing Script", "Satisfy", cursive' }}
                  className="text-4xl md:text-5xl text-pink-300 font-bold italic tracking-wide pl-12 md:pl-24 -mt-4 select-text drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]"
                >
                  vaani, verve & vibes
                </p>
              </div>

              {/* Quick Start Button */}
              <div className="pt-8 pl-12 md:pl-24">
                <motion.button 
                  onClick={() => { setIsTutorialOpen(true); setCurrentStep(1); setIsAutoPlay(false); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-14 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl rounded-[24px] shadow-[0_12px_32px_rgba(219,39,119,0.4)] transition-all tracking-wider overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10 flex items-center gap-3">
                    Quick Start
                    <Sparkle className="w-5 h-5 text-pink-200" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Waveform Design Illustration (Right Side) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end select-none">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative max-w-[560px] w-full transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default flex flex-col items-center"
            >
              
              {/* Traditional Highly Designed Premium Border Frame Container */}
              <div className="relative w-full p-5 md:p-6 rounded-[36px] bg-gradient-to-br from-white/20 via-pink-400/10 to-purple-950/40 backdrop-blur-md border-2 border-white/25 shadow-[0_30px_60px_rgba(145,63,193,0.35)] overflow-hidden group">
                {/* Traditional Decorative Corner Flourishes */}
                {/* Top-Left */}
                <div className="absolute top-3 left-3 w-10 h-10 text-pink-200 pointer-events-none opacity-85 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 3H3v19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7H7v7" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                {/* Top-Right */}
                <div className="absolute top-3 right-3 w-10 h-10 text-pink-200 pointer-events-none opacity-85 rotate-90 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 3H3v19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7H7v7" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                {/* Bottom-Left */}
                <div className="absolute bottom-3 left-3 w-10 h-10 text-pink-200 pointer-events-none opacity-85 -rotate-90 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 3H3v19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7H7v7" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                {/* Bottom-Right */}
                <div className="absolute bottom-3 right-3 w-10 h-10 text-pink-200 pointer-events-none opacity-85 rotate-180 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 3H3v19" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7H7v7" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                  </svg>
                </div>

                {/* Inner Elegant Dual Border Linings */}
                <div className="absolute inset-2 border border-white/10 rounded-[28px] pointer-events-none" />
                <div className="absolute inset-1 border border-white/5 rounded-[32px] pointer-events-none" />

                {/* Actual Image Canvas with Beveled Border */}
                <div className="relative w-full overflow-hidden rounded-[24px] bg-white/95 p-1 border-2 border-white/40 shadow-inner">
                  <img
                    src="https://lh3.googleusercontent.com/d/100W_ECAR0u7iK2GhdcA7v5PWU3pXsrpL"
                    alt="V-sync Original Concept Canvas"
                    className="w-full h-auto object-cover select-none opacity-95 mix-blend-multiply rounded-[18px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              {/* Artistic Concept Blueprint Footer */}
              <div className="mt-8 flex flex-col items-center justify-center space-y-3">
                <div className="flex flex-col items-center space-y-1">
                  <span className="font-mono text-xs tracking-[0.3em] text-white/50 font-bold uppercase text-center">
                    ORIGINAL ARCHITECTURE
                  </span>
                  <span className="text-xl font-bold text-white tracking-wide text-center drop-shadow-md">
                    V-sync Concept Sketch
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-lg shadow-pink-500/20 mt-2">
                  <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" />
                  <span style={{ fontFamily: '"Dancing Script", cursive' }} className="text-white text-base font-bold tracking-wide">
                    Vibe Check ✨
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section: Unleash the vibe check */}
      <section className="py-32 px-6 md:px-20 bg-transparent text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white font-sans">
              Unleash the vibe check with V-sync!
            </h2>
            <p className="text-xl font-medium text-slate-100 leading-relaxed max-w-xl">
              V-sync, powered by its bi-layered sync algorithm, is the world's first relationship wellness platform that calculates your vibe check through your voice! ✨
            </p>
            <div className="space-y-6">
              {[
                "It's real, it's revolutionary, and it's here!",
                "So, what are you waiting for?",
                "Simply hummmmmmmmm........"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-300" />
                  </div>
                  <span className="text-lg font-bold text-white leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Screenshot 2 card displaying group of friends illustration */}
            <div className="bg-white/10 rounded-[40px] p-6 shadow-2xl border border-white/15 transition-all hover:border-white/35 hover:shadow-pink-900/50 max-w-lg w-full">
              <img 
                src="https://vsync.techatriocare.com/images/hero_img.6fba446ac70512eafbe3.gif" 
                alt="Forget awkward quizzes and guesswork" 
                className="w-full h-auto rounded-[24px] shadow-sm object-cover bg-white/5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 px-6 md:px-20 bg-transparent text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            {/* Smartphone interface mock */}
            <div className="rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(219,39,119,0.3)] bg-white/10 backdrop-blur-3xl p-4 md:p-6 border-2 border-white/30 max-w-sm md:max-w-md w-full">
              <img 
                src="https://lh3.googleusercontent.com/d/1kaA3w8Csifw6_D7YnG3PSEW1rmqO70LP"
                alt="Smartphone Interface" 
                className="w-full h-auto rounded-[36px] object-cover bg-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
              How It Works?
            </h2>
            <div className="space-y-10">
              {[
                { t: "Record", d: "Record a short hum into your phone." },
                { t: "Analyze", d: "Our bi-layered sync algorithm analyzes your voice and calculates your vibe compatibility with friends, dates, or anyone!" },
                { t: "Results", d: "Get real-time results and know instantly if you're riding the same wavelength." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-purple-700 shadow-lg group-hover:scale-110 transition-transform">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-extrabold text-white uppercase tracking-wider">
                        {step.t}
                      </span>
                    </div>
                    <p className="text-xl md:text-2xl font-bold leading-snug text-white">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-20 bg-white/5 backdrop-blur-xl border-y border-white/10 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">Client Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { q: "V-sync offered a refreshingly new approach and an innovative idea. Fun-loving experience...", a: "Satyam & Sanya" },
              { q: "Absolutely fascinating tech experience! Just a simple 'hmmm' sound let me match vibes in a minute. Mind-blowing and truly amazing!", a: "Tanish & Saurabh" },
              { q: "I had a wonderful experience using the first-ever Vibe Checker tool. It can help me find my vibe with anyone. Truly fascinating!", a: "Yash & Yashika" }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white/15 p-10 rounded-[32px] border border-white/20 shadow-xl flex flex-col justify-between hover:scale-[1.02] hover:border-white/30 hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-xl font-semibold text-white leading-relaxed mb-12">"{t.q}"</p>
                <div className="flex flex-col items-end">
                   <div className="h-0.5 w-12 bg-white/35 mb-4" />
                   <span className="text-base font-extrabold uppercase tracking-widest text-pink-200">— {t.a}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaani, Verve, Vibes (Hindi sections) */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-20 bg-transparent space-y-20 md:space-y-40 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Vaani */}
          <div className="grid lg:grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-6 sm:space-y-12">
              <h2 className="text-4xl sm:text-8xl md:text-[160px] font-black text-white leading-none tracking-tighter drop-shadow-[0_8px_32px_rgba(76,29,149,0.5)] select-none">वाणी</h2>
              <div className="space-y-4 sm:space-y-6">
                 <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                   In Hindi, the word "Vaani" (वाणी) translates to "speech" or "voice".
                 </p>
                 <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100 leading-relaxed max-w-2xl">
                   Using your voice (Vaani) as a guide, our 2-tier algorithm will help you and your loved ones test your physiological synchrony. By processing and analyzing the heart rate and breathing rate patterns from the humming voice data, this product can help you find the synchronization % with your significant other, family, and friends.
                 </p>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="rounded-[32px] sm:rounded-[48px] md:rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(219,39,119,0.4)] bg-white/10 backdrop-blur-3xl border-2 border-white/40 p-4 flex flex-col items-center justify-center aspect-square relative group isolate"
            >
               <div className="absolute inset-0 rounded-[28px] sm:rounded-[44px] md:rounded-[56px] bg-gradient-to-br from-pink-500/20 to-purple-600/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <img 
                 src={vaaniResonance} 
                 alt="Vaani Vocal Resonance" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[28px] sm:rounded-[44px] md:rounded-[56px] -z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-purple-900/30 to-transparent -z-10 rounded-[28px] sm:rounded-[44px] md:rounded-[56px]"></div>
               <h3 className="w-full text-center text-4xl sm:text-7xl md:text-8xl font-serif text-white tracking-widest drop-shadow-[0_8px_24px_rgba(255,255,255,0.4)] z-10 font-bold group-hover:scale-110 transition-transform duration-500">Vaani</h3>
            </motion.div>
          </div>

          {/* Verve */}
          <div className="grid lg:grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="order-2 lg:order-1 rounded-[32px] sm:rounded-[48px] md:rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(219,39,119,0.4)] bg-white/10 backdrop-blur-3xl border-2 border-white/40 p-4 flex flex-col items-center justify-center aspect-square relative group isolate"
            >
               <div className="absolute inset-0 rounded-[28px] sm:rounded-[44px] md:rounded-[56px] bg-gradient-to-br from-pink-500/20 to-purple-600/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <img 
                 src={verveConnection} 
                 alt="Verve Energy Connection" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[28px] sm:rounded-[44px] md:rounded-[56px] -z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-purple-900/30 to-transparent -z-10 rounded-[28px] sm:rounded-[44px] md:rounded-[56px]"></div>
               <h3 className="w-full text-center text-4xl sm:text-7xl md:text-8xl font-serif text-white tracking-widest drop-shadow-[0_8px_24px_rgba(255,255,255,0.4)] z-10 font-bold group-hover:scale-110 transition-transform duration-500">Verve</h3>
            </motion.div>
            <div className="space-y-6 sm:space-y-12 order-1 lg:order-2">
              <h2 className="text-4xl sm:text-8xl md:text-[160px] font-black text-white leading-none tracking-tighter drop-shadow-[0_8px_32px_rgba(76,29,149,0.5)] select-none">उत्साह</h2>
              <div className="space-y-4 sm:space-y-6">
                 <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                   "Verve" is the dynamic and energetic quality of interpersonal connections.
                 </p>
                 <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100 leading-relaxed max-w-2xl">
                   It denotes the existence of vibrant and engaged interactions. It suggests a sense of excitement, passion, and positive engagement, which can help to synchronize physiological responses or improve the quality of interpersonal interactions.
                 </p>
              </div>
            </div>
          </div>

          {/* Vibes */}
          <div className="grid lg:grid-cols-2 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-6 sm:space-y-12">
              <h2 className="text-4xl sm:text-8xl md:text-[160px] font-black text-white leading-none tracking-tighter drop-shadow-[0_8px_32px_rgba(76,29,149,0.5)] select-none">तरंग</h2>
              <div className="space-y-4 sm:space-y-6">
                 <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                   "Vibes" is the emotional and intuitive energy detected in a person or setting.
                 </p>
                 <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100 leading-relaxed max-w-2xl">
                   In the context of physiological synchrony, "vibes" refer to the emotional and energetic resonance or connection that persons feel. It is about the intuitive wavelength that connects two souls instantly through vocal resonance.
                 </p>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="rounded-[32px] sm:rounded-[48px] md:rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(219,39,119,0.4)] bg-white/10 backdrop-blur-3xl border-2 border-white/40 p-4 flex flex-col items-center justify-center aspect-square relative group isolate"
            >
               <div className="absolute inset-0 rounded-[28px] sm:rounded-[44px] md:rounded-[56px] bg-gradient-to-br from-pink-500/20 to-purple-600/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <img 
                 src={vibesResonance} 
                 alt="Vibes Neural Resonance" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[28px] sm:rounded-[44px] md:rounded-[56px] -z-10 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-purple-900/30 to-transparent -z-10 rounded-[28px] sm:rounded-[44px] md:rounded-[56px]"></div>
               <h3 className="w-full text-center text-4xl sm:text-7xl md:text-8xl font-serif text-white tracking-widest drop-shadow-[0_8px_24px_rgba(255,255,255,0.4)] z-10 font-bold group-hover:scale-110 transition-transform duration-500">Vibes</h3>
            </motion.div>
          </div>
        </div>
      </section>



      <AnimatePresence>
        {isTutorialOpen && (
          <motion.div
            key="vsync-tutorial-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[250] bg-gradient-to-br from-[#b05fda] via-[#fb52ab] to-[#ffa36c] flex flex-col justify-between p-4 md:p-8 overflow-y-auto font-sans selection:bg-white/20 select-none"
          >
            
            {/* Close Button */}
            <button
              onClick={() => {
                setIsTutorialOpen(false);
                setIsAutoPlay(false);
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20 z-[260] shadow-sm"
              title="Close Tutorial"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Top Mock Header to match the exact browser screenshot navigation */}
            <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-4 md:px-8 z-10 shrink-0">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <svg width="45" height="30" viewBox="0 0 60 40" className="stroke-white stroke-[3.5] fill-none shrink-0">
                    <path d="M 5 20 L 15 20 L 18 10 L 22 30 L 25 20 L 32 20 L 36 5 L 42 35 L 46 20 L 55 20" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span 
                    style={{ fontFamily: '"Dancing Script", "Satisfy", "Great Vibes", cursive' }}
                    className="text-4xl text-white font-normal ml-1"
                  >
                    sync
                  </span>
                </div>
              </div>

              {/* Navigation links & Login button */}
              <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
                <button onClick={() => { setIsTutorialOpen(false); }} className="hover:text-white transition-colors animate-fade-in">Home</button>
                <button onClick={() => { setIsTutorialOpen(false); }} className="hover:text-white transition-colors animate-fade-in">Contact</button>
                <button onClick={() => { setIsTutorialOpen(false); }} className="hover:text-white transition-colors animate-fade-in">About Us</button>
                <button onClick={() => { setIsTutorialOpen(false); }} className="hover:text-white transition-colors animate-fade-in">Team</button>
                <button onClick={() => { setIsTutorialOpen(false); }} className="hover:text-white transition-colors animate-fade-in">Blog</button>
                <button 
                  onClick={() => { setIsTutorialOpen(false); }} 
                  className="px-6 py-2 bg-[#8b31f0] hover:bg-[#7c26df] active:scale-95 transition-all text-white font-semibold rounded-xl text-sm"
                >
                  Login
                </button>
              </div>
            </header>

            {/* Main Content Area */}
            <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center my-6">
              
              {/* Steps & Progress Section */}
              <div className="w-full mt-4 mb-4">
                <div className="flex items-center justify-between text-white font-bold mb-3 text-base md:text-lg px-1">
                  <span className="font-sans font-bold tracking-tight text-white/95">Step {currentStep} of 7</span>
                  <div className="flex gap-2 items-center">
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => {
                      let dotColor = "bg-white/35";
                      if (index < currentStep - 1) {
                        dotColor = "bg-[#12b76a]"; // green
                      } else if (index === currentStep - 1) {
                        dotColor = "bg-[#ff6a1a]"; // orange
                      }
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setIsAutoPlay(false);
                            setCurrentStep(index + 1);
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${dotColor}`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="w-full h-3.5 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff6a1a] to-[#ff3b46] rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / 7) * 100}%` }}
                  />
                </div>
              </div>

              {/* Main Step Detail Card */}
              <div className="w-full bg-[#fdf2f4]/95 backdrop-blur-md rounded-[32px] md:rounded-[40px] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-white/40 flex items-center min-h-[300px]">
                {/* Decorative shapes to match browser container details */}
                <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-blue-300/10 blur-2xl pointer-events-none" />
                <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#eb7cd5]/15 blur-3xl pointer-events-none" />
                
                <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-14 relative z-10">
                  {/* Step Circle & Step Icon Row */}
                  <div className="flex items-center gap-6 md:gap-8 shrink-0 w-full md:w-auto justify-center md:justify-start">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full text-white font-extrabold text-4xl sm:text-5xl flex items-center justify-center shadow-lg shrink-0 transition-colors duration-300 ${getStepCircleColor(currentStep)}`}>
                      {currentStep}
                    </div>
                    
                    <div className="shrink-0 animate-scale-up">
                      {renderStepIcon(currentStep)}
                    </div>
                  </div>

                  {/* Instruction Text Block */}
                  <div className="space-y-4 text-center md:text-left flex-1">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-none tracking-tight font-sans">
                      {tutorialSteps[currentStep - 1].title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed font-sans">
                      {tutorialSteps[currentStep - 1].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Control buttons */}
              <div className="w-full flex items-center justify-between gap-1.5 sm:gap-4 mt-8 mb-4">
                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    if (currentStep > 1) setCurrentStep(currentStep - 1);
                  }}
                  disabled={currentStep === 1}
                  className={`px-3.5 sm:px-10 py-2.5 sm:py-4 rounded-full font-bold text-xs sm:text-base tracking-wide transition-all whitespace-nowrap shrink-0 ${
                    currentStep === 1
                      ? "bg-white/10 text-white/30 cursor-not-allowed border border-transparent"
                      : "bg-white text-[#9333ea] hover:bg-slate-50 border border-white/30 active:scale-95 shadow-lg"
                  }`}
                >
                  ← <span className="hidden sm:inline">Previous</span><span className="sm:hidden">Prev</span>
                </button>

                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="px-3.5 sm:px-12 py-2.5 sm:py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-base tracking-wide rounded-full flex items-center justify-center gap-1 sm:gap-3.5 shadow-xl shadow-blue-500/20 border border-blue-400/30 transition-all active:scale-95 animate-pulse-slow shrink-0 whitespace-nowrap"
                >
                  {isAutoPlay ? (
                    <>
                      <Pause className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white text-white" />
                      <span>Pause <span className="hidden sm:inline">({Math.round(100 - autoPlayProgress)}%)</span></span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white text-white" />
                      <span>Auto <span className="hidden sm:inline">Play</span></span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    if (currentStep < 7) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      setIsTutorialOpen(false);
                    }
                  }}
                  className="px-4 sm:px-12 py-2.5 sm:py-4 bg-gradient-to-r from-[#ff5722] to-[#ff424e] hover:from-[#f44e18] hover:to-[#eb3440] text-white font-bold text-xs sm:text-base tracking-wide rounded-full shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all active:scale-95 whitespace-nowrap shrink-0"
                >
                  {currentStep === 7 ? "Complete ✨" : (
                    <>
                      <span className="hidden sm:inline">Next →</span>
                      <span className="sm:hidden">Next</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Bottom Footer Notice */}
            <div className="w-full text-center mt-4 mb-4 z-10 shrink-0 select-text">
              <p className="text-white/80 font-medium text-sm md:text-base tracking-wide">
                Host: Host V-sync and share the code with joinee.
              </p>
            </div>

          </motion.div>
        )}

        {isPurchaseOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPurchaseOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="relative w-full max-w-xl bg-rose-950/95 rounded-[60px] p-12 md:p-24 shadow-3xl border border-white/10 text-white"
            >
              <button 
                onClick={() => setIsPurchaseOpen(false)}
                className="absolute top-12 right-12 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-black uppercase tracking-tighter italic text-white">Initialize Node</h3>
                {isSubmitted ? (
                   <div className="py-10 text-rose-300 font-bold">Request Transmitted. Check your link.</div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <input required type="text" placeholder="IDENTIFY" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full outline-none font-bold text-white focus:border-rose-400 placeholder-white/30" />
                     <input required type="email" placeholder="EMAIL@SYNC.NODE" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full outline-none font-bold text-white focus:border-rose-400 placeholder-white/30" />
                     <button type="submit" className="w-full py-6 bg-white text-rose-950 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-rose-100 transition-all">Request Access</button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
