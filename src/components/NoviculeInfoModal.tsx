import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Dna, 
  ShieldCheck, 
  Heart, 
  Flame, 
  Award, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  TrendingDown,
  Info,
  ChevronRight
} from 'lucide-react';

interface NoviculeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'overview' | 'ingredients' | 'mechanism' | 'amr';
type IngredientName = 'L-Hydroxyproline' | 'L-Citrulline' | 'Vitamin C' | 'L-Glutamine';

export default function NoviculeInfoModal({ isOpen, onClose }: NoviculeInfoModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeIngredient, setActiveIngredient] = useState<IngredientName>('L-Citrulline');
  const [mechanismStep, setMechanismStep] = useState<number>(1);
  const [nitricOxideLevel, setNitricOxideLevel] = useState<number>(40);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const stats = [
    { label: "Sugar-Free Formulation", value: "Pure Formula", desc: "Completely sugar free & diabetic safe" },
    { label: "Innate Immune Efficacy", value: "Host-Directed", desc: "Stimulates natural physiological cell defenses" },
    { label: "Active Biocompounds", value: "Quad-Synergy", desc: "Four clinically selected cardiopulmonary nutrients" },
    { label: "Antimicrobial Resistance Risk", value: "None", desc: "Zero pathogen selective pressure or resistance" },
  ];

  const ingredientsData: Record<IngredientName, {
    icon: any;
    color: string;
    bgGradient: string;
    tagline: string;
    bullets: { title: string; desc: string }[];
    percentageEffect: number;
    effectLabel: string;
  }> = {
    'L-Citrulline': {
      icon: Heart,
      color: 'text-rose-500',
      bgGradient: 'from-rose-500/10 via-pink-500/5 to-transparent border-rose-100',
      tagline: 'Vital Cardiovascular & Nitric Oxide Engine',
      percentageEffect: 94,
      effectLabel: 'Nitric Oxide Enhancement',
      bullets: [
        { title: 'Nitric Oxide Production', desc: 'Precursor to L-Arginine, significantly boosting nitric oxide (NO) synthesize pathways.' },
        { title: 'Improved Blood Circulation', desc: 'Promotes vasodilation, easing tension on the vascular walls.' },
        { title: 'Oxygen Delivery', desc: 'Increases arterial oxygen carrying capacity to fatigue-depleted tissues.' },
        { title: 'Muscle Endurance & Fatigue Recovery', desc: 'Enables rapid excretion of ammonia and lactic acid during recovery lines.' }
      ]
    },
    'L-Hydroxyproline': {
      icon: Wind,
      color: 'text-sky-500',
      bgGradient: 'from-sky-500/10 via-cyan-500/5 to-transparent border-sky-100',
      tagline: 'Lung Tissue Maintenance & Structural Repair',
      percentageEffect: 88,
      effectLabel: 'Respiratory Tissue Elasticity',
      bullets: [
        { title: 'Collagen Production', desc: 'Essential imino acid that serves as a cornerstone of structural collagen synthesis.' },
        { title: 'Lung Tissue Maintenance', desc: 'Supports and repairs the delicate endothelial and alveolar walls of the lungs.' },
        { title: 'Tissue Elasticity', desc: 'Enhances elastic properties of biological membranes, helping in smoother lung expansion.' },
        { title: 'Joint & Fascia Integrity', desc: 'Fortifies surrounding structural barriers, minimizing overall systemic soreness.' }
      ]
    },
    'Vitamin C': {
      icon: ShieldCheck,
      color: 'text-amber-500',
      bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent border-amber-100',
      tagline: 'Cellular Immunomodulator & Free Radical Shield',
      percentageEffect: 95,
      effectLabel: 'Pathogen Neutralization Index',
      bullets: [
        { title: 'Infection Fight Speed', desc: 'Accelerates neutrophil chemotaxis, helping immune cells travel to infection spots faster.' },
        { title: 'Immune Boost Support', desc: 'Potent support for lymphocytes and interferon response pathways.' },
        { title: 'Collagen Synthesis Co-factor', desc: 'Necessary co-catalyst for L-Hydroxyproline collagen assembly.' },
        { title: 'High-Efficacy Antioxidant', desc: 'Directly neutralizes oxidative stress triggered by respiratory viruses.' }
      ]
    },
    'L-Glutamine': {
      icon: Dna,
      color: 'text-indigo-500',
      bgGradient: 'from-indigo-500/10 via-violet-500/5 to-transparent border-indigo-100',
      tagline: 'Primary Immunity Energy & Cellular Integrity Fuel',
      percentageEffect: 90,
      effectLabel: 'Gut Mucosa Protection Rate',
      bullets: [
        { title: 'Immune System Energy Source', desc: 'Acts as prime respiratory fuel for highly active immune system white blood cells.' },
        { title: 'Gut-Immune Link Strength', desc: 'Maintains gut mucosal lining integrity, where over 70% of the active immune system lives.' },
        { title: 'Muscle Catabolism Shield', desc: 'Prevents structural amino acid breakdown during inflammatory conditions.' },
        { title: 'Cellular Restoration Speed', desc: 'Speeds up cellular division cycles to support rapid biological tissue healing.' }
      ]
    }
  };

  const stepsData = [
    {
      id: 1,
      title: "Bioactive Powder Administration",
      subtitle: "Mucosal System Arrival",
      desc: "The high-potency sugar-free powder is ingested, delivering direct synergized actives into the gastrointestinal and mucosal systems under pristine bio-availability conditions.",
      impact: "Actives absorption initiated: L-Citrulline, L-Hydroxyproline, Vitamin C, L-Glutamine reach key vascular junctions.",
      noMultiplier: 1.2
    },
    {
      id: 2,
      title: "Macrophage Command Activation",
      subtitle: "Innate Immunity Mobilization",
      desc: "Actives stimulate internal host cells, particularly macrophages and lymphocytes, triggering an up-regulation of nitric oxide synthase (NOS) enzymes naturally without aggressive stressors.",
      impact: "NOS enzyme activity amplifies, mobilizing immune lines to key defensive zones.",
      noMultiplier: 1.8
    },
    {
      id: 3,
      title: "Local Nitric Oxide (NO) Surge",
      subtitle: "Aerosolized Biological Defense",
      desc: "Triggered NOS enhances Nitric Oxide levels locally, establishing a highly defensive biological shield. Nitric Oxide acts as a crucial gas messenger and potent antimicrobial molecule.",
      impact: "Vascular expansion maximizes; NO gas creates an unfavorable environment for viral spikes to take hold.",
      noMultiplier: 2.5
    },
    {
      id: 4,
      title: "Pathogen Clearance & Elastic Recovery",
      subtitle: "Resolution of Inflammation",
      desc: "Evelated NO halts selective pathogen replication. Simultaneously, L-Hydroxyproline repairs alveolar tissue, while L-Glutamine prevents muscle fatigue. Restoring pristine cellular vitality safely.",
      impact: "Host-Directed Healing complete. Pathogen growth restricted with zero chance of resistance mutational selective pressure.",
      noMultiplier: 3.2
    }
  ];

  const triggerActivation = () => {
    // Animate nitric oxide levels up to target multiplier
    const targetValue = Math.round(40 * stepsData[mechanismStep - 1].noMultiplier);
    setNitricOxideLevel(targetValue);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-50 overflow-hidden flex flex-col w-full border-t border-slate-200/65 shadow-2xl transition-all duration-500 min-h-0">
          {/* Main Full-Screen Container */}
          <motion.div
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="relative w-full h-full bg-slate-50 overflow-hidden flex flex-col focus:outline-none min-h-0"
            id="novicule-modal-content"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-5 sm:right-6 z-[10000] p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white hover:text-slate-900 hover:bg-white hover:border-transparent shadow-md transition-all cursor-pointer flex items-center gap-1.5 px-2.5 sm:px-3 shadow-black/5 text-xs font-black uppercase tracking-wider"
              title="Close Panel and Back"
              id="novicule-modal-close-btn"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline-block">Back to Products</span>
            </button>

            {/* Premium Header Summary - Compact, Highly Visible & Beautifully Structured Layout */}
            <div className="bg-gradient-to-r from-brand-blue via-brand-teal/95 to-brand-teal px-6 md:px-10 pt-5 md:pt-6 pb-0 text-white relative overflow-hidden shrink-0 shadow-md">
              {/* Decorative patterns */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
              <div className="absolute -bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Harmonized container ensuring perfect left alignment of product info & tabs with main body contents */}
              <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="flex flex-row items-center gap-4 sm:gap-6 pr-12 sm:pr-32">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-22 md:h-22 bg-white rounded-2xl overflow-hidden shadow-md shrink-0 border border-white/20">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1hDSPUhi5jzwhw1_23GtqYx-bngafO8y5" 
                      alt="Novicule-TA Premium Product Pack" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1 right-1 px-1.5 py-[1.5px] rounded-md bg-rose-500 text-[6px] sm:text-[8px] font-black tracking-widest uppercase shadow-sm">
                      Premium
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1 sm:space-y-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[8.5px] md:text-[9.5px] font-black tracking-wider uppercase text-teal-200 border border-white/5">
                        Nutraceutical
                      </span>
                      <span className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[8.5px] md:text-[9.5px] font-black tracking-wider uppercase text-rose-200 border border-white/5">
                        Sugar-Free
                      </span>
                      <span className="px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[8.5px] md:text-[9.5px] font-black tracking-wider uppercase text-sky-200 border border-white/5">
                        Host-Directed
                      </span>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight font-display text-white leading-tight">
                      NOVICULE-TA
                    </h2>
                    
                    <p className="text-teal-50/95 text-[10px] sm:text-xs md:text-sm font-semibold leading-relaxed italic max-w-2xl">
                      “A Premium Gift for your Heart and Lung Wellness” — Engineered by Tech Atriocare Private Limited for robust respiratory strength and immunity.
                    </p>
                  </div>
                </div>

                {/* Advanced Tab Bar - Lower Margin, Closer to the Bottom */}
                <div className="flex border-b border-white/10 mt-4 md:mt-5 gap-1 md:gap-3 overflow-x-auto whitespace-nowrap scrollbar-none pb-0">
                  {(['overview', 'ingredients', 'mechanism', 'amr'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 pr-2.5 pl-2.5 font-display font-medium text-xs md:text-sm uppercase tracking-wider relative transition-all focus:outline-none cursor-pointer ${
                        activeTab === tab 
                          ? 'text-white font-black translate-y-[1px]' 
                          : 'text-teal-50/75 hover:text-white font-semibold'
                      }`}
                      id={`novicule-tab-${tab}`}
                    >
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="activeTabIndicator" 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-rose-400 rounded-t-full"
                        />
                      )}
                      {tab === 'overview' && 'Overview'}
                      {tab === 'ingredients' && (
                        <>
                          <span className="sm:hidden">Ingredients</span>
                          <span className="hidden sm:inline">Ingredients Matrix</span>
                        </>
                      )}
                      {tab === 'mechanism' && (
                        <>
                          <span className="sm:hidden">Mechanism</span>
                          <span className="hidden sm:inline">How It Works</span>
                        </>
                      )}
                      {tab === 'amr' && (
                        <>
                          <span className="sm:hidden">AMR Science</span>
                          <span className="hidden sm:inline">AMR Fight (Science)</span>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable Details Body */}
            <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-10" id="novicule-modal-body">
              <div className="max-w-6xl mx-auto w-full pb-12">
                <AnimatePresence mode="wait">
                
                {/* 1. OVERVIEW TAB - Completely Re-engineered for Effortless, Spacious Readability */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-12"
                  >
                    {/* Bento Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      
                      {/* Left: Key Biological Benefits Card */}
                      <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/95 shadow-sm flex flex-col justify-between gap-8 hover:border-slate-300/80 transition-all duration-300">
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 shadow-sm">
                              <Sparkles className="w-5 h-5 animate-pulse" />
                            </div>
                            <span className="px-3.5 py-1 bg-teal-50 border border-teal-100/80 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#006D77]">
                              Scientific Breakthrough
                            </span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                              The Cellular Bio-Defense Alternative
                            </h3>
                            <p className="text-slate-600 text-sm md:text-base font-semibold leading-relaxed">
                              A pioneering, non-invasive nutraceutical formulation biologically crafted for respiratory protection, targeted host cell defense, and cellular energy restoration.
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-rose-500 pl-4 py-1.5 my-4 bg-rose-50/20 rounded-r-xl">
                            <p className="text-slate-850 font-bold text-base md:text-base italic tracking-tight leading-relaxed">
                              "True cardiopulmonary recovery begins at the host cell level, not through chemical pathogen aggression."
                            </p>
                          </div>

                          {/* Quick Scannable Core Pillars instead of dense paragraphs */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-100 hover:bg-teal-50/10 transition-all duration-300 group">
                              <div className="flex items-center gap-2 mb-2 font-black text-[#006D77] text-base">
                                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 group-hover:scale-110 transition-all" />
                                Host-Directed Integrity
                              </div>
                              <p className="text-slate-700 text-xs md:text-sm font-semibold leading-relaxed">
                                Directly fortifies physiological host lines, establishing robust active micro-environments and local protective barriers against external strain.
                              </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-100 hover:bg-teal-50/10 transition-all duration-300 group">
                              <div className="flex items-center gap-2 mb-2 font-black text-[#006D77] text-base">
                                <Activity className="w-5 h-5 text-teal-600 shrink-0 group-hover:scale-110 transition-all" />
                                Pure Zero Resistance
                              </div>
                              <p className="text-slate-700 text-xs md:text-sm font-semibold leading-relaxed">
                                Bypasses raw chemical pathogen destruction completely, preventing cellular selectiveness mutations and saving delicate natural gut micro-flora.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Visual checklist strip */}
                        <div className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-4 mt-2 pt-6 border-t border-slate-100 text-xs font-black tracking-wider text-slate-800 uppercase">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50/60 rounded-xl border border-teal-50/80"><CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" /> Boosts Active Immunity</span>
                          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50/60 rounded-xl border border-rose-50/80"><CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" /> Restores Lung Vitality</span>
                          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50/60 rounded-xl border border-sky-50/80"><CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" /> Restores Cellular Energy</span>
                        </div>
                      </div>

                      {/* Right: Who We Are Card */}
                      <div className="bg-gradient-to-br from-[#094d54] via-[#105e66] to-[#1b747e] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-md flex flex-col justify-between relative overflow-hidden border border-teal-800 hover:shadow-lg transition-all duration-300">
                        {/* Soft visual glow background */}
                        <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-10 -mt-10" />
                        
                        <div className="space-y-6 relative z-10">
                          <div className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-extrabold uppercase tracking-widest border border-white/10">
                            Startup R&D Team
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                            Tech Atriocare Private Limited
                          </h3>
                          
                          <div className="space-y-4 text-xs sm:text-sm font-semibold leading-relaxed text-teal-100/90">
                            <p>
                              We are a specialized healthcare engineering and cardiopulmonary biology research group focused on clinical purity and cellular restore.
                            </p>
                            <p>
                              Novicule-TA was inspired during critical global health milestones to provide high-purity, molecularly active respiratory support system lines.
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-bold relative z-10">
                          <span className="text-teal-200 uppercase tracking-wider text-[10px]">Head of Innovation</span>
                          <span className="text-rose-300 font-extrabold tracking-wide bg-rose-950/20 px-3 py-1.5 rounded-lg border border-rose-500/10 uppercase text-[10px]">
                            Tarun Adarsh
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats strip - Highly polished layout, high readability cells */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stats.map((st, i) => (
                        <div 
                          key={i} 
                          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center hover:border-teal-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3 min-h-[140px]"
                        >
                          <div>
                            <div className="text-2xl sm:text-3xl font-black text-[#006D77] tracking-tight mb-0.5">
                              {st.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-[#0097a7] mb-2 leading-tight">
                              {st.label}
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-slate-650 leading-relaxed">
                            {st.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Call Out - Structured for Effortless Comprehension, aligned beautiful pills */}
                    <div className="bg-teal-50/50 border border-teal-100/90 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-stretch gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-teal-100/80 border border-teal-200/80 flex items-center justify-center text-[#014f56] shrink-0 self-start shadow-sm shadow-teal-700/5">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-5 flex-1">
                        <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                          Primary Recommended Scenarios for Novicule-TA Use
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-2 p-4 bg-white rounded-2xl border border-teal-100/50 shadow-sm shadow-teal-900/5">
                            <span className="inline-flex px-2 py-0.5 bg-rose-50 rounded-md text-[9px] font-black uppercase text-rose-600 tracking-wider">💼 Tech Professionals</span>
                            <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                              Restores biological stamina during heavy sleepless project deadlines, coding jams, and stressful test schedules.
                            </p>
                          </div>

                          <div className="space-y-2 p-4 bg-white rounded-2xl border border-teal-100/50 shadow-sm shadow-teal-900/5">
                            <span className="inline-flex px-2 py-0.5 bg-sky-50 rounded-md text-[9px] font-black uppercase text-sky-600 tracking-wider">🏃 Training & Stamina</span>
                            <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                              Significantly optimizes cardiorespirations, increases vascular blood flow, and accelerates physical recovery.
                            </p>
                          </div>

                          <div className="space-y-2 p-4 bg-white rounded-2xl border border-teal-100/50 shadow-sm shadow-teal-900/5">
                            <span className="inline-flex px-2 py-0.5 bg-teal-50 rounded-md text-[9px] font-black uppercase text-[#006D77] tracking-wider">🍃 Everyday Resilience</span>
                            <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                              Acts as an active respiratory shield against weather transitions, sudden dust exposure, or seasonal stress waves.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Mobile Friendly Purchase Bar */}
                    <div className="bg-gradient-to-br from-[#f0f9ff] to-sky-50/55 rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all duration-300 mt-12 mb-4">
                      <div className="space-y-2 text-left w-full md:w-auto">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue bg-blue-50 px-3 py-1 rounded-full inline-block">
                          Primary Wellness Precursor
                        </div>
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">
                          Bring Home NOVICULE-TA Today
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold max-w-xl leading-relaxed">
                          Secure your premium gift for heart and lung wellness. Authentically stored and shipped by TATA 1mg Healthcare Services.
                        </p>
                      </div>
                      <a 
                        href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full md:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-teal text-white font-black uppercase tracking-widest rounded-2xl text-center transition-all shadow-lg shadow-brand-blue/15 hover:shadow-brand-teal/20 text-xs flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
                      >
                        🛒 Buy on TATA 1mg <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* 2. INGREDIENTS MATRIX */}
                {activeTab === 'ingredients' && (
                  <motion.div
                    key="ingredients"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    {/* Component Navigation */}
                    <div className="flex flex-wrap gap-2.5 p-1 bg-slate-200/50 rounded-2xl border border-slate-200">
                      {Object.keys(ingredientsData).map((ing) => {
                        const name = ing as IngredientName;
                        const data = ingredientsData[name];
                        const Icon = data.icon;
                        const isSel = activeIngredient === name;
                        return (
                          <button
                            key={name}
                            onClick={() => setActiveIngredient(name)}
                            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs md:text-sm font-bold transition-all focus:outline-none cursor-pointer flex-1 justify-center ${
                              isSel 
                                ? 'bg-white text-slate-950 shadow-sm border border-slate-200' 
                                : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                            }`}
                            id={`novicule-ing-${name}`}
                          >
                            <Icon className={`w-4 h-4 ${isSel ? data.color : 'text-slate-400'}`} />
                            {name}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Ingredient Content Card with Improved Readability & No Math/Percentages */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIngredient}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`bg-white rounded-3xl p-6 md:p-8 border shadow-md ${ingredientsData[activeIngredient].bgGradient}`}
                      >
                        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                          
                          {/* Left Panel: Description and High Readability Bullets */}
                          <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                              <span className="px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700">
                                Active Compound Profile
                              </span>
                              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                {activeIngredient}
                              </h3>
                              <p className="font-bold text-teal-700 text-base md:text-lg italic">
                                {ingredientsData[activeIngredient].tagline}
                              </p>
                            </div>

                            {/* Scientific Bullets - Large and Highly Legible */}
                            <div className="space-y-4">
                              {ingredientsData[activeIngredient].bullets.map((bullet, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-50 hover:border-teal-200 transition-all shadow-sm">
                                  <h4 className="font-extrabold text-[#006D77] text-base md:text-lg flex items-center gap-2 mb-2 uppercase tracking-wide">
                                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0" />
                                    {bullet.title}
                                  </h4>
                                  <p className="text-slate-800 text-sm md:text-base font-medium leading-relaxed">
                                    {bullet.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>



                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* 3. HOW IT WORKS (MECHANISM STAGE) */}
                {activeTab === 'mechanism' && (
                  <motion.div
                    key="mechanism"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
                        <span className="px-3.5 py-1.5 bg-[#0097a7]/10 text-[#0097a7] rounded-full text-[10px] font-black uppercase tracking-widest">
                          Physiological Pathway
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-cyan-800 tracking-tight">
                          The 4-Step Mechanism of Defense
                        </h3>
                        <p className="text-slate-500 font-medium text-xs md:text-sm">
                          Click through each step of the host-directed therapy model to see how Novicule-TA prompts instant immune cells mobilization and triggers vascular defense safely.
                        </p>
                      </div>

                      {/* Stepper Grid layout - Simplified with Enhanced Contrast and Readability */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* Stepper buttons (Left Column) - High Contrast & Large Text */}
                        <div className="lg:col-span-5 space-y-4">
                          {stepsData.map((step) => (
                            <button
                              key={step.id}
                              onClick={() => {
                                setMechanismStep(step.id);
                                setNitricOxideLevel(Math.round(40 * step.noMultiplier));
                              }}
                              className={`w-full text-left p-5 rounded-2xl border text-sm md:text-base transition-all focus:outline-none flex items-center gap-4 cursor-pointer hover:bg-slate-50/80 group shadow-sm ${
                                mechanismStep === step.id 
                                  ? 'bg-teal-50/55 border-teal-500 shadow-md ring-1 ring-teal-400' 
                                  : 'bg-white border-slate-200'
                              }`}
                              id={`novicule-step-btn-${step.id}`}
                            >
                              <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-display font-black text-base transition-all border ${
                                mechanismStep === step.id 
                                  ? 'bg-[#0097a7] text-white border-transparent' 
                                  : 'bg-white text-slate-500 border-slate-300'
                              }`}>
                                {step.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`font-extrabold uppercase tracking-widest text-xs mb-1 ${
                                  mechanismStep === step.id ? 'text-teal-700' : 'text-slate-500'
                                }}`}>
                                  {step.subtitle}
                                </div>
                                <h4 className={`font-black text-sm md:text-base uppercase ${
                                  mechanismStep === step.id ? 'text-slate-900' : 'text-slate-700 group-hover:text-teal-700'
                                }}`}>
                                  {step.title}
                                </h4>
                              </div>
                              <ChevronRight className={`w-5 h-5 transition-transform ${
                                mechanismStep === step.id ? 'translate-x-1 text-[#0097a7]' : 'text-slate-400'
                              }`} />
                            </button>
                          ))}
                        </div>

                        {/* Premium Presentation Dashboard (Right Column) - Highly Legible & Completely Clean of Math Clutter */}
                        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg flex flex-col justify-between min-h-[420px] relative overflow-hidden">
                          {/* Subdued design grid background */}
                          <div className="absolute inset-0 bg-slate-50/40 pointer-events-none" />
                          
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={mechanismStep}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -15 }}
                              transition={{ duration: 0.25 }}
                              className="space-y-6 relative z-10"
                            >
                              {/* Title */}
                              <div className="space-y-2">
                                <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#014f56] bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
                                  Current Stage: 0{mechanismStep} of 04
                                </span>
                                <h4 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight leading-snug mt-2">
                                  {stepsData[mechanismStep - 1].title}
                                </h4>
                                <p className="text-sm font-extrabold text-teal-700 uppercase tracking-widest leading-none">
                                  {stepsData[mechanismStep - 1].subtitle}
                                </p>
                              </div>

                              <p className="text-slate-800 font-medium text-base md:text-lg leading-relaxed pt-1">
                                {stepsData[mechanismStep - 1].desc}
                              </p>

                              {/* Biological impact box */}
                              <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-100/60 shadow-sm flex items-start gap-4">
                                <Info className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                  <div className="text-xs font-black text-[#006D77] uppercase tracking-wider">Physiological Impact Highlight</div>
                                  <p className="text-slate-900 font-bold text-sm md:text-base leading-relaxed">
                                    {stepsData[mechanismStep - 1].impact}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>

                          {/* Clean Guided Navigation Controls instead of Mock Gauges */}
                          <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                            <div className="flex items-center gap-3">
                              <div className="text-xs font-bold uppercase text-slate-500 tracking-wide">Pathway Progress:</div>
                              <div className="flex gap-1.5">
                                {stepsData.map((step) => (
                                  <div 
                                    key={step.id} 
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                      mechanismStep === step.id ? 'w-8 bg-teal-600' : 'w-2.5 bg-slate-200'
                                    }`} 
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  const prev = mechanismStep > 1 ? mechanismStep - 1 : 4;
                                  setMechanismStep(prev);
                                  setNitricOxideLevel(Math.round(40 * stepsData[prev - 1].noMultiplier));
                                }}
                                className="px-4 py-2 bg-white border border-slate-250 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                                id="novicule-mechanisms-prev-btn"
                              >
                                Prev
                              </button>
                              <button
                                onClick={() => {
                                  const next = mechanismStep < 4 ? mechanismStep + 1 : 1;
                                  setMechanismStep(next);
                                  setNitricOxideLevel(Math.round(40 * stepsData[next - 1].noMultiplier));
                                }}
                                className="px-5 py-2 bg-[#0097a7] hover:bg-cyan-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer"
                                id="novicule-mechanisms-next-btn"
                              >
                                Next Stage
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. AMR FIGHT & BIO-DEFENSE SCIENCE */}
                {activeTab === 'amr' && (
                  <motion.div
                    key="amr"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Why Antibiotics Fail (Left column) */}
                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 p-2 bg-red-50 text-red-600 rounded-2xl">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest">Antimicrobial Resistance (AMR)</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-extrabold text-cyan-800 tracking-tight">The Antibiotics Overuse Dilemma</h3>
                            <p className="text-slate-850 font-semibold text-sm md:text-base leading-relaxed">
                              The vast majority of common coughs, colds, and seasonal congestions are entirely viral. Taking traditional antibiotics for these viral infections provides zero efficacy, but it forces beneficial gut bacteria and pathogens to undergo dramatic selective mutation pressures, causing highly dangerous Antibiotic Resistance.
                            </p>
                          </div>

                          {/* Critical drawbacks */}
                          <div className="space-y-3 pt-4 border-t border-slate-100">
                            {[
                              "No viral reduction: Antibiotics ONLY target bacteria, failing viral colds.",
                              "Wastes gut flora: Destroys beneficial digestive biomes.",
                              "Drives bacterial resistance mutations.",
                              "Prolonged body fatigue recovery loop."
                            ].map((text, inx) => (
                              <div key={inx} className="flex gap-3 text-sm md:text-base font-bold text-slate-800 leading-relaxed">
                                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <span>{text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 p-4 rounded-2xl bg-slate-100 border border-slate-250 text-center text-xs font-black text-slate-700 uppercase tracking-widest">
                          Not Recommended for Viral Care
                        </div>
                      </div>

                      {/* Why Novicule Wins (Right column) */}
                      <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-brand-teal shadow-lg shadow-[#0097a7]/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="space-y-6">
                          <div className="inline-flex items-center gap-2 p-2 bg-[#0097a7]/10 text-[#006D77] rounded-2xl">
                            <ShieldCheck className="w-5 h-5 shrink-0" />
                            <span className="text-xs font-black uppercase tracking-widest text-[#006D77]">Host-Directed Bio-Shield</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-extrabold text-cyan-800 tracking-tight">Sustainable Pathogen Clearance</h3>
                            <p className="text-slate-850 font-semibold text-sm md:text-base leading-relaxed">
                              Novicule-TA bypasses the pathogen completely. By equipping the host body's immune command matrix (macrophages and mucosal lining) with specialized synergy precursors (L-Citrulline, L-Glutamine, and Vitamin C), it activates natural local cell defenses to clear the virus naturally.
                            </p>
                          </div>

                          {/* Critical benefits */}
                          <div className="space-y-3 pt-4 border-t border-slate-100">
                            {[
                              "Direct antiviral & biological shielding via natural Nitric Oxide levels.",
                              "No selective pressure: Zero resistance generation in pathogens.",
                              "Protects digestive gut flora structure completely.",
                              "Enhanced lung compliance and rapid muscle exhaustion repair."
                            ].map((text, inx) => (
                              <div key={inx} className="flex gap-3 text-sm md:text-base font-bold text-[#014f56] leading-relaxed">
                                <CheckCircle2 className="w-5 h-5 text-teal-650 shrink-0 mt-0.5" />
                                <span>{text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 p-4 rounded-2xl bg-[#0097a7]/10 text-center text-xs font-black text-[#006D77] uppercase tracking-widest">
                          Highly Sustainable Solution
                        </div>
                      </div>
                    </div>

                    {/* Scientific Summary Quote Card - Redesigned with Website's Gorgeous Light Blue/Teal Background */}
                    <div className="bg-gradient-to-br from-[#F0FBFA] to-teal-50/50 rounded-3xl p-8 text-slate-900 relative overflow-hidden border border-[#0097a7]/20 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute top-0 left-0 w-60 h-60 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />
                      
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-teal-100/80 flex items-center justify-center text-[#006D77] shrink-0 shadow-sm border border-teal-200/50">
                            <Award className="w-4.5 h-4.5" />
                          </div>
                          <span className="text-xs font-black uppercase tracking-widest text-[#006D77]">Clinical Paradigm</span>
                        </div>
                        
                        <p className="text-slate-800 text-sm md:text-base leading-relaxed font-extrabold italic border-l-4 border-[#0097a7] pl-4 py-1">
                          &ldquo;Most respiratory syndromes represent viral surges where pathocidal agents like antibiotics offer no help. Enabling patients to fortify their cells through specific, high-absorption dietary actives stands out as a highly sustainable pathway for cardiopulmonary endurance and community health integrity.&rdquo;
                        </p>
                        
                        <div className="text-[10px] sm:text-xs font-black text-[#0097a7] uppercase tracking-widest pt-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0097a7]" />
                          Tech AtrioCare Cardiovascular & Pulmonary R&D Division
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

            {/* Bottom Sachet Purchase Button bar */}
            <div className="bg-white border-t border-slate-200 px-4 py-3 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:pb-5">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-normal">
                  Novicule-TA is a premier nutraceutical formulation. Sugar-free and orange flavored.
                </span>
              </div>
              <a 
                href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-brand-blue text-white font-bold rounded-2xl text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/15 hover:shadow-brand-teal/20 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                id="novicule-buy-now-btn-footer"
              >
                Buy on TATA 1mg <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
