import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import awardImg from '../assets/download.jpg';

export const Award = () => {
  return (
    <section className="py-32 relative bg-brand-dark/85">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Recognition & Proof
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-luxury text-4xl md:text-5xl font-bold mb-4"
          >
            THE <span className="text-brand-gold">6 FIGURE CLUB</span> AWARD
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-black/40 rounded-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img 
                src={awardImg} 
                alt="Award Presentation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Certified Results</p>
              <h3 className="text-2xl font-bold text-white mb-6">Recognized for Generating 6-Figure Revenue</h3>
              
              <div className="space-y-4 text-white/60 font-light text-sm leading-relaxed mb-8">
                <p>
                  The <span className="font-semibold text-white">6 Figure Club Award</span> from Influence 2 Impact recognizes entrepreneurs who have generated six figures in revenue using the proven system — real results, verified by the community.
                </p>
                <p>
                  Cassius Randell earned this recognition for building Presidential Empire into a six-figure education business rooted in credit repair, business funding, and entrepreneurship mentorship.
                </p>
                <p>
                  This isn't credentials for credentials' sake — it's proof the blueprint has been tested, refined, and validated by real people who took action and got results.
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                <Star className="w-5 h-5 text-brand-gold fill-brand-gold flex-shrink-0" />
                <p className="text-brand-gold font-medium text-sm">6 Figure Club — Influence 2 Impact Income Award</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};