import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const contactItems = [
  { icon: '✉', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: '📞', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: '📍', label: 'Location', value: personalInfo.location, href: null },
  { icon: '🐙', label: 'GitHub', value: 'Vaib19121', href: personalInfo.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Vaibhav,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-glow" />
        <div className="container">
          <div className="section-label">Say Hello</div>
          <h1 className="page-title">Let's Work<br />Together</h1>
          <p className="page-desc">Have a project in mind or want to discuss an opportunity? I'd love to hear from you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <h2 className="ci-title">Get in touch</h2>
              <p className="ci-desc">
                I'm currently open to full-time roles and freelance projects focused on mobile development.
                Whether it's a quick question or a full project proposal — let's talk.
              </p>
              <div className="ci-items">
                {contactItems.map(item => (
                  <div key={item.label} className="ci-item">
                    <div className="ci-icon">{item.icon}</div>
                    <div>
                      <div className="ci-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="ci-value link">
                          {item.value}
                        </a>
                      ) : (
                        <div className="ci-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ci-availability">
                <div className="avail-dot" />
                <div>
                  <div className="avail-title">Available for opportunities</div>
                  <div className="avail-sub">Open to full-time & freelance roles</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="fs-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="cf-title">Send a Message</h2>
                  <div className="cf-row">
                    <div className="cf-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="cf-group">
                      <label>Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="cf-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="React Native Project Inquiry"
                      required
                    />
                  </div>
                  <div className="cf-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary cf-submit">
                    <span>Send Message</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
