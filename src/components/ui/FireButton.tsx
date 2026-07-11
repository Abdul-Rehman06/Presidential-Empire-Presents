import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FireButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FireButton = ({ href, children, className = '' }: FireButtonProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative inline-flex group ${className}`}
    >
      {/* Outer Glow / Red Fire Effect */}
      <div className="absolute transition-all duration-500 opacity-80 -inset-px bg-gradient-to-r from-brand-red via-red-500 to-brand-red rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200 animate-pulse"></div>
      
      {/* Intense Red Core */}
      <div className="absolute transition-all duration-500 opacity-50 -inset-2 bg-brand-red rounded-md blur-2xl group-hover:opacity-80 group-hover:duration-200"></div>

      <button className="relative inline-flex items-center justify-center w-full px-10 py-5 text-base font-extrabold text-white transition-all duration-300 bg-brand-red border border-red-500/50 rounded-md uppercase tracking-[0.2em] overflow-hidden hover:scale-[1.02]">
        
        {/* Inner Shimmer effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] skew-x-12" />
        
        <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
          {children}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </a>
  );
};
