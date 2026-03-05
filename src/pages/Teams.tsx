import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { TEAMS } from '../constants';
import { Trophy, Users, Star } from 'lucide-react';

export const Teams: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>PPL Teams | Parsi & Panjya Premier League Squads</title>
        <meta name="description" content="View all teams competing in Parsi Premier League Season 6. From Mairwa Super Kings to Bengal Tigers, explore the elite squads." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">The Contenders</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">ELITE <span className="text-gradient">SQUADS</span></h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Meet the powerhouses of Parsi Premier League Season 6. These teams represent the pinnacle of regional cricket, each with a unique legacy and a hunger for the championship trophy.
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
              className="glass rounded-[2.5rem] overflow-hidden group hover:shadow-[0_0_50px_rgba(242,125,38,0.15)] transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={team.logo} 
                  alt={`${team.name} - Parsi Premier League Team`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl font-black text-white tracking-tighter">{team.name}</h3>
                </div>
              </div>
              <div className="p-10">
                <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
                  {team.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Captain</div>
                    <div className="text-white font-bold">To be Announced</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Key Player</div>
                    <div className="text-white font-bold">Star Performer</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ backgroundColor: team.color }} />
                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Official Colors</span>
                  </div>
                  <button className="bg-white/5 hover:bg-primary hover:text-white text-zinc-400 px-6 py-2 rounded-full font-bold text-xs tracking-widest transition-all uppercase">
                    Full Squad
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
