// // PPLRegistrationPopup.tsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, CreditCard, CheckCircle, ArrowLeft, MapPin, Home, Users } from 'lucide-react';

// export const PopupModal: React.FC = ({isOpen, setIsOpen   }) => {

//   const [step, setStep] = useState<'form' | 'payment'>('form');
//   const [formData, setFormData] = useState({
//     playerName: '',
//     phone: '',
//     role: '',
//     village: '',
//     isOutsideVillage: false,
//     teamName: ''
//   });
//   const [transactionId, setTransactionId] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // UPI Details from image
//   const UPI_ID = "7715836408@ybl";
//   const ORGANIZER_NAME = "Mahboob Ansari";
//   const PHONE_NUMBER = "7715836408";
  
//   // Fee structure based on village
//   const getRegistrationFee = () => {
//     return formData.isOutsideVillage ? "₹250" : "₹100";
//   };

  

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStep('payment');
//   };

//   const handleRoleSelect = (role: string) => {
//     setFormData({ ...formData, role });
//   };

//   const handlePaymentSubmit = () => {
//     if (!transactionId) {
//       alert('Please enter Transaction ID');
//       return;
//     }

//     setIsSubmitting(true);

//     const villageStatus = formData.isOutsideVillage ? 'Outside Village' : 'Inside Village';
//     const fee = getRegistrationFee();

//     // Format message for WhatsApp
//     const message = [
//       `*🔰 PARSIYA PREMIER LEAGUE - SEASON 7 🔰*`,
//       ``,
//       `*📋 PLAYER DETAILS*`,
//       `════════════════════`,
//       `*👤 Name:* ${formData.playerName}`,
//       `*📱 Phone:* ${formData.phone}`,
//       `*🏏 Role:* ${formData.role ? formData.role.toUpperCase() : 'Not Selected'}`,
//       `*📍 Village:* ${formData.village}`,
//       `*🌍 Status:* ${villageStatus}`,
//       formData.teamName ? `*👥 Team:* ${formData.teamName}` : '',
//       ``,
//       `*💰 PAYMENT DETAILS*`,
//       `════════════════════`,
//       `*💵 Amount:* ${fee}`,
//       `*🔢 Transaction ID:* ${transactionId}`,
//       `*🏦 UPI ID:* ${UPI_ID}`,
//       `*👨‍💼 Organizer:* ${ORGANIZER_NAME}`,
//       ``,
//       `*⏱️ Time:* ${new Date().toLocaleString('en-IN', { 
//         timeZone: 'Asia/Kolkata',
//         hour: '2-digit',
//         minute: '2-digit',
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//       })}`,
//       ``,
//       `*✅ Status:* PENDING VERIFICATION`,
//       `_Please verify and confirm registration._`
//     ].filter(Boolean).join('%0A');

//     window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsOpen(false);
//       setStep('form');
//       resetForm();
//     }, 1500);
//   };

//   const resetForm = () => {
//     setFormData({
//       playerName: '',
//       phone: '',
//       role: '',
//       village: '',
//       isOutsideVillage: false,
//       teamName: ''
//     });
//     setTransactionId('');
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setIsOpen(false)}
//         className="fixed inset-0 bg-black/80 backdrop-blur-sm"
//       />

//       {/* Modal */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         className="relative w-full max-w-[98%] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-orange-950 via-red-950 to-orange-950 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_0_100px_rgba(242,125,38,0.5)] border-2 border-orange-500/40 my-2 sm:my-4"
//       >
//         {/* Sticky Header - Scroll ke saath bhi dikhega */}
//         <div className="sticky top-0 z-30 bg-gradient-to-r from-orange-600 to-red-600 p-3 sm:p-4 md:p-6 text-center rounded-t-2xl sm:rounded-t-3xl shadow-lg">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white/80 hover:text-white z-40 bg-black/30 hover:bg-black/50 rounded-full p-1.5 sm:p-2 transition-all"
//           >
//             <X size={16} sm:size={20} md:size={24} />
//           </button>

//           {/* Logo */}
         
          
          
//           <div className="  bg-yellow-400 text-red-900 px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-xl">
//                PARSIYA PREMIER LEAGUE -   SEASON 7
//           </div>
//         </div>

//         {/* Content - Scrollable Area */}
//         <div className="p-3 sm:p-4 md:p-5 lg:p-6 overflow-y-auto">
//           {/* Player Card Preview */}
//           <div className="mb-4 sm:mb-5">
//             <div className="bg-white/10 backdrop-blur rounded-xl p-2 sm:p-3 md:p-4 border border-orange-500/30">
//               <h3 className="text-orange-300 font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm flex items-center gap-1">
//                 <Users size={14} className="text-orange-400" />
//                 PLAYER REGISTRATION CARD
//               </h3>
//               <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-2 sm:p-3 rounded-lg space-y-1">
//                 <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
//                   <span className="text-orange-300">PLAYER NAME:</span>{' '}
//                   <span className="text-white font-bold">{formData.playerName || '_________________'}</span>
//                 </p>
//                 <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
//                   <span className="text-orange-300">ROLE:</span>{' '}
//                   <span className="text-white">
//                     {formData.role ? formData.role.toUpperCase() : 'BATSMAN [ ] ALL-ROUNDER [ ] BOWLER [ ]'}
//                   </span>
//                 </p>
//                 <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
//                   <span className="text-orange-300">VILLAGE:</span>{' '}
//                   <span className="text-white">{formData.village || '_________________'}</span>
//                   {formData.isOutsideVillage && (
//                     <span className="ml-2 bg-orange-500/30 text-orange-300 text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full">
//                       Outside
//                     </span>
//                   )}
//                 </p>
//                 <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
//                   <span className="text-orange-300">MOBILE NO.:</span>{' '}
//                   <span className="text-white">{formData.phone || '_________________'}</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Back Button (Payment Step) */}
//           {step === 'payment' && (
//             <button
//               onClick={() => setStep('form')}
//               className="flex items-center gap-1 text-orange-300 hover:text-orange-400 mb-3 text-xs sm:text-sm transition-colors"
//             >
//               <ArrowLeft size={14} sm:size={16} />
//               Back to Registration Form
//             </button>
//           )}

//           <AnimatePresence mode="wait">
//             {step === 'form' ? (
//               /* Registration Form */
//               <motion.form
//                 key="form"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 onSubmit={handleFormSubmit}
//                 className="space-y-3 sm:space-y-4"
//               >
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
//                   PLAYER REGISTRATION
//                 </h2>

//                 {/* Player Name */}
//                 <div>
//                   <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
//                     Player Full Name <span className="text-red-400">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
//                     placeholder="Enter your full name"
//                     value={formData.playerName}
//                     onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
//                   />
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                   <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
//                     Phone Number <span className="text-red-400">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     pattern="[0-9]{10}"
//                     maxLength={10}
//                     className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
//                     placeholder="10 digit mobile number"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
//                   />
//                 </div>

//                 {/* Role Selection */}
//                 <div>
//                   <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-2">
//                     Select Role <span className="text-red-400">*</span>
//                   </label>
//                   <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
//                     {[
//                       { value: 'batsman', label: 'BATSMAN' },
//                       { value: 'all-rounder', label: 'ALL-ROUNDER' },
//                       { value: 'bowler', label: 'BOWLER' }
//                     ].map(({ value, label }) => (
//                       <button
//                         key={value}
//                         type="button"
//                         onClick={() => handleRoleSelect(value)}
//                         className={`px-2 py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-medium transition-all ${
//                           formData.role === value
//                             ? 'bg-orange-500 border-orange-500 text-white shadow-lg scale-105'
//                             : 'bg-black/40 border-orange-500/30 text-orange-300 hover:bg-orange-500/20'
//                         }`}
//                       >
//                         {label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Village with Outside Toggle */}
//                 <div className="space-y-2">
//                   <div>
//                     <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
//                       Village/Town <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
//                       placeholder="Enter your village/town"
//                       value={formData.village}
//                       onChange={(e) => setFormData({ ...formData, village: e.target.value })}
//                     />
//                   </div>
                  
//                   {/* Outside Village Toggle */}
//                   <div className="flex items-center gap-2 p-2 sm:p-3 bg-black/40 rounded-lg border border-orange-500/30">
//                     <button
//                       type="button"
//                       onClick={() => setFormData({ ...formData, isOutsideVillage: !formData.isOutsideVillage })}
//                       className={`flex items-center gap-2 flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all ${
//                         !formData.isOutsideVillage
//                           ? 'bg-orange-500 text-white'
//                           : 'bg-black/40 text-orange-300 hover:bg-orange-500/20'
//                       }`}
//                     >
//                       <Home size={14} sm:size={16} />
//                       <span className="text-[10px] sm:text-xs">Inside Village</span>
//                     </button>
                    
//                     <button
//                       type="button"
//                       onClick={() => setFormData({ ...formData, isOutsideVillage: !formData.isOutsideVillage })}
//                       className={`flex items-center gap-2 flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all ${
//                         formData.isOutsideVillage
//                           ? 'bg-orange-500 text-white'
//                           : 'bg-black/40 text-orange-300 hover:bg-orange-500/20'
//                       }`}
//                     >
//                       <MapPin size={14} sm:size={16} />
//                       <span className="text-[10px] sm:text-xs">Outside Village</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Team Name (Optional) */}
                

//                 {/* Fee Info - Dynamic based on village selection */}
//                 <div className={`p-3 sm:p-4 rounded-lg mt-2 transition-all ${
//                   formData.isOutsideVillage 
//                     ? 'bg-purple-500/20 border border-purple-500/30' 
//                     : 'bg-orange-500/20 border border-orange-500/30'
//                 }`}>
//                   <div className="flex justify-between items-center">
//                     <p className="text-orange-300 text-xs sm:text-sm font-bold">
//                       Registration Fee:
//                     </p>
//                     <p className={`text-base sm:text-lg font-black ${
//                       formData.isOutsideVillage ? 'text-purple-400' : 'text-orange-400'
//                     }`}>
//                       {getRegistrationFee()}
//                     </p>
//                   </div>
//                   <p className="text-white/60 text-[10px] sm:text-xs mt-1">
//                     {formData.isOutsideVillage 
//                       ? '💰 Outside village registration fee applied' 
//                       : '🏠 Inside village special rate applied'}
//                   </p>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all mt-4 text-xs sm:text-sm md:text-base shadow-lg"
//                 >
//                   <CreditCard size={16} sm:size={18} md:size={20} />
//                   PROCEED TO PAYMENT ({getRegistrationFee()})
//                 </button>
//               </motion.form>
//             ) : (
//               /* Payment Section */
//               <motion.div
//                 key="payment"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 className="space-y-3 sm:space-y-4"
//               >
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 text-center">
//                   COMPLETE PAYMENT
//                 </h2>
                
//                 {/* Amount Display */}
//                 <div className={`text-center p-2 sm:p-3 rounded-lg ${
//                   formData.isOutsideVillage 
//                     ? 'bg-purple-500/20 border border-purple-500/30' 
//                     : 'bg-orange-500/20 border border-orange-500/30'
//                 }`}>
//                   <p className="text-white/70 text-xs sm:text-sm">Amount to Pay</p>
//                   <p className={`text-2xl sm:text-3xl md:text-4xl font-black ${
//                     formData.isOutsideVillage ? 'text-purple-400' : 'text-orange-400'
//                   }`}>
//                     {getRegistrationFee()}
//                   </p>
//                   <p className="text-white/50 text-[10px] sm:text-xs mt-1">
//                     {formData.isOutsideVillage ? 'Outside Village' : 'Inside Village'} Rate
//                   </p>
//                 </div>

//                 <p className="text-orange-300 text-center text-[10px] sm:text-xs mb-2">
//                   Scan QR or use UPI ID to pay
//                 </p>

//                 {/* QR Code */}
//                 <div className="flex justify-center">
//                   <div className="bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg">
//                     <img
//                       src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(ORGANIZER_NAME)}&am=${
//                         formData.isOutsideVillage ? '250' : '100'
//                       }&cu=INR`}
//                       alt="Payment QR"
//                       className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
//                     />
//                   </div>
//                 </div>

//                 {/* UPI Details */}
//                 <div className="bg-black/40 p-2 sm:p-3 md:p-4 rounded-lg border border-orange-500/30">
//                   <p className="text-white text-[10px] sm:text-xs md:text-sm break-all">
//                     <span className="text-orange-300 font-bold">UPI ID:</span>{' '}
//                     <span className="font-mono text-white/90">{UPI_ID}</span>
//                   </p>
//                   <p className="text-white text-[10px] sm:text-xs md:text-sm mt-1">
//                     <span className="text-orange-300 font-bold">Amount:</span>{' '}
//                     <span className={`font-bold ${
//                       formData.isOutsideVillage ? 'text-purple-400' : 'text-orange-400'
//                     }`}>
//                       {getRegistrationFee()}
//                     </span>
//                   </p>
//                   <p className="text-white/50 text-[8px] sm:text-[10px] mt-2">
//                     *Pay via any UPI app (GPay, PhonePe, Paytm)
//                   </p>
//                 </div>

//                 {/* Transaction ID */}
//                 <div>
//                   <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
//                     Transaction ID / UTR Number <span className="text-red-400">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
//                     placeholder="Enter transaction ID from payment app"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                   />
//                 </div>

//                 {/* Payment Summary */}
//                 <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg border border-blue-500/30">
//                   <p className="text-blue-400 text-[10px] sm:text-xs font-bold mb-1">📋 Payment Summary:</p>
//                   <div className="space-y-1 text-white/70 text-[8px] sm:text-[10px]">
//                     <p>• Player: {formData.playerName}</p>
//                     <p>• Village: {formData.village} ({formData.isOutsideVillage ? 'Outside' : 'Inside'})</p>
//                     <p>• Amount: {getRegistrationFee()}</p>
//                   </div>
//                 </div>

//                 {/* Instructions */}
//                 <div className="bg-green-500/10 p-2 sm:p-3 rounded-lg border border-green-500/30">
//                   <p className="text-green-400 text-[10px] sm:text-xs font-bold mb-1">📱 After Payment:</p>
//                   <ul className="text-white/70 text-[8px] sm:text-[10px] space-y-1 list-disc pl-4">
//                     <li>Copy Transaction ID from payment app</li>
//                     <li>Paste it above and click Verify</li>
//                     <li>Admin will confirm on WhatsApp within 24 hours</li>
//                   </ul>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handlePaymentSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-50 text-xs sm:text-sm md:text-base shadow-lg"
//                 >
//                   <CheckCircle size={16} sm:size={18} md:size={20} />
//                   {isSubmitting ? 'SENDING...' : 'SUBMIT & VERIFY PAYMENT'}
//                 </button>

//                 <p className="text-center text-white/30 text-[8px] sm:text-[10px] mt-2">
//                   Admin will verify and confirm via WhatsApp
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PopupModal;



// PPLRegistrationPopup.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, CheckCircle, ArrowLeft, MapPin, Home, Users, Upload, Camera, Loader } from 'lucide-react';

export const PopupModal: React.FC<{ isOpen: boolean; setIsOpen: (open: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [formData, setFormData] = useState({
    playerName: '',
    phone: '',
    role: '',
    village: '',
    isOutsideVillage: false,
    teamName: ''
  });
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // UPI Details
  const UPI_ID = "7715836408@ybl";
  const ORGANIZER_NAME = "Mahboob Ansari";
  const PHONE_NUMBER = "7715836408";
  
  // Get auth token from localStorage/session (update as per your auth logic)
  const getAuthToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  };

  // Fee structure based on village
  const getRegistrationFee = () => {
    return formData.isOutsideVillage ? "₹250" : "₹100";
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleRoleSelect = (role: string) => {
    setFormData({ ...formData, role });
  };

  // Profile Photo Upload Handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File too large! Maximum size 5MB');
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removePhoto = () => {
    setProfilePhoto(null);
    setPhotoPreview(null);
    setUploadedPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Upload photo to server
  const uploadPhotoToServer = async (): Promise<string> => {
    if (!profilePhoto) {
      throw new Error('No photo to upload');
    }

    setIsUploading(true);
    
    const formData = new FormData();
    formData.append('profileImage', profilePhoto);

    try {
      const response = await fetch('https://theekthak.techmintlab.com/api/upload/profile-imagex', {
        method: 'POST',
        
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Photo upload failed');
      }

      const data = await response.json();
      return data.profileImage || data.imageUrl || data.data?.url || '';
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handlePaymentSubmit = async () => {
    if (!transactionId) {
      alert('Please enter Transaction ID');
      return;
    }

    if (!profilePhoto) {
      alert('Please upload your profile photo');
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Upload photo to server
      let photoUrl = '';
      try {
        photoUrl = await uploadPhotoToServer();
        setUploadedPhotoUrl(photoUrl);
      } catch (uploadError) {
        alert('Photo upload failed. Please try again.');
        setIsSubmitting(false);
        return;
      }

      const villageStatus = formData.isOutsideVillage ? 'Outside Village' : 'Inside Village';
      const fee = getRegistrationFee();

      // Step 2: Create message with photo URL
      const message = [
        `*🔰 PARSIYA PREMIER LEAGUE - SEASON 7 🔰*`,
        ``,
        `*📸 PLAYER PROFILE PHOTO*`,
        `══════════════════════`,
        `🔗 ${photoUrl || 'Photo upload pending'}`,
        ``,
        `*📋 PLAYER DETAILS*`,
        `════════════════════`,
        `*👤 Name:* ${formData.playerName}`,
        `*📱 Phone:* ${formData.phone}`,
        `*🏏 Role:* ${formData.role ? formData.role.toUpperCase() : 'Not Selected'}`,
        `*📍 Village:* ${formData.village}`,
        `*🌍 Status:* ${villageStatus}`,
        formData.teamName ? `*👥 Team:* ${formData.teamName}` : '',
        ``,
        `*💰 PAYMENT DETAILS*`,
        `════════════════════`,
        `*💵 Amount:* ${fee}`,
        `*🔢 Transaction ID:* ${transactionId}`,
        `*🏦 UPI ID:* ${UPI_ID}`,
        `*👨‍💼 Organizer:* ${ORGANIZER_NAME}`,
        ``,
        `*⏱️ Time:* ${new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })}`,
        ``,
        `*✅ Status:* PENDING VERIFICATION`,
        `_Admin will verify and confirm within 24 hours_`
      ].filter(Boolean).join('%0A');

      // Step 3: Open WhatsApp with message
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
      
      // Show success message
      alert('✅ Registration submitted successfully!\n\nPhoto URL has been sent via WhatsApp. Admin will verify soon.');
      
      // Close modal and reset form
      setTimeout(() => {
        setIsSubmitting(false);
        setIsOpen(false);
        setStep('form');
        resetForm();
      }, 1500);
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      playerName: '',
      phone: '',
      role: '',
      village: '',
      isOutsideVillage: false,
      teamName: ''
    });
    setTransactionId('');
    setProfilePhoto(null);
    setPhotoPreview(null);
    setUploadedPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-[98%] sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-orange-950 via-red-950 to-orange-950 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-[0_0_100px_rgba(242,125,38,0.5)] border-2 border-orange-500/40 my-2 sm:my-4"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-gradient-to-r from-orange-600 to-red-600 p-3 sm:p-4 md:p-6 text-center rounded-t-2xl sm:rounded-t-3xl shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white/80 hover:text-white z-40 bg-black/30 hover:bg-black/50 rounded-full p-1.5 sm:p-2 transition-all"
          >
            <X size={16} />
          </button>
          
          <div className="bg-yellow-400 text-red-900 px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-xl">
            PARSIYA PREMIER LEAGUE - SEASON 7
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 overflow-y-auto">
          {/* Player Card Preview with Photo */}
          <div className="mb-4 sm:mb-5">
            <div className="bg-white/10 backdrop-blur rounded-xl p-2 sm:p-3 md:p-4 border border-orange-500/30">
              <h3 className="text-orange-300 font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm flex items-center gap-1">
                <Users size={14} className="text-orange-400" />
                PLAYER REGISTRATION CARD
              </h3>
              
              {/* Player Card with Photo */}
              <div className="flex gap-3 items-start">
                {/* Photo Preview in Card */}
                <div className="flex-shrink-0">
                  {photoPreview ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-orange-500 overflow-hidden bg-black/40">
                      <img 
                        src={photoPreview} 
                        alt="Player" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-dashed border-orange-500/50 flex items-center justify-center bg-black/40">
                      <Camera size={24} className="text-orange-500/50" />
                    </div>
                  )}
                </div>
                
                {/* Player Details */}
                <div className="flex-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-2 sm:p-3 rounded-lg space-y-1">
                  <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    <span className="text-orange-300">PLAYER NAME:</span>{' '}
                    <span className="text-white font-bold">{formData.playerName || '_________________'}</span>
                  </p>
                  <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    <span className="text-orange-300">ROLE:</span>{' '}
                    <span className="text-white">
                      {formData.role ? formData.role.toUpperCase() : 'BATSMAN [ ] ALL-ROUNDER [ ] BOWLER [ ]'}
                    </span>
                  </p>
                  <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    <span className="text-orange-300">VILLAGE:</span>{' '}
                    <span className="text-white">{formData.village || '_________________'}</span>
                    {formData.isOutsideVillage && (
                      <span className="ml-2 bg-orange-500/30 text-orange-300 text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full">
                        Outside
                      </span>
                    )}
                  </p>
                  <p className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    <span className="text-orange-300">MOBILE NO.:</span>{' '}
                    <span className="text-white">{formData.phone || '_________________'}</span>
                  </p>
                </div>
              </div>
              
              {/* Show uploaded URL if available */}
              {uploadedPhotoUrl && (
                <div className="mt-2 p-1 bg-green-500/20 rounded text-[8px] sm:text-[10px] text-green-300 truncate">
                  ✅ Photo URL: {uploadedPhotoUrl}
                </div>
              )}
            </div>
          </div>

          {/* Back Button */}
          {step === 'payment' && (
            <button
              onClick={() => setStep('form')}
              className="flex items-center gap-1 text-orange-300 hover:text-orange-400 mb-3 text-xs sm:text-sm transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Registration Form
            </button>
          )}

          <AnimatePresence mode="wait">
            {step === 'form' ? (
              /* Registration Form */
              <motion.form
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleFormSubmit}
                className="space-y-3 sm:space-y-4"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 text-center">
                  PLAYER REGISTRATION
                </h2>

                {/* Profile Photo Upload - IN FORM STEP */}
                <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 p-3 sm:p-4 rounded-lg border border-orange-500/40">
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-2 flex items-center gap-1">
                    <Camera size={14} />
                    Player Profile Photo <span className="text-red-400">*</span>
                  </label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  {photoPreview ? (
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-orange-500 overflow-hidden mb-2">
                        <img 
                          src={photoPreview} 
                          alt="Profile preview" 
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition"
                        >
                          <X size={12} />
                        </button>
                      </div>
                      <p className="text-white/70 text-[10px]">✅ Photo selected</p>
                    </div>
                  ) : (
                    <div
                      onClick={triggerFileInput}
                      className="border-2 border-dashed border-orange-500/40 rounded-lg p-4 text-center cursor-pointer hover:border-orange-500 transition-all"
                    >
                      <Camera className="mx-auto text-orange-400 mb-2" size={32} />
                      <p className="text-white/70 text-[10px] sm:text-xs">
                        Click to upload profile photo
                      </p>
                      <p className="text-white/50 text-[8px] sm:text-[10px] mt-1">
                        (JPG, PNG - max 5MB)
                      </p>
                    </div>
                  )}
                </div>

                {/* Player Name */}
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
                    Player Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="Enter your full name"
                    value={formData.playerName}
                    onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-2">
                    Select Role <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {[
                      { value: 'batsman', label: 'BATSMAN' },
                      { value: 'all-rounder', label: 'ALL-ROUNDER' },
                      { value: 'bowler', label: 'BOWLER' }
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleRoleSelect(value)}
                        className={`px-2 py-1.5 sm:py-2 rounded-lg border text-[10px] sm:text-xs font-medium transition-all ${
                          formData.role === value
                            ? 'bg-orange-500 border-orange-500 text-white shadow-lg scale-105'
                            : 'bg-black/40 border-orange-500/30 text-orange-300 hover:bg-orange-500/20'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Village with Outside Toggle */}
                <div className="space-y-2">
                  <div>
                    <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
                      Village/Town <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      placeholder="Enter your village/town"
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    />
                  </div>
                  
                  {/* Outside Village Toggle */}
                  <div className="flex items-center gap-2 p-2 sm:p-3 bg-black/40 rounded-lg border border-orange-500/30">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isOutsideVillage: false })}
                      className={`flex items-center gap-2 flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all ${
                        !formData.isOutsideVillage
                          ? 'bg-orange-500 text-white'
                          : 'bg-black/40 text-orange-300 hover:bg-orange-500/20'
                      }`}
                    >
                      <Home size={14} />
                      <span className="text-[10px] sm:text-xs">Inside Village</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, isOutsideVillage: true })}
                      className={`flex items-center gap-2 flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all ${
                        formData.isOutsideVillage
                          ? 'bg-orange-500 text-white'
                          : 'bg-black/40 text-orange-300 hover:bg-orange-500/20'
                      }`}
                    >
                      <MapPin size={14} />
                      <span className="text-[10px] sm:text-xs">Outside Village</span>
                    </button>
                  </div>
                </div>

                {/* Team Name (Optional) */}
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="Enter your team name"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  />
                </div>

                {/* Fee Info */}
                <div className={`p-3 sm:p-4 rounded-lg mt-2 transition-all ${
                  formData.isOutsideVillage 
                    ? 'bg-purple-500/20 border border-purple-500/30' 
                    : 'bg-orange-500/20 border border-orange-500/30'
                }`}>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-300 text-xs sm:text-sm font-bold">
                      Registration Fee:
                    </p>
                    <p className={`text-base sm:text-lg font-black ${
                      formData.isOutsideVillage ? 'text-purple-400' : 'text-orange-400'
                    }`}>
                      {getRegistrationFee()}
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!profilePhoto}
                  className={`w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all mt-4 text-xs sm:text-sm md:text-base shadow-lg ${
                    !profilePhoto ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <CreditCard size={16} />
                  PROCEED TO PAYMENT ({getRegistrationFee()})
                </button>

                {!profilePhoto && (
                  <p className="text-red-400 text-center text-[10px]">
                    *Please upload profile photo first
                  </p>
                )}
              </motion.form>
            ) : (
              /* Payment Section */
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3 sm:space-y-4"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 text-center">
                  COMPLETE PAYMENT
                </h2>
                
                {/* Amount Display */}
                <div className={`text-center p-2 sm:p-3 rounded-lg ${
                  formData.isOutsideVillage 
                    ? 'bg-purple-500/20 border border-purple-500/30' 
                    : 'bg-orange-500/20 border border-orange-500/30'
                }`}>
                  <p className="text-white/70 text-xs sm:text-sm">Amount to Pay</p>
                  <p className={`text-2xl sm:text-3xl md:text-4xl font-black ${
                    formData.isOutsideVillage ? 'text-purple-400' : 'text-orange-400'
                  }`}>
                    {getRegistrationFee()}
                  </p>
                </div>

                {/* Profile Photo Summary */}
                <div className="bg-green-500/10 p-2 sm:p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-400 text-[10px] sm:text-xs font-bold mb-1 flex items-center gap-1">
                    <Camera size={12} />
                    Profile Photo Status:
                  </p>
                  {photoPreview ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-green-500 flex-shrink-0">
                        <img src={photoPreview} alt="profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/70 text-[8px] sm:text-[10px]">
                          ✅ Photo ready for upload
                        </p>
                        {uploadedPhotoUrl && (
                          <p className="text-green-300 text-[7px] sm:text-[8px] truncate">
                            URL: {uploadedPhotoUrl}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-red-400 text-[8px] sm:text-[10px]">
                      ❌ No profile photo! Please go back and upload.
                    </p>
                  )}
                </div>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(ORGANIZER_NAME)}&am=${
                        formData.isOutsideVillage ? '250' : '100'
                      }&cu=INR`}
                      alt="Payment QR"
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
                    />
                  </div>
                </div>

                {/* UPI Details */}
                <div className="bg-black/40 p-2 sm:p-3 md:p-4 rounded-lg border border-orange-500/30">
                  <p className="text-white text-[10px] sm:text-xs md:text-sm break-all">
                    <span className="text-orange-300 font-bold">UPI ID:</span>{' '}
                    <span className="font-mono text-white/90">{UPI_ID}</span>
                  </p>
                  <p className="text-white text-[10px] sm:text-xs md:text-sm mt-1">
                    <span className="text-orange-300 font-bold">Name:</span>{' '}
                    <span className="text-white/90">{ORGANIZER_NAME}</span>
                  </p>
                </div>

                {/* Transaction ID */}
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-medium text-orange-300 mb-1">
                    Transaction ID / UTR Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/40 border border-orange-500/40 rounded-lg px-3 py-2 sm:py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
                    placeholder="Enter transaction ID from payment app"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </div>

                {/* Instructions */}
                <div className="bg-blue-500/10 p-2 sm:p-3 rounded-lg border border-blue-500/30">
                  <p className="text-blue-400 text-[10px] sm:text-xs font-bold mb-1">📱 Final Step:</p>
                  <ul className="text-white/70 text-[8px] sm:text-[10px] space-y-1 list-disc pl-4">
                    <li>Pay the amount via UPI using QR or UPI ID</li>
                    <li>Enter Transaction ID above</li>
                    <li>Click Submit - Photo will upload to server</li>
                    <li>WhatsApp will open with photo URL included</li>
                    <li>Send the message - Admin will verify</li>
                  </ul>
                </div>

                {/* Submit Button with Upload State */}
                <button
                  onClick={handlePaymentSubmit}
                  disabled={isSubmitting || isUploading || !transactionId || !profilePhoto}
                  className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-50 text-xs sm:text-sm md:text-base shadow-lg`}
                >
                  {isUploading ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      UPLOADING PHOTO...
                    </>
                  ) : isSubmitting ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <CheckCircle size={16} />
                      SUBMIT & OPEN WHATSAPP
                    </>
                  )}
                </button>

                {uploadedPhotoUrl && (
                  <p className="text-center text-green-400 text-[8px] sm:text-[10px]">
                    ✅ Photo uploaded successfully!
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PopupModal;




