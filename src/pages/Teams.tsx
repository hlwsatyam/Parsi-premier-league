import React from 'react';
import { motion } from 'motion/react';
import { TEAMS } from '../constants';

export const Teams: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">OUR <span className="text-gradient">TEAMS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Meet the elite teams competing for glory in Panjya Premier League Season 6. Each team brings its own unique style and legacy to the pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAMS.map((team, i) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={team.logo} 
                  alt={team.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-black text-white">{team.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {team.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: team.color }} />
                    <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Team Color</span>
                  </div>
                  <button className="text-primary font-bold uppercase text-sm tracking-widest hover:underline">
                    View Squad
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
