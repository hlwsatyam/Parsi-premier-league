import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, QrCode, X, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.subject === 'Team Registration') {
      setShowPayment(true);
    } else {
      const text = `*New Inquiry from PPL Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
      window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
    }
  };

  const handleFinalSubmit = () => {
    const text = `*New Team Registration from PPL Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}%0A%0A*Payment Status:* QR Code Shown. Please verify payment.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
    setShowPayment(false);
  };

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("glass p-8 rounded-2xl", className)}
      >
        <h3 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
            <input 
              type="tel" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Subject</label>
            <select 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            >
              <option value="">Select Subject</option>
              <option value="Team Registration">Team Registration</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-linear-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            {formData.subject === 'Team Registration' ? <QrCode size={18} /> : <Send size={18} />}
            {formData.subject === 'Team Registration' ? 'Proceed to Payment' : 'Send to WhatsApp'}
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {showPayment && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 z-20 glass p-8 rounded-2xl flex flex-col items-center justify-center text-center bg-zinc-950/90 backdrop-blur-md"
          >
            <button 
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
            >
              <X size={24} />
            </button>
            <h4 className="text-xl font-bold text-white mb-2">Registration Payment</h4>
            <p className="text-zinc-400 text-sm mb-6">Scan QR to pay registration fee and confirm your slot.</p>
            
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${CONTACT_INFO.upiId}&pn=Mahboob%20Ansari&cu=INR`}
                alt="Payment QR Code"
                className="w-48 h-48"
              />
            </div>
            
            <div className="text-zinc-400 text-xs mb-6">
              <p className="font-bold text-white mb-1">UPI ID: {CONTACT_INFO.upiId}</p>
              <p>Organizer: Mahboob Ansari</p>
            </div>

            <button 
              onClick={handleFinalSubmit}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <CheckCircle size={18} />
              I have paid, send details
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
