import React from 'react';
import { motion } from 'motion/react';
import { Star, TrendingUp, Award, Target } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">PLAYER <span className="text-gradient">STATS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            The numbers behind the legends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {[
            { title: 'Top Run Scorers', icon: TrendingUp, players: [
              { name: 'Gulam Ali', team: 'Mairwa super kings', value: '450 Runs' },
              { name: 'Anshu Yadav', team: 'Mairwa super kings', value: '370 Runs' },
              { name: 'Shailesh Yadav', team: 'Mairwa Super Kings', value: '290 Runs' },
            ]},
            { title: 'Leading Wicket Takers', icon: Target, players: [
              { name: 'Arif Khan', team: 'Bangal Tigers', value: '18 Wickets' },
              { name: 'Gulam Ali', team: 'Mairwa super kings', value: '15 Wickets' },
              { name: 'Kamal Ansari', team: 'Star XI', value: '14 Wickets' },
            ]},
            { title: 'Most Valuable Players', icon: Award, players: [
              { name: 'Kamal Ansari', team: 'Star-Xi', value: '9.5 Rating' },
              { name: 'Golu Pandey', team: 'Bengal Tigers', value: '9.2 Rating' },
              { name: 'Aashik Ansari', team: 'Siwan Knight riders', value: '8.9 Rating' },
            ]},
          ].map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.players.map((player, j) => (
                  <div key={j} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <div className="text-white font-bold">{player.name}</div>
                      <div className="text-zinc-500 text-xs uppercase tracking-widest">{player.team}</div>
                    </div>
                    <div className="text-primary font-black">{player.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Record Breakers Section */}
        <section className="py-20 bg-linear-to-r from-secondary/10 to-transparent rounded-[3rem] p-12 border border-white/5">
          <h2 className="text-4xl font-black text-white mb-12 text-center">RECORD <span className="text-gradient">BREAKERS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Highest Score', value: '124*', player: 'Gulam Ali', year: '2023' },
              { title: 'Best Bowling', value: '4/35', player: 'Firoz RAHMAN', year: '2022' },
              { title: 'Fastest 50', value: '16 Balls', player: 'Golu Pandey', year: '2024' },
              { title: 'Most Wicket ', value: '32', player: 'Firoz RAHMAN', year: 'Wicket' },
            ].map((record, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center">
                <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-2">{record.title}</div>
                <div className="text-3xl font-black text-white mb-1">{record.value}</div>
                <div className="text-primary font-bold text-sm mb-1">{record.player}</div>
                <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest">{record.year}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
