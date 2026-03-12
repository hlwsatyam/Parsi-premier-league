import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Calendar, Star, ArrowRight, Shield, Zap, Target as TargetIcon, MapPin, User, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TEAMS } from '../constants';
import { ContactForm } from '../components/ContactForm';
import PPLAbout from '../components/PPLAbout';

export const Home: React.FC = ({isOpen, setIsOpen   }) => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>PPL Season 7 | Parsiya Premier League Official</title>
        <meta name="description" content="Welcome to the official home of Parsiya Premier League and Parsiya Premier League. Register your team for Season 7 and join the elite cricket competition." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 hero-mesh">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/80 to-zinc-950" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
      
 


    <div className="bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center min-h-screen p-5 font-sans">
      {/* main card – extra attractive with orange border / soft shadow */}
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-orange-200/60 p-6 md:p-8 border-2 border-transparent [border-image:linear-gradient(135deg,#fb923c,#ea580c)_1] rounded-2xl hover:scale-[1.02] hover:-translate-y-1 hover:shadow-orange-400/40 transition-all duration-300">
        {/* flex container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* left text section */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* badge for style (orange theme) */}
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              🔥 season 7 · live now
            </span>

            {/* main heading with stronger orange tone & glow */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent [text-shadow:0_4px_12px_rgba(255,107,0,0.3)]">
                PARSIYA PREMIER LEAGUE
              </span>
            </h2>

            {/* first paragraph (original text enriched) */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg border-l-4 border-orange-400 pl-4 italic">
          PPL-  Mehboob Ansari is the driving force behind the Parsiya Premier League (PPL). 
  For the past 7 years, he has been consistently organizing and managing the league 
  with dedication and passion for cricket in Parsiya, Siwan, Bihar. 
            </p>

            {/* ADDED: 2 stylish lines that expand the idea with orange vibe */}
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 shadow-inner">
              <p className="text-orange-800 font-medium flex items-start gap-2">
                <span className="text-orange-500 text-xl">🏏</span>
                <span>
                  <strong className="text-orange-700">
                    मैदान पर जलवा :
                  </strong>{" "}
                  दमदार टीमें, धमाकेदार मुकाबले और चौकों-छक्कों की बारिश – इस
                  बार PPL और भी खास।
                </span>
              </p>
              <p className="text-orange-800 font-medium flex items-start gap-2 mt-2">
                <span className="text-orange-500 text-xl">🎟️</span>
                <span>
                  <strong className="text-orange-700">
                    फैंस के लिए ऑफर :
                  </strong>{" "}
                  जल्दी बुक करो, धमाकेदार छूट पाओ – हर शॉट पर मिलेगा जोश और
                  इनाम।
                </span>
              </p>
            </div>
 
          </div>

          {/* right image section (enhanced with frame) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              {/* decorative orange blur behind image */}
              <div className="absolute -inset-2 bg-orange-300 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
              {/* image with orange tinted shadow */}
              <img
                src="https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.16-739309597056867000.png"
                alt="Parsiya Premier League official visual"
                className="relative w-full max-w-md rounded-2xl shadow-2xl border-4 border-white/80 group-hover:border-orange-200 transition-all duration-300"
              />
              {/* floating small caption (just for style) */}
              <div className="absolute -bottom-3 left-5 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                ✦ OFFICIAL ARTWORK ✦
              </div>
            </div>
          </div>
        </div>
        {/* end flex */}

        {/* subtle bottom line (orange) */}
        <div className="w-24 h-1 bg-orange-400 rounded-full mt-8 mx-auto md:mx-0 md:ml-1"></div>
      </div>{" "}
      {/* end main card */}
    </div>






          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <Link to="/tournaments" className="bg-linear-to-r from-primary to-secondary text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(242,125,38,0.3)] flex items-center gap-3">
              Explore Season 7 <ArrowRight size={24} />
            </Link>
            <Link  onClick={() =>setIsOpen(true) } className="glass text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all !bg-red-400 !border-white/20">
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>





<PPLAbout/>


  
      {/* Tournament Format Section */}
      <section className="py-32 relative bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">TOURNAMENT <br /><span className="text-gradient">FORMAT</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'Group Stage', desc: '8 teams divided into 2 groups. Each team plays 3 matches in a round-robin format.' },
                  { title: 'Knockouts', desc: 'Top 2 teams from each group advance to the Semi-Finals.' },
                  { title: 'Grand Finale', desc: 'The ultimate showdown between the two best teams for the PPL Trophy.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-white/10">0{i + 1}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-primary/20 relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[60px]" />
              <h3 className="text-3xl font-black text-white mb-8 text-center">PRIZE <span className="text-gradient">POOL</span></h3>
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Winner</span>
                  <span className="text-3xl font-black text-primary">to be announced</span>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Runner Up</span>
                  <span className="text-3xl font-black text-white">to be announced</span>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest">Man of Series</span>
                  <span className="text-2xl font-black text-secondary">Premium Kit</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venue & Schedule Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-black text-white mb-12">MATCH <span className="text-gradient">SCHEDULE</span></h2>
              <div className="space-y-4">
                {[
                  { date: 'April 15', match: 'Mairwa Super Kings vs Star XI', time: '10:00 AM', type: 'Inaugural' },
                  { date: 'April 16', match: 'Bengal Tigers vs Siwan Knight Riders', time: '02:00 PM', type: 'Group A' },
                  { date: 'April 17', match: 'Star XI vs Bengal Tigers', time: '10:00 AM', type: 'Group B' },
                  { date: 'April 18', match: 'Siwan Knight Riders vs Mairwa Super Kings', time: '02:00 PM', type: 'Group A' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl flex flex-wrap items-center justify-between gap-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="bg-primary/20 text-primary px-4 py-2 rounded-xl font-black text-center min-w-[80px]">
                        <div className="text-xs uppercase">APR</div>
                        <div className="text-2xl leading-none">{item.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{item.match}</div>
                        <div className="text-zinc-500 text-sm uppercase tracking-widest">{item.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-white font-black">{item.time}</div>
                        <div className="text-zinc-500 text-xs uppercase">Parsiya Ground</div>
                      </div>
                      <button className="bg-white/5 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                        Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-white mb-12">VENUE</h2>
              <div className="glass p-8 rounded-[2.5rem] border-secondary/20">
                <div className="aspect-square rounded-2xl overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" 
                    alt="Parsiya Ground" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="text-secondary" size={24} /> Parsiya Ground
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Our official home ground, featuring a professional turf pitch, modern seating for 5,000+ spectators, and high-intensity floodlights for night matches.
                </p>
                <button className="w-full glass py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Teams', value: '10', icon: Users },
            { label: 'Seasons', value: '07', icon: Trophy },
            { label: 'Matches', value: '150+', icon: Calendar },
            { label: 'Stars', value: '500+', icon: Star },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center group hover:border-primary/50 transition-colors"
            >
              <stat.icon className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Teams */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-black text-white mb-4">FEATURED <span className="text-gradient">TEAMS</span></h2>
              <p className="text-zinc-400">The powerhouses of PPL Season 7</p>
            </div>
            <Link to="/teams" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Teams <ArrowRight size={20} />
            </Link>
          </div>
          
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {TEAMS.map((team, i) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-orange-950/90 to-red-950/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-500/50 transition-all">
              
              {/* Champion Badge */}
              {team.id === 'bengal-tigers' && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Trophy size={10} /> Champion
                </div>
              )}

              {/* Team Logo Container */}
              <div className="aspect-square overflow-hidden relative">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: team.color }}
                />
                <img
                  src={team.logo}
                  alt={team.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Team Color Indicator */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: team.color }}
                />
              </div>

              {/* Team Info */}
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Crown size={18} style={{ color: team.color }} />
                  {team.name}
                </h3>
                
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 mb-4">
                  {team.description}
                </p>

                {/* Owner Section */}
                <div className="flex items-center gap-3 pt-3 border-t border-orange-500/30">
                  {/* Owner Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-sm opacity-50" />
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <img
                        src={team.owner.photo}
                        alt={team.owner.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Owner Details */}
                  <div className="flex-1">
                    <p className="text-white text-xs sm:text-sm font-bold flex items-center gap-1">
                      <User size={12} className="text-orange-400" />
                      {team.owner.name}
                    </p>
                    <p className="text-orange-300/60 text-[10px] sm:text-xs flex items-center gap-1">
                      <Star size={10} />
                      {team.owner.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-8">READY TO <br /><span className="text-gradient">JOIN THE BATTLE?</span></h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Whether you want to register your team, become a sponsor, or just have a question, our team is here to help. Fill out the form and we'll get back to you on WhatsApp instantly.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Team Registration', desc: 'Register your squad for Season 7' },
                { title: 'Sponsorship', desc: 'Partner with the biggest league' },
                { title: 'Live Support', desc: 'Get instant help via WhatsApp' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Star className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
