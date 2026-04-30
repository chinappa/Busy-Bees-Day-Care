import React, { useState, useRef } from 'react';
import { ShieldCheck, Brain, HeartPulse, Clock, ArrowRight, CheckCircle2, ChevronRight, Star, MapPin, X, Send, Facebook, Instagram, Phone, Mail, FileDown, Upload, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Prototype() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [teamMembers, setTeamMembers] = useState([
    { 
      name: "Sarah Jenkins", 
      role: "Center Director", 
      bio: "With over 15 years in early childhood education, Sarah leads our center with a focus on holistic development and fostering a genuine love for learning.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Maria Rodriguez", 
      role: "Lead Preschool Educator", 
      bio: "Maria combines her background in child psychology with creative arts to prepare our preschoolers for a confident transition to primary school.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "David Chen", 
      role: "Infant Room Specialist", 
      bio: "Known for his calming presence, David specializes in infant care, building secure attachments and supporting crucial early milestones.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    }
  ]);

  const handleFileUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newTeam = [...teamMembers];
      newTeam[index].img = url;
      setTeamMembers(newTeam);
    }
  };

  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-[#F8F7F3]">
                <h3 className="text-xl font-serif font-bold text-[var(--color-ink)] tracking-tight">Contact Our Team</h3>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                  <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" placeholder="Inquiry about..." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full bg-[var(--color-ink)] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 shadow-lg shadow-slate-200">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTourModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTourModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-amber-50">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[var(--color-ink)] tracking-tight">Book a Private Tour</h3>
                  <p className="text-[11px] text-amber-700 font-bold uppercase tracking-widest mt-1">Experience our center first-hand</p>
                </div>
                <button 
                  onClick={() => setIsTourModalOpen(false)}
                  className="p-2 hover:bg-amber-100 rounded-full transition-colors text-amber-400 hover:text-amber-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form className="p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsTourModalOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Parent Name</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Child's Age / Expected Intake</label>
                  <select required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm bg-white">
                    <option value="">Select Age Group</option>
                    <option value="9-18m">Infant (9m - 18m)</option>
                    <option value="1.5-3y">Toddler (1.5y - 3y)</option>
                    <option value="3-5y">Preschool (3y - 5y)</option>
                    <option value="future">Planning for the future</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Preferred Date & Time</label>
                  <input type="datetime-local" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all text-sm" />
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                  <p className="text-[12px] text-slate-500 leading-relaxed italic">
                    Tours are typically 20 minutes long. Our team will contact you within 24 hours to confirm your scheduled time.
                  </p>
                </div>
                <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 shadow-lg shadow-rose-200">
                  Confirm Tour Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">B</div>
          <span className="font-serif font-bold text-[24px] tracking-tight text-[var(--color-ink)]">Busy Bees Day Care Centre</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-widest font-bold text-[var(--color-ink)]">
          <a href="#" className="hover:opacity-70 transition-opacity">Programs</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Safety</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Our Team</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Fees</a>
        </div>
        <button 
          onClick={() => setIsTourModalOpen(true)}
          className="bg-[var(--color-ink)] text-white px-6 py-3 rounded text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
        >
          Book a Private Tour
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 lg:px-12 overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAFAF9] rounded-b-[120px] -z-10" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-[11px] uppercase font-bold tracking-widest mb-8 bg-rose-50">
              <Star className="w-3.5 h-3.5 fill-[var(--color-primary)]" />
              <span>Enrollment Now Open — Opening Special $150 Per Week</span>
            </div>
            
            <h1 className="text-[62px] leading-[1.05] font-serif font-bold text-[var(--color-ink)] mb-8 tracking-[-1.5px]">
              Where Playful Learning Meets <br/><span className="text-[var(--color-primary)] relative">
                Total Peace of Mind.
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-2 bg-rose-100 -z-10"
                />
              </span>
            </h1>
            
            <p className="text-[19px] text-[var(--color-muted)] mb-10 leading-[1.7] font-medium">
              Join our family at Busy Bees Day Care Centre. We provide a safe, joyful environment for children aged 9 months to 5 years, focusing on literacy, safety, and school readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setIsTourModalOpen(true)}
                className="bg-[var(--color-accent)] text-white px-10 py-5 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                Book Your Private Tour
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                 onClick={() => setIsContactModalOpen(true)}
                 className="bg-white border-2 border-slate-100 hover:border-[var(--color-ink)] text-[var(--color-ink)] px-10 py-5 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-all flex items-center justify-center"
              >
                Inquire Online
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 border-t border-black/5 pt-8">
              <div className="flex flex-col">
                <span className="font-serif text-[32px] font-bold text-[var(--color-ink)]">1:3</span>
                <label className="text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--color-muted)] mt-1">Staff Ratio</label>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[32px] font-bold text-[var(--color-ink)]">15+</span>
                <label className="text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--color-muted)] mt-1">Years Excel.</label>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[32px] font-bold text-[var(--color-ink)]">100%</span>
                <label className="text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--color-muted)] mt-1">First Aid</label>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:h-[550px] group"
          >
            <div className="absolute inset-0 bg-amber-50 rounded-3xl rotate-2 opacity-50 -z-10 group-hover:rotate-3 transition-transform duration-700"></div>
            <div className="w-full h-full p-4 bg-white rounded-3xl shadow-2xl relative z-10">
              <img 
                src="/regenerated_image_1777554348206.png" 
                alt="Educator reading to diverse children" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-50">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-50 flex items-center justify-center text-[10px] font-bold text-amber-600">500+</div>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[var(--color-ink)] leading-none mb-1">Trusted by Parents</p>
                  <p className="text-[11px] font-medium text-[var(--color-muted)]">Local community for 15+ years</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>


      {/* Structured Programs (Segmentation) */}
      <section className="py-28 px-6 lg:px-12 bg-[#FDFCF9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 sticky top-32 h-fit">
            <h2 className="text-[36px] font-serif font-bold text-[var(--color-ink)] mb-6 tracking-tight leading-tight">Nurturing Growth at Every Stage</h2>
            <p className="text-[var(--color-muted)] text-[17px] mb-8 leading-relaxed font-medium">Our programs are designed to meet your child exactly where they are, focusing on the specific emotional and cognitive milestones of their age group.</p>
            <div style={{ marginTop: '24px', padding: '24px', background: 'white', borderLeft: '4px solid var(--color-accent)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', borderRadius: '0 12px 12px 0' }}>
              <p className="text-[14px] text-[var(--color-ink)] m-0 leading-[1.6]">
                <strong className='text-[var(--color-accent)] uppercase text-[11px] tracking-widest block mb-1'>Limited Enrollment</strong> Our next term intake is reaching capacity. <button onClick={() => setIsTourModalOpen(true)} className="font-bold underline underline-offset-2 hover:text-[var(--color-primary)] transition-colors cursor-pointer">Book a tour</button> this week to reserve your priority spot for 2026.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 flex flex-col gap-8">
            {[ 
              { 
                title: "Infant Care", 
                age: "9m - 18m", 
                desc: "Focusing on secure attachments, emotional bonding, and sensory exploration. We practice gentle routines and provide nutritious, healthy meals to support early growth.",
                img: "https://images.unsplash.com/photo-1544605929-216a6ce014ea?q=80&w=800&auto=format&fit=crop",
                tags: ["Potty Training", "Sensory Play", "Safety Education"]
              },
              { 
                title: "Junior Explorers", 
                age: "1.5y - 3y", 
                desc: "Channeling energy into language development and phonics. We practice essential life skills like handwashing and brushing, while encouraging learn-by-play.",
                img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
                tags: ["Phonics", "Music Lessons", "Outdoor Play"]
              },
              { 
                title: "School Readiness", 
                age: "3y - 5y", 
                desc: "Preparing young minds for primary school through reading, writing practice, art & craft, and social-emotional regulation in a structured setting.",
                img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
                tags: ["Art & Craft", "Literacy"]
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-black/5 hover:border-[var(--color-primary)]/50 shadow-sm hover:shadow-xl hover:shadow-rose-900/5 transition-all duration-500 group flex flex-col sm:flex-row gap-8 relative overflow-hidden"
              >
                <div className="w-full sm:w-60 h-44 rounded-xl overflow-hidden shrink-0 relative">
                  <img 
                    src={program.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={program.title} 
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-[var(--color-ink)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-rose-50 text-[var(--color-primary)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{program.age}</span>
                    <h3 className="text-[24px] font-serif font-bold text-[var(--color-ink)]">{program.title}</h3>
                  </div>
                  <p className="text-[var(--color-muted)] text-[15px] mb-4 leading-relaxed font-medium">{program.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] bg-slate-50 px-2 py-1 rounded-sm border border-slate-100">{tag}</span>
                    ))}
                  </div>
                  <button className="bg-transparent border border-slate-200 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white transition-all px-6 py-2.5 rounded-full text-[var(--color-ink)] font-bold text-[12px] uppercase tracking-widest flex items-center justify-center gap-2 w-fit">
                    Explore This Room
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Video Showcase Section */}
      <section className="py-24 px-6 lg:px-12 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-children-playing-in-a-preschool-classroom-34533-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 hover:scale-110 transition-transform cursor-pointer group">
              <Play className="w-8 h-8 fill-white group-hover:block" />
            </div>
            <h2 className="text-[42px] font-serif font-bold mb-6 tracking-tight leading-tight">Every Minute is an Adventure</h2>
            <p className="text-[18px] text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl">
              Experience the joy, the discovery, and the nurturing environment of Busy Bees Day Care Centre through the eyes of our little ones.
            </p>
            <button 
              onClick={toggleMute}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all backdrop-blur-sm text-[12px] font-bold uppercase tracking-widest"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {isMuted ? 'Unmute Experience' : 'Mute Video'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Safety & Care Reassurance */}
      <section className="py-28 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[42px] font-serif font-bold text-[var(--color-ink)] mb-8 tracking-tight leading-tight">Your child's safety is our foundational promise.</h2>
            <p className="text-[var(--color-muted)] text-[18px] mb-10 leading-relaxed font-medium">
              We know leaving your child is the hardest part of the day. That's why we've engineered our facility and our protocols to provide unequivocal peace of mind through transparency and technology.
            </p>
            
            <div className="space-y-10">
              {[
                { 
                  title: "State-of-the-Art Security", 
                  desc: "Biometric entry systems. HD security cameras in all play areas and hallways. Strict authorized-pick-up-only protocols.",
                  icon: <ShieldCheck className="w-6 h-6 text-white" />
                },
                { 
                  title: "Hospital-Grade Health", 
                  desc: "Hospital-grade sanitization nightly. MERV-13 air filtration systems. 100% CPR & First Aid certified educators.",
                  icon: <HeartPulse className="w-6 h-6 text-white" />
                },
                { 
                  title: "Real-Time Connectivity", 
                  desc: "Get photo, nap, and meal updates pushed straight to your phone via our parent app so you never miss a moment.",
                  icon: <Clock className="w-6 h-6 text-white" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-2">{item.title}</h4>
                    <p className="text-[15px] text-[var(--color-muted)] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#FAF9F5] p-8 relative rounded-[40px] shadow-sm border border-slate-50 group">
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576043005974-ba08a2febe9f?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-[450px] object-cover transition-all duration-1000 group-hover:scale-105" 
                  alt="Safe environment" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-slate-50 z-20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[11px] font-bold text-[var(--color-ink)] uppercase tracking-[0.15em]">Live Parent Update</span>
                </div>
                <div className="flex gap-4">
                  <img src="https://images.unsplash.com/photo-1544605929-216a6ce014ea?q=80&w=100&auto=format&fit=crop" className="w-14 h-14 rounded-xl object-cover shadow-sm border border-slate-50" alt="" />
                  <div>
                    <p className="text-[14px] text-[var(--color-muted)] font-medium leading-relaxed">Leo successfully laid down for his 11:30am nap! 😴</p>
                    <p className="text-[11px] text-slate-400 font-bold uppercase mt-2 tracking-widest">Sent 2 mins ago</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-28 px-6 lg:px-12 bg-[#FBFBFA] border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
             <h2 className="text-[42px] font-serif font-bold text-[var(--color-ink)] mb-6 tracking-tight">The Hearts Behind Busy Bees</h2>
             <p className="text-[var(--color-muted)] text-[17px] leading-relaxed font-medium">Our team isn't just highly qualified—they're chosen for their empathy, creativity, and genuine belief in the power of early education.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-white p-3 rounded-3xl shadow-sm border border-black/5 group hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="w-full aspect-[4/5] rounded-2xl mb-8 overflow-hidden relative">
                  <img src={member.img} className="w-full h-full object-cover transition-transform duration-700" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <label className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 transition-all">
                      <Upload className="w-4 h-4" />
                      Update Photo
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => handleFileUpload(idx, e)}
                      />
                    </label>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-[22px] font-serif font-bold text-[var(--color-ink)] mb-1">{member.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-[var(--color-accent)] mb-4">{member.role}</p>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed font-medium">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-28 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="flex flex-wrap gap-10 justify-center items-center opacity-70 mb-20">
            <div className="font-bold text-[11px] tracking-[0.2em] uppercase border-2 border-[var(--color-ink)] px-5 py-2 text-[var(--color-ink)] rounded-sm">OFSTED OUTSTANDING</div>
            <div className="font-bold text-[11px] tracking-[0.2em] uppercase border-2 border-[var(--color-ink)] px-5 py-2 text-[var(--color-ink)] rounded-sm">NCMA REGISTERED</div>
            <div className="font-bold text-[11px] tracking-[0.2em] uppercase border-2 border-[var(--color-ink)] px-5 py-2 text-[var(--color-ink)] rounded-sm">ECO-SCHOOLS GOLD</div>
          </div>
          <blockquote className="text-[28px] md:text-[38px] font-serif italic mb-12 text-[var(--color-ink)] leading-snug px-4">
            "I was incredibly anxious about returning to work. The team at Busy Bees didn't just care for Leo; they supported our whole family. It's the only place I truly trust with his growth."
          </blockquote>
          <div className="flex items-center justify-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#E5E7EB] shrink-0 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=200&auto=format&fit=crop" alt="Sarah M." className="w-14 h-14 object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold uppercase tracking-[0.15em] text-[12px] text-[var(--color-ink)]">— Sarah M.</p>
              <p className="text-[var(--color-muted)] text-[14px] font-serif italic mb-0.5">Senior Architect</p>
              <p className="text-[var(--color-accent)] text-[11px] font-bold uppercase tracking-widest">Mother of Leo (Preschool Room)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heart of the Centre Gallery */}
      <section className="py-28 px-6 lg:px-12 bg-[#F8F7F3]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[42px] font-serif font-bold text-[var(--color-ink)] mb-6 tracking-tight leading-tight">Life at Busy Bees</h2>
              <p className="text-[var(--color-muted)] text-[17px] font-medium leading-relaxed">
                A glimpse into our daily adventures, celebrations, and the nurturing bonds that make our centre a second home for your little ones.
              </p>
            </div>
            <button 
              onClick={() => setIsTourModalOpen(true)}
              className="px-8 py-4 bg-[var(--color-ink)] text-white rounded-xl text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              See It In Person
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Large Feature Image - Birthday Celebration */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-8 md:row-span-2 relative rounded-[32px] overflow-hidden group shadow-xl"
            >
              <img src="/input_file_2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Birthday Celebration" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <span className="inline-block px-3 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">Celebrations</span>
                <h3 className="text-white text-2xl font-serif font-bold">Joyful Milestones</h3>
                <p className="text-white/80 text-sm mt-1">Every child's special day is celebrated with love and fun.</p>
              </div>
            </motion.div>

            {/* Meal Time Indoors */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-4 md:row-span-1 relative rounded-[32px] overflow-hidden group shadow-lg"
            >
              <img src="/input_file_0.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Indoor Meal Time" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest">Healthy Habits</span>
              </div>
            </motion.div>

            {/* Fiji Day Display */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-4 md:row-span-1 relative rounded-[32px] overflow-hidden group shadow-lg"
            >
              <img src="/input_file_4.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Happy Fiji Day" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-[14px] font-bold">Cultural Diversity</p>
              </div>
            </motion.div>

            {/* Nurturing Bonds */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-12 lg:col-span-5 md:row-span-1 relative rounded-[32px] overflow-hidden group shadow-lg"
            >
              <div className="grid grid-cols-2 h-full gap-6">
                <div className="relative rounded-[24px] overflow-hidden h-full">
                  <img src="/input_file_3.png" className="w-full h-full object-cover" alt="Nurturing Bonds" />
                </div>
                <div className="flex flex-col justify-center pr-6 py-6">
                  <HeartPulse className="w-8 h-8 text-[var(--color-primary)] mb-4" />
                  <h4 className="text-xl font-serif font-bold mb-2">Pillars of Care</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Our educators build deep, meaningful connections with every child.</p>
                </div>
              </div>
            </motion.div>

            {/* Outdoor Snack Time */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="md:col-span-12 lg:col-span-7 md:row-span-1 relative rounded-[32px] overflow-hidden group shadow-lg"
            >
              <img src="/input_file_1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Outdoor Snack Time" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-600 border border-amber-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Outdoor Discovery
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-28 px-6 lg:px-12 bg-[#1A2B3C] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[42px] font-serif font-bold mb-8 tracking-tight leading-tight">Starting Your Busy Bees Journey</h2>
          <p className="text-slate-400 text-[17px] mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            We've streamlined our enrollment to be as stress-free as possible for busy families. Follow our transparent 3-step process.
          </p>

          {/* Animated Progress Bar */}
          <div className="max-w-4xl mx-auto mb-24 relative px-4">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2" />
            <motion.div 
              initial={{ width: "33%" }}
              whileInView={{ width: activeStep === 1 ? "33%" : activeStep === 2 ? "66%" : "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-1 bg-[var(--color-accent)] -translate-y-1/2 shadow-lg shadow-amber-500/50"
            />
            <div className="relative flex justify-between">
              {[1, 2, 3].map((step) => (
                <button 
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-500 flex items-center justify-center font-bold font-serif text-lg relative z-10 ${
                    activeStep >= step 
                      ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white scale-110 shadow-xl shadow-amber-500/20" 
                      : "bg-[#1A2B3C] border-white/20 text-white/40 hover:border-white/40"
                  }`}
                >
                  {activeStep > step ? <CheckCircle2 className="w-6 h-6" /> : `0${step}`}
                  <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold uppercase tracking-widest transition-opacity duration-300 ${activeStep === step ? "opacity-100" : "opacity-40"}`}>
                    {step === 1 ? "Inquiry" : step === 2 ? "The Visit" : "Welcome"}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 relative mt-12">
            <motion.div 
              animate={{ opacity: activeStep === 1 ? 1 : 0.4, scale: activeStep === 1 ? 1 : 0.95 }}
              onClick={() => setActiveStep(1)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-8 text-[24px] font-serif font-bold text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                01
              </div>
              <h3 className="text-[14px] uppercase tracking-[0.2em] font-bold mb-4">Book a Tour</h3>
              <p className="text-slate-400 text-[15px] max-w-xs leading-relaxed font-medium">Schedule a private walkthrough at a time that works for your schedule.</p>
            </motion.div>
            
            <motion.div 
              animate={{ opacity: activeStep === 2 ? 1 : 0.4, scale: activeStep === 2 ? 1 : 0.95 }}
              onClick={() => setActiveStep(2)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-8 text-[24px] font-serif font-bold text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                02
              </div>
              <h3 className="text-[14px] uppercase tracking-[0.2em] font-bold mb-4">Meet the Team</h3>
              <p className="text-slate-400 text-[15px] max-w-xs leading-relaxed font-medium">Experience our classrooms and discuss your child's specific needs with our educators.</p>
            </motion.div>
            
            <motion.div 
              animate={{ opacity: activeStep === 3 ? 1 : 0.4, scale: activeStep === 3 ? 1 : 0.95 }}
              onClick={() => setActiveStep(3)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-8 text-[24px] font-serif font-bold text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                03
              </div>
              <h3 className="text-[14px] uppercase tracking-[0.2em] font-bold mb-4">Secure Your Spot</h3>
              <p className="text-slate-400 text-[15px] max-w-xs leading-relaxed font-medium">Complete our digital enrollment to begin the exciting transition period.</p>
            </motion.div>
          </div>
          
          <div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setIsTourModalOpen(true)}
              className="bg-[var(--color-accent)] text-white px-12 py-5 rounded-xl text-[15px] font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1 active:scale-95"
            >
              Begin Enrollment Process
            </button>
            <button 
              onClick={handleDownload}
              className={`px-10 py-5 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 border shadow-sm ${
                isDownloaded 
                  ? "bg-green-500 border-green-500 text-white" 
                  : "bg-white/5 hover:bg-white/10 text-white border-white/10"
              }`}
            >
              {isDownloaded ? <CheckCircle2 className="w-5 h-5" /> : <FileDown className="w-5 h-5 text-[var(--color-accent)]" />}
              {isDownloaded ? "Handbook Downloaded!" : "Download Parent Handbook (PDF)"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA & Mini Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 lg:px-12 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="text-[var(--color-ink)] text-[38px] font-serif font-bold tracking-tight leading-[1.2] mb-4">Ready to start their adventure?</h2>
            <p className="text-[var(--color-muted)] text-[16px] leading-relaxed font-medium">Connect with us to check room availability or schedule a visit.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-transparent border-2 border-[var(--color-ink)] text-[var(--color-ink)] px-10 py-5 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-all hover:bg-[var(--color-ink)] hover:text-white"
            >
              Contact Us Today
            </button>
            <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white px-10 py-5 rounded-xl text-[14px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 active:scale-95">
              Check Availability
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-black/5">
          <div className="flex flex-col md:items-start items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg">B</div>
              <span className="font-serif text-[22px] font-bold text-[var(--color-ink)] tracking-tight">Busy Bees Day Care Centre</span>
            </div>
            <div className="flex flex-col md:items-start items-center gap-2 text-[13px] text-[var(--color-muted)] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                <span>18 Borete Street Nadawa</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Mr Vinod: 273 8053</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Mrs Vinod: 247 4502</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                <span>vsinvestments76@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="p-2 bg-slate-50 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-50 rounded-full text-[var(--color-ink)] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                Inquire
              </button>
              <a href="#" className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors">Privacy</a>
              <a href="#" className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors">Safety</a>
            </div>
          </div>
          <p className="text-[var(--color-muted)] text-[11px] uppercase tracking-[0.2em] font-bold">© 2026 Busy Bees Day Care Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
