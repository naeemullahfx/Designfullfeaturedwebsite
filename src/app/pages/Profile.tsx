import React from 'react';
import { User, Calendar, Heart, Settings, LogOut, Clock, MapPin, XCircle } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { experiences } from '@/app/data';

interface ProfileProps {
  setView: (view: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ setView }) => {
  const [activeTab, setActiveTab] = React.useState('bookings');

  const myBookings = [
    {
      id: 'b-1',
      status: 'upcoming',
      date: 'March 15, 2024',
      guests: 2,
      exp: experiences[0] // Desert
    },
    {
      id: 'b-2',
      status: 'completed',
      date: 'Jan 10, 2024',
      guests: 4,
      exp: experiences[1] // Shrine
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'bookings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">My Bookings</h2>
            
            {myBookings.map((b) => (
              <div key={b.id} className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                  <img src={b.exp.image} alt={b.exp.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className={clsx(
                        "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2",
                        b.status === 'upcoming' ? "bg-amber-100 text-amber-700" : "bg-stone-100 text-stone-500"
                      )}>
                        {b.status}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">{b.exp.title}</h3>
                    </div>
                    {b.status === 'upcoming' && (
                      <button className="text-red-500 text-sm font-medium hover:text-red-600 flex items-center gap-1">
                        <XCircle size={16} /> Cancel
                      </button>
                    )}
                  </div>
                  
                  <div className="flex gap-6 text-sm text-stone-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {b.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {b.guests} Guests
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      Layyah, Punjab
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-100 flex gap-4">
                    <button className="text-amber-700 font-medium text-sm hover:underline">View Ticket</button>
                    <button className="text-stone-500 font-medium text-sm hover:text-stone-900 hover:underline">Need Help?</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'saved':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Saved Experiences</h2>
            <p className="text-stone-500">You haven't saved any experiences yet.</p>
            <button onClick={() => setView('home')} className="text-amber-600 font-medium hover:underline">Browse Experiences</button>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Account Settings</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-8 max-w-xl">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center text-stone-400">
                   <User size={32} />
                 </div>
                 <div>
                   <button className="text-sm bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800">Change Photo</button>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                   <input type="text" defaultValue="Traveler Name" className="w-full p-3 border border-stone-300 rounded-lg" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                   <input type="email" defaultValue="traveler@example.com" className="w-full p-3 border border-stone-300 rounded-lg" />
                 </div>
                 <button className="w-full bg-amber-600 text-white font-medium py-3 rounded-lg hover:bg-amber-700 mt-4">Save Changes</button>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden sticky top-28">
            <div className="p-6 border-b border-stone-100 bg-stone-900 text-white">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-xl font-bold mb-3">
                TN
              </div>
              <h3 className="font-bold text-lg">Traveler Name</h3>
              <p className="text-stone-400 text-sm">traveler@example.com</p>
            </div>
            
            <nav className="p-2">
              {[
                { id: 'bookings', label: 'My Bookings', icon: Calendar },
                { id: 'saved', label: 'Saved', icon: Heart },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                    activeTab === item.id 
                      ? "bg-amber-50 text-amber-700" 
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  )}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 text-left mt-2">
                <LogOut size={18} />
                Sign Out
              </button>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
           <motion.div
             key={activeTab}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
           >
             {renderContent()}
           </motion.div>
        </div>

      </div>
    </div>
  );
};
