import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Calendar as CalendarIcon, Users, Check, CreditCard, ChevronRight } from 'lucide-react';
import { experiences } from '@/app/data';
import clsx from 'clsx';
import { Section } from '@/app/components/Section';

interface BookingProps {
  initialExperience?: any;
  onClose: () => void;
}

export const Booking: React.FC<BookingProps> = ({ initialExperience, onClose }) => {
  const [step, setStep] = React.useState(initialExperience ? 2 : 1);
  const [selectedExp, setSelectedExp] = React.useState<any>(initialExperience || null);
  const [date, setDate] = React.useState('');
  const [guests, setGuests] = React.useState(1);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const steps = [
    { num: 1, label: "Experience" },
    { num: 2, label: "Date & Guests" },
    { num: 3, label: "Review" },
    { num: 4, label: "Confirmed" }
  ];

  const handleNext = () => {
    if (step === 3) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(4);
      }, 1500);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else onClose();
  };

  // Step 1: Select Experience
  const renderStep1 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {experiences.map((exp) => (
        <div 
          key={exp.id}
          onClick={() => { setSelectedExp(exp); setStep(2); }}
          className="cursor-pointer border border-stone-200 rounded-xl p-4 hover:border-amber-500 hover:shadow-md transition-all flex gap-4 items-center group"
        >
          <img src={exp.image} alt={exp.title} className="w-24 h-24 object-cover rounded-lg" />
          <div>
            <h4 className="font-bold text-stone-900 group-hover:text-amber-700">{exp.title}</h4>
            <p className="text-stone-500 text-sm">{exp.duration} • {exp.price}</p>
          </div>
          <ChevronRight className="ml-auto text-stone-300 group-hover:text-amber-500" />
        </div>
      ))}
    </div>
  );

  // Step 2: Date & Guests
  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">Select Date</label>
        <div className="grid grid-cols-3 gap-3">
          {['Mon, 12 Mar', 'Tue, 13 Mar', 'Wed, 14 Mar', 'Thu, 15 Mar', 'Fri, 16 Mar', 'Sat, 17 Mar'].map((d) => (
            <button
              key={d}
              onClick={() => setDate(d)}
              className={clsx(
                "p-3 rounded-lg border text-sm font-medium transition-all",
                date === d 
                  ? "bg-amber-600 border-amber-600 text-white shadow-md" 
                  : "bg-white border-stone-200 text-stone-600 hover:border-amber-300"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-2">Number of Guests</label>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100"
          >
            -
          </button>
          <span className="font-bold text-xl w-8 text-center">{guests}</span>
          <button 
            onClick={() => setGuests(guests + 1)}
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  // Step 3: Review
  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-stone-50 p-6 rounded-xl space-y-4">
        <h4 className="font-bold text-stone-900 border-b border-stone-200 pb-2">Booking Summary</h4>
        <div className="flex justify-between text-sm">
          <span className="text-stone-500">Experience</span>
          <span className="font-medium text-stone-900 text-right w-1/2">{selectedExp.title}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-stone-500">Date</span>
          <span className="font-medium text-stone-900">{date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-stone-500">Guests</span>
          <span className="font-medium text-stone-900">{guests} People</span>
        </div>
        <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
          <span className="font-bold text-stone-900">Total Amount</span>
          <span className="font-bold text-amber-700 text-xl">{selectedExp.price}</span>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start">
         <CreditCard size={20} className="text-blue-600 mt-0.5 shrink-0" />
         <p className="text-sm text-blue-800">Payment will be collected at the location. No upfront payment required.</p>
      </div>
    </div>
  );

  // Step 4: Success
  const renderStep4 = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} />
      </div>
      <h3 className="text-2xl font-bold text-stone-900 mb-2">Booking Confirmed!</h3>
      <p className="text-stone-600 mb-8">
        Your booking for <span className="font-semibold text-stone-900">{selectedExp?.title}</span> has been confirmed.
        We've sent a confirmation email to you.
      </p>
      <div className="space-y-3">
        <button 
          onClick={onClose}
          className="w-full py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors"
        >
          Back to Home
        </button>
        <button className="w-full py-3 text-stone-600 hover:text-stone-900 transition-colors">
          View My Bookings
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
            {/* Steps Header */}
            <div className="bg-stone-900 text-white p-6">
              <div className="flex items-center justify-between mb-8">
                <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                   <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-bold">Book Experience</h2>
                <div className="w-10" />
              </div>
              
              <div className="flex justify-between relative px-4">
                 {/* Progress Bar Line */}
                 <div className="absolute top-4 left-0 right-0 h-0.5 bg-stone-700 -z-0 mx-8" />
                 
                 {steps.map((s) => (
                   <div key={s.num} className="flex flex-col items-center gap-2 relative z-10">
                     <div className={clsx(
                       "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors border-2",
                       step >= s.num ? "bg-amber-500 border-amber-500 text-white" : "bg-stone-800 border-stone-600 text-stone-400"
                     )}>
                       {step > s.num ? <Check size={16} /> : s.num}
                     </div>
                     <span className={clsx(
                       "text-xs font-medium",
                       step >= s.num ? "text-white" : "text-stone-500"
                     )}>{s.label}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 min-h-[400px]">
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
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Actions (Only for steps 2 & 3) */}
            {(step === 2 || step === 3) && (
              <div className="p-6 border-t border-stone-100 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={step === 2 && !date}
                  className={clsx(
                    "px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all",
                    (step === 2 && !date) 
                      ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                      : "bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg"
                  )}
                >
                  {isProcessing ? 'Processing...' : step === 3 ? 'Confirm Booking' : 'Continue'}
                  {!isProcessing && <ChevronRight size={18} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Summary (Only visible when experience is selected and not finished) */}
        {selectedExp && step < 4 && (
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sticky top-28">
              <h3 className="font-bold text-stone-900 mb-4">Your Selection</h3>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img src={selectedExp.image} alt={selectedExp.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-stone-900 mb-1">{selectedExp.title}</h4>
              <p className="text-sm text-stone-500 mb-4">{selectedExp.description}</p>
              
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <CalendarIcon size={16} className="text-amber-600" />
                  <span>{date || 'Select a date'}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <Users size={16} className="text-amber-600" />
                  <span>{guests} Guest{guests > 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
