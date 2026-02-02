import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, User, Calendar, MapPin, Search } from 'lucide-react';
import clsx from 'clsx';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Explore', view: 'explore' }, // For now maps to home or a section
    { name: 'Events', view: 'events' },
    { name: 'Heritage Walks', view: 'walks' },
    { name: 'Bookings', view: 'profile' }, // Or separate booking list
  ];

  return (
    <motion.nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <div className={clsx("font-bold text-xl tracking-tight", isScrolled ? "text-stone-900" : "text-white")}>
            Layyah Heritage
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setView(link.view)}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-amber-600",
                currentView === link.view 
                  ? "text-amber-600 font-semibold" 
                  : isScrolled ? "text-stone-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setView('profile')}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
              isScrolled 
                ? "bg-stone-100 text-stone-900 hover:bg-stone-200" 
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            )}
          >
            <User size={16} />
            <span>Profile</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
