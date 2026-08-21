import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'submitting' | 'success'
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email copied to clipboard!');
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (onShowToast) {
        onShowToast('Message sent! Thanks for reaching out.');
      }
      setTimeout(() => setStatus(null), 5000);
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">05.</span> Get In Touch
          </h2>
          <p className="section-subtitle">
            Have a question, opportunity, or project in mind? Let's talk.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Availability */}
          <div className="contact-info-panel">
            <div className="contact-status-badge">
              <span className="status-dot"></span>
              <span>Available for full-time roles & projects</span>
            </div>

            <h3 className="contact-panel-title">
              Let's build something exceptional together.
            </h3>
            
            <p className="contact-panel-desc">
              I'm always interested in discussing new opportunities, platform engineering, or freelance projects. Feel free to reach out directly.
            </p>

            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="modern-contact-card">
                <div className="modern-card-icon">
                  <Mail size={18} />
                </div>
                <div className="modern-card-body">
                  <span className="modern-card-label">Email</span>
                  <a href={`mailto:${personalInfo.contacts.email}`} className="modern-card-link">
                    {personalInfo.contacts.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="modern-card-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-contact-card modern-contact-card-interactive"
              >
                <div className="modern-card-icon">
                  <GithubIcon size={18} />
                </div>
                <div className="modern-card-body">
                  <span className="modern-card-label">GitHub</span>
                  <span className="modern-card-link">
                    github.com/{personalInfo.contacts.githubUsername}
                  </span>
                </div>
                <ArrowUpRight size={16} className="modern-card-arrow" />
              </a>

              {/* Location Card */}
              <div className="modern-contact-card">
                <div className="modern-card-icon">
                  <MapPin size={18} />
                </div>
                <div className="modern-card-body">
                  <span className="modern-card-label">Location</span>
                  <span className="modern-card-text">
                    {personalInfo.contacts.location} <span className="text-muted">({personalInfo.timezone})</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="contact-form-panel">
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="form-alert form-alert-success">
                  <Check size={16} />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. Job Opportunity / Platform Project"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, role, or ideas..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={status === 'submitting'}
              >
                <Send size={15} />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
