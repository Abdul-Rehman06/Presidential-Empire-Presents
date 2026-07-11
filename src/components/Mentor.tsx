import React from 'react';
import { motion } from 'framer-motion';
import cassiusImg from '../assets/Cassius Randell.png';

export const Mentor = () => {
  return (
    <section className="py-32 relative bg-black/85">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-luxury text-4xl md:text-5xl font-bold mb-4"
          >
            MEET YOUR <span className="text-brand-gold">MENTOR</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="rounded-lg overflow-hidden border-2 border-white/5 relative">
              <img 
                src={cassiusImg} 
                alt="Cassius Randell" 
                className="w-full h-auto grayscale object-cover object-top aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <p className="text-brand-gold text-sm tracking-widest uppercase font-semibold mb-2">Founder, Presidential Empire</p>
            <h3 className="heading-luxury text-4xl font-bold text-white mb-6">Cassius Randell</h3>
            
            <div className="space-y-6 text-white/70 font-light leading-relaxed">
              <p>
                Cassius Randell is an Atlanta-based credit strategist, business funding expert, and founder of <span className="font-semibold text-white">Presidential Empire</span> — an education company that has helped hundreds of entrepreneurs transform their credit profiles and unlock business capital.
              </p>
              <p>
                With a curriculum built around real results — not theory — Cassius teaches the exact systems he used to go from zero access to securing significant business funding. His students have gone on to build multiple six-figure businesses using the Presidential Empire blueprint.
              </p>
              <p>
                As a mentor, Cassius brings together <span className="font-semibold text-white">credit mastery, business funding strategy, and AI-powered scaling</span> into one complete system anyone can follow — regardless of where they're starting from.
              </p>
            </div>

            <div className="mt-10">
              <button className="btn-primary px-8 py-4 rounded-md uppercase tracking-widest text-sm w-full md:w-auto">
                JOIN THE WEBINAR — $50 →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};