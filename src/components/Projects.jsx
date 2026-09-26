import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projectsData.filter((p) =>
    activeCategory === 'all' || p.categories.includes(activeCategory)
  );

  return (
    <section className="section" id="projects">
      <div className="section-ambient-glow-right" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">03.</span> Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of production platforms, distributed systems, and open-source software I've built.
          </p>

          {/* Category Filter Pills */}
          <div className="project-filter-bar" role="tablist" aria-label="Project Categories">
            {projectCategories.map((cat) => {
              const count = cat.id === 'all' 
                ? projectsData.length 
                : projectsData.filter((p) => p.categories.includes(cat.id)).length;
              
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
                  <span>{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simplified, Clean Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card-simple">
              {/* Card Header: Title & Status Badge */}
              <div className="project-card-top">
                <h3 className="project-card-name">{project.title}</h3>
                {project.statusType === 'live' ? (
                  <span className="badge badge-live">
                    <span className="status-dot"></span>
                    <span>Live</span>
                  </span>
                ) : (
                  <span className="badge badge-oss">
                    <span>Open Source</span>
                  </span>
                )}
              </div>

              {/* Tagline / Brief summary */}
              <p className="project-card-desc">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="project-tech-list">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer: Action Links */}
              <div className="project-card-bottom">
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
                    aria-label={`Visit live site of ${project.title}`}
                  >
                    <span>Visit Platform</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
