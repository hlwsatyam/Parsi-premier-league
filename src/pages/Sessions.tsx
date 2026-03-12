import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Target, Users } from 'lucide-react';

export const Sessions: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />
      


<section className="w-full bg-black py-16 px-6">
  
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      SESSIONS 7 Performers
    </h2>
    <p className="text-zinc-400 mt-4 text-lg">
      Parsiya Premier League ke outstanding players
    </p>
  </div>

  {/* Performers List */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {/* Card */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">MOST WICKET</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">MOST SCORE</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">MOST SIXES</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">MOST FORTH</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">MOST CATCH</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">HIGHTEST SCORE</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white mb-2">Emerging Player</h3>
      <p className="text-zinc-400">Pending</p>
    </div>

  </div>

</section>








      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Training Grounds</div>
          <h1 className="text-6xl font-black text-white mb-6">PRACTICE <span className="text-gradient">SESSIONS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Training schedules and open sessions for players and teams. Get ready for the big stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
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
              className="glass p-8 rounded-3xl flex gap-8 items-center hover:bg-white/10 transition-colors"
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
                  <div className="flex items-center gap-2"><MapPin size={14} /> Parsiya Ground</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coaching Staff Section */}
        <section className="py-20 bg-zinc-900/50 rounded-[3rem] p-12 border border-white/5">
          <h2 className="text-4xl font-black text-white mb-12 text-center">COACHING <span className="text-gradient">STAFF</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Coach Sharma', role: 'Head Coach', exp: '15+ Years' },
              { name: 'Coach Verma', role: 'Bowling Coach', exp: '10+ Years' },
              { name: 'Coach Gupta', role: 'Fitness Trainer', exp: '8+ Years' },
            ].map((coach, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center group">
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-primary" size={40} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{coach.name}</h4>
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-4">{coach.role}</div>
                <div className="text-zinc-500 text-xs">Experience: {coach.exp}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
