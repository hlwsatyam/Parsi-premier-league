import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Calendar, Star, ArrowRight, Shield, Zap, Target as TargetIcon, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TEAMS } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>PPL Season 7 | Parsi & Panjya Premier League Official</title>
        <meta name="description" content="Welcome to the official home of Parsi Premier League and Panjya Premier League. Register your team for Season 7 and join the elite cricket competition." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 hero-mesh">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/80 to-zinc-950" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/5 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full mb-10"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Parsi & Panjya Premier League Season 7</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-white mb-10 leading-[0.85]"
          >
            THE <span className="text-gradient">ULTIMATE</span> <br /> CRICKET SAGA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Witness the grandest stage of cricket in Siwan. Parsi Premier League brings together the finest athletes, the most passionate fans, and an atmosphere that defines excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <Link to="/tournaments" className="bg-linear-to-r from-primary to-secondary text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)] flex items-center gap-3">
              Explore Season 7 <ArrowRight size={24} />
            </Link>
            <Link to="/contact" className="glass text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all border-white/20">
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why PPL Section */}
      <section className="py-32 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">WHY <span className="text-gradient">PPL?</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Setting the gold standard for regional cricket tournaments since 2018.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Professional Standards', desc: 'International standard pitch, professional umpiring, and real-time digital scoring for every single match.' },
              { icon: Zap, title: 'Massive Exposure', desc: 'Live streaming on YouTube and Facebook with professional commentary reaching over 50,000 viewers.' },
              { icon: TargetIcon, title: 'Talent Scouting', desc: 'A platform where local players get noticed by state-level scouts and professional clubs.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[2.5rem] text-left"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Format Section */}
      <section className="py-32 relative bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">TOURNAMENT <br /><span className="text-gradient">FORMAT</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Group Stage', desc: '8 teams divided into 2 groups. Each team plays 3 matches in a round-robin format.' },
                  { title: 'Knockouts', desc: 'Top 2 teams from each group advance to the Semi-Finals.' },
                  { title: 'Grand Finale', desc: 'The ultimate showdown between the two best teams for the PPL Trophy.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-white/10">0{i + 1}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-primary/20 relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[60px]" />
              <h3 className="text-3xl font-black text-white mb-8 text-center">PRIZE <span className="text-gradient">POOL</span></h3>
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Winner</span>
                  <span className="text-3xl font-black text-primary">₹ 51,000</span>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Runner Up</span>
                  <span className="text-3xl font-black text-white">₹ 21,000</span>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Man of Series</span>
                  <span className="text-2xl font-black text-secondary">Premium Kit</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venue & Schedule Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-black text-white mb-12">MATCH <span className="text-gradient">SCHEDULE</span></h2>
              <div className="space-y-4">
                {[
                  { date: 'April 15', match: 'Mairwa Super Kings vs Star XI', time: '10:00 AM', type: 'Inaugural' },
                  { date: 'April 16', match: 'Bengal Tigers vs Siwan Knight Riders', time: '02:00 PM', type: 'Group A' },
                  { date: 'April 17', match: 'Star XI vs Bengal Tigers', time: '10:00 AM', type: 'Group B' },
                  { date: 'April 18', match: 'Siwan Knight Riders vs Mairwa Super Kings', time: '02:00 PM', type: 'Group A' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl flex flex-wrap items-center justify-between gap-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="bg-primary/20 text-primary px-4 py-2 rounded-xl font-black text-center min-w-[80px]">
                        <div className="text-xs uppercase">APR</div>
                        <div className="text-2xl leading-none">{item.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{item.match}</div>
                        <div className="text-zinc-500 text-sm uppercase tracking-widest">{item.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-white font-black">{item.time}</div>
                        <div className="text-zinc-500 text-xs uppercase">Panjya Ground</div>
                      </div>
                      <button className="bg-white/5 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                        Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white mb-12">VENUE</h2>
              <div className="glass p-8 rounded-[2.5rem] border-secondary/20">
                <div className="aspect-square rounded-2xl overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" 
                    alt="Panjya Ground" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-secondary" size={24} /> Panjya Ground
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Our official home ground, featuring a professional turf pitch, modern seating for 5,000+ spectators, and high-intensity floodlights for night matches.
                </p>
                <button className="w-full glass py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Teams', value: '10', icon: Users },
            { label: 'Seasons', value: '07', icon: Trophy },
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
              <p className="text-zinc-400">The powerhouses of PPL Season 7</p>
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
                <div className="aspect-square rounded-3xl overflow-hidden glass mb-6 relative">
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {team.id === 'bengal-tigers' && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Trophy size={10} /> Champion
                    </div>
                  )}
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
                { title: 'Team Registration', desc: 'Register your squad for Season 7' },
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
