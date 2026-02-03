import React from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Shield,
  Gift
} from 'lucide-react';

const Courses = ({ setPage }) => {
  const courses = [
    {
      category: "Academic Courses",
      title: "School Excellence",
      subtitle: "Class 1 to 10 & 11-12",
      badge: "Free Computer Course Included",
      features: [
        "All Subjects (Class 1-10)",
        "Easy explanations with real examples",
        "Personal attention to every student",
        "Visual diagrams & Printed Notes",
        "CBSE | RBSE | ICSE Boards"
      ],
      icon: <BookOpen className="w-10 h-10 text-white" />
    },
    {
      category: "Foundation & Competitive",
      title: "Defence & Engineering",
      subtitle: "Career Focused Batches",
      features: [
        "IIT-JEE | NEET Preparation",
        "NDA + Army + Navy + Airforce",
        "Navodaya Vidyalaya Admission",
        "Rigorous Physical & Mental Prep"
      ],
      icon: <Shield className="w-10 h-10 text-white" />
    },
    {
      category: "Computer Courses",
      title: "Tech Skills",
      subtitle: "Basic to Advanced",
      features: [
        "Basic: RS-CIT Course",
        "Advanced: All Programming Languages",
        "Practical learning with real usage skills",
        "Certification Support"
      ],
      icon: <Monitor className="w-10 h-10 text-white" />
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0F2A44] mb-4">Our Programs</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right path for your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0F2A44] p-6 flex items-center justify-between relative overflow-hidden">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-[#D4AF37] opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                 <div>
                   <span className="text-[#D4AF37] font-bold text-xs tracking-wider uppercase mb-1 block">{course.category}</span>
                   <h3 className="text-xl font-bold text-white">{course.title}</h3>
                   <p className="text-blue-200 text-sm">{course.subtitle}</p>
                 </div>
                 <div className="bg-[#D4AF37]/20 p-3 rounded-lg relative z-10">
                   {course.icon}
                 </div>
              </div>
              
              <div className="p-8 flex-grow">
                {course.badge && (
                  <div className="mb-4 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center">
                    <Gift size={12} className="mr-1" /> {course.badge}
                  </div>
                )}
                <ul className="space-y-4">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-[#D4AF37] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <button 
                  onClick={() => setPage('contact')}
                  className="w-full bg-[#0F2A44] text-white py-3 rounded-lg font-semibold hover:bg-[#143A5A] transition flex items-center justify-center"
                >
                  Join Batch <ArrowRight size={16} className="ml-2 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
