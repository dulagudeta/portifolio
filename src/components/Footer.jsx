import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, FileDown } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const [currentTime, setCurrentTime] = useState('');
  const [isWorkingHour, setIsWorkingHour] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(formatted);

      const hourOptions = { timeZone: 'Africa/Addis_Ababa', hour: 'numeric', hour12: false };
      const currentHour = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(new Date()), 10);
      setIsWorkingHour(currentHour >= 9 && currentHour < 19);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer no-print">
      <div className="container footer-content">
        <div className="footer-brand">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div className="footer-time-indicator">
          <span className={`status-dot ${isWorkingHour ? '' : 'dot-idle'}`} style={{ width: 6, height: 6 }}></span>
          <span>Addis Ababa (UTC+3): <strong style={{ color: 'var(--text-primary)' }}>{currentTime || '12:00 PM'}</strong></span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            ({isWorkingHour ? 'Active now' : 'Available async'})
          </span>
        </div>

        <div className="footer-links">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Dula_Gudeta_Resume.pdf"
            className="btn-footer-link"
            aria-label="Download Resume PDF"
          >
            Resume (PDF)
          </a>
          <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.contacts.email}`}>
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="btn btn-ghost btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.2rem 0.5rem' }}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
