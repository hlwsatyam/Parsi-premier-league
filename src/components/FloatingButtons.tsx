import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl animate-glow flex items-center justify-center"
      >
        <Phone size={24} />
      </motion.a>
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl animate-glow flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
};
