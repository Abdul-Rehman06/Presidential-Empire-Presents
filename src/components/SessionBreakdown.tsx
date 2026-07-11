import React from 'react';
import { motion } from 'framer-motion';

const segments = [
  {
    title: "Build Your Credit Profile Structure",
    content: "Most people skip this and wonder why they keep getting denied. We open by showing you exactly how to structure your credit profile the right way — the right accounts, the right order, the right foundation. This is the blueprint that makes everything else work."
  },
  {
    title: "Build the Business Machine",
    content: "Learn how to structure your business the right way so lenders see a fundable entity. By the end of this segment you'll know exactly what to set up, in what order, and why it matters."
  },
  {
    title: "Secure the Bag — Funding Strategy",
    content: "The exact blueprint for accessing $50K–$150K in business funding — the sources most people never find, the applications that get approved, and the mistakes that get you denied every time."
  },
  {
    title: "Build Bank Relationships That Get You Funded",
    content: "Banks don't just lend to businesses — they lend to businesses that look lendable and fundable. We cover exactly how to position yourself with banks, what they're looking for, and how to build the kind of relationship that gets you a yes when it matters most."
  },
  {
    title: "Scale It With AI + Live Q&A",
    content: "Use AI tools to automate your credit monitoring and funding pipeline. Then we open it up — your questions, live, answered in real time. Come ready to get specific."
  }
];

export const SessionBreakdown = () => {
  return (
    <section className="py-32 bg-brand-dark/85 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            Live Webinar
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-luxury text-4xl md:text-6xl font-bold"
          >
            SESSION <span className="text-brand-gold">BREAKDOWN</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {segments.map((mod, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-white/10 pb-8 last:border-0"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-1/4">
                  <p className="text-brand-red font-bold tracking-widest text-sm uppercase">SEGMENT {String(idx + 1).padStart(2, '0')}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">{mod.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};