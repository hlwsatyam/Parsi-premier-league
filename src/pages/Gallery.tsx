import React from 'react';
import { motion } from 'motion/react';

export const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-white mb-6">MOMENTS <span className="text-gradient">GALLERY</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Relive the most exciting moments from previous seasons.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-32">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer"
            >
              <img 
                src={`https://picsum.photos/seed/ppl-${i}/800/${600 + (i % 3) * 100}`} 
                alt={`Gallery ${i}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <section className="py-20 bg-linear-to-b from-zinc-900 to-zinc-950 rounded-[3rem] p-12 border border-white/5">
          <h2 className="text-4xl font-black text-white mb-12 text-center">VIDEO <span className="text-gradient">HIGHLIGHTS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Season 5 Final Highlights', views: '12K Views', duration: '15:20' },
              { title: 'Top 10 Wickets of Season 5', views: '8K Views', duration: '08:45' },
            ].map((video, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl overflow-hidden glass mb-6 relative">
                  <img 
                    src={`https://picsum.photos/seed/video-${i}/1280/720`} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(242,125,38,0.5)] group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-xs font-bold text-white">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{video.title}</h4>
                <div className="text-zinc-500 text-sm uppercase tracking-widest font-bold">{video.views}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
