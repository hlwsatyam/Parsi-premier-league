import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">LATEST <span className="text-gradient">NEWS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Stay updated with everything happening in the PPL universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Season 6 Dates Announced', date: 'March 15, 2024', desc: 'The official schedule for PPL Season 6 has been released. Matches start next month!' },
            { title: 'New Team Entry: Siwan Stars', date: 'March 10, 2024', desc: 'We are excited to welcome Siwan Stars as the 8th team in the upcoming season.' },
            { title: 'Bengal Tigers Training Camp', date: 'March 05, 2024', desc: 'The defending champions have started their intensive training camp at Panjya Ground.' },
            { title: 'Sponsorship Deal Signed', date: 'March 01, 2024', desc: 'Anant Power Tools renews title sponsorship for the third consecutive year.' },
            { title: 'Player Auction Results', date: 'Feb 25, 2024', desc: 'Check out the full list of players bought by each team in the Season 6 auction.' },
            { title: 'New Stadium Lights Installed', date: 'Feb 20, 2024', desc: 'Panjya Ground is now ready for day-night matches with international standard lighting.' },
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
                <Calendar size={14} /> {post.date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {post.desc}
              </p>
              <button className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Read More <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
