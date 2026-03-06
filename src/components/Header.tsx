import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Teams', path: '/teams' },
  { name: 'Tournaments', path: '/tournaments' },
  { name: 'Sessions', path: '/sessions' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Stats', path: '/stats' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-linear-to-br from-primary to-secondary p-2.5 rounded-xl group-hover:rotate-12 transition-all shadow-lg">
            <Trophy className="text-white" size={26} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">
              PARSI <span className="text-primary">PREMIER</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase">League Season 7</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest py-2",
                    location.pathname === link.path ? "text-primary" : "text-zinc-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
