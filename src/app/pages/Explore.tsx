import React, { useState } from 'react';
import { Search, Filter, X, MapPin, Camera, List, Map as MapIcon } from 'lucide-react';
import { ExperienceCard } from '@/app/components/ExperienceCard';
import { Section } from '@/app/components/Section';
import { HeritageMap } from '@/app/components/map/HeritageMap';
import { experiences, places } from '@/app/data';
import clsx from 'clsx';
import { motion } from 'motion/react';

interface ExploreProps {
  onViewExperience: (exp: any) => void;
  onBookExperience: (exp: any) => void;
}

export const Explore: React.FC<ExploreProps> = ({ onViewExperience, onBookExperience }) => {
  const [activeTab, setActiveTab] = useState<'experiences' | 'places'>('experiences');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFamilyFriendly, setIsFamilyFriendly] = useState(false);
  const [durationFilter, setDurationFilter] = useState<string>('all');

  // Extract unique categories for Experiences
  const expCategories = ['Desert', 'Shrines', 'Events', 'Walks'];

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filter Experiences
  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          exp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                            (exp.category && selectedCategories.includes(exp.category));
    const matchesFamily = !isFamilyFriendly || exp.familyFriendly === true;
    
    let matchesDuration = true;
    if (durationFilter !== 'all') {
      const hours = parseFloat(exp.duration);
      if (durationFilter === 'short') matchesDuration = hours < 3;
      if (durationFilter === 'long') matchesDuration = hours >= 3;
    }

    return matchesSearch && matchesCategory && matchesFamily && matchesDuration;
  });

  // Filter Places
  const filteredPlaces = places.filter(place => {
    return place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           place.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Prepare Map Locations
  const mapLocations = activeTab === 'experiences' 
    ? filteredExperiences.map(e => ({
        id: e.id,
        title: e.title,
        coordinates: e.coordinates || { lat: 30.9693, lng: 70.9428 },
        type: e.category || 'Experience',
        image: e.image,
        description: e.description,
        onClick: () => onViewExperience(e)
      }))
    : filteredPlaces.map(p => ({
        id: p.id,
        title: p.name,
        coordinates: p.coordinates || { lat: 30.9693, lng: 70.9428 },
        type: 'Place',
        image: p.image,
        description: p.description
      }));

  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="!py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Filters (Only for Experiences Tab) */}
          {activeTab === 'experiences' && viewMode === 'list' && (
            <div className="w-full lg:w-64 shrink-0 space-y-8 sticky top-28 bg-white z-10 lg:z-auto">
              <div className="pb-4 border-b border-stone-200">
                <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Filter size={20} /> Filters
                </h2>
              </div>

              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="font-bold text-stone-800 text-sm uppercase tracking-wide">Category</h3>
                <div className="space-y-3">
                  {expCategories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={clsx(
                        "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                        selectedCategories.includes(cat) 
                          ? "bg-amber-600 border-amber-600 text-white" 
                          : "border-stone-300 group-hover:border-amber-500"
                      )}>
                        {selectedCategories.includes(cat) && <CheckIcon size={12} />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={selectedCategories.includes(cat)} 
                        onChange={() => handleCategoryChange(cat)} 
                      />
                      <span className={clsx("text-sm", selectedCategories.includes(cat) ? "font-medium text-stone-900" : "text-stone-600")}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div className="space-y-4">
                <h3 className="font-bold text-stone-800 text-sm uppercase tracking-wide">Duration</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'Any Duration' },
                    { id: 'short', label: 'Short (< 3 Hours)' },
                    { id: 'long', label: 'Long (3+ Hours)' },
                  ].map(opt => (
                    <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="duration"
                        className="w-4 h-4 accent-amber-600"
                        checked={durationFilter === opt.id}
                        onChange={() => setDurationFilter(opt.id)}
                      />
                      <span className="text-sm text-stone-600">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Family Friendly Toggle */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="font-medium text-stone-800 text-sm">Family Friendly</span>
                  <div 
                    className={clsx("w-10 h-6 rounded-full p-1 transition-colors", isFamilyFriendly ? "bg-amber-600" : "bg-stone-200")}
                    onClick={(e) => { e.preventDefault(); setIsFamilyFriendly(!isFamilyFriendly); }}
                  >
                    <div className={clsx("w-4 h-4 bg-white rounded-full shadow-sm transition-transform", isFamilyFriendly ? "translate-x-4" : "translate-x-0")} />
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 w-full">
            
            {/* Tabs & Map Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-stone-200 pb-2">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('experiences')}
                  className={clsx(
                    "pb-2 text-lg font-bold transition-colors relative",
                    activeTab === 'experiences' ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
                  )}
                >
                  Bookable Experiences
                  {activeTab === 'experiences' && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('places')}
                  className={clsx(
                    "pb-2 text-lg font-bold transition-colors relative",
                    activeTab === 'places' ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
                  )}
                >
                  Places to Visit
                  {activeTab === 'places' && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
                  )}
                </button>
              </div>

              {/* View Toggle */}
              <div className="flex bg-stone-100 p-1 rounded-lg self-start sm:self-center">
                 <button 
                   onClick={() => setViewMode('list')}
                   className={clsx(
                     "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all",
                     viewMode === 'list' ? "bg-white shadow text-stone-900" : "text-stone-500 hover:text-stone-700"
                   )}
                 >
                   <List size={16} /> List
                 </button>
                 <button 
                   onClick={() => setViewMode('map')}
                   className={clsx(
                     "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all",
                     viewMode === 'map' ? "bg-white shadow text-stone-900" : "text-stone-500 hover:text-stone-700"
                   )}
                 >
                   <MapIcon size={16} /> Map
                 </button>
              </div>
            </div>

            {/* Search Bar (Hidden in Map Mode to save space, or kept?) - Kept for filtering map */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="text" 
                placeholder={activeTab === 'experiences' ? "Search experiences..." : "Search historical places..."}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-all text-stone-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results Header */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-stone-900">
                {activeTab === 'experiences' 
                  ? `${filteredExperiences.length} Experiences Found`
                  : `${filteredPlaces.length} Historical Places Found`
                }
              </h1>
              {activeTab === 'experiences' && selectedCategories.length > 0 && (
                <button 
                  onClick={() => setSelectedCategories([])} 
                  className="text-sm text-amber-700 font-medium hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Content Switcher */}
            {viewMode === 'map' ? (
              <div className="h-[600px] w-full bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 relative">
                 <HeritageMap 
                   locations={mapLocations} 
                   zoom={13}
                   center={mapLocations.length > 0 ? mapLocations[0].coordinates : undefined}
                 />
                 {mapLocations.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-[1000]">
                       <p className="font-bold text-stone-500">No locations found for your search.</p>
                    </div>
                 )}
              </div>
            ) : (
              <>
                {/* LIST VIEW CONTENT */}
                {activeTab === 'experiences' ? (
                  // EXPERIENCES GRID
                  filteredExperiences.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredExperiences.map((exp, idx) => (
                        <ExperienceCard 
                          key={exp.id} 
                          {...exp} 
                          index={idx}
                          onViewDetails={() => onViewExperience(exp)} 
                          onBook={() => onBookExperience(exp)}
                        />
                      ))}
                    </div>
                  ) : (
                    <EmptyState onClear={() => {
                      setSearchQuery('');
                      setSelectedCategories([]);
                      setDurationFilter('all');
                      setIsFamilyFriendly(false);
                    }} />
                  )
                ) : (
                  // PLACES GRID
                  filteredPlaces.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPlaces.map((place, idx) => (
                        <motion.div
                          key={place.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all"
                        >
                          <div className="h-56 overflow-hidden relative">
                             <img 
                               src={place.image} 
                               alt={place.name}
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                             <div className="absolute bottom-4 left-4 text-white">
                               <div className="flex items-center gap-1.5 text-xs font-medium bg-amber-600/90 w-fit px-2 py-0.5 rounded mb-1">
                                 <MapPin size={10} /> {place.location}
                               </div>
                               <h3 className="text-xl font-bold font-display">{place.name}</h3>
                             </div>
                          </div>
                          <div className="p-6">
                            <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                              {place.description}
                            </p>
                            {place.relatedRouteId && (
                               <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-lg w-fit">
                                 <Camera size={14} /> Part of Heritage Route
                               </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                     <EmptyState onClear={() => setSearchQuery('')} />
                  )
                )}
              </>
            )}

          </div>

        </div>
      </Section>
    </div>
  );
};

// Helper Components
const CheckIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const EmptyState = ({ onClear }: { onClear: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="py-20 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-300"
  >
    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
      <Search size={32} />
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-2">No results found</h3>
    <p className="text-stone-500 max-w-md mx-auto mb-6">
      We couldn't find any items matching your search. Try adjusting your terms.
    </p>
    <button 
      onClick={onClear}
      className="px-6 py-2 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors"
    >
      Clear Search
    </button>
  </motion.div>
);
