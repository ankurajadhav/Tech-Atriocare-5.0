import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Heart,
  Brain,
  Zap,
  ShieldCheck,
  Database,
  Search,
  Microscope,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Cpu,
  ChevronRight,
  Activity,
  Wind,
  Target,
  Stethoscope,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Quote,
  Star,
  ArrowUpRight,
  Calendar,
  BookOpen,
  Leaf,
  Dna,
  Info,
  HelpCircle,
  GraduationCap,
  Building2,
  School,
  Linkedin,
  Instagram,
  MessageSquare,
  ShieldAlert,
  HeartHandshake,
  HeartPulse,
  Pill,
  Clock,
  FileText,
  Mic,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";
import RecognitionsSection from "../components/RecognitionsSection";
import { useState } from "react";
import JoinUsModal from "../components/JoinUsModal";
import NoviculeInfoModal from "../components/NoviculeInfoModal";
import FeaturedInsightsSlider from "../components/FeaturedInsightsSlider";
import PumpingHeartVisualizer from "../components/PumpingHeartVisualizer";
// Clean imports of custom corporate About Us card assets
import aboutWhoWeAre from "../assets/images/about_who_we_are_1779734460143.png";
import aboutHowWeStarted from "../assets/images/about_how_we_started_1779734477684.png";
import aboutOurVision from "../assets/images/about_our_vision_1779734494009.png";
import clinicalLabDoctors from "../assets/images/clinical_lab_doctors_1779800211382.png";
import neuralAnalysisGirl from "../assets/images/neural_analysis_girl_1779800243404.png";
import futuristicLungHero from "../assets/images/futuristic_lung_hero_1779727247618.png";

interface InteractiveCardProps {
  src: string;
  alt: string;
  tag?: string;
  title?: string;
  delay?: number;
  className?: string;
}

function InteractiveCard({
  src,
  alt,
  tag = "",
  title = "",
  delay = 0,
  className = "w-1/2 aspect-[3/4.2]",
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isColored, setIsColored] = useState(false);

  // Motion values for tracking cursor position smoothly without re-rendering React
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Spring configuration for extremely fluid, organic movement
  const springConfig = { damping: 25, stiffness: 180, mass: 0.8 };

  // Calculate high fidelity parallax and tilt rotation angles
  const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);

  // Background image moves slightly in contrast to container rotation, creating 3D depth
  const imageX = useSpring(useTransform(x, [0, 1], [10, -10]), springConfig);
  const imageY = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);

  // Accent and text shift forward in 3D perspective space the closer the cursor gets
  const textX = useSpring(useTransform(x, [0, 1], [-6, 6]), springConfig);
  const textY = useSpring(useTransform(y, [0, 1], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates from 0 to 1 relative to card dimensions
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset back to the perfect center state
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsColored(!isColored)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      className={cn(
        "relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_28px_60px_rgba(14,165,233,0.14)] border border-slate-100/50 group cursor-pointer select-none",
        className
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          x: imageX,
          y: imageY,
        }}
        animate={{
          scale: isHovered ? 1.08 : 1.01,
          filter: isColored
            ? "grayscale(0%) contrast(1.02) brightness(1.0)"
            : "grayscale(100%) contrast(1.05) brightness(0.95)",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-[110%] h-[110%] -left-[5%] -top-[5%] absolute object-cover origin-center"
        onError={(e) => {
          if (alt.toLowerCase().includes("clinical") || src.includes("clinical_lab_doctors")) {
            e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600";
          } else {
            e.currentTarget.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600";
          }
        }}
      />

      {/* High precision atmospheric coloring overlays - conditional on having tag/title to guarantee maximum brightness & clarity */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300 pointer-events-none",
        (tag || title)
          ? "bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-brand-teal/5 opacity-80 group-hover:opacity-90"
          : "bg-slate-950/5 opacity-10 group-hover:opacity-[0.02]"
      )} />
      
      {!isColored && (tag || title) && (
        <div className="absolute inset-0 bg-brand-teal/5 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Shimmer / light reflection sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[120%] transition-transform duration-[1200ms] ease-out" />
      </div>

      {/* Modern interactive edge glow */}
      <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/15 group-hover:ring-brand-teal/30 transition-all duration-300" />

      {/* Content wrapper with translateZ to separate from image layer in 3D */}
      {(tag || title) && (
        <motion.div
          style={{
            x: textX,
            y: textY,
            transform: "translateZ(40px)",
          }}
          className="absolute bottom-6 left-6 right-6 z-10"
        >
          {tag && (
            <span className="text-[10px] font-black tracking-[0.25em] text-[#00E5FF] uppercase block mb-1 group-hover:text-cyan-300 transition-colors">
              {tag}
            </span>
          )}
          {title && (
            <h4 className="text-xl md:text-2xl font-black text-white leading-tight uppercase font-display select-none">
              {title}
            </h4>
          )}

          {/* Sleek animation accent bar */}
          {title && (
            <div className="w-0 h-[2px] bg-[#00E5FF] group-hover:w-16 transition-all duration-500 delay-100 mt-3 rounded-full" />
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Home() {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
  }>({
    isOpen: false,
    title: "",
    description: "",
  });

  const [isNoviculeModalOpen, setIsNoviculeModalOpen] = useState(false);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [serviceEnquirySuccess, setServiceEnquirySuccess] = useState(false);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsServiceModalOpen(true);
    setServiceEnquirySuccess(false);
    setServiceForm({ name: "", phone: "", email: "", message: "" });
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setServiceEnquirySuccess(true);
  };

  const openPartnerModal = () => {
    setModalConfig({
      isOpen: true,
      title: "Connect with Tech AtrioCare",
      description:
        "Join our network of healthcare innovators and help us bring transformative wellness to every doorstep.",
    });
  };

  const openCaseStudyModal = () => {
    setModalConfig({
      isOpen: true,
      title: "Request Case Studies",
      description:
        "Get detailed insights into our clinical pilot studies and technological validation results.",
    });
  };

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 px-4 md:px-8 overflow-hidden bg-gradient-to-tr from-sky-100 via-[#e0f2fe]/95 to-cyan-100/60">
        {/* Cinematic Lung Visualization Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{
              scale: [1.06, 1, 1.06],
              opacity: 0.95,
            }}
            transition={{
              scale: { duration: 60, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2 },
            }}
            className="absolute inset-0 bg-no-repeat bg-[size:155%_auto] bg-[position:right_center] sm:bg-cover sm:bg-[position:right_5%_center] mix-blend-multiply opacity-[0.88]"
            style={{ backgroundImage: `url(${futuristicLungHero})` }}
          />

          {/* Core Cinematic Overlays to provide immaculate contrast and negative space */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 via-sky-50/10 to-sky-100/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/70 via-sky-50/55 to-transparent" />

          {/* Animated Biometric Grid */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.08] medical-grid pointer-events-none"
            style={{ backgroundSize: "160px 160px" }}
          />
        </div>

        {/* Breathing Oxygen Particles & Wave Rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Wave Breathing Rings */}
          <div className="absolute inset-x-0 top-[20%] flex items-center justify-center opacity-40">
            <motion.div
              animate={{
                scale: [0.92, 1.15, 0.92],
                opacity: [0.1, 0.28, 0.1],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[500px] h-[500px] rounded-full border-2 border-brand-teal/15 blur-[20px] absolute"
            />
            <motion.div
              animate={{
                scale: [0.85, 1.25, 0.85],
                opacity: [0.06, 0.18, 0.06],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="w-[750px] h-[750px] rounded-full border border-cyan-400/10 blur-[35px] absolute"
            />
          </div>

          {/* Glowing Oxygen Micro-particles */}
          {Array.from({ length: 18 }).map((_, i) => {
            const size = Math.random() * 7 + 3;
            const horizontalTravel = (Math.random() - 0.5) * 60;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-tr from-brand-teal/80 to-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 85 + 5}%`,
                  bottom: `${Math.random() * 50 + 5}%`, // float from mid-lower screen
                }}
                animate={{
                  y: [0, -280 - Math.random() * 180],
                  x: [0, horizontalTravel, horizontalTravel * 1.5],
                  opacity: [0, 0.5, 0.8, 0.3, 0],
                  scale: [0.6, 1.3, 0.8, 0.5],
                }}
                transition={{
                  duration: 14 + Math.random() * 16,
                  repeat: Infinity,
                  delay: Math.random() * 12,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-brand-light-teal/15 blur-[240px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.25, 1, 1.25],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-brand-teal/10 blur-[220px] rounded-full pointer-events-none"
          />

          {/* Sophisticated Floating Technical Assets */}
          {[
            { Icon: Heart, top: "15%", left: "15%", size: 52, delay: 0 },
            { Icon: Activity, top: "35%", left: "85%", size: 80, delay: 1 },
            { Icon: Wind, top: "75%", left: "12%", size: 65, delay: 2 },
            { Icon: Sparkles, top: "18%", left: "75%", size: 45, delay: 0.5 },
            { Icon: Microscope, top: "60%", left: "90%", size: 50, delay: 4 },
            { Icon: ShieldCheck, top: "40%", left: "8%", size: 40, delay: 3 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.35, 0.2],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18 + idx * 4,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className="absolute text-brand-teal hidden lg:flex items-center justify-center"
              style={{ top: item.top, left: item.left }}
            >
              <div className="relative">
                <item.Icon
                  size={item.size}
                  strokeWidth={0.5}
                  className="drop-shadow-sm opacity-35"
                />
                <div className="absolute inset-0 bg-brand-teal/5 blur-xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start justify-start text-left relative z-10 w-full pt-8 px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left w-full"
          >
            {/* Actual Animated Company Logo (Comes first in hero, touched up with high-end sci-fi animations) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 relative flex flex-col items-start gap-4"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                {/* 1. Pulse glowing background halo */}
                <motion.div
                  animate={{
                    scale: [0.95, 1.15, 0.95],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-4 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"
                />

                {/* 2. Tech orbital outline ring 1 (clockwise) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-teal-500/30 p-2 pointer-events-none"
                />

                {/* 3. Tech orbital outline ring 2 with notch (counter-clockwise) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-3 rounded-full border border-teal-400/15 p-2 pointer-events-none"
                />

                {/* 4. Glowing satellite node orbiting */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
                </motion.div>

                {/* 5. Natural Frameless container with actual logo image in natural view */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center relative z-10 select-none group"
                >
                  {/* Elegant soft white glowing backdrop to define a clean base, preventing any discolored or blackish tints under multiply blend mode */}
                  <div className="absolute w-36 h-36 bg-white rounded-full blur-xl opacity-95 pointer-events-none z-0" />

                  {/* Actual high-quality logo image in natural view with blend mode and drop shadow */}
                  <img
                    src="https://www.techatriocare.com/logo_gif.gif"
                    alt="Tech AtrioCare Logo"
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-[0_12px_32px_rgba(0,96,100,0.18)]"
                    style={{ mixBlendMode: 'multiply' }}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Company Name (Placed strictly below the logo) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2, type: "spring", damping: 25 }}
              className="mb-8 relative group cursor-default"
            >
              <div className="relative w-full">
                <h1 className="block text-3xl min-[380px]:text-4xl sm:text-5xl md:text-7xl font-black text-[#006064] uppercase tracking-tighter font-display leading-[0.9] group-hover:text-brand-teal transition-all duration-700">
                  <span className="text-brand-teal relative inline-block">
                    Tech AtrioCare
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.0, duration: 1.2 }}
                      className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-brand-teal to-blue-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    />
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Advanced & Premium Typography Slogan Block */}
            <div className="relative pl-8 sm:pl-10 pt-4 pb-1.5 sm:pt-5 sm:pb-2.5 pr-6 text-left mb-1 max-w-2xl select-none group">
              {/* Premium sleek dual-layer accent line left-side */}
              <div className="absolute left-0 top-0 bottom-0 w-[4.5px] bg-gradient-to-b from-[#006064] via-brand-teal to-transparent rounded-full opacity-90 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(20,184,166,0.6)]" />
              <div className="absolute left-[9px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-[#006064]/20 via-slate-200 to-transparent opacity-80" />
              
              {/* Core luxury pulsing crown dot */}
              <div className="absolute -left-[3px] top-0 w-2.5 h-2.5 rounded-full bg-brand-teal shadow-[0_0_12px_rgba(20,229,255,0.8)] scale-90 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Ultra-soft elegant radial color backlights (teal-to-cyan) */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-80 h-40 bg-gradient-to-r from-[#006064]/5 via-brand-teal/8 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#006064]/10 transition-all duration-700" />

              {/* Large, super elegant, light quote-mark watermark */}
              <span className="absolute -top-7 -left-1 font-serif text-8xl text-[#006064]/5 opacity-60 pointer-events-none select-none tracking-tighter leading-none group-hover:text-brand-teal/10 transition-colors duration-500">
                “
              </span>

              <p className="relative z-10 text-slate-700 text-base sm:text-lg md:text-2xl font-sans font-light leading-relaxed sm:leading-relaxed tracking-wide">
                <span className="text-slate-500 font-light">In the atrium of </span>
                <span className="font-extrabold tracking-tight bg-gradient-to-r from-[#004d40] via-[#006064] to-brand-teal bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block pr-1">
                  innovation
                </span>
                <span className="text-slate-500 font-light">, </span>
                <span className="text-slate-600 font-medium">research and development</span>{" "}
                <span className="relative inline-block pr-1 font-serif italic text-[#006064] font-medium tracking-tight whitespace-nowrap">
                  craft the wonders of tomorrow
                  <span className="absolute left-0 right-0 bottom-1 h-[2px] bg-gradient-to-r from-brand-teal/40 via-[#006064]/30 to-transparent pointer-events-none rounded-full" />
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-6 w-full">
              <Link
                to="/checkup"
                className="relative atrio-gradient text-white px-12 py-7 rounded-full font-black shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:-translate-y-2.5 transition-all flex items-center gap-7 group w-full sm:w-auto justify-center overflow-hidden active:scale-95"
              >
                {/* Advanced Light dynamics */}
                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-white/20 rounded-full blur-3xl"
                />

                <motion.div
                  animate={{ x: "600%" }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[45deg]"
                />

                <div className="flex flex-col items-start leading-tight relative z-10 text-left">
                  <span className="text-xl uppercase tracking-tighter font-display leading-tight py-1 bg-clip-text">
                    1-min Digital <br className="md:hidden" /> Check-Up
                  </span>
                </div>
                <div className="bg-white p-3 rounded-full relative z-10 text-brand-teal shadow-2xl group-hover:scale-125 transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Press/Challenge Insights Slider */}
      <FeaturedInsightsSlider
        onOpenNoviculeModal={() => setIsNoviculeModalOpen(true)}
      />

      {/* About Our Mission Section */}
      <section
        id="about"
        className="py-16 sm:py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-[#f0f9fa]/80 via-white to-sky-50/20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Heading matching company look */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-3 px-4.5 py-1.5 bg-white/95 border border-sky-100/60 rounded-full shadow-[0_12px_28px_rgba(14,165,233,0.05)] backdrop-blur-md"
              >
                <div className="w-11 h-11 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="https://www.techatriocare.com/logo.webp"
                    alt="AtrioCare Shield"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-[#006064] uppercase tracking-widest leading-none font-sans">
                    TECH ATRIOCARE
                  </p>
                </div>
              </motion.div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-[#006064] mb-4">
              Our Core Purpose
            </h2>
            <p className="text-slate-500 font-medium">
              To deliver holistic, accessible, and high-quality healthcare using
              cutting-edge technology.
            </p>
          </div>

          {/* Cards Timeline Container */}
          <div className="relative mt-20 max-w-6xl mx-auto px-4 mb-8">
            {/* Horizontal Timeline Connector Line with custom gradient spanning the cards */}
            <div className="absolute top-[230px] left-0 right-0 h-[4px] bg-gradient-to-r from-teal-400 via-amber-500/80 to-emerald-400 -translate-y-1/2 hidden md:block z-0" />

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {/* Card 1: Who are we? */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(15,118,110,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#E0F7FA]/80 flex items-center justify-center mb-8 border border-cyan-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutWhoWeAre}
                      alt="Who we are"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    Who are we?
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    We are a 'health and wellness tech' focused R&D startup. We
                    develop research-driven solutions for a holistic heart and
                    lung wellness ecosystem.
                  </p>
                </motion.div>
                {/* Turquoise timeline dot centered below Card 1 */}
                <div className="hidden md:block w-4.5 h-4.5 rounded-full bg-[#00b4d8] border-[3.5px] border-white shadow-md mt-10 z-20" />
              </div>

              {/* Card 2: How we started */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(202,138,4,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#FFF8E1]/80 flex items-center justify-center mb-8 border border-amber-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutHowWeStarted}
                      alt="How we started"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    How we started
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    During the pandemic lockdown, when the heart-wrenching
                    numbers of COVID-19 related deaths were floating in every
                    tabloids, during such gloomy days, the founder realized the
                    healing power of simple greetings from the dear ones like
                    'How are you? Haal-chaal kaisa hai?' -symbolizing care and
                    wellness.
                  </p>
                </motion.div>
                {/* No timeline dot centered below Card 2 because it is taller and stretches lower */}
                <div className="hidden md:block w-4.5 h-4.5 invisible mt-10" />
              </div>

              {/* Card 3: Vision */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center transition-all hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(16,185,129,0.06)] relative z-10 min-h-[460px] w-full"
                >
                  <div className="w-36 h-36 rounded-[30px] bg-[#E8F5E9]/80 flex items-center justify-center mb-8 border border-emerald-100/80 shadow-md overflow-hidden p-2">
                    <img
                      src={aboutOurVision}
                      alt="Vision"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#006064] mb-4 tracking-tight">
                    Vision
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    To empower holistic wellness through 'technology &
                    personalized therapy'.
                  </p>
                </motion.div>
                {/* Emerald green timeline dot centered below Card 3 */}
                <div className="hidden md:block w-4.5 h-4.5 rounded-full bg-[#06d6a0] border-[3.5px] border-white shadow-md mt-10 z-20" />
              </div>
            </div>
          </div>

          {/* Three Core Pillars Cards below timeline */}
          <div className="grid md:grid-cols-3 gap-12 mt-24 max-w-5xl mx-auto text-center px-4">
            {/* Pillar 1: R&D */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#00b4d8] text-white font-black text-sm flex items-center justify-center mb-6 shadow-md shadow-cyan-200/50 group-hover:scale-110 transition-transform">
                R&D
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                Research Driven
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Evidence-based solutions for real-world impact
              </p>
            </div>

            {/* Pillar 2: Smart Tech */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#ffb703] text-white font-black flex items-center justify-center mb-6 shadow-md shadow-amber-200/50 group-hover:scale-110 transition-transform font-sans">
                <Brain className="w-6 h-6 stroke-white stroke-2" />
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                Smart Technology
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Intelligent technology for personalized care
              </p>
            </div>

            {/* Pillar 3: Holistic Care */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-[#06d6a0] text-teal-950 font-black text-sm flex items-center justify-center mb-6 shadow-md shadow-emerald-200/50 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-white stroke-none" />
              </div>
              <h3 className="text-xl font-bold text-[#006064] mb-3 tracking-snug">
                Holistic Care
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                Complete wellness ecosystem for heart & lung health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Led Research Section */}
      <section
        id="evidence-research"
        className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white via-cyan-50/20 to-white border-b border-slate-100 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Bullets */}
            <div className="lg:col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#006064] font-display uppercase leading-[0.9] tracking-tighter">
                  Evidence-Led <br />
                  Research. <br />
                  <span className="text-brand-teal">Intelligent</span> <br />
                  Performance.
                </h2>
              </motion.div>

              <div className="space-y-10 max-w-xl">
                {/* Research-First Approach */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#E0F7FA]/80 border border-cyan-100/80 flex items-center justify-center text-[#0097A7] shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Microscope className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-brand-teal transition-colors">
                      Research-First Approach
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Our solutions are born from rigorous clinical research at
                      IIT Delhi's world-class labs.
                    </p>
                  </div>
                </motion.div>

                {/* Proprietary Biomarker Analytics */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#FFF8E1]/80 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Brain className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-amber-500 transition-colors">
                      Proprietary Biomarker Analytics
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Advanced digital signal algorithms designed to examine and
                      identify indicators of potential cardiopulmonary distress.
                    </p>
                  </div>
                </motion.div>

                {/* Holistic Digital Wellness */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 rounded-[20px] bg-[#E8F5E9]/80 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#006064] tracking-tight group-hover:text-emerald-500 transition-colors">
                      Holistic Digital Wellness
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      Moving beyond diagnosis to provide integrated
                      rehabilitation and physical wellness.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider Column */}
            <div className="hidden lg:col-span-1 lg:flex justify-center h-full min-h-[400px] items-center relative select-none">
              <div className="w-px h-[450px] bg-slate-200/40" />
            </div>

            {/* Right Column: Two Custom Dynamic Interactive Cards Staggered Vertically (Up and Down) */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto select-none relative z-10">
              {/* Dynamic Background glowing orb behind stack */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-100/30 blur-3xl rounded-full pointer-events-none -z-10" />

              {/* Upper Card - Displaying first exhibition image (landscape oriented) */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-brand-teal/20 to-[#00E5FF]/20 blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 pointer-events-none" />
                <InteractiveCard
                  src="https://lh3.googleusercontent.com/d/1SKBflIY5N2trHiM4bc-1Gadhg6quYpj7"
                  alt="Clinical Research Exhibition Booth"
                  className="w-full aspect-[3/2] rounded-[36px]"
                  delay={0}
                />
                <div className="mt-3 px-4 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-cyan-800/60 uppercase">
                  <span>Exhibition Showcase</span>
                  <span>Haal-Chaal Platform</span>
                </div>
              </div>

              {/* Lower Card - Displaying second exhibition image (poster presentation - landscape oriented for clear details) */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-[#00E5FF]/20 to-brand-teal/20 blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 pointer-events-none" />
                <InteractiveCard
                  src="https://lh3.googleusercontent.com/d/1AV6zckTUvAaFLAoVFEumwficYVfpi6PD"
                  alt="Haal Chaal Product Display Workspace"
                  className="w-full aspect-[3/2] rounded-[36px]"
                  delay={0.15}
                />
                <div className="mt-3 px-4 flex items-center justify-between text-xs font-mono font-bold tracking-wider text-cyan-800/60 uppercase">
                  <span>Field Presentation</span>
                  <span>Analytical Instrument</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="products"
        className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gradient-to-b from-sky-100/40 via-white to-[#e0f2fe]/40 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-200/20 blur-[120px] rounded-full translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Product Ecosystem
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display text-[#006064] leading-tight mb-4 tracking-tight">
                Advanced <span className="gradient-text">Heart</span> <br />{" "}
                and Lung
              </h2>
              <p className="text-slate-500 text-xs sm:text-base md:text-lg font-medium max-w-xl">
                An integrated platform of technology and formulation engineered to transform advanced preventive cardiac wellness.
              </p>
            </div>
          </div>

          {/* Our Products Heading */}
          <div className="mb-14 text-center relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#006064] tracking-tight mb-6 font-display">
              Our <span className="bg-gradient-to-r from-[#006064] to-brand-teal bg-clip-text text-transparent">Products</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-teal to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {/* Haal-Chaal Pravartak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,96,100,0.1)] transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden relative bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 pointer-events-none" />
                <img
                  src="https://lh3.googleusercontent.com/d/1EvUgiFzzksFr0vEBLi6Cr7cC49YNVNf9"
                  alt="Haal-Chaal Pravartak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-6 lg:p-6 xl:p-7 flex flex-col flex-1 relative z-20">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg absolute -top-6 left-6 md:left-7 group-hover:-translate-y-1 group-hover:shadow-brand-teal/20 transition-all duration-500 text-brand-teal">
                  <Mic className="w-5 h-5" />
                </div>
                <Link
                  to="/haal-chaal-pravartak"
                  className="hover:text-[#0097A7] transition-colors text-left group-hover:text-[#006064]"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006064] mt-2 mb-2 tracking-tight">
                    Haal-Chaal Pravartak
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 font-medium">
                  The world's first digital wellness portal for heart and lung health. Evaluate your airway patency in under 60 seconds with a single voice hum on your smartphone. No clinical visits or complex equipment required.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Acoustic Vocal Marker Assessment
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Digital Signal Processing (DSP) Airway Scoring
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/haal-chaal-pravartak"
                    className="w-full py-3 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 cursor-pointer text-sm"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Haal-Chaal Pravartak 1.0 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,96,100,0.1)] transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden relative bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 pointer-events-none" />
                <img
                  src="https://lh3.googleusercontent.com/d/1upNggZQ_44AhyV441cKaaW3kCdofcvhq"
                  alt="Haal-Chaal Pravartak Screening"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-6 lg:p-6 xl:p-7 flex flex-col flex-1 relative z-20">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg absolute -top-6 left-6 md:left-7 group-hover:-translate-y-1 group-hover:shadow-brand-teal/20 transition-all duration-500 text-brand-teal">
                  <Activity className="w-5 h-5" />
                </div>
                <Link
                  to="/haal-chaal"
                  className="hover:text-[#0097A7] transition-colors text-left group-hover:text-[#006064]"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006064] mt-2 mb-2 tracking-tight">
                    Haal-Chaal Pravartak 1.0
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 font-medium">
                  India's premier 14-day respiration habituation program and group breath challenge. Engage your vital respiratory system with daily 7-second humming routines, monitored by research-validated acoustic telemetry.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    7-Second Acoustic Screener
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Structured Bio-Feedback Training
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/haal-chaal"
                    className="w-full py-3 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 cursor-pointer text-sm"
                  >
                    Explore Haal-Chaal
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* V-sync */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(37,99,235,0.1)] transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden relative bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 pointer-events-none" />
                <img
                  src="https://lh3.googleusercontent.com/d/1ptFsvNYiSlaSkINiBjUHMtppYWtrvYSC"
                  alt="V-sync (Digital Physio)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-6 lg:p-6 xl:p-7 flex flex-col flex-1 relative z-20">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg absolute -top-6 left-6 md:left-7 group-hover:-translate-y-1 group-hover:shadow-blue-500/20 transition-all duration-500 text-blue-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#006064] mt-2 mb-2 tracking-tight group-hover:text-blue-700 transition-colors">
                  V-sync (Digital Physio)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 font-medium">
                  An advanced vocal bio-resonance platform verifying cardio-respiratory synchrony. Explores acoustic voice properties (Vaani), dynamic interpersonal energy (Verve), and emotional resonance (Vibes) to measure physiological alignment.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Dual-Stage Harmony Calibration Algorithm
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    High-Fidelity Vocal Resonance Profiling
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/vsync?action=quickstart"
                    className="w-full py-3 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 flex items-center justify-center cursor-pointer text-sm"
                  >
                    🚀 Quick Start Tutorial
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/vsync"
                      className="py-2 rounded-2xl border border-slate-200 text-slate-700 font-bold text-[10px] uppercase tracking-wide text-center hover:bg-slate-50 transition-all flex items-center justify-center"
                    >
                      Discover Info
                    </Link>
                    <Link
                      to="/vsync?action=subscribe"
                      className="py-2 rounded-2xl border-2 border-blue-600 text-blue-600 font-extrabold text-[10px] uppercase tracking-wider text-center hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center"
                    >
                      Get License
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NOVICULE-TA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(244,63,94,0.1)] transition-all duration-500"
            >
              <div className="aspect-[16/11] overflow-hidden relative bg-slate-50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent z-10 pointer-events-none" />
                <img
                  src="https://lh3.googleusercontent.com/d/1hDSPUhi5jzwhw1_23GtqYx-bngafO8y5"
                  alt="Novicule-TA Premium Heart and Lung Wellness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-6 lg:p-6 xl:p-7 flex flex-col flex-1 relative z-20">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg absolute -top-6 left-6 md:left-7 group-hover:-translate-y-1 group-hover:shadow-rose-500/20 transition-all duration-500 text-rose-500">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#006064] mt-2 mb-2 tracking-tight group-hover:text-rose-600 transition-colors">
                  NOVICULE-TA
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 font-medium">
                  A premium, clinically formulated sugar-free nutraceutical engineered for comprehensive cardiopulmonary support. Formulated with synergistic counts of L-Citrulline, L-Glutamine, L-Hydroxyproline, and Vitamin C for optimized respiratory immunity.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Synergistic Amino Acid Bio-Precursors
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                    Host-Directed Immune & Cellular Defense
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="https://www.1mg.com/otc/novicule-ta-a-premium-gift-for-heart-lung-wellness-sachet-5-gm-each-orange-sugar-free-otc1059138?srsltid=AfmBOorGTJdADAsQFMzJwo3W8g-MptzPJCgOtA1b0tCwayTkkbpJdHcA&wpsrc=Google+Organic+Search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-brand-blue text-white font-bold text-center hover:bg-brand-teal transition-all shadow-lg shadow-brand-blue/10 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    🛒 Buy on TATA 1mg
                  </a>
                  <button
                    onClick={() => setIsNoviculeModalOpen(true)}
                    className="w-full py-3 rounded-2xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-brand-teal" /> Discover Info
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services and Expert Solutions Section */}
      <section
        id="services"
        className="py-16 sm:py-24 md:py-32 px-4 md:px-8 bg-[#f8fafc] relative overflow-hidden"
      >
        {/* Subtle geometric pattern / glow */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Badges & Hero Title */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Top Label Badge */}
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 bg-cyan-50/80 border border-cyan-200/60 px-4 py-1.5 rounded-full inline-block shadow-sm">
                Empowering Support
              </span>
            </div>

            {/* Our Services Headline - Primary Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-[#006064] tracking-tight leading-none mb-4 uppercase">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-[#006064] bg-clip-text text-transparent font-display">
                Services
              </span>
            </h2>

            {/* Premium Divider bar */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#006064] via-cyan-500 to-brand-teal mx-auto rounded-full mb-6" />

            {/* Too much confusion. Not enough clarity. */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black font-display text-[#006064] tracking-tight leading-tight mt-10 mb-8 uppercase">
              TOO MUCH CONFUSION.{" "}
              <span className="text-[#006064] border-b-4 border-[#006064] pb-1 inline-block">
                NOT ENOUGH CLARITY.
              </span>
            </h3>

            {/* We help you decide what's right badge */}
            <div className="mb-8">
              <div className="bg-cyan-50/80 border border-cyan-200/60 rounded-full px-6 py-2.5 inline-flex items-center gap-2.5 text-slate-700 text-sm md:text-base font-extrabold shadow-sm">
                <span className="text-teal-500 text-lg">●</span>
                <span>
                  We help you{" "}
                  <span className="text-[#006064] underline underline-offset-4 decoration-2 decoration-[#006064] font-black">
                    decide what's right
                  </span>{" "}
                  .
                </span>
              </div>
            </div>

            {/* Sub-pills under services */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {[
                "BETTER HEALTH DECISIONS",
                "SMARTER IDEAS",
                "STREAMLINED SOLUTIONS"
              ].map((pill, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-cyan-50/40 border border-cyan-100/60 px-5 py-2.5 rounded-full text-[#006064] font-black text-[11px] md:text-xs tracking-wider uppercase shadow-sm"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

            {/* Secondary Support Subheading - Redesigned to match the exact reference layout */}
            <div className="max-w-7xl mx-auto mb-16 mt-3">
              {/* Dual-Column Grid Layout: Left sidebar (1/3) & Right content stack (2/3) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch text-left">
                {/* Left Column (Deep Teal Card representing Pain Points) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#003B40] via-[#004D54] to-[#00363A] text-white rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/5 group">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/90 text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm"
                    >
                      <ShieldAlert className="w-3.5 h-3.5 animate-pulse text-rose-400" /> SOUND FAMILIAR?
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight leading-tight mb-8 uppercase text-left">
                      Experiencing health <br /> information overload?
                    </h3>

                    <div className="space-y-3.5">
                      {[
                        {
                          text: "Confused about your health or test reports?",
                          icon: FileText,
                          iconColor: "text-emerald-400",
                          bgColor: "bg-emerald-500/10 border-emerald-500/15",
                        },
                        {
                          text: "Too many medicines, too many opinions?",
                          icon: Pill,
                          iconColor: "text-indigo-300",
                          bgColor: "bg-indigo-500/10 border-indigo-500/15",
                        },
                        {
                          text: "Doctor says something, Google says something else?",
                          icon: Stethoscope,
                          iconColor: "text-cyan-300",
                          bgColor: "bg-cyan-500/10 border-cyan-500/15",
                        },
                        {
                          text: "Have an idea but not sure if it will work?",
                          icon: Lightbulb,
                          iconColor: "text-amber-300",
                          bgColor: "bg-amber-500/10 border-amber-500/15",
                        },
                        {
                          text: "Wasting time, money and energy?",
                          icon: Clock,
                          iconColor: "text-rose-300",
                          bgColor: "bg-rose-500/10 border-rose-500/10",
                        },
                      ].map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 6 }}
                            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-[20px] transition-all duration-300 text-left shadow-sm hover:bg-white/10"
                          >
                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border", item.bgColor)}>
                              <ItemIcon className={cn("w-5 h-5", item.iconColor)} strokeWidth={2} />
                            </div>
                            <p className="text-white/95 font-bold text-[14.5px] leading-snug">
                              {item.text}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sidebar bottom section - Core commitment */}
                  <div className="mt-12 border-t border-white/10 pt-6 text-left">
                    <span className="text-cyan-300 font-extrabold text-[11px] uppercase tracking-[0.2em] block mb-1">
                      OUR CORE COMMITMENT
                    </span>
                    <p className="text-base sm:text-[21px] font-black font-display text-white uppercase tracking-tight leading-snug">
                      We turn confusion into clear decisions.
                    </p>
                  </div>
                </div>

                {/* Right Column Stack (Philosophy, WHAT YOU GET, and stats cards) */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6 py-2">
                  {/* 1. Philosophy Row */}
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
                      <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#006064]">
                        OUR SCIENTIFIC FOUNDATIONS & PHILOSOPHY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          title: "Science First",
                          desc: "Formulated on peer-tested guidelines.",
                          icon: Microscope,
                          iconBg: "bg-purple-50 text-purple-600 border-purple-100/50",
                        },
                        {
                          title: "First Principles Approach",
                          desc: "Deconstruct medical claims to baseline factual realities.",
                          icon: Cpu,
                          iconBg: "bg-teal-50 text-teal-600 border-teal-100/50",
                        },
                        {
                          title: "Evidence Based",
                          desc: "Rigorous clinical benchmarks & therapeutic support.",
                          icon: ShieldCheck,
                          iconBg: "bg-blue-50 text-blue-600 border-blue-100/50",
                        },
                        {
                          title: "Impact at Scale",
                          desc: "Bringing high-integrity wellness to millions safely.",
                          icon: Award,
                          iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100/50",
                        },
                      ].map((fp, idx) => {
                        const FpIcon = fp.icon;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col text-center items-center justify-start h-full"
                          >
                            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4 border mx-auto", fp.iconBg)}>
                              <FpIcon className="w-5.5 h-5.5 stroke-[2.2]" />
                            </div>
                            <h4 className="text-[19px] sm:text-xl font-black font-display text-slate-950 tracking-tight mb-2.5 uppercase leading-tight">
                              {fp.title}
                            </h4>
                            <p className="text-slate-600 font-semibold text-[14.5px] sm:text-[15px] leading-relaxed">
                              {fp.desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  {/* 2. WHAT YOU GET Banner Card */}
                  <div className="bg-[#004D54] text-white rounded-[40px] p-8 shadow-2xl relative overflow-hidden border border-white/10 w-full animate-fadeIn">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 text-left">
                      {/* Left Column of What You Get */}
                      <div className="md:col-span-5 text-left space-y-3.5">
                        <div className="inline-flex items-center gap-1.5 bg-emerald-600/30 text-emerald-300 border border-emerald-500/20 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> WHAT YOU GET
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight leading-none">
                          WHAT YOU GET
                        </h3>
                        <p className="text-teal-50 font-semibold text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-sm">
                          Personalized, clinical-grade wellness blueprints explicitly engineered to return command of your biological wellness, eliminating ambiguity.
                        </p>
                      </div>

                      {/* Right Column bullet pills */}
                      <div className="md:col-span-7 flex flex-wrap gap-2.5 justify-start md:justify-end">
                        {[
                          "Clarity you can trust",
                          "Answers that make sense",
                          "Actionable next steps",
                          "Better outcomes",
                          "Peace of mind",
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-full transition-all duration-300 text-left cursor-default shadow-xs hover:translate-y-[-1px]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0" strokeWidth={2.2} />
                            <span className="text-white font-extrabold text-[12px] uppercase tracking-wider leading-none">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3. Metrics bar - Pilots, client flow and incubation */}
                  <div className="bg-gradient-to-br from-white via-[#F8FDFF] to-[#FAF8FF] border border-cyan-100/50 rounded-[32px] p-6 md:p-7 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-stretch divide-y md:divide-y-0 md:divide-x divide-slate-100 w-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    {/* Background decorative subtle accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/10 rounded-full blur-2xl group-hover:bg-indigo-50/20 transition-colors pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50/10 rounded-full blur-2xl group-hover:bg-teal-50/20 transition-colors pointer-events-none" />
                    
                    {/* Stat block 1 */}
                    <div className="flex flex-col gap-2.5 pb-5 md:pb-0 text-left justify-between h-full group/stat">
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-3xl lg:text-4xl font-black text-[#006064] tracking-tight font-display leading-none group-hover/stat:scale-105 transition-transform origin-left">
                          11+
                        </span>
                        <span className="text-[10px] font-black uppercase text-[#006064] bg-[#E0F7FA]/70 px-2.5 py-1 rounded-lg border border-[#B2EBF2]/80 tracking-wider flex items-center gap-1 shadow-2xs">
                          <Target className="w-3 h-3 text-[#00838F]" /> Pilots
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider uppercase leading-relaxed font-sans px-1">
                        ACTIVE PILOTS INCLUDING TATA 1MG & NIRMAL CENTER
                      </span>
                    </div>

                    {/* Stat block 2 */}
                    <div className="flex flex-col gap-2.5 pt-5 md:pt-0 pb-5 md:pb-0 md:pl-6 lg:pl-8 text-left justify-between h-full group/stat">
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-3xl lg:text-4xl font-black text-blue-600 tracking-tight font-display leading-none group-hover/stat:scale-105 transition-transform origin-left">
                          1000+
                        </span>
                        <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 tracking-wider flex items-center gap-1 shadow-2xs">
                          <Users className="w-3 h-3 text-blue-500" /> Clients
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider uppercase leading-relaxed font-sans px-1 font-sans">
                        CLIENTS GUIDED WITH STREAMLINED RESULTS
                      </span>
                    </div>

                    {/* Stat block 3 */}
                    <div className="flex flex-col gap-2.5 pt-5 md:pt-0 md:pl-6 lg:pl-8 text-left justify-between h-full group/stat">
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-xl lg:text-2xl xl:text-3xl font-black text-purple-600 tracking-tight font-display leading-none group-hover/stat:scale-105 transition-transform origin-left uppercase">
                          Incubated
                        </span>
                        <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100 tracking-wider flex items-center gap-1 shadow-2xs">
                          <Building2 className="w-3 h-3 text-purple-500" /> Startup
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 tracking-wider uppercase leading-relaxed font-sans px-1">
                        AT SP-TBI MUMBAI & JAMIA HAMARD CIIE DELHI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Expert Programs title */}
              <div className="text-center mb-12 mt-20 max-w-4xl mx-auto">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#006064] bg-teal-50 border border-teal-200/60 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3" /> CUSTOM TAILORED PROGRAMS
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tighter uppercase leading-[1.05] mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    EXPERT SOLUTIONS
                  </span>{" "}
                  <span className="text-slate-900">FOR</span> <br />
                  <span className="text-[#006064]">INDIVIDUALS, STARTUPS & ORGANIZATIONS</span>
                </h3>
                <p className="text-slate-600 font-bold text-xs sm:text-sm tracking-wider uppercase leading-relaxed max-w-2xl mx-auto">
                  SELECT ONE OF OUR SPECIALIZED CLIENT PROGRAMMES TO VIEW BREAKDOWN & SECURE IMMEDIATE CLINICAL CLARITY
                </p>
              </div>

          {/* Solutions Cards - Original Symmetrical Premium Layout */}
          {(() => {
            const allServices = [
              {
                id: "health-clarity-prog",
                title: "Health Decision Clarity",
                sub: "Understand your symptoms, tests & treatment options in simple language.",
                points: [
                  "Report interpretation",
                  "Risk assessment",
                  "Personalized guidance",
                  "Action plan",
                ],
                pricing: { inr: "₹499", usd: "$15" },
                icon: HeartPulse,
                iconColor: "text-emerald-600 bg-emerald-50/80 border-emerald-100",
                borderColor: "border-slate-200/95 hover:border-emerald-400 hover:shadow-emerald-500/5",
                bulletColor: "text-emerald-600",
                buttonBg: "bg-[#0b5c60] hover:bg-[#094a4d]",
                glowColor: "bg-emerald-500/5",
              },
              {
                id: "breathing-wellness-prog",
                title: "Breathing Wellness Programs",
                sub: "Science-backed solutions to assess, improve and protect your breathing.",
                points: [
                  "Breathing assessment",
                  "Airway health insights",
                  "Lifestyle & habit plan",
                  "Progress tracking",
                ],
                pricing: { inr: "₹1,499", usd: "$49" },
                icon: Wind,
                iconColor: "text-cyan-700 bg-cyan-50/80 border-cyan-100",
                borderColor: "border-slate-200/95 hover:border-[#006064] hover:shadow-[#006064]/5",
                bulletColor: "text-cyan-600",
                buttonBg: "bg-[#006064] hover:bg-[#004d50]",
                glowColor: "bg-cyan-500/5",
              },
              {
                id: "hdt-solutions-prog",
                title: "Host Directed Therapy (HDT) Solutions",
                sub: "Pioneer in Host Directed Therapy for safer, smarter treatment approaches.",
                points: [
                  "Research & discovery",
                  "Mechanism mapping",
                  "Strategy & formulation guidance",
                  "Innovation roadmap",
                ],
                pricing: { inr: "₹24,999", usd: "$349" },
                icon: Microscope,
                iconColor: "text-purple-600 bg-purple-50/80 border-purple-100",
                borderColor: "border-slate-200/95 hover:border-purple-400 hover:shadow-purple-500/5",
                bulletColor: "text-purple-650",
                buttonBg: "bg-[#006064] hover:bg-[#004d50]",
                glowColor: "bg-purple-500/5",
              },
              {
                id: "complex-problems-prog",
                title: "Complex Problems to Simple Solutions",
                sub: "We break down any complex problem using First Principles approach.",
                points: [
                  "Problem deconstruction",
                  "Root cause analysis",
                  "First principles thinking",
                  "Solution design & decision clarity",
                ],
                pricing: { inr: "₹12,999", usd: "$179" },
                icon: Target,
                iconColor: "text-amber-600 bg-amber-50/80 border-amber-100",
                borderColor: "border-slate-200/95 hover:border-amber-400 hover:shadow-amber-500/5",
                bulletColor: "text-amber-600",
                buttonBg: "bg-[#006064] hover:bg-[#004d50]",
                glowColor: "bg-orange-500/5",
              },
              {
                id: "startup-validation-prog",
                title: "Life Science Startup Idea Validation",
                sub: "Validate before you invest time, money and effort.",
                points: [
                  "Market need analysis",
                  "Scientific validation",
                  "Feasibility study",
                  "Go-to-market roadmap",
                  "Investor readiness",
                ],
                pricing: { inr: "₹19,999", usd: "$279" },
                icon: Lightbulb,
                iconColor: "text-teal-600 bg-teal-50/80 border-teal-100",
                borderColor: "border-slate-200/95 hover:border-teal-400 hover:shadow-teal-500/5",
                bulletColor: "text-teal-600",
                buttonBg: "bg-[#006064] hover:bg-[#004d50]",
                glowColor: "bg-teal-500/5",
              },
            ];

            const renderCard = (sol: typeof allServices[0], index: number, customClass?: string) => {
              const IconComp = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.015,
                    transition: { duration: 0.25, ease: "easeOut" }
                  }}
                  onClick={() => handleServiceClick(sol.title)}
                  className={cn(
                    "bg-white rounded-[32px] border p-8 flex flex-col justify-between relative group cursor-pointer overflow-hidden text-left shadow-xs transition-all duration-300",
                    sol.borderColor,
                    customClass
                  )}
                >
                  {/* Glowing overlay */}
                  <div className={cn("absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-125", sol.glowColor)} />

                  <div className="flex flex-col h-full justify-between relative z-10 w-full">
                    <div>
                      {/* Top Left Icon Block */}
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 border",
                        sol.iconColor
                      )}>
                        <IconComp className="w-5.5 h-5.5 stroke-[2.2]" />
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-black text-slate-950 tracking-tight leading-snug mb-3 font-display">
                        {sol.title}
                      </h4>

                      {/* Subdescription */}
                      <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-6 block">
                        {sol.sub}
                      </p>

                      {/* Feature bullet list with check circle */}
                      <div className="space-y-3.5 border-t border-slate-100 pt-6 mb-6 text-left">
                        {sol.points.map((pt: string, pIdx: number) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-left">
                            <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", sol.bulletColor)} strokeWidth={2} />
                            <span className="text-[13.8px] font-bold text-slate-700 leading-snug">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Enquire Now Button */}
                    <div className="mt-6 pt-4 border-t border-slate-50">
                      <div className="text-left mb-4">
                        <span className="text-xs font-bold text-slate-400 block mb-1">
                          Starting at
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-slate-900 tracking-tight font-display">
                            {sol.pricing.inr}
                          </span>
                          <span className="text-xs font-bold text-slate-500 uppercase">
                            / INR
                          </span>
                          <span className="text-xs font-extrabold text-[#006064]/85 ml-1">
                            (approx. {sol.pricing.usd} / USD)
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(sol.title);
                        }}
                        className={cn(
                          "w-full py-4 rounded-xl text-white font-extrabold text-center text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:translate-y-[-1px]",
                          sol.buttonBg
                        )}
                      >
                        Enquire Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            };

            return (
              <div className="w-full max-w-7xl mx-auto px-4 pb-16 space-y-10">
                {/* Individual/Patient Programs Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
                  {allServices.slice(0, 3).map((sol, idx) => (
                    <div key={sol.id} className="w-full flex">
                      {renderCard(sol, idx, "w-full h-full")}
                    </div>
                  ))}
                </div>

                {/* Consulting & Validation Programs Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch max-w-5xl mx-auto">
                  {allServices.slice(3, 5).map((sol, idx) => (
                    <div key={sol.id} className="w-full flex">
                      {renderCard(sol, idx + 3, "w-full h-full")}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Long Term Engagements Banner */}
          <div className="bg-gradient-to-r from-teal-50/70 via-cyan-50/70 to-teal-50/70 border border-teal-100/60 rounded-[28px] p-6 text-center max-w-3xl mx-auto mb-20 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <p className="text-[#006064] text-xs sm:text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2.5">
              <Star className="w-4 h-4 text-teal-600 fill-teal-500 animate-pulse" /> CUSTOM PACKAGES & LONG-TERM ENGAGEMENTS AVAILABLE
            </p>
          </div>

          {/* Who We Serve & Why Choose Us Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
            {/* Left Box: Who We Serve */}
            <div className="lg:col-span-6 bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.015)] text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/15 rounded-full blur-3xl pointer-events-none" />
              <h4 className="text-[15px] sm:text-[17px] font-black uppercase tracking-[0.15em] text-[#006064] mb-8 border-b-2 border-slate-100/80 pb-5 flex items-center gap-2.5">
                <Users className="w-5.5 h-5.5 text-teal-600" /> WHO WE SERVE
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
                {[
                  {
                    name: "Individuals & Families",
                    icon: Users,
                    desc: "Personal report translation, symptom guidance & custom treatment clarity plans.",
                  },
                  {
                    name: "Students & Researchers",
                    icon: GraduationCap,
                    desc: "Rigorous scientific deconstruction, literature validation & mechanism verification.",
                  },
                  {
                    name: "Startups & Entrepreneurs",
                    icon: Building2,
                    desc: "Accelerating timelines, auditing scientific claims & structuring investor research packs.",
                  },
                  {
                    name: "Healthcare Professionals",
                    icon: Stethoscope,
                    desc: "Peer-to-peer assistance with hard clinical questions & Host-Directed Therapy validation studies.",
                  },
                  {
                    name: "Institutions & Organizations",
                    icon: School,
                    desc: "Comprehensive air quality, cardiovascular screening metrics & workforce wellness programmes.",
                  },
                ].map((serve, idx) => {
                  const SIconComp = serve.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, scale: 1.015 }}
                      className="p-5.5 rounded-2xl bg-[#f8fafc]/50 hover:bg-white border border-slate-100/80 hover:border-teal-500/30 transition-all col-span-1 sm:first:col-span-2 text-left flex gap-4.5 shadow-xs group cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-teal-50 text-[#006064] flex items-center justify-center shrink-0 border border-teal-100/40 transition-colors duration-200 group-hover:bg-[#006064] group-hover:text-white">
                        <SIconComp className="w-5.5 h-5.5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-[14px] sm:text-[15px] text-[#006064] uppercase tracking-wider mb-1.5 transition-colors duration-200 group-hover:text-teal-950">
                          {serve.name}
                        </h5>
                        <p className="text-[14px] sm:text-[14.8px] text-slate-600 font-semibold leading-relaxed">
                          {serve.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Box: Why Choose Us & Quote */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.015)] flex-1 flex flex-col justify-center text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/15 rounded-full blur-3xl pointer-events-none" />
                <h4 className="text-[15px] sm:text-[17px] font-black uppercase tracking-[0.15em] text-[#006064] mb-8 border-b-2 border-slate-100/80 pb-5 flex items-center gap-2.5">
                  <ShieldCheck className="w-5.5 h-5.5 text-teal-600" /> WHY CHOOSE US?
                </h4>

                <div className="space-y-5 relative z-10">
                  {[
                    "Deep scientific, clinical & therapeutic core expertise.",
                    "Proven validation frameworks & metrics focused entirely on real-world outcomes.",
                    "Personalized, practical & highly actionable suggestions tailored around root causes.",
                    "Confidential, highly ethical research mapping completely insulated from outside biases.",
                    "Deeply committed to creating real therapeutic value for public wellbeing.",
                  ].map((why, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-2 rounded-2xl transition-all hover:bg-teal-50/20 group cursor-default">
                      <CheckCircle2 className="w-5.5 h-5.5 text-teal-600 shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                      <p className="text-slate-800 font-bold text-[15px] sm:text-[16.2px] leading-relaxed transition-colors duration-200 group-hover:text-slate-900">
                        {why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.6 },
                }}
                whileHover={{ scale: 1.025 }}
                className="bg-gradient-to-br from-[#002224] via-[#00474a] to-[#001c1e] text-white rounded-[32px] p-8 relative overflow-hidden flex items-center gap-6 shadow-[0_20px_50px_rgba(0,96,100,0.25)] border border-teal-500/40 text-left group cursor-pointer"
              >
                {/* Glow effects */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 group-hover:scale-125 animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="w-14 h-14 bg-[#006064]/80 border-2 border-teal-400/40 text-cyan-300 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-transform duration-300 group-hover:rotate-12">
                  <Quote className="w-6.5 h-6.5 stroke-2" />
                </div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-black font-display text-white tracking-tight leading-snug uppercase drop-shadow-sm select-none">
                    "NOT JUST ADVICE. CLARITY THAT CHANGES OUTCOMES."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Connect & Contact Platforms bar */}
          <div className="bg-white border border-slate-200/90 rounded-[40px] p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-12 xl:col-span-5 space-y-4">
              <span className="text-xs font-black text-[#006064] uppercase tracking-widest bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full inline-block">
                Ready to Get Clarity?
              </span>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-black font-display text-[#006064] tracking-tight leading-tight">
                Connect directly with Tech Atriocare today.
              </h4>
              <p className="text-[#334155] font-semibold text-sm sm:text-base leading-relaxed">
                Connect on LinkedIn, follow our clinical updates on Instagram,
                or initiate a chat instantly on WhatsApp to discuss your
                project.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="https://in.linkedin.com/company/tech-atriocare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#f8fafc] hover:bg-brand-blue hover:text-white border border-slate-200 py-3.5 px-6 rounded-2xl text-slate-700 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm grow text-center"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </a>
                <a
                  href="https://instagram.com/tech.atriocare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#f8fafc] hover:bg-rose-600 hover:text-white border border-slate-200 py-3.5 px-6 rounded-2xl text-slate-700 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm grow text-center"
                >
                  <Instagram className="w-4 h-4" /> Instagram Hub
                </a>
              </div>
            </div>

            {/* Quick Contact Form or WhatsApp QR Connection */}
            <div className="lg:col-span-12 xl:col-span-7 bg-[#f8fafc] border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4 w-full md:max-w-md text-left">
                <h5 className="font-extrabold text-[#006064] text-sm sm:text-base uppercase tracking-widest">
                  DM us on WhatsApp to start!
                </h5>
                <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                  Scan the QR code with your smartphone camera, or click the
                  direct button to activate WhatsApp chat and share
                  documentation instantly.
                </p>
                <a
                  href="https://wa.me/918451915951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" /> Connect on
                  WhatsApp
                </a>
              </div>

              {/* QR Mockup Box */}
              <div className="bg-white border border-slate-100 p-4 rounded-3xl flex flex-col items-center justify-center text-center shadow-xs w-44 shrink-0">
                <div className="w-32 h-32 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/d/1VskxWZsXmTIsJVjzeFgyk6nxdz7Y8Qjw"
                    alt="WhatsApp QR Code"
                    className="w-full h-full object-contain p-1"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[9px] uppercase font-black tracking-widest text-[#006064] mt-3">
                  Scan to Connect
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of R&D Section */}
      <section
        id="randd-areas"
        className="py-16 sm:py-24 md:py-40 px-4 md:px-8 bg-gradient-to-b from-white via-[#f0f9fa]/40 to-white relative overflow-hidden"
      >
        {/* Subtle decorative background lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-28 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#006064] mb-4 tracking-tight">
              Areas of R&D
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-base md:text-lg leading-relaxed">
              Pioneering research in cutting-edge technologies for
              next-generation healthcare solutions
            </p>
          </div>

          {/* Staggered Timeline Container */}
          <div className="relative max-w-6xl mx-auto mb-20 px-4">
            {/* Horizontal Timeline Connector Line with custom gradient linking dots */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-300 via-teal-300 via-blue-300 via-amber-300 to-emerald-300 -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {/* Card 1: Health & Wellness (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-6 shadow-sm">
                    <Heart className="w-8 h-8 font-light fill-purple-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-[#006064] mb-3 leading-snug">
                    Health & Wellness
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Comprehensive wellness solutions for holistic health
                    management
                  </p>
                </motion.div>
                {/* Purple dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-purple-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>

              {/* Card 2: Biometric Digital Healthcare (Lower / Dot above) */}
              <div className="flex flex-col items-center flex-col-reverse justify-end lg:translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 shadow-sm">
                    <Brain className="w-8 h-8 font-light fill-teal-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-[#006064] mb-3 leading-snug">
                    Algorithmic Biometric Healthcare
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Leveraging advanced physiological algorithms for personalized
                    healthcare solutions
                  </p>
                </motion.div>
                {/* Teal dot on the timeline line above */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-teal-400 border-[3.5px] border-white shadow-md relative mb-4 -translate-y-3.5 z-20" />
              </div>

              {/* Card 3: Health Tech (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                    <Activity className="w-8 h-8 font-light stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-[#006064] mb-3 leading-snug">
                    Health Tech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Innovative technology solutions for modern healthcare
                    challenges
                  </p>
                </motion.div>
                {/* Blue dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-blue-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>

              {/* Card 4: Biotech (Lower / Dot above) */}
              <div className="flex flex-col items-center flex-col-reverse justify-end lg:translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 shadow-sm">
                    <Dna className="w-8 h-8 font-light stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-[#006064] mb-3 leading-snug">
                    Biotech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Advancing biotechnology solutions for better health outcomes
                  </p>
                </motion.div>
                {/* Orange dot on the timeline line above */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-amber-500 border-[3.5px] border-white shadow-md relative mb-4 -translate-y-3.5 z-20" />
              </div>

              {/* Card 5: Clean Tech (Higher / Dot below) */}
              <div className="flex flex-col items-center lg:-translate-y-12">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center text-center w-full z-10 relative min-h-[295px] justify-center transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <Leaf className="w-8 h-8 font-light fill-emerald-100/45 stroke-2" />
                  </div>
                  <h3 className="text-xl font-black text-[#006064] mb-3 leading-snug">
                    Clean Tech
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[210px]">
                    Sustainable technology for environmental wellness
                  </p>
                </motion.div>
                {/* Green dot on the timeline line below */}
                <div className="hidden lg:block w-4.5 h-4.5 rounded-full bg-emerald-500 border-[3.5px] border-white shadow-md relative mt-4 translate-y-3.5 z-20" />
              </div>
            </div>
          </div>

          {/* Footer signature slogan and multi-color indicator dots */}
          <div className="flex flex-col items-center justify-center gap-3 mt-16 md:mt-24 lg:mt-16">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            </div>
            <p className="text-[#0097A7] font-black text-xs uppercase tracking-widest text-center">
              Innovation drives our research
            </p>
          </div>
        </div>
      </section>

      {/* Precision Engineering Stats Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-slate-50/40 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 medical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#006064]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100/50 text-[#006064] text-xs font-black uppercase tracking-[0.2em] shadow-xs">
              <Target className="w-3.5 h-3.5 animate-pulse" /> FIELD VALIDATION & METRICS
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase text-[#006064] mt-4 mb-5 max-w-2xl leading-tight">
              Engineering Precision. <span className="text-[#006064]">Advancing Life.</span>
            </h3>
            <p className="text-slate-500 font-bold text-[14.5px] sm:text-[16px] max-w-2xl leading-relaxed">
              We benchmark both our methodologies and our technology against high-precision data points to serve our partner network with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] border border-slate-100/80 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,96,100,0.06)] hover:border-teal-500/20 transition-all duration-300 min-h-[260px] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-teal-500/10 group-hover:bg-[#006064] transition-colors duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-[#006064]/5 text-[#006064] flex items-center justify-center mb-6 border border-teal-100/30 transition-all duration-300 group-hover:bg-[#006064] group-hover:text-white group-hover:scale-110">
                <Microscope className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-3 tracking-tight leading-none font-display">
                91%
              </div>
              <div className="text-[12px] font-extrabold text-[#006064] tracking-[0.15em] uppercase mb-1.5">
                Clinical Accuracy
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Clinically Proven
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] border border-slate-100/80 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,96,100,0.06)] hover:border-teal-500/20 transition-all duration-300 min-h-[260px] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-teal-500/10 group-hover:bg-[#006064] transition-colors duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-[#006064]/5 text-[#006064] flex items-center justify-center mb-6 border border-teal-100/30 transition-all duration-300 group-hover:bg-[#006064] group-hover:text-white group-hover:scale-110">
                <Activity className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-3 tracking-tight leading-none font-display">
                1000+
              </div>
              <div className="text-[12px] font-extrabold text-[#006064] tracking-[0.15em] uppercase mb-1.5">
                Data Points/S
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Real-Time Processing
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] border border-slate-100/80 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,96,100,0.06)] hover:border-teal-500/20 transition-all duration-300 min-h-[260px] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-teal-500/10 group-hover:bg-[#006064] transition-colors duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-[#006064]/5 text-[#006064] flex items-center justify-center mb-6 border border-teal-100/30 transition-all duration-300 group-hover:bg-[#006064] group-hover:text-white group-hover:scale-110">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-3 tracking-tight leading-none font-display">
                6+
              </div>
              <div className="text-[12px] font-extrabold text-[#006064] tracking-[0.15em] uppercase mb-1.5">
                Hospitals
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Partner Network
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.015)] border border-slate-100/80 p-8 md:p-10 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_rgba(0,96,100,0.06)] hover:border-teal-500/20 transition-all duration-300 min-h-[260px] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-teal-500/10 group-hover:bg-[#006064] transition-colors duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-[#006064]/5 text-[#006064] flex items-center justify-center mb-6 border border-teal-100/30 transition-all duration-300 group-hover:bg-[#006064] group-hover:text-white group-hover:scale-110">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="text-4xl md:text-[3.5rem] font-black text-[#006064] mb-3 tracking-tight leading-none font-display">
                1000+
              </div>
              <div className="text-[12px] font-extrabold text-[#006064] tracking-[0.15em] uppercase mb-1.5">
                Lives Impacted
              </div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                And Counting
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-40 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold font-display text-[#006064] mb-6 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-slate-500 text-xs sm:text-lg max-w-2xl font-medium">
              Real experiences from people who've tried Novicule TA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Prathyusha Meesala",
                time: "2 months ago",
                content:
                  "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet. It's definitely a must-have for flu season! Super convenient, effective, and something I'll be keeping stocked from now on. Highly recommend it to anyone who wants quick and reliable relief!",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400",
              },
              {
                name: "Siddhartha Chandra",
                time: "a month ago",
                content:
                  "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace on Sunday, and I got my hands on Novicule-TA on Friday. On Friday I was down with a severe throat congestion and weakness and felt unsure about being able to run. All it took was 1 sachet on Friday night to restore my health and confidence. Not only did I run the race in prime conditions, but also honored the time commitment of completing in 70 mins. My utmost gratitude to the creators of Novicule-TA. I would highly recommend keeping a few packets handy in your medical box.",
                rating: 5,
                borderColor: "border-pink-200",
                accentColor: "text-pink-400",
              },
              {
                name: "Lasya N",
                time: "2 months ago",
                content:
                  "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time. What I loved most is how easy it is to use and how well it keeps symptoms under control. I've tried other remedies before, but Novicule TA truly delivers both fast relief and lasting benefits. Definitely keeping this on hand—highly recommend it!\"",
                rating: 5,
                borderColor: "border-blue-200",
                accentColor: "text-blue-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor,
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-[#006064]">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Eakta Kandpal",
                time: "3 months ago",
                content:
                  "I had been having a cough for many days, and it would get worse at night as soon as I tried to sleep. I tried cough syrup, but it didn't have any effect. Then I started taking these sachets before bedtime. After taking 6 sachets, my cough completely disappeared. I am also highly allergic to cold weather and dust, which causes me to cough frequently. But after taking these sachets, I feel much better, and my nighttime cough completely stopped. I will definitely recommend this product. If you have a persistent cough problem, please try it.",
                rating: 5,
                borderColor: "border-orange-200",
                accentColor: "text-orange-400",
              },
              {
                name: "Tanushree Shrivastav",
                time: "2 months ago",
                content:
                  "I've struggled with recurring colds and coughs due to weather changes for years. However, I've always avoided antibiotics. Luckily, Tarun Adarsh introduced me to Novicule, and I saw instant results after trying it. For the past 6 months, I've stopped relying on medicines and instead opt for Novicule. Simply tearing open a sachet and consuming it helps me recover overnight – it's truly a remarkable solution!\"",
                rating: 5,
                borderColor: "border-teal-200",
                accentColor: "text-teal-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i + 3) * 0.1 }}
                className={cn(
                  "p-10 rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                  t.borderColor,
                )}
              >
                <div className="mb-1">
                  <h3 className="font-bold text-xl text-[#006064]">{t.name}</h3>
                </div>
                <p className="text-slate-400 text-xs mb-6">{t.time}</p>

                <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                  "{t.content}"
                </p>

                <div className="mt-auto flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section
        id="blogs"
        className="py-16 sm:py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-[#e0f2fe]/40 to-slate-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/15 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-brand-teal font-black text-xs uppercase tracking-[0.3em] mb-4 block">
                Our Insights
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-[#006064] leading-tight">
                Enhance Your <br />
                <span className="gradient-text">Knowledge</span>
              </h2>
              <p className="text-slate-500 mt-4 font-medium max-w-lg leading-relaxed">
                Scientific insights and updates from our research and
                development
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/blogs"
                className="flex items-center gap-3 px-8 py-4 bg-white border border-brand-border rounded-full text-brand-blue font-bold shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all group"
              >
                Explore All Insights{" "}
                <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 flex flex-col"
              >
                <div className="p-3">
                  <Link to={`/blogs/${blog.id}`} className="block">
                    <div className="aspect-[3/2] sm:aspect-[1.6] overflow-hidden rounded-[20px] bg-slate-100 flex items-center justify-center">
                      {blog.image ? (
                        <motion.img
                          src={blog.image}
                          alt={blog.title}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full atrio-gradient opacity-10 flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-brand-blue opacity-40" />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-teal bg-brand-teal/5 px-2 py-0.5 rounded">
                      {blog.category}
                    </span>
                  </div>
                  <Link to={`/blogs/${blog.id}`} className="block group/title">
                    <h3 className="text-xl font-bold text-[#006064] group-hover/title:text-brand-teal transition-colors mb-3 line-clamp-2 leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                    {blog.desc}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="mt-auto w-full py-4 bg-slate-50 rounded-2xl font-bold text-gray-800 text-sm flex items-center justify-center gap-2 group/btn hover:bg-brand-teal hover:text-white transition-all shadow-sm hover:shadow-brand-teal/10"
                  >
                    Read Insight{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto rounded-[32px] sm:rounded-[48px] md:rounded-[64px] atrio-gradient p-6 sm:p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-teal/40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-24 h-24 md:w-32 md:h-32 mb-8 flex items-center justify-center select-none overflow-hidden"
            >
              <img
                src="https://www.techatriocare.com/logo.webp"
                alt="AtrioCare Logo"
                className="w-full h-full object-contain scale-[1.12] translate-y-[4%]"
                style={{ clipPath: "inset(0% 0% 23% 0%)" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h2 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 tracking-tighter leading-none">
              Catalyzing the <br /> Future of Health
            </h2>
            <p className="text-white/80 text-xs sm:text-lg md:text-xl mb-12 font-medium">
              Join our network of innovators and bring world-class healthcare to
              every doorstep. Experience the Tech AtrioCare difference today.
            </p>
            <div className="flex justify-center w-full sm:w-auto">
              <button
                onClick={openPartnerModal}
                className="px-12 py-5 bg-white text-brand-teal font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer"
              >
                Connect with us
              </button>
            </div>
          </div>
        </div>

        <JoinUsModal
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
          title={modalConfig.title}
          description={modalConfig.description}
        />

        <NoviculeInfoModal
          isOpen={isNoviculeModalOpen}
          onClose={() => setIsNoviculeModalOpen(false)}
        />

        {/* Service Enquiry Modal */}
        <AnimatePresence>
          {isServiceModalOpen && (
            <div className="fixed inset-0 z-[100] overflow-y-auto flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
                onClick={() => setIsServiceModalOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-[40px] shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative z-[101] flex flex-col"
              >
                {/* Accent line */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-brand-blue w-full" />

                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#006064] uppercase bg-cyan-50 border border-cyan-100 px-3.5 py-1 rounded-full">
                        Expert Solutions Consultation
                      </span>
                      <h3 className="text-xl font-black text-[#006064] tracking-tight mt-3 uppercase leading-none">
                        Enquire About
                      </h3>
                      <p className="text-sm font-bold tracking-tight mt-1 text-teal-700">
                        {selectedService}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsServiceModalOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer transition-colors font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {!serviceEnquirySuccess ? (
                    <form
                      onSubmit={handleServiceSubmit}
                      className="space-y-4 pt-2"
                    >
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          value={serviceForm.name}
                          onChange={(e) =>
                            setServiceForm({
                              ...serviceForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your full name"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            value={serviceForm.phone}
                            onChange={(e) =>
                              setServiceForm({
                                ...serviceForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            value={serviceForm.email}
                            onChange={(e) =>
                              setServiceForm({
                                ...serviceForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="you@domain.com"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4">
                          Message (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={serviceForm.message}
                          onChange={(e) =>
                            setServiceForm({
                              ...serviceForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Detailed requirements or symptoms..."
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 px-5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all text-slate-800 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-brand-blue text-white font-black text-xs uppercase tracking-widest transition-colors cursor-pointer mt-4"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 px-4 space-y-5"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                        <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg font-black text-[#006064] uppercase tracking-tight">
                          Request Received Successfully!
                        </h4>
                        <p className="text-slate-500 font-semibold text-xs leading-relaxed max-w-sm mx-auto">
                          Thank you for connecting,{" "}
                          <span className="text-slate-800 font-bold">
                            {serviceForm.name}
                          </span>
                          . Our lead Atriocare medical advisor will reach out to
                          you within 2 hours.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                          Need Immediate Response?
                        </p>
                        <a
                          href={`https://wa.me/918451915951?text=Hello%20Tech%20Atriocare!%20My%20name%20is%20${encodeURIComponent(serviceForm.name)}.%20I%20just%20submitted%20a%20consultation%20request%20for%20the%20"${encodeURIComponent(selectedService)}"%20program.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-lg w-full"
                        >
                          <MessageSquare className="w-4 h-4 fill-white font-light" />{" "}
                          Jump to WhatsApp Chat
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <RecognitionsSection />
    </div>
  );
}
