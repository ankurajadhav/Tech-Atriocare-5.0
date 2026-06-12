import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  Leaf, 
  Sparkles,
  Search,
  Globe
} from 'lucide-react';
import neuralAnalysisGirl from '../assets/images/neural_analysis_girl_1779800243404.png';

interface FeaturedInsightsSliderProps {
  onOpenNoviculeModal: () => void;
}

export default function FeaturedInsightsSlider({ onOpenNoviculeModal }: FeaturedInsightsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      type: 'product',
      image: "https://lh3.googleusercontent.com/d/13QNDk6mlF6Me-Tr3s76bEzbDA_M367Z7",
      title: "Haal-Chaal Pravartak 1.0",
      subtitle: "Health is the real Wealth, Explore Now !",
      description: "Our integrated respiratory and cardiac screening platform. Take a 7-second humming voice test to check and track your cardiopulmonary endurance.",
      buttonText: "Registration Now Closed",
      link: "/haal-chaal",
      isExternal: false,
      tag: "Closed Challenge",
      accent: "from-teal-400 to-[#0097a7]",
      themeColor: "#0097a7"
    },
    {
      id: 2,
      type: 'press-mock',
      title: "Now Featured in ANI News",
      subtitle: "Explore our latest press feature",
      description: "Delhi-Based Startup Tech AtrioCare Revolutionizes Healthcare with an Advanced Voice-Biometric Digital Gym and NOVICULE-TA formulation.",
      buttonText: "Read More →",
      link: "https://www.aninews.in/news/business/delhi-based-startup-tech-atriocare-revolutionizes-healthcare-with-ai-powered-voice-based-digital-gym-and-novicule-ta-formulation20250926123727/",
      isExternal: true,
      tag: "Press Release",
      accent: "from-[#006064] to-[#0097a7]",
      themeColor: "#006064"
    },
    {
      id: 3,
      type: 'product',
      image: "https://lh3.googleusercontent.com/d/1IqX-4rwBtTJdYHk65Y50B-kZEn6O_WBt",
      title: "Novicule-TA",
      subtitle: "Transforming Healthcare",
      description: "A premium sugar-free host-directed nutraceutical supplement formulated to fortify immunological defenses, optimize lung parameters, and enhance active output.",
      buttonText: "Learn More →",
      link: "https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search",
      isExternal: true,
      isNovicule: true,
      tag: "Nutraceutical",
      accent: "from-rose-400 to-rose-600",
      themeColor: "#e11d48"
    },
    {
      id: 4,
      type: 'product',
      image: "https://lh3.googleusercontent.com/d/17IBh0H4u4P38fqa1npFWxPyk6_4Ub6Fu",
      title: "BREATHING NEW LIFE INTO HEALTHCARE: Tech AtrioCare's Haal-Chaal Pravartak 1.0 Challenge Gains Momentum",
      subtitle: "Explore our latest press feature",
      description: "Our innovative community health challenge gains massive national traction, enabling direct, accessible respiratory tracking.",
      buttonText: "Read More →",
      link: "https://www.aninews.in/news/business/breathing-new-life-into-healthcare-tech-atriocares-haal-chaal-pravartak-10-challenge-gains-momentum20251027175349/",
      isExternal: true,
      tag: "Media",
      accent: "from-blue-500 to-sky-600",
      themeColor: "#2563eb"
    }
  ];

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section 
      id="featured-insights" 
      className="py-16 px-4 md:px-12 bg-gradient-to-r from-sky-50/50 via-white to-sky-50/50 relative overflow-hidden select-none border-y border-sky-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#00d4e5_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
      
      {/* Container holding centered slider and side controls */}
      <div className="max-w-7xl mx-auto relative px-4 md:px-16">
        
        {/* Floating Side Left Control */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Floating Side Right Control */}
        <button 
          onClick={handleNext}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dynamic Slider Wrapper with smooth height transitions */}
        <div className="relative w-full min-h-[500px] md:min-h-[580px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-white rounded-3xl border border-sky-100/80 shadow-[0_30px_70px_rgba(0,118,129,0.06)] overflow-hidden flex flex-col md:flex-row min-h-[480px] md:min-h-[520px]"
            >
              {/* Left Column: Visual Area */}
              <div className="flex-1 bg-slate-50 relative min-h-[250px] md:min-h-auto flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
                
                {/* 1. MOCK CONTAINER FOR ANI NEWS SCIENTIFIC FEATURE */}
                {currentSlide.type === 'press-mock' ? (
                  <div className="w-full h-full flex flex-col bg-white">
                    {/* Simulated ANI News Browser Top Header */}
                    <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200 flex-wrap text-[10px] text-slate-600 font-sans tracking-wide">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-[#9e1c1c] text-xs">ANI</span>
                        <div className="h-2 w-px bg-slate-300" />
                        <span className="hidden sm:inline font-semibold">National</span>
                        <span className="hidden sm:inline font-semibold">Business</span>
                        <span className="font-extrabold text-[#006064]">Health</span>
                        <span className="hidden sm:inline font-semibold">Tech</span>
                        <span className="hidden md:inline font-semibold">World</span>
                        <span className="hidden lg:inline font-semibold">Videos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Mock Webpage Content Area */}
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between overflow-hidden relative">
                      {/* Side-by-side Layout inside the news article mock */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start flex-1">
                        
                        {/* Main Featured Image left block */}
                        <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm aspect-video sm:aspect-square">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1moU0GBwRX0pqxUt-U4UAp7BT-LqOrmVr" 
                            alt="Advanced Voice-Biometric Gym App Interface" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-[#006064]/10" />
                        </div>

                        {/* Article Text right block */}
                        <div className="sm:col-span-7 space-y-2 text-left">
                          <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">BUSINESS NEWS INDEX</div>
                          <h4 className="text-sm md:text-base font-black text-cyan-800 leading-snug tracking-tight">
                            Delhi-Based Startup Tech AtrioCare Revolutionizes Healthcare with Advanced Voice-Biometric Digital Gym and NOVICULE-TA formulation
                          </h4>
                          <p className="text-[9px] font-bold text-slate-400">
                            ANI | Updated: Sep 26, 2025 12:37 IST
                          </p>
                          <div className="h-[2px] w-12 bg-[#00a7b5]" />
                        </div>
                      </div>

                      {/* Mock related news column footer */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-4 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        <span>Related: V-sync Pulmonary Integration Accapella</span>
                        <span className="text-[#0097a7] font-black">Live Feed</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // 2. STANDARD PRODUCT / PRESS screenshot rendering
                  <div className="w-full h-full relative group">
                    <img 
                      src={currentSlide.image} 
                      alt={currentSlide.title} 
                      className={`w-full h-full ${currentIndex === 0 ? 'object-contain p-4' : currentIndex === 2 ? 'object-contain p-6 bg-slate-50/40' : 'object-cover'} transition-transform duration-700`}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Visual filter overlay for dark contrast */}
                    {currentIndex === 0 && (
                      <div className="absolute inset-0 bg-teal-950/5 pointer-events-none" />
                    )}
                  </div>
                )}

                {/* Decorative Pill Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-100/60 shadow-sm z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                  <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">
                    {currentSlide.tag}
                  </span>
                </div>
              </div>

              {/* Right Column: Informative Details Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between text-left">
                
                {/* Product/Article Titles */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-teal" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal">
                      AtrioCare Innovation
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-800 tracking-tight leading-tight">
                    {currentSlide.title}
                  </h3>
                  
                  <p className="text-emerald-800 font-bold text-sm bg-emerald-50/70 border border-emerald-100 py-1 py-1 px-3 rounded-full w-fit">
                    {currentSlide.subtitle}
                  </p>
                  
                  <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                    {currentSlide.description}
                  </p>
                </div>

                {/* Main Action Buttons */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                  {currentSlide.isExternal ? (
                    currentSlide.isNovicule ? (
                      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button
                          onClick={onOpenNoviculeModal}
                          className="px-6 py-3.5 rounded-2xl bg-[#0097a7] hover:bg-[#0aa4b4] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          🔬 Live Ingredients Info
                        </button>
                        <a 
                          href={currentSlide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                        >
                          🛒 Buy on TATA 1mg <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    ) : (
                      <a 
                        href={currentSlide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-blue hover:bg-brand-teal text-white font-black text-xs uppercase tracking-widest text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {currentSlide.buttonText}
                      </a>
                    )
                  ) : (
                    <Link 
                      to={currentSlide.link}
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-blue hover:bg-brand-teal text-white font-black text-xs uppercase tracking-widest text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {currentSlide.buttonText}
                    </Link>
                  )}
                  
                  {/* Indicators / Page Tracker */}
                  <div className="sm:ml-auto flex gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === currentIndex ? 'w-8 bg-[#0097a7]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
