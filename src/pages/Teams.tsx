import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { TEAMS } from '../constants';
import { Trophy,  Star, Crown, User } from 'lucide-react';

export const Teams: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] -z-10" />
      
      <Helmet>
        <title>PPL Teams | Parsiya Premier League Squads</title>
        <meta name="description" content="View all teams competing in Parsiya Premier League Season 7. From Mairwa Super Kings to Bengal Tigers, explore the elite squads." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">The Contenders</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">ELITE <span className="text-gradient">SQUADS</span></h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Meet the powerhouses of Parsiya Premier League Season 7. These teams represent the pinnacle of regional cricket, each with a unique legacy and a hunger for the championship trophy.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {TEAMS.map((team, i) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-orange-950/90 to-red-950/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-500/50 transition-all">
              
              {/* Champion Badge */}
              {team.id === 'bengal-tigers' && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Trophy size={10} /> Champion
                </div>
              )}

              {/* Team Logo Container */}
              <div className="aspect-square overflow-hidden relative">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: team.color }}
                />
                <img
                  src={team.logo}
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Team Color Indicator */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: team.color }}
                />
              </div>

              {/* Team Info */}
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Crown size={18} style={{ color: team.color }} />
                  {team.name}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4">
                  {team.description}
                </p>

                {/* Owner Section */}
                <div className="flex items-center gap-3 pt-3 border-t border-orange-500/30">
                  {/* Owner Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-sm opacity-50" />
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <img
                        src={team.owner.photo}
                        alt={team.owner.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Owner Details */}
                  <div className="flex-1">
                    <p className="text-white text-xs sm:text-sm font-bold flex items-center gap-1">
                      <User size={12} className="text-orange-400" />
                      {team.owner.name}
                    </p>
                    <p className="text-orange-300/60 text-[10px] sm:text-xs flex items-center gap-1">
                      <Star size={10} />
                      {team.owner.role}
                    </p>
                  </div>
                </div>
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
