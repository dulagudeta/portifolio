import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "End-to-End Ownership",
      desc: "Taking ideas from initial requirements and architecture design all the way through to deployment and production maintenance."
    },
    {
      title: "System Reliability & Security",
      desc: "Designing secure, performant APIs, resilient data structures, and dependable service integrations."
    },
    {
      title: "Clean & Maintainable Code",
      desc: "Emphasizing modularity, thorough testing, clear documentation, and scalable coding standards."
    },
    {
      title: "User-Centered Engineering",
      desc: "Bridging solid backend foundations with accessible, responsive, and seamless user experiences."
    }
  ];

  return (
    <section className="section" id="about">
      {/* Subtle Ambient Blurred Accent Glow */}
      <div className="section-ambient-glow-left" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">01.</span> About
          </h2>
          <p className="section-subtitle">Background, philosophy, and engineering approach</p>
        </div>

        <div className="about-grid">
          <div className="about-paragraphs">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              I approach every project with an emphasis on clarity, scalability, and long-term maintainability, ensuring that software not only performs reliably under load but also provides a seamless experience for end users.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Core Engineering Principles</h3>
            <ul className="about-highlights-list">
              {highlights.map((item, i) => (
                <li key={i} className="about-highlight-item">
                  <CheckCircle2 size={16} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.875rem' }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
