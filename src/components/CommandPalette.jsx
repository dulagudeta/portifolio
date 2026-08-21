import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, CornerDownLeft, FileDown, Mail, Phone, ExternalLink, X, Code, Briefcase, User } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume, onShowToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'download-resume',
      title: 'Download / View Official PDF Resume',
      category: 'Resume',
      icon: <FileDown size={16} />,
      perform: () => {
        window.open(personalInfo.resumeUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'jump-about',
      title: 'Jump to About',
      category: 'Navigation',
      icon: <User size={16} />,
      perform: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-skills',
      title: 'Jump to Skills',
      category: 'Navigation',
      icon: <Code size={16} />,
      perform: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-projects',
      title: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: <Code size={16} />,
      perform: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-experience',
      title: 'Jump to Experience & Education',
      category: 'Navigation',
      icon: <Briefcase size={16} />,
      perform: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'jump-contact',
      title: 'Jump to Contact',
      category: 'Navigation',
      icon: <Mail size={16} />,
      perform: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${personalInfo.contacts.email})`,
      category: 'Actions',
      icon: <Mail size={16} />,
      perform: () => {
        navigator.clipboard.writeText(personalInfo.contacts.email);
        onShowToast('Email address copied to clipboard!');
        onClose();
      }
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${personalInfo.contacts.phone})`,
      category: 'Actions',
      icon: <Phone size={16} />,
      perform: () => {
        navigator.clipboard.writeText(personalInfo.contacts.phone);
        onShowToast('Phone number copied to clipboard!');
        onClose();
      }
    },
    {
      id: 'open-github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: <GithubIcon size={16} />,
      perform: () => {
        window.open(personalInfo.contacts.github, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="palette-modal" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-row">
          <Search size={18} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="palette-close-btn" onClick={onClose} aria-label="Close Command Palette">
            <kbd>ESC</kbd>
          </button>
        </div>

        <div className="palette-results-list">
          {filteredActions.length === 0 ? (
            <div className="palette-empty-state">No matching commands found</div>
          ) : (
            filteredActions.map((action, idx) => (
              <div
                key={action.id}
                className={`palette-item ${idx === selectedIndex ? 'active' : ''}`}
                onClick={action.perform}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="palette-item-icon">{action.icon}</div>
                <div className="palette-item-text">
                  <span className="palette-item-title">{action.title}</span>
                  <span className="palette-item-cat">{action.category}</span>
                </div>
                {idx === selectedIndex && <CornerDownLeft size={14} className="palette-enter-icon" />}
              </div>
            ))
          )}
        </div>

        <div className="palette-footer">
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>Enter</kbd> to select</span>
          <span><kbd>ESC</kbd> to dismiss</span>
        </div>
      </div>
    </div>
  );
}
