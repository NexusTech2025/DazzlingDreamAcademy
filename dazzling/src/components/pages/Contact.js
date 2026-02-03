import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  CheckCircle, 
} from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#0F2A44] mb-4">Admissions & Enquiry</h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-[#0F2A44] text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-[#D4AF37] mr-2">|</span> Get In Touch
          </h2>
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-start">
              <div className="bg-[#143A5A] p-3 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-sm uppercase font-bold tracking-wider mb-1">Director</p>
                <p className="font-semibold text-xl">Radhey Soni</p>
                <a href="tel:9828155388" className="text-gray-300 hover:text-white transition">98281-55388</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#143A5A] p-3 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-sm uppercase font-bold tracking-wider mb-1">Contact</p>
                <p className="font-semibold text-xl">Rahul Soni</p>
                <a href="tel:9462676312" className="text-gray-300 hover:text-white transition">94626-76312</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#143A5A] p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-sm uppercase font-bold tracking-wider mb-1">Academy Address</p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  123 Knowledge Park, Main Road,<br />
                  Near Central Library,<br />
                  Education City
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-[#0F2A44] mb-6">Enquiry Form</h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center h-full flex flex-col justify-center items-center">
              <CheckCircle size={48} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p>Your enquiry has been received. We will contact you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold underline hover:text-green-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Student Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-gray-50"
                  placeholder="Enter student's full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-gray-50"
                    placeholder="10 digit number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Course Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-gray-50">
                    <option>School (Class 1-10)</option>
                    <option>Class 11-12 (Sci/Com/Arts)</option>
                    <option>IIT-JEE / NEET</option>
                    <option>Defence (NDA/Army/Navy)</option>
                    <option>RS-CIT / Computer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition bg-gray-50"
                  placeholder="Any specific query?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#0F2A44] text-white font-bold py-4 rounded-lg hover:bg-[#143A5A] transition shadow-lg transform active:scale-[0.98] border border-transparent hover:border-[#D4AF37]"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
