import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { motion } from 'motion/react';
import { Activity, Thermometer, Heart, Brain, Wind, Droplets, TrendingUp, Calendar, Download, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const data = [
  { time: '00:00', heartRate: 72, oxygen: 98, fatigue: 10 },
  { time: '04:00', heartRate: 68, oxygen: 99, fatigue: 15 },
  { time: '08:00', heartRate: 85, oxygen: 97, fatigue: 45 },
  { time: '12:00', heartRate: 78, oxygen: 98, fatigue: 60 },
  { time: '16:00', heartRate: 92, oxygen: 96, fatigue: 82 },
  { time: '20:00', heartRate: 80, oxygen: 98, fatigue: 40 },
  { time: '23:59', heartRate: 75, oxygen: 99, fatigue: 20 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-bg pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Header with Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-[#006064] mb-2">Health <span className="text-brand-teal">Intelligence</span></h1>
              <p className="text-slate-500 font-medium">Real-time biometric analytics from Tech AtrioCare research nodes.</p>
           </div>
           <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-brand-border rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                 <Calendar className="w-4 h-4" /> 24 Hours
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-bold hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/10">
                 <Download className="w-4 h-4" /> Export Report
              </button>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Avg Heart Rate', val: '78 BPM', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', trend: '+2.4%' },
            { label: 'Oxygen Level', val: '98%', icon: Activity, color: 'text-brand-teal', bg: 'bg-brand-light-teal', trend: 'Stable' },
            { label: 'Stress Factor', val: '0.42 Hz', icon: Brain, color: 'text-indigo-500', bg: 'bg-indigo-50', trend: '-5.1%' },
            { label: 'Body Temp', val: '36.6°C', icon: Thermometer, color: 'text-orange-500', bg: 'bg-orange-50', trend: 'Normal' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-brand-border shadow-sm hover:shadow-xl hover:shadow-brand-teal/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                 <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    <stat.icon className="w-6 h-6" />
                 </div>
                 <div className="text-[11px] font-black font-sans px-2 py-1 bg-slate-50 text-slate-400 rounded-lg group-hover:text-brand-teal transition-colors">{stat.trend}</div>
              </div>
              <div className="text-3xl font-black text-brand-blue mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-10 rounded-[48px] border border-brand-border shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold font-display text-[#006064] flex items-center gap-3">
                <Wind className="w-6 h-6 text-brand-teal" /> Respiratory Telemetry
              </h3>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-teal" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SpO2</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Heart Rate</span>
                 </div>
              </div>
            </div>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorHeart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorOxygen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0097a7" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#0097a7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6 6" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="time" stroke="#cbd5e1" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                    <YAxis stroke="#cbd5e1" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="heartRate" stroke="#60a5fa" fillOpacity={1} fill="url(#colorHeart)" strokeWidth={4} />
                    <Area type="monotone" dataKey="oxygen" stroke="#0097a7" fillOpacity={1} fill="url(#colorOxygen)" strokeWidth={4} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-brand-border shadow-sm flex flex-col">
             <h3 className="text-xl font-bold font-display text-[#006064] mb-10 flex items-center gap-3">
               <TrendingUp className="w-6 h-6 text-indigo-500" /> V-sync Performance
             </h3>
             <div className="flex-grow min-h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                     <CartesianGrid strokeDasharray="6 6" stroke="#f1f5f9" vertical={false} />
                     <XAxis dataKey="time" stroke="#cbd5e1" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                     <YAxis stroke="#cbd5e1" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                     <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px' }} 
                     />
                     <Bar dataKey="fatigue" fill="#0097a7" radius={[8, 8, 0, 0]} barSize={24} />
                  </BarChart>
               </ResponsiveContainer>
             </div>
             <div className="mt-8 pt-8 border-t border-brand-border">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-sm font-bold text-slate-600">Rehab Completion</span>
                   <span className="text-sm font-black text-brand-teal">85%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '85%' }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="h-full atrio-gradient"
                   />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">Goal: Post-Op Stability Phase III</p>
             </div>
          </div>
        </div>

        {/* Action Banner */}
        <section className="atrio-gradient p-12 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-brand-teal/20 text-white overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform" />
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-bold font-display mb-4">Advance Clinical Trials Notification</h3>
              <p className="text-white/80 font-medium">You have been selected for the Phase IV beta of our Algorithmic-Integrated Lung Health diagnostic suite.</p>
           </div>
           <button className="relative z-10 px-8 py-4 bg-white text-brand-teal font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
             Enrol Now
           </button>
        </section>
      </div>
    </div>
  );
}
