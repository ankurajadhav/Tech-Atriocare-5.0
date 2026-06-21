import { motion } from 'motion/react';
import { 
  Star, 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  Activity, 
  Wind, 
  Cpu, 
  Send,
  User,
  Quote
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface Review {
  id: string;
  name: string;
  role: string;
  product: 'Haal-Chaal' | 'V-sync' | 'Novicule-TA' | 'Website';
  content: string;
  rating: number;
  date: string;
  avatar?: string;
}

const initialReviews: Review[] = [
  {
    id: '1',
    name: "Prathyusha Meesala",
    role: "Wellness Enthusiast",
    product: 'Novicule-TA',
    content: "I wasn't expecting much when I first tried Novicule TA, but wow—it really works! I came down with the flu and felt completely drained, but after taking it, I started feeling better way faster than usual. My congestion eased, the fatigue reduced, and within a day or two, I was back on my feet. It's definitely a must-have for flu season! Super convenient, effective, and something I'll be keeping stocked from now on. Highly recommend it to anyone who wants quick and reliable relief!",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: '2',
    name: "Siddhartha Chandra",
    role: "Marathon Runner",
    product: 'Novicule-TA',
    content: "Never before have I come across any flu fighting option to cut through the root cause in as little as one day! I had a 10k race to pace on Sunday, and I got my hands on Novicule-TA on Friday. On Friday I was down with a severe throat congestion and weakness and felt unsure about being able to run. All it took was 1 sachet on Friday night to restore my health and confidence. Not only did I run the race in prime conditions, but also honored the time commitment of completing in 70 mins. My utmost gratitude to the creators of Novicule-TA. I would highly recommend keeping a few packets handy in your medical box.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: '3',
    name: "Lasya N",
    role: "Health Professional",
    product: 'Novicule-TA',
    content: "I recently used Novicule TA when I caught a flu, and I was impressed with how quickly it worked! My fever dropped, body aches eased, and I felt more energetic in no time. What I loved most is how easy it is to use and how well it keeps symptoms under control. I've tried other remedies before, but Novicule TA truly delivers both fast relief and lasting benefits. Definitely keeping this on hand—highly recommend it!",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: '4',
    name: "Eakta Kandpal",
    role: "Clinical Researcher",
    product: 'Novicule-TA',
    content: "I had been having a cough for many days, and it would get worse at night as soon as I tried to sleep. I tried cough syrup, but it didn't have any effect. Then I started taking these sachets before bedtime. After taking 6 sachets, my cough completely disappeared. I am also highly allergic to cold weather and dust, which causes me to cough frequently. But after taking these sachets, I feel much better, and my nighttime cough completely stopped. I will definitely recommend this product. If you have a persistent cough problem, please try it.",
    rating: 5,
    date: "3 months ago"
  },
  {
    id: '5',
    name: "Tanushree Shrivastav",
    role: "Wellness Enthusiast",
    product: 'Novicule-TA',
    content: "I've struggled with recurring colds and coughs due to weather changes for years. However, I've always avoided antibiotics. Luckily, Tarun Adarsh introduced me to Novicule, and I saw instant results after trying it. For the past 6 months, I've stopped relying on medicines and instead opt for Novicule. Simply tearing open a sachet and consuming it helps me recover overnight – it's truly a remarkable solution!",
    rating: 5,
    date: "2 months ago"
  }
];

export default function Reviews() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const cardStyles = [
    "border-teal-200",
    "border-pink-200",
    "border-blue-200",
    "border-orange-200",
    "border-teal-200"
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-teal/10">
      {/* Header Section */}
      <section className="relative pt-28 md:pt-48 pb-10 px-4 text-center overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-50 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-teal/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-teal/10 blur-[120px] rounded-full" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-black font-display text-[#006064] uppercase tracking-tight mb-6 relative z-10"
        >
          What Our <span className="text-brand-teal">Customers</span> Say
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 font-bold text-base md:text-2xl max-w-2xl mx-auto leading-relaxed relative z-10"
        >
          Real experiences from people who've tried Tech AtrioCare solutions.
        </motion.p>
      </section>

      {/* Review Cards Section */}
      <section className="pb-24 sm:pb-40 pt-10 sm:pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {initialReviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                cardStyles[i]
              )}
            >
              <div className="mb-1">
                <h3 className="font-bold text-lg sm:text-xl text-[#006064]">{review.name}</h3>
              </div>
              <p className="text-slate-400 text-xs mb-6">{review.date}</p>

              <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                "{review.content}"
              </p>

              <div className="mt-auto flex justify-center gap-1">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    className="w-4 h-4 fill-amber-400 text-amber-400" 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initialReviews.slice(3, 5).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className={cn(
                "p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] border-2 border-dashed bg-white shadow-xl flex flex-col relative transition-all duration-500 hover:-translate-y-2",
                cardStyles[i + 3]
              )}
            >
              <div className="mb-1">
                <h3 className="font-bold text-lg sm:text-xl text-[#006064]">{review.name}</h3>
              </div>
              <p className="text-slate-400 text-xs mb-6">{review.date}</p>

              <p className="text-slate-600 mb-8 leading-relaxed font-medium text-sm">
                "{review.content}"
              </p>

              <div className="mt-auto flex justify-center gap-1">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    className="w-4 h-4 fill-amber-400 text-amber-400" 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Improvement Form Section - Now Tinted */}
      <section className="py-16 sm:py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-brand-teal/[0.03] rounded-[32px] sm:rounded-[64px] p-6 sm:p-12 md:p-24 border border-brand-teal/10 shadow-2xl shadow-brand-teal/5 relative">
            <div className="text-center mb-12 sm:mb-20">
              <span className="text-brand-teal font-black text-[10px] uppercase tracking-[0.5em] mb-4 sm:mb-6 block animate-pulse">Innovation Loop</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-display text-[#006064] uppercase tracking-tighter mb-4 sm:mb-8 leading-none">
                Help Us <span className="text-brand-teal">Evolve</span>
              </h2>
              <p className="text-slate-500 font-bold text-sm sm:text-xl max-w-xl mx-auto leading-relaxed">
                Your direct feedback on our website functionality and product efficacy drives our next major release.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 sm:py-24 bg-brand-teal/5 rounded-[24px] sm:rounded-[48px] border-2 border-dashed border-brand-teal/20 px-4"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-teal flex items-center justify-center text-white mx-auto mb-6 sm:mb-8 shadow-xl shadow-brand-teal/20">
                  <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#006064] uppercase tracking-tight mb-3 sm:mb-4">Feedback Logged</h3>
                <p className="text-sm sm:text-base text-slate-500 font-bold">Thank you for contributing to the AtrioCare ecosystem.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-12">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                  <div className="space-y-2 sm:space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Subject identity</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-6 sm:px-10 py-4.5 sm:py-7 rounded-[20px] sm:rounded-[32px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-base sm:text-xl transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Feedback Domain</label>
                    <div className="relative">
                      <select className="w-full px-6 sm:px-10 py-4.5 sm:py-7 rounded-[20px] sm:rounded-[32px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-base sm:text-xl transition-all appearance-none cursor-pointer">
                        <option>Website UX/UI Improvement</option>
                        <option>Novicule-TA Efficacy</option>
                        <option>Haal-Chaal Protocol</option>
                        <option>Feature Suggestion</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Clinical Observations / Suggestions</label>
                  <textarea 
                    required
                    rows={6}
                    placeholder="Describe your assessment or suggested improvement..."
                    className="w-full px-6 sm:px-10 py-6 sm:py-10 rounded-[24px] sm:rounded-[48px] bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal text-slate-900 font-bold text-base sm:text-xl transition-all resize-none placeholder:text-slate-300"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 sm:py-8 atrio-gradient text-white rounded-full font-black uppercase tracking-[0.15em] sm:tracking-[0.5em] shadow-2xl shadow-brand-teal/30 flex items-center justify-center gap-4 sm:gap-6 group hover:-translate-y-2 active:scale-95 transition-all text-xs sm:text-sm"
                >
                  Broadcast Feedback
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="py-16 sm:py-24 md:py-48 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 sm:w-24 sm:h-24 text-brand-teal/10 mx-auto mb-8 sm:mb-16" />
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black font-display text-[#006064] uppercase tracking-tighter leading-tight mb-8 sm:mb-16 italic">
            "Your feedback is <span className="text-brand-teal italic underline decoration-brand-teal/20 underline-offset-4 decoration-8">Precision</span>."
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <div className="h-[1px] w-12 sm:w-24 bg-slate-100" />
            <p className="text-slate-400 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.8em]">AtrioCare Research Team</p>
            <div className="h-[1px] w-12 sm:w-24 bg-slate-100" />
          </div>
        </div>
      </section>
    </div>
  );
}
