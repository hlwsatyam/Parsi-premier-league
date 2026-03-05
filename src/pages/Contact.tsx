import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">CONTACT <span className="text-gradient">US</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have questions? We're here to help you join the PPL family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                  className="glass p-6 rounded-2xl"
                >
                  <item.icon className="text-primary mb-4" size={24} />
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-white font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center text-zinc-500">
                <MapPin size={48} className="mb-2" />
                <span>Interactive Map Coming Soon</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
