import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
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
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'var(--bg-card)',
                  border: exp.current ? '1px solid rgba(0, 255, 136, 0.2)' : '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
                }}
                contentArrowStyle={{
                  borderRight: exp.current ? '7px solid rgba(0, 255, 136, 0.2)' : '7px solid var(--border)',
                }}
                date={exp.duration}
                dateClassName="timeline-date"
                iconStyle={{
                  background: exp.current ? 'var(--accent-green)' : 'var(--bg-card)',
                  border: exp.current ? '2px solid var(--accent-green)' : '2px solid var(--border)',
                  boxShadow: exp.current ? '0 0 0 4px rgba(0, 255, 136, 0.2)' : 'none',
                }}
                icon={<Briefcase size={20} strokeWidth={2} />}
              >
                <div className="exp-header">
                  <div>
                    <h3 className="vertical-timeline-element-title exp-role">{exp.role}</h3>
                    <h4 className="vertical-timeline-element-subtitle exp-company">{exp.company}</h4>
                    <div className="exp-meta">
                      <span>📍 {exp.location}</span>
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
              </VerticalTimelineElement>
            ))}

            {/* Education Timeline Element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid var(--border)',
              }}
              date="2018 - 2022"
              dateClassName="timeline-date"
              iconStyle={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border)',
              }}
              icon={<GraduationCap size={20} strokeWidth={2} />}
            >
              <h3 className="vertical-timeline-element-title edu-degree">Bachelor of Engineering — Computer Engineering</h3>
              <h4 className="vertical-timeline-element-subtitle edu-school">Government College of Engineering</h4>
              <p className="edu-location">Maharashtra, India</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
}
