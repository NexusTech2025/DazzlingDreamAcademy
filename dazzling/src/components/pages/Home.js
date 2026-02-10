import React from 'react';
import { 
  Gift,
} from 'lucide-react';
import images from '../../assets/images.js';
import { admissionSession } from '../cards/data.js';


function OverlappingCardsLayout() {
  return (
    <section className="py-24 bg-card-bg relative overflow-hidden w-full">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-background-soft -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-navy-800 uppercase border border-navy-800/10 rounded-full font-display">
              Excellence Features
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-display text-primary mb-6 leading-tight">
              Why Dazzling Dream Academy?
            </h2>

            <p class="text-xl font-medium text-secondary mb-4 font-display">
                        We combine modern teaching methods with traditional values of discipline.
            </p>

            <p className="text-lg text-navy-800/70 mb-8 leading-relaxed">
              We don't just teach subjects; we build careers. <span className="font-semibold block mt-2 text-navy-900">Yahan sirf syllabus nahi, bacche ka future taiyaar hota hai.</span> Our dual-focus
              approach ensures academic brilliance alongside professional skill
              development.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Feature: Concept Focus */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <span className="material-symbols-outlined">
                    menu_book
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 font-display text-lg">
                    Concept Focus
                  </h4>
                  <p className="text-sm text-navy-800/60">
                    Strong focus on concepts over rote memorization.
                  </p>
                </div>
              </div>

              {/* Feature: Dual Skills */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">
                    devices
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 font-display text-lg">
                    Dual Skills
                  </h4>
                  <p className="text-sm text-navy-800/60">
                    Building academic knowledge and computer skills together.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-secondary text-primary font-display font-bold text-lg rounded-xl shadow-paper hover:shadow-paper-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <span className="material-symbols-outlined relative z-10 group-hover:rotate-12 transition-transform duration-300">
                call
              </span>
              <span className="relative z-10">Call Us Now</span>
            </button>
          </div>

          {/* Cards Right */}
          <div className="grid grid-cols-2 gap-5">
            
            {/* Feature 1: Dual Skills (Highlighted) */}
            <div className="col-span-2 bg-primary text-white p-8 rounded-2xl flex items-center gap-5 shadow-floating transform hover:scale-[1.02] transition-transform cursor-pointer border border-white/5">
              <div className="p-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl">
                  devices
                </span>
              </div>
              <div>
                <h3 className="font-bold text-xl font-display mb-1">
                  Dual Skills
                </h3>
                <p className="text-sm text-blue-200/80">
                  Academics + Computer
                </p>
              </div>
            </div>

            {/* Feature 2: Simple Style */}
            <div className="bg-card-bg p-6 rounded-2xl border border-navy-800/5 shadow-paper flex flex-col gap-4 hover:border-secondary transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform origin-center">
                <span className="material-symbols-outlined text-3xl">
                  psychology
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 font-display text-lg">
                  Simple Style
                </h3>
                <p className="text-xs text-navy-800/60 mt-1">
                  Easy to understand
                </p>
              </div>
            </div>

            {/* Feature 3: Concept Focus (Offset) */}
            <div className="bg-card-bg p-6 rounded-2xl border border-navy-800/5 shadow-paper flex flex-col gap-4 hover:border-primary transition-colors cursor-pointer group transform translate-y-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform origin-center">
                <span className="material-symbols-outlined text-3xl">
                  menu_book
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy-900 font-display text-lg">
                  Concept Focus
                </h3>
                <p className="text-xs text-navy-800/60 mt-1">
                  No rote memorization
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const ParentTrustSystem = () => {
  return (
    <>
      {/* HEADER */}
      <div className="pt-24 pb-12 text-center px-4">

        <h2 className="text-3xl md:text-5xl font-bold font-display text-primary mb-6 leading-tight">
          Padhai Jo Samajhna  <br className="hidden md:block" /> Aasan Banaye
        </h2>

        <p className="text-xl text-navy-800/80 font-medium max-w-2xl mx-auto italic">
          "Ab Parents ko Koi confusion nahi, Sirf clarity Milegi."
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-rounded text-sm">
                  person_search
                </span>
                Transparency
              </div>

              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">
                Know Your Child’s Teacher
              </h3>

              <p className="text-lg text-navy-800/80 mb-8 leading-relaxed">
                Every teacher has a public profile. You can see exactly who they
                are, their qualifications, teaching experience, and which
                subjects they specialize in.
              </p>

              <div className="border-l-4 border-secondary pl-6 py-4 bg-yellow-50/50 rounded-r-xl border border-yellow-100/50">
                <p className="text-primary font-bold text-lg mb-1">
                  "Ab aapko pata hoga ki bacche ko kaun padha raha hai."
                </p>
                <p className="text-sm text-navy-800/60">
                  No hidden faculty. No franchise teachers.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10" />

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy-50 border-2 border-white shadow-sm overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
                      alt="Teacher"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">
                      Amit Verma
                    </h4>
                    <p className="text-sm text-secondary font-medium">
                      Senior Physics Faculty
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Experience</span>
                    <span className="font-bold text-primary">12 Years</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-500">Subject</span>
                    <span className="font-bold text-primary">
                      Physics (JEE/NEET)
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="material-symbols-rounded text-sm text-secondary">
                    verified
                  </span>
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-lg">Daily Schedule</h4>
                  <span className="text-xs bg-secondary text-primary px-2 py-1 rounded font-bold">
                    LIVE STATUS
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg border-l-4 border-secondary flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold">Mathematics</div>
                      <div className="text-xs text-gray-400">
                        10:00 AM - 11:30 AM
                      </div>
                    </div>
                    <span className="material-symbols-rounded text-secondary">
                      play_circle
                    </span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-lg border-l-4 border-blue-400 flex justify-between items-center opacity-60">
                    <div>
                      <div className="text-sm font-bold">Chemistry</div>
                      <div className="text-xs text-gray-400">
                        12:00 PM - 01:30 PM
                      </div>
                    </div>
                    <span className="material-symbols-rounded text-gray-400">
                      lock_clock
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-4 rounded-xl shadow-lg font-bold font-display text-center">
                <span className="block text-2xl">No</span>
                <span className="text-sm">Confusion</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
                <span className="material-symbols-rounded text-sm">
                  calendar_month
                </span>
                Class Tracking
              </div>

              <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Clear View of Classes
              </h3>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                Complete transparency. See all ongoing classes, schedules, and
                topic details in one simple dashboard view.
              </p>

              <div className="border-l-4 border-secondary pl-6 py-4 bg-white/5 rounded-r-xl">
                <p className="text-white font-bold text-lg mb-1">
                  "Sab kuch ek jagah, bina kisi confusion ke."
                </p>
                <p className="text-sm text-blue-200/60">
                  Real-time timetable updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: UPDATES ================= */}
      <section className="py-20 bg-navy-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <span className="material-symbols-rounded text-sm">
                  campaign
                </span>
                Notice Board
              </div>

              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">
                Digital Notice Board
              </h3>

              <p className="text-lg text-navy-800/80 mb-8 leading-relaxed">
                One single source for entrance exam dates, new academic
                sessions, and academy announcements. You won't miss a thing.
              </p>

              <div className="border-l-4 border-secondary pl-6 py-4 bg-white rounded-r-xl shadow-sm border border-gray-100">
                <p className="text-primary font-bold text-lg mb-1">
                  "Baar-baar phone karke puchne ki zarurat nahi."
                </p>
                <p className="text-sm text-navy-800/60">
                  Instant notifications for every update.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center">
              <div className="relative w-full max-w-md space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-100 flex gap-4 items-start z-30">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                    <span className="material-symbols-rounded">campaign</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-sm">
                      Exam Date Announced
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      Final exams start from March 15th. Click to view
                      timetable.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start transform -translate-y-2 scale-95 opacity-80">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <span className="material-symbols-rounded">school</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-sm">
                      Scholarship Results
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      Check the list of qualified students for the merit batch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: BENEFITS (Gold Accent & Rich)     */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Gold Dot Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-primary to-navy-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="material-symbols-rounded text-sm">
                    stars
                  </span>
                  Savings & Growth
                </div>

                <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                  Scholarships & Benefits
                </h3>

                <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                  Unlock fee discounts and low-cost skill courses like basic
                  computer training. We reward merit and hard work.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <span className="material-symbols-rounded text-secondary text-2xl">
                      savings
                    </span>
                    <span className="font-medium">Fee Discounts</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <span className="material-symbols-rounded text-secondary text-2xl">
                      computer
                    </span>
                    <span className="font-medium">Skill Courses</span>
                  </div>
                </div>

                {/* Noticeable Line (Dark Theme) */}
                <div className="border-l-4 border-secondary pl-6 py-4 bg-white/5 rounded-r-xl">
                  <p className="text-secondary font-bold text-lg mb-1">
                    "Parents ka kharcha kam, bacchon ko naye mauke."
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center py-12 lg:py-0">
                {/* Hero Image for Benefits */}
                <div className="relative w-64 h-64 bg-secondary rounded-full flex items-center justify-center shadow-glow">
                  <span className="material-symbols-rounded text-[8rem] text-primary">
                    emoji_events
                  </span>

                  {/* Floating Tag 1: Programming (Glass Effect) */}
                  <div className="absolute -top-8 -left-8 bg-navy-900/60 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white/10 p-2.5 rounded-lg text-blue-300 flex items-center justify-center">
                      <span className="material-symbols-rounded text-xl">
                        terminal
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                        Skill 01
                      </p>
                      <p className="font-bold text-sm leading-tight">
                        Programming
                        <br />
                        Language
                      </p>
                    </div>
                  </div>

                  {/* Floating Tag 2: Web & App (Glass Effect) */}
                  <div className="absolute top-10 -right-16 bg-navy-900/60 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 z-20">
                    <div className="bg-white/10 p-2.5 rounded-lg text-purple-300 flex items-center justify-center">
                      <span className="material-symbols-rounded text-xl">
                        devices
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                        Skill 02
                      </p>
                      <p className="font-bold text-sm leading-tight">
                        Web & App
                        <br />
                        Development
                      </p>
                    </div>
                  </div>

                  {/* Floating Tag 3: AI Development (Glass Effect) */}
                  <div className="absolute -bottom-8 left-4 bg-navy-900/60 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white/10 p-2.5 rounded-lg text-green-300 flex items-center justify-center">
                      <span className="material-symbols-rounded text-xl">
                        smart_toy
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">
                        Skill 03
                      </p>
                      <p className="font-bold text-sm leading-tight">
                        AI
                        <br />
                        Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



function LocalTrustSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0f3460 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-blue-100">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                100% Local Faculty
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Padhai Jo<br />
                <span className="text-primary relative inline-block">
                 School Se Match Kare.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-xl text-primary font-bold mt-4">Aapke apne sheher ke teachers.</p>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our faculty members
                are{" "}
                <strong className="text-gray-900">
                  experienced educators
                </strong>{" "}
                who have taught in well-known nearby schools and understand
                exactly how students here learn, struggle, and succeed.
              </p>

              <p>
                Our core teaching team includes senior teachers with 10+ years of
                classroom experience, having worked with students from:
              </p>
            </div>

            {/* School Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Nearby Govt. & Private Schools",
                "CBSE / RBSE / ICSE",
                "English & Hindi Medium",
              ].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {label}
                </span>
              ))}
            </div>

            <p className="text-gray-600 italic border-l-4 border-secondary/50 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
              "Isi wajah se, hamara padhane ka tareeka school exam patterns se match karta hai, and addresses the real classroom difficulties
              faced by local students."
            </p>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button className="bg-primary hover:bg-blue-900 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 flex items-center gap-2 group">
                <span className="material-symbols-outlined group-hover:animate-bounce">
                  groups
                </span>
                Meet Our Faculty
              </button>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">
                  Know your teachers
                </span>
                <span className="text-xs text-gray-500">
                  They guide your child every day.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Trust Stack */}
          <div className="lg:col-span-5 space-y-10 relative mt-8 lg:mt-0">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl z-0" />

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-gray-100 relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                <span className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </span>
                Why Parents Trust Us
              </h3>

              <ul className="space-y-4">
                {[
                  "Teachers with 10+ years of real experience",
                  "Strong command over school syllabus & boards",
                  "Simple explanations in English + Hindi",
                  "Patient doubt-solving, not rushed teaching",
                  "Same teacher follows student's progress",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 group"
                  >
                    <span className="material-symbols-outlined text-green-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      check_circle
                    </span>
                    <span className="text-gray-600 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-secondary rounded-2xl p-8 shadow-lg relative z-20 transform lg:translate-x-6 overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

              <div className="absolute -top-1 -left-1">
                <span className="bg-secondary text-white px-3 py-1 rounded-br-lg rounded-tl-lg text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  Transparency Promise
                </span>
              </div>

              <div className="flex items-start gap-5 pt-4">
                <div className="w-14 h-14 bg-yellow-50 rounded-xl shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    assignment_turned_in
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-lg">
                    Monthly Report + WhatsApp Updates
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 leading-snug">
                    Regular test scores, attendance, and clear feedback on weak
                    areas. <span className="block mt-2 text-primary font-semibold text-xs">Ab aap hamesha updated rahenge.</span>
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                    <span className="material-symbols-outlined text-sm">
                      visibility
                    </span>
                    Parents are never kept in the dark
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


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
                ADMISSIONS OPEN {admissionSession}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Aim High – <br/>
                <span className="text-[#D4AF37]">Fly High</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[#D4AF37] font-medium mb-6">
                Learn Better, Grow Smarter, Succeed Faster
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We focus on understanding, practice, and progress. <span className="font-semibold text-gray-200">Sirf ratta nahi, concepts pe dhyaan dete hain.</span> We build strong academic knowledge along with useful computer skills.
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
               <span>SPECIAL OFFER: Free Basic Computer Course with every Academic Admission! <br className="sm:hidden"/> <span className="font-normal opacity-90">Kyunki aaj ke zamaane mein computer skills bhi zaroori hain.</span></span>
            </div>
         </div>
      </div>

          <ParentTrustSystem />
          <LocalTrustSection />


      {/* ============================================ */}
{/* LAYOUT 2: THE DARK MODE BENTO (Grid)         */}
{/* Best for: High Impact & Modern Tech Feel     */}
{/* ============================================ */}
<section className="py-24 bg-primary text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        ACADEMIC COURSES
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Excellence in Every Field
      </h2>
      <p className="text-blue-100/80">
        Tailored programs for academic learning and professional success. <br/> <span className="font-semibold text-blue-50">Padhai aisi, jo career bhi banaye.</span>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Large Featured Card (Academic) */}
      <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex-1 z-10">
          <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-6">
            <span className="material-symbols-outlined">menu_book</span>
          </div>

          <h3 className="text-2xl font-bold mb-3">Academic Courses</h3>
          <p className="text-blue-100/70 mb-6 max-w-md">
            Comprehensive coverage for Class 1-10 and specialized streams for 11-12.
            We make complex concepts simple through visualization.
          </p>

          <button className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white text-white hover:text-primary font-medium transition-all text-sm">
            View Curriculum
          </button>
        </div>

        {/* Abstract illustration representation */}
        <div className="w-full md:w-48 h-48 bg-gradient-to-br from-blue-500/20 to-secondary/20 rounded-2xl border border-white/10 flex items-center justify-center relative">
          <div className="absolute inset-4 border border-white/20 rounded-xl" />
          <span className="material-symbols-outlined text-6xl text-white/20">
            school
          </span>
        </div>
      </div>

      {/* Vertical Stack Right */}
      <div className="space-y-6">
        {/* Defence Card */}
        <div className="bg-gradient-to-br from-secondary/10 to-transparent border border-white/10 rounded-3xl p-6 hover:border-secondary/50 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <span className="material-symbols-outlined text-white/20 group-hover:text-secondary group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2">Defence & Foundation</h3>
          <p className="text-sm text-blue-100/60">
            Targeted prep for IIT-JEE, NEET & Armed Forces entrance exams.
          </p>
        </div>

        {/* Computer Card */}
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-3xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-300">
              <span className="material-symbols-outlined">desktop_windows</span>
            </div>
            <span className="material-symbols-outlined text-white/20 group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
              arrow_forward
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2">Computer Courses</h3>
          <p className="text-sm text-blue-100/60">
            From RS-CIT basics to professional programming languages. Including App developement and AI Development and AI tool uses.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="
      max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32
      bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 antialiased selection:bg-secondary selection:text-white py-20 space-y-32">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs font-bold tracking-wider uppercase mb-6 border border-blue-100 dark:border-primary/30">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Comprehensive Education
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-6 tracking-tight">
                Empowering <span className="text-primary dark:text-blue-400 relative inline-block">Students
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path></svg>
                </span> &amp; Parents
            </h1>
            <p className="text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-2xl mx-auto">
                Our dual-focus dashboard approach ensures students master complex topics while parents track academic growth in real-time.
            </p>
        </div>

        {/* STUDENT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Column: Features */}
            <div className="flex-1 space-y-10 order-2 lg:order-1">
                <div className="relative pl-8 border-l-4 border-secondary/80">
                    <div className="absolute -left-[1.15rem] top-0 bg-background-light dark:bg-background-dark p-1">
                        <span className="material-symbols-outlined text-secondary text-4xl">school</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Smart Study Support</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        A structured environment with interactive modules to simplify complex topics. <span className="block mt-2 font-medium text-gray-600">Taaki bacche ko har topic aasaani se samajh aaye.</span>
                    </p>
                </div>

                <div className="grid gap-5">
                    {/* Feature 1 */}
                    <div className="group relative p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">visibility</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Visual Learning</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 max-w-xs">
                                        Diagrams &amp; interactive graphics.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:flex flex-col items-end gap-1">
                                <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+24% Retention</div>
                                <div className="flex items-end gap-1 h-8 mt-2">
                                    <div className="w-1.5 bg-blue-100 dark:bg-blue-800 rounded-t-sm h-[40%]"></div>
                                    <div className="w-1.5 bg-blue-200 dark:bg-blue-700 rounded-t-sm h-[60%]"></div>
                                    <div className="w-1.5 bg-primary dark:bg-blue-500 rounded-t-sm h-[90%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">library_books</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Structured Notes</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 max-w-xs">
                                        Organized content for every subject.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-24 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                                    </div>
                                    <span className="text-xs font-bold text-secondary">75%</span>
                                </div>
                                <p className="text-[10px] text-right text-gray-400 mt-1">Completion Rate</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 (New) */}
                    <div className="group relative p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">menu_book</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Formula &amp; Summary Books</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 max-w-xs">
                                        Special booklets for quick revision for each subject.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="relative w-14 h-10 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded shadow-sm flex items-center justify-center overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                                    <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 font-bold">∑x²</div>
                                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-primary rounded-full opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 (New) */}
                    <div className="group relative p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">quiz</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Continuous Practice</h3>
                                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 max-w-xs">
                                        Regular tests to assess student progress.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:flex flex-col gap-1.5 mt-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white font-bold">check</span></div>
                                    <div className="h-1 w-12 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full w-full bg-green-500 rounded-full"></div></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center"><span className="material-symbols-outlined text-[8px] text-white font-bold">check</span></div>
                                    <div className="h-1 w-12 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-green-500 rounded-full"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button className="flex items-center gap-2 text-primary dark:text-blue-400 font-semibold hover:gap-3 transition-all group">
                        Explore Student Features 
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative group perspective-1000">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700 bg-white dark:bg-gray-800 transition-transform duration-500 hover:-translate-y-1">
                        {/* Browser Header */}
                        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        
                        {/* Image Content */}
                        <div className="relative aspect-[4/3]">
                            <img alt="Student Dashboard Interface" className="w-full h-full object-cover opacity-20 dark:opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmrWCapY-Cykra2SjK_HpHpmEVOkAcVBkIA4HuGltk5HMc4hpZEZNFCsr1h3oAtnL5S6SLIponxzSbi3lJ5JD0bsKtz1dqet7kl851rDPAwMmbQbEvF21wYui6ZrkKebL7bn6eT5CIRT5RMYKB9_QlFcz5Q2JH30K57iAMmH2VMsS5Pu8uRbVXdCQgWMEwBmRgXqVK5AJnquEjALr8Qi_Kn7OoTKYJ6ajz-R-y9-Ci4EumPrDJw82JbNZnjwc3yWjKVMoAzsGg9xw"/>
                            
                            {/* Overlay UI Elements */}
                            <div className="absolute inset-0 p-6 flex flex-col gap-4">
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-white dark:bg-gray-700/80 backdrop-blur rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-600">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Physics</div>
                                        <div className="text-xl font-bold text-primary dark:text-white">A-</div>
                                    </div>
                                    <div className="bg-white dark:bg-gray-700/80 backdrop-blur rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-600">
                                        <div className="text-[10px] text-gray-500 uppercase font-bold">Math</div>
                                        <div className="text-xl font-bold text-secondary">B+</div>
                                    </div>
                                    <div className="bg-primary text-white rounded-lg p-3 shadow-md flex items-center justify-center">
                                        <span className="material-symbols-outlined">play_arrow</span>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white dark:bg-gray-700/90 backdrop-blur rounded-xl border border-gray-100 dark:border-gray-600 p-4 shadow-lg relative overflow-hidden">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm">Course Progress</h4>
                                        <span className="text-xs text-blue-500 font-medium">Weekly View</span>
                                    </div>
                                    <div className="flex items-end justify-between h-32 px-2 gap-2">
                                        <div className="w-full bg-blue-50 dark:bg-gray-600 rounded-t h-[30%]"></div>
                                        <div className="w-full bg-blue-100 dark:bg-gray-500 rounded-t h-[50%]"></div>
                                        <div className="w-full bg-blue-200 dark:bg-blue-400 rounded-t h-[75%] relative group-hover:h-[85%] transition-all duration-700"></div>
                                        <div className="w-full bg-primary dark:bg-blue-600 rounded-t h-[60%]"></div>
                                        <div className="w-full bg-blue-100 dark:bg-gray-500 rounded-t h-[40%]"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Notification */}
                            <div className="absolute -right-4 top-20 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-600 flex items-center gap-3 animate-bounce" style={{"animationDuration": "3s"}}>
                                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-900 dark:text-white">Homework Done</div>
                                    <div className="text-[10px] text-gray-500">Just now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* PARENT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Column: Image */}
            <div className="flex-1 w-full order-1">
                <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-yellow-100 dark:from-yellow-900/20 dark:to-secondary/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700 bg-white dark:bg-gray-800 transition-transform duration-500 hover:-translate-y-1">
                        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                            </div>
                            <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        </div>
                        <div className="relative aspect-[4/3]">
                            <img alt="Parent reviewing progress reports" className="w-full h-full object-cover opacity-20 dark:opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbW_aE8lOure4PO3VgpwYb1TZWK0FpbT_y7AKuXXq1iipcJ0EUIIpFiG2u6ykFEYTlXDiTl2gUZnZ23Naxr4CpH4ZY9lUJREL9RQMKNC18Q-RUPi2VdpxgQyRpgQb5bkBxU7cQMb_CV_DStXI8dP-ZzAZ9wUEuMFA4MXQ7XQiO7_otrQrQZuE2l4x7GFb57GRVKaaZXkmcj9Hk-8-qfc7dSgwc_vGvoGYvKRtp_dY1eLnck9_7g2128MIoqAindPrlmBwr16myWk"/>
                            
                            {/* Overlay UI */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-center">
                                <div className="bg-white dark:bg-gray-700 shadow-xl rounded-xl p-5 border border-gray-100 dark:border-gray-600 transform translate-x-4 rotate-2 opacity-90 absolute right-10 top-10 w-2/3 z-0"></div>
                                <div className="bg-white dark:bg-gray-700 shadow-2xl rounded-xl p-6 border-l-4 border-l-secondary relative z-10 w-full max-w-sm mx-auto">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">Monthly Report</div>
                                            <div className="text-lg font-bold text-gray-900 dark:text-white">Student Performance</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                    </div>
                                    <div className="h-24 w-full flex items-end justify-between gap-1 mb-4 relative">
                                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                                            <path className="drop-shadow-sm" d="M0 40 L 20 35 L 40 20 L 60 25 L 80 10 L 100 5" fill="none" stroke="#d4af37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                                            <path d="M0 40 L 20 35 L 40 20 L 60 25 L 80 10 L 100 5 V 50 H 0 Z" fill="url(#grad1)" opacity="0.2"></path>
                                            <defs>
                                                <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                                                    <stop offset="0%" style={{"stopColor":"#d4af37","stopOpacity":1}}></stop>
                                                    <stop offset="100%" style={{"stopColor":"#d4af37","stopOpacity":0}}></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute left-[20%] top-[70%] w-2 h-2 bg-white border-2 border-secondary rounded-full"></div>
                                        <div className="absolute left-[40%] top-[40%] w-2 h-2 bg-white border-2 border-secondary rounded-full"></div>
                                        <div className="absolute left-[80%] top-[20%] w-2 h-2 bg-white border-2 border-secondary rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded">+15% vs last month</span>
                                        <span className="text-xs text-gray-400">Consistent improvement</span>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Features */}
            <div className="flex-1 space-y-10 order-2">
                <div className="relative pl-8 border-l-4 border-primary/80">
                    <div className="absolute -left-[1.15rem] top-0 bg-background-light dark:bg-background-dark p-1">
                        <span className="material-symbols-outlined text-primary dark:text-blue-400 text-4xl">bar_chart</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Parent Progress System</h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Gain transparent insights into your child's academic journey and growth areas. <span className="block mt-2 font-medium text-gray-600">Aapko aapke bacche ki progress hamesha dikhti rahegi.</span>
                    </p>
                </div>

                <div className="grid gap-5">
                    {/* Feature 1 */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary dark:text-yellow-400 group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-2xl">insights</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Performance Trends</h3>
                                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">IMPROVING</span>
                                </div>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 mb-3">
                                    Detailed reports on strengths &amp; weaknesses.
                                </p>
                                <div className="h-6 w-full flex items-end gap-0.5 opacity-50">
                                    <div className="w-1/6 bg-gray-300 dark:bg-gray-600 h-[20%] rounded-t-sm"></div>
                                    <div className="w-1/6 bg-gray-300 dark:bg-gray-600 h-[40%] rounded-t-sm"></div>
                                    <div className="w-1/6 bg-gray-300 dark:bg-gray-600 h-[30%] rounded-t-sm"></div>
                                    <div className="w-1/6 bg-gray-300 dark:bg-gray-600 h-[60%] rounded-t-sm"></div>
                                    <div className="w-1/6 bg-secondary h-[80%] rounded-t-sm"></div>
                                    <div className="w-1/6 bg-secondary h-[100%] rounded-t-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary dark:text-yellow-400 group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-2xl">dashboard</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Statistics Dashboard</h3>
                                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">LIVE</span>
                                </div>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 mb-2">
                                    Monitor attendance &amp; grade improvements.
                                </p>
                                <div className="flex gap-2 text-xs font-semibold text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> 98% Attend.
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> A Avg.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 (New) */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary dark:text-yellow-400 group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-2xl">visibility</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Transparent Tracking</h3>
                                </div>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 mb-2">
                                    Test results and progress tracking shared directly.
                                </p>
                                <div className="h-6 w-full flex items-center gap-1 opacity-60 px-1">
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <div className="h-[1px] flex-1 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                    <div className="h-[1px] flex-1 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 (New) */}
                    <div className="group p-5 rounded-2xl bg-white dark:bg-card-dark shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary dark:text-yellow-400 group-hover:rotate-12 transition-transform">
                                <span className="material-symbols-outlined text-2xl">reviews</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Honest Guidance</h3>
                                </div>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mt-1 mb-2">
                                    Constructive feedback to help students grow.
                                </p>
                                <div className="flex items-center gap-0.5 mt-1">
                                    <span className="material-symbols-outlined text-sm text-yellow-400" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-sm text-yellow-400" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-sm text-yellow-400" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-sm text-yellow-400" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
                                    <span className="material-symbols-outlined text-sm text-yellow-400" style={{"fontVariationSettings": "'FILL' 1"}}>star_half</span>
                                    <span className="text-[10px] text-gray-400 ml-2 font-medium">4.8/5 Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button className="flex items-center gap-2 text-primary dark:text-blue-400 font-semibold hover:gap-3 transition-all group">
                        See Parent Demo
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* Why Choose Us Section */}
    <OverlappingCardsLayout />

    </div>
  );
};

export default Home;
