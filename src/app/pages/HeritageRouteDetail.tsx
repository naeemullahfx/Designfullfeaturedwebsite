import React from 'react';
import { motion } from 'motion/react';
import { Map, Clock, Sun, ArrowRight, Navigation, ArrowLeft, Ticket } from 'lucide-react';
import { experiences } from '@/app/data';
import { HeritageMap } from '@/app/components/map/HeritageMap';

interface HeritageRouteDetailProps {
  route: any;
  onBack: () => void;
  onNavigateToExperience: (id: string) => void;
}

export const HeritageRouteDetail: React.FC<HeritageRouteDetailProps> = ({ route, onBack, onNavigateToExperience }) => {
  if (!route) return null;

  const relatedExperience = experiences.find(e => e.id === route.relatedExperienceId);

  // Prepare Map Data
  const mapLocations = route.stops.map((s: any, idx: number) => ({
    id: `stop-${idx}`,
    title: `${idx + 1}. ${s.name}`,
    coordinates: s.coordinates || { lat: 30.9693, lng: 70.9428 },
    type: 'Walk',
    description: s.description
  }));

  const mapRoutes = [{
    id: route.id,
    path: route.path || [],
    color: '#d97706'
  }];

  // Calculate center from first stop
  const mapCenter = route.stops.length > 0 && route.stops[0].coordinates 
    ? route.stops[0].coordinates 
    : { lat: 30.9693, lng: 70.9428 };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Back to Routes
        </button>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-amber-600 font-bold tracking-wider text-sm uppercase mb-3">
                <Map size={16} /> {route.location}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 font-display mb-4">
                {route.name}
              </h1>
              <div className="flex flex-wrap gap-4 text-stone-600">
                <span className="flex items-center gap-2"><Clock size={16} /> {route.duration}</span>
                <span className="w-1 h-1 rounded-full bg-stone-300 self-center" />
                <span className="flex items-center gap-2"><Navigation size={16} /> {route.distance}</span>
                <span className="w-1 h-1 rounded-full bg-stone-300 self-center" />
                <span className="flex items-center gap-2"><Sun size={16} /> Best time: {route.bestTime}</span>
              </div>
            </div>
          </div>

          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-lg relative">
             <div className="absolute inset-0 bg-stone-900/10 z-10" />
             <img 
               src={route.image} 
               alt={route.name} 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content: Story & Timeline */}
          <div className="lg:col-span-8">
            
            {/* Story */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 font-display">About this Route</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                {route.description}
              </p>
            </div>

            {/* Route Map */}
            <div className="mb-12">
               <h2 className="text-2xl font-bold text-stone-900 mb-6 font-display">Route Map</h2>
               <div className="h-96 w-full bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
                  <HeritageMap 
                    locations={mapLocations}
                    routes={mapRoutes}
                    center={mapCenter}
                    zoom={15}
                  />
               </div>
               <p className="mt-4 text-sm text-stone-500 italic">
                 * This map serves as a guide. Please follow local signage and stay on marked paths.
               </p>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-8 font-display">Route Stops</h2>
              <div className="relative border-l-2 border-stone-200 ml-4 space-y-12 pb-4">
                {route.stops.map((stop: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.1 }}
                    className="pl-8 relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white" />
                    
                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors">
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1 block">
                        Stop {idx + 1} • {stop.type}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{stop.name}</h3>
                      <p className="text-stone-600 leading-relaxed">
                        {stop.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                 {/* Finish Line */}
                 <div className="pl-8 relative pt-4">
                    <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-stone-900 ring-4 ring-white" />
                    <span className="text-stone-900 font-bold">End of Route</span>
                 </div>
              </div>
            </div>

          </div>

          {/* Sidebar: CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {relatedExperience ? (
              <div className="sticky top-28">
                 <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500 rounded-full blur-[80px] opacity-20 transform translate-x-10 -translate-y-10" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                        <Ticket className="text-amber-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold font-display mb-2">
                        Walk with an Expert
                      </h3>
                      <p className="text-stone-300 mb-8 leading-relaxed">
                        Get deeper insights and access to restricted areas by booking this route as a guided experience.
                      </p>

                      <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/10 flex gap-4 items-center">
                         <img 
                          src={relatedExperience.image} 
                          alt={relatedExperience.title} 
                          className="w-16 h-16 rounded-lg object-cover" 
                        />
                        <div>
                          <p className="font-bold text-sm line-clamp-1">{relatedExperience.title}</p>
                          <p className="text-amber-400 font-bold text-sm">{relatedExperience.price}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => onNavigateToExperience(relatedExperience.id)}
                        className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        Book Guided Tour <ArrowRight size={18} />
                      </button>
                    </div>
                 </div>
              </div>
            ) : (
              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center sticky top-28">
                 <p className="text-stone-500 italic">
                   This route is currently self-guided only. Enjoy your walk!
                 </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
