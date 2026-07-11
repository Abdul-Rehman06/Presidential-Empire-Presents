import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const points = [
  "How to identify and remove negative items dragging down your credit score — fast",
  "The exact steps to build a business credit profile that gets approved — separate from your personal credit",
  "How to position your business to access $50K–$150K in funding within 90 days",
  "The lender secrets most business owners never learn — and why banks count on your ignorance",
  "How to use AI to automate and scale your credit and funding strategy so it works without you",
  "How to stop depending on one income stream and build multiple revenue pillars from your expertise"
];

export const WhatYouWillLearn = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            What You Will Learn
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-luxury text-4xl md:text-6xl font-bold mb-6"
          >
            WHAT <span className="text-brand-gold">YOU</span> WILL LEARN
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 font-light"
          >
            One live session. A complete playbook. No fluff — just the moves that get results.
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto space-y-4">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-6 p-6 border border-white/5 bg-white/[0.02] rounded-lg hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all group"
            >
              <div className="text-2xl font-serif font-bold text-brand-gold/50 group-hover:text-brand-gold transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <p className="text-white/80 text-lg leading-relaxed group-hover:text-white transition-colors">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};