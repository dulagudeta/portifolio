import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="site-header no-print">
      <div className="container nav-wrapper">
        <a href="#" className="nav-brand" aria-label="Dula Gudeta - Home">
          <span className="nav-name">{personalInfo.name}</span>
          <span className="nav-role">/ {personalInfo.role}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-menu" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="nav-actions">
          {/* Direct PDF Resume Link (Desktop) */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Dula_Gudeta_Resume.pdf"
            className="btn btn-secondary btn-sm nav-desktop-action"
            aria-label="Download PDF Resume"
            title="Download official PDF resume"
          >
            <FileDown size={14} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Resume</span>
          </a>

          {/* Direct GitHub Profile (Desktop) */}
          <a
            href={personalInfo.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm nav-desktop-action nav-gh-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          {/* Contact CTA (Desktop) */}
          <a href="#contact" className="btn btn-primary btn-sm nav-desktop-action">
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get In Touch</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dula_Gudeta_Resume.pdf"
              className="btn btn-secondary"
            >
              <FileDown size={15} />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
