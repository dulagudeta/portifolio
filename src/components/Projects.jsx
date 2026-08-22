import React, { useState } from 'react';
import {
  ExternalLink,
  Lock,
  Code2,
  Globe,
  Bot,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, projectCategories } from '../data/portfolioData';

function getCategoryIcon(catId) {
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
}

function getCategoryLabel(catId) {
  switch (catId) {
    case 'web':
      return 'Web App';
    case 'systems':
      return 'Systems / API';
    case 'bots':
      return 'Bot / Automation';
    default:
      return catId;
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedHighlights, setExpandedHighlights] = useState({});

  const toggleHighlights = (projectId) => {
    setExpandedHighlights((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filteredProjects = projectsData.filter((p) =>
    activeCategory === 'all' || p.categories.includes(activeCategory)
  );

  const getCategoryCount = (catId) => {
    if (catId === 'all') return projectsData.length;
    return projectsData.filter((p) => p.categories.includes(catId)).length;
  };

  return (
    <section className="section" id="projects">
      {/* Ambient decorative glow */}
      <div className="section-ambient-glow-right" aria-hidden="true"></div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-num">03.</span> Featured Projects
            </h2>
            <p className="section-subtitle">
              Production platforms, distributed backends, and intelligent automation built for real-world reliability
            </p>
          </div>

          {/* Category Filter Tabs */}
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

        {/* Projects List Stack */}
        <div className="projects-stack">
          {filteredProjects.map((project, index) => {
            const isHighlightsOpen = !!expandedHighlights[project.id];
            const isPrivate = project.codeAccess === 'private';
            const primaryCategory = project.categories[0] || 'web';

            return (
              <article
                key={project.id}
                className={`project-card project-card--${primaryCategory}`}
              >
                {/* Header Meta: Number, Category, Badges */}
                <div className="project-card-header">
                  <div className="project-card-meta-left">
                    <span className="project-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="project-cat-tags">
                      {project.categories.map((cat) => (
                        <span key={cat} className="project-cat-badge">
                          {getCategoryIcon(cat)}
                          <span>{getCategoryLabel(cat)}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-meta-right">
                    {project.statusType === 'live' ? (
                      <span className="badge badge-live">
                        <span className="status-dot"></span>
                        {project.status}
                      </span>
                    ) : (
                      <span className="badge badge-oss">
                        <Sparkles size={11} />
                        {project.status}
                      </span>
                    )}

                    {isPrivate ? (
                      <span className="badge badge-private" title="Proprietary client project under NDA">
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

                {/* Title & Tagline */}
                <div className="project-card-title-group">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-tagline">{project.tagline}</p>
                </div>

                {/* Main Description */}
                <p className="project-card-desc">{project.description}</p>

                {/* Highlights Accordion Toggle */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="project-highlights-accordion">
                    <button
                      type="button"
                      onClick={() => toggleHighlights(project.id)}
                      className={`highlights-toggle-btn ${isHighlightsOpen ? 'active' : ''}`}
                      aria-expanded={isHighlightsOpen}
                    >
                      <span>
                        {isHighlightsOpen
                          ? 'Hide Key Highlights'
                          : `View Key Highlights & Features (${project.highlights.length})`}
                      </span>
                      {isHighlightsOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isHighlightsOpen && (
                      <div className="highlights-expanded-panel">
                        <ul className="highlights-bullet-list">
                          {project.highlights.map((item, i) => (
                            <li key={i} className="highlight-bullet-item">
                              <CheckCircle2 size={15} className="highlight-bullet-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer: Tech Tags & Action CTAs */}
                <div className="project-card-footer">
                  <div className="project-tech-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-actions">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}

                    {isPrivate && !project.githubUrl && (
                      <span
                        className="private-code-badge"
                        title="Proprietary code base protected by NDA"
                      >
                        <Lock size={12} />
                        <span>Proprietary Code</span>
                      </span>
                    )}

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
