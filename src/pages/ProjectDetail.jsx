import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="not-found">
        <div className="container" style={{textAlign:'center', paddingTop:'160px'}}>
          <h1>Project Not Found</h1>
          <Link to="/projects" className="btn btn-primary" style={{marginTop:'24px'}}>← Back to Projects</Link>
        </div>
      </div>
    );
  }

  const others = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <div className="project-detail-page">
      {/* Hero */}
      <div className="pd-hero" style={{'--proj-color': project.color}}>
        <div className="pd-hero-bg" />
        <div className="container">
          <Link to="/projects" className="pd-back">← All Projects</Link>
          <div className="pd-hero-content">
            <div className="pd-tags">
              <span className="tag">{project.category}</span>
              <span className="pd-status">{project.status}</span>
              <span className="pd-year">{project.year}</span>
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-subtitle">{project.description}</p>
            <div className="pd-actions">
              {project.links.demo && project.links.demo !== '#' && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  🌐 Live Demo
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                  GitHub →
                </a>
              )}
              {project.links.demo === '#' && (
                <span className="btn btn-outline" style={{opacity:0.5, cursor:'default'}}>🔒 Private / NDA</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="section">
        <div className="container">
          {/* Media Gallery */}
          {(project.video || (project.screenshots && project.screenshots.length > 0)) && (
            <div className="pd-media-section">
              <h2 className="pd-section-title">App Preview</h2>
              
              {/* Video */}
              {project.video && (
                <div className="pd-video-container">
                  <video 
                    className="pd-video" 
                    controls 
                    poster={project.screenshots && project.screenshots[0]}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="pd-screenshots">
                  {project.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="pd-screenshot-item">
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="pd-body">
            <div className="pd-main">
              <div className="pd-section">
                <h2 className="pd-section-title">Project Overview</h2>
                <p className="pd-section-body">{project.longDescription}</p>
              </div>
              <div className="pd-section">
                <h2 className="pd-section-title">Key Features</h2>
                <ul className="pd-features">
                  {project.features.map((f, i) => (
                    <li key={i} className="pd-feature-item">
                      <span className="pf-check">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pd-sidebar">
              <div className="pds-card">
                <h3>Tech Stack</h3>
                <div className="pds-tech">
                  {project.tech.map(t => (
                    <span key={t} className="pds-tech-item">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pds-card">
                <h3>Project Info</h3>
                <div className="pds-info-row"><span>Category</span><span>{project.category}</span></div>
                <div className="pds-info-row"><span>Platform</span><span>{project.platform}</span></div>
                <div className="pds-info-row"><span>Status</span><span>{project.status}</span></div>
                <div className="pds-info-row"><span>Year</span><span>{project.year}</span></div>
              </div>
            </div>
          </div>

          {others.length > 0 && (
            <div className="pd-more">
              <h2 className="pd-section-title" style={{marginBottom:'24px'}}>Other Projects</h2>
              <div className="pd-more-grid">
                {others.map(p => (
                  <Link key={p.id} to={`/projects/${p.id}`} className="pd-other-card">
                    <div className="poc-accent" style={{background: p.color}} />
                    <div className="poc-cat">{p.category}</div>
                    <div className="poc-title">{p.title}</div>
                    <div className="poc-desc">{p.description.slice(0,80)}…</div>
                    <div className="poc-arrow">View Project →</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
