import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Target } from 'lucide-react';

export const Sessions: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">PRACTICE <span className="text-gradient">SESSIONS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Training schedules and open sessions for players and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            { title: 'Morning Drills', time: '06:00 AM - 09:00 AM', focus: 'Fitness & Fielding', team: 'Open Session' },
            { title: 'Net Practice', time: '10:00 AM - 01:00 PM', focus: 'Batting & Bowling', team: 'Bengal Tigers' },
            { title: 'Strategy Meeting', time: '03:00 PM - 05:00 PM', focus: 'Match Analysis', team: 'Star XI' },
            { title: 'Evening Match', time: '06:00 PM - 09:00 PM', focus: 'Friendly T20', team: 'Open Session' },
          ].map((session, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl flex gap-8 items-center"
            >
              <div className="bg-primary/10 p-6 rounded-2xl">
                <Clock className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{session.title}</h3>
                  <span className="bg-white/5 text-zinc-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {session.team}
                  </span>
                </div>
                <p className="text-primary font-bold mb-4">{session.time}</p>
                <div className="flex gap-6 text-zinc-500 text-sm">
                  <div className="flex items-center gap-2"><Target size={14} /> {session.focus}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} /> Panjya Ground</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
