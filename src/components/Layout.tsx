import { Menu, X, Wind, Activity, LayoutDashboard, Sparkles, Database, Mail, ArrowUpRight, Instagram, Linkedin, MapPin, ChevronRight, Home, Info, BookOpen, Users, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import NoviculeInfoModal from './NoviculeInfoModal';

let globalMobileMenuOpen = false;
const mobileMenuListeners = new Set<(open: boolean) => void>();

function setGlobalMobileMenuOpen(val: boolean) {
  globalMobileMenuOpen = val;
  mobileMenuListeners.forEach(listener => listener(val));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, _setMobileMenuOpen] = useState(globalMobileMenuOpen);

  useEffect(() => {
    const handleGlobalChange = (val: boolean) => {
      _setMobileMenuOpen(val);
    };
    mobileMenuListeners.add(handleGlobalChange);
    return () => {
      mobileMenuListeners.delete(handleGlobalChange);
    };
  }, []);

  const setMobileMenuOpen = (val: boolean | ((prev: boolean) => boolean)) => {
    const nextVal = typeof val === 'function' ? val(globalMobileMenuOpen) : val;
    setGlobalMobileMenuOpen(nextVal);
  };

  const [activeSection, setActiveSection] = useState('home');
  const [isNoviculeModalOpen, setIsNoviculeModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  // We have removed body scroll lock and the handleClickOutside listener to prevent unexpected automatic closing of the navigation menu on mobile devices.
  // The user now has full manual control over when the navigation bar is closed.

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        window.history.pushState(null, '', href);
        setActiveSection(elementId);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('home');
      }
    }
  };

  const handleMobileNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    // We removed automatic closing here so the user can easily select and navigate to different sections
    // without the navigation bar snapping closed automatically. It remains open until manually closed.
    
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        window.history.pushState(null, '', href);
        setActiveSection(elementId);
      } else {
        navigate(href);
      }
    } else if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('home');
      } else {
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname === '/blogs' ? 'blogs' : location.pathname === '/team' ? 'team' : location.pathname === '/reviews' ? 'reviews' : '');
      return;
    }
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 180;
      const aboutEl = document.getElementById('about');
      const productsEl = document.getElementById('products');
      const servicesEl = document.getElementById('services');
      
      if (servicesEl && scrollPos >= servicesEl.offsetTop) {
        setActiveSection('services');
      } else if (productsEl && scrollPos >= productsEl.offsetTop) {
        setActiveSection('products');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScrollActive);
    // run once to initialize
    handleScrollActive();
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [location]);

  const getLinkMeta = (id: string) => {
    switch(id) {
      case 'home':
        return { icon: Home, desc: 'Welcome & highlights', color: 'text-cyan-600 bg-cyan-50 border-cyan-100/50' };
      case 'about':
        return { icon: Info, desc: 'Our mission and pathology', color: 'text-blue-600 bg-blue-50 border-blue-100/50' };
      case 'products':
        return { icon: Database, desc: 'Clinical medical solutions', color: 'text-teal-600 bg-teal-50 border-teal-100/50' };
      case 'services':
        return { icon: Activity, desc: 'Custom diagnostic programs', color: 'text-[#0097A7] bg-cyan-50/80 border-cyan-100/60' };
      case 'blogs':
        return { icon: BookOpen, desc: 'Smarter breathing findings', color: 'text-indigo-600 bg-indigo-50 border-indigo-100/50' };
      case 'team':
        return { icon: Users, desc: 'Expert medical panel & founders', color: 'text-emerald-650 bg-emerald-50 border-emerald-100/50' };
      case 'reviews':
        return { icon: Star, desc: 'Patient voices & experiences', color: 'text-amber-500 bg-amber-50 border-amber-100/50' };
      default:
        return { icon: Sparkles, desc: 'Explore Tech AtrioCare', color: 'text-slate-600 bg-slate-50 border-slate-100/50' };
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '/#about', id: 'about' },
    { name: 'Products', href: '/#products', id: 'products' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Blogs', href: '/blogs', id: 'blogs' },
    { name: 'Team', href: '/team', id: 'team' },
    { name: 'Reviews', href: '/reviews', id: 'reviews' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="medical-grid absolute inset-0 opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light-teal/15 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        {/* Animated Floating Medical Elements */}
        <div className="absolute inset-0">
          {[
            { icon: Activity, top: '15%', left: '10%', delay: 0 },
            { icon: Wind, top: '45%', left: '85%', delay: 2 },
            { icon: Sparkles, top: '75%', left: '15%', delay: 4 },
            { icon: Activity, top: '25%', left: '75%', delay: 1 },
            { icon: Wind, top: '85%', left: '65%', delay: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-brand-teal/[0.04]"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0, 0.4, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut" 
              }}
              style={{ top: item.top, left: item.left }}
            >
              <item.icon size={80 + i * 20} strokeWidth={0.5} />
            </motion.div>
          ))}
        </div>
      </div>

      <nav 
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          mobileMenuOpen
            ? "bg-white py-3 border-b border-slate-200 shadow-sm lg:bg-[#e0f2fe]/85 lg:backdrop-blur-xl lg:py-2.5 lg:border-sky-100/50 lg:shadow-[0_12px_40px_rgba(14,165,233,0.06)]"
            : isScrolled 
              ? "bg-[#e0f2fe]/85 backdrop-blur-xl py-2.5 border-b border-sky-100/50 shadow-[0_12px_40px_rgba(14,165,233,0.06)]" 
              : (location.pathname === '/' || location.pathname === '/vsync')
                ? "bg-[#e0f2fe]/35 backdrop-blur-md py-4.5 border-b border-sky-100/20" 
                : "bg-white/95 backdrop-blur-lg py-4 border-b border-slate-200/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between lg:justify-start gap-1 lg:gap-12 w-full">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className={cn(
              "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 select-none",
              isScrolled || location.pathname !== '/' ? "scale-100" : "scale-105"
            )}>
              <img 
                src="https://www.techatriocare.com/logo.webp" 
                alt="Tech AtrioCare Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold font-display tracking-tight uppercase leading-none text-slate-950 group-hover:text-brand-teal transition-all duration-500">
                Tech AtrioCare
              </span>
              <span className="text-[10px] font-bold tracking-wide mt-1 text-slate-500 group-hover:text-brand-teal transition-all duration-500 leading-none capitalize italic hidden xl:block">
                In the atrium of innovation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={cn(
                    "text-[11px] xl:text-[13px] font-black uppercase tracking-widest transition-all py-2 px-2.5 xl:px-3.5 rounded-full relative",
                    isActive
                      ? "text-cyan-800 bg-sky-500/10 border border-sky-500/20 shadow-[0_4px_12px_rgba(14,165,233,0.08)] scale-105" 
                      : "text-slate-800 hover:text-brand-teal hover:bg-white/45 border border-transparent"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8 shrink-0 ml-auto">
            <div className="h-6 w-px bg-sky-200/80 transition-colors duration-500" />
            <Link 
              to="/checkup"
              className="relative atrio-gradient text-white px-6 xl:px-8 py-3.5 xl:py-4 rounded-full text-xs font-black shadow-[0_15px_30px_-5px_rgba(0,184,166,0.3)] hover:-translate-y-1.5 transition-all flex items-center gap-3 xl:gap-4 group overflow-hidden active:scale-95"
            >
              <motion.div 
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 blur-xl"
              />
              <motion.div 
                animate={{ x: "600%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[45deg]"
              />
              <span className="relative z-10 uppercase tracking-[0.15em] text-[10px] md:text-[11px] text-left leading-tight flex flex-col font-bold">
                <span>1-Min Digital</span>
                <span className="text-brand-teal-light">Check-Up</span>
              </span>
              <div className="bg-white p-2 rounded-full relative z-10 text-brand-teal shadow-xl group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <button 
            className="lg:hidden px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-[#0097A7] focus:outline-none active:scale-95 transition-all flex items-center gap-2 border border-slate-200/60 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? (
              <>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">Close</span>
                <X className="w-4 h-4" />
              </>
            ) : (
              <>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-600">Menu</span>
                <Menu className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Clean background overlay with zero delay starting below the header to keep the header background solid white */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
                className="lg:hidden fixed inset-0 top-[80px] bg-[#001d21]/20 backdrop-blur-[2px] -z-10 pointer-events-none"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white/98 border-b-4 border-[#0097A7]/45 px-5 py-7 shadow-[0_30px_60px_rgba(0,29,33,0.22)] flex flex-col gap-4 backdrop-blur-3xl rounded-b-[32px] border-x border-slate-100 z-[99]"
              >
                <div className="grid grid-cols-1 gap-2.5">
                  {navLinks.map((link) => {
                    const isExternal = link.href.startsWith('http');
                    const isLinkActive = activeSection === link.id || (location.pathname === link.href);
                    const meta = getLinkMeta(link.id);
                    const IconComponent = meta.icon;

                    const baseClasses = cn(
                      "group flex items-center gap-4 p-3 rounded-2xl transition-all border text-left active:scale-[0.99]",
                      isLinkActive
                        ? "bg-cyan-50/75 border-[#0097A7]/40 shadow-sm shadow-cyan-900/5 text-[#006064]"
                        : "bg-slate-50/55 border-slate-200/50 hover:bg-slate-100 hover:border-slate-350 text-slate-800"
                    );

                    return isExternal ? (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={baseClasses}
                      >
                        <div className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center border font-bold shrink-0 shadow-sm transition-all",
                          isLinkActive ? "bg-white text-[#0097A7] border-cyan-250 shadow-md scale-105" : meta.color
                        )}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-display font-black uppercase tracking-widest text-[11px] sm:text-xs">
                            {link.name}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 mt-1 lines-1">
                            {meta.desc}
                          </span>
                        </div>

                        <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#0097A7] transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={baseClasses}
                        onClick={(e) => handleMobileNavClick(link.href, e)}
                      >
                        <div className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center border font-bold shrink-0 shadow-sm transition-all",
                          isLinkActive ? "bg-white text-[#0097A7] border-cyan-200 shadow-md scale-105" : meta.color
                        )}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-display font-black uppercase tracking-widest text-[11px] sm:text-xs flex items-center gap-2">
                            {link.name}
                            {isLinkActive && (
                              <span className="w-2 h-2 rounded-full bg-[#0097A7]" />
                            )}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 mt-1 lines-1">
                            {meta.desc}
                          </span>
                        </div>

                        <div className={cn(
                          "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                          isLinkActive ? "bg-white border border-cyan-200 text-[#0097A7] shadow-sm scale-110" : "text-slate-400 group-hover:text-[#0097A7] group-hover:translate-x-0.5"
                        )}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    );
                  })}

                  {/* 1-Min Digital Check-Up Option styled in the precise bento grid layout as requested */}
                  {(() => {
                    const isCheckupActive = location.pathname === '/checkup';
                    const checkupClasses = cn(
                      "group flex items-center gap-4 p-3 rounded-2xl transition-all border text-left active:scale-[0.99]",
                      isCheckupActive
                        ? "bg-cyan-50/75 border-[#0097A7]/40 shadow-sm shadow-cyan-900/5 text-[#006064]"
                        : "bg-slate-50/55 border-slate-200/50 hover:bg-slate-100 hover:border-slate-350 text-slate-800"
                    );

                    return (
                      <Link
                        to="/checkup"
                        className={checkupClasses}
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          handleMobileNavClick('/checkup', e);
                        }}
                      >
                        <div className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center border font-bold shrink-0 shadow-sm transition-all",
                          isCheckupActive 
                            ? "bg-white text-[#0097A7] border-cyan-200 shadow-md scale-105" 
                            : "text-[#0097A7] bg-cyan-50/80 border-cyan-100/60"
                        )}>
                          <Sparkles className="w-5 h-5 animate-pulse-slow" />
                        </div>
                        
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="font-display font-black uppercase tracking-widest text-[11px] sm:text-xs flex items-center gap-2 text-slate-900">
                            1-Min Digital Check-Up
                            {isCheckupActive && (
                              <span className="w-2 h-2 rounded-full bg-[#0097A7]" />
                            )}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 mt-1 lines-1 font-sans">
                            Instant digital health assessment
                          </span>
                        </div>

                        <div className={cn(
                          "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                          isCheckupActive 
                            ? "bg-white border border-cyan-200 text-[#0097A7] shadow-sm scale-110" 
                            : "text-slate-400 group-hover:text-[#0097A7] group-hover:translate-x-0.5"
                        )}>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    );
                  })()}
                </div>

                <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-dashed border-slate-200">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-[0.98] font-display font-black uppercase tracking-widest text-[11px] rounded-2xl text-center transition-all border border-slate-200/50 flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4 text-slate-500 font-extrabold" />
                    Close Navigation Overview
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#007681] text-white pt-0 pb-12 overflow-hidden">
        {/* Pre-footer white bar */}
        <div className="bg-white py-6 mb-16 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://www.techatriocare.com/logo.webp" 
                  alt="Tech AtrioCare Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-[#1E293B] uppercase">
                Tech AtrioCare
              </span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link to="/checkup" className="text-[#007681] font-bold hover:text-brand-teal transition-colors text-sm">
                Take your 1-min Digital Check-Up now!
              </Link>
              <div className="hidden md:flex gap-6">
                {navLinks.map(link => (
                  link.href.startsWith('http') ? (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 font-semibold hover:text-[#007681] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-slate-600 font-semibold hover:text-[#007681] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Products & Terms */}
            <div className="space-y-8">
              <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5">
                <h4 className="text-xl font-bold font-display mb-6 tracking-tight">Products</h4>
                <ul className="space-y-4 text-white/80 font-medium text-sm">
                  <li><Link to="/vsync" className="hover:text-white transition-colors">V-sync</Link></li>
                  <li><Link to="/haal-chaal" className="hover:text-white transition-colors">Haal-Chaal Pravartak 1.0</Link></li>
                  <li><Link to="/haal-chaal-pravartak" className="hover:text-white transition-colors">Haal-Chaal Pravartak</Link></li>
                  <li>
                    <button 
                      type="button" 
                      onClick={() => setIsNoviculeModalOpen(true)} 
                      className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                    >
                      Novicule-TA
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5">
                <h4 className="text-xl font-bold font-display mb-4 tracking-tight">Terms & Conditions</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  Read the full terms and conditions that govern the use of our products and services.
                </p>
                <Link 
                  to="/terms" 
                  className="text-[#4DD0E1] font-black text-xs uppercase tracking-widest hover:underline"
                >
                  View Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5 h-fit">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/tech.atriocare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/tech-atriocare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/10 rounded-[40px] p-8 backdrop-blur-sm border border-white/5 lg:col-span-1">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Address</h4>
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    Plot No. - 2a, First Floor, Kh No 294 Kehar Singh State, Saidulajab Village, South West Delhi, India - 110030
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    208, 2nd Floor Nagarjuna Block, Vignan University, Guntur - Tenali Rd, Vadlamudi, Andhra Pradesh - 522213
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    CIIE, Jamia Hamdard, Hamdard Nagar, New Delhi - 110062
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-sm border border-white/5 h-fit">
              <h4 className="text-xl font-bold font-display mb-8 tracking-tight">Email</h4>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <a href="mailto:service.techatriocare@gmail.com" className="text-sm text-white/80 font-medium hover:text-white transition-colors break-all">
                  service.techatriocare@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="bg-white/5 px-6 py-2 rounded-full border border-white/5">
              <p className="text-[10px] md:text-xs text-white/50 font-bold uppercase tracking-[0.2em]">
                © 2022-2025 TECH ATRIOCARE PVT. LTD. | Innovation Focused
              </p>
            </div>
          </div>
        </div>
      </footer>

      <NoviculeInfoModal 
        isOpen={isNoviculeModalOpen} 
        onClose={() => setIsNoviculeModalOpen(false)} 
      />
    </div>
  );
}

