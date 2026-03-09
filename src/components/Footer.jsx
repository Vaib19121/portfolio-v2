import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span style={{color: 'var(--accent-green)'}}>&lt;</span>VM<span style={{color: 'var(--accent-green)'}}>/&gt;</span>
            </Link>
            <p>Mobile Application Developer building exceptional digital experiences with React Native.</p>
          </div>
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links-group">
            <h4>Connect</h4>
            <a href="mailto:vaibhavmehar16@gmail.com">Email</a>
            <a href="https://github.com/Vaib19121" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+919158755311">Phone</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Vaibhav Mehar. All rights reserved.</p>
          <p>Built with React + Vite ⚡</p>
        </div>
      </div>
    </footer>
  );
}
