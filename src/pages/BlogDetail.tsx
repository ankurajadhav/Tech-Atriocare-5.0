import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Clock, Share2, Bookmark, ArrowRight, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogData';
import { cn } from '../lib/utils';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#006064] mb-4">Blog not found</h2>
          <Link to="/blogs" className="text-brand-teal font-bold flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Search Header Replica - Simplified for Detail Page */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors font-bold group text-sm uppercase tracking-widest">
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.div>
             Back to Blogs
          </Link>
        </div>
      </div>

      {/* Teal Header - EXACT REPLICA OF SCREENSHOT 4 */}
      <div className="bg-[#007EA7] py-20 md:py-32 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -50, 0],
              y: [0, 100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-brand-teal/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-white/70 text-sm mb-8 uppercase tracking-[0.2em] font-bold"
            >
              <span className="w-8 h-[1px] bg-white/30" />
              <Calendar className="w-4 h-4" />
              {blog.date}
              <span className="mx-1">•</span>
              <span className="text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-md text-[10px] tracking-widest">{blog.category}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight"
            >
              {blog.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-3xl text-white/80 font-medium leading-relaxed max-w-4xl"
            >
              {blog.desc}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Image - BELOW THE HEADER LIKE SCREENSHOT 4/5 */}
      {blog.image && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 sm:border-[6px] border-white"
          >
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full aspect-[3/2] sm:aspect-[16/9] md:aspect-[21/9] object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* Content Section */}
      <div className={cn("max-w-4xl mx-auto px-6 pb-32", blog.image ? "py-20" : "pt-12 pb-20")}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="prose prose-slate prose-lg max-w-none"
        >
          <div className="markdown-body blog-content text-slate-600 space-y-8 leading-[1.8] text-[1.15rem]">
            <ReactMarkdown>{blog.content || "Content is being updated..."}</ReactMarkdown>
          </div>

          {/* Footer Navigation */}
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <Link 
              to="/blogs" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-teal transition-all shadow-lg hover:shadow-brand-teal/20"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to All Blogs
            </Link>

            <div className="flex items-center gap-4">
               <button className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 hover:bg-brand-teal hover:text-white transition-all">
                  <Share2 className="w-5 h-5" />
               </button>
               <button className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 hover:bg-brand-teal hover:text-white transition-all">
                  <Bookmark className="w-5 h-5" />
               </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recommended for Blog Detail */}
      <div className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid opacity-[0.2]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black font-display text-[#006064] uppercase tracking-tight">Recommended for you</h2>
            <Link to="/blogs" className="text-brand-teal font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2 font-black">
              Browse More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.filter(b => b.id !== id).slice(0, 3).map((rec, rIdx) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rIdx * 0.1 }}
              >
                <Link to={`/blogs/${rec.id}`} className="group flex flex-col h-full bg-white rounded-3xl p-4 border border-slate-200 hover:border-brand-teal/30 transition-all shadow-sm">
                  <div className="aspect-[3/2] sm:aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
                    {rec.image ? (
                      <motion.img 
                        src={rec.image} 
                        alt={rec.title}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <BookOpen className="w-8 h-8 text-slate-300" />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-[#006064] group-hover:text-brand-teal transition-colors line-clamp-2 uppercase font-display tracking-tight">
                    {rec.title}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
