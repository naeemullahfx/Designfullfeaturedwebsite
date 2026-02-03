import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/app/components/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Logo variant="light" />
          </div>
          <p className="text-sm leading-relaxed text-stone-400">
            A community-led initiative to preserve and showcase the spiritual, cultural, and historical heritage of Layyah.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Heritage Walks</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Desert Safaris</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Shrines & Urs</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Cultural Events</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-600 shrink-0" />
              <span>Layyah City, Punjab, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-600 shrink-0" />
              <span>+92 300 1234567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-600 shrink-0" />
              <span>info@layyahheritage.com</span>
            </li>
          </ul>
        </div>

        {/* Note */}
        <div className="bg-stone-800 p-6 rounded-xl border border-stone-700">
          <p className="text-xs italic text-stone-400 leading-relaxed">
            "This platform is built to respectfully preserve Layyah’s cultural and spiritual heritage."
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-stone-700 rounded-full hover:bg-amber-700 transition-colors text-white">
              <Facebook size={16} />
            </a>
            <a href="#" className="p-2 bg-stone-700 rounded-full hover:bg-amber-700 transition-colors text-white">
              <Instagram size={16} />
            </a>
            <a href="#" className="p-2 bg-stone-700 rounded-full hover:bg-amber-700 transition-colors text-white">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-stone-500 flex justify-between items-center">
        <p>&copy; 2024 Layyah Heritage Walk. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
