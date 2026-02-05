import React from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Shield,
  FileText,
  BarChart,
  PieChart,
  Gift,
  Layout
} from 'lucide-react';
import images from '../../assets/images.js';

const Home = ({ setPage }) => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <div id="hero-container"
        className="relative bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url('${images.heroBg}')` }}
      >
        <div className="absolute inset-0 bg-[#0F2A44] bg-opacity-60"></div> {/* Overlay for readability */}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#143A5A] opacity-50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Text Content Container (Left Side) */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
              <span className="inline-block py-1 px-4 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-semibold mb-6 tracking-wide">
                ADMISSIONS OPEN 2024-25
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Aim High – <br/>
                <span className="text-[#D4AF37]">Fly High</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[#D4AF37] font-medium mb-6">
                Learn Better, Grow Smarter, Succeed Faster
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We focus on understanding, practice, and progress — not just memorizing. Building strong academic knowledge along with useful computer skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setPage('courses')}
                  className="px-8 py-4 bg-[#D4AF37] text-[#0F2A44] rounded-lg font-bold hover:bg-[#E6C15A] transition shadow-lg shadow-yellow-900/20 flex items-center justify-center uppercase tracking-wide"
                >
                  Our Courses
                </button>
                <button 
                  onClick={() => setPage('contact')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition flex items-center justify-center uppercase tracking-wide"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image (Right Side, absolute) */}
        <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:flex justify-end items-center">
          <img
            src={images.heroTheme}
            alt="Dazzling Dream Theme Image"
            className="h-full w-auto object-contain object-right"
          />
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-[#D4AF37] py-4 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[#0F2A44] font-bold text-lg">
               <Gift className="w-6 h-6" />
               <span>SPECIAL OFFER: Free Basic Computer Course with every Academic Admission!</span>
            </div>
         </div>
      </div>

      {/* Course Categories Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A44]">Academic & Professional Excellence</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-4"></div>
            <p className="text-gray-600">Comprehensive programs designed for every stage of your journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" />, 
                title: "Academic Courses", 
                desc: "Class 1 to 10 (All Subjects) & Class 11-12 (Science, Commerce, Arts). Easy explanations with real examples." 
              },
              { 
                icon: <Shield className="w-8 h-8 text-[#D4AF37]" />, 
                title: "Defence & Foundation", 
                desc: "IIT-JEE, NEET, NDA, Airforce, Navy & Army Prep. Navodaya Vidyalaya Admission." 
              },
              { 
                icon: <Monitor className="w-8 h-8 text-[#D4AF37]" />, 
                title: "Computer Courses", 
                desc: "Basic RS-CIT to Advanced Programming Languages. Practical learning with real usage skills." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 group">
                <div className="bg-[#0F2A44] w-16 h-16 rounded-lg flex items-center justify-center shadow-md mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <div className="text-[#D4AF37] group-hover:text-[#0F2A44] transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F2A44] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <button onClick={() => setPage('courses')} className="mt-6 text-[#0F2A44] font-semibold flex items-center text-sm uppercase tracking-wide hover:text-[#D4AF37]">
                  View Details <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Study Support & Parent System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
             {/* Smart Study Support */}
             <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0F2A44]">
               <h2 className="text-2xl font-bold text-[#0F2A44] mb-6 flex items-center">
                 <FileText className="mr-3 text-[#D4AF37]"/> Smart Study Support
               </h2>
               <div className="space-y-6">
                 {[
                   { title: "Visual Learning", desc: "Clear printed visual diagrams for easy understanding." },
                   { title: "Structured Notes", desc: "Well-organized printed notes for every topic." },
                   { title: "Formula & Summary Books", desc: "Special booklets for quick revision for each subject." },
                   { title: "Continuous Practice", desc: "Regular tests to assess student progress." }
                 ].map((item, i) => (
                   <div key={i} className="flex">
                     <div className="mr-4 mt-1 bg-blue-50 p-2 rounded-full h-fit">
                       <CheckCircle size={16} className="text-[#0F2A44]" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">{item.title}</h4>
                       <p className="text-gray-600 text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Parent Progress System */}
             <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#D4AF37]">
               <h2 className="text-2xl font-bold text-[#0F2A44] mb-6 flex items-center">
                 <BarChart className="mr-3 text-[#D4AF37]"/> Parent Progress System
               </h2>
               <div className="space-y-6">
                 {[
                   { title: "Performance Reports", desc: "Regular updates on student strengths and weaknesses." },
                   { title: "Transparent Tracking", desc: "Test results and progress tracking shared directly." },
                   { title: "Statistics Dashboard", desc: "Clear monitoring of attendance and improvements." },
                   { title: "Honest Guidance", desc: "Constructive feedback to help students grow." }
                 ].map((item, i) => (
                   <div key={i} className="flex">
                     <div className="mr-4 mt-1 bg-yellow-50 p-2 rounded-full h-fit">
                       <PieChart size={16} className="text-[#D4AF37]" />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-900">{item.title}</h4>
                       <p className="text-gray-600 text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* Why Choose Us - Updated */}
      <section className="py-20 bg-[#0F2A44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
           <h2 className="text-3xl font-bold text-[#0F2A44]">Why Dazzling Dream Academy?</h2>
           <p className="text-gray-300 max-w-2xl mx-auto">We combine modern teaching methods with traditional values of discipline.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-[#143A5A] p-6 rounded-xl border border-transparent hover:border-[#D4AF37] transition">
              <Layout className="w-10 h-10 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2">Simple Teaching Style</h3>
              <p className="text-gray-300 text-sm">Complex topics explained in a way anyone can understand.</p>
           </div>
           <div className="bg-[#143A5A] p-6 rounded-xl border border-transparent hover:border-[#D4AF37] transition">
              <BookOpen className="w-10 h-10 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2">Concept Focus</h3>
              <p className="text-gray-300 text-sm">Strong focus on concepts over rote memorization.</p>
           </div>
           <div className="bg-[#143A5A] p-6 rounded-xl border border-transparent hover:border-[#D4AF37] transition">
              <Monitor className="w-10 h-10 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold mb-2">Dual Skills</h3>
              <p className="text-gray-300 text-sm">Building Academic knowledge and Computer skills together.</p>
           </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="bg-[#D4AF37] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-[#0F2A44] mb-4">Start Your Journey Today</h3>
          <p className="text-[#0F2A44] mb-8 font-medium text-lg">
            Join the league of achievers. Admissions open for new batches.
          </p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-[#0F2A44] text-white px-10 py-4 rounded-lg font-bold shadow-xl hover:bg-[#0A0F14] transition transform hover:-translate-y-1 uppercase tracking-wider"
          >
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
