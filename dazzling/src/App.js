import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Contact from './components/pages/Contact';

const App = () => {
  const [currentPage, setPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setPage} />;
      case 'about': return <About setPage={setPage} />;
      case 'courses': return <Courses setPage={setPage} />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-white">
      <Header currentPage={currentPage} setPage={setPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

export default App;
