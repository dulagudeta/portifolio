import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Database,
  Server,
  Layout,
  Lock,
  Code2,
  Globe,
  Bot,
  Cpu,
  Radio,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArchitecture, setExpandedArchitecture] = useState({});

  const toggleArchitecture = (projectId) => {
    setExpandedArchitecture((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categories.includes(activeCategory);
  });

  const getCategoryCount = (catId) => {
    if (catId === 'all') return projectsData.length;
    return projectsData.filter((p) => p.categories.includes(catId)).length;
  };

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'web':
        return <Globe size={13} />;
      case 'systems':
        return <Cpu size={13} />;
      case 'bots':
        return <Bot size={13} />;
      default:
        return <Layers size={13} />;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="projects-header-top">
            <div>
              <h2 className="section-title">
                <span className="section-title-num">03.</span> Featured Projects
              </h2>
              <p className="section-subtitle">
                Production platforms, distributed systems, and intelligent bots built for real-world reliability
              </p>
            </div>
          </div>

          {/* Dynamic Filter Navigation Bar */}
          <div className="project-filter-bar" role="tablist" aria-label="Project Categories">
            {projectCategories.map((cat) => {
              const count = getCategoryCount(cat.id);
              if (count === 0) return null;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="projects-stack">
          {filteredProjects.map((project) => {
            const isArchOpen = !!expandedArchitecture[project.id];
            const isPrivateCode = project.codeAccess === 'private';

            return (
              <article key={project.id} className="project-card">
                {/* Header Row */}
                <div className="project-header-row">
                  <div className="project-title-area">
                    <div className="project-title-top">
                      <h3 className="project-title">{project.title}</h3>
                      {project.categories.includes('bots') && (
                        <span className="project-mini-tag">
                          <Bot size={12} /> Bot
                        </span>
                      )}
                      {project.categories.includes('systems') && (
                        <span className="project-mini-tag">
                          <Cpu size={12} /> Systems
                        </span>
                      )}
                      {project.categories.includes('web') && (
                        <span className="project-mini-tag">
                          <Globe size={12} /> Web
                        </span>
                      )}
                    </div>
                    <span className="project-tagline">{project.tagline}</span>
                  </div>

                  <div className="project-status-area">
                    {/* Live / OSS Status Badge */}
                    {project.statusType === 'live' ? (
                      <span className="badge badge-live">
                        <span className="status-dot"></span>
                        {project.status}
                      </span>
                    ) : (
                      <span className="badge badge-oss">
                        <Radio size={12} />
                        {project.status}
                      </span>
                    )}

                    {/* Code Availability Badge */}
                    {isPrivateCode ? (
                      <span
                        className="badge badge-private"
                        title="Company / Client project — Codebase is private under NDA"
                      >
                        <Lock size={11} />
                        <span>Enterprise / NDA</span>
                      </span>
                    ) : (
                      <span className="badge badge-public" title="Public source repository available">
                        <Code2 size={11} />
                        <span>Open Source</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Key Highlights / Features List */}
                <div className="project-highlights">
                  <div className="project-highlights-title">Key Architectural Highlights</div>
                  <ul className="project-highlights-list">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="project-highlight-item">
                        <CheckCircle size={14} className="highlight-check-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Deep Dive Accordion */}
                {project.architecture && (
                  <div className="arch-accordion">
                    <button
                      type="button"
                      onClick={() => toggleArchitecture(project.id)}
                      className={`arch-toggle-btn ${isArchOpen ? 'active' : ''}`}
                      aria-expanded={isArchOpen}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Layers size={14} />
                        <span>{isArchOpen ? 'Hide System Architecture' : 'Explore System Architecture & Data Flow'}</span>
                      </div>
                      {isArchOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {isArchOpen && (
                      <div className="arch-drawer">
                        <div className="arch-grid">
                          <div className="arch-item">
                            <div className="arch-item-header">
                              <Database size={14} />
                              <strong>Database & Schema</strong>
                            </div>
                            <p>{project.architecture.database}</p>
                          </div>

                          <div className="arch-item">
                            <div className="arch-item-header">
                              <Server size={14} />
                              <strong>API & Reliability</strong>
                            </div>
                            <p>{project.architecture.backend}</p>
                          </div>

                          <div className="arch-item">
                            <div className="arch-item-header">
                              <Layout size={14} />
                              <strong>Frontend & Client Flow</strong>
                            </div>
                            <p>{project.architecture.frontend}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer Row: Tech Stack + Action Links */}
                <div className="project-footer">
                  <div className="project-tech-stack">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {/* Public GitHub Repo */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {/* Private Enterprise Code Base Indicator */}
                    {isPrivateCode && (
                      <div
                        className="private-code-notice"
                        title="Source code is proprietary to the company / client and protected by NDA"
                      >
                        <Lock size={12} />
                        <span>Proprietary Code</span>
                      </div>
                    )}

                    {/* Live Demo or Active Deployment */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`Visit live deployment of ${project.title}`}
                      >
                        <span>{project.categories.includes('bots') ? 'Launch Bot' : 'Live Platform'}</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
