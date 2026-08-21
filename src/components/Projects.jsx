import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Radio, ChevronDown, ChevronUp, Layers, Database, Server, Layout } from 'lucide-react';
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

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title">
                <span className="section-title-num">03.</span> Featured Projects
              </h2>
              <p className="section-subtitle">
                Production platforms and open-source systems engineered for real-world operations
              </p>
            </div>
          </div>

          {/* Project Filter Pills */}
          <div className="project-filter-bar">
            {projectCategories.map((cat) => {
              const count = getCategoryCount(cat.id);
              if (count === 0) return null;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="projects-stack">
          {filteredProjects.map((project) => {
            const isArchOpen = !!expandedArchitecture[project.id];

            return (
              <article key={project.id} className="project-card">
                {/* Header Row */}
                <div className="project-header-row">
                  <div className="project-title-area">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-tagline">&mdash; {project.tagline}</span>
                  </div>

                  <div className="project-status-area">
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
                  </div>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Key Highlights / Features List */}
                <div className="project-highlights">
                  <div className="project-highlights-title">Key Architectural Features</div>
                  <ul className="project-highlights-list">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="project-highlight-item">
                        <CheckCircle size={14} />
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
                      className="arch-toggle-btn"
                      aria-expanded={isArchOpen}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <Layers size={14} />
                        <span>{isArchOpen ? 'Hide System Architecture' : 'View System Architecture & Data Flow'}</span>
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
                              <strong>Frontend & State</strong>
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
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`Visit live deployment of ${project.title}`}
                      >
                        <span>Live Demo</span>
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
