import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const partners = [
  {
    name: 'CIIE Jamia Hamdard',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYo-MRe1YynQ/company-logo_200_200/company-logo_200_200/0/1630619525401?e=2147483647&v=beta&t=cWDdQkbic2d2otoLG-A0fMej9PYs4r12HUpYyl9zdJY',
  },
  {
    name: 'Ministry of MSME',
    logo: 'https://veloxxmedia.com/wp-content/uploads/2025/12/msme.jpg',
  },
  {
    name: 'DPIIT',
    logo: 'https://indiaeducationdiary.in/wp-content/uploads/2025/05/dpiit-0-1681728843_1729501601_880X580_c_c_0_0.webp',
  },
  {
    name: 'TIDE 2.0',
    logo: 'https://entrepreneurloop.com/wp-content/uploads/2025/12/tide-2.0.jpg',
  },
  {
    name: 'Vignan Technology Business Incubator',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFwa2BK7Rs_WQ/company-logo_200_200/company-logo_200_200/0/1712899643101?e=2147483647&v=beta&t=ZEVWER_pBt1H9wL01JAyST9itTTyjPv6xqrroO0QpSw',
  },
  {
    name: 'DST-NIDHI',
    logo: 'https://aic.ccmb.res.in/wp-content/uploads/2023/05/DST-NIDHI_Original-Logo-V.jpg',
  },
  {
    name: 'TATA 1MG',
    logo: 'https://play-lh.googleusercontent.com/yjbAu08_Ahes38IEMV8slP91zgjh2mdh5xpZefvcbYuZxR8O7FZFderRn2Ivaz0uR2Lw',
  }
];

export default function RecognitionsSection() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="partners">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-800 border border-teal-100/60 font-black text-[10px] sm:text-[11px] tracking-[0.15em] uppercase mb-6 shadow-[0_2px_10px_rgba(13,148,136,0.03)] mx-auto">
          ✨ STRATEGIC PARTNERS
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-cyan-800 tracking-tight mb-8"
        >
          Recognitions & Partnerships
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 text-lg md:text-xl font-medium"
        >
          Trusted by leading organizations and institutions
        </motion.p>
      </div>

      <div className="relative select-none">
        <div className="flex overflow-hidden py-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 sm:gap-12 items-center whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, i) => (
              <div 
                key={`${partner.name}-${i}`} 
                className="flex flex-col items-center gap-4 min-w-[280px] sm:min-w-[340px] group text-center animate-none"
              >
                <div className="h-32 w-56 sm:h-[140px] sm:w-[280px] flex items-center justify-center transition-all duration-500 group-hover:scale-105 bg-white border border-teal-100/40 shadow-[0_4px_24px_rgba(13,148,136,0.03)] group-hover:shadow-[0_8px_32px_rgba(13,148,136,0.06)] group-hover:border-teal-200/50 p-2 sm:p-3 rounded-2xl">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-contain filter contrast-[1.05] transition-transform duration-500 scale-[1.2] group-hover:scale-[1.3]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${partner.name[0]}&background=f8fafc&color=64748b&size=128&bold=true`;
                    }}
                  />
                </div>
                <p className="text-[14px] sm:text-base font-bold text-cyan-900 whitespace-normal max-w-[240px] sm:max-w-[280px] leading-snug">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Side Gradients for seamless floating effect */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
