import React from 'react';
import { motion } from 'motion/react';

export const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">MOMENTS <span className="text-gradient">GALLERY</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Relive the most exciting moments from previous seasons.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden break-inside-avoid group"
            >
              <img 
                src={`https://picsum.photos/seed/ppl-${i}/800/${600 + (i % 3) * 100}`} 
                alt={`Gallery ${i}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
