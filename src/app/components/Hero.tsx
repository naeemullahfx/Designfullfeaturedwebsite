import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onBook }) => {
  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1721327473745-f70f87ba675e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBqZWVwJTIwc2FmYXJpJTIwcGFraXN0YW58ZW58MXx8fHwxNzcwMDUzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Layyah Desert" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Welcome to Layyah
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            Discover <span className="text-amber-500">Heritage</span>, <br />
            Culture & Experiences
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Immerse yourself in the spiritual shrines, vast deserts, and vibrant festivals of Layyah. 
            A journey through history awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-white text-stone-900 rounded-full font-semibold hover:bg-stone-100 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Compass size={20} />
              Explore Experiences
            </button>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book a Heritage Walk
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};
