import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, Heart, Shield, Award, Users, MapPin, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Helmet>
        <title>About PPL | History of Parsi & Panjya Premier League</title>
        <meta name="description" content="Discover the history, mission, and values of Parsi Premier League. Learn how we became the leading cricket tournament in Bihar." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Story</div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">THE <span className="text-gradient">LEGACY</span> OF PARSI PREMIER LEAGUE</h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-8 font-light">
              Founded in 2018 with a vision to revolutionize regional cricket, the Parsi Premier League (PPL) has emerged as a beacon of sporting excellence in Siwan, Bihar. What began as a community initiative has transformed into a high-stakes professional tournament.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our mission is to bridge the gap between street cricket and professional leagues. We provide a platform where raw talent meets professional infrastructure, giving every player a chance to showcase their skills under the spotlight.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-black text-white mb-1">500+</div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Active Players</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-black text-white mb-1">50k+</div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Digital Reach</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden glass relative group">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1000" 
                alt="PPL Cricket Stadium" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl hidden md:block border-primary/20">
              <div className="text-5xl font-black text-primary mb-2">06</div>
              <div className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Glorious Seasons</div>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-primary text-primary" />)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] border-white/5"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
              <Target size={28} className="text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              To create a sustainable ecosystem for regional cricket where talent is nurtured, discipline is instilled, and the spirit of sportsmanship is celebrated above all else. We aim to produce players who can represent Bihar at the national level.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-12 rounded-[3rem] border-white/5"
          >
            <div className="bg-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
              <Award className="text-secondary" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              To become the most recognized and professionally managed regional cricket league in India, setting a benchmark for community-driven sports initiatives that combine entertainment with professional development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Trophy, title: 'Excellence', desc: 'Striving for the highest standards in every match, from umpiring to ground maintenance.' },
            { icon: Target, title: 'Vision', desc: 'Empowering local talent to reach national stages through professional coaching and exposure.' },
            { icon: Heart, title: 'Community', desc: 'Built by the villagers of Panjya, for the cricket lovers of the entire Siwan region.' },
            { icon: Shield, title: 'Integrity', desc: 'Fair play and sportsmanship are our core values, ensuring a clean and competitive environment.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center hover:bg-white/10 transition-colors"
            >
              <item.icon className="mx-auto text-primary mb-6" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass p-16 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
          <h2 className="text-4xl font-black text-white mb-10">THE DRIVING FORCE BEHIND PPL</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {CONTACT_INFO.organizers.map((org, i) => (
              <div key={i} className="group">
                <div className="text-gradient text-3xl font-black uppercase tracking-tighter group-hover:scale-110 transition-transform">
                  {org}
                </div>
                <div className="text-zinc-600 text-xs font-bold tracking-widest mt-2">LEAD ORGANIZER</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
