import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import imgImageLayyahDesert from "figma:asset/574007953c5b5490b810772ec110745deffd41da.png";

interface HeroProps {
  onExplore: () => void;
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onBook }) => {
  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgImageLayyahDesert}
          alt="Layyah Desert" 
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Welcome Badge */}
          <span className="inline-block py-2 px-8 rounded-full bg-[#fe9a00]/20 border border-[#fe9a00]/40 text-[#ffd230] text-sm md:text-base font-normal tracking-wide mb-8 backdrop-blur-sm shadow-sm">
            Welcome to Layyah
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold tracking-tight mb-8 leading-[1.1] md:leading-[1.1] text-white drop-shadow-xl">
            Discover <span className="text-[#fe9a00]">Heritage</span>, <br />
            <span className="md:whitespace-nowrap">Culture & Experiences</span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-[20px] text-[#e7e5e4] max-w-[672px] mx-auto mb-12 leading-[32px] font-normal">
            Immerse yourself in the spiritual shrines, vast deserts, and vibrant festivals of Layyah. 
            A journey through history awaits.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-white text-[#1c1917] rounded-full font-bold text-base hover:bg-stone-100 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center min-w-[235px]"
            >
              <Compass size={20} className="stroke-[1.5]" />
              Explore Experiences
            </button>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-[#e17100] text-white rounded-full font-bold text-base hover:bg-[#c26100] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center min-w-[249px]"
            >
              Book a Heritage Walk
              <ArrowRight size={20} className="stroke-[1.5]" />
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
        <span className="text-[12px] uppercase tracking-[1.2px] font-normal text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </div>
  );
};
