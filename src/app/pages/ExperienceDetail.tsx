import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Star, Users, MapPin, ArrowRight, Check, Calendar, ChevronRight } from 'lucide-react';
import { Section } from '@/app/components/Section';

interface ExperienceDetailProps {
  experience: any;
  onBook: (bookingDetails?: { date: string; guests: number }) => void;
  onBack: () => void;
}

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience, onBook, onBack }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);

  if (!experience) return null;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb / Back Navigation */}
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors font-medium"
        >
          <ArrowRight size={18} className="rotate-180" /> Back to Explore
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Header Info */}
            <div>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                  {experience.category || 'Experience'}
                </span>
                {experience.rating && (
                  <span className="flex items-center gap-1 text-stone-600 text-sm font-medium bg-stone-100 px-3 py-1 rounded-full">
                    <Star size={14} fill="currentColor" className="text-amber-500" />
                    {experience.rating} (120+ reviews)
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-display">
                {experience.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-stone-500 text-base">
                <span className="flex items-center gap-2"><MapPin size={18} /> Layyah, Pakistan</span>
                <span className="flex items-center gap-2"><Clock size={18} /> {experience.duration}</span>
                {experience.familyFriendly && (
                  <span className="flex items-center gap-2"><Users size={18} /> Family Friendly</span>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={experience.image} 
                alt={experience.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Description */}
            <div className="prose prose-stone prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">About the Experience</h2>
              <p className="text-stone-600 leading-relaxed">
                {experience.description}
              </p>
              <p className="text-stone-600 leading-relaxed mt-4">
                Immerse yourself in the rich tapestry of Layyah's heritage. This journey is crafted 
                to connect you with the soul of the region—from its ancient spiritual sites to the 
                warm hospitality of its people. Every moment is a step back in time, guided by 
                local experts who call this land home.
              </p>
            </div>

            {/* Highlights */}
            {experience.highlights && (
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Experience Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {experience.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-stone-800 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery */}
            {experience.gallery && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {experience.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-sm group">
                      <img 
                        src={img} 
                        alt={`Gallery ${idx + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - STICKY BOOKING CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-100 p-6 md:p-8">
              
              {/* Price Header */}
              <div className="mb-6 pb-6 border-b border-stone-100">
                <p className="text-stone-500 text-sm font-medium mb-1">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-stone-900">{experience.price}</span>
                  <span className="text-stone-400">/ person</span>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-5 mb-8">
                
                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-800 block">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                    <input 
                      type="date" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-stone-700 font-medium"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Group Size */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-800 block">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                    <input 
                      type="number" 
                      min="1"
                      max="20"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-stone-700 font-medium"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    />
                  </div>
                </div>

                {/* Total Summary (Optional dynamic calculation if price was number, for now static text or simple calc logic could be added) */}
                
              </div>

              {/* Book Button */}
              <button 
                onClick={() => onBook({ date: selectedDate, guests })}
                className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 group"
              >
                Book Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-stone-500 text-xs">
                  <Check size={14} className="text-green-600" />
                  <span>Free cancellation up to 24h before</span>
                </div>
                <div className="flex items-center gap-3 text-stone-500 text-xs">
                  <Check size={14} className="text-green-600" />
                  <span>Instant confirmation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
