import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">OUR <span className="text-gradient">PARTNERS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            The organizations that make Panjya Premier League possible.
          </p>
        </div>

        <div className="glass p-12 rounded-3xl mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Title Sponsor</span>
            <h2 className="text-4xl font-black text-white mt-2">ANANT POWER TOOLS (KOLKATA)</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-50">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-700 font-bold">
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-zinc-400 mb-8">
              Partner with the most influential sports event in the region and reach thousands of passionate fans.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold">
              Download Media Kit
            </button>
          </div>
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Why Partner With Us?</h3>
            <ul className="space-y-4">
              {[
                'Brand visibility to 10k+ local audience',
                'Social media promotion on all channels',
                'VIP access to all matches and events',
                'Custom activation opportunities'
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
