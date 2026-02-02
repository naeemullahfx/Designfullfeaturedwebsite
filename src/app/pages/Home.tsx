import React from 'react';
import { motion } from 'motion/react';
import { Section } from '@/app/components/Section';
import { Hero } from '@/app/components/Hero';
import { ExperienceCard } from '@/app/components/ExperienceCard';
import { Calendar, Map, Users, CheckCircle, ArrowRight, Sun, Moon } from 'lucide-react';
import { experiences, events, shrines } from '@/app/data';

interface HomeProps {
  setView: (view: string) => void;
  setExperience: (exp: any) => void;
}

export const Home: React.FC<HomeProps> = ({ setView, setExperience }) => {
  
  const handleBooking = (exp?: any) => {
    if (exp) setExperience(exp);
    setView('booking'); // Should go to booking flow
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <Hero onExplore={() => {
        document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
      }} onBook={() => setView('booking')} />

      {/* SECTION 2: ABOUT THE PLATFORM */}
      <Section className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">About Layyah Heritage</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Preserving Culture, Connecting Souls</h3>
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
            <h2 className="text-3xl font-bold text-stone-900 mb-2">Featured Experiences</h2>
            <p className="text-stone-600">Curated adventures for every traveler.</p>
          </div>
          <button onClick={() => setView('explore')} className="hidden md:flex items-center gap-2 text-amber-700 font-semibold hover:gap-3 transition-all">
            View All <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard 
              key={exp.id} 
              {...exp} 
              index={idx}
              onViewDetails={() => handleBooking(exp)} 
            />
          ))}
        </div>
      </Section>

      {/* SECTION 4: HOW BOOKING WORKS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">How It Works</h2>
          <p className="text-stone-600">Your journey to Layyah in 4 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-stone-200 -z-10" />
          
          {[
            { icon: <Map size={24} />, title: "Explore", desc: "Browse heritage walks and desert safaris." },
            { icon: <Calendar size={24} />, title: "Select Date", desc: "Choose your preferred date and group size." },
            { icon: <Users size={24} />, title: "Review", desc: "Check details and confirm your booking." },
            { icon: <CheckCircle size={24} />, title: "Confirmed", desc: "Receive your digital ticket instantly." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 border-4 border-white shadow-sm flex items-center justify-center text-amber-600 mb-4 z-10">
                {step.icon}
              </div>
              <h4 className="font-bold text-stone-900 mb-2">{step.title}</h4>
              <p className="text-sm text-stone-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5: EVENTS & URS */}
      <Section id="events-section" bg="stone">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <span className="text-emerald-700 font-bold tracking-wider text-sm uppercase mb-2 block">Cultural Calendar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Upcoming Events & Urs</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Layyah comes alive during its festivals. From the spiritual devotion of the Urs to the vibrant colors of the Mela, witness the true soul of the region.
            </p>
            <button onClick={() => setView('events')} className="px-6 py-3 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-900 transition-colors">
              View Event Calendar
            </button>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {events.map((evt) => (
              <div key={evt.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden relative">
                   <img src={evt.image} alt={evt.title} className="w-full h-full object-cover" />
                   <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                     Upcoming
                   </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-stone-900 mb-1">{evt.title}</h4>
                  <p className="text-emerald-700 text-sm font-medium mb-3">{evt.date}</p>
                  <p className="text-stone-500 text-sm line-clamp-2">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6: SHRINES */}
      <Section bg="dark">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider text-sm uppercase mb-2 block">Spiritual Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sacred Shrines of Layyah</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Discover the resting places of great Sufi saints who shaped the spiritual landscape of the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shrines.map((shrine) => (
            <div key={shrine.id} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
              <img src={shrine.image} alt={shrine.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{shrine.name}</h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {shrine.description}
                </p>
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 7: HERITAGE WALK ROUTES */}
      <Section id="walks-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Heritage Walk Routes</h2>
          <p className="text-stone-600">Follow the path of history.</p>
        </div>

        <div className="space-y-8">
          {[
            { name: "Karor Lal Esan Spiritual Walk", dist: "2.5 km", time: "2 Hours", points: ["Main Gate", "Courtyard", "Old Bazaar", "Shrine Complex"] },
            { name: "Layyah Old City Walk", dist: "3.0 km", time: "2.5 Hours", points: ["Railway Station", "Grain Market", "Colonial Library", "City Park"] },
            { name: "Fatehpur Sufi & Desert Walk", dist: "4.0 km", time: "3 Hours", points: ["Desert Edge", "Date Farms", "Darbar Sharif", "Sunset Point"] }
          ].map((route, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 rounded-xl p-6 md:p-8 hover:border-amber-200 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{route.name}</h4>
                  <div className="flex gap-4 text-sm text-stone-500">
                    <span>{route.dist}</span>
                    <span>•</span>
                    <span>{route.time}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3 flex items-center justify-between relative">
                   {/* Line */}
                   <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-stone-300 -z-10 hidden md:block" />
                   
                   {route.points.map((pt, pIdx) => (
                     <div key={pIdx} className="flex flex-col items-center gap-2 bg-stone-50 md:bg-transparent z-10">
                       <div className="w-3 h-3 rounded-full bg-stone-400 ring-4 ring-stone-50" />
                       <span className="text-xs font-medium text-stone-600 text-center">{pt}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 8: COMMUNITY & PURPOSE */}
      <Section bg="stone" className="text-center">
        <div className="max-w-3xl mx-auto">
          <Users size={48} className="text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Community-Led Tourism</h2>
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

      {/* SECTION 9: CALL TO ACTION */}
      <Section bg="dark" className="text-center relative overflow-hidden">
        {/* Decorative pattern/blob if possible, or just gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-amber-600 rounded-full blur-3xl mix-blend-screen" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the Real Layyah</h2>
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
