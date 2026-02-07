import React from 'react';

const CTA = ({ setPage }) => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-900 to-navy-900 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"
      ></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-4xl font-bold text-white mb-8">
          Ready to Take the First Step?
        </h2>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            className="w-full sm:w-auto px-8 py-4 bg-white text-navy-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            href="tel:+919876543210"
          >
            <span className="material-symbols-outlined">call</span>
            Call Now
          </a>
          <a
            className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-navy-900 transition-colors flex items-center justify-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
