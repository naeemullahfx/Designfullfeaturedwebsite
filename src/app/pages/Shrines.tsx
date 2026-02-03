import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Map as MapIcon } from 'lucide-react';
import { shrines } from '@/app/data';
import { Section } from '@/app/components/Section';
import { HeritageMap } from '@/app/components/map/HeritageMap';

interface ShrinesProps {
  onViewShrine: (shrine: any) => void;
}

export const Shrines: React.FC<ShrinesProps> = ({ onViewShrine }) => {
  const [focusedShrine, setFocusedShrine] = useState<any>(null);

  const handleViewOnMap = (e: React.MouseEvent, shrine: any) => {
    e.stopPropagation();
    setFocusedShrine(shrine);
    document.getElementById('shrine-map')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mapLocations = shrines.map(s => ({
    id: s.id,
    title: s.name,
    coordinates: s.coordinates || { lat: 30.9693, lng: 70.9428 },
    type: 'Shrine',
    image: s.image,
    description: s.description,
    onClick: () => onViewShrine(s)
  }));

  return (
    <div className="min-h-screen bg-stone-50 pt-40">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Spiritual Heritage
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-display">
            Sufi Shrines of Layyah
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Layyah is a land of mystics and saints. Explore the sacred sanctuaries that have been centers of 
            peace, spirituality, and architectural beauty for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {shrines.map((shrine, idx) => (
            <motion.div
              key={shrine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-stone-100 flex flex-col"
              onClick={() => onViewShrine(shrine)}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10" />
                <img
                  src={shrine.image}
                  alt={shrine.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent z-20">
                   <h3 className="text-white text-xl font-bold font-display tracking-wide">{shrine.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-stone-500 text-sm font-medium mb-4">
                  <MapPin size={16} className="text-amber-600" />
                  {shrine.location}
                </div>
                
                <p className="text-stone-600 mb-6 line-clamp-2 leading-relaxed flex-1">
                  {shrine.description}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <button 
                    className="flex-1 text-stone-900 font-bold text-sm bg-stone-100 hover:bg-amber-100 hover:text-amber-800 py-2.5 rounded-lg transition-colors text-center"
                    onClick={(e) => { e.stopPropagation(); onViewShrine(shrine); }}
                  >
                    View Details
                  </button>
                  <button 
                    className="px-3 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors tooltip"
                    title="View on Map"
                    onClick={(e) => handleViewOnMap(e, shrine)}
                  >
                    <MapIcon size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shrine Map Section */}
        <div id="shrine-map" className="scroll-mt-24">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
             <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-stone-900 font-display flex items-center gap-3">
                 <MapPin className="text-emerald-600" /> Shrine Locations
               </h2>
               {focusedShrine && (
                 <button 
                   onClick={() => setFocusedShrine(null)}
                   className="text-sm text-stone-500 hover:text-stone-800 underline"
                 >
                   Show All
                 </button>
               )}
             </div>
             
             <div className="h-[500px] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                <HeritageMap 
                  locations={mapLocations}
                  center={focusedShrine?.coordinates || { lat: 31.1000, lng: 71.0500 }}
                  zoom={focusedShrine ? 15 : 11}
                  className="h-full w-full"
                />
             </div>
          </div>
        </div>

      </Section>
    </div>
  );
};
