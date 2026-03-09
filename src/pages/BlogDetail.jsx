import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/portfolioData';
import './BlogDetail.css';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="not-found">
        <div className="container" style={{textAlign:'center', paddingTop:'160px'}}>
          <h1>Blog Not Found</h1>
          <Link to="/blogs" className="btn btn-primary" style={{marginTop:'24px'}}>← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  const otherBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  const renderContent = (section, index) => {
    switch (section.type) {
      case 'intro':
        return (
          <p key={index} className="bd-intro">
            {section.text}
          </p>
        );
      case 'heading':
        return (
          <h2 key={index} className="bd-heading">
            {section.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p key={index} className="bd-paragraph">
            {section.text}
          </p>
        );
      case 'code':
        return (
          <div key={index} className="bd-code-block">
            <div className="bd-code-header">
              <span className="bd-code-lang">{section.language || 'code'}</span>
              <button 
                className="bd-code-copy"
                onClick={() => {
                  navigator.clipboard.writeText(section.code);
                }}
              >
                Copy
              </button>
            </div>
            <pre className="bd-code">
              <code>{section.code}</code>
            </pre>
          </div>
        );
      case 'list':
        return (
          <ul key={index} className="bd-list">
            {section.items.map((item, i) => (
              <li key={i} className="bd-list-item">
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="blog-detail-page">
      {/* Hero */}
      <div className="bd-hero" style={{'--blog-color': blog.color}}>
        <div className="bd-hero-bg" />
        <div className="container">
          <Link to="/blogs" className="bd-back">← All Blogs</Link>
          
          <div className="bd-hero-content">
            <div className="bd-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            
            <h1 className="bd-title">{blog.title}</h1>
            
            <div className="bd-meta">
              <div className="bd-meta-item">
                <span className="bd-meta-icon">✍️</span>
                <span>{blog.author}</span>
              </div>
              <div className="bd-meta-item">
                <span className="bd-meta-icon">📅</span>
                <span>{blog.date}</span>
              </div>
              <div className="bd-meta-item">
                <span className="bd-meta-icon">⏱️</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section">
        <div className="container">
          <div className="bd-layout">
            <article className="bd-content">
              {blog.content.map((section, index) => renderContent(section, index))}
              
              <div className="bd-footer">
                <div className="bd-share">
                  <span className="bd-share-label">Share this article:</span>
                  <div className="bd-share-buttons">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${window.location.href}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bd-share-btn"
                    >
                      Twitter
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(blog.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bd-share-btn"
                    >
                      LinkedIn
                    </a>
                    <button 
                      className="bd-share-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="bd-sidebar">
              <div className="bd-author-card">
                <div className="bd-author-avatar">VM</div>
                <div className="bd-author-info">
                  <h3 className="bd-author-name">Vaibhav Mehar</h3>
                  <p className="bd-author-title">Mobile Developer</p>
                  <p className="bd-author-bio">
                    Building mobile apps with React Native & sharing what I learn along the way.
                  </p>
                  <div className="bd-author-socials">
                    <a href="https://github.com/Vaib19121" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      GitHub
                    </a>
                    <a href="mailto:vaibhavmehar16@gmail.com" className="btn btn-outline btn-sm">
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="bd-toc-card">
                <h3>Table of Contents</h3>
                <ul className="bd-toc-list">
                  {blog.content
                    .filter(s => s.type === 'heading')
                    .map((heading, i) => (
                      <li key={i} className="bd-toc-item">
                        {heading.text}
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* More Blogs */}
          {otherBlogs.length > 0 && (
            <div className="bd-more">
              <h2 className="bd-section-title">More Articles</h2>
              <div className="bd-more-grid">
                {otherBlogs.map(b => (
                  <Link key={b.id} to={`/blogs/${b.id}`} className="bd-more-card">
                    <div className="bmc-accent" style={{background: b.color}} />
                    <div className="bmc-tags">
                      {b.tags.slice(0, 2).map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <h3 className="bmc-title">{b.title}</h3>
                    <p className="bmc-excerpt">{b.excerpt}</p>
                    <div className="bmc-meta">
                      <span>{b.date}</span>
                      <span>{b.readTime}</span>
                    </div>
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
