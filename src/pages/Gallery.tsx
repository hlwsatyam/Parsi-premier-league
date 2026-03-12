import React from 'react';
import { motion } from 'motion/react';

export const Gallery: React.FC = () => {


const d=["https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/06.56-229401446048465570.png" , "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/06.58-662336485905325300.png"   , "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/06.59-737550756581732400.png"  , "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/06.59-196597975122270270.png" , "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/08/07.00-787772912350954400.png" 



, "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.54-786185488413087100.png"

, "https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.55-346999661317984000.png"

,"https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.55-902955809876751700.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.56-946834632678276700.png",

"https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.56-120564046111606750.png"

,"https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.56-196282161194830340.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.57-416081993358686300.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.57-119556544372002900.png" ,"https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.57-144043164197032740.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.57-114625462508708420.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.58-466155457043303700.png" ,"https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.58-445338561268570430.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.59-588512563853353100.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.59-823984097821941800.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/15.59-936264135233797500.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.00-518509752443567000.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.00-383401452351565500.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.01-370908291912168640.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.01-625581209972826900.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.02-310118374260968260.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.02-556317856599181630.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.02-834433341707462700.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.03-220754541087544060.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.03-530017613033835260.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.03-824866780678624500.png","https://dynamic.techmintlab.com/uploads/img-to-url/2026/03/12/16.04-268613302764153440.png", 
]




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
          {d.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer"
            >
              <img 
                src={_} 
                alt={`Gallery ${i}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

   
      </div>
    </div>
  );
};
