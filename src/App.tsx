import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Reveal animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="blob-bg"></div>
      <div className="blob-bg blob-2"></div>

      <nav className="navbar">
        <div className="logo">
          Kalana<span>.dev</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn-primary">Connect</a></li>
        </ul>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-content reveal">
            <p className="greeting">Hi, I am</p>
            <h1 className="name">Kalana</h1>
            <h1 className="name last-name">Ranathunga</h1>
            <h2 className="role">Junior Software Engineer</h2>
            <p className="hero-desc">
              Building elegant, scalable, and modern digital experiences. With a focus on full-stack development and robust system architecture.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="https://github.com/kala726" target="_blank" rel="noreferrer" className="social-icon">
                <i className='bx bxl-github'></i>
              </a>
              <a href="https://www.linkedin.com/in/kalana-ranathunga-72660135b/" target="_blank" rel="noreferrer" className="social-icon">
                <i className='bx bxl-linkedin'></i>
              </a>
            </div>
          </div>
          <div className="hero-visual reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card main-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre>
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{\n'}
                  {'  '}<span className="property">name</span>: <span className="string">"Kalana Ranathunga"</span>,
                  {'\n  '}<span className="property">role</span>: <span className="string">"Software Engineer"</span>,
                  {'\n  '}<span className="property">passionate</span>: <span className="boolean">true</span>,
                  {'\n  '}<span className="property">skills</span>: [<span className="string">"TypeScript"</span>, <span className="string">"Next.js"</span>, <span className="string">"PHP"</span>],
                  {'\n  '}<span className="property">code</span>: <span className="function">()</span> =&gt; {'{\n'}
                  {'    '}<span className="keyword">return</span> <span className="string">"Clean & Efficient"</span>;
                  {'\n  }\n}'};
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-title reveal">
            <h2>About <span className="text-accent">Me</span></h2>
            <div className="line"></div>
          </div>
          <div className="about-content">
            <div className="glass-card about-card reveal" style={{ transitionDelay: '0.1s' }}>
              <p>
                Hello! I'm Kalana, a passionate Junior Software Engineer based in Sri Lanka. I enjoy creating things that live on the internet, from sophisticated enterprise portals to engaging, interactive web applications.
              </p>
              <p>
                My journey in software development has equipped me with a strong foundation in modern web technologies like Next.js, React, and robust backend ecosystems. I am currently focused on building accessible, human-centered products and creating admin-level approval workflows and comprehensive dashboard functionalities.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-title reveal">
            <h2>My <span className="text-accent">Skills</span></h2>
            <div className="line"></div>
          </div>
          <div className="skills-grid">
            {[
              { icon: 'bx bxl-typescript', title: 'TypeScript', desc: 'Type-safe UI & Logic' },
              { icon: 'bx bxl-react', title: 'React / Next.js', desc: 'Modern Frontend' },
              { icon: 'bx bxl-javascript', title: 'JavaScript', desc: 'Interactive DOM' },
              { icon: 'bx bxl-html5', title: 'HTML / CSS', desc: 'Semantic & Responsive UI' },
              { icon: 'bx bx-data', title: 'Databases', desc: 'SQL Data Management' },
              { icon: 'bx bxl-github', title: 'Version Control', desc: 'Git & Team Collab' },
            ].map((skill, index) => (
              <div key={index} className="glass-card skill-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                <i className={skill.icon}></i>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-title reveal">
            <h2>Featured <span className="text-accent">Projects</span></h2>
            <div className="line"></div>
          </div>
          <div className="projects-grid">
            <div className="glass-card project-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="project-content">
                <small>Enterprise Application</small>
                <h3>Govt File Management System</h3>
                <p>A comprehensive Next.js portal featuring a robust Admin Approval Workflow, User Registration, Dashboard Notifications, and Advanced Search Filtering by NIC and File Numbers.</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Tailwind</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kala726/review" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i> Code</a>
                </div>
              </div>
            </div>

            <div className="glass-card project-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="project-content">
                <small>Web Application</small>
                <h3>TravelXP</h3>
                <p>A web application built using the Blade templating engine. Focuses on providing seamless user experiences for travel enthusiasts.</p>
                <div className="project-tech">
                  <span>PHP</span>
                  <span>Blade</span>
                  <span>MySQL</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kala726/travelxp" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i> Code</a>
                </div>
              </div>
            </div>

            <div className="glass-card project-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="project-content">
                <small>Software System</small>
                <h3>Student Management System</h3>
                <p>A robust data management tool for maintaining comprehensive records of students, enabling quick retrieval and analytics.</p>
                <div className="project-tech">
                  <span>Java/C#</span>
                  <span>Database</span>
                  <span>UI</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kala726/student-management-system" target="_blank" rel="noreferrer"><i className='bx bxl-github'></i> Code</a>
                </div>
              </div>
            </div>
            <div className="glass-card project-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="project-content">
                <small>Logistics Application</small>
                <h3>Transport Management System</h3>
                <p>A comprehensive transport and logistics management application designed to handle operational workflows and scheduling efficiently.</p>
                <div className="project-tech">
                  <span>Web App</span>
                  <span>Full-Stack</span>
                  <span>Database</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kala726/office-transport-system " target="_blank" rel="noreferrer"><i className='bx bxl-github'></i> Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="glass-card contact-card reveal">
            <h2>Get In <span className="text-accent">Touch</span></h2>
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
            <div className="contact-info" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: "'Fira Code', monospace" }}>
              <a href="mailto:ranathungakalana8@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><i className='bx bx-envelope'></i> ranathungakalana8@gmail.com</a>
              <a href="https://wa.me/94764249952" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><i className='bx bx-phone'></i> +94 76 424 9952</a>
            </div>
            <div className="contact-buttons">
              <a href="mailto:ranathungakalana8@gmail.com" className="btn-primary">Say Hello <i className='bx bxs-paper-plane'></i></a>
              <div className="contact-socials">
                <a href="https://wa.me/94764249952" target="_blank" rel="noreferrer" title="WhatsApp Me"><i className='bx bxl-whatsapp'></i></a>
                <a href="https://github.com/kala726" target="_blank" rel="noreferrer" title="GitHub"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/kalana-ranathunga-72660135b/" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square'></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Built by Kalana Ranathunga using React</p>
      </footer>
    </>
  );
}

export default App;
