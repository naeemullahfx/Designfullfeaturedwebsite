import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowLeft, Moon, Info, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { Section } from '@/app/components/Section';

interface ShrineDetailProps {
  shrine: any;
  onBack: () => void;
}

export const ShrineDetail: React.FC<ShrineDetailProps> = ({ shrine, onBack }) => {
  if (!shrine) return null;

  return (
    <div className="bg-stone-50 min-h-screen pt-40 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack} 
          className="mb-8 flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors font-medium"
        >
          <ArrowLeft size={18} /> Back to Shrines
        </button>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 mb-12">
          <div className="h-[400px] w-full relative">
            <img 
              src={shrine.image} 
              alt={shrine.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 text-stone-300 font-medium mb-2">
                  <MapPin size={18} />
                  {shrine.location}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{shrine.name}</h1>
                <p className="text-stone-200 text-lg max-w-2xl leading-relaxed">
                  {shrine.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Text Content */}
          <div className="md:col-span-8 space-y-12">
            
            {/* History Section */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <BookOpen className="text-amber-700" size={24} /> 
                History & Origins
              </h2>
              <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed">
                <p>{shrine.history}</p>
              </div>
            </section>

            {/* Significance Section */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Sparkles className="text-amber-700" size={24} /> 
                Spiritual Significance
              </h2>
              <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                <p className="italic">"{shrine.significance}"</p>
              </div>
            </section>

            {/* Urs Information */}
            <section className="bg-amber-900 text-amber-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Moon size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
                <Moon size={24} /> Annual Urs
              </h2>
              <p className="text-amber-100 text-lg leading-relaxed relative z-10">
                {shrine.ursInfo}
              </p>
            </section>

          </div>

          {/* Sidebar - Etiquette */}
          <div className="md:col-span-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-amber-600 sticky top-28">
              <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-600" /> Visiting Etiquette
              </h3>
              
              <ul className="space-y-4">
                {shrine.etiquette?.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="text-sm font-medium leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <p className="text-xs text-stone-400 text-center">
                  Please be respectful of local customs and the sanctity of the site.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
