import React from 'react';
import { ShieldCheck, Brain, HeartPulse, Clock, ArrowRight, CheckCircle2, ChevronRight, Star, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Prototype() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-ink)]">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[24px] tracking-tight">Busy Bees Day Care</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-widest font-semibold text-[var(--color-ink)]">
          <a href="#" className="hover:opacity-70 transition-opacity">Programs</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Safety</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Our Team</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Fees</a>
        </div>
        <button className="bg-[var(--color-ink)] text-white px-6 py-3 rounded text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90">
          Book a Private Tour
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 lg:px-12 overflow-hidden bg-[var(--color-bg)]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E5E7EB] rounded-t-[120px] -z-10" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-ink)] text-[var(--color-ink)] text-[10px] uppercase font-bold tracking-widest mb-6">
              <Star className="w-3 h-3 fill-[var(--color-ink)]" />
              <span>Rated Exceeding NQS Standards</span>
            </div>
            
            <h1 className="text-[58px] leading-[1.05] font-serif font-bold text-[var(--color-ink)] mb-6 tracking-[-1.5px]">
              Where Early Learning Meets <br/><span className="text-[var(--color-accent)]">Total Peace of Mind.</span>
            </h1>
            
            <p className="text-[18px] text-[var(--color-muted)] mb-8 leading-[1.6]">
              We provide a safe, structured, and joyful environment for children aged 6 months to 5 years. Exceptional care that prepares them for school—and makes your workday worry-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--color-ink)] text-white px-8 py-3.5 rounded text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90 flex items-center justify-center gap-2">
                Book Your Private Tour
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white text-[var(--color-ink)] px-8 py-3.5 rounded text-[13px] font-semibold uppercase tracking-wider transition-colors flex items-center justify-center">
                Check Availability
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 border-y border-black/10 py-6">
              <div className="flex flex-col">
                <span className="font-serif text-[28px] font-bold text-[var(--color-accent)]">1:3</span>
                <label className="text-[11px] uppercase tracking-[0.05em] text-[var(--color-muted)]">Staff Ratio</label>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[28px] font-bold text-[var(--color-accent)]">15+</span>
                <label className="text-[11px] uppercase tracking-[0.05em] text-[var(--color-muted)]">Years Excel.</label>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[28px] font-bold text-[var(--color-accent)]">100%</span>
                <label className="text-[11px] uppercase tracking-[0.05em] text-[var(--color-muted)]">CPR Cert.</label>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-[#E5E7EB] rounded-none rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2673&auto=format&fit=crop" 
              alt="Educator reading to diverse children" 
              className="w-full h-full object-cover rounded-none relative z-10 border-none"
            />
          </motion.div>
          
        </div>
      </section>

      {/* Structured Programs (Segmentation) */}
      <section className="py-24 px-6 lg:px-12 bg-[#F1EFE9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-serif font-bold text-[var(--color-ink)] mb-4 tracking-tight">Our Curated Programs</h2>
            <p className="text-[var(--color-muted)] mb-8">Our programs are designed to meet your child exactly where they are, focusing on the specific emotional and cognitive milestones of their age group.</p>
            <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(194, 120, 3, 0.1)', borderLeft: '3px solid var(--color-accent)' }}>
              <p className="text-[13px] text-[var(--color-ink)] m-0 leading-[1.4]">
                <strong>Notice:</strong> Our Next Open Day is <strong>Saturday, Oct 14</strong>. Limited intake spots remaining for 2026.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 flex flex-col gap-4">
            {/* Infant Card */}
            <div className="bg-[var(--color-bg)] rounded-sm p-6 border border-black/5 hover:border-[var(--color-accent)] transition-colors duration-300 group flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 rounded-sm overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1544605929-216a6ce014ea?q=80&w=800&auto=format&fit=crop" alt="Infant care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)]">The Hive (Infants)</h3>
                  <span className="bg-white px-2 py-[2px] rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)]">6m - 18m</span>
                </div>
                <p className="text-[var(--color-muted)] text-[14px] mb-4">Focused on secure attachments, emotional bonding, and sensory exploration in a peaceful nursery environment.</p>
                <button className="text-[var(--color-accent)] font-semibold text-[13px] uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Room <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Toddler Card */}
            <div className="bg-[var(--color-bg)] rounded-sm p-6 border border-black/5 hover:border-[var(--color-accent)] transition-colors duration-300 group flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 rounded-sm overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" alt="Toddler play" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)]">Explorer Bee (Toddlers)</h3>
                  <span className="bg-white px-2 py-[2px] rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)]">1.5y - 3y</span>
                </div>
                <p className="text-[var(--color-muted)] text-[14px] mb-4">Channeling energy into language development, gross motor skills, and early socialization through structured play.</p>
                <button className="text-[var(--color-accent)] font-semibold text-[13px] uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Room <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Preschool Card */}
            <div className="bg-[var(--color-bg)] rounded-sm p-6 border border-black/5 hover:border-[var(--color-accent)] transition-colors duration-300 group flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-32 rounded-sm overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop" alt="Preschool learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)]">Creative Bee (Preschool)</h3>
                  <span className="bg-white px-2 py-[2px] rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)]">3y - 5y</span>
                </div>
                <p className="text-[var(--color-muted)] text-[14px] mb-4">A structured curriculum focusing on early literacy, numeracy, emotional regulation, and confidence.</p>
                <button className="text-[var(--color-accent)] font-semibold text-[13px] uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Room <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Safety & Care Reassurance */}
      <section className="py-24 px-6 lg:px-12 bg-[var(--color-bg)] border-y border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[36px] font-serif font-bold text-[var(--color-ink)] mb-6 tracking-tight leading-tight">Your child's safety is our foundational promise.</h2>
            <p className="text-[var(--color-muted)] text-[16px] mb-8 leading-relaxed">
              We know leaving your child is the hardest part of the day. That's why we've engineered our facility and our protocols to provide unequivocal peace of mind.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 border-b border-black/5 pb-6">
                <div>
                  <h4 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-2">State-of-the-Art Security</h4>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">Biometric entry systems. HD security cameras in all play areas and hallways. Strict authorized-pick-up-only protocols.</p>
                </div>
              </div>
              
              <div className="flex gap-4 border-b border-black/5 pb-6">
                <div>
                  <h4 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-2">Health & Hygiene First</h4>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">Hospital-grade sanitization nightly. MERV-13 air filtration systems. 100% CPR & First Aid certified educators.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div>
                  <h4 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-2">Real-Time Connectivity</h4>
                  <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">Get photo, nap, and meal updates pushed straight to your phone via our parent app so you never miss a moment.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#E5E7EB] p-4 relative grayscale">
              <img src="https://images.unsplash.com/photo-1576043005974-ba08a2febe9f?q=80&w=1000&auto=format&fit=crop" className="w-full h-80 object-cover opacity-90 mix-blend-multiply" alt="Safe environment" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-6 lg:px-12 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:w-2/3">
             <h2 className="text-[36px] font-serif font-bold text-[var(--color-ink)] mb-4 tracking-tight">The Educators Behind the Excellence.</h2>
             <p className="text-[var(--color-muted)] text-[16px] leading-relaxed">Our team isn't just highly qualified—they're deeply passionate about early childhood development. Every educator is certified and dedicated to nurturing your child's unique potential.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="w-full aspect-[4/5] bg-[#E5E7EB] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Sarah Jenkins" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)] mb-1">Sarah Jenkins</h3>
              <p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-accent)] mb-4">Center Director</p>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">With over 15 years in early childhood education, Sarah leads our center with a focus on holistic development and fostering a genuine love for learning.</p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="w-full aspect-[4/5] bg-[#E5E7EB] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" alt="Maria Rodriguez" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)] mb-1">Maria Rodriguez</h3>
              <p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-accent)] mb-4">Lead Preschool Educator</p>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">Maria combines her background in child psychology with creative arts to prepare our preschoolers for a confident transition to primary school.</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="w-full aspect-[4/5] bg-[#E5E7EB] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="David Chen" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-[20px] font-serif font-bold text-[var(--color-ink)] mb-1">David Chen</h3>
              <p className="text-[11px] uppercase tracking-widest font-bold text-[var(--color-accent)] mb-4">Infant Room Specialist</p>
              <p className="text-[14px] text-[var(--color-muted)] leading-relaxed">Known for his calming presence, David specializes in infant care, building secure attachments and supporting crucial early milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 lg:px-12 bg-[var(--color-bg)] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="trust-badges flex flex-wrap gap-8 justify-center items-center opacity-60 grayscale mb-16">
            <div className="font-bold text-[12px] tracking-widest uppercase border-[1.5px] border-[var(--color-ink)] px-3 py-1 text-[var(--color-ink)]">OFSTED OUTSTANDING</div>
            <div className="font-bold text-[12px] tracking-widest uppercase border-[1.5px] border-[var(--color-ink)] px-3 py-1 text-[var(--color-ink)]">NCMA REGISTERED</div>
            <div className="font-bold text-[12px] tracking-widest uppercase border-[1.5px] border-[var(--color-ink)] px-3 py-1 text-[var(--color-ink)]">ECO-SCHOOLS GOLD</div>
          </div>
          <blockquote className="text-[28px] md:text-[36px] font-serif italic mb-10 text-[var(--color-ink)] leading-snug">
            "The only place I trust with my son's growth. Receiving photo updates of him smiling on his first day changed everything. His vocabulary is booming."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E5E7EB] shrink-0 grayscale flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=200&auto=format&fit=crop" alt="Sarah M." className="w-12 h-12 object-cover opacity-80" />
            </div>
            <div className="text-left">
              <p className="font-bold uppercase tracking-widest text-[11px] text-[var(--color-ink)]">— Sarah M.</p>
              <p className="text-[var(--color-muted)] text-[13px] font-serif italic">Senior Architect & Mother of Leo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-24 px-6 lg:px-12 bg-[#F1EFE9] border-t border-black/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[36px] font-serif font-bold text-[var(--color-ink)] mb-16 tracking-tight">Three simple steps to peace of mind.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative border-t border-black/10 pt-12">
            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] font-bold text-[var(--color-accent)] mb-4">I.</span>
              <h3 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-3">Book a Tour</h3>
              <p className="text-[var(--color-muted)] text-[14px] max-w-xs leading-relaxed">Schedule a 20-minute, no-obligation walkthrough matching your availability.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] font-bold text-[var(--color-accent)] mb-4">II.</span>
              <h3 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-3">Meet the Team</h3>
              <p className="text-[var(--color-muted)] text-[14px] max-w-xs leading-relaxed">View the classrooms, meet the educators, and experience the learning environment firsthand.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] font-bold text-[var(--color-accent)] mb-4">III.</span>
              <h3 className="text-[14px] uppercase tracking-widest font-bold text-[var(--color-ink)] mb-3">Secure Your Spot</h3>
              <p className="text-[var(--color-muted)] text-[14px] max-w-xs leading-relaxed">Complete our digitized enrollment and transition plan to prepare your little one.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <button className="bg-[var(--color-ink)] text-white px-8 py-4 rounded text-[13px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90">
              Book Your Private Tour Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA & Mini Footer */}
      <footer className="bg-[var(--color-ink)] pt-20 pb-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mb-20 border-b border-white/10 pb-16">
          <div>
            <h2 className="text-white text-[36px] font-serif font-bold tracking-tight mb-4">Ready to come say hello?</h2>
            <p className="text-[var(--color-muted)] text-[16px]">We have limited spots available for the upcoming term.</p>
          </div>
          <div>
            <button className="bg-[#E5E7EB] hover:bg-white text-[var(--color-ink)] px-8 py-4 rounded text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap">
              Check Availability Form
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-[20px] font-bold text-white tracking-tight">Busy Bees Day Care</span>
          </div>
          <p className="text-[var(--color-muted)] text-[12px] uppercase tracking-widest">© 2026 Busy Bees Day Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
