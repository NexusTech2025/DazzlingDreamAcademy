import React from "react";

const AcademyCourses = () => {
  return (
    <div>
          <section
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-primary overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#c9a24d 1px, transparent 1px);",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1
          className="text-white text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1]"
        >
          School Excellence Program
        </h1>
        <h2
          className="text-accent text-xl md:text-3xl font-medium mb-10 tracking-wide uppercase"
        >
          Achieve Academic Excellence
        </h2>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            className="w-full sm:w-auto bg-gold-gradient text-primary font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:scale-105 transition-transform duration-200"
          >
            Enroll Now
          </button>
          <button
            className="w-full sm:w-auto bg-transparent border-2 border-accent text-accent font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent/10 transition-colors"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
              className 1 - 5
            </span>
            <h2 className="text-primary text-3xl md:text-4xl font-bold">
              Foundational Learning
            </h2>
            <p className="text-primary/70 mt-4 max-w-2xl mx-auto">
              Building the core pillars of education through interactive and
              engaging methodologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  menu_book
                </span>
              </div>
              <h3 className="text-primary text-xl font-bold mb-3">Literacy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Developing strong reading, writing, and comprehension skills
                from an early age.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  calculate
                </span>
              </div>
              <h3 className="text-primary text-xl font-bold mb-3">Numeracy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Mastering numbers, basic operations, and logical reasoning
                through play.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">science</span>
              </div>
              <h3 className="text-primary text-xl font-bold mb-3">Science</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Exploring the natural world through curiosity-driven experiments
                and observation.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">palette</span>
              </div>
              <h3 className="text-primary text-xl font-bold mb-3">Creativity</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fostering imagination and artistic expression through diverse
                mediums.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                className 6 - 8
              </span>
              <h2 className="text-primary text-4xl md:text-5xl font-bold leading-tight mb-6">
                Analytical Thinking &amp; Problem Solving
              </h2>
              <p className="text-primary/80 text-lg leading-relaxed mb-8">
                Our middle school curriculum transitions from foundational
                learning to critical analysis. Students learn to deconstruct
                complex problems, analyze data, and formulate logical solutions,
                preparing them for higher academic challenges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent bg-accent/10 rounded-full p-0.5 text-base">
                    check
                  </span>
                  <span className="text-primary font-medium">
                    Inquiry-based learning modules
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent bg-accent/10 rounded-full p-0.5 text-base">
                    check
                  </span>
                  <span className="text-primary font-medium">
                    Advanced STEM projects
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent bg-accent/10 rounded-full p-0.5 text-base">
                    check
                  </span>
                  <span className="text-primary font-medium">
                    Collaborative workshop environments
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200/50 relative overflow-hidden">
                <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-primary font-bold text-lg">
                      Growth Trajectory
                    </h3>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                      Student Performance Dashboard
                    </p>
                  </div>
                  <div className="p-2 bg-background-soft rounded-lg text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wider text-primary">
                      <span>Logic &amp; Reasoning</span>
                      <span className="text-accent">92%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wider text-primary">
                      <span>Quantitative Aptitude</span>
                      <span className="text-accent">88%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full w-[88%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wider text-primary">
                      <span>Verbal Ability</span>
                      <span className="text-accent">95%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[95%]"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-background-soft p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary">A+</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">
                      Overall Grade
                    </div>
                  </div>
                  <div className="bg-background-soft p-4 rounded-xl">
                    <div className="text-2xl font-bold text-accent">Top 5%</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">
                      Percentile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
              className 9 - 10
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
              Board Exam Focus
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A structured approach designed to maximize performance in national
              board examinations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full border border-accent/20 bg-white/5 flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h3 className="font-bold text-base">Fundamentals</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full border border-accent/20 bg-white/5 flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-2xl">
                  workspace_premium
                </span>
              </div>
              <h3 className="font-bold text-base">Mastery</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full border border-accent/20 bg-white/5 flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-2xl">
                  monitoring
                </span>
              </div>
              <h3 className="font-bold text-base">Trackers</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full border border-accent/20 bg-white/5 flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-2xl">quiz</span>
              </div>
              <h3 className="font-bold text-base">Assessment</h3>
            </div>
          </div>
          <div className="relative max-w-5xl mx-auto pt-10">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 hidden md:block"></div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative z-10">
              <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="size-3 bg-accent rounded-full mb-4 shadow-[0_0_15px_rgba(201,162,77,0.8)]"></div>
                <h4 className="text-accent font-bold text-sm mb-1 uppercase tracking-wider">
                  Concept Clarity
                </h4>
                <p className="text-white/50 text-[10px] max-w-[150px] leading-relaxed">
                  Deep dive into core textbook concepts
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="size-3 bg-white rounded-full mb-4 border border-accent"></div>
                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                  Application
                </h4>
                <p className="text-white/50 text-[10px] max-w-[150px] leading-relaxed">
                  Solving complex, real-world problems
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="size-3 bg-white rounded-full mb-4 border border-accent"></div>
                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                  Pre-Boards
                </h4>
                <p className="text-white/50 text-[10px] max-w-[150px] leading-relaxed">
                  Simulated exam environment practice
                </p>
              </div>
              <div className="flex flex-col items-center text-center w-full md:w-1/4">
                <div className="size-6 bg-gold-gradient rounded-full mb-3 flex items-center justify-center text-primary shadow-lg scale-110">
                  <span className="material-symbols-outlined text-[12px] font-black">
                    star
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                  Final Exam
                </h4>
                <p className="text-white/50 text-[10px] max-w-[150px] leading-relaxed">
                  Peak performance delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-[#FFFDF5]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
            <div>
              <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                className 10 - 11 Transition
              </span>
              <h2 className="text-primary text-4xl font-bold">Bridge Course</h2>
            </div>
            <p className="text-primary/70 max-w-md md:text-right text-sm leading-relaxed">
              Seamlessly connecting the secondary curriculum to higher secondary
              specialization streams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>
              <h3 className="text-primary text-2xl font-bold mb-4">
                Curriculum Connection
              </h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                We bridge the gap between className 10 concepts and className 11
                advanced theories, ensuring no student is left behind during
                this critical jump in difficulty. Our specialized faculty
                explain each concept in simple terms, with practice examples.
                Also provides board exam perspective visual notes for each
                subject (PCM/B) and practice on JEE/IIT questions for extra
                preparation.
              </p>
              <a
                className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                href="#"
              >
                View Syllabus
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
              <h3 className="text-primary text-2xl font-bold mb-4">
                Stream Selection Guidance
              </h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Expert counseling and aptitude testing to help students choose
                between Science, Commerce, and Humanities based on their
                strengths.
              </p>
              <a
                className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                href="#"
              >
                Take Aptitude Test
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-16">
            Holistic Learning Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                psychology
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  Cognitive Skills
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Enhanced memory, attention, and processing speed.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                assignment_turned_in
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  Board Readiness
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  100% preparedness for syllabus and exam patterns.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                forum
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  Communication
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Articulate expression in both written and verbal forms.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                groups
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  Collaboration
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Ability to work effectively in diverse team settings.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                lightbulb
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Innovation</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Thinking outside the box to generate novel solutions.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
              <span className="material-symbols-outlined text-accent text-2xl bg-accent/5 p-3 rounded-xl">
                favorite
              </span>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  Emotional Intelligence
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Self-awareness and empathy towards peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-primary text-4xl font-bold text-center mb-20">
            Learn from the Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-accent/20 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 mb-8 p-1 border border-accent/10 relative">
                <img
                  alt="Dr. Sarah Jenkins"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDianDT78a5j_7p2LVMab7YdMYESjUeXEY-s6_E95tb8PoJx7QQ3z36qC8PKlhCd_v1bL1-5KvQhfklPYu7aGdzQyp7rroW0aEcAC23mPXIvT-jpB0IW40ksoEU5cNJ9twty-IMJrkV0QjmeYUU2G_Dk05TCP9l2UpYWVVlga9MbiqYlMfpx32ymy4iFxV1_Bg9EyExozdJevLC-GE-3QNyi6xgCLTXYNcajsKfFWD1plDMuO2k5eAC55bSutl3zzzZqAAtJ6IO4Q"
                />
              </div>
              <h3 className="text-primary text-xl font-bold mb-1">
                Dr. Sarah Jenkins
              </h3>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">
                Physics Specialist
              </p>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Ph.D. in Theoretical Physics with 15 years of teaching
                experience.
              </p>
            </div>
            <div className="border border-accent/20 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 bg-white transform md:-translate-y-4 group">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 mb-8 p-1 border border-accent/10 relative">
                <img
                  alt="Robert Chen"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvD_sKrV7dxI1imRmFB7M_rocOuo_s_JLfjKiI1R_QM3UsXN1KK_oEKKAzrSM_I__C300T3WrWtd2PeU1WJU4Y44NCbOBqadz_lz3W0o3VzCChGhSV7AQUq3edi799-MVE9f7DdpQGFR54EtHnFLgz5FsSTQ8-ZwS46rQxLuWV2mF5TzKIE0N41mAp-q6XRoD8x8aVSsr01Qf2Tyy-8apZAQOspHPEs9j1fIA2VLGalZAKfAo35-ffNHegcEXpbPXx3S7p-b-0w"
                />
              </div>
              <h3 className="text-primary text-xl font-bold mb-1">Robert Chen</h3>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">
                Mathematics Lead
              </p>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Former Olympiad coach specializing in competitive exam prep.
              </p>
            </div>
            <div className="border border-accent/20 rounded-2xl p-10 text-center hover:shadow-xl transition-all duration-300 bg-white group">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 mb-8 p-1 border border-accent/10 relative">
                <img
                  alt="Emily Davis"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLlG_C5-VFOAexreOY0MOWm3dKSRlMYzaUkCD13bkFqAs-jmOhOxs1sTHmUylGk6IGOxkHCvLwUZaDivK00BwcgHhM_fjLRUkTqdOjZv53tFYmWDIc2i-sdaVJgIIcGc4Hza3KsyXXtplnHJMje8c9l2Fwa4ZxCcZbpMWUx5btfrYzC7TQbJ8Gr0F6IIXcFfos3UPzbAbTucUk6yCWfe2MQSjSQaA0PQuOGdWX6axL8V2N7bSyMe9KBcZyB6nJ1yRhGys34oCDNA"
                />
              </div>
              <h3 className="text-primary text-xl font-bold mb-1">Emily Davis</h3>
              <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">
                Literature &amp; Arts
              </p>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                Award-winning author and educator fostering creative expression.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyCourses;
