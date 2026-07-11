import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Problem = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative bg-brand-dark/85 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-red/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Why Most Entrepreneurs Stay Stuck
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-luxury text-5xl md:text-7xl font-bold mb-12 text-white"
          >
            THE <span className="text-brand-red">PROBLEM</span>
          </motion.h2>

          <div ref={ref} className="space-y-6 text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              THE PROBLEM ISN'T THAT YOU NEED TO WORK HARDER.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              HUSTLE MORE.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              WAIT FOR YOUR CREDIT TO FIX ITSELF.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              OR HOPE A LENDER SAYS YES.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-brand-gold font-bold mt-8 text-2xl md:text-3xl"
            >
              THE PROBLEM IS YOU DON'T HAVE A SYSTEM — <br/>
              AND NO ONE TAUGHT YOU THE REAL RULES.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-20 p-8 border border-white/10 bg-black/30 rounded-lg text-center"
        >
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            <span className="text-brand-red font-bold">Bad credit</span> will always block your funding.<br/>
            <span className="text-brand-red font-bold">No system</span> will always limit your income.
          </p>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-lg text-white/60 font-light">
            If you want to build real wealth, you don't need more hustle.<br/>
            <span className="text-brand-gold font-medium">You need the blueprint. That's what we're covering July 15th.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};