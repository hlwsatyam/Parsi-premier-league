import React from 'react';
import { motion } from 'motion/react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-primary via-secondary to-primary py-2 overflow-hidden relative z-50">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex gap-20 items-center"
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-white font-bold uppercase tracking-tighter text-sm">
            🚀 PPL Season 6 Registration is now OPEN! Join the ultimate cricket battle! 🏏 Bengal Tigers are the defending champions! 🏆
          </span>
        ))}
      </motion.div>
    </div>
  );
};
