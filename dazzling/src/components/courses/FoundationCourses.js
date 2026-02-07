import React from 'react';
import images from '../../assets/images';

const FoundationCourses = () => {
  return (
      <main className="flex-1 w-full">
        <section className="relative bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30 bg-cover bg-center"></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/90 to-navy-900/90"
          ></div>
          <div
            className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 space-y-6 text-center md:text-left">
              <span
                className="inline-block px-4 py-1.5 rounded-full bg-navy-800 border border-secondary/30 text-secondary text-sm font-semibold uppercase tracking-wider mb-2"
              >
                Building Strong Roots
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Foundation Courses for Future
                <span className="text-secondary">Engineers, Doctors</span> &amp; Defence
                Officers
              </h1>
              <p
                className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto md:mx-0"
              >
                Premium quality education made affordable for every aspiring
                middle-class family. Start early, dream big, and secure your
                child's future today.
              </p>
              <div
                className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <button
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-yellow-500 text-navy-900 font-bold text-lg rounded-lg shadow-lg hover:shadow-secondary/20 hover:scale-105 transition-all duration-200"
                >
                  Enquire for Foundation Courses
                </button>
                <button
                  className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Success Stories
                </button>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-lg md:max-w-xl">
              <div
                className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl"
              ></div>
              <div
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  alt="Students learning"
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  src={images.foundationHero}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <p className="text-white font-medium">
                    "My journey to IIT started in Class 9"
                  </p>
                  <p className="text-secondary text-sm">- Ankit, IIT Delhi (Alumnus)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-navy-800 py-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Start Early?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Build a rock-solid foundation while others are just starting.
                The difference between success and stress is preparation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-primary border border-navy-900/50 hover:border-secondary/30 transition-colors group"
              >
                <div
                  className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-secondary text-3xl"
                    >hourglass_empty</span
                  >
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  No Last-Minute Stress
                </h3>
                <p className="text-gray-400 text-sm">
                  Avoid the panic of Class 11 &amp; 12 by mastering core
                  concepts early in Class 6-10.
                </p>
              </div>
              <div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-primary border border-navy-900/50 hover:border-secondary/30 transition-colors group"
              >
                <div
                  className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-secondary text-3xl"
                    >psychology</span
                  >
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Developed Analytical Mind
                </h3>
                <p className="text-gray-400 text-sm">
                  We shift focus from rote learning to logical thinking, crucial
                  for competitive exams.
                </p>
              </div>
              <div
                className="flex flex-col items-center text-center p-6 rounded-xl bg-primary border border-navy-900/50 hover:border-secondary/30 transition-colors group"
              >
                <div
                  className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-secondary text-3xl"
                    >savings</span
                  >
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Cost-Effective Prep
                </h3>
                <p className="text-gray-400 text-sm">
                  Investing early reduces the need for expensive crash courses
                  later. Quality education within reach.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background-light border-b border-gray-200">
          <div className="max-w-[1000px] mx-auto px-4 md:px-10">
            <div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Who Should Join?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our foundation programs are meticulously designed for students
                  who dream big but need the right guidance.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 bg-green-100 p-1 rounded-full text-green-700"
                    >
                      <span className="material-symbols-outlined text-sm font-bold"
                        >check</span
                      >
                    </div>
                    <p className="text-gray-700 font-medium">
                      Students in Class 5 to 10 aiming for top ranks.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 bg-green-100 p-1 rounded-full text-green-700"
                    >
                      <span className="material-symbols-outlined text-sm font-bold"
                        >check</span
                      >
                    </div>
                    <p className="text-gray-700 font-medium">
                      Aspirants of IIT-JEE, NEET, NDA, or Navodaya Vidyalaya.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 bg-green-100 p-1 rounded-full text-green-700"
                    >
                      <span className="material-symbols-outlined text-sm font-bold"
                        >check</span
                      >
                    </div>
                    <p className="text-gray-700 font-medium">
                      Parents looking for disciplined, value-based education.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-1/3 bg-surface-light p-6 rounded-xl border border-gray-200 text-center"
              >
                <span
                  className="material-symbols-outlined text-primary text-5xl mb-4"
                  >school</span
                >
                <h3 className="font-bold text-lg text-primary mb-2">
                  Not sure which course?
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Take our quick assessment to find the perfect fit for your
                  child.
                </p>
                <button
                  className="w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Take Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-surface-light">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className="text-center mb-16">
              <span
                className="text-secondary font-bold uppercase tracking-widest text-sm"
                >Our Programs</span
              >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">
                Comprehensive Pathways
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div
                className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border-t-4 border-primary"
              >
                <div className="p-8">
                  <div
                    className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl"
                      >biotech</span
                    >
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    IIT-JEE &amp; NEET Foundation
                  </h3>
                  <p className="text-gray-500 mb-6">
                    For Class 8, 9 &amp; 10. Bridge the gap between school
                    syllabus and competitive exams.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>NCERT
                      + Advanced Concepts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span
                      >Logical Thinking Development
                    </li>
                  </ul>
                  <a
                    className="inline-flex items-center text-primary font-bold text-sm hover:text-secondary transition-colors"
                    href="#iit-section"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-lg ml-1"
                      >arrow_forward</span
                    >
                  </a>
                </div>
              </div>
              <div
                className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border-t-4 border-secondary relative"
              >
                <div
                  className="absolute top-0 right-0 bg-secondary text-navy-900 text-xs font-bold px-3 py-1 rounded-bl-lg"
                >
                  POPULAR
                </div>
                <div className="p-8">
                  <div
                    className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-navy-900 transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl"
                      >military_tech</span
                    >
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Defence Foundation
                  </h3>
                  <p className="text-gray-500 mb-6">
                    NDA, Army, Navy &amp; Airforce prep focused on discipline,
                    fitness, and academics.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>SSB
                      Interview Basics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span
                      >Physical Training &amp; Discipline
                    </li>
                  </ul>
                  <a
                    className="inline-flex items-center text-primary font-bold text-sm hover:text-secondary transition-colors"
                    href="#defence-section"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-lg ml-1"
                      >arrow_forward</span
                    >
                  </a>
                </div>
              </div>
              <div
                className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border-t-4 border-primary"
              >
                <div className="p-8">
                  <div
                    className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl"
                      >school</span
                    >
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Navodaya Vidyalaya
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Specialized coaching for Class 5 &amp; 6 students for JNV
                    Selection Test.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span
                      >Mental Ability Focus
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span
                      >Arithmetic Mastery
                    </li>
                  </ul>
                  <a
                    className="inline-flex items-center text-primary font-bold text-sm hover:text-secondary transition-colors"
                    href="#navodaya-section"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-lg ml-1"
                      >arrow_forward</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-background-light">
          <section className="py-20 border-b border-gray-200" id="iit-section">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <span
                    className="text-navy-800 font-bold bg-secondary/20 px-3 py-1 rounded text-sm mb-4 inline-block"
                    >Science &amp; Math Excellence</span
                  >
                  <h2
                    className="text-3xl md:text-4xl font-bold text-primary mb-6"
                  >
                    IIT-JEE &amp; NEET Foundation
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our curriculum is designed to make science and mathematics
                    intuitive and interesting. We don't just teach for exams; we
                    teach for understanding.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                      className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
                    >
                      <div className="text-secondary mb-2">
                        <span className="material-symbols-outlined"
                          >psychology_alt</span
                        >
                      </div>
                      <h4 className="font-bold text-primary">Logical Thinking</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Enhancing problem-solving skills beyond textbooks.
                      </p>
                    </div>
                    <div
                      className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
                    >
                      <div className="text-secondary mb-2">
                        <span className="material-symbols-outlined">menu_book</span>
                      </div>
                      <h4 className="font-bold text-primary">NCERT Concepts</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Deep dive into fundamentals for board exam excellence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div
                    className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-10"
                  ></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      alt="Science Lab"
                      className="w-full h-auto object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD239Eo-F18UeFTiPQw-0_XSuDFvaf9GtOg0O9SM2vcZT-d1o0rbWb09podZby8kzd7nzNeCZQ4cW1dgKgkDBaPLoAvBSf4E73pnTQ4vVc38VFhcnAJ1W3c2mhdcanoFoejF0-KT0gwM0pyVsmLiiWQnrmFawrKWGPj_1xz2ImCOi-QxUnnIkv3IzCffDF0uGVu4VrlK04ivO5Oa28zL5xSlsVIrmlOrhjKRAEYrByCoQu_Tc7846aTAU0FeoZpgmqz5G8ug2SZQw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="py-20 border-b border-gray-200 bg-white"
            id="defence-section"
          >
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
              <div
                className="flex flex-col md:flex-row-reverse gap-12 items-center"
              >
                <div className="w-full md:w-1/2">
                  <span
                    className="text-white font-bold bg-primary px-3 py-1 rounded text-sm mb-4 inline-block"
                    >Service to Nation</span
                  >
                  <h2
                    className="text-3xl md:text-4xl font-bold text-primary mb-6"
                  >
                    Defence Foundation
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Preparing young minds for the disciplined life of the Armed
                    Forces. We focus on holistic development—mental, physical,
                    and academic.
                  </p>
                  <ul className="space-y-4">
                    <li
                      className="flex items-center gap-4 p-4 bg-surface-light rounded-lg"
                    >
                      <span
                        className="material-symbols-outlined text-secondary bg-primary rounded-full p-2"
                        >verified_user</span
                      >
                      <div>
                        <h4 className="font-bold text-primary">
                          NDA, Army, Navy Focus
                        </h4>
                        <p className="text-sm text-gray-500">
                          Targeted preparation for specific entry schemes.
                        </p>
                      </div>
                    </li>
                    <li
                      className="flex items-center gap-4 p-4 bg-surface-light rounded-lg"
                    >
                      <span
                        className="material-symbols-outlined text-secondary bg-primary rounded-full p-2"
                        >self_improvement</span
                      >
                      <div>
                        <h4 className="font-bold text-primary">
                          Confidence Building
                        </h4>
                        <p className="text-sm text-gray-500">
                          Personality development for SSB interviews.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div
                    className="absolute inset-0 bg-secondary rounded-2xl -rotate-2 opacity-20"
                  ></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      alt="Cadets Training"
                      className="w-full h-auto object-cover"
                      src={images.army}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20" id="navodaya-section">
            <div className="max-w-[1200px] mx-auto px-4 md:px-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <span
                    className="text-navy-900 font-bold bg-green-200 px-3 py-1 rounded text-sm mb-4 inline-block"
                    >Class 5 &amp; 6 Special</span>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-primary mb-6"
                  >
                    Navodaya Vidyalaya Prep
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Jawahar Navodaya Vidyalayas offer high-quality free
                    education. We help talented rural and urban children secure
                    their spot in these prestigious institutes.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span
                      className="bg-surface-light border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-primary"
                      >Mental Ability Test (MAT)</span>
                    <span
                      className="bg-surface-light border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-primary"
                      >Arithmetic Test</span>
                    <span
                      className="bg-surface-light border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-primary"
                      >Language Test</span>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-1 bg-secondary rounded"></div>
                      <p className="text-lg font-medium text-primary italic">
                        "The stepping stone to a quality education without the
                        financial burden."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                      <div
                        className="bg-white p-4 rounded-xl shadow-md h-32 flex flex-col justify-end bg-gradient-to-br from-white to-gray-50"
                      >
                        <span
                          className="material-symbols-outlined text-primary text-3xl mb-auto"
                          >calculate</span>
                        <span className="font-bold text-navy-800">Maths</span>
                      </div>
                      <div
                        className="bg-primary p-4 rounded-xl shadow-md h-40 flex flex-col justify-end text-white"
                      >
                        <span
                          className="material-symbols-outlined text-secondary text-3xl mb-auto"
                          >extension</span>
                        <span className="font-bold">Logic</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div
                        className="bg-secondary p-4 rounded-xl shadow-md h-40 flex flex-col justify-end text-navy-900"
                      >
                        <span
                          className="material-symbols-outlined text-navy-900 text-3xl mb-auto"
                          >translate</span>
                        <span className="font-bold">Language</span>
                      </div>
                      <div
                        className="bg-white p-4 rounded-xl shadow-md h-32 flex flex-col justify-end bg-gradient-to-br from-white to-gray-50"
                      >
                        <span
                          className="material-symbols-outlined text-primary text-3xl mb-auto"
                          >school</span>
                        <span className="font-bold text-navy-800">Practice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="py-16 bg-surface-light">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <h2 className="text-2xl font-bold text-center text-primary mb-10">
              Our Teaching Philosophy
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-2 w-32 text-center">
                <div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary border border-secondary/20"
                >
                  <span className="material-symbols-outlined text-2xl"
                    >visibility</span>
                </div>
                <span className="font-bold text-sm text-primary"
                  >Visual Learning</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-32 text-center">
                <div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary border border-secondary/20"
                >
                  <span className="material-symbols-outlined text-2xl">quiz</span>
                </div>
                <span className="font-bold text-sm text-primary"
                  >Regular Testing</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-32 text-center">
                <div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary border border-secondary/20"
                >
                  <span className="material-symbols-outlined text-2xl"
                    >supervisor_account</span>
                </div>
                <span className="font-bold text-sm text-primary">Mentorship</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-32 text-center">
                <div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary border border-secondary/20"
                >
                  <span className="material-symbols-outlined text-2xl">book</span>
                </div>
                <span className="font-bold text-sm text-primary"
                  >Study Material</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-32 text-center">
                <div
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-secondary border border-secondary/20"
                >
                  <span className="material-symbols-outlined text-2xl">forum</span>
                </div>
                <span className="font-bold text-sm text-primary"
                  >Doubt Clearing</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-navy-900 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-10"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10"
          ></div>
          <div
            className="max-w-[800px] mx-auto px-4 md:px-10 relative z-10 text-center"
          >
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-8 font-display"
            >
              "We treat your child's dream as our own responsibility."
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              We understand the sacrifices middle-class parents make. That's why
              we ensure every rupee you invest translates into quality
              education, discipline, and character building for your child. No
              hidden costs, just honest teaching.
            </p>
            <div
              className="inline-flex items-center gap-4 border border-secondary/50 rounded-full px-6 py-2 bg-primary/50 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="text-secondary font-bold text-sm tracking-wide"
                >TRUSTED BY 5000+ PARENTS</span
              >
            </div>
          </div>
        </section>
        <section className="py-12 px-4 md:px-10">
          <div
            className="max-w-[1200px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-secondary via-yellow-400 to-secondary relative"
          >
            <div
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
            ></div>
            <div
              className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8"
            >
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                  Ready to lay the foundation?
                </h2>
                <p className="text-navy-800 font-medium">
                  Book a free counseling session today. No commitments.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button
                  className="px-8 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 hover:shadow-lg transition-all text-center"
                >
                  Book Free Counselling
                </button>
                <button
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-navy-900 text-navy-900 font-bold rounded-xl hover:bg-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    )};

export default FoundationCourses;