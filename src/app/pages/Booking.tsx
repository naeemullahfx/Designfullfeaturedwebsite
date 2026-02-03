import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Calendar as CalendarIcon, Users, Check, CreditCard, ChevronRight, ArrowRight, User, Mail, Phone, FileText, AlertCircle, MapPin } from 'lucide-react';
import { experiences } from '@/app/data';
import clsx from 'clsx';
import { HeritageMap } from '@/app/components/map/HeritageMap';

interface BookingProps {
  initialExperience?: any;
  initialDate?: string;
  initialGuests?: number;
  onClose: () => void;
}

export const Booking: React.FC<BookingProps> = ({ initialExperience, initialDate, initialGuests, onClose }) => {
  // If no experience, we start at 0 (Guard Step), otherwise 1 (Date & Guests)
  const [step, setStep] = React.useState(initialExperience ? 2 : 1);
  const [selectedExp, setSelectedExp] = React.useState<any>(initialExperience || null);
  const [date, setDate] = React.useState(initialDate || '');
  const [guests, setGuests] = React.useState(initialGuests || 1);
  
  // New Guest Info State
  const [guestInfo, setGuestInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const steps = [
    { num: 1, label: "Experience" },
    { num: 2, label: "Date & Guests" },
    { num: 3, label: "Guest Info" },
    { num: 4, label: "Summary" },
    { num: 5, label: "Confirmed" }
  ];

  // Validation for Step 3
  const validateGuestInfo = () => {
    const newErrors: Record<string, string> = {};
    if (!guestInfo.name.trim()) newErrors.name = "Full Name is required";
    if (!guestInfo.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(guestInfo.email)) newErrors.email = "Email is invalid";
    if (!guestInfo.phone.trim()) newErrors.phone = "Phone Number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 3) {
      if (validateGuestInfo()) {
        setStep(4);
      }
    } else if (step === 4) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(5);
      }, 1500);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 2) setStep(step - 1); 
    else if (step === 2) onClose(); 
    else onClose();
  };

  // Step 1: Guard / Experience Check
  const renderStep1 = () => (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle size={40} />
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-3">No Experience Selected</h3>
      <p className="text-stone-600 mb-8 max-w-md mx-auto">
        Please select an experience from our Explore page to start your booking journey.
      </p>
      <button 
        onClick={onClose}
        className="px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors"
      >
        Go to Explore
      </button>
    </div>
  );

  // Step 2: Date & Guests
  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
          <CalendarIcon size={20} className="text-amber-600" /> Select Date
        </h3>
        {date && date.includes('-') && date.length > 5 ? (
            <div className="p-4 border border-amber-500 bg-amber-50 rounded-lg flex justify-between items-center mb-4">
                <span className="font-bold text-stone-900">{date}</span>
                <button onClick={() => setDate('')} className="text-xs text-amber-700 hover:underline">Change</button>
            </div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Mon, 12 Mar', 'Tue, 13 Mar', 'Wed, 14 Mar', 'Thu, 15 Mar', 'Fri, 16 Mar', 'Sat, 17 Mar'].map((d) => (
                <button
                key={d}
                onClick={() => setDate(d)}
                className={clsx(
                    "p-3 rounded-lg border text-sm font-medium transition-all text-center",
                    date === d 
                    ? "bg-amber-600 border-amber-600 text-white shadow-md" 
                    : "bg-white border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50"
                )}
                >
                {d}
                </button>
            ))}
            </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
           <Users size={20} className="text-amber-600" /> Number of Guests
        </h3>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 text-stone-600 transition-colors"
          >
            -
          </button>
          <div className="text-center min-w-[60px]">
            <span className="block font-bold text-2xl text-stone-900">{guests}</span>
            <span className="text-xs text-stone-500 uppercase tracking-wide">Guests</span>
          </div>
          <button 
            onClick={() => setGuests(guests + 1)}
            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 text-stone-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  // Step 3: Guest Information
  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-amber-800 flex items-start gap-2">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          We use this to confirm your booking and contact you if needed.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Full Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input 
              type="text" 
              value={guestInfo.name}
              onChange={(e) => {
                setGuestInfo({...guestInfo, name: e.target.value});
                if (errors.name) setErrors({...errors, name: ''});
              }}
              placeholder="e.g. Ali Ahmed"
              className={clsx(
                "w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all",
                errors.name ? "border-red-300 focus:ring-red-200" : "border-stone-200 focus:ring-amber-200 focus:border-amber-500"
              )}
            />
          </div>
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Email Address <span className="text-red-500">*</span></label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input 
                type="email" 
                value={guestInfo.email}
                onChange={(e) => {
                  setGuestInfo({...guestInfo, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
                placeholder="ali@example.com"
                className={clsx(
                  "w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all",
                  errors.email ? "border-red-300 focus:ring-red-200" : "border-stone-200 focus:ring-amber-200 focus:border-amber-500"
                )}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input 
                type="tel" 
                value={guestInfo.phone}
                onChange={(e) => {
                  setGuestInfo({...guestInfo, phone: e.target.value});
                  if (errors.phone) setErrors({...errors, phone: ''});
                }}
                placeholder="+92 300 1234567"
                className={clsx(
                  "w-full pl-10 pr-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all",
                  errors.phone ? "border-red-300 focus:ring-red-200" : "border-stone-200 focus:ring-amber-200 focus:border-amber-500"
                )}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Special Notes <span className="text-stone-400 font-normal">(Optional)</span></label>
          <div className="relative">
            <FileText className="absolute left-3 top-4 text-stone-400" size={18} />
            <textarea 
              value={guestInfo.notes}
              onChange={(e) => setGuestInfo({...guestInfo, notes: e.target.value})}
              placeholder="Dietary restrictions, accessibility needs, or special requests..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Step 4: Summary (Review)
  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="bg-stone-50 p-6 rounded-xl space-y-4 border border-stone-100">
        <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-3 mb-2">Booking Details</h4>
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-500">Experience</span>
          <span className="font-medium text-stone-900 text-right max-w-[60%]">{selectedExp.title}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-500">Date</span>
          <span className="font-medium text-stone-900">{date}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-500">Guests</span>
          <span className="font-medium text-stone-900">{guests} People</span>
        </div>
        <div className="pt-2 border-t border-dashed border-stone-200 mt-2">
            <h5 className="font-bold text-stone-900 text-xs uppercase tracking-wide mb-2">Guest Information</h5>
            <div className="text-sm text-stone-600 space-y-1">
                <p>{guestInfo.name}</p>
                <p>{guestInfo.email} • {guestInfo.phone}</p>
                {guestInfo.notes && <p className="italic text-stone-500">"{guestInfo.notes}"</p>}
            </div>
        </div>
        <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
          <span className="font-bold text-stone-900 text-lg">Total Amount</span>
          <span className="font-bold text-amber-700 text-2xl">{selectedExp.price}</span>
        </div>
        
        {/* Embedded Map Confirmation */}
        <div className="rounded-xl overflow-hidden h-40 border border-stone-200 mt-4 relative">
          <HeritageMap 
            locations={[{
              id: selectedExp.id,
              coordinates: selectedExp.coordinates || {lat: 30.9693, lng: 70.9428},
              type: 'Booking',
              title: selectedExp.title
            }]}
            center={selectedExp.coordinates || {lat: 30.9693, lng: 70.9428}}
            zoom={13}
            className="h-full w-full"
            interactive={false} 
          />
          <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded-md text-xs font-bold shadow-sm z-[1000] flex items-center gap-1 border border-stone-200">
            <MapPin size={12} className="text-red-600" /> This is where your experience begins
          </div>
        </div>

      </div>

      <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
         <CreditCard size={20} className="text-blue-600 mt-0.5 shrink-0" />
         <div>
            <p className="text-sm font-semibold text-blue-900">Payment on Arrival</p>
            <p className="text-sm text-blue-800 mt-1">Payment will be collected at the location. No upfront online payment required today.</p>
         </div>
      </div>
    </div>
  );

  // Step 5: Confirmation
  const renderStep5 = () => (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Check size={48} />
      </div>
      <h3 className="text-3xl font-bold text-stone-900 mb-4">Booking Confirmed!</h3>
      <p className="text-lg text-stone-600 mb-10 max-w-lg mx-auto">
        Thank you, <span className="font-bold text-stone-900">{guestInfo.name}</span>. Your booking for {selectedExp.title} is confirmed. We have sent details to {guestInfo.email}.
      </p>
      <div className="max-w-xs mx-auto space-y-3">
        <button 
          onClick={onClose}
          className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg"
        >
          Back to Home
        </button>
        <button className="w-full py-4 text-stone-600 font-medium hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors">
          View My Bookings
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-40 pb-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Content Area */}
        <div className={clsx(
          "space-y-6 transition-all duration-500",
          (step === 5 || !selectedExp) ? "lg:col-span-8 lg:col-start-3" : "lg:col-span-8"
        )}>
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
            {/* Steps Header */}
            {selectedExp && step < 5 && (
                <div className="bg-stone-900 text-white p-6">
                <div className="flex items-center justify-between mb-8">
                    {step > 1 ? (
                    <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    ) : <div className="w-9" />}
                    
                    <h2 className="text-xl font-bold">Book Experience</h2>
                    <div className="w-9" />
                </div>
                
                <div className="flex justify-between relative px-4">
                    {/* Progress Bar Line */}
                    <div className="absolute top-4 left-0 right-0 h-0.5 bg-stone-700 -z-0 mx-8" />
                    
                    {steps.slice(1).map((s) => ( // Show steps 2-5 visually, mapped to UI indices 1-4
                    <div key={s.num} className="flex flex-col items-center gap-2 relative z-10">
                        <div className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors border-2",
                        step >= s.num ? "bg-amber-500 border-amber-500 text-white" : "bg-stone-800 border-stone-600 text-stone-400"
                        )}>
                        {step > s.num ? <Check size={16} /> : (s.num - 1)}
                        </div>
                        <span className={clsx(
                        "text-xs font-medium hidden sm:block",
                        step >= s.num ? "text-white" : "text-stone-500"
                        )}>{s.label}</span>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* Content Body */}
            <div className="p-6 md:p-10 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}
                  {step === 4 && renderStep4()}
                  {step === 5 && renderStep5()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Actions */}
            {selectedExp && step < 5 && (
              <div className="p-6 border-t border-stone-100 flex justify-between items-center bg-stone-50/50">
                <div className="text-sm text-stone-500">
                  Step {step - 1} of 4
                </div>
                <button
                  onClick={handleNext}
                  disabled={step === 2 && !date}
                  className={clsx(
                    "px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all",
                    (step === 2 && !date) 
                      ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                      : "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  )}
                >
                  {isProcessing ? 'Processing...' : step === 4 ? 'Confirm Booking' : 'Continue'}
                  {!isProcessing && <ArrowRight size={18} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Sticky Summary Panel (Visible for Steps 2, 3, 4) */}
        {selectedExp && step > 1 && step < 5 && (
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg shadow-stone-200/50 border border-stone-200 p-6 sticky top-28"
            >
              <h3 className="font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100">Booking Summary</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <img src={selectedExp.image} alt={selectedExp.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 leading-tight mb-1 line-clamp-2">{selectedExp.title}</h4>
                  <p className="text-xs text-stone-500">{selectedExp.duration}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <CalendarIcon size={16} className="text-amber-600" />
                    <span className="font-medium">{date || 'Select a date'}</span>
                  </div>
                  {!date && <span className="text-xs text-red-500 font-medium">Required</span>}
                </div>
                
                <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Users size={16} className="text-amber-600" />
                    <span className="font-medium">{guests} Guest{guests > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {step === 4 && (
                    <div className="p-3 bg-stone-50 rounded-lg">
                       <div className="flex items-center gap-3 text-sm text-stone-600 mb-1">
                          <User size={16} className="text-amber-600" />
                          <span className="font-medium">{guestInfo.name}</span>
                       </div>
                       <p className="text-xs text-stone-500 pl-7 truncate">{guestInfo.email}</p>
                    </div>
                )}

                <div className="pt-4 mt-2 border-t border-stone-100 flex justify-between items-center">
                   <span className="text-stone-500 font-medium">Total</span>
                   <span className="text-xl font-bold text-stone-900">{selectedExp.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
