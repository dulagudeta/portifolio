import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonialsData.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  return (
    <section className="section" id="testimonials">
      <div className="section-ambient-glow-right" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="testimonials-stacked-header">
          <div>
            <h2 className="section-title">
              <span className="section-title-num">05.</span> Testimonials
            </h2>
            <p className="section-subtitle">
              Endorsements and feedback from engineering peers, CTOs, and clients
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="deck-controls">
            <span className="deck-counter">
              <strong>{String(activeIndex + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
            </span>

            <div className="deck-arrow-btns">
              <button
                className="deck-nav-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="deck-nav-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
                title="Next (Right Arrow)"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Overlapping / Stacked Cards Deck Container */}
        <div className="testimonials-deck-wrapper">
          <div className="testimonials-deck">
            {testimonialsData.map((item, index) => {
              // Calculate relative offset in the cyclical array
              const offset = (index - activeIndex + total) % total;
              const isTop = offset === 0;

              return (
                <div
                  key={item.id}
                  className={`deck-card deck-card-pos-${offset} ${isTop ? 'deck-card-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    '--card-index': offset,
                  }}
                  role="button"
                  tabIndex={isTop ? 0 : -1}
                  aria-label={`Testimonial from ${item.name}`}
                >
                  {/* Top Bar Accent */}
                  <div
                    className="deck-card-top-bar"
                    style={{ background: item.avatarBg }}
                  ></div>

                  {/* Header: Stars & Quote Icon */}
                  <div className="deck-card-header">
                    <div className="deck-card-stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="star-filled"
                          fill="#f59e0b"
                          color="#f59e0b"
                        />
                      ))}
                    </div>
                    <Quote size={24} className="deck-quote-icon" />
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="deck-card-quote">
                    "{item.content}"
                  </blockquote>

                  {/* Author Information */}
                  <div className="deck-card-author">
                    <div
                      className="deck-avatar"
                      style={{ background: item.avatarBg }}
                    >
                      {item.initials}
                    </div>
                    <div className="deck-author-meta">
                      <h3 className="deck-author-name">{item.name}</h3>
                      <p className="deck-author-role">
                        {item.role} &bull; <strong>{item.company}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Select Reviewer Pills */}
          <div className="deck-quick-select" role="tablist" aria-label="Reviewers">
            {testimonialsData.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`deck-select-pill ${isSelected ? 'active' : ''}`}
                >
                  <span
                    className="deck-pill-avatar"
                    style={{ background: item.avatarBg }}
                  >
                    {item.initials}
                  </span>
                  <span className="deck-pill-name">{item.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
