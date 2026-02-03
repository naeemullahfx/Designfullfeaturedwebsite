import React from 'react';
import { motion } from 'motion/react';
import { Section } from '@/app/components/Section';
import { Hero } from '@/app/components/Hero';
import { ExperienceCard } from '@/app/components/ExperienceCard';
import { HeritageMap } from '@/app/components/map/HeritageMap';
import { Calendar, Users, CheckCircle, ArrowRight, Sun, Moon, ClipboardCheck, Compass, Music, Utensils, HeartHandshake, MapPin, Clock, Footprints, Flame } from 'lucide-react';
import { experiences, events, shrines, culture, heritageRoutes, places } from '@/app/data';
import clsx from 'clsx';

interface HomeProps {
  setView: (view: string) => void;
  onViewExperience: (exp: any) => void;
  onBookExperience: (exp: any) => void;
}

export const Home: React.FC<HomeProps> = ({ setView, onViewExperience, onBookExperience }) => {
  
  // Fallback image logic
  const getEventImage = (img?: string) => {
    return img && img.length > 0 ? img : 'https://images.unsplash.com/photo-1541362086580-c08122a27547?auto=format&fit=crop&q=80&w=1080';
  };

  // Helper to find related experience for booking
  const getRelatedExperience = (routeId: string) => {
    const route = heritageRoutes.find(r => r.id === routeId);
    if (!route?.relatedExperienceId) return null;
    return experiences.find(e => e.id === route.relatedExperienceId);
  };

  // Featured Routes Data
  const featuredRoutes = [
    {
      id: 'route-1',
      title: "Karor Lal Esan Spiritual Walk",
      theme: "Spiritual",
      themeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      bgColor: "bg-emerald-50/50 hover:bg-emerald-50",
      description: "Walk through sacred spaces, old bazaars, and the historic shrine of Hazrat Lal Esan.",
      distance: "2.5 km",
      duration: "2 Hours",
      stops: ["Main Gate", "Courtyard", "Old Bazaar", "Shrine Complex"],
      ctaText: "Book Spiritual Walk"
    },
    {
      id: 'route-3',
      title: "Layyah Old City Walk",
      theme: "Cultural",
      themeColor: "bg-blue-100 text-blue-800 border-blue-200",
      bgColor: "bg-blue-50/50 hover:bg-blue-50",
      description: "Discover colonial-era buildings, markets, and stories of old Layyah.",
      distance: "3.0 km",
      duration: "2.5 Hours",
      stops: ["Railway Station", "Grain Market", "Colonial Library", "City Park"],
      ctaText: "Book City Walk"
    },
    {
      id: 'route-2',
      title: "Fatehpur Sufi & Desert Walk",
      theme: "Desert + Spiritual",
      themeColor: "bg-amber-100 text-amber-800 border-amber-200",
      bgColor: "bg-amber-50/50 hover:bg-amber-50",
      description: "A journey from desert edges to sacred shrines, ending at a golden sunset point.",
      distance: "4.0 km",
      duration: "3 Hours",
      stops: ["Desert Edge", "Date Farms", "Darbar Sharif", "Sunset Point"],
      ctaText: "Book Desert Walk"
    }
  ];

  // Map Preview Data
  const previewMapLocations = [
    ...shrines.slice(0, 2).map(s => ({ ...s, type: 'Shrine', title: s.name })),
    ...experiences.slice(0, 2).map(e => ({ ...e, type: 'Adventure', title: e.title })),
    ...places.slice(0, 2).map(p => ({ ...p, type: 'Cultural', title: p.name }))
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <Hero 
        onExplore={() => {
          document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onBook={() => setView('booking')} 
      />

      {/* SECTION 2: ABOUT THE PLATFORM */}
      <Section className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">About Layyah Heritage</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-display">Preserving Culture, Connecting Souls</h3>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Layyah is a land of spiritual shrines, desert mysteries, and vibrant cultural festivals. 
            Our platform connects you with authentic local experiences, from the vast dunes of Choubara 
            to the sacred Urs of Hazrat Lal Esan. Join us in preserving our heritage through responsible tourism.
          </p>
          <div className="flex justify-center gap-8 text-stone-500 text-sm font-medium">
            <span className="flex items-center gap-2"><Sun size={18} className="text-amber-500" /> Desert Safaris</span>
            <span className="flex items-center gap-2"><Moon size={18} className="text-emerald-600" /> Spiritual Tours</span>
            <span className="flex items-center gap-2"><Users size={18} className="text-blue-500" /> Community Events</span>
          </div>
        </motion.div>
      </Section>

      {/* SECTION 3: FEATURED EXPERIENCES */}
      <Section id="experiences" bg="stone">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-2 font-display">Featured Experiences</h2>
            <p className="text-stone-600">Curated adventures for every traveler.</p>
          </div>
          <button onClick={() => setView('explore')} className="hidden md:flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all">
            View All <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <ExperienceCard 
              key={exp.id} 
              {...exp} 
              index={idx}
              onViewDetails={() => onViewExperience(exp)} 
              onBook={() => onBookExperience(exp)}
            />
          ))}
        </div>
      </Section>

      {/* SECTION 4: HOW BOOKING WORKS */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-display">How It Works</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Your journey to discovering Layyah begins here. We've made it simple to explore, book, and experience the heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative px-4">
          {/* Journey Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-stone-200 via-amber-200 to-stone-200 rounded-full -z-10 transform translate-y-1 mx-16" />
          
          {[
            { 
              icon: <Compass size={28} />, 
              title: "Explore", 
              desc: "Discover heritage walks, desert safaris, shrines, and cultural events.",
              bg: "bg-amber-50",
              text: "text-amber-700",
              border: "border-amber-100"
            },
            { 
              icon: <Calendar size={28} />, 
              title: "Plan Your Visit", 
              desc: "Choose your preferred date and group size with transparent pricing.",
              bg: "bg-white",
              text: "text-stone-700",
              border: "border-stone-200"
            },
            { 
              icon: <ClipboardCheck size={28} />, 
              title: "Review & Confirm", 
              desc: "Review your experience details and confirm your booking securely.",
              bg: "bg-white",
              text: "text-stone-700",
              border: "border-stone-200"
            },
            { 
              icon: <CheckCircle size={28} />, 
              title: "Experience Layyah", 
              desc: "Your booking is confirmed. Get ready for an authentic cultural journey.",
              bg: "bg-stone-900",
              text: "text-amber-500",
              border: "border-stone-800",
              isFinal: true
            }
          ].map((step, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col items-center text-center`}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 bg-white text-stone-400 text-xs font-bold px-2 py-0.5 rounded-full border border-stone-200 shadow-sm z-20">
                Step {idx + 1}
              </div>

              {/* Icon Circle */}
              <div className={`
                w-24 h-24 rounded-full flex items-center justify-center mb-6 
                transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg
                ${step.isFinal ? 'bg-stone-900 shadow-xl shadow-amber-900/20' : 'bg-white shadow-md border-4 border-stone-50'}
              `}>
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${step.isFinal ? 'bg-stone-800 text-amber-500' : 'bg-stone-50 text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-600'}
                  transition-colors duration-300
                `}>
                  {step.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className={`
                w-full p-6 rounded-2xl border transition-all duration-300
                ${step.isFinal ? 'bg-stone-900 border-stone-800 shadow-xl' : 'bg-white border-stone-100 group-hover:border-amber-200 group-hover:shadow-lg'}
              `}>
                <h4 className={`text-xl font-bold mb-3 font-display ${step.isFinal ? 'text-white' : 'text-stone-900'}`}>
                  {step.title}
                </h4>
                <p className={`text-sm leading-relaxed ${step.isFinal ? 'text-stone-400' : 'text-stone-500'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5: EVENTS & URS */}
      <Section id="events-section" className="bg-[#FDFBF7]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3 block">
            Cultural Calendar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-display">
            Upcoming Events & Urs
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Seasonal festivals, spiritual gatherings, and cultural celebrations of Layyah.
          </p>
        </div>
          
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt, idx) => {
             const displayImage = getEventImage(evt.image);
             const isFallback = !evt.image;

             return (
              <motion.div 
                key={evt.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => setView('events')}
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative shrink-0">
                    <img 
                      src={displayImage} 
                      alt={evt.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Cultural Fallback Overlay */}
                    {isFallback && (
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                        Representative Cultural Image
                      </div>
                    )}
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-900/20 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                      <Calendar size={12} className="text-white" />
                      {evt.date}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-wider mb-3">
                     <span className="w-2 h-2 rounded-full bg-amber-500" />
                     {evt.season}
                  </div>
                  
                  <h4 className="font-bold text-2xl text-stone-900 mb-3 font-display leading-tight group-hover:text-amber-700 transition-colors">
                    {evt.title}
                  </h4>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                    {evt.description}
                  </p>

                  <div className="pt-6 border-t border-stone-100 mt-auto flex items-center justify-between group/btn">
                    <span className="text-sm font-bold text-stone-900 group-hover/btn:text-amber-700 transition-colors">
                      View Details
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover/btn:bg-amber-100 group-hover/btn:text-amber-700 transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
             );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setView('events')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-stone-200 rounded-full font-bold text-stone-600 hover:text-amber-700 hover:border-amber-200 transition-all shadow-sm hover:shadow-md"
          >
            View Full Calendar
            <ArrowRight size={18} />
          </button>
        </div>
      </Section>

      {/* SECTION 6: SHRINES */}
      <Section bg="dark">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider text-sm uppercase mb-2 block">Spiritual Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Sacred Shrines of Layyah</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Discover the resting places of great Sufi saints who shaped the spiritual landscape of the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shrines.slice(0, 3).map((shrine) => (
            <div 
              key={shrine.id} 
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setView('shrines')}
            >
              <img src={shrine.image} alt={shrine.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{shrine.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-3">
                  {shrine.description}
                </p>
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button onClick={() => setView('shrines')} className="text-white border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors">
               Explore all shrines →
             </button>
        </div>
      </Section>

      {/* SECTION 7: HERITAGE WALK ROUTES */}
      <Section id="walks-section">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Guided Paths
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-display">
            Heritage Walks
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Follow the path of history through curated walking tours.
          </p>
        </div>

        <div className="space-y-8">
          {featuredRoutes.map((route, idx) => (
            <motion.div 
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={clsx(
                "rounded-2xl p-6 md:p-8 border border-stone-200 transition-all duration-300 group cursor-pointer",
                route.bgColor,
                "hover:shadow-lg hover:border-amber-200 hover:-translate-y-1"
              )}
              onClick={() => {
                setView('routes');
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* LEFT: INFO */}
                <div className="lg:w-2/5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                     <span className={clsx("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border", route.themeColor)}>
                        {route.theme}
                     </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-display group-hover:text-amber-800 transition-colors">
                    {route.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 text-sm font-medium text-stone-600 mb-4">
                    <span className="flex items-center gap-2"><MapPin size={16} /> {route.distance}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> {route.duration}</span>
                  </div>
                  
                  <p className="text-stone-700 leading-relaxed mb-8">
                    {route.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const relatedExp = getRelatedExperience(route.id);
                        if (relatedExp) {
                            onBookExperience(relatedExp);
                        } else {
                            setView('booking');
                        }
                      }}
                      className="px-6 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-md text-sm flex items-center gap-2"
                    >
                      {route.ctaText} <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={(e) => {
                         e.stopPropagation();
                         setView('routes');
                      }}
                      className="px-6 py-3 bg-white border border-stone-300 text-stone-700 rounded-xl font-bold hover:bg-stone-50 transition-colors text-sm"
                    >
                      View Walk Details
                    </button>
                  </div>
                </div>
                
                {/* RIGHT: TIMELINE */}
                <div className="lg:w-3/5 relative pt-4 pb-2">
                  <div className="h-full bg-white/50 rounded-xl border border-stone-100/50 p-6 backdrop-blur-sm">
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Footprints size={14} /> Route Timeline
                      </h4>
                      
                      <div className="relative flex justify-between items-center px-4 md:px-8 mt-8">
                          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-stone-200 rounded-full -z-10" />
                          
                          {route.stops.map((stop, i) => (
                             <div key={i} className="flex flex-col items-center gap-3 relative group/stop">
                                <div className={clsx(
                                  "w-4 h-4 rounded-full border-2 bg-white transition-all duration-300 z-10",
                                  i === route.stops.length - 1 
                                    ? "w-6 h-6 border-amber-500 bg-amber-100 shadow-[0_0_0_4px_rgba(245,158,11,0.2)]" 
                                    : "border-stone-400 group-hover/stop:border-amber-400 group-hover/stop:scale-125"
                                )} />
                                <span className={clsx(
                                  "text-xs font-bold text-center absolute top-8 w-24 transition-colors",
                                  i === route.stops.length - 1 ? "text-amber-700" : "text-stone-500 group-hover/stop:text-stone-800"
                                )}>
                                  {stop}
                                </span>
                             </div>
                          ))}
                      </div>
                      
                      <div className="mt-16 flex items-center justify-end gap-2 text-xs font-medium text-amber-700 bg-amber-50 w-fit ml-auto px-3 py-1 rounded-full border border-amber-100">
                          <CheckCircle size={12} />
                          Final Destination Highlight
                      </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button onClick={() => setView('routes')} className="text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
               Explore all guided routes
             </button>
        </div>
      </Section>

      {/* SECTION 8: CULTURAL IDENTITY */}
      <Section bg="stone" className="overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3 block">
                 Traditions & Lifestyle
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-display">
                 The Soul of Thal
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed italic border-l-4 border-amber-400 pl-6">
                "The folklore of South Punjab weaves tales of mysticism and bravery. The desert winds of Thal carry the echoes of Sufi poetry and the ancient songs of camel herders, keeping oral traditions alive."
              </p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&q=80&w=1080" 
                    alt="Thal Desert Life" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                    <p className="text-white/90 text-sm font-medium italic">
                      Life and faith intertwined in Thal.
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-2xl hover:bg-amber-50 transition-colors">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-6">
                   <Sun size={24} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-display">Desert Lifestyle</h3>
                <p className="text-stone-600 leading-relaxed">
                   The nomadic way of life in Thal is characterized by resilience and hospitality. The 'Thalochis' have a deep bond with their camels and the sandy terrain.
                </p>
             </div>

             <div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl hover:bg-stone-100 transition-colors">
                <div className="w-12 h-12 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center mb-6">
                   <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-display">Traditional Cuisine</h3>
                <p className="text-stone-600 leading-relaxed">
                   From earthy Sarson da Saag to sweet Sohan Halwa, the flavors of Layyah are cooked with love and served with unmatched village hospitality.
                </p>
             </div>
          </div>

          <div className="text-center bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
             
             <h3 className="text-3xl font-bold text-stone-900 mb-8 font-display">
               Experience Thal, Not Just Read About It
             </h3>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                   onClick={() => setView('routes')}
                   className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-amber-700 transition-colors shadow-lg"
                >
                   Explore Heritage Walks
                </button>
                <button 
                   onClick={() => setView('events')}
                   className="px-8 py-3 bg-white text-stone-700 border border-stone-300 rounded-full font-bold hover:bg-stone-50 hover:border-stone-400 transition-colors"
                >
                   View Cultural Events
                </button>
             </div>
          </div>

        </div>
      </Section>

      {/* SECTION MAP: EXPLORE LAYYAH */}
      <Section className="bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3 block">
              Interactive Guide
            </span>
            <h2 className="text-4xl font-bold text-stone-900 mb-4 font-display">
              Explore Layyah on the Map
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Find shrines, heritage walks, and desert experiences near you.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 h-[500px]">
             <HeritageMap 
               locations={previewMapLocations} 
               interactive={false} // Static preview
               className="h-full w-full"
               zoom={12}
             />
             
             {/* Overlay Gradient & CTA */}
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
                <button 
                  onClick={() => setView('explore')}
                  className="px-8 py-3 bg-white text-stone-900 rounded-full font-bold shadow-lg hover:bg-amber-500 hover:text-white transition-all flex items-center gap-2 transform hover:scale-105"
                >
                  <MapPin size={20} /> Open Interactive Map
                </button>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 9: COMMUNITY & PURPOSE */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <Users size={48} className="text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-stone-900 mb-6 font-display">Community-Led Tourism</h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            Every booking supports local guides, artisans, and heritage preservation efforts. 
            We are a community-first platform dedicated to showing the world the real Layyah while 
            empowering our people.
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-1">50+</div>
              <div className="text-sm text-stone-500">Local Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-1">100%</div>
              <div className="text-sm text-stone-500">Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-1">5k+</div>
              <div className="text-sm text-stone-500">Happy Travelers</div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 10: CALL TO ACTION */}
      <Section bg="dark" className="text-center relative overflow-hidden">
        {/* Decorative pattern/blob if possible, or just gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-amber-600 rounded-full blur-3xl mix-blend-screen" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Experience the Real Layyah</h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Book your heritage walk today and step into a world of history and spirituality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button 
               onClick={() => setView('explore')}
               className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
             >
               Explore Experiences
             </button>
             <button 
               onClick={() => setView('booking')}
               className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/50 w-full sm:w-auto"
             >
               Book Now
             </button>
          </div>
        </div>
      </Section>
    </div>
  );
};
