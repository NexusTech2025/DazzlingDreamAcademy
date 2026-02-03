import React from 'react';

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

  const Section = ({ children }) => <section className="container">{children}</section>;
  // Common heading style matching the rest of the site
  const Heading = ({ children }) => (
    <>
      <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2A44] text-center mb-4">{children}</h2>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
    </>
  );

  return (
    <div className="pt-20 bg-white min-h-screen about-page font-sans">
      <style>{styles}</style>

      <Section>
        <div className="hero">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F2A44] mb-6">About Dazzling Dream Academy</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p>We are a student-focused coaching institute combining strong academic foundations with modern skill-based learning.</p>
        </div>
      </Section>

      <Section>
        <div className="mission">
          <div className="image-box">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Classroom" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0F2A44] mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
            <p className="mb-4 text-gray-600 text-lg">To help every student learn confidently and become future-ready.</p>
            <p className="mb-6 text-gray-600"><strong>Led by Radhey Soni</strong>, we focus on clarity and discipline.</p>
            <div className="values">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-3">Core Values</h3>
              <ul>
                <li>✔ Discipline & Dedication</li>
                <li>✔ Conceptual Clarity</li>
                <li>✔ Student-Centric Approach</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="stats">
          {[
            ["2000+", "Students Taught"],
            ["10+", "Expert Teachers"],
            ["95%", "Success Rate"],
            ["7+", "Years Experience"],
          ].map(([num, label]) => (
            <div className="stat-box" key={label}>
              <div className="stat-number">{num}</div>{label}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading>Our Teaching Approach</Heading>
        <div className="method-grid">
          {["Concept-First Learning", "Regular Testing", "Visual Notes", "Small Batches", "Tech Skills", "Career Guidance"].map(m => (
            <div className="method-card" key={m}>{m}</div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading>Meet Our Faculty</Heading>
        <div className="faculty-grid">
          {[
            { name: "Radhey Soni", role: "Founder & Academic Head", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
            { name: "Rahul Soni", role: "Management Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
            { name: "Expert Faculty", role: "Subject Specialists", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
          ].map(f => (
            <div className="faculty-card" key={f.name}>
              <img src={f.img} alt={f.name} />
              <h3 className="text-xl font-bold text-[#0F2A44] mb-1">{f.name}</h3>
              <div className="faculty-role">{f.role}</div>
              <p className="text-gray-600 text-sm mt-2">Experienced and student-focused educator.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading>What Parents & Students Say</Heading>
        <div className="testimonial-track">
          {["Amazing improvement in months!", "Best coaching experience.", "Clear concepts and great support.", "Teachers are very supportive."].map((t, i) => (
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
          {["2018 Founded", "2020 500+ Students", "2023 Tech Expansion", "2025 New Campus"].map(step => (
            <div className="timeline-item" key={step}>
              <h3 className="font-bold text-xl text-[#0F2A44]">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="cta">
          <h2 className="text-3xl font-bold text-[#0F2A44] mb-2">Start Your Learning Journey Today</h2>
          <p className="text-[#0F2A44] font-medium text-lg">Admissions open for new batches</p>
          <button onClick={() => setPage('contact')}>Book Free Assessment</button>
        </div>
      </Section>
    </div>
  );
};

export default About;
