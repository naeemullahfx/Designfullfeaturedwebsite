import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from '@/app/components/Logo';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Explore', view: 'explore' },
    { name: 'Events', view: 'events' },
    { name: 'Heritage Walks', view: 'routes' },
    { name: 'Bookings', view: 'profile' },
  ];

  return (
    <>
      <motion.header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans",
          isScrolled 
            ? "bg-stone-900/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-800" 
            : "bg-gradient-to-b from-black/60 to-transparent py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <button 
            onClick={() => setView('home')}
            className="focus:outline-none hover:opacity-90 transition-opacity"
          >
            <Logo variant="light" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setView(link.view)}
                className={clsx(
                  "text-sm font-medium transition-all duration-300 relative group",
                  currentView === link.view 
                    ? "text-white" 
                    : "text-stone-300 hover:text-white"
                )}
              >
                {link.name}
                {currentView === link.view && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setView('profile')}
              className={clsx(
                "flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border",
                // Lighter profile button style as requested
                "bg-transparent border-white/20 text-white hover:bg-white/10"
              )}
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <User size={14} className="text-white" />
              </div>
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-stone-900/95 backdrop-blur-xl lg:hidden flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <Logo variant="light" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-400 hover:text-white p-2"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setView(link.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={clsx(
                    "text-2xl font-display font-bold transition-colors",
                    currentView === link.view ? "text-amber-500" : "text-stone-300 hover:text-white"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setView('profile');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-8 bg-amber-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-amber-700 transition-colors"
              >
                Access Profile
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
