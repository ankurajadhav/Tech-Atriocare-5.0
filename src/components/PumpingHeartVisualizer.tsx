import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Cpu, Radio, Wind } from "lucide-react";
import anatomicalLungsImage from "../assets/images/clinical_glowing_3d_lungs_1781034540885.png";

export default function PumpingHeartVisualizer() {
  const [breathRate, setBreathRate] = useState(14);
  const [o2Sat, setO2Sat] = useState(98);
  const [tidalVolume, setTidalVolume] = useState(508);
  const [capacity, setCapacity] = useState(95);

  // Fluctuating medical respiratory stats for clean professionalism
  useEffect(() => {
    const interval = setInterval(() => {
      setBreathRate((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 16 ? 16 : next < 12 ? 12 : next;
      });
      setO2Sat((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 99 ? 99 : next < 97 ? 97 : next;
      });
      setTidalVolume((prev) => {
        const delta = Math.floor(Math.random() * 11) - 5;
        const next = prev + delta;
        return next > 520 ? 520 : next < 495 ? 495 : next;
      });
      setCapacity((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        const next = prev + delta;
        return next > 98 ? 98 : next < 93 ? 93 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-[48px] bg-white/90 backdrop-blur-xl border border-sky-100 p-8 shadow-[0_25px_60px_-15px_rgba(14,165,233,0.12)] overflow-hidden flex flex-col justify-between group">
      
      {/* 1. High-Tech Clinical Grid Background & Radar lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundSize: "32px 32px", backgroundImage: "radial-gradient(#0ea5e9 1px, transparent 1px)" }} />
        {/* Radar scanning circle */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-sky-200/40" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-dashed border-sky-200/30" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-sky-100/50" />
        
        {/* Animated fluid scanning signal */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "45%" }}
          className="absolute top-[45%] left-1/2 w-[220px] h-[1px] bg-gradient-to-r from-sky-400/0 to-sky-400/20 opacity-70 pointer-events-none"
        />

        {/* Ambient clinical background blur circles */}
        <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] bg-sky-200/25 blur-[80px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[220px] h-[220px] bg-teal-200/20 blur-[90px] rounded-full" />
      </div>

      {/* 2. Top Respiratory Diagnostics Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 relative">
            <Radio className="w-5 h-5 text-brand-teal animate-pulse" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-400 border border-white animate-ping" />
          </div>
          <div>
            <h4 className="text-[11px] font-black tracking-[0.2em] text-brand-teal uppercase leading-none mb-1">
              RESPIRATORY TELEMETRY
            </h4>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none block">
                Pulmonary Wave Active
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            </div>
          </div>
        </div>

        <div className="px-3 py-1 bg-sky-50 border border-sky-100 rounded-full flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-sky-500" />
          <span className="text-[9px] font-bold tracking-widest text-sky-600 uppercase">
            PULMO-SYSTEM V4.2
          </span>
        </div>
      </div>

      {/* 3. Central Breathing Lungs Animation */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-4">
        {/* Breathing aura rings (expand with lung capacity cycles) */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.04, 0.12],
          }}
          transition={{
            duration: 4.5, // Natural breathing cycle frequency
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-36 h-36 rounded-full bg-brand-teal/20 blur-[20px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1.35, 1.1],
            opacity: [0.08, 0.02, 0.08],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="absolute w-44 h-44 rounded-full bg-sky-300/15 blur-[25px]"
        />

        {/* Dynamic Breathing Lungs Container */}
        <motion.div
          animate={{
            // Slow, deep medical therapeutic inhalation & exhalation curve
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[340px] lg:h-[340px] select-none cursor-pointer flex items-center justify-center bg-sky-50/20 rounded-full border border-sky-100/30 p-1"
        >
          {/* Back light glow to make the lungs look extremely clinical and beautiful */}
          <div className="absolute w-64 h-64 rounded-full bg-sky-300/10 blur-3xl mix-blend-multiply pointer-events-none" />
          
          {/* Lungs image using mix-blend-multiply to completely disappear white background */}
          <img
            src={anatomicalLungsImage}
            alt="Anatomical Respiratory Lungs"
            className="w-full h-full object-contain scale-[1.25] filter drop-shadow-[0_4px_25px_rgba(14,165,233,0.25)] relative z-10 select-none mix-blend-multiply rounded-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600";
            }}
          />

          {/* Hover Overlay clinical status pointers */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-90">
            {/* Pulsing oxygen-intake/capillary nodes overlaid */}
            <span className="absolute top-[42%] left-[30%] w-3.5 h-3.5 rounded-full bg-teal-400 border border-white animate-ping" />
            <span className="absolute top-[42%] left-[30%] w-2.5 h-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf]" />

            <span className="absolute bottom-[35%] right-[32%] w-3.5 h-3.5 rounded-full bg-sky-400 border border-white animate-ping" />
            <span className="absolute bottom-[35%] right-[32%] w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
            
            <span className="absolute top-[28%] left-[49%] w-4 h-4 rounded-full bg-emerald-400 border border-white animate-pulse" />
            <span className="absolute top-[28%] left-[49%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          </div>

          {/* Centered Digital telemetry text on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <span className="text-[10px] font-black tracking-widest text-slate-800 uppercase bg-white/95 px-3 py-1.5 rounded-full border border-sky-100 shadow-[0_10px_25px_rgba(14,165,233,0.15)]">
              RESTORATION MODE: CALIBRATED
            </span>
          </div>
        </motion.div>

        {/* Respiratory flow lines beside lungs */}
        <div className="absolute left-6 right-6 top-[40%] flex justify-between pointer-events-none opacity-50">
          <div className="space-y-1.5">
            <div className="w-10 h-[1.5px] bg-sky-300" />
            <div className="w-14 h-[1.5px] bg-sky-400" />
            <div className="w-8 h-[1.5px] bg-sky-200" />
          </div>
          <div className="space-y-1.5 text-right">
            <div className="w-14 h-[1.5px] bg-sky-400 right-0 ml-auto" />
            <div className="w-10 h-[1.5px] bg-sky-300 right-0 ml-auto" />
            <div className="w-6 h-[1.5px] bg-sky-200 right-0 ml-auto" />
          </div>
        </div>
      </div>

      {/* 4. Beautiful Capnogram/Spirogram respiration waves */}
      <div className="relative z-10 w-full bg-sky-50/50 border border-sky-100/85 rounded-2xl h-14 overflow-hidden mb-4 flex items-center">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.05] bg-grid-slate-900" style={{ backgroundSize: "10px 10px" }} />
        
        {/* Soft, wave representing steady breathing */}
        <svg viewBox="0 0 350 40" className="w-full h-full text-brand-teal font-bold overflow-visible">
          <defs>
            <linearGradient id="respiroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#14b8a6" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,20 
               Q 25,5 50,20 
               T 100,20 
               T 150,20 
               T 200,20 
               T 250,20 
               T 300,20 
               T 350,20"
            stroke="url(#respiroGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{
              x: [-100, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        <span className="absolute right-4 bottom-2 text-[8px] font-black text-brand-teal uppercase tracking-widest bg-white px-2 py-0.5 rounded-md border border-sky-100 shadow-sm">
          CAPNOGRAPHY • OPTIMAL LOBES
        </span>
      </div>

      {/* 5. Live Telemetry Respiratory Diagnostics */}
      <div className="relative z-10 grid grid-cols-4 gap-4 pt-2 border-t border-sky-100">
        <div className="space-y-0.5">
          <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-none">
            RESP. RATE
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-slate-800 font-display leading-none">
              {breathRate}
            </span>
            <span className="text-[8px] text-brand-teal font-black">Br/m</span>
          </div>
        </div>

        <div className="space-y-0.5">
          <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-none">
            O2 SATURATION
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-brand-teal font-display leading-none">
              {o2Sat}%
            </span>
            <span className="text-[8px] text-slate-400 font-black">SPO2</span>
          </div>
        </div>

        <div className="space-y-0.5">
          <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-none">
            TIDAL VOLUME
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-slate-800 font-display leading-none">
              {tidalVolume}
            </span>
            <span className="text-[8px] text-brand-teal font-black">mL</span>
          </div>
        </div>

        <div className="space-y-0.5">
          <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest leading-none">
            LUNG CAPACITY
          </p>
          <div className="flex items-baseline gap-1 text-teal-600">
            <ShieldCheck className="w-4 h-4 mr-0.5 text-teal-500" />
            <span className="text-[10px] font-black tracking-widest uppercase">
              {capacity}%
            </span>
          </div>
        </div>
      </div>

      {/* Modern interactive light edge glow */}
      <div className="absolute inset-0 rounded-[48px] border border-sky-50 pointer-events-none group-hover:border-sky-200 transition-colors duration-500" />
    </div>
  );
}
