import React from 'react';
import { Calendar, MapPin, ArrowRight, BookOpen, Sparkles, Heart, Share2, ArrowLeft, Plus } from 'lucide-react';
import { experiences, shrines } from '@/app/data';

interface EventDetailProps {
  event: any;
  onBack: () => void;
  onNavigateToRelated: (id: string, type: 'experience' | 'shrine') => void;
}

export const EventDetail: React.FC<EventDetailProps> = ({ event, onBack, onNavigateToRelated }) => {
  if (!event) return null;

  // Resolve related item
  let relatedItem = null;
  let relatedType: 'experience' | 'shrine' | null = null;

  if (event.relatedId) {
    relatedItem = experiences.find(e => e.id === event.relatedId);
    if (relatedItem) relatedType = 'experience';
    else {
      relatedItem = shrines.find(s => s.id === event.relatedId);
      if (relatedItem) relatedType = 'shrine';
    }
  }

  const handleAddToCalendar = () => {
    // In a real app, this would generate an .ics file or link to Google Calendar
    alert(`Added "${event.title}" to your calendar!`);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Navigation */}
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Back to Events
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                  {event.season}
                </span>
                <span className="flex items-center gap-1 text-stone-600 text-sm font-medium">
                  <Calendar size={16} /> {event.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-display leading-tight">
                {event.title}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                {event.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-12">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* History */}
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                  <BookOpen className="text-amber-600" /> History & Origins
                </h2>
                <div className="prose prose-stone prose-lg text-stone-600">
                  <p>{event.history}</p>
                </div>
              </section>

              {/* Significance */}
              <section className="bg-stone-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <h2 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Heart className="text-amber-600" size={20} /> Why it's Special
                </h2>
                <p className="text-stone-700 italic text-lg">
                  "{event.significance}"
                </p>
              </section>

              {/* What Happens (Activities) */}
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                  <Sparkles className="text-amber-600" /> What to Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.activities?.map((activity: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <span className="font-medium text-stone-800">{activity}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-100 p-8 sticky top-28">
              <h3 className="text-lg font-bold text-stone-900 mb-6 border-b border-stone-100 pb-4">
                Event Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">Date</label>
                  <p className="text-stone-800 font-medium">{event.date}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">Location</label>
                  <p className="text-stone-800 font-medium flex items-center gap-2">
                    <MapPin size={16} className="text-stone-400" /> Layyah Region
                  </p>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">Entry</label>
                  <p className="text-stone-800 font-medium">Free & Open to Public</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 space-y-3">
                <button 
                  onClick={handleAddToCalendar}
                  className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Plus size={18} /> Add to Calendar
                </button>
                <button className="w-full py-3 bg-stone-50 text-stone-600 rounded-xl font-semibold hover:bg-stone-100 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={18} /> Share Event
                </button>
              </div>
            </div>

            {/* Related Experience Card */}
            {relatedItem && (
              <div className="bg-amber-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
                
                <h3 className="relative z-10 text-lg font-bold mb-2">Experience the Heritage</h3>
                <p className="relative z-10 text-amber-200 text-sm mb-6">
                  Want to learn more? Join our guided tour connected to this event.
                </p>

                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/10">
                  <div className="flex gap-4 items-center">
                    <img 
                      src={relatedItem.image} 
                      alt={relatedItem.title || relatedItem.name} 
                      className="w-12 h-12 rounded-lg object-cover" 
                    />
                    <div>
                      <p className="font-bold text-sm line-clamp-1">{relatedItem.title || relatedItem.name}</p>
                      <p className="text-xs text-amber-200">View Details</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigateToRelated(relatedItem.id, relatedType!)}
                  className="relative z-10 w-full py-3 bg-white text-amber-900 rounded-xl font-bold hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Related Experience <ArrowRight size={16} />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
