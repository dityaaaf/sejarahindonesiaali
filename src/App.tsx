import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import FiguresSection from './components/FiguresSection';
import EventsSection from './components/EventsSection';
import EvidenceSection from './components/EvidenceSection';
import FunFacts from './components/FunFacts';
import ModernSection from './components/ModernSection';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';

const SECTIONS = ['beranda', 'timeline', 'tokoh', 'peristiwa', 'bukti', 'modern', 'quiz'];

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('beranda');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q) {
      const tokohSection = document.getElementById('tokoh');
      tokohSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${isDark ? 'dark bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Navbar
        isDark={isDark}
        onToggleDark={() => setIsDark(!isDark)}
        activeSection={activeSection}
        onSearch={handleSearch}
      />

      <main>
        <HeroSection />
        <TimelineSection isDark={isDark} />
        <FunFacts isDark={isDark} />
        <FiguresSection isDark={isDark} searchQuery={searchQuery} />
        <EventsSection isDark={isDark} searchQuery={searchQuery} />
        <EvidenceSection isDark={isDark} />
        <ModernSection isDark={isDark} />
        <QuizSection isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
