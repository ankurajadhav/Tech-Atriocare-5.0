import { motion } from 'motion/react';
import { Calendar, ArrowRight, BookOpen, Tag, Search, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { blogs } from '../data/blogData';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-32 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-fixed opacity-[0.05] grayscale brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-brand-teal/5 blur-[200px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-32 pt-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200 backdrop-blur-md shadow-sm mx-auto group">
              <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shadow-[0_0_8px_rgba(20,184,166,0.3)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-brand-teal transition-colors">Intelligence Repository</span>
            </div>
            
            <h1 className="text-3xl sm:text-6xl md:text-8xl font-black text-[#006064] mb-8 font-display tracking-tighter leading-[0.9] uppercase flex flex-col items-center">
              <span>Enhance Your</span>
              <span className="text-brand-teal drop-shadow-[0_0_15px_rgba(20,184,166,0.1)]">Knowledge</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed border-t border-slate-200 pt-12 mt-12 uppercase tracking-[0.4em] opacity-80">
              Future-Proofing Human Immunity <br />
              <span className="text-xs font-medium tracking-[0.6em] text-brand-teal">Research Nodes Active</span>
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[24px] sm:rounded-[40px] overflow-hidden group border border-slate-100 flex flex-col h-full hover:border-brand-teal/30 hover:-translate-y-3 transition-all duration-500 shadow-[0_32px_64px_rgba(31,41,55,0.06)]"
            >
              {/* Image Container with Padding like screenshot */}
              <div className="p-4 relative">
                <Link to={`/blogs/${blog.id}`} className="block">
                  <div className="aspect-[3/2] sm:aspect-[1.6] overflow-hidden rounded-[20px] bg-slate-50 flex items-center justify-center border border-slate-100">
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
                        <BookOpen className="w-12 h-12 text-brand-blue opacity-20" />
                      </div>
                    )}
                  </div>
                </Link>
                <div className="absolute top-8 right-8">
                   <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-teal shadow-md border border-slate-100">
                      {blog.category}
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                </div>
                <Link to={`/blogs/${blog.id}`} className="block group/title">
                  <h3 className="text-xl font-bold text-[#006064] group-hover/title:text-brand-teal transition-colors mb-4 line-clamp-2 leading-tight uppercase font-display tracking-tight">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
                  {blog.desc}
                </p>
                
                {/* Read Blog Button - EXACT REPLICA OF SCREENSHOT 1 */}
                <div className="mt-auto pt-2">
                  <Link 
                    to={`/blogs/${blog.id}`}
                    className="w-full py-4 bg-slate-50 rounded-2xl font-bold text-gray-800 flex items-center justify-center gap-2 group/btn hover:bg-brand-teal hover:text-white transition-all duration-300 transform active:scale-[0.98]"
                  >
                    Read Insight <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
