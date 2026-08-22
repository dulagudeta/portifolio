import React from 'react';
import { Mail, ArrowRight, MapPin, Clock, ShieldCheck, FileCode, FileDown } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="hero-section" id="hero">
      {/* Subtle Ambient Blurred Accent Shapes */}
      <div className="hero-ambient-glow-top" aria-hidden="true"></div>
      <div className="hero-ambient-glow-bottom" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          {/* Status Pill */}
          <div className="hero-status">
            <span className="status-pill">
              <span className="status-dot"></span>
              {personalInfo.status}
            </span>
          </div>

          {/* Headline & Title */}
          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-subtitle">
            {personalInfo.role} &mdash; <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>React, Node.js, Django</span>
          </p>

          {/* Value Proposition */}
          <p className="hero-bio">
            {personalInfo.valueProposition}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Mail size={16} />
              <span>Get in touch</span>
              <ArrowRight size={14} />
            </a>

            <a href="#projects" className="btn btn-secondary">
              <FileCode size={16} />
              <span>View Projects</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Dula_Gudeta_Resume.pdf"
              className="btn btn-secondary"
              title="Download official PDF resume"
            >
              <FileDown size={16} />
              <span>Resume (PDF)</span>
            </a>

            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Meta Strip */}
          <div className="hero-meta-strip">
            <div className="meta-item">
              <MapPin size={15} />
              <span>Based in <strong>{personalInfo.location}</strong></span>
            </div>
            <div className="meta-item">
              <Clock size={15} />
              <span>Timezone: <strong>{personalInfo.timezone}</strong></span>
            </div>
            <div className="meta-item">
              <ShieldCheck size={15} />
              <span><strong>{personalInfo.experienceYears} Years</strong> Production Exp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
