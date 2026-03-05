import React from 'react';
import { motion } from 'motion/react';
import { Star, TrendingUp, Award, Target } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">PLAYER <span className="text-gradient">STATS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            The numbers behind the legends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            { title: 'Top Run Scorers', icon: TrendingUp, players: [
              { name: 'Rahul Kumar', team: 'Bengal Tigers', value: '450 Runs' },
              { name: 'Amit Singh', team: 'Star XI', value: '412 Runs' },
              { name: 'Sanjay Yadav', team: 'Mairwa Super Kings', value: '385 Runs' },
            ]},
            { title: 'Leading Wicket Takers', icon: Target, players: [
              { name: 'Vikash Anand', team: 'Siwan Knight Riders', value: '18 Wickets' },
              { name: 'Deepak Raj', team: 'Bengal Tigers', value: '15 Wickets' },
              { name: 'Manoj Kumar', team: 'Star XI', value: '14 Wickets' },
            ]},
            { title: 'Most Valuable Players', icon: Award, players: [
              { name: 'Rahul Kumar', team: 'Bengal Tigers', value: '9.5 Rating' },
              { name: 'Vikash Anand', team: 'Siwan Knight Riders', value: '9.2 Rating' },
              { name: 'Amit Singh', team: 'Star XI', value: '8.9 Rating' },
            ]},
          ].map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl"
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
      </div>
    </div>
  );
};
