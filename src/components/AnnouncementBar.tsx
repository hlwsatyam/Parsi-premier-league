import React from 'react';
import { motion } from 'motion/react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-primary via-secondary to-primary py-3 overflow-hidden relative z-50 shadow-[0_0_20px_rgba(242,125,38,0.3)]">
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex gap-24 items-center"
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-white font-black uppercase tracking-widest text-xs flex items-center gap-4">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            🚀 Parsi & Panjya Premier League Season 6 Registration is now OPEN! 
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            🏏 Join the ultimate cricket battle in Siwan! 
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            🏆 Bengal Tigers are the defending champions!
          </span>
        ))}
      </motion.div>
    </div>
  );
};
