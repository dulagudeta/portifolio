import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Search } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenPalette, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
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
    { name: 'Contact', href: '#contact' },
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
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenPalette}
            className="command-palette-trigger"
            aria-label="Open Command Menu (Press Ctrl+K or Cmd+K)"
            title="Command Menu (⌘K)"
          >
            <Search size={14} />
            <span className="cmd-label">Search</span>
            <kbd className="cmd-kbd">⌘K</kbd>
          </button>

          {/* Direct PDF Resume Link */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Dula_Gudeta_Resume.pdf"
            className="btn btn-secondary btn-sm"
            aria-label="Download PDF Resume"
            title="Download official PDF resume"
          >
            <FileDown size={14} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Resume PDF</span>
          </a>

          {/* Direct GitHub Profile */}
          <a
            href={personalInfo.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm nav-gh-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Contact</span>
          </a>

          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPalette();
            }}
            className="command-palette-trigger"
            style={{ width: '100%', justifyContent: 'space-between', marginBottom: '0.5rem' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={14} />
              <span>Search / Quick Commands</span>
            </span>
            <kbd className="cmd-kbd">⌘K</kbd>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dula_Gudeta_Resume.pdf"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <FileDown size={14} />
              <span>Resume PDF</span>
            </a>
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
