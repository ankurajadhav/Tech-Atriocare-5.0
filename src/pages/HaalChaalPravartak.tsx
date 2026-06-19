import { motion, useScroll, useTransform } from "motion/react";
import {
  Wind,
  Mic,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowUpRight,
  ShieldAlert,
  BookOpen,
  Clock,
  Heart,
  MoveRight,
  Users,
  Stethoscope,
  QrCode,
  Zap,
  PlayCircle,
  Fingerprint,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";

const CardImage = ({ src, alt, icon: Icon }: { src: string; alt: string; icon: any }) => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-slate-100 shadow-inner relative bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {(loading || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-indigo-500/5 animate-pulse flex items-center justify-center">
          <Wind className="w-10 h-10 text-brand-teal/20" />
        </div>
      )}
      {!hasError && (
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            loading ? "scale-105 blur-md opacity-0" : "scale-100 blur-0 opacity-100 group-hover:scale-105"
          )}
          onLoad={() => setLoading(false)}
          onError={() => {
            setHasError(true);
            setLoading(false);
          }}
          referrerPolicy="no-referrer"
        />
      )}
      <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center border border-slate-100/80 shadow-md transform group-hover:scale-110 transition-all duration-500 z-10">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>
    </div>
  );
};
import airwayObstructionImg from "../assets/images/airway_health_obstruction_1779969348663.png";

export default function HaalChaalPravartak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 50]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#F8FAFC] relative overflow-hidden font-sans"
    >
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-brand-teal/10 via-cyan-100/30 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-80"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -right-[10%] w-[80vw] h-[80vw] bg-gradient-to-tl from-brand-blue/10 via-indigo-100/30 to-transparent blur-[150px] rounded-full mix-blend-multiply opacity-70"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-48 pb-32 max-w-[1400px] mx-auto z-10 min-h-screen flex items-center">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full"
        >
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-6 py-2 sm:px-8 sm:py-3.5 rounded-full border border-blue-100 bg-white/80 backdrop-blur-sm mb-6 shadow-sm shadow-blue-50">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-brand-blue tracking-tight leading-none">
                  Haal-Chaal Pravartak
                </span>
              </div>

              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full mb-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </div>
                <span className="text-xs font-black tracking-[0.2em] uppercase bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                  World's First
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-brand-blue mb-8 leading-[0.9] tracking-tighter uppercase font-display">
                Breathe
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                  Strong.
                </span>
                <br />
                <span className="relative">
                  Live{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500">
                    Strong.
                  </span>
                  <svg
                    className="absolute -bottom-4 left-0 w-full h-5 text-brand-teal/20"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.20336 8.52048C33.4326 -1.25816 112.527 -2.48398 198.814 10.1585"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 tracking-tight max-w-2xl font-display">
                Introducing Haal-Chaal Pravartak — the Digital Gym for Heart &
                Lung Wellness.
              </p>

              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                Your airways are working every second of every day, yet most of
                us never think about them until something goes wrong. With just{" "}
                <strong className="text-brand-blue font-bold">
                  one hum and your smartphone
                </strong>
                , track your airway health in under a minute. No clinics, no
                equipment, no hassle.
              </p>

              <Link
                to="/checkup"
                className="inline-flex px-8 py-4 rounded-full bg-brand-teal text-white font-bold tracking-widest text-sm uppercase shadow-lg shadow-brand-teal/30 hover:bg-brand-blue transition-all gap-4 items-center group hover:-translate-y-1"
              >
                TRY THE WEB PLATFORM DEMO
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="bg-white/60 p-3 rounded-[3rem] backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative group bg-gradient-to-br from-slate-100 to-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-teal/5 z-0 transition-transform duration-1000" />
                  <Mic className="w-64 h-64 text-brand-teal opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000" />

                  <img
                    src="https://lh3.googleusercontent.com/d/17IBh0H4u4P38fqa1npFWxPyk6_4Ub6Fu"
                    alt="Haal-Chaal Pravartak"
                    className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                  />

                  {/* Floating Metric 1 */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-12 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-white/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200/50">
                      <Activity className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Airway Status
                      </p>
                      <p className="font-black text-slate-800 text-lg">
                        Optimal
                      </p>
                    </div>
                  </motion.div>

                  {/* Floating Metric 2 */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-12 -right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col gap-3 z-20 border border-white/50"
                  >
                    <div className="flex gap-1.5 items-end h-10 w-24">
                      {[30, 60, 40, 85, 55, 90, 70].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [`${h}%`, `${h * 0.4}%`, `${h}%`],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className="flex-1 bg-gradient-to-t from-brand-blue to-brand-teal rounded-sm"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Patency
                      </p>
                      <p className="font-black text-brand-blue text-xl">94</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: The Reality */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 mb-10 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-900/5 whitespace-nowrap z-0 pointer-events-none uppercase tracking-tighter">
              Reality
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white/40 backdrop-blur-md border border-white p-2 rounded-full inline-flex mx-auto mb-6 shadow-sm"
            >
              <div className="bg-brand-teal/10 px-6 py-1.5 rounded-full text-brand-teal font-black text-xs uppercase tracking-widest">
                Air Quality & Health
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-6 font-display tracking-tight relative z-10 uppercase leading-[1.1]"
            >
              The Air Around You Is Affecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                You More Than You Think
              </span>
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed relative z-10">
              India is home to some of the most polluted air on the planet.
              Millions of people from urban professionals to children breathe
              air laced with particulate matter, dust, and pollutants every
              single day.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 lg:gap-8 mb-12 md:mb-16 relative">
            {/* Background Blob for Bento */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white/40 blur-3xl rounded-full pointer-events-none z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 border border-white shadow-2xl shadow-slate-200/50 flex flex-col justify-between overflow-hidden relative group z-10 hover:bg-white transition-all duration-500"
            >
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-colors duration-1000 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto flex justify-between items-start">
                  <div>
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-2xl mb-6 border border-slate-100">
                      <Wind className="w-8 h-8 text-brand-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-blue mb-2 font-display">
                      Global Impact
                    </h3>
                    <p className="text-slate-500 font-medium text-lg max-w-sm">
                      Breathe air that exceeds WHO safety limits
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-12">
                  <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-brand-blue font-display tracking-tighter leading-none mb-3">
                    9<span className="text-brand-teal">/</span>10
                  </h2>
                  <p className="text-brand-teal font-black uppercase tracking-[0.2em] text-sm md:text-base">
                    People Worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-gradient-to-br from-brand-blue to-slate-900 rounded-[32px] md:rounded-[40px] p-8 md:p-10 border border-brand-blue/50 shadow-2xl relative overflow-hidden group z-10 animate-fade-in"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display">
                    Indian Cities
                  </h3>
                  <p className="text-brand-teal-light/80 font-medium text-base">
                    Of the world's most polluted cities are in India.
                  </p>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white font-display tracking-tighter mt-10 leading-none">
                  21
                  <span className="text-brand-teal-light/50 text-3xl">/30</span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-8 md:p-10 border border-white shadow-xl flex flex-col justify-center gap-5 z-10 group hover:bg-white transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-teal/5 transition-colors">
                <span className="text-3xl font-black text-brand-teal font-display">
                  2nd
                </span>
              </div>
              <div>
                <h4 className="font-bold text-brand-blue text-xl leading-tight mb-2 font-display">
                  Leading risk factor globally
                </h4>
                <p className="text-slate-500 font-medium text-base">
                  For non-communicable diseases.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-8 md:p-10 border border-white shadow-xl flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden z-10 group hover:bg-white transition-all duration-500"
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none group-hover:from-slate-100/50 transition-colors" />
              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-black text-brand-blue mb-3 font-display uppercase tracking-tight">
                  Most at Risk <br className="hidden md:inline" />& Unaware
                </h4>
                <p className="text-slate-600 font-medium text-base">
                  Children, the elderly, and outdoor workers.
                </p>
              </div>
              <div className="flex -space-x-4 relative z-10">
                {[Users, Heart, Stethoscope].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                  >
                    <Icon className="w-5 h-5 text-brand-teal" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-50 to-orange-50 border border-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 blur-3xl rounded-full pointer-events-none" />
            <h4 className="text-2xl lg:text-3xl font-black text-brand-blue tracking-tight font-display leading-[1.3] relative z-10">
              Pollution doesn't just affect your lungs on bad AQI days.
              <br className="hidden md:block" />
              <span className="text-rose-500">
                {" "}
                It silently narrows your airways
              </span>
              , day after day.
            </h4>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: UAO */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-brand-blue/20 to-transparent mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-1000" />
              <img
                src={airwayObstructionImg}
                alt="Airway Health"
                className="object-cover w-full h-full grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />

              {/* overlay frame */}
              <div className="absolute inset-0 border-[1px] border-white/30 rounded-[3rem] m-6 z-20 pointer-events-none mix-blend-overlay" />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 bottom-20 bg-white/80 backdrop-blur-2xl p-8 rounded-[32px] shadow-2xl border border-white/50 z-30 max-w-[300px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mb-6 shadow-inner border border-rose-200/50">
                <ShieldAlert className="w-8 h-8 text-rose-500" />
              </div>
              <p className="text-lg font-bold text-slate-800 leading-snug">
                Operates silently at the very entry point of your respiratory
                system.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
              <span className="text-brand-teal font-black uppercase tracking-widest text-xs">
                The Silent Threat
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-brand-blue mb-8 tracking-tighter font-display uppercase leading-[1]">
              What Is Upper <br /> Airway Obstruction?
            </h2>
            <p className="text-slate-600 text-2xl font-medium leading-relaxed mb-12">
              Upper Airway Obstruction (UAO) refers to the narrowing or blockage
              of the passages through which we breathe — the nose, throat, and
              upper trachea.
            </p>

            <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-10 lg:p-12 border border-white shadow-xl shadow-slate-200/40 mb-10">
              <h4 className="font-black text-brand-blue mb-8 font-display text-2xl uppercase tracking-tight">
                Causes & Aggravators
              </h4>
              <ul className="space-y-6">
                {[
                  "Chronic exposure to polluted or dusty air",
                  "Allergies and inflammatory responses",
                  "Occupational hazards (construction, manufacturing)",
                  "Lifestyle factors and posture",
                  "Ageing and natural tissue changes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-5 text-slate-700 font-bold text-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 border border-brand-teal/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div 
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 40px rgba(0, 96, 100, 0.15)" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="bg-gradient-to-br from-brand-blue to-slate-900 text-white p-10 lg:p-12 rounded-[40px] relative overflow-hidden shadow-2xl border border-brand-blue/30"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[80px] rounded-full pointer-events-none"></div>

              <h4 className="font-black text-brand-teal mb-6 font-display uppercase tracking-tight text-3xl relative z-10 flex items-center gap-4">
                <ShieldAlert className="w-8 h-8 text-rose-400" />
                Why it matters
              </h4>
              <p className="text-slate-205 font-bold text-lg md:text-xl leading-relaxed relative z-10">
                Left untracked, narrowed airways reduce oxygen efficiency,
                strain your heart, disrupt sleep, and reduce stamina.
                <span className="text-white font-black block mt-6 text-xl md:text-2xl border-l-4 border-brand-teal pl-6 leading-normal">
                  The problem isn't just that people have UAO. It's that most
                  don't know they do.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Ancient Wisdom */}
      <section className="mx-4 sm:mx-6 md:mx-12 lg:mx-20 my-6 md:my-10 py-10 md:py-14 px-5 sm:px-8 md:px-12 bg-gradient-to-br from-brand-blue to-slate-900 border border-brand-blue/50 rounded-[32px] md:rounded-[40px] relative overflow-hidden z-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand-teal/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[850px] mx-auto relative z-20 text-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-white/15 border border-white/25 rounded-2xl flex items-center justify-center mb-5 shadow-md backdrop-blur-md animate-bounce">
                <BookOpen className="w-7 h-7 text-brand-teal-light" />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-4 font-display tracking-tight uppercase leading-[0.95]">
                <span className="text-white block">Our Ancestors</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white block mt-1.5 font-display">
                  Knew.
                </span>
              </h2>
              <div className="h-1 w-20 bg-brand-teal mb-5 rounded-full shadow-sm" />
              <p className="text-xl md:text-2xl text-brand-teal-light font-black leading-tight mb-5 font-display uppercase tracking-tight">
                Science Now Confirms It.
              </p>
              <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-6 max-w-2xl text-center font-sans">
                Thousands of years ago, Indian yogic tradition developed
                Bhramari Pranayama, the "bee breath" — a humming breathing
                exercise known to calm the mind, open airways, and strengthen
                the respiratory system.
              </p>
              <div className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-[20px] max-w-2xl shadow-2xl hover:border-brand-teal/30 hover:bg-white/10 transition-all duration-500 relative overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <p className="text-slate-200 font-medium text-sm md:text-base leading-relaxed relative z-10 text-left">
                  <strong className="text-white font-black">
                    Modern science now validates what ancient practitioners knew
                    intuitively:
                  </strong>{" "}
                  the resonant frequency of a hum carries valuable information
                  about the physiological state of your airways.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Technology */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 mb-10 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-8 font-display uppercase tracking-tighter leading-none">
              The Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                Behind the Hum
              </span>
            </h2>
            <div className="inline-block px-6 py-3 bg-brand-teal/10 rounded-full mb-8 border border-brand-teal/20">
              <p className="text-xl text-brand-teal font-black uppercase tracking-widest text-sm">
                Digital Signal Processing meets Respiratory Medicine
              </p>
            </div>
            <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              When you hum, your vocal cords, nasal passages, and upper airway
              work together to produce a unique acoustic signal. Our proprietary
              DSP engine decodes what your airways are telling us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 border border-white shadow-2xl flex flex-col items-start relative overflow-hidden group hover:bg-white transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-[22px] flex items-center justify-center mb-6 shadow-sm relative z-10">
                <Activity className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-3xl font-black text-brand-blue mb-3 font-display uppercase tracking-tight relative z-10">
                Airway Patency Score
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium relative z-10 max-w-lg">
                Airway patency refers to how open and unobstructed your airway
                is. Our algorithm generates a patency score by analysing the
                harmonic content and resonance characteristics of your humming
                signal.
              </p>

              <div className="bg-slate-50/80 p-6 rounded-[24px] border border-slate-100 w-full relative z-10 mt-auto">
                <h4 className="font-black text-brand-blue mb-4 uppercase tracking-[0.2em] text-xs">
                  Status Categories
                </h4>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-base md:text-lg">
                        Optimal
                      </span>
                    </div>
                    <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-base md:text-lg">
                        Less Optimal
                      </span>
                    </div>
                    <Activity className="w-5.5 h-5.5 text-amber-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.5)]"></div>
                      <span className="font-bold text-slate-800 text-base md:text-lg">
                        Least Optimal
                      </span>
                    </div>
                    <ShieldAlert className="w-5.5 h-5.5 text-rose-500" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-bold mt-6 text-center w-full relative z-10 uppercase tracking-widest">
                Wellness assessment tool only. Not a diagnostic device.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 40px rgba(0, 96, 100, 0.15)" }}
              className="bg-gradient-to-br from-brand-blue to-slate-900 rounded-[32px] md:rounded-[40px] p-8 md:p-10 lg:p-12 border border-brand-blue/30 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/5 rounded-[22px] flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md">
                  <Cpu className="w-8 h-8 text-brand-teal-light" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 font-display uppercase tracking-tight">
                  What the Report <br />
                  Tells You
                </h3>

                <ul className="space-y-3.5 mb-auto">
                  {[
                    {
                      title: "Airway Patency Score",
                      desc: "Colour-coded instant visual feedback",
                    },
                    {
                      title: "Narrowing Likelihood",
                      desc: "Probability of airway obstruction",
                    },
                    {
                      title: "Airway Stability",
                      desc: "Day-wise and audio-wise analysis",
                    },
                    {
                      title: "Engagement Trends",
                      desc: "Track improvements over time",
                    },
                    {
                      title: "Algorithmic Insights Summary",
                      desc: "Plain-language insights, no medical jargon",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-4 md:p-5 bg-white/5 rounded-[20px] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-teal-light shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white text-lg leading-tight mb-2">
                          {item.title}
                        </p>
                        <p className="text-slate-400 font-medium text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How it works */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-24 mb-16 relative z-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-28">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-100 rounded-full mb-8 border border-slate-200">
              <Zap className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-800">
                Under 1 Minute
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-8 font-display uppercase tracking-tighter leading-none">
              Your Phone Is Now <br />
              <span className="text-brand-blue">Your Digital Gym</span>
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-medium max-w-3xl mx-auto">
              An instant airway check, powered purely by your voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>

            {[
              {
                step: "01",
                title: "Open Platform",
                desc: "Scan the WhatsApp QR Code or open the web platform directly",
                icon: QrCode,
              },
              {
                step: "02",
                title: "Position Mic",
                desc: "Orient your smartphone mic towards your mouth",
                icon: Mic,
              },
              {
                step: "03",
                title: "Hum for 7s",
                desc: "Hum for 7 seconds, inspired by the Bhramari breathing technique",
                icon: Clock,
              },
              {
                step: "04",
                title: "Get Score",
                desc: "Check your visualiser, submit and get your airway score instantly",
                icon: Activity,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-slate-50/50 p-10 pt-16 rounded-[40px] border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 z-10"
              >
                <div className="text-8xl font-black text-slate-900/[0.03] absolute -top-12 -left-8 font-display select-none transition-transform duration-700 group-hover:scale-105 group-hover:text-slate-900/[0.05] pointer-events-none leading-none z-0">
                  {item.step}
                </div>
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-lg shadow-slate-200/50 mb-10 relative z-10 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-brand-teal" />
                </div>
                <h3 className="text-3xl font-black text-brand-blue mb-4 relative z-10 uppercase tracking-tight font-display">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-medium text-lg relative z-10 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Choose your mode */}
      <section className="mx-6 md:mx-12 lg:mx-24 my-10 py-12 md:py-16 px-6 md:px-12 bg-gradient-to-br from-brand-blue to-slate-900 border border-brand-blue/50 rounded-[40px] md:rounded-[48px] relative overflow-hidden z-10 shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-12 left-12 w-96 h-96 bg-brand-teal/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative z-10 font-display">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 uppercase tracking-tight leading-none text-white">
            Choose Your Mode
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-4 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[32px] hover:border-brand-teal/40 hover:bg-white/10 shadow-xl transition-all duration-500 group flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                  <Zap className="w-7 h-7 text-brand-teal-light" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight font-display">
                  WhatsApp Mode
                </h3>
                <p className="text-slate-300 leading-relaxed font-semibold text-base">
                  Weekly trend assessment. Track how your airway health evolves
                  over days and weeks, delivered directly in WhatsApp, no app
                  download needed.
                </p>
              </div>
              
              <div className="mt-8 relative z-10">
                <a
                  href="https://wa.me/918451915951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-black tracking-widest text-xs uppercase hover:bg-[#128C7E] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/15 gap-2 items-center group"
                >
                  <MessageCircle className="w-4 h-4 text-white stroke-[2.5]" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[32px] hover:border-brand-teal/40 hover:bg-white/10 shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                  <PlayCircle className="w-7 h-7 text-brand-teal-light" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight font-display">
                  Web Platform Mode
                </h3>
                <p className="text-slate-300 leading-relaxed font-semibold text-base mb-6">
                  Instant score. Open the platform, hum, and get your result in
                  real time. Ideal for first-time users and quick check-ins.
                </p>
              </div>
              <div className="relative z-10 mt-2">
                <Link
                  to="/checkup"
                  className="inline-flex px-6 py-3.5 rounded-xl bg-brand-teal text-white font-black tracking-widest text-xs uppercase hover:bg-white hover:text-brand-blue transition-all shadow-lg gap-2 items-center group"
                >
                  Try the Web Platform
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-white group-hover:text-brand-blue" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Who is this for */}
      <section className="py-20 px-6 md:px-12 lg:px-24 mb-32 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50/80 text-cyan-800 rounded-full font-bold text-xs border border-cyan-100 uppercase tracking-widest mb-6">
            ✨ Universal Companion
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue mb-6 font-display uppercase tracking-tighter leading-none">
            Precision Airway Care <br />
            <span className="text-brand-teal">Engineered for Every Lifestyle</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Urban Professionals - Wide Layout, Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-10 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-2xl rounded-full pointer-events-none" />
            <div className="w-full md:w-[45%] shrink-0 relative overflow-hidden rounded-[32px]">
              <CardImage 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
                alt="Urban Professionals" 
                icon={Users} 
              />
              <div className="absolute top-4 left-4 bg-brand-blue text-white p-3 rounded-2xl shadow-lg">
                <Users className="w-5 h-5 text-[#00E5FF]" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-brand-teal text-xs font-black uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100 inline-block">Daily Stressors</span>
              <h4 className="text-2xl md:text-3xl font-black text-brand-blue font-display uppercase tracking-tight">
                Urban Professionals
              </h4>
              <p className="text-[#334155] font-semibold text-lg leading-relaxed">
                Battling daily traffic congestion, smog, recirculated office air, PM2.5 particulates, and systemic workspace stress that constricts breathing.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Industrial & Field Workers - Vertical Layout with dynamic rotation cover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-white to-slate-50/50 p-8 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group flex flex-col justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-2xl rounded-full pointer-events-none" />
            <div className="flex flex-col h-full justify-between">
              <div className="relative overflow-hidden rounded-[32px] mb-6">
                <CardImage 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial & Field Workers" 
                  icon={ShieldCheck} 
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white p-3 rounded-2xl shadow-lg">
                  <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
                </div>
              </div>
              <div>
                <span className="text-blue-500 text-xs font-black uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-3">High Exposure</span>
                <h4 className="text-2xl font-black text-brand-blue font-display uppercase tracking-tight mb-3">
                  Industrial Workers
                </h4>
                <p className="text-[#334155] font-semibold text-base leading-relaxed">
                  Exposed to abrasive silica dust, combustion fumes, organic fibers, and heavy industrial aerosols on site.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Senior Citizens - Image at the Bottom (Reverse vertical layout) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white to-slate-50/50 p-8 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group flex flex-col justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-2xl rounded-full pointer-events-none" />
            <div className="flex flex-col gap-6 h-full justify-between">
              <div>
                <span className="text-rose-500 text-xs font-black uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block mb-3">Airway Elasticity</span>
                <h4 className="text-2xl font-black text-brand-blue font-display uppercase tracking-tight mb-3">
                  Senior Citizens
                </h4>
                <p className="text-[#334155] font-semibold text-base leading-relaxed mb-4">
                  Easily track natural age-related changes in airway compliance, optimal gas transfer, and diaphragmatic rhythm.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[32px] mt-auto">
                <CardImage 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" 
                  alt="Senior Citizens" 
                  icon={Heart} 
                />
                <div className="absolute bottom-4 left-4 bg-brand-blue text-white p-3 rounded-2xl shadow-lg">
                  <Heart className="w-5 h-5 text-[#00E5FF]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Children & Parents - Wide layout, Horizontal style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-10 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-2xl rounded-full pointer-events-none" />
            <div className="w-full md:w-[45%] shrink-0 relative overflow-hidden rounded-[32px]">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-[24px] relative border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" 
                  alt="Children & Parents" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-brand-blue text-white p-3 rounded-2xl shadow-lg ring-4 ring-white/10">
                  <Fingerprint className="w-5 h-5 text-[#00E5FF]" />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="text-violet-500 text-xs font-black uppercase tracking-widest bg-violet-50 px-3 py-1 rounded-full border border-violet-100 inline-block">Proactive Care</span>
              <h4 className="text-2xl md:text-3xl font-black text-brand-blue font-display uppercase tracking-tight">
                Children & Parents
              </h4>
              <p className="text-[#334155] font-semibold text-lg leading-relaxed">
                Empower families with quick, non-invasive digital check-ups to safeguard sensitive pediatric lung passages from triggers.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Healthcare Professionals - Giant full-width layout covering 3 columns (White style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white to-slate-50/50 p-8 md:p-12 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden"
          >
            {/* Visual background ambient light */}
            <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />

            <div className="w-full lg:w-[40%] shrink-0 relative overflow-hidden rounded-[32px] border border-slate-100 shadow-xl">
              <CardImage 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Professionals" 
                icon={Stethoscope} 
              />
              <div className="absolute top-4 right-4 bg-brand-blue text-white p-3 rounded-2xl shadow-lg ring-4 ring-white/10">
                <Stethoscope className="w-5 h-5 text-[#00E5FF]" />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <span className="text-brand-teal text-xs font-black uppercase tracking-widest bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 inline-block">Clinical Applications</span>
              <h4 className="text-3xl md:text-4xl font-black text-brand-blue font-display uppercase tracking-tight">
                Healthcare Providers
              </h4>
              <p className="text-[#334155] font-semibold text-lg md:text-xl leading-relaxed">
                Equip clinical workspaces, wellness programs, and community clinics with a non-invasive, instant, cost-effective screening tool that complements traditional PFT testing flawlessly.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-100 text-xs font-black text-[#014f56] shadow-sm">✓ No Consumables</span>
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-100 text-xs font-black text-[#014f56] shadow-sm">✓ 7-Second Capture</span>
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-100 text-xs font-black text-[#014f56] shadow-sm">✓ Objective Acoustics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: Footer CTA */}
      <section className="text-center px-4 sm:px-6 md:px-12 py-16 sm:py-24 md:py-40 max-w-[1200px] mx-auto mb-20 bg-gradient-to-br from-brand-blue to-slate-900 border border-brand-blue/50 rounded-[32px] sm:rounded-[56px] md:rounded-[80px] relative z-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand-teal/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent opacity-50 relative z-20" />

        <div className="relative z-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-10 font-display uppercase tracking-tighter leading-[0.9]">
            Start Your Airway <br />
            Journey Today
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-slate-300 mb-12 sm:mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
            No equipment. No clinic visit. Just your voice, your phone, and 7
            seconds.
          </p>

          <Link
            to="/checkup"
            className="inline-flex px-8 sm:px-14 py-5 sm:py-7 rounded-[1.5rem] sm:rounded-[2rem] bg-brand-teal text-white font-black tracking-[0.2em] text-xs sm:text-sm uppercase hover:bg-white hover:text-brand-blue transition-all shadow-[0_20px_50px_-15px_rgba(0,151,167,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(0,151,167,0.8)] mb-12 sm:mb-20 gap-3 sm:gap-5 items-center group hover:-translate-y-2"
          >
            Try Haal-Chaal Pravartak
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
              <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-white group-hover:text-brand-blue" />
            </div>
          </Link>

          <div className="text-slate-400 font-medium space-y-6 pt-16 border-t border-white/10 w-full max-w-xl mx-auto">
            <p className="text-brand-teal-light uppercase tracking-[0.3em] font-black text-sm">
              Breathe Strong. Live Strong.
            </p>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
              By Tech AtrioCare Private Limited: An Atrium for Innovation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
