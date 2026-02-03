import React from 'react';
import { motion } from 'motion/react';
import { Map, Clock, Sun, ArrowRight, Navigation } from 'lucide-react';
import { heritageRoutes } from '@/app/data';
import { Section } from '@/app/components/Section';

interface HeritageRoutesProps {
  onViewRoute: (route: any) => void;
}

export const HeritageRoutes: React.FC<HeritageRoutesProps> = ({ onViewRoute }) => {
  return (
    <div className="min-h-screen bg-stone-50 pt-40">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Guided Paths
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-display">
            Heritage Walks
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Follow the footsteps of history. These curated routes take you through the most significant 
            cultural and historical landmarks of the Layyah region.
          </p>
        </div>

        <div className="space-y-8">
          {heritageRoutes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onViewRoute(route)}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                {/* Image */}
                <div className="w-full lg:w-1/3 h-64 lg:h-72 shrink-0 rounded-2xl overflow-hidden relative">
                   <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10" />
                   <img 
                    src={route.image} 
                    alt={route.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-bold text-stone-800 flex items-center gap-2">
                     <Map size={14} className="text-amber-600" />
                     {route.location}
                   </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-bold text-stone-900 mb-4 font-display group-hover:text-amber-700 transition-colors">
                    {route.name}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                      <Clock size={16} /> {route.duration}
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                      <Sun size={16} /> {route.bestTime}
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                      <Navigation size={16} /> {route.distance}
                    </div>
                  </div>

                  <p className="text-stone-600 mb-8 leading-relaxed line-clamp-2">
                    {route.description}
                  </p>

                  {/* Mini Route Timeline */}
                  <div className="relative mb-8 pt-4 px-2 hidden md:block">
                    <div className="absolute top-7 left-0 right-0 h-0.5 bg-stone-200" />
                    <div className="flex justify-between relative z-10">
                      {route.stops.slice(0, 4).map((stop: any, i: number) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-white border-4 border-amber-500 shadow-sm" />
                          <span className="text-xs font-bold text-stone-500 uppercase tracking-wide max-w-[80px] text-center">
                            {stop.name}
                          </span>
                        </div>
                      ))}
                      {route.stops.length > 4 && (
                         <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-stone-200 border-4 border-stone-300 flex items-center justify-center text-[10px] font-bold text-stone-500">
                            +{route.stops.length - 4}
                          </div>
                          <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">More</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button className="flex items-center gap-2 text-stone-900 font-bold group-hover:text-amber-700 transition-colors">
                      View Full Route <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
