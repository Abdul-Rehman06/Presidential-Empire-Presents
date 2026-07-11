import React from 'react';
import { Crown } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark/95 pt-20 pb-10 border-t border-white/5 relative z-10 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center justify-center mb-8">
          <Crown className="w-8 h-8 text-brand-gold mb-4" />
          <h3 className="font-serif text-2xl font-bold text-white tracking-widest uppercase mb-2">Presidential Empire</h3>
        </div>
        
        <div className="flex flex-col items-center gap-4 text-sm text-white/40 mb-8">
          <p>© {new Date().getFullYear()} Presidential Empire LLC. All Rights Reserved.</p>
          <a href="mailto:support@presidentialempirellc.com" className="hover:text-white transition-colors">support@presidentialempirellc.com</a>
        </div>

        <div className="flex justify-center gap-6 text-xs text-white/30">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};