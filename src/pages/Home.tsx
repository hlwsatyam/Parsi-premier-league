import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEAMS } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/stadium/1920/1080?blur=5')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full mb-8"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Panjya Premier League Season 6</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-none"
          >
            WHERE <span className="text-gradient">LEGENDS</span> <br /> ARE BORN
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the thrill of the most prestigious cricket tournament in the region. Join us for a season of unforgettable moments and fierce competition.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/tournaments" className="bg-linear-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              View Tournaments <ArrowRight size={20} />
            </Link>
            <Link to="/teams" className="glass text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Our Teams
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Teams', value: '08', icon: Users },
            { label: 'Seasons', value: '06', icon: Trophy },
            { label: 'Matches', value: '150+', icon: Calendar },
            { label: 'Stars', value: '500+', icon: Star },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center group hover:border-primary/50 transition-colors"
            >
              <stat.icon className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Teams */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-black text-white mb-4">FEATURED <span className="text-gradient">TEAMS</span></h2>
              <p className="text-zinc-400">The powerhouses of PPL Season 6</p>
            </div>
            <Link to="/teams" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Teams <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAMS.map((team, i) => (
              <motion.div 
                key={team.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden glass mb-6">
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-zinc-500 text-sm line-clamp-2">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-8">READY TO <br /><span className="text-gradient">JOIN THE BATTLE?</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Whether you want to register your team, become a sponsor, or just have a question, our team is here to help. Fill out the form and we'll get back to you on WhatsApp instantly.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Team Registration', desc: 'Register your squad for Season 6' },
                { title: 'Sponsorship', desc: 'Partner with the biggest league' },
                { title: 'Live Support', desc: 'Get instant help via WhatsApp' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Star className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
