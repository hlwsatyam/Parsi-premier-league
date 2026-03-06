import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { TEAMS } from '../constants';
import { Trophy, Users, Star } from 'lucide-react';

export const Teams: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] -z-10" />
      
      <Helmet>
        <title>PPL Teams | Parsi & Panjya Premier League Squads</title>
        <meta name="description" content="View all teams competing in Parsi Premier League Season 7. From Mairwa Super Kings to Bengal Tigers, explore the elite squads." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">The Contenders</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">ELITE <span className="text-gradient">SQUADS</span></h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Meet the powerhouses of Parsi Premier League Season 7. These teams represent the pinnacle of regional cricket, each with a unique legacy and a hunger for the championship trophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
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

        {/* Scouting Section */}
        <section className="py-20 bg-linear-to-r from-primary/10 to-transparent rounded-[3rem] p-12 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">TALENT <span className="text-gradient">SCOUTING</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Our scouts are constantly looking for the next big star. If you have the skills, we have the platform. Join our open trials and get a chance to be picked by one of the elite PPL teams.
              </p>
              <div className="flex gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex-1">
                  <div className="text-primary font-black text-2xl mb-1">100+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest">Players Scouted</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex-1">
                  <div className="text-white font-black text-2xl mb-1">20+</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest">State Players</div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden glass">
              <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000" 
                alt="Scouting" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
