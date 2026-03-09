import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const icons = {
    'React Native': '📱', 'React.js': '⚛️', 'Node.js': '🟢',
    'Mobile App': '📱', 'Web App': '🌐', 'Backend': '⚙️'
  };

  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="pc-accent" style={{ background: project.color }} />
      <div className="pc-header">
        <div className="pc-icon" style={{ background: `${project.color}15`, color: project.color }}>
          {icons[project.category] || '🚀'}
        </div>
        <div className="pc-meta">
          <span className="tag">{project.category}</span>
          <span className="pc-status" data-status={project.status}>{project.status}</span>
        </div>
      </div>
      <h3 className="pc-title">{project.title}</h3>
      <p className="pc-desc">{project.description}</p>
      <div className="pc-tech">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="pc-tech-tag">{t}</span>
        ))}
        {project.tech.length > 4 && <span className="pc-tech-more">+{project.tech.length - 4}</span>}
      </div>
      <div className="pc-footer">
        <span className="pc-year">{project.year}</span>
        <span className="pc-arrow">View Details →</span>
      </div>
    </Link>
  );
}
