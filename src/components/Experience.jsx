import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience">
      {/* Subtle Ambient Blurred Accent Glow */}
      <div className="section-ambient-glow-left" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">04.</span> Experience & Education
          </h2>
          <p className="section-subtitle">Career history, industry roles, and academic foundations</p>
        </div>

        <div className="experience-layout">
          {/* Work Experience Timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Briefcase size={18} color="var(--text-primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Work History</h3>
            </div>

            <div className="timeline">
              {experienceData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-header">
                    <h4 className="timeline-role">{item.role}</h4>
                    <div className="timeline-company-row">
                      <span className="timeline-company">{item.company}</span>
                      <span className="badge" style={{ fontSize: '0.7rem' }}>{item.type}</span>
                    </div>
                    <div className="timeline-period">{item.period} &bull; {item.location}</div>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={18} color="var(--text-primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Education</h3>
            </div>

            <div className="education-card">
              {educationData.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <div className="degree-name">{edu.degree}</div>
                  <div className="institution-name">{edu.institution}</div>
                  <div className="education-meta">
                    <span>{edu.period}</span>
                    <span>&bull;</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="education-notes">{edu.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
