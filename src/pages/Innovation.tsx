import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Cpu, Database, Zap, Search, Fingerprint, Shield, Wind, ArrowRight, CheckCircle2, Microscope, Activity, Globe } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import JoinUsModal from '../components/JoinUsModal';

export default function Innovation() {
  const [analysisInput, setAnalysisInput] = useState('');
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateRecommendation = async () => {
    if (!analysisInput) return;
    setLoading(true);
    try {
      let data;
      try {
        const response = await fetch('/api/analyze-biometric', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: analysisInput }),
        });
        
        if (!response.ok) throw new Error('Failed to fetch recommendation');
        data = await response.json();
      } catch (serverError) {
        console.warn('Backend diagnostic API failed, employing client-side direct fallback...', serverError);
        
        let apiKey = '';
        try {
          apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string) || (process.env.GEMINI_API_KEY as string) || '';
        } catch {}

        if (!apiKey) {
          throw new Error('Static host detected and no GEMINI_API_KEY or VITE_GEMINI_API_KEY environment variable set.');
        }

        // Call Gemini REST API directly with the structured output schema
        const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
        const restRes = await fetch(directUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{
                text: `Analyze this respiratory or clinical scenario and provide a medical technology recommendation using AtrioCare's suite (Haal-Chaal Pravartak 1.0, V-sync, or NOVICULE-TA).
Focus on non-invasive screening and computational insights.

Scenario: ${analysisInput}`
              }]
            }],
            config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: "OBJECT",
                properties: {
                  diagnosis_insight: { type: "STRING" },
                  recommended_tech: { type: "STRING" },
                  rehab_protocol: { type: "STRING" },
                  confidence_score: { type: "NUMBER" }
                },
                required: ["diagnosis_insight", "recommended_tech", "rehab_protocol", "confidence_score"]
              }
            }
          })
        });

        if (!restRes.ok) {
          throw new Error(`Direct connection failure: ${restRes.statusText}`);
        }

        const restData = await restRes.json();
        const responseText = restData.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        data = JSON.parse(responseText);
      }
      
      setRecommendation(data);
    } catch (e: any) {
      console.error(e);
      setRecommendation({
        diagnosis_insight: "Connection Error: Unable to reach Clinical Intelligence Core.",
        recommended_tech: "Offline / Maintenance",
        rehab_protocol: e.message || "System is currently offline or missing required API keys. If hosted on Vercel or GitHub, please configure the GEMINI_API_KEY.",
         confidence_score: 0
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-32 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-fixed opacity-[0.05] grayscale brightness-150 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-teal/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 relative z-10">
        {/* Header */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Advanced Algorithmic Diagnostics</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black font-display text-white tracking-tighter leading-[0.8] uppercase">
            The <span className="text-brand-teal">Intelligent</span> <br /> Standard
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Experience the future of healthcare with our clinical-grade algorithmic recommendation engine. 
            Designed for respiratory excellence and patient-first diagnostics.
          </p>
        </section>

        {/* Diagnostic Recommendation Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[56px] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.4)] -z-10" />
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[56px]">
            {/* Input Side */}
            <div className="p-8 md:p-16 space-y-12 bg-white/5 border-r border-white/5">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">Biometric Insight</h2>
                <p className="text-slate-400 font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">Input clinical symptoms or respiratory patterns to synthesize a high-precision technology recommendation.</p>
              </div>

              <div className="space-y-8">
                <div className="relative group">
                  <textarea 
                    value={analysisInput}
                    onChange={(e) => setAnalysisInput(e.target.value)}
                    placeholder="E.g., Chronic respiratory fatigue, diminished breath capacity during exertion, clinical history of bronchial sensitivity..."
                    className="w-full bg-black/40 border border-white/10 rounded-[32px] p-10 h-64 focus:border-brand-teal/50 focus:bg-black/60 outline-none transition-all resize-none text-white font-medium shadow-2xl placeholder:text-slate-600"
                  />
                  <div className="absolute bottom-6 right-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-focus-within:text-brand-teal transition-colors">
                    Clinical Input Node
                  </div>
                </div>

                <button 
                  onClick={generateRecommendation}
                  disabled={loading || !analysisInput}
                  className="w-full py-7 atrio-gradient text-white font-black uppercase tracking-[0.2em] rounded-[24px] shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:-translate-y-2 active:scale-[0.98] transition-all disabled:opacity-30 disabled:translate-y-0 group"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Synthesizing Data...
                    </div>
                  ) : (
                    'Generate Diagnostic Result'
                  )}
                </button>
              </div>
            </div>

            {/* Results Side */}
            <div className="bg-white/5 border-l border-white/5 p-8 md:p-16 flex flex-col justify-center relative min-h-[500px]">
              <AnimatePresence mode="wait">
                {recommendation ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 shadow-2xl space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Clinical Simulation Outcome</span>
                      </div>
                      <h4 className="text-3xl font-black text-white leading-tight uppercase tracking-tight font-display">{recommendation.diagnosis_insight}</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[24px] border border-white/10 shadow-xl group hover:border-brand-teal/30 transition-all">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Core Technology</span>
                        <div className="font-black text-brand-teal flex items-center gap-2 text-sm uppercase tracking-tight">
                          <Cpu className="w-4 h-4" /> {recommendation.recommended_tech}
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-[24px] border border-white/10 shadow-xl group hover:border-brand-blue/30 transition-all">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Algorithmic Diagnostic Score</span>
                        <div className="font-black text-blue-400 text-sm flex items-center gap-2 uppercase tracking-tight">
                          <Activity className="w-4 h-4" /> {(recommendation.confidence_score * 100).toFixed(1)}% Match
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-teal/10 border border-brand-teal/20 p-8 rounded-[32px] relative text-slate-300 font-medium leading-relaxed shadow-inner">
                       <span className="text-4xl absolute top-2 left-4 text-brand-teal/10 font-serif lowercase">"</span>
                       <p className="relative z-10 italic">{recommendation.rehab_protocol}</p>
                    </div>

                    <button 
                      onClick={() => setRecommendation(null)}
                      className="w-full py-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-brand-teal transition-colors"
                    >
                      Reset Core Diagnostics
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center space-y-8 relative h-full"
                  >
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-40 h-40 rounded-full border border-dashed border-brand-teal/30 flex items-center justify-center"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-brand-teal/10 backdrop-blur-md border border-white/5 flex items-center justify-center text-brand-teal shadow-2xl">
                          <Microscope className="w-10 h-10" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 relative z-10">
                      <h3 className="text-xl font-black text-white uppercase tracking-widest leading-none">Awaiting Telemetry</h3>
                      <p className="text-slate-500 text-sm max-w-xs mx-auto font-medium">Input clinical specifications to initiate the <span className="text-brand-teal">Deep Diagnostic</span> simulation.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-white p-12 rounded-[48px] border border-brand-border shadow-sm flex flex-col justify-between group hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-500">
              <div className="space-y-6">
                 <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform shadow-sm">
                    <Search className="w-7 h-7" />
                 </div>
                 <h3 className="text-xl sm:text-3xl font-bold font-display text-[#006064]">Global Clinical Intelligence</h3>
                 <p className="text-slate-500 font-medium text-xs sm:text-sm lg:text-lg max-w-md leading-relaxed">
                   Leverage our proprietary database of millions of clinical records to validate diagnostic theories and treatment protocols instantly.
                 </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                 {['Pulmonology', 'Cardiology', 'Neural Mapping', 'Bio-Informatics'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 border border-brand-border text-[10px] font-black uppercase text-slate-400 tracking-widest">{tag}</span>
                 ))}
              </div>
           </div>

           <div className="atrio-gradient p-12 rounded-[48px] text-white flex flex-col justify-between shadow-xl shadow-brand-teal/20 group overflow-hidden relative">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform" />
              <div className="relative z-10 space-y-6">
                <Fingerprint className="w-12 h-12 text-white/50" />
                <h3 className="text-xl sm:text-3xl font-bold font-display leading-tight">Patient Data Shield</h3>
                <p className="text-white/80 font-medium text-xs sm:text-sm md:text-base">Military-grade encryption for all patient screenings and historical records.</p>
              </div>
              <Link 
                to="/terms"
                className="inline-block relative z-10 mt-10 py-4 px-8 bg-white text-brand-teal rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-lg active:scale-95 text-center"
              >
                Verify Compliance
              </Link>
           </div>

           <div className="bg-white p-12 rounded-[48px] border border-brand-border shadow-sm group hover:border-brand-teal transition-all duration-300">
              <Activity className="w-12 h-12 text-brand-teal mb-8 group-hover:rotate-12 transition-transform" />
              <h3 className="text-lg sm:text-2xl font-bold font-display text-[#006064] mb-4">Real-time Vitals</h3>
              <p className="text-slate-500 font-medium text-xs sm:text-sm md:text-base leading-relaxed">Integrated syncing with NOVICULE-TA hardware for millisecond precision monitoring.</p>
           </div>

            <div className="lg:col-span-2 bg-slate-900 p-12 rounded-[48px] flex flex-col md:flex-row gap-12 items-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0097a720,transparent)]" />
              <div className="relative z-10 flex-grow space-y-6">
                 <h3 className="text-xl sm:text-3xl font-bold font-display text-white">Innovation Partnership</h3>
                 <p className="text-slate-400 font-medium text-xs sm:text-sm lg:text-lg leading-relaxed max-w-md">Join 1500+ institutions pioneer with Tech AtrioCare research protocols and shared data lakes.</p>
                 <button 
                   onClick={() => setIsModalOpen(true)}
                   className="flex items-center gap-3 text-brand-teal font-black uppercase tracking-widest text-xs hover:gap-5 transition-all outline-none cursor-pointer"
                 >
                   Join Network <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
              <div className="relative shrink-0 hidden md:block">
                 <div className="w-48 h-48 bg-brand-teal/20 rounded-full blur-[80px] absolute inset-0" />
                 <Globe className="w-32 h-32 text-brand-teal relative z-10 animate-spin-slow opacity-60" />
              </div>
           </div>
        </section>

        {/* Team Teaser */}
        <section className="bg-white rounded-[32px] sm:rounded-[48px] md:rounded-[64px] p-6 sm:p-12 md:p-24 border border-brand-border text-center space-y-8 md:space-y-12 shadow-soft">
           <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-[#006064] uppercase tracking-tight">Meet the Minds Behind the Tech</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                 Our team of scientists from IIT Delhi and healthcare professionals are pushing the boundaries of what's possible in medical technology.
              </p>
           </div>

           <div className="flex flex-wrap justify-center gap-4">
             {['Tarun Adarsh', 'Dr. Arpan Gupta', 'Dr. Sarthak Chakravarty'].map((name) => (
               <div key={name} className="px-6 py-3 rounded-2xl bg-brand-bg border border-brand-border font-bold text-brand-blue flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-brand-teal" />
                 {name}
               </div>
             ))}
           </div>

           <div className="pt-8">
              <Link 
                to="/team" 
                className="inline-flex items-center gap-3 bg-brand-teal text-white px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:scale-105 transition-all group"
              >
                View Full Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
              </Link>
           </div>
        </section>

        <JoinUsModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Innovation Partnership"
          description="Join our global clinical intelligence network and pioneer with Tech AtrioCare research protocols."
        />
      </div>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
