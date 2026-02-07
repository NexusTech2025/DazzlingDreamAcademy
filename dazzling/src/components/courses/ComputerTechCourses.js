import React from 'react';
import images from '../../assets/images.js';

const ComputerTechCourses = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      {/* <!-- Royal Navy background with a gold gradient bottom border --> */}
      <section className="relative bg-primary pt-20 pb-24 px-4 overflow-hidden"
      style={{marginTop: "72px"}}>
        {/* <!-- Background Decoration (Abstract) --> */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400 via-primary to-primary pointer-events-none"
        ></div>
        <div
          className="layout-container max-w-[960px] mx-auto text-center relative z-10"
        >
          <h1
            className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6"
          >
            Computer &amp;
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"
              > Tech Skills</span>
          </h1>
          <p
            className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Master the digital world with our premium curriculum designed for
            the innovators of tomorrow.
          </p>
          <button
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 text-base font-bold text-primary shadow-lg shadow-yellow-500/20 hover:scale-105 transition-transform"
          >
            Explore Courses
          </button>
        </div>
        {/* <!-- Gold gradient bottom border --> */}
        <div
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600"
        ></div>
      </section>
      {/* <!-- RS-CIT Certification Section --> */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-white">
        <div
          className="layout-content-container max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* <!-- Image --> */}
          <div className="w-full lg:w-1/2 relative group">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000 group-hover:duration-200"
            ></div>
            <div
              className="relative w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-xl"
              data-alt="Modern computer lab with students collaborating at desktop stations"
              style={{backgroundImage: `url('${images.computerLab}')`}}
            ></div>
          </div>
          {/* <!-- Content --> */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              <span
                className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block"
                >Government Recognized</span
              >
              <h2
                className="text-[#150f1a] text-4xl font-black leading-tight tracking-[-0.033em]"
              >
                RS-CIT Certification
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Gain a competitive edge with our government-recognized
              certification. Experience collaborative learning in our
              state-of-the-art labs equipped with the latest technology.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500"
                  >check_circle</span
                >
                <span className="text-[#150f1a] font-medium"
                  >Official Government Certification</span
                >
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500"
                  >check_circle</span
                >
                <span className="text-[#150f1a] font-medium"
                  >Hands-on Practical Training</span
                >
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-500"
                  >check_circle</span
                >
                <span className="text-[#150f1a] font-medium"
                  >Industry-Standard Curriculum</span
                >
              </li>
            </ul>
            <div className="pt-4">
              <button
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#3d1661] transition-colors shadow-lg shadow-primary/30"
              >
                Enroll in RS-CIT
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Advanced Programming Section --> */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-background-light">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-[720px] mx-auto">
            <h2
              className="text-[#150f1a] text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4"
            >
              Advanced Programming
            </h2>
            <p className="text-gray-600 text-lg">
              Master the languages of the future with our specialized,
              project-driven courses.
            </p>
          </div>
          {/* <!-- Cards Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Python Card --> */}
            <div
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-yellow-500/50 transition-colors group"
            >
              {/* <!-- Code Header --> */}
              <div
                className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-gray-400 font-mono"
                  >main.py</span
                >
              </div>
              {/* <!-- Code Body --> */}
              <div className="p-6">
                <pre className="font-mono text-xs md:text-sm leading-6 mb-6">
                  <span className="text-purple-400">import</span> <span className="text-blue-300">pandas</span> <span className="text-purple-400">as</span> <span className="text-yellow-200">pd</span>{'\n'}
                  <span className="text-gray-400"># Analyze trends</span>{'\n'}
                  <span className="text-blue-300">data</span> = <span className="text-yellow-200">pd</span>.<span className="text-yellow-300">read_csv</span>(<span className="text-green-300">'future.csv'</span>){'\n'}
                  <span className="text-yellow-300">print</span>(<span className="text-blue-300">data</span>.<span className="text-yellow-300">describe</span>())
                </pre>
                <h3
                  className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors"
                >
                  Python Data Science
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Analyze complex datasets with powerful libraries and gain
                  actionable insights.
                </p>
                <a
                  className="text-yellow-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm"
                    >arrow_forward</span
                  >
                </a>
              </div>
            </div>
            {/* <!-- Web Dev Card --> */}
            <div
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-yellow-500/50 transition-colors group"
            >
              {/* <!-- Code Header --> */}
              <div
                className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-gray-400 font-mono"
                  >app.js</span
                >
              </div>
              {/* <!-- Code Body --> */}
              <div className="p-6">
                <pre className="font-mono text-xs md:text-sm leading-6 mb-6">
                  <span className="text-purple-400">const</span> <span className="text-blue-300">buildWeb</span> = () <span className="text-purple-400">=&gt;</span> {'{'}{'\n'}
                  <span className="text-purple-400">return</span> <span className="text-green-300">"Responsive UI"</span>;{'\n'}
                  {'}'}{'\n'}
                  <span className="text-yellow-300">console</span>.<span className="text-yellow-300">log</span>(<span className="text-yellow-300">buildWeb</span>());
                </pre>
                <h3
                  className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors"
                >
                  Full Stack Web Dev
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Build responsive modern websites using the latest frameworks
                  and tools.
                </p>
                <a
                  className="text-yellow-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm"
                    >arrow_forward</span
                  >
                </a>
              </div>
            </div>
            {/* <!-- C++ Card --> */}
            <div
              className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-yellow-500/50 transition-colors group"
            >
              {/* <!-- Code Header --> */}
              <div
                className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700"
              >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-gray-400 font-mono"
                  >system.cpp</span
                >
              </div>
              {/* <!-- Code Body --> */}
              <div className="p-6">
                <pre className="font-mono text-xs md:text-sm leading-6 mb-6">
                  <span className="text-purple-400">#include</span> <span className="text-green-300">&lt;iostream&gt;</span>{'\n'}
                  <span className="text-purple-400">int</span> <span className="text-yellow-300">main</span>() {'{'}{'\n'}
                  <span className="text-yellow-200">std</span>::<span className="text-blue-300">cout</span> &lt;&lt; <span className="text-green-300">"High Perf"</span>;{'\n'}
                  <span className="text-purple-400">return</span> <span className="text-orange-400">0</span>;{'\n'}
                  {'}'}
                </pre>
                <h3
                  className="text-white text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors"
                >
                  C++ Systems
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dive deep into high-performance system programming and
                  architecture.
                </p>
                <a
                  className="text-yellow-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#"
                >
                  Learn More
                  <span className="material-symbols-outlined text-sm"
                    >arrow_forward</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!-- Teaching Methodology Section --> */}
      {/* <!-- Royal Navy section with vertical timeline --> */}
      
      <section className="bg-primary py-24 px-4 relative overflow-hidden">
        {/* <!-- Subtle Gold Texture Overlay --> */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"
        ></div>
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4"
            >
              Our Methodology
            </h2>
            <p className="text-gray-300 text-lg">
              Designed for maximum retention and practical application.
            </p>
          </div>
          {/* <!-- Vertical Timeline --> */}
          <div className="relative pl-6 md:pl-0">
            {/* <!-- Vertical Line --> */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent -translate-x-1/2"
            ></div>
            {/* <!-- Step 1 --> */}
            <div
              className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group"
            >
              {/* <!-- Icon Bubble (Absolute Center on Desktop) --> */}
              <div
                className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-[#1a092b] border-2 border-yellow-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                <span className="material-symbols-outlined text-yellow-400"
                  >group</span
                >
              </div>
              {/* <!-- Content Left (Desktop) --> */}
              <div className="md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 w-full">
                <h3 className="text-white text-xl font-bold mb-2">
                  Collaborative Learning
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Work in teams to solve complex problems, mirroring real-world
                  software development environments where communication is key.
                </p>
              </div>
              {/* <!-- Spacer Right (Desktop) --> */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
            {/* <!-- Step 2 --> */}
            <div
              className="relative flex flex-col md:flex-row items-center gap-8 mb-16 group"
            >
              {/* <!-- Icon Bubble --> */}
              <div
                className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-[#1a092b] border-2 border-yellow-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                <span className="material-symbols-outlined text-yellow-400"
                  >construction</span
                >
              </div>
              {/* <!-- Spacer Left (Desktop) --> */}
              <div className="hidden md:block md:w-1/2"></div>
              {/* <!-- Content Right (Desktop) --> */}
              <div className="md:w-1/2 md:pl-16 pl-16 md:pl-0 w-full">
                <h3 className="text-white text-xl font-bold mb-2">
                  Project-Based Strategies
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Move beyond theory. Build actual applications, websites, and
                  systems that you can add to your professional portfolio.
                </p>
              </div>
            </div>
            {/* <!-- Step 3 --> */}
            <div
              className="relative flex flex-col md:flex-row items-center gap-8 group"
            >
              {/* <!-- Icon Bubble --> */}
              <div
                className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-[#1a092b] border-2 border-yellow-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              >
                <span className="material-symbols-outlined text-yellow-400"
                  >speed</span
                >
              </div>
              {/* <!-- Content Left (Desktop) --> */}
              <div className="md:w-1/2 md:pr-16 md:text-right pl-16 md:pl-0 w-full">
                <h3 className="text-white text-xl font-bold mb-2">
                  Instant Feedback Loop
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Receive immediate mentorship and automated code reviews to
                  correct mistakes and refine your coding style instantly.
                </p>
              </div>
              {/* <!-- Spacer Right (Desktop) --> */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Final CTA --> */}
      {/* <!-- Bold Royal Navy section with gold gradient button --> */}
      <section
        className="bg-[#1a092b] py-20 px-4 text-center border-t border-white/5"
      >
        <div className="max-w-[720px] mx-auto flex flex-col items-center gap-8">
          <div
            className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-2"
          >
            <span className="material-symbols-outlined text-yellow-400 text-4xl"
              >rocket_launch</span
            >
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Ready to Excel?
          </h2>
          <p className="text-gray-300 text-lg max-w-lg">
            Join hundreds of successful graduates who have transformed their
            careers with Dazzling Dream Academy.
          </p>
          <button
            className="flex items-center justify-center rounded-xl h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#2a0f43] text-lg font-bold shadow-xl shadow-yellow-500/20 hover:scale-105 hover:shadow-yellow-500/30 transition-all"
          >
            Enroll Today
          </button>
          <p className="text-gray-500 text-sm">
            Limited seats available for the upcoming batch.
          </p>
        </div>
      </section>
    </>
  );
};

export default ComputerTechCourses;