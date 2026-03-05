import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Share2, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] -z-10" />
      
      <Helmet>
        <title>Contact PPL | Join Parsi & Panjya Premier League</title>
        <meta name="description" content="Get in touch with the Parsi Premier League organizers. Register your team, inquire about sponsorship, or join as a volunteer." />
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
                  <span className="font-bold text-white">Panjya Village, Siwan</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
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
