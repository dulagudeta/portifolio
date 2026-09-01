import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { Check } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  return (
    <>
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact onShowToast={showToast} />
      </main>

      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* ATS-Friendly Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="toast-notification" role="status" aria-live="polite">
          <Check size={14} />
          <span>{toast}</span>
        </div>
      )}

      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  );
}
