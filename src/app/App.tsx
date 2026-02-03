import React, { useState, useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Booking } from '@/app/pages/Booking';
import { Profile } from '@/app/pages/Profile';
import { Explore } from '@/app/pages/Explore';
import { ExperienceDetail } from '@/app/pages/ExperienceDetail';
import { Events } from '@/app/pages/Events';
import { EventDetail } from '@/app/pages/EventDetail';
import { Shrines } from '@/app/pages/Shrines';
import { ShrineDetail } from '@/app/pages/ShrineDetail';
import { HeritageRoutes } from '@/app/pages/HeritageRoutes';
import { HeritageRouteDetail } from '@/app/pages/HeritageRouteDetail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedShrine, setSelectedShrine] = useState<any>(null);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState<{date?: string, guests?: number} | null>(null);

  // Handle scrolling for section-based nav items
  useEffect(() => {
    if (['walks'].includes(currentView)) {
      const targetView = 'home';
      if (currentView !== targetView) {
          setCurrentView('home');
          setTimeout(() => {
            const elementId = 'walks-section';
            const el = document.getElementById(elementId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      }
    }
  }, [currentView]);

  const handleViewExperience = (exp: any) => {
    setSelectedExperience(exp);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleViewEvent = (evt: any) => {
    setSelectedEvent(evt);
    setCurrentView('event-detail');
    window.scrollTo(0, 0);
  };

  const handleViewShrine = (shrine: any) => {
    setSelectedShrine(shrine);
    setCurrentView('shrine-detail');
    window.scrollTo(0, 0);
  };

  const handleViewRoute = (route: any) => {
    setSelectedRoute(route);
    setCurrentView('route-detail');
    window.scrollTo(0, 0);
  };

  const handleBookExperience = (exp?: any, details?: { date: string; guests: number }) => {
    if (exp) setSelectedExperience(exp);
    if (details) setBookingDetails(details);
    else setBookingDetails(null);
    
    setCurrentView('booking');
    window.scrollTo(0, 0);
  };

  // Helper for cross-linking
  const handleNavigateFromRelated = (id: string, type: 'experience' | 'shrine' | 'route') => {
    import('@/app/data').then(({ experiences, shrines, heritageRoutes }) => {
       if (type === 'experience') {
         const exp = experiences.find(e => e.id === id);
         if (exp) handleViewExperience(exp);
       } else if (type === 'shrine') {
         const shrine = shrines.find(s => s.id === id);
         if (shrine) handleViewShrine(shrine);
       } else if (type === 'route') {
         const route = heritageRoutes.find(r => r.id === id);
         if (route) handleViewRoute(route);
       }
    });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            setView={setCurrentView} 
            setExperience={setSelectedExperience} // Kept for legacy internal logic, but effectively replaced by onView/onBook
            onViewExperience={handleViewExperience}
            onBookExperience={handleBookExperience}
          />
        );
      case 'explore':
        return (
          <Explore 
            onViewExperience={handleViewExperience} 
            onBookExperience={handleBookExperience}
          />
        );
      case 'events':
        return <Events onViewEvent={handleViewEvent} />;
      case 'shrines':
        return <Shrines onViewShrine={handleViewShrine} />;
      case 'routes':
        return <HeritageRoutes onViewRoute={handleViewRoute} />;
      case 'detail':
        return (
          <ExperienceDetail 
            experience={selectedExperience} 
            onBook={(details) => handleBookExperience(selectedExperience, details)} 
            onBack={() => setCurrentView('explore')} 
          />
        );
      case 'event-detail':
        return (
          <EventDetail 
            event={selectedEvent} 
            onBack={() => setCurrentView('events')}
            onNavigateToRelated={(id, type) => handleNavigateFromRelated(id, type)}
          />
        );
      case 'shrine-detail':
        return (
          <ShrineDetail 
            shrine={selectedShrine} 
            onBack={() => setCurrentView('shrines')}
          />
        );
      case 'route-detail':
        return (
          <HeritageRouteDetail 
            route={selectedRoute} 
            onBack={() => setCurrentView('routes')}
            onNavigateToExperience={(id) => handleNavigateFromRelated(id, 'experience')}
          />
        );
      case 'booking':
        return (
          <Booking 
            initialExperience={selectedExperience}
            initialDate={bookingDetails?.date}
            initialGuests={bookingDetails?.guests} 
            onClose={() => setCurrentView('home')} 
          />
        );
      case 'profile':
        return <Profile setView={setCurrentView} />;
      default:
        return (
          <Home 
            setView={setCurrentView} 
            setExperience={setSelectedExperience} 
            onViewExperience={handleViewExperience}
            onBookExperience={handleBookExperience}
          />
        );
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
