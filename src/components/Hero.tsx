import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Crown, Star } from 'lucide-react';
import CountUp from 'react-countup';
import cassiusImg from '../assets/Cassius Randell.png';
import heroVideo from '../assets/hero-video.mp4';
import { BackgroundPixelStars } from './ui/background-pixel-stars';
import { FireButton } from './ui/FireButton';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-10 pb-20 overflow-hidden bg-brand-dark bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIElEQVR42mIUEhJiwAbevXuHVZyJgUQwqmEUDB0AEGAADd8DEPTX6ksAAAAASUVORK5CYII=')] bg-[size:10px]">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
      </div>

      <div className="absolute inset-0 z-0 opacity-50">
        <BackgroundPixelStars />
      </div>

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative mt-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-6"
          >
            <Crown className="w-8 h-8 text-brand-gold mb-2" />
            <p className="text-brand-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2">Presidential Empire Presents</p>
            <p className="text-white/60 uppercase tracking-widest text-xs">Live Webinar — July 15th, 2026</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="heading-luxury text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-4"
          >
            THE EMPIRE <br />
            <span className="text-gradient-gold">TAKEOVER</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 font-medium tracking-wide uppercase mb-8"
          >
            Build Credit. Secure Funding. Scale Your Empire.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="relative mb-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-brand-gold/30 p-2"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-brand-dark flex items-center justify-center">
               <img src={cassiusImg} alt="Cassius Randell" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-0 left-0 w-full text-center pb-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-white/60 uppercase tracking-wider">Hosted by</p>
              <p className="text-sm font-bold text-white">Cassius Randell</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-lg text-white/60 font-light max-w-2xl mb-10 leading-relaxed"
          >
            The <span className="text-brand-red font-semibold">live intensive webinar</span> for entrepreneurs ready to stop guessing and start building. Learn how to <span className="text-brand-gold font-semibold">repair your credit, secure $50K+ in business funding,</span> and create a system that works — even while you sleep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <FireButton href="https://www.fanbasis.com/agency-checkout/presidentialempire/wkgXz" className="w-full sm:w-auto">
              REGISTER NOW — $50
            </FireButton>
            
            <div className="flex flex-col items-center mt-4">
              <div className="flex gap-1 mb-2 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-white/50 uppercase tracking-widest">500+ students trained</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-6 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-brand-gold mb-1">
                <CountUp end={500} duration={2.5} />+
              </p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Students Trained</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-brand-gold mb-1">
                $<CountUp end={50} duration={2.5} />K+
              </p>
              <p className="text-xs text-white/50 uppercase tracking-widest">Avg Funding Secured</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-brand-gold mb-1">1 Night</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">To Change Everything</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};