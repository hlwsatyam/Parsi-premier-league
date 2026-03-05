import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">OUR <span className="text-gradient">PARTNERS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            The organizations that make Panjya Premier League possible.
          </p>
        </div>

        <div className="glass p-12 rounded-[3rem] mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Title Sponsor</span>
            <h2 className="text-4xl font-black text-white mt-2">ANANT POWER TOOLS (KOLKATA)</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-700 font-bold border border-white/5">
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers Section */}
        <section className="py-20 mb-20">
          <h2 className="text-4xl font-black text-white mb-12 text-center">SPONSORSHIP <span className="text-gradient">TIERS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tier: 'Platinum', price: '₹ 1,00,000+', benefits: ['Main Logo on Jersey', 'Live Stream Ads', 'VIP Box Access', 'All Social Media'] },
              { tier: 'Gold', price: '₹ 50,000+', benefits: ['Logo on Boundary Boards', 'Social Media Shoutouts', '4 VIP Tickets', 'Banner at Venue'] },
              { tier: 'Silver', price: '₹ 25,000+', benefits: ['Logo on Website', '2 VIP Tickets', 'Banner at Venue', 'Mention in News'] },
            ].map((tier, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/50 transition-all">
                <div className="text-primary font-black text-2xl mb-2">{tier.tier}</div>
                <div className="text-white font-black text-3xl mb-8">{tier.price}</div>
                <ul className="space-y-4 mb-10">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <Star className="text-primary" size={14} /> {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full glass py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Partner with the most influential sports event in the region and reach thousands of passionate fans across all digital and physical platforms.
            </p>
            <button className="bg-linear-to-r from-primary to-secondary text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(242,125,38,0.3)]">
              Download Media Kit
            </button>
          </div>
          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">Why Partner With Us?</h3>
            <ul className="space-y-4">
              {[
                'Brand visibility to 50k+ digital audience',
                'Professional live stream integration',
                'On-ground branding at Panjya Ground',
                'Custom activation opportunities for your brand'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400">
                  <Star className="text-primary" size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
