import { useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Star, Award, GraduationCap, ArrowRight, Heart, Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Tarun Adarsh",
    role: "Founder | Director of R & D | Product Innovation Strategist",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHyzvY_LqHecw/profile-displayphoto-scale_400_400/B56ZjOeV5yG4Ag-/0/1755810719811?e=2147483647&v=beta&t=2MGZ_zRiWomAw8e9xbH0aHtGqYQFgc7_KOXVg64S2TI",
    bio: "Tarun Adarsh, founder of AtrioCare Private Limited, is a healthcare innovator with over five years of R&D experience. With expertise in microbiology, he has developed detection assays for sepsis, endotoxin, and COVID-19, as well as voice-based healthcare solutions. Collaborating with top institutions like IIT Delhi and JNU, he has authored four publications and filed two patents. Tarun has received prestigious fellowships and funding, and actively participates in events like Startup Mahakumbh and Shark Tank India. His current focus is on a voice-based personalized wellness platform."
  },
  {
    name: "Subhash Chandra Shrivastav",
    role: "Director (Logistics)",
    image: "https://lh3.googleusercontent.com/d/1vqfGscTQz1lgToNqRcDLdIUeIvcFZFLW",
    bio: "Mr. Subhash holds the work experience of around 34 years in the sales and service sector of electronic items. He has worked as an on-field service engineer in reputed companies like LG, Videocon, TCL, and T-series before working as a self-employed service engineer. He is currently associated with the founder's office and offers his advisory as well as support for the on-field logistical operations."
  },
  {
    name: "Sanya Mishra",
    role: "R & D Associate (Tech Head)",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFEU1gUClC8Jg/profile-displayphoto-shrink_200_200/B56ZN14zQtHYAY-/0/1732849646606?e=2147483647&v=beta&t=RUDoVNRf-jCyfKUGWOuWUq-h0IO0nEcQ2GSMsuE49SA",
    bio: "Sanya spearheads the technical direction of digital health projects at AtrioCare Pvt. Ltd. She started her journey as an intern, working on website modifications, and quickly showcased her technical expertise. Her dedication to research and development, combined with her resilience, has earned her a leadership role, overseeing the technical aspects of the company's digital health initiatives. With a strong foundation in Computer Science and areas of interest in Machine Learning & Advanced Technologies (Deep Learning, NLP), AWS, and full-stack web development, Sanya drives the delivery of innovative solutions."
  }
];

const mentors = [
  {
    name: "Dr. Arpan Gupta",
    role: "Associate Professor - IIT Delhi",
    image: "https://web.iitd.ac.in/~apn/pics/ag_desk.jpg",
    bio: "Dr. Arpan Gupta is an Associate Professor in the Department of Mechanical Engineering at IIT Delhi with research interests in metamaterials, acoustics, vibrations, and image processing for diagnostics. He has a Ph.D. from the National University of Singapore and a B. Tech in Mechanical Engineering from IIT Delhi. He has published several papers in reputed journals. His academic and industrial experience includes working as a Scientist at IHPC, Singapore, and Assistant Professor at IIT Mandi."
  },
  {
    name: "Dr. Sarthak Chakravarty",
    role: "Clinical Support | MD Physician",
    image: "https://s3.ap-south-1.amazonaws.com/m3india-app-dev/content/small/Dr._Sarthak_Chakravarty-1706094586.png?1706094586",
    bio: "Dr. Sarthak Chakravarty is a confident and disciplined physician with 10 years of experience in hospital and clinical settings, specializing in emergency medicine and minority groups. He holds a MBBS degree and various certifications in emergency medicine, tuberculosis management, and healthcare management. He has worked in various hospitals and clinics, including Indraprastha Apollo Hospital and Oriana Hospital Pvt. Ltd. Currently, he is a Consultant at TATA 1mg Healthcare Services Pvt. Ltd and runs his own private practice at Nirmal Medical Center."
  },
  {
    name: "Dr. Santanu Kar Mahapatra",
    role: "Research Advisor | Physiology specialist",
    image: "https://drive.google.com/thumbnail?id=1FU6yJoJCUyHhbPkwjKANT-lLPEbTVdVh&sz=w800",
    bio: "Dr. Santanu Kar Mahapatra is an Associate Professor and Head of the Paramedical & Allied Health Science Department at Midnapore City College. He holds an M.Sc. in Human Physiology (2005) and a Ph.D. from Vidyasagar University (2010). Dr. Mahapatra specializes in Immunology, focusing on macrophage polarization and immune metabolism, as well as Physiology related to infectious diseases like Leishmania, Tuberculosis, and Malaria. He has extensive teaching experience and has worked in research roles at SCBT, SASTRA University, and Bose Institute."
  }
];

const specialMentions = [
  {
    name: "Rajan Sharma",
    years: "1998-2023",
    role: "Founding Team Member",
    bio: "Developer | Designer | UI UX | Start-ups | Design Thinking",
    image: "https://lh3.googleusercontent.com/d/1W0xBsgu6s4LzAzalzPZt42U1RgaU7RlK",
    type: "Founding Spirit"
  }
];

const internBatches = [
  { batch: "Batch-1 Interns", names: ["Vranda Mahajan", "Garima Mangal"] },
  { batch: "Batch-2 Interns", names: ["Himanshi Joshi"] },
  { batch: "Batch-3 Interns", names: ["Sanya Mishra", "Yash Gupta", "Yashika Rathore", "Tanish Roy Chowdhary", "Jyoti Kumari", "Sameer Pratap Singh Jadon"] },
  { batch: "Batch-4 Interns", names: ["Arnav Wadhwa", "Sreeneha Narayanam", "Lasya Narayanam", "Jansi Goswami"] },
  { batch: "Batch-5 Interns", names: ["Vanshika", "Ankur Jadhav"] }
];

const activityPhotos = [
  "https://lh3.googleusercontent.com/d/1UxeRqJ6Y7HepKvTB7OsutOAKwtA6bxlz",
  "https://lh3.googleusercontent.com/d/1gDlFRiWxuwXkXjrxifA7zemuE2w2wGF1",
  "https://lh3.googleusercontent.com/d/18wTGzBk1dklFvp4ZcDY3uekWtZHYbACN",
  "https://lh3.googleusercontent.com/d/1NnpvzjP3Sfom_GDn8cafzLAlemTr1ESq",
  "https://lh3.googleusercontent.com/d/1sT8ac-IY5l_J1_5w30YH0p99bGhPZ7hF",
  "https://lh3.googleusercontent.com/d/1X71Ycz9I_TjEamQ66n9eD1U240xRvsNk",
  "https://lh3.googleusercontent.com/d/1Y1XW5hXZoDC02mZYmUjLSNtzhxxtvNf9",
  "https://lh3.googleusercontent.com/d/1OBXsOA9e5hdQIDJSx6paw3Jfd20CvnuK",
  "https://lh3.googleusercontent.com/d/174On1asmhPeFM2Ou1t1aXe4ASAIZf2i1",
  "https://lh3.googleusercontent.com/d/1btD7e6fM8Y0KiSw4gwLSj_QPgwYehUEr",
  "https://lh3.googleusercontent.com/d/1zAgEbE4Eu5bLI8ZTrmcPRJjUfO6UtLGG"
];

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-32 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-fixed opacity-[0.05] grayscale brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[900px] h-[900px] bg-brand-light-teal/15 blur-[180px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-md shadow-sm mx-auto">
              <Users className="w-4 h-4 text-brand-teal" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">The Human Algorithm</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black font-display text-[#006064] tracking-tighter leading-[1.1] sm:leading-[1.0] md:leading-[0.8] uppercase">
              Visionaries <br /> behind <span className="text-brand-teal">Tech AtrioCare</span>
            </h1>
            
            <p className="text-black text-sm sm:text-base md:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
              Our diverse collective of researchers, clinicians, and digital architects is unified by a mission of Redefining respiratory health through precision innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[32px] sm:rounded-[48px] p-6 sm:p-12 border border-slate-100 shadow-[0_32px_64px_rgba(30,41,59,0.08)] hover:border-brand-teal/30 hover:-translate-y-2 transition-all group h-full flex flex-col text-center"
            >
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-8 sm:mb-10 mx-auto border-[6px] sm:border-[10px] border-slate-50 relative shadow-xl group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[1.02] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/20 rounded-full" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-display text-[#006064] mb-2 uppercase tracking-tight leading-none min-h-[3rem] sm:h-14 flex items-center justify-center">{member.name}</h3>
              <p className="text-brand-teal font-black text-[10px] uppercase tracking-[0.2em] mb-6 sm:mb-8 leading-tight min-h-[40px] flex items-center justify-center border-y border-slate-100 py-2">{member.role}</p>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 sm:py-24 bg-brand-light-teal/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black font-display text-[#006064] mb-4 uppercase tracking-tight">Our Mentors!</h2>
            <div className="w-16 sm:w-24 h-1 bg-brand-teal mx-auto rounded-full" />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] sm:rounded-[40px] p-5 sm:p-8 md:p-12 border border-brand-border shadow-soft flex flex-col md:flex-row items-center gap-6 sm:gap-12 group hover:shadow-xl transition-all"
              >
                <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 sm:border-8 border-brand-teal/5 shadow-inner relative group bg-slate-100">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes('/api/image-proxy')) {
                        e.currentTarget.src = `/api/image-proxy?url=${encodeURIComponent(mentor.image)}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-brand-teal/10 rounded-full" />
                </div>
                <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                  <div>
                    <h3 className="text-xl sm:text-3xl font-black font-display text-[#006064] leading-tight uppercase tracking-tighter">{mentor.name}</h3>
                    <p className="text-brand-teal font-black text-[10px] sm:text-xs uppercase tracking-widest mt-1">{mentor.role}</p>
                  </div>
                  <p className="text-black leading-relaxed max-w-4xl font-semibold text-xs sm:text-base">
                    {mentor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Mention Section */}
      <section className="py-32 bg-brand-teal/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm mb-12 border border-brand-teal/20"
          >
            <Star className="w-4 h-4 text-brand-teal fill-brand-teal" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-teal">Special Mentions</span>
          </motion.div>

          <div className="space-y-12">
            {specialMentions.map((mention, idx) => (
              <motion.div
                key={mention.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[32px] sm:rounded-[60px] p-6 sm:p-12 md:p-16 border border-brand-border shadow-2xl relative overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="relative">
                    <div className="w-full aspect-square rounded-[24px] sm:rounded-[40px] overflow-hidden border-4 sm:border-8 border-slate-50 shadow-inner group">
                      <img 
                        src={mention.image} 
                        alt={mention.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-brand-teal rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <Heart className="w-5 h-5 sm:w-8 sm:h-8 fill-current" />
                    </div>
                  </div>

                  <div className="text-left space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-black text-[#006064] tracking-tighter uppercase font-display leading-tight sm:leading-none">{mention.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
                        <span className="text-brand-teal font-black text-xs sm:text-sm uppercase tracking-widest">{mention.role}</span>
                        {mention.years && (
                          <>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-widest">{mention.years}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-black font-bold leading-relaxed italic text-sm sm:text-base md:text-lg">
                      "{mention.bio}"
                    </p>

                    <div className="pt-4 sm:pt-6 flex items-center gap-4 text-slate-600">
                       <div className="h-[1px] flex-1 bg-slate-100" />
                       <p className="text-[10px] uppercase font-black tracking-[0.3em]">{mention.type}</p>
                       <div className="h-[1px] flex-1 bg-slate-100" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Interns Section */}
       <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-display text-[#006064] uppercase tracking-tight">Interns</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {internBatches.map((batch, idx) => (
              <motion.div
                key={batch.batch}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-black text-[#006064] text-center pb-4 border-b-2 border-brand-teal/30 uppercase tracking-tight">
                  {batch.batch}
                </h4>
                <ul className="space-y-4">
                  {batch.names.map((name, i) => (
                    <li key={i} className="flex items-center gap-3 text-black font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-teal/40 transition-colors">
                      < GraduationCap className="w-5 h-5 text-brand-teal shrink-0" />
                      <span className="text-base">{i + 1}. {name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Activities Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-20 text-center">
             <h2 className="text-3xl sm:text-5xl md:text-8xl font-black font-display text-[#006064] uppercase tracking-tighter leading-tight sm:leading-none">Life at Tech AtrioCare</h2>
             <p className="text-black font-black text-xs uppercase tracking-[0.4em]">Chronicles of Innovation & Synergy</p>
             <div className="w-24 h-1.5 bg-brand-teal mx-auto rounded-full mt-8" />
          </div>
          
          <div className="relative mt-12 group">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-12 pb-12 snap-x custom-scrollbar px-12 -mx-12"
            >
              {activityPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: idx * 0.1,
                    y: { duration: 4, repeat: Infinity, delay: idx * 0.5, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                  }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  whileHover={{ scale: 1.05, y: -20 }}
                  className="flex-shrink-0 w-[320px] md:w-[450px] aspect-[4/3] rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl snap-center relative group/card"
                >
                  <img 
                    src={photo} 
                    alt={`Team activity ${idx + 1}`}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                     <p className="text-white text-xs font-black uppercase tracking-[0.3em] drop-shadow-md">Activity Milestone {idx + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll navigation buttons */}
            <button 
              onClick={scrollLeft}
              className="absolute top-1/2 -left-6 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 w-14 h-14 rounded-full bg-white backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-center text-[#006064] hover:bg-brand-teal hover:text-white cursor-pointer z-30"
              aria-label="Scroll left"
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button 
              onClick={scrollRight}
              className="absolute top-1/2 -right-6 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300 w-14 h-14 rounded-full bg-white backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-center text-[#006064] hover:bg-brand-teal hover:text-white cursor-pointer z-30"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 py-12 border-t border-slate-50 flex flex-col items-center gap-6"
          >
             <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-brand-teal/20" />
                ))}
             </div>
             <p className="text-black text-xs font-black uppercase tracking-[0.2em]">Building the future of healthcare, together.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
