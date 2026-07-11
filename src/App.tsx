import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from 'next-themes';
import { TopBanner } from './components/TopBanner';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { SessionBreakdown } from './components/SessionBreakdown';
import { Mentor } from './components/Mentor';
import { Award } from './components/Award';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { DottedSurface } from './components/ui/dotted-surface';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="bg-transparent text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground relative">
        <DottedSurface />
        <div className="relative z-0">
          <TopBanner />
          <Hero />
          <Problem />
          <WhatYouWillLearn />
          <SessionBreakdown />
          <Mentor />
          <Award />
          <CTA />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;