import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { TOURNAMENTS } from '../constants';

export const Tournaments: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">TOURNAMENT <span className="text-gradient">HISTORY</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Tracking the legacy of Panjya Premier League through the seasons.
          </p>
        </div>

        <div className="space-y-12">
          {TOURNAMENTS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-1/3">
                <div className="aspect-square bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center relative">
                  <Trophy size={100} className="text-primary" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    {t.status}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-6">
                <div className="flex items-center gap-4 text-zinc-500 text-sm font-bold uppercase tracking-widest">
                  <Calendar size={16} /> {t.year}
                </div>
                <h2 className="text-4xl font-black text-white">{t.name}</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {t.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                  <div>
                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Winner</div>
                    <div className="text-white font-bold text-xl">{t.winner || 'TBD'}</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Venue</div>
                    <div className="text-white font-bold text-xl">Panjya Ground</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
