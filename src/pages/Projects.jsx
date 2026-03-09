import { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const categories = ['All', 'Mobile App', 'Web App', 'Backend'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="section-label">My Work</div>
          <h1 className="page-title">Projects</h1>
          <p className="page-desc">A collection of mobile apps, web applications, and backend services I've built.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="projects-count">
            Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
          </div>

          <div className="projects-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
