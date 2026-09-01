import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      {/* Subtle Ambient Blurred Accent Glow */}
      <div className="section-ambient-glow-right" aria-hidden="true"></div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-num">05.</span> Testimonials
          </h2>
          <p className="section-subtitle">
            What clients and collaborators say about my work
          </p>
        </div>

        {/* Compact, Modern Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-header">
                <div className="testimonial-stars" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="star-filled" fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <Quote size={20} className="testimonial-quote-icon" />
              </div>

              <p className="testimonial-body">
                "{item.content}"
              </p>

              <div className="testimonial-footer">
                <div className="testimonial-author-wrapper">
                  <div
                    className="testimonial-avatar"
                    style={{ background: item.avatarBg }}
                    aria-hidden="true"
                  >
                    {item.initials}
                  </div>
                  <div className="testimonial-author-info">
                    <h3 className="testimonial-author-name">{item.name}</h3>
                    <p className="testimonial-author-role">
                      {item.role} &bull; {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
