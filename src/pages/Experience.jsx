import { experiences } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-page">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="section-label">Career</div>
          <h1 className="page-title">Experience</h1>
          <p className="page-desc">My professional journey building mobile and web applications.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div key={exp.id} className={`exp-item ${exp.current ? 'current' : ''}`}>
                <div className="exp-timeline-side">
                  <div className="exp-dot">
                    {exp.current && <div className="exp-dot-pulse" />}
                  </div>
                  {i < experiences.length - 1 && <div className="exp-line" />}
                </div>
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">{exp.company}</div>
                      <div className="exp-meta">
                        <span>📍 {exp.location}</span>
                        <span>📅 {exp.duration}</span>
                        <span className={`exp-type ${exp.current ? 'current' : ''}`}>{exp.type}</span>
                      </div>
                    </div>
                    {exp.current && <span className="exp-current-badge">Current</span>}
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="exp-highlight">{h}</li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {exp.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="edu-section">
            <div className="section-label">Education</div>
            <h2 className="section-title" style={{marginBottom:'32px'}}>Academic Background</h2>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-degree">Bachelor of Engineering — Computer Engineering</div>
                <div className="edu-school">Government College of Engineering</div>
                <div className="edu-location">Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
