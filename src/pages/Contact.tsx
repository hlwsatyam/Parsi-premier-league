import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Share2, Globe, Target, Award, Trophy, Heart, Shield, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] -z-10" />
      
      <Helmet>
        <title>Contact PPL | Join Parsiya Premier League</title>
        <meta name="description" content="Get in touch with the Parsiya Premier League organizers. Register your team, inquire about sponsorship, or join as a volunteer." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Get in Touch</div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">REACH <span className="text-gradient">OUT</span></h1>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Whether you're a player, a sponsor, or a fan, we'd love to hear from you. Our team is available on WhatsApp and phone for instant support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: 'Call Us', value: CONTACT_INFO.phone },
                { icon: Mail, title: 'Email Us', value: CONTACT_INFO.email },
                { icon: MapPin, title: 'Visit Us', value: CONTACT_INFO.address },
                { icon: Clock, title: 'Office Hours', value: '10:00 AM - 06:00 PM' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <item.icon className="text-primary mb-4" size={24} />
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-white font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center text-zinc-500 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 flex flex-col items-center">
                  <MapPin size={48} className="mb-2 text-primary" />
                  <span className="font-bold text-white">Parsiya Village, Siwan</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>



     
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Our Story</div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">THE <span className="text-gradient">LEGACY</span> OF Parsiya PREMIER LEAGUE</h1>
           <p className="text-zinc-400 text-xl leading-relaxed mb-8 font-light">
  Mehboob Ansari is the driving force behind the Parsiya Premier League (PPL). 
  For the past 7 years, he has been consistently organizing and managing the league 
  with dedication and passion for cricket in Parsiya, Siwan, Bihar. 
</p>

<p className="text-zinc-400 text-lg leading-relaxed mb-8">
  Under his leadership, PPL has grown into a platform that connects passionate cricketers 
  with competitive opportunities.  
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
                src="https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.20-197879327425282050.png" 
                alt="PPL Cricket Stadium" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl hidden md:block border-primary/20">
              <div className="text-5xl font-black text-primary mb-2">07</div>
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
            { icon: Heart, title: 'Community', desc: 'Built by the villagers of Parsiya, for the cricket lovers of the entire Siwan region.' },
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






        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900/50 rounded-[3rem] p-12 border border-white/5">
          <h2 className="text-4xl font-black text-white mb-12 text-center">FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'How can I register my team?', a: 'You can fill out the contact form on this page or message us directly on WhatsApp with your team details.' },
              { q: 'What is the registration fee?', a: 'The registration fee varies by season. Please contact the organizers for the current season details.' },
              { q: 'Can players from outside Siwan join?', a: 'Yes, PPL is open to talent from across the region, provided they meet the eligibility criteria.' },
              { q: 'Is there a prize for the Man of the Series?', a: 'Yes, we award a premium cricket kit and a trophy to the most valuable player of the tournament.' },
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-2xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <Globe className="text-primary" size={20} /> {item.q}
                </h4>
                <p className="text-zinc-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
