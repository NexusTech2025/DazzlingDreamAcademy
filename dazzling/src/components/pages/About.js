import React from "react";
import images from "../../assets/images.js";
import "../../assets/css/about.css";
import TeachingApproachCard from "../cards/TeachingApproachCard.js";
import StatCard from "../cards/StatCard.js"
import ValueCard from "../cards/ValueCard.js";
import { teachingApproach, coreValues, statsData } from "../cards/data.js";

const About = ({ setPage }) => {
  const styles = `
    .about-page .container { max-width:1100px; margin:auto; padding:80px 20px; }
    /* Removed custom font-family to inherit app theme */
    /* Removed custom h1/h2 styling to use Tailwind classes */
    
    .hero { text-align:center; padding-bottom:60px; }
    .hero p { max-width:700px; margin:auto; color:#666; font-size:18px; }
    .mission { display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center; margin-bottom:90px; }
    .image-box { position:relative; }
    .image-box::before { content:""; position:absolute; top:-16px; left:-16px; width:100%; height:100%; border:3px solid #D4AF37; border-radius:12px; }
    .image-box img { width:100%; border-radius:12px; position:relative; background:#ddd; object-fit: cover; }
    .values { background:#F5F5F5; padding:30px; border-left:5px solid #D4AF37; margin-top:20px; }
    .values ul { list-style: none; }
    .values li { margin-bottom: 8px; font-weight: 500; }
    .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:30px; text-align:center; margin-bottom:90px; }
    .stat-box { background:#fff; border:1px solid #eee; padding:30px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.05); transition: transform 0.3s; }
    .stat-box:hover { transform: translateY(-5px); }
    .stat-number { font-size:36px; color:#D4AF37; font-weight:bold; display: block; }
    .method-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; margin-bottom:90px; }
    .method-card { padding:30px; border-radius:14px; background:#fff; border:1px solid #eee; text-align:center; transition:.3s; font-weight: bold; color: #0F2A44; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .method-card:hover { transform:translateY(-6px); border-color:#D4AF37; }
    .faculty-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; margin-bottom:90px; }
    .faculty-card { background:#fff; border:1px solid #eee; border-radius:14px; padding:30px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,.05); transition:.3s; }
    .faculty-card:hover { transform:translateY(-6px); border-color:#D4AF37; }
    .faculty-card img { width:120px; height:120px; border-radius:50%; object-fit:cover; margin-bottom:16px; background:#ddd; border: 3px solid #F5F5F5; }
    .faculty-role { color:#D4AF37; font-size:14px; font-weight:bold; margin-bottom:6px; text-transform: uppercase; }
    .testimonial-track { display:flex; gap:30px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:20px; -ms-overflow-style: none; scrollbar-width: none; }
    .testimonial-track::-webkit-scrollbar { display: none; }
    .testimonial { min-width:320px; scroll-snap-align:start; background:#fff; border:1px solid #eee; padding:30px; border-radius:14px; box-shadow:0 4px 12px rgba(0,0,0,.05); display: flex; flex-direction: column; justify-content: center; }
    .testimonial p { font-style: italic; color: #666; margin-bottom: 10px; flex-grow: 1; }
    .timeline { border-left:3px solid #D4AF37; padding-left:30px; margin-bottom:90px; margin-left: 10px; }
    .timeline-item { margin-bottom:40px; position:relative; }
    .timeline-item::before { content:""; width:16px; height:16px; background:#D4AF37; border-radius:50%; position:absolute; left:-39px; top:6px; border: 3px solid #fff; }
    .cta { background:#D4AF37; padding:70px 20px; text-align:center; color:#0F2A44; border-radius:18px; }
    .cta button { margin-top:20px; background:#0F2A44; color:#fff; border:none; padding:16px 40px; border-radius:8px; cursor:pointer; font-weight: bold; font-size: 1.1rem; transition: background 0.3s; }
    .cta button:hover { background: #0A1E30; }

    @media(max-width:900px){
      .mission { grid-template-columns:1fr; }
      .image-box { margin-bottom: 30px; margin-top: 10px; }
      .stats { grid-template-columns:repeat(2,1fr); }
      .method-grid, .faculty-grid { grid-template-columns:1fr; }
    }
  `;

  const Section = ({ children }) => (
    <section className="container">{children}</section>
  );
  // Common heading style matching the rest of the site
  const Heading = ({ children }) => (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A44] text-center mb-4">
        {children}
      </h2>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
    </>
  );

  return (
    <div className="pt-10 bg-white min-h-screen about-page font-sans">
      <style>{styles}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-navy-900 z-0">
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url('${images.heroPattern}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/95"></div>
          <div className="absolute inset-0 grid-bg opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl filter mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl filter mix-blend-screen"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-l-4 border-l-primary mb-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Admissions Open 2024
                </span>
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-white">
                Master Your <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary text-glow">
                  Future
                </span>
                Today
              </h1>
              <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                At
                <span className="text-white font-medium">
                  Dazzling Dream Academy
                </span>
                , we merge strong academic foundations with cutting-edge digital
                skills. Prepare for exams and the future simultaneously with our
                integrated learning approach.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                <button
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-yellow-500 text-navy-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                  onClick={() => setPage("courses")}
                >
                  <span>Explore Courses</span>
                  <span className="material-icons-round text-sm">
                    arrow_outward
                  </span>
                </button>
                <button
                  className="w-full sm:w-auto px-8 py-4 glass-card text-white hover:text-primary font-semibold rounded-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2 group"
                  onClick={() => {
                    /* Handle watch campus tour */
                  }}
                >
                  <span className="material-icons-round group-hover:scale-110 transition-transform text-secondary">
                    play_circle
                  </span>
                  <span>Watch Campus Tour</span>
                </button>
              </div>
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-display font-bold text-white">
                    1.2k+
                  </p>
                  <p className="text-sm text-slate-400">Students Enrolled</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-3xl font-display font-bold text-white">
                    100%
                  </p>
                  <p className="text-sm text-slate-400">Computer Literacy</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-3xl font-display font-bold text-white">
                    Top 10
                  </p>
                  <p className="text-sm text-slate-400">Regional Ranking</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[500px] lg:h-[600px]">
              <div className="relative z-20 w-full h-full max-w-md">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-navy-800">
                  <img
                    alt="Student looking forward confidently"
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB701PeaE5ma7ymMfpMdaO9Rn_hebYQa2_XtLHw9MWcv6PnKaUKqm0R-szMPjiFRz--vYDvXRxUqqrXL_hYG7LX2kIqmkDdg3ikmWKb3tzAX-90491PgWg0XqP7T1BFRx3C4E7E5KGe8Lco5iZ8EZ6rRfMIrLssextAQNA0gDnJIyemYBh2Z__0V-qN70YmFubZbB--PWEYDHVcydYy3V25KvFQx31aRQZE5_IAjaYC-arNivBQRGFE2nEzObOOodTM1Khp2Z2GkA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80"></div>
                </div>
              </div>
              <div className="absolute top-10 -left-4 lg:-left-12 z-30 glass-card p-4 rounded-xl shadow-xl floating border-l-4 border-l-secondary w-48">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                    <span className="material-icons-round">psychology</span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">
                      Artificial Intelligence
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Future-ready skills
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-32 -right-4 lg:-right-8 z-30 glass-card p-4 rounded-xl shadow-xl floating-delayed border-l-4 border-l-primary w-52">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <span className="material-icons-round">laptop_mac</span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">
                      Digital Skills
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Practical learning
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 lg:left-0 z-30 glass-card p-4 rounded-xl shadow-xl floating-delayed-2 border-l-4 border-l-purple-500 w-48">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <span className="material-icons-round">menu_book</span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">
                      Core Academics
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Strong foundation
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-primary/20 rounded-full z-0 animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <a
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
            href="#about"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="material-icons-round">expand_more</span>
          </a>
        </div>
      </section>

      <Section>
        <div className="py-20 bg-background-light dark:bg-navy-800 relative" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-br-3xl -z-10"></div>
                <img
                  alt="Classroom Environment"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-white dark:border-navy-900"
                  src={images.D2hall}
                />
                <div className="absolute -bottom-6 left-10 bg-white dark:bg-navy-900 p-4 rounded-lg shadow-xl border border-slate-100 dark:border-navy-700 flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <span className="material-icons-round">verified</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Verified Quality
                    </p>
                    <p className="font-bold text-navy-900 dark:text-white">
                      Standard Education
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
                  Our Mission
                </h2>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                  Building Strong Foundations for a Digital World
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Our mission is to build strong academic foundations and deliver
                  exam-oriented learning, while providing free basic computer
                  education to every enrolled student so they are confident,
                  skilled, and prepared for the future world of technology and
                  artificial intelligence.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  From Class 6 to 12, we offer a complete
                  learning framework that balances academic excellence with
                  essential computer and digital skills.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Led by</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      Radhey Soni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div class="text-center max-w-3xl mx-auto mb-14 mt-24">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-3">
            Our Core Values
          </h2>
          <p class="text-slate-500">
            Principles that guide everything we do for our students and parents.
          </p>
        </div>
        <div
          style={{ minHeight: "300px" }}
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {coreValues.map((item) => (
            <ValueCard key={item.title} item={item} />
          ))}
        </div>
      </Section>
      

            <Section>
              <div class="py-12 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-700">    
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">      
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map(item => <StatCard key={item.label} item={item} />)}
                  </div>
                </div>
              </div>
            </Section>

      <Section>
        <Heading>Our Teaching Approach</Heading>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 flex items-center">
          <div className="staggered-col">
            {teachingApproach.slice(0, 3).map((item) => (
              <TeachingApproachCard key={item.title} item={item} />
            ))}
          </div>
          <div className="staggered-col">
            {teachingApproach.slice(3).map((item) => (
              <TeachingApproachCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Heading>Meet Our Faculty</Heading>
        <div className="faculty-grid">
          {[
            {
              name: "Radhey Soni",
              role: "Founder & Academic Head",
              img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            },
            {
              name: "Rahul Soni",
              role: "Management Head",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            },
            {
              name: "Expert Faculty",
              role: "Subject Specialists",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            },
          ].map((f) => (
            <div className="faculty-card" key={f.name}>
              <img src={f.img} alt={f.name} />
              <h3 className="text-xl font-bold text-[#0F2A44] mb-1">
                {f.name}
              </h3>
              <div className="faculty-role">{f.role}</div>
              <p className="text-gray-600 text-sm mt-2">
                Experienced and student-focused educator.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading>What Parents & Students Say</Heading>
        <div className="testimonial-track">
          {[
            "Amazing improvement in months!",
            "Best coaching experience.",
            "Clear concepts and great support.",
            "Teachers are very supportive.",
          ].map((t, i) => (
            <div className="testimonial" key={i}>
              <p>"{t}"</p>
              <strong>— Student/Parent</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading>Our Journey</Heading>
        <div className="timeline">
          {[
            "2018 Founded",
            "2020 500+ Students",
            "2023 Tech Expansion",
            "2025 New Campus",
          ].map((step) => (
            <div className="timeline-item" key={step}>
              <h3 className="font-bold text-xl text-[#0F2A44]">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="cta">
          <h2 className="text-3xl font-bold text-[#0F2A44] mb-2">
            Start Your Learning Journey Today
          </h2>
          <p className="text-[#0F2A44] font-medium text-lg">
            Admissions open for new batches
          </p>
          <button onClick={() => setPage("contact")}>
            Book Free Assessment
          </button>
        </div>
      </Section>
    </div>
  );
};

export default About;
