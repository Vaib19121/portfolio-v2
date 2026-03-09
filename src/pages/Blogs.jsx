import { blogs } from '../data/portfolioData';
import './Blogs.css';

export default function Blogs() {
  return (
    <div className="blogs-page">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="section-label">Writing</div>
          <h1 className="page-title">Blogs</h1>
          <p className="page-desc">Thoughts, tutorials, and insights from my experience building mobile apps.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map((blog, i) => (
              <article key={blog.id} className="blog-card" style={{'--blog-color': blog.color}}>
                <div className="bc-accent" style={{background: blog.color}} />
                <div className="bc-header">
                  <div className="bc-tags">
                    {blog.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <span className="bc-read">{blog.readTime}</span>
                </div>
                <h2 className="bc-title">{blog.title}</h2>
                <p className="bc-excerpt">{blog.excerpt}</p>
                <div className="bc-footer">
                  <span className="bc-date">{blog.date}</span>
                  <button className="bc-read-btn">Read More →</button>
                </div>
              </article>
            ))}
          </div>

          <div className="blogs-cta">
            <div className="section-label" style={{justifyContent:'center'}}>More Content</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Want to read more?</h2>
            <p style={{color:'var(--text-secondary)', textAlign:'center', marginBottom:'28px'}}>
              Follow me on social media for more tips, tutorials, and updates about mobile development.
            </p>
            <div style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="https://github.com/Vaib19121" target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href="mailto:vaibhavmehar16@gmail.com" className="btn btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
