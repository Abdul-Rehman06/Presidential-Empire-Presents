import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FireButton } from './ui/FireButton';

export const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({ Days: 4, Hours: 21, Mins: 9, Secs: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.Secs > 0) return { ...prev, Secs: prev.Secs - 1 };
        if (prev.Mins > 0) return { ...prev, Mins: prev.Mins - 1, Secs: 59 };
        if (prev.Hours > 0) return { ...prev, Hours: prev.Hours - 1, Mins: 59, Secs: 59 };
        if (prev.Days > 0) return { ...prev, Days: prev.Days - 1, Hours: 23, Mins: 59, Secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-black/85 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-red/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Countdown Area */}
        <div className="text-center mb-16 border-b border-white/10 pb-16">
          <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-8">Free Spot Ends In</p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 md:gap-8 mb-10"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-serif font-bold text-white">{value.toString().padStart(2, '0')}</span>
                <span className="text-xs md:text-sm text-brand-gold uppercase tracking-widest mt-2">{unit}</span>
              </div>
            ))}
          </motion.div>
          <FireButton href="https://www.fanbasis.com/agency-checkout/presidentialempire/wkgXz">
            CLAIM YOUR SPOT — $50
          </FireButton>
        </div>

        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-white/60 uppercase tracking-widest text-sm mb-4">One Webinar. One System. One Decision.</p>
            <h2 className="heading-luxury text-5xl md:text-7xl font-bold mb-4">
              BUILD YOUR <span className="text-brand-red">EMPIRE.</span><br/>
              START JULY 15TH.
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              Live. Replays included. Show up, take action, and transform your financial future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            {/* Inclusions */}
            <div className="border border-white/10 bg-black/40 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-gold mb-6 border-b border-white/10 pb-4">Everything You Get For Just $50</h3>
              <ul className="space-y-4">
                {[
                  "Live Webinar Access",
                  "Full Session Recordings",
                  "Pre-Session Resource Documents",
                  "The Empire Takeover E-Book",
                  "Details for Presidential Empire Mentorship (4-Month Term)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <Star className="w-5 h-5 text-brand-gold fill-brand-gold flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Details */}
            <div className="border border-white/10 bg-black/40 p-8 rounded-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-gold text-sm uppercase tracking-wider">Event</span>
                  <span className="text-white font-medium text-right">The Empire Takeover</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-gold text-sm uppercase tracking-wider">Date</span>
                  <span className="text-white font-medium text-right">July 15th, 2026</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-gold text-sm uppercase tracking-wider">Time</span>
                  <span className="text-white font-medium text-right">7 PM EST</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-gold text-sm uppercase tracking-wider">Format</span>
                  <span className="text-white font-medium text-right">Virtual / Live</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-gold text-sm uppercase tracking-wider">Investment</span>
                  <span className="text-white font-medium text-right">$50</span>
                </div>
              </div>
              
              <div className="mt-8">
                <FireButton href="https://www.fanbasis.com/agency-checkout/presidentialempire/wkgXz" className="w-full">
                  REGISTER NOW — ONLY $50
                </FireButton>
                <p className="text-center text-white/40 text-xs mt-4 uppercase tracking-widest">
                  $50 investment. No excuses. Just results.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};