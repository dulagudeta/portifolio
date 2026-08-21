import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, skillsData, experienceData, educationData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = () => {
    const text = `
${personalInfo.name.toUpperCase()}
${personalInfo.role} | ${personalInfo.location}
Email: ${personalInfo.contacts.email} | Phone: ${personalInfo.contacts.phone} | GitHub: ${personalInfo.contacts.github}

SUMMARY
${personalInfo.valueProposition}

TECHNICAL SKILLS
${skillsData.map(s => `• ${s.category}: ${s.skills.join(', ')}`).join('\n')}

EXPERIENCE
${experienceData.map(e => `• ${e.role} — ${e.company} (${e.period})\n  ${e.description}`).join('\n\n')}

FEATURED PROJECTS
${projectsData.map(p => `• ${p.title} (${p.techStack.join(', ')}): ${p.description}`).join('\n\n')}

EDUCATION
${educationData.map(ed => `• ${ed.degree} — ${ed.institution} (${ed.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    onShowToast('Plaintext resume copied to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-toolbar no-print">
          <div className="resume-toolbar-left">
            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Resume Preview</span>
            <span className="badge badge-live" style={{ marginLeft: '0.5rem' }}>ATS Friendly</span>
          </div>

          <div className="resume-toolbar-actions">
            <button onClick={handleCopyTextResume} className="btn btn-secondary btn-sm" title="Copy Plain Text">
              <Copy size={14} />
              <span>Copy Text</span>
            </button>
            <button onClick={handlePrint} className="btn btn-primary btn-sm" title="Print or Save PDF">
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="btn btn-ghost btn-sm" aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-document">
          {/* Header */}
          <div className="resume-doc-header">
            <h1 className="resume-doc-name">{personalInfo.name}</h1>
            <div className="resume-doc-title">{personalInfo.role}</div>
            <div className="resume-doc-contact">
              <span>{personalInfo.contacts.email}</span>
              <span>&bull;</span>
              <span>{personalInfo.contacts.phone}</span>
              <span>&bull;</span>
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <span>github.com/{personalInfo.contacts.githubUsername}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="resume-doc-section">
            <h2 className="resume-doc-section-title">Professional Summary</h2>
            <p className="resume-doc-text">
              Full-Stack Developer with 2+ years of production experience shipping and deploying robust web platforms for hospitality and healthcare clients. Skilled in owning systems end to end from database schemas (PostgreSQL, MySQL) and secure RESTful APIs (Node.js, Django) to responsive frontends (React, Next.js).
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-doc-section">
            <h2 className="resume-doc-section-title">Technical Skills</h2>
            <div className="resume-doc-skills">
              {skillsData.map((cat) => (
                <div key={cat.category} className="resume-skill-row">
                  <strong>{cat.category}:</strong> <span>{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume-doc-section">
            <h2 className="resume-doc-section-title">Professional Experience</h2>
            <div className="resume-doc-timeline">
              {experienceData.map((item, idx) => (
                <div key={idx} className="resume-experience-entry">
                  <div className="resume-entry-header">
                    <div>
                      <strong className="resume-entry-role">{item.role}</strong> &mdash; <span>{item.company}</span>
                    </div>
                    <span className="resume-entry-date">{item.period}</span>
                  </div>
                  <p className="resume-entry-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="resume-doc-section">
            <h2 className="resume-doc-section-title">Key Projects</h2>
            <div className="resume-doc-timeline">
              {projectsData.map((project) => (
                <div key={project.id} className="resume-project-entry">
                  <div className="resume-entry-header">
                    <div>
                      <strong className="resume-entry-role">{project.title}</strong>
                      <span className="resume-entry-stack"> ({project.techStack.join(', ')})</span>
                    </div>
                    <span className="resume-entry-date">{project.status}</span>
                  </div>
                  <p className="resume-entry-desc">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-doc-section">
            <h2 className="resume-doc-section-title">Education</h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="resume-experience-entry">
                <div className="resume-entry-header">
                  <div>
                    <strong className="resume-entry-role">{edu.degree}</strong> &mdash; <span>{edu.institution}</span>
                  </div>
                  <span className="resume-entry-date">{edu.period}</span>
                </div>
                <p className="resume-entry-desc">{edu.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
