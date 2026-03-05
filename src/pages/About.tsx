import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, Heart, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl font-black text-white mb-8">THE <span className="text-gradient">LEGACY</span> OF PPL</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Founded with a vision to promote local talent and bring the community together through the spirit of cricket, Panjya Premier League has grown into the most anticipated sporting event in the region.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              What started as a small village tournament has now evolved into a professional-grade league featuring elite teams, state-of-the-art facilities, and a massive following of passionate fans.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass">
              <img 
                src="https://picsum.photos/seed/cricket-match/800/800" 
                alt="PPL Match" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">06+</div>
              <div className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Trophy, title: 'Excellence', desc: 'Striving for the highest standards in every match.' },
            { icon: Target, title: 'Vision', desc: 'Empowering local talent to reach national stages.' },
            { icon: Heart, title: 'Community', desc: 'Built by the villagers, for the villagers.' },
            { icon: Shield, title: 'Integrity', desc: 'Fair play and sportsmanship are our core values.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center"
            >
              <item.icon className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Organized With Passion By</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {CONTACT_INFO.organizers.map((org, i) => (
              <div key={i} className="text-gradient text-2xl font-black uppercase tracking-tighter">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
