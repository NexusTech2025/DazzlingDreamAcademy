import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X
} from 'lucide-react';
import images from '../../assets/images.js';

const Header = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F2A44] shadow-lg py-3' : 'bg-[#0F2A44]/95 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setPage('home')}
          >
            <img src={images.logo} alt="Dazzling Dream" className="h-10 w-10 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-white leading-tight tracking-wide">DAZZLING DREAM</h1>
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] uppercase">ACADEMY</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id 
                    ? 'text-[#D4AF37]' 
                    : 'text-gray-300 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="bg-[#D4AF37] text-[#0F2A44] px-6 py-2 rounded-full text-sm font-bold hover:bg-[#bfa34b] transition-colors shadow-md hover:shadow-lg"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#D4AF37] hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0F2A44] border-t border-[#143A5A] absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.id 
                    ? 'bg-[#143A5A] text-[#D4AF37]' 
                    : 'text-gray-300 hover:bg-[#143A5A] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
