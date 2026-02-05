import React from 'react';
import { 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import images from '../../assets/images.js';

const Footer = ({ setPage }) => (
  <footer className="bg-[#0A0F14] text-white pt-16 pb-8 border-t-4 border-[#D4AF37]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-6">
            <img src={images.logo} alt="Dazzling Dream" className="h-10 w-10 mr-3" />
            <div>
              <span className="text-xl font-bold block">Dazzling Dream</span>
              <span className="text-xs text-[#D4AF37] tracking-widest uppercase">Academy</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            "Aim High – Fly High". Learn Better, Grow Smarter, Succeed Faster. We provide a premium educational environment designed to foster excellence.
          </p>
          <div className="flex space-x-4">
             {/* Social placeholders could go here */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-[#D4AF37] uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><button onClick={() => setPage('home')} className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Home</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> About Us</button></li>
            <li><button onClick={() => setPage('courses')} className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Courses</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-[#D4AF37] transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Admissions</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-[#D4AF37] uppercase tracking-wide">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start">
              <Phone size={18} className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="block font-semibold text-white">Director: Radhey Soni</span>
                <a href="tel:9828155388" className="hover:text-[#D4AF37]">9828155388</a>
              </div>
            </li>
            <li className="flex items-start">
              <Phone size={18} className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="block font-semibold text-white">Contact: Rahul Soni</span>
                <a href="tel:9462676312" className="hover:text-[#D4AF37]">9462676312</a>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin size={18} className="text-[#D4AF37] mr-3 flex-shrink-0 mt-1" />
              <span>9, Jagat Vihar, Near PNB Bank, Jagatpura Phatak, Jaipur</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Dazzling Dream Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
