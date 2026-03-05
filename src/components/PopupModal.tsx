import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShown = sessionStorage.getItem('ppl_popup_shown');
      if (!hasShown) {
        setIsOpen(true);
        sessionStorage.setItem('ppl_popup_shown', 'true');
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(242,125,38,0.3)]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="p-2">
              <div className="bg-linear-to-br from-primary/20 to-secondary/20 p-8 rounded-[2rem]">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-black text-white mb-2">JOIN THE <span className="text-gradient">LEAGUE</span></h2>
                  <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold">Season 6 Registration is Live!</p>
                </div>
                <ContactForm className="bg-transparent border-none p-0 shadow-none" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
