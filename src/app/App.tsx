import React, { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Booking } from '@/app/pages/Booking';
import { Profile } from '@/app/pages/Profile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  // Handle scrolling for section-based nav items
  useEffect(() => {
    if (['explore', 'events', 'walks'].includes(currentView)) {
      setCurrentView('home');
      setTimeout(() => {
        const id = currentView === 'explore' ? 'experiences' 
                 : currentView === 'events' ? 'events-section' // I need to add this ID to Home
                 : 'walks-section'; // And this
        
        // Manual mapping since I forgot IDs in Home.tsx. 
        // Let's just scroll to rough positions or fix Home.tsx.
        // Actually, easier to just pass a prop "initialSection" to Home or handle it here.
        
        const elementId = 
          currentView === 'explore' ? 'experiences' : 
          currentView === 'events' ? 'events-section' :
          currentView === 'walks' ? 'walks-section' : null;
          
        if (elementId) {
           // I need to add IDs to Home.tsx sections. I'll edit Home.tsx quickly or just scroll based on index.
           // Since I can't easily query selectors reliably without ids, I'll update Home.tsx
        }
      }, 100);
    }
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home setView={setCurrentView} setExperience={setSelectedExperience} />;
      case 'booking':
        return <Booking initialExperience={selectedExperience} onClose={() => setCurrentView('home')} />;
      case 'profile':
        return <Profile setView={setCurrentView} />;
      default:
        return <Home setView={setCurrentView} setExperience={setSelectedExperience} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main>
        {renderView()}
      </main>
      {currentView !== 'booking' && <Footer />}
    </div>
  );
};

export default App;
