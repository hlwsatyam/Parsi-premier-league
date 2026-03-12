// PPLAbout.tsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  MapPin, 
  Calendar, 
  Award, 
  Star, 
  Users, 
  Flame,
  Crown,
  Medal,
  Sparkles,
  Shield,
 
 
  Heart,
  Gift,
  PartyPopper
} from 'lucide-react';

interface PrizePool {
  winner: string;
  runner: string;
  manOfSeries: string;
}

const prizePool: PrizePool = {
  winner: "TO BE ANNOUNCED",
  runner: "TO BE ANNOUNCED",
  manOfSeries: "TO BE ANNOUNCED"
};

const highlights = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Launched",
    value: "2020",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Teams",
    value: "4+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "PARSIYA Bujurg",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Seasons",
    value: "7",
    color: "from-yellow-500 to-amber-500"
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
    <div className="relative bg-gradient-to-br from-orange-950/90 to-red-950/90 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30">
          <div className="text-orange-400">{icon}</div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-orange-300/70 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const PrizeCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string; delay: number }> = ({ icon, title, value, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
    className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-xl relative overflow-hidden group`}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Icon Background */}
    <div className="absolute -right-4 -top-4 opacity-10">
      {icon}
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-white/20 rounded-lg">
          {icon}
        </div>
        <h3 className="text-white/80 text-sm font-medium">{title}</h3>
      </div>
      <p className="text-white text-xl font-black">{value}</p>
      
      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full w-0 group-hover:w-full transition-all duration-500" />
    </div>
  </motion.div>
);

export const PPLAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'prizes'>('about');

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Main Container with Background */}
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-orange-500/5 rounded-3xl blur-3xl" />
        
        {/* Content */}
        <div className="relative bg-gradient-to-br from-black/40 to-orange-950/40 backdrop-blur-xl rounded-3xl border border-orange-500/30 p-6 sm:p-8 md:p-10 shadow-2xl">
          
          {/* Header with Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            {/* Logo Circle */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                 <img className="w-28 h-28 rounded-full" src="https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.20-197879327425282050.png" alt="" />
                </div>
              </motion.div>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2"
            >
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                PARSIYA PREMIER LEAGUE
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Shield className="w-5 h-5 text-orange-500" />
              <span className="text-orange-300 text-lg font-medium">CRICKET</span>
              <Shield className="w-5 h-5 text-orange-500" />
            </motion.div>

            {/* Season Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full"
            >
              <span className="text-red-900 font-black text-xl">SEASON 7</span>
            </motion.div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-xl text-center shadow-lg relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-2 text-white/80">
                    {item.icon}
                  </div>
                  <p className="text-white/70 text-xs">{item.title}</p>
                  <p className="text-white font-bold text-sm sm:text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-black/40 p-1 rounded-xl border border-orange-500/30">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'about'
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                    : 'text-orange-300 hover:text-orange-400'
                }`}
              >
                About PPL
              </button>
              <button
                onClick={() => setActiveTab('prizes')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'prizes'
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                    : 'text-orange-300 hover:text-orange-400'
                }`}
              >
                Prize Pool
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'about' ? (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                {/* About Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 sm:p-8 border border-orange-500/30"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    <h2 className="text-xl font-bold text-white">The Premier T20 Tennis Ball Tournament</h2>
                  </div>
                  
                  <p className="text-orange-300/80 text-base leading-relaxed mb-4">
                    <span className="text-white font-bold">The Parsiya Premier League [PPL]</span> is premier T20 Tennis Ball cricket tournament in 
                    <span className="text-white font-semibold"> PARSIYA BUJURG [SIWAN, BIHAR]</span>, launched in 2020. To showcase grassroots Talent from streets & villages.
                  </p>
                  
                  <p className="text-orange-300/80 text-base leading-relaxed">
                    The village's crickets showcasing their Talent on the streets and future opportunities in the sports field.
                  </p>

                  {/* Decorative Line */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                  </div>
                </motion.div>

                {/* Why PPL Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 sm:p-8 border border-purple-500/30"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-bold text-white">WHY PPL?</h2>
                  </div>
                  
                  <p className="text-purple-300/80 text-base leading-relaxed">
                    Village cricketers displaying their skills on the streets and their prospects in the Cricket field.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <p className="text-purple-300 text-xs">Teams</p>
                      <p className="text-white font-bold">8+ Teams</p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <p className="text-purple-300 text-xs">Players</p>
                      <p className="text-white font-bold">100+ Players</p>
                    </div>
                  </div>
                </motion.div>

                {/* Mission Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureCard
                    icon={<Heart className="w-6 h-6" />}
                    title="Grassroots Talent"
                    description="Showcasing raw talent from streets and villages of Parsiya Burgh"
                    delay={0.8}
                  />
                  <FeatureCard
                    icon={<Flame className="w-6 h-6" />}
                    title="Future Opportunities"
                    description="Creating pathways for village cricketers in professional cricket"
                    delay={0.9}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="prizes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Prize Pool Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    className="inline-block p-4 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full mb-4"
                  >
                    <Gift className="w-10 h-10 text-yellow-400" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">PRIZE POOL</h2>
                  <p className="text-orange-300/70">Season 7 • To Be Announced</p>
                </div>

                {/* Prize Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <PrizeCard
                    icon={<Crown className="w-8 h-8" />}
                    title="WINNER"
                    value={prizePool.winner}
                    color="from-yellow-600 to-amber-600"
                    delay={0.2}
                  />
                  <PrizeCard
                    icon={<Medal className="w-8 h-8" />}
                    title="RUNNER"
                    value={prizePool.runner}
                    color="from-gray-600 to-slate-600"
                    delay={0.3}
                  />
                  <PrizeCard
                    icon={<Star className="w-8 h-8" />}
                    title="MAN OF SERIES"
                    value={prizePool.manOfSeries}
                    color="from-blue-600 to-indigo-600"
                    delay={0.4}
                  />
                </div>

                {/* Announcement Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 border border-orange-500/30 p-6 mt-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                  <div className="relative flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <PartyPopper className="w-6 h-6 text-yellow-400" />
                      <div>
                        <p className="text-white font-bold">Prize Pool Announcement Coming Soon!</p>
                        <p className="text-orange-300/70 text-sm">Biggest prizes in PPL history</p>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                      Get Notified
                    </button>
                  </div>
                </motion.div>

                {/* Previous Seasons Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-orange-500/30">
                    <p className="text-orange-300 text-xs">Total Prize Pool (S1-6)</p>
                    <p className="text-white font-bold text-lg">₹5,00,000+</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-orange-500/30">
                    <p className="text-orange-300 text-xs">Teams Participated</p>
                    <p className="text-white font-bold text-lg">40+ Teams</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 pt-6 border-t border-orange-500/30 text-center"
          >
            <p className="text-orange-300/50 text-xs sm:text-sm">
              © 2020-2025 Parsiya Premier League • Celebrating 7 Seasons of Cricket Excellence
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PPLAbout;