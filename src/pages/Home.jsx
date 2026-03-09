import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, skills, projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import './Home.css';

function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-bg grid-bg" />
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-dot" />
            Available for new opportunities
          </div>
          <h1 className="hero-title">
            <span className="hero-line1">Mobile App</span>
            <span className="hero-line2">Developer<span className="hero-dot-lg">.</span></span>
          </h1>
          <p className="hero-sub">
            Hi, I'm <strong>Vaibhav Mehar</strong> — crafting seamless cross-platform experiences
            with React Native, Node.js & modern JavaScript.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <span>View My Work</span>
              <span>→</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
          <div className="hero-stats">
            {personalInfo.stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-val">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-notch" />
              <div className="phone-app-bar">
                <div className="pab-dot" style={{background:'#ff5f57'}}/>
                <div className="pab-dot" style={{background:'#febc2e'}}/>
                <div className="pab-dot" style={{background:'#28c840'}}/>
              </div>
              <div className="phone-content">
                <div className="code-line"><span className="cl-kw">import</span> <span className="cl-str">React</span> <span className="cl-kw">from</span> <span className="cl-str">'react'</span></div>
                <div className="code-line"><span className="cl-kw">import</span> {'{'} <span className="cl-fn">View</span>, <span className="cl-fn">Text</span> {'}'} <span className="cl-kw">from</span></div>
                <div className="code-line" style={{paddingLeft:'16px'}}><span className="cl-str">'react-native'</span></div>
                <div className="code-line" style={{height:'12px'}}/>
                <div className="code-line"><span className="cl-kw">export default</span> <span className="cl-fn">function</span> <span className="cl-name">App</span>{'() {'}</div>
                <div className="code-line" style={{paddingLeft:'16px'}}><span className="cl-kw">return</span> {'('}</div>
                <div className="code-line" style={{paddingLeft:'32px'}}><span className="cl-tag">&lt;View</span> <span className="cl-attr">style</span>={'{'}styles<span className="cl-tag">&gt;'</span></div>
                <div className="code-line" style={{paddingLeft:'48px'}}><span className="cl-tag">&lt;Text&gt;</span><span className="cl-str">Hello World</span><span className="cl-tag">&lt;/Text&gt;</span></div>
                <div className="code-line" style={{paddingLeft:'32px'}}><span className="cl-tag">&lt;/View&gt;</span></div>
                <div className="code-line" style={{paddingLeft:'16px'}}>{')'}</div>
                <div className="code-line">{'}'}</div>
                <div className="cursor-blink">|</div>
              </div>
            </div>
          </div>
          <div className="hero-float-card card-1">
            <span className="hfc-icon">📱</span>
            <div>
              <div className="hfc-title">React Native</div>
              <div className="hfc-sub">Cross-platform</div>
            </div>
          </div>
          <div className="hero-float-card card-2">
            <span className="hfc-icon">⚡</span>
            <div>
              <div className="hfc-title">2+ Years</div>
              <div className="hfc-sub">Experience</div>
            </div>
          </div>
          <div className="hero-float-card card-3">
            <span className="hfc-icon">🚀</span>
            <div>
              <div className="hfc-title">10+ Projects</div>
              <div className="hfc-sub">Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual-col">
            <div className="about-avatar">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <span className="avatar-initials">VM</span>
              </div>
              <div className="avatar-badge">
                <span>📍</span> Pune, India
              </div>
            </div>
            <div className="about-quick-info">
              <div className="aqi-item">
                <span className="aqi-icon">🎓</span>
                <div>
                  <div className="aqi-label">Education</div>
                  <div className="aqi-value">B.E. Computer Engineering</div>
                </div>
              </div>
              <div className="aqi-item">
                <span className="aqi-icon">💼</span>
                <div>
                  <div className="aqi-label">Current Role</div>
                  <div className="aqi-value">Software Engineer @ EC Infosolutions</div>
                </div>
              </div>
              <div className="aqi-item">
                <span className="aqi-icon">⚡</span>
                <div>
                  <div className="aqi-label">Focus</div>
                  <div className="aqi-value">React Native & Mobile Development</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text-col">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Building apps that <br /><span className="text-gradient">users love</span></h2>
            <p className="section-desc" style={{marginBottom:'24px'}}>{personalInfo.bio}</p>
            <p style={{color:'var(--text-secondary)', fontSize:'16px', lineHeight:'1.7', marginBottom:'32px'}}>
              My approach combines clean code architecture with modern development practices — from
              implementing real-time WebSocket chat to integrating payment gateways and push notifications.
              I care deeply about performance, UX, and shipping products that work reliably.
            </p>
            <div className="about-actions">
              <Link to="/experience" className="btn btn-primary">View Experience</Link>
              <a href="mailto:vaibhavmehar16@gmail.com" className="btn btn-outline">Say Hello</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Technical Skills</div>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-desc" style={{margin:'0 auto'}}>Technologies and tools I use to bring ideas to life</p>
        </div>
        <div className="skills-grid">
          <div className="skills-col">
            <h3 className="skills-col-title">Programming Languages</h3>
            {skills.languages.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="skills-col">
            <h3 className="skills-col-title">Frameworks & Libraries</h3>
            {skills.frameworks.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="skills-col skills-col-wide">
            <h3 className="skills-col-title">Other Tools & Technologies</h3>
            <div className="tools-cloud">
              {skills.tools.map(t => (
                <span key={t} className="tool-chip">{t}</span>
              ))}
            </div>
            <div className="skills-categories">
              {skills.categories.map(c => (
                <div key={c.title} className="skill-cat">
                  <span className="skill-cat-icon">{c.icon}</span>
                  <div>
                    <div className="skill-cat-title">{c.title}</div>
                    <div className="skill-cat-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.filter(p => p.featured);
  return (
    <section className="featured-section section" id="projects">
      <div className="container">
        <div className="featured-header">
          <div>
            <div className="section-label">Featured Work</div>
            <h2 className="section-title">Projects I'm proud of</h2>
          </div>
          <Link to="/projects" className="btn btn-outline">All Projects →</Link>
        </div>
        <div className="featured-grid">
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section section" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-glow" />
          <div className="section-label" style={{justifyContent:'center'}}>Let's Connect</div>
          <h2 className="cta-title">Have a project in mind?</h2>
          <p className="cta-desc">
            I'm always open to discussing new opportunities, interesting projects, or just chatting about tech.
          </p>
          <div className="cta-actions">
            <a href="mailto:vaibhavmehar16@gmail.com" className="btn btn-primary">
              <span>✉</span> Send me an email
            </a>
            <Link to="/contact" className="btn btn-outline">View Contact Page</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
}
