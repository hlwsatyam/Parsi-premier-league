// Sponsors.tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Trophy, Users, Target, Award, ChevronRight, ExternalLink } from 'lucide-react';

// Sponsor Images Data
const sponsorLogos = [
  {
    id: 1,
    name: 'K Ansari',
    logo: 'https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/07.34-698386545698719100.png',
    tier: 'Main'
  },
  {
    id: 2,
    name: 'Bihar Builders',
    logo: 'https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/07.36-123754545466456540.png',
    tier: 'platinum'
  },
  {
    id: 3,
    name: 'Bihar Builders',
    logo: 'https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.08-955958106752776300.png',
    tier: 'platinum'
  },
  {
    id: 4,
    name: 'Bihar Builders',
    logo: 'https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.10-851527546995680100.png',
    tier: 'platinum'
  },
   
  {
    id: 5,
    name: 'Bihar Builders',
    logo: 'https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.10-453359796839585900.png',
    tier: 'platinum'
  },
   
 
  
];

// Sponsor Tiers Data
const sponsorTiers = [
  { 
    tier: 'Platinum', 
    price: '₹ 1,00,000+', 
    color: 'from-slate-300 to-slate-400',
    icon: <Trophy className="w-6 h-6" />,
    benefits: [
      'Main Logo on Jersey (Front)',
      'Live Stream Ads (30s)',
      'VIP Box Access (10 Seats)',
      'All Social Media Posts',
      'Press Conference Mention',
      'Banner at Main Entrance'
    ] 
  },
  { 
    tier: 'Gold', 
    price: '₹ 50,000+', 
    color: 'from-yellow-500 to-amber-500',
    icon: <Award className="w-6 h-6" />,
    benefits: [
      'Logo on Boundary Boards',
      'Social Media Shoutouts',
      '4 VIP Tickets per Match',
      'Banner at Venue (2)',
      'Name in Broadcast',
      'Digital Certificate'
    ] 
  },
  { 
    tier: 'Silver', 
    price: '₹ 25,000+', 
    color: 'from-gray-400 to-gray-500',
    icon: <Star className="w-6 h-6" />,
    benefits: [
      'Logo on Website',
      '2 VIP Tickets per Match',
      'Banner at Venue (1)',
      'Mention in News',
      'Social Media Tag',
      'Participation Certificate'
    ] 
  }
];

// Stats Data
const sponsorStats = [
  { icon: <Users />, value: '50K+', label: 'Digital Audience' },
  { icon: <Target />, value: '25+', label: 'Partner Brands' },
  { icon: <Trophy />, value: '6', label: 'Tournament Seasons' },
  { icon: <Star />, value: '100%', label: 'Brand Satisfaction' }
];

export const Sponsors: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="pt-20 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-1 rounded-full text-orange-300 text-sm font-medium border border-orange-500/30">
              🌟 Our Valued Partners
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            OUR <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">PARTNERS</span>
          </h1>
          <p className="text-orange-300/70 max-w-2xl mx-auto text-sm sm:text-base">
            The organizations that make Parsiya Premier League possible and help grow cricket in our region.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {sponsorStats.map((stat, index) => (
            <div key={index} className="glass p-4 rounded-xl text-center border border-orange-500/30">
              <div className="text-orange-400 mb-2 flex justify-center">{stat.icon}</div>
              <p className="text-white text-xl font-bold">{stat.value}</p>
              <p className="text-orange-300/60 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Title Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 sm:p-8 md:p-12 rounded-3xl mb-12 relative overflow-hidden group"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] group-hover:blur-[120px] transition-all" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                ⭐ Title Sponsor
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
                ANANT POWER TOOLS
              </h2>
              <p className="text-orange-300/70 text-xs sm:text-sm">Kolkata • Since 2010</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Title Sponsor Logo */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={sponsorLogos[0].logo}
                  alt="Anant Power Tools"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sponsor Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-white/80 text-sm sm:text-base mb-4 leading-relaxed">
                  Anant Power Tools has been the backbone of PPL since Season 1, providing 
                  unwavering support to grassroots cricket in Bihar. Their commitment to 
                  sports development has helped nurture countless young talents.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="bg-black/30 px-3 py-1 rounded-full text-orange-300 text-xs border border-orange-500/30">
                    ⚡ Power Tools Partner
                  </span>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-orange-300 text-xs border border-orange-500/30">
                    🏆 Since 2020
                  </span>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-orange-300 text-xs border border-orange-500/30">
                    📍 Kolkata
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Sponsors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">OUR SPONSORS</h3>
          
          {/* Sponsor Categories */}
          {['platinum', 'gold', 'silver', 'bronze'].map((tier) => {
            const tierSponsors = sponsorLogos.filter(s => s.tier === tier);
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier} className="mb-8">
                <h4 className="text-orange-400 font-bold mb-4 capitalize flex items-center gap-2">
                  <Star size={16} />
                  {tier} Sponsors
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {tierSponsors.map((sponsor) => (
                    <motion.div
                      key={sponsor.id}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass p-4 rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all group"
                    >
                      <div className="aspect-square bg-white/5 rounded-lg mb-2 flex items-center justify-center p-2">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-white text-xs text-center font-medium">{sponsor.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Sponsorship Tiers Section */}
        <section className="py-12 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">
            SPONSORSHIP <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">TIERS</span>
          </h2>
          <p className="text-orange-300/70 text-center mb-10 max-w-2xl mx-auto text-sm">
            Choose the perfect partnership level for your brand
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all relative overflow-hidden group ${
                  selectedTier === tier.tier ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setSelectedTier(tier.tier)}
              >
                {/* Tier Header */}
                <div className={`bg-gradient-to-r ${tier.color} p-4 -m-6 mb-4`}>
                  <div className="flex items-center gap-2 text-white">
                    {tier.icon}
                    <span className="font-black text-lg">{tier.tier}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-white font-black text-2xl mb-4">{tier.price}</div>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-orange-300/70 text-xs">
                        <Star className="text-orange-400 flex-shrink-0" size={12} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Inquire Now
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Become a Sponsor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-2xl border border-orange-500/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:blur-[70px] transition-all" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Become a Sponsor</h3>
              <p className="text-orange-300/70 text-xs sm:text-sm mb-4 leading-relaxed">
                Partner with the most influential sports event in the region and reach thousands of passionate fans across all digital and physical platforms.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold text-xs shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
                <ExternalLink size={14} />
                Download Media Kit
              </button>
            </div>
          </motion.div>

          {/* Why Partner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-2xl border border-orange-500/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why Partner With Us?</h3>
            <ul className="space-y-2">
              {[
                'Brand visibility to 50K+ digital audience',
                'Professional live stream integration',
                'On-ground branding at Parsiya Ground',
                'Custom activation opportunities',
                'Media coverage in local news'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-orange-300/70 text-xs sm:text-sm">
                  <Star className="text-orange-400 flex-shrink-0" size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-orange-300/40 text-xs">
            Interested in sponsorship? Contact us at{' '}
            <span className="text-orange-400 font-bold">sponsors@ppl.in</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;