// ParsiyaRegistrationForm.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, QrCode, X, CheckCircle, CreditCard } from 'lucide-react';

interface ParsiyaRegistrationFormProps {
  onClose: () => void;
}

interface FormData {
  playerName: string;
  phone: string;
  role: 'batsman' | 'all-rounder' | 'bowler' | '';
  village: string;
  teamName?: string;
}

interface PaymentData {
  transactionId: string;
  amount: string;
  screenshot?: File;
}

export const ParsiyaRegistrationForm: React.FC<ParsiyaRegistrationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    playerName: '',
    phone: '',
    role: '',
    village: 'PARASTIYA PRIMARY SCHOOL',
    teamName: ''
  });
  
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState<PaymentData>({
    transactionId: '',
    amount: '499' // Default registration fee
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // UPI Details
  const UPI_ID = "mahboobansari@okhdfcbank"; // Update with actual UPI ID
  const ORGANIZER_NAME = "Mahboob Ansari";
  const REGISTRATION_FEE = "₹499";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSubmit = async () => {
    if (!paymentData.transactionId) {
      alert('Please enter Transaction ID');
      return;
    }

    setIsSubmitting(true);

    // Format message for WhatsApp
    const registrationDetails = [
      `*🔰 NEW REGISTRATION - PARSIYA PREMIER LEAGUE SEASON 7 🔰*`,
      ``,
      `*📋 PLAYER DETAILS:*`,
      `------------------------`,
      `*Player Name:* ${formData.playerName}`,
      `*Phone Number:* ${formData.phone}`,
      `*Role:* ${formData.role?.toUpperCase() || 'Not Specified'}`,
      `*Village:* ${formData.village}`,
      formData.teamName ? `*Team Name:* ${formData.teamName}` : '',
      ``,
      `*💰 PAYMENT DETAILS:*`,
      `------------------------`,
      `*Amount:* ${REGISTRATION_FEE}`,
      `*Transaction ID:* ${paymentData.transactionId}`,
      `*UPI ID:* ${UPI_ID}`,
      ``,
      `*⏱️ Timestamp:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
      ``,
      `*✅ Status:* Pending Admin Verification`,
      ``,
      `_Please verify the payment and confirm registration._`
    ].filter(Boolean).join('%0A');

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/917715836408?text=${registrationDetails}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setShowPayment(false);
    onClose(); // Close modal after submission
  };

  const handleRoleSelect = (role: FormData['role']) => {
    setFormData({ ...formData, role });
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur rounded-2xl p-6 border border-orange-500/30"
      >
        {!showPayment ? (
          // Registration Form
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              PLAYER REGISTRATION
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-orange-300 mb-1">
                Player Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full bg-black/30 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter your full name"
                value={formData.playerName}
                onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                className="w-full bg-black/30 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter 10 digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-300 mb-2">
                Select Role *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['batsman', 'all-rounder', 'bowler'] as const).map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleSelect(role)}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                      formData.role === role
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'bg-black/30 border-orange-500/30 text-orange-300 hover:bg-orange-500/20'
                    }`}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-300 mb-1">
                Village/Town *
              </label>
              <input
                type="text"
                required
                className="w-full bg-black/30 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter your village/town"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-300 mb-1">
                Team Name (Optional)
              </label>
              <input
                type="text"
                className="w-full bg-black/30 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter your team name if any"
                value={formData.teamName}
                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
              />
            </div>

            <div className="bg-orange-500/20 p-4 rounded-lg mt-4">
              <p className="text-orange-300 text-sm font-bold mb-1">Registration Fee: {REGISTRATION_FEE}</p>
              <p className="text-white/60 text-xs">Complete registration by making payment</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-6 text-lg"
            >
              <CreditCard size={20} />
              PROCEED TO PAYMENT ({REGISTRATION_FEE})
            </button>
          </form>
        ) : (
          // Payment Section
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <button
              onClick={() => setShowPayment(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2 text-center">COMPLETE PAYMENT</h3>
            <p className="text-orange-300 text-center text-sm mb-4">Scan QR or use UPI ID to pay</p>

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(ORGANIZER_NAME)}&am=499&cu=INR`}
                  alt="Payment QR Code"
                  className="w-48 h-48"
                />
              </div>
            </div>

            {/* UPI Details */}
            <div className="bg-black/40 p-4 rounded-lg border border-orange-500/30">
              <p className="text-white/80 text-sm">
                <span className="text-orange-300 font-bold">UPI ID:</span>{' '}
                <span className="font-mono">{UPI_ID}</span>
              </p>
              <p className="text-white/80 text-sm">
                <span className="text-orange-300 font-bold">Amount:</span>{' '}
                <span className="font-bold">{REGISTRATION_FEE}</span>
              </p>
              <p className="text-white/60 text-xs mt-2">
                *Pay via any UPI app (Google Pay, PhonePe, Paytm)
              </p>
            </div>

            {/* Transaction ID Input */}
            <div>
              <label className="block text-sm font-medium text-orange-300 mb-1">
                Transaction ID / UTR Number *
              </label>
              <input
                type="text"
                required
                className="w-full bg-black/30 border border-orange-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter transaction ID from your payment app"
                value={paymentData.transactionId}
                onChange={(e) => setPaymentData({ ...paymentData, transactionId: e.target.value })}
              />
            </div>

            {/* Payment Instructions */}
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <p className="text-green-400 text-sm font-bold mb-1">📱 After Payment:</p>
              <ul className="text-white/70 text-xs space-y-1 list-disc pl-4">
                <li>Copy the Transaction ID from your payment app</li>
                <li>Paste it in the field above</li>
                <li>Click "Submit & Verify" to send details to admin</li>
                <li>Admin will verify and confirm your registration</li>
              </ul>
            </div>

            <button
              onClick={handlePaymentSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <CheckCircle size={20} />
              {isSubmitting ? 'PROCESSING...' : 'SUBMIT & VERIFY PAYMENT'}
            </button>

            <p className="text-center text-white/40 text-xs mt-2">
              Admin will verify and confirm your registration via WhatsApp
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};