import React from 'react';
import { Clock, Star, ArrowUpRight, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceCardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  duration?: string;
  rating?: number;
  onViewDetails: () => void;
  onBook: () => void;
  index?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, image, description, price, duration, rating, onViewDetails, onBook, index = 0 
}) => {
  return (
    <motion.div 
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div 
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={onViewDetails}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        {price && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-stone-900 font-bold text-sm">
            {price}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3 text-stone-500 text-sm">
          {duration && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          )}
          {rating && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={14} fill="currentColor" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        
        <h3 
          className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors cursor-pointer"
          onClick={onViewDetails}
        >
          {title}
        </h3>
        
        <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button 
            onClick={onViewDetails}
            className="px-4 py-3 border border-stone-200 rounded-xl text-stone-700 font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-2 text-sm"
          >
            View Experience
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onBook();
            }}
            className="px-4 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-lg"
          >
            Book Now
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
