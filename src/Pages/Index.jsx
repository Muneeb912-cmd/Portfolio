import React, { useState, useEffect } from 'react';
import CyberpunkCityCanvas from '../components/Canvas3D/CyberpunkCityCanvas';
import CyberNav from '../components/Navbar/CyberNav';
import CyberHero from '../components/Hero/CyberHero';
import CyberAbout from '../components/About/CyberAbout';
import CyberSkills from '../components/Skills/CyberSkills';
import CyberExperience from '../components/Experience/CyberExperience';
import CyberProjects from '../components/Projects/CyberProjects';
import CyberServices from '../components/Services/CyberServices';
import CyberContact from '../components/Contact/CyberContact';
import CyberFooter from '../components/Footer/CyberFooter';
import CyberTerminal from '../components/Terminal/CyberTerminal';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [fxMode, setFxMode] = useState('high'); // 'high' | 'low' | 'static'
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--cyber-bg)' }}>
      {/* Cinematic Overlays */}
      <div className="cyber-scanlines" />
      <div className="cyber-vignette" />

      {/* 3D Cyberpunk Cityscape Canvas */}
      <CyberpunkCityCanvas fxMode={fxMode} />

      {/* Floating HUD Navigation */}
      <CyberNav
        activeSection={activeSection}
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
        fxMode={fxMode}
        setFxMode={setFxMode}
      />

      {/* Main Content Sections */}
      <main>
        <CyberHero onOpenTerminal={() => setTerminalOpen(true)} />
        <CyberAbout />
        <CyberSkills />
        <CyberExperience />
        <CyberProjects />
        <CyberServices />
        <CyberContact />
      </main>

      {/* Footer */}
      <CyberFooter onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Developer CLI Terminal */}
      <CyberTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default Index;
