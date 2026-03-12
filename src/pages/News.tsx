// PPLWinnerList.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, ChevronDown, ChevronUp, Crown, Star, Medal, Sparkles, Calendar, Users, Target } from 'lucide-react';

interface Winner {
  season: string;
  year: string;
  winner: string;
  winnerCoach: string;
  runner: string;
  runnerCoach: string;
  winnerColor?: string;
  runnerColor?: string;
}

const winnersData: Winner[] = [
  {
    season: "Season 1",
    year: "2020",
    winner: "Punjab",
    winnerCoach: "Aashik Master",
    runner: "KKR",
    runnerCoach: "Makbul Ansari",
    winnerColor: "from-amber-600 to-yellow-500",
    runnerColor: "from-gray-600 to-gray-500"
  },
  {
    season: "Season 2",
    year: "2021",
    winner: "Punjab",
    winnerCoach: "Aashik Master",
    runner: "KKR",
    runnerCoach: "Aalamgeer Ansari",
    winnerColor: "from-amber-600 to-yellow-500",
    runnerColor: "from-gray-600 to-gray-500"
  },
  {
    season: "Season 3",
    year: "2022",
    winner: "CSK",
    winnerCoach: "Saheb Hussain",
    runner: "Punjab",
    runnerCoach: "Aashik Master",
    winnerColor: "from-yellow-600 to-amber-500",
    runnerColor: "from-purple-600 to-purple-500"
  },
  {
    season: "Season 4",
    year: "2023",
    winner: "GT",
    winnerCoach: "Irshad Ansari",
    runner: "MI",
    runnerCoach: "Harun Ansari",
    winnerColor: "from-blue-600 to-cyan-500",
    runnerColor: "from-orange-600 to-red-500"
  },
  {
    season: "Season 5",
    year: "2024",
    winner: "MI",
    winnerCoach: "Saheb Hussain",
    runner: "GT",
    runnerCoach: "Irshad Ansari",
    winnerColor: "from-orange-600 to-red-500",
    runnerColor: "from-blue-600 to-cyan-500"
  },
  {
    season: "Season 6",
    year: "2025",
    winner: "Mairwa Super Kings",
    winnerCoach: "Dr Afzal",
    runner: "Bengal Tigers",
    runnerCoach: "Maksud Ansari",
    winnerColor: "from-emerald-600 to-green-500",
    runnerColor: "from-red-600 to-orange-500"
  }
];

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className={`bg-gradient-to-br ${color} p-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/20`}
  >
    <div className="flex items-center gap-2 text-white">
      {icon}
      <div>
        <p className="text-xs opacity-90">{title}</p>
        <p className="text-sm font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

const WinnerCard: React.FC<{ winner: Winner; index: number }> = ({ winner, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-orange-950/90 to-red-950/90 backdrop-blur-sm rounded-xl border border-orange-500/30 overflow-hidden">
        {/* Season Badge */}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-red-600 px-4 py-1 rounded-bl-lg">
          <span className="text-white font-bold text-xs flex items-center gap-1">
            <Trophy size={12} />
            {winner.season}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-0 left-0 bg-black/40 px-4 py-1 rounded-br-lg border-r border-b border-orange-500/30">
          <span className="text-orange-300 font-bold text-xs flex items-center gap-1">
            <Calendar size={12} />
            {winner.year}
          </span>
        </div>

        <div className="p-5 pt-8">
          {/* Teams */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Winner */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${winner.winnerColor} p-3 rounded-lg relative overflow-hidden`}
            >
              <Crown className="absolute top-1 right-1 text-yellow-300 opacity-30" size={20} />
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-yellow-300" />
                <div>
                  <p className="text-white/80 text-xs">Winner</p>
                  <p className="text-white font-bold text-sm">{winner.winner}</p>
                  <p className="text-white/70 text-[10px]">Coach: {winner.winnerCoach}</p>
                </div>
              </div>
            </motion.div>

            {/* Runner */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${winner.runnerColor} p-3 rounded-lg relative overflow-hidden`}
            >
              <Medal className="absolute top-1 right-1 text-gray-300 opacity-30" size={20} />
              <div className="flex items-center gap-2">
                <Award size={16} className="text-gray-300" />
                <div>
                  <p className="text-white/80 text-xs">Runner</p>
                  <p className="text-white font-bold text-sm">{winner.runner}</p>
                  <p className="text-white/70 text-[10px]">Coach: {winner.runnerCoach}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-1 text-orange-300 hover:text-orange-400 text-xs transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Match Details'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pt-3 border-t border-orange-500/30 space-y-2"
              >
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-black/30 p-2 rounded">
                    <p className="text-orange-300">🏆 Winner Team</p>
                    <p className="text-white font-bold">{winner.winner}</p>
                    <p className="text-white/60 text-[10px]">Coach: {winner.winnerCoach}</p>
                  </div>
                  <div className="bg-black/30 p-2 rounded">
                    <p className="text-orange-300">🥈 Runner Team</p>
                    <p className="text-white font-bold">{winner.runner}</p>
                    <p className="text-white/60 text-[10px]">Coach: {winner.runnerCoach}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-white/40 text-[10px]">
                  <Star size={12} className="text-yellow-500" />
                  <span>PPL {winner.season} • {winner.year}</span>
                  <Star size={12} className="text-yellow-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export const News: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'recent' | 'classic'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Statistics
  const stats = {
    totalSeasons: winnersData.length,
    mostWins: 'Punjab (2 times)',
    currentChampion: 'Mairwa Super Kings',
    mostRunners: 'KKR, Punjab (2 times)'
  };

  const filteredWinners = winnersData.filter(winner => {
    if (filter === 'recent') return parseInt(winner.year) >= 2024;
    if (filter === 'classic') return parseInt(winner.year) < 2023;
    return true;
  });

  return (
    <div className="w-full max-w-7xl mt-14 mx-auto p-3 sm:p-4 md:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 sm:mb-8"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-70" />
          <div className="relative bg-gradient-to-r from-orange-600 to-red-600 p-4 sm:p-6 rounded-full">
  <img
  src="https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/06.17-315891156577660700.jpeg"
  alt="Parsiya Premier League"
  style={{
    width: "80px",
    height: "50px",
    border: "0",
    objectFit: "cover"
  }}
/>          </div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-4 mb-2">
          PPL <span className="text-gradient bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">WINNERS</span> LIST
        </h1>
        <p className="text-orange-300/70 text-xs sm:text-sm">Celebrating 6 Glorious Seasons of Cricket</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <StatCard
          icon={<Trophy size={16} />}
          title="Total Seasons"
          value={stats.totalSeasons.toString()}
          color="from-orange-500/20 to-red-500/20"
        />
        <StatCard
          icon={<Crown size={16} />}
          title="Most Wins"
          value={stats.mostWins}
          color="from-yellow-500/20 to-amber-500/20"
        />
        <StatCard
          icon={<Target size={16} />}
          title="Current Champion"
          value={stats.currentChampion}
          color="from-emerald-500/20 to-green-500/20"
        />
        <StatCard
          icon={<Medal size={16} />}
          title="Most Runners"
          value={stats.mostRunners}
          color="from-blue-500/20 to-cyan-500/20"
        />
      </motion.div>

      {/* Filters and View Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6"
      >
        <div className="flex items-center gap-2 bg-black/30 p-1 rounded-lg border border-orange-500/30">
          {[
            { value: 'all', label: 'All Seasons' },
            { value: 'recent', label: 'Recent' },
            { value: 'classic', label: 'Classic' }
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value as any)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === f.value
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'text-orange-300 hover:bg-orange-500/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-black/30 p-1 rounded-lg border border-orange-500/30">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-orange-500 text-white'
                : 'text-orange-300 hover:bg-orange-500/20'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-orange-500 text-white'
                : 'text-orange-300 hover:bg-orange-500/20'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Winners Grid/List */}
      <motion.div
        layout
        className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'
            : 'space-y-3'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filteredWinners.map((winner, index) => (
            <WinnerCard key={winner.season} winner={winner} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 rounded-full border border-orange-500/30">
          <Sparkles size={14} className="text-yellow-500" />
          <p className="text-orange-300/70 text-xs">
            🏏 PPL • Creating Champions Since 2020 • Get Ready for Season 7! 🏏
          </p>
          <Sparkles size={14} className="text-yellow-500" />
        </div>
      </motion.div>
    </div>
  );
};

 