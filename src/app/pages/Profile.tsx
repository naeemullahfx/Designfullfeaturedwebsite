import React from 'react';
import { User, Calendar, Heart, Settings, LogOut, Clock, MapPin, XCircle, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { experiences, userBookings, userProfile } from '@/app/data';

interface ProfileProps {
  setView: (view: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ setView }) => {
  const [activeTab, setActiveTab] = React.useState('bookings');

  // Enhance booking data with experience details
  const myBookings = userBookings.map(booking => {
    const exp = experiences.find(e => e.id === booking.experienceId);
    return { ...booking, exp };
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed': return 'bg-stone-100 text-stone-500 border-stone-200';
      default: return 'bg-stone-100 text-stone-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <AlertCircle size={14} />;
      case 'Confirmed': return <CheckCircle size={14} />;
      case 'Completed': return <Clock size={14} />;
      default: return null;
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'bookings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 font-display">My Bookings</h2>
            
            {myBookings.map((b) => (
              <motion.div 
                key={b.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={clsx(
                  "bg-white border rounded-xl p-6 flex flex-col md:flex-row gap-6 transition-all",
                  b.status === 'Completed' ? "border-stone-100 opacity-75" : "border-stone-200 shadow-sm hover:shadow-md"
                )}
              >
                {/* Image */}
                <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0 relative">
                  <img 
                    src={b.exp?.image} 
                    alt={b.exp?.title} 
                    className={clsx("w-full h-full object-cover", b.status === 'Completed' && "grayscale")} 
                  />
                  {b.status === 'Completed' && (
                    <div className="absolute inset-0 bg-stone-900/10 flex items-center justify-center">
                       <span className="bg-stone-900/80 text-white text-xs font-bold px-2 py-1 rounded">Past</span>
                    </div>
                  )}
                </div>
                
                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <div>
                      <span className={clsx(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 border",
                        getStatusColor(b.status)
                      )}>
                        {getStatusIcon(b.status)}
                        {b.status}
                      </span>
                      <h3 className={clsx("text-xl font-bold", b.status === 'Completed' ? "text-stone-500" : "text-stone-900")}>
                        {b.exp?.title || 'Unknown Experience'}
                      </h3>
                    </div>
                    
                    {b.status === 'Pending' && (
                      <button className="text-red-500 text-sm font-medium hover:text-red-700 flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                        <XCircle size={16} /> Cancel Request
                      </button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-stone-400" />
                      {b.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-stone-400" />
                      {b.guests} Guests
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-stone-400" />
                      Layyah, Punjab
                    </div>
                  </div>
                  
                  {b.status !== 'Completed' && (
                    <div className="pt-4 border-t border-stone-100 flex gap-4">
                      <button className="text-amber-700 font-bold text-sm hover:underline">View Details</button>
                      <button className="text-stone-500 font-medium text-sm hover:text-stone-900 hover:underline">Contact Support</button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {myBookings.length === 0 && (
              <div className="text-center py-12 bg-stone-50 rounded-xl border border-dashed border-stone-200">
                <p className="text-stone-500">You have no bookings yet.</p>
                <button onClick={() => setView('explore')} className="mt-4 text-amber-700 font-bold hover:underline">
                  Explore Experiences
                </button>
              </div>
            )}
          </div>
        );
      case 'saved':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 font-display">Saved Experiences</h2>
            <div className="text-center py-12 bg-stone-50 rounded-xl border border-dashed border-stone-200">
              <Heart className="mx-auto text-stone-300 mb-4" size={48} />
              <p className="text-stone-500 mb-4">You haven't saved any experiences yet.</p>
              <button onClick={() => setView('explore')} className="text-amber-700 font-bold hover:underline">
                Browse Experiences
              </button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 font-display">Account Settings</h2>
            <div className="bg-white border border-stone-200 rounded-xl p-8 max-w-2xl shadow-sm">
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 border-4 border-white shadow-sm">
                   <User size={40} />
                 </div>
                 <div>
                   <h3 className="font-bold text-stone-900 mb-1">{userProfile.name}</h3>
                   <button className="text-sm font-medium text-amber-700 hover:underline">Change Profile Photo</button>
                 </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                   <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                   <input type="text" defaultValue={userProfile.name} className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                   <input type="email" defaultValue={userProfile.email} className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                   <input type="tel" placeholder="+92 300 0000000" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                 </div>
               </div>

               <div className="pt-6 border-t border-stone-100 flex justify-end">
                 <button className="bg-stone-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/10">
                   Save Changes
                 </button>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20 bg-stone-50">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden sticky top-28">
            <div className="p-6 border-b border-stone-100 bg-stone-900 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500 rounded-full blur-[40px] opacity-20 transform translate-x-8 -translate-y-8" />
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-xl font-bold mb-3 shadow-inner ring-4 ring-white/10">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-bold text-lg">{userProfile.name}</h3>
              <p className="text-stone-400 text-sm">{userProfile.email}</p>
            </div>
            
            <nav className="p-3 space-y-1">
              {[
                { id: 'bookings', label: 'My Bookings', icon: Calendar },
                { id: 'saved', label: 'Saved', icon: Heart },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={clsx(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left",
                    activeTab === item.id 
                      ? "bg-amber-50 text-amber-800 shadow-sm ring-1 ring-amber-100" 
                      : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                  )}
                >
                  <item.icon size={18} className={activeTab === item.id ? "text-amber-600" : "text-stone-400"} />
                  {item.label}
                </button>
              ))}
              
              <div className="pt-2 mt-2 border-t border-stone-100">
                <button 
                  onClick={() => setView('home')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 text-left transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
           <motion.div
             key={activeTab}
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
           >
             {renderContent()}
           </motion.div>
        </div>

      </div>
    </div>
  );
};
