import React from 'react';
import { CheckCircle2, Server, Database, Layout, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "End-to-End System Ownership",
      desc: "Architecting data models, building secure REST/GraphQL endpoints, and designing accessible frontends."
    },
    {
      title: "Hospitality & Healthcare Production",
      desc: "Proven track record delivering booking engines, staff admin dashboards, live kitchen displays, and patient portals."
    },
    {
      title: "Payment Gateway Integrations",
      desc: "Expertise implementing seamless Chapa payment checkout flows, automated webhooks, and subscription billing."
    },
    {
      title: "Current Roles",
      desc: "Full-Stack Developer at Yanol Tech (Feb 2026–Present) and selective freelance development for global clients."
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
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
              Whether working on an interactive 360° virtual tour with Three.js, building a triage chatbot, or architecting multi-tenant database schemas with PostgreSQL, I focus on clean code, testability, and fast user scanability.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card-title">Core Engineering Capabilities</h3>
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
