import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-linear-to-br from-primary to-secondary p-2 rounded-lg">
              <Trophy className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              PPL <span className="text-primary">LEAGUE</span>
            </span>
          </Link>
          <p className="text-zinc-400 leading-relaxed">
            Panjya Premier League is the premier cricket tournament in Siwan, bringing together the best talent and the most passionate fans.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-zinc-500 hover:text-primary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Teams', 'Tournaments', 'Sessions', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Tournament</h4>
          <ul className="space-y-4">
            {['Season 6', 'Winner List', 'Player Stats', 'Gallery', 'News'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-400 hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4>
          <ul className="space-y-4 text-zinc-400">
            <li>{CONTACT_INFO.address}</li>
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.email}</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Panjya Premier League. Organized by {CONTACT_INFO.organizers.join(' & ')}.</p>
      </div>
    </footer>
  );
};
