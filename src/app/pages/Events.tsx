import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Info, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { events } from '@/app/data';
import clsx from 'clsx';
import { Section } from '@/app/components/Section';
import { HeritageMap } from '@/app/components/map/HeritageMap';

interface EventsProps {
  onViewEvent: (event: any) => void;
}

export const Events: React.FC<EventsProps> = ({ onViewEvent }) => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Spring', 'Autumn', 'Religious'];

  const filteredEvents = events.filter(evt => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Religious') return evt.category === 'Religious';
    return evt.season.includes(activeTab); // Handles "Spring · Cultural"
  });

  // Fallback image logic
  const getEventImage = (img?: string) => {
    return img && img.length > 0 ? img : 'https://images.unsplash.com/photo-1541362086580-c08122a27547?auto=format&fit=crop&q=80&w=1080';
  };

  // Prepare Map Locations
  const mapLocations = filteredEvents.map(evt => ({
    id: evt.id,
    title: evt.title,
    coordinates: evt.coordinates || { lat: 30.9693, lng: 70.9428 },
    type: 'Event',
    image: getEventImage(evt.image),
    description: evt.date,
    onClick: () => onViewEvent(evt)
  }));

  return (
    <div className="min-h-screen bg-white pt-20">
      <Section className="!pb-0">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Cultural Calendar
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">
            Events & Festivals
          </h1>
          <p className="text-stone-600 text-lg">
            Immerse yourself in the vibrant traditions of Layyah. From spiritual Urs to harvest festivals, 
            experience the pulse of our heritage.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 px-4">
          <div className="flex bg-stone-100 p-1.5 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                  activeTab === tab
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-col gap-8">
          
          {/* Event List - Full Width */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-stone-900">
                {filteredEvents.length} Upcoming Events
              </h2>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((evt, idx) => {
                  const displayImage = getEventImage(evt.image);
                  const isFallback = !evt.image;

                  return (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                      onClick={() => onViewEvent(evt)}
                    >
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <img
                          src={displayImage}
                          alt={evt.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Date Badge */}
                        <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                          <Calendar size={12} className="text-white" />
                          {evt.date}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-wider mb-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          {evt.season}
                        </div>
                        
                        <h3 className="text-xl font-bold text-stone-900 mb-2 font-display group-hover:text-amber-700 transition-colors">
                          {evt.title}
                        </h3>
                        
                        <div className="flex items-start gap-2 mb-4">
                          <Sparkles size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-stone-600 text-xs leading-relaxed italic line-clamp-2">
                            "{evt.culturalNote}"
                          </p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-stone-900 font-semibold group-hover:text-amber-700 transition-colors">
                          <span className="text-xs font-bold">View Details</span>
                          <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                            <ArrowRight size={12} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                <p className="text-stone-500">No events found for this category.</p>
                <button 
                  onClick={() => setActiveTab('All')}
                  className="mt-4 text-amber-700 font-medium hover:underline"
                >
                  View all events
                </button>
              </div>
            )}
          </div>

        </div>
      </Section>

      {/* Map Section - Below List */}
      <Section className="pt-0 pb-20">
        <div className="w-full">
          <div className="bg-stone-900 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <MapPin size={18} className="text-amber-500" /> Event Map
            </h3>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">2026 Locations</span>
          </div>
          <div className="h-[600px] w-full bg-stone-100 rounded-b-2xl overflow-hidden border border-stone-200 shadow-md">
            <HeritageMap 
              locations={mapLocations}
              zoom={11}
              center={{ lat: 31.0500, lng: 71.0500 }} // Centered to show all Layyah district
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
