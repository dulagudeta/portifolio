import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [selectedIntent, setSelectedIntent] = useState(null);
  const [status, setStatus] = useState(null); // 'submitting' | 'success'

  const intentChips = [
    {
      label: 'Full-Time Role',
      subject: 'Job Opportunity: Full-Stack Developer Role',
      placeholder: 'Hi Dula, we came across your work and have an open Full-Stack Developer position...'
    },
    {
      label: 'Freelance Project',
      subject: 'Freelance Inquiry: New Web Platform Project',
      placeholder: 'Hi Dula, we are looking for an experienced full-stack engineer to build a platform for...'
    },
    {
      label: 'Contract Engineering',
      subject: 'Contract Consulting: System Architecture & APIs',
      placeholder: 'Hi Dula, we would like to discuss contract engineering support for our backend/frontend...'
    },
    {
      label: 'Quick Intro',
      subject: 'Networking & Introduction',
      placeholder: 'Hi Dula, wanted to connect and discuss your projects...'
    }
  ];

  const handleSelectIntent = (chip) => {
    setSelectedIntent(chip.label);
    setFormData((prev) => ({
      ...prev,
      subject: chip.subject,
      message: prev.message || chip.placeholder
    }));
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast(`${label} copied to clipboard!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedIntent(null);
      if (onShowToast) {
        onShowToast('Message sent! Thanks for reaching out.');
      }
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">05.</span> Contact
          </h2>
          <p className="section-subtitle">
            Have a project in mind or looking for a full-stack engineer? Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Quick Copy Snippets */}
          <div>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.975rem', color: 'var(--text-secondary)' }}>
              I am currently available for full-time software engineering positions, contract development, and custom platform delivery.
            </p>

            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-detail-label">Direct Email</div>
                  <a
                    href={`mailto:${personalInfo.contacts.email}`}
                    className="contact-detail-value"
                    style={{ display: 'block', color: 'var(--text-primary)' }}
                  >
                    {personalInfo.contacts.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contacts.email, 'Email address')}
                    className="copy-btn"
                    aria-label="Copy email address"
                  >
                    <Copy size={12} />
                    <span>Copy email</span>
                  </button>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <GithubIcon size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-detail-label">GitHub</div>
                  <a
                    href={personalInfo.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-value"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>github.com/{personalInfo.contacts.githubUsername}</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contacts.github, 'GitHub link')}
                    className="copy-btn"
                    style={{ display: 'block' }}
                  >
                    <Copy size={12} />
                    <span>Copy profile URL</span>
                  </button>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-detail-label">Location & Working Hours</div>
                  <div className="contact-detail-value">{personalInfo.contacts.location}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
                    {personalInfo.workingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form with Intent Chips */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.35rem' }}>Send a Message</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                Select an inquiry type to auto-fill or enter your custom message:
              </p>
            </div>

            {/* Inquiry Intent Chips */}
            <div className="intent-chips-wrap">
              {intentChips.map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => handleSelectIntent(chip)}
                  className={`intent-chip ${selectedIntent === chip.label ? 'active' : ''}`}
                >
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>

            {status === 'success' && (
              <div className="form-alert form-alert-success">
                Thank you! Your message has been sent successfully. I will review and reply promptly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Your name or company"
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
                placeholder="your.email@example.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Project Inquiry / Role Opportunity"
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
                placeholder="Describe your project requirements, technology needs, or role overview..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.75rem' }}
              disabled={status === 'submitting'}
            >
              <Send size={15} />
              <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
