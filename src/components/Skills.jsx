import React from 'react';
import { Layout, Server, Database, CreditCard, Terminal } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getIconForCategory = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layout size={16} />;
      case 'Backend':
        return <Server size={16} />;
      case 'Databases':
        return <Database size={16} />;
      case 'Payments & Integrations':
        return <CreditCard size={16} />;
      case 'Tools & DevOps':
        return <Terminal size={16} />;
      default:
        return <Server size={16} />;
    }
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">02.</span> Technical Skills
          </h2>
          <p className="section-subtitle">Core languages, frameworks, databases, and operational tools</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-icon-wrapper">
                  {getIconForCategory(cat.category)}
                </div>
                <h3 className="skill-category-name">{cat.category}</h3>
              </div>

              <div className="skill-pills-wrap">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
