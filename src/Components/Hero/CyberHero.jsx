import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Layers, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const CyberHero = ({ onOpenTerminal }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Native Android & iOS Engineering',
    'Flutter & Cross-Platform Systems',
    'High-Performance Mobile Architecture',
    'Full-Stack REST & Cloud Integrations',
    'Modernizing Legacy Mobile Applications',
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setTypedTitle(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTypedTitle(currentPhrase.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  const scrollToSection = (id) => {
    soundFX.playConfirm();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top HUD Telemetry Banner */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '6px 16px',
            background: 'rgba(0, 243, 255, 0.08)',
            border: '1px solid var(--cyber-border)',
            borderRadius: '2px',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="cyber-beacon" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--neon-cyan)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            SYS_PROTOCOL // UET_CS_GRADUATE // MOBILE_ARCHITECT
          </span>
          <span style={{ color: 'var(--text-muted)' }}>|</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--neon-green)',
            }}
          >
            AVAILABLE FOR HIRE &amp; CONTRACTS
          </span>
        </div>

        {/* Main Name & Title */}
        <div style={{ marginBottom: '20px' }}>
          <h1
            className="cyber-title cyber-glitch-text"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '3px',
              marginBottom: '14px',
              textShadow: '0 0 25px rgba(0, 243, 255, 0.4)',
            }}
          >
            EMAN MUNEEB
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--neon-cyan)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <span>Software Engineer</span>
            <span style={{ color: 'var(--neon-purple)' }}>//</span>
            <span>Mobile Application Developer</span>
          </div>
        </div>

        {/* Dynamic Typewriter Command Line */}
        <div
          style={{
            minHeight: '44px',
            background: 'rgba(5, 8, 17, 0.75)',
            borderLeft: '3px solid var(--neon-cyan)',
            padding: '10px 18px',
            margin: '20px 0 32px',
            maxWidth: '680px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.95rem',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>eman@cyber-os:~$</span>
          <span>{typedTitle}</span>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '16px',
              background: 'var(--neon-cyan)',
              animation: 'beacon-pulse 1s infinite',
            }}
          />
        </div>

        {/* Tagline & Mission Statement */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            marginBottom: '40px',
          }}
        >
          Engineering the Future, One Experience at a Time. Transforming complex business requirements into fluid, high-performance mobile applications and resilient full-stack systems.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="cyber-btn"
            style={{ padding: '12px 28px', fontSize: '0.9rem' }}
          >
            <Layers size={18} /> EXPLORE ARSENAL
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="cyber-btn-purple"
            style={{ padding: '12px 28px', fontSize: '0.9rem' }}
          >
            <ArrowRight size={18} /> CAREER CHRONO
          </button>

          <button
            onClick={() => {
              soundFX.playConfirm();
              onOpenTerminal();
            }}
            className="cyber-btn"
            style={{
              padding: '12px 24px',
              fontSize: '0.9rem',
              background: 'rgba(57, 255, 20, 0.1)',
              borderColor: 'var(--neon-green)',
              color: 'var(--neon-green)',
              boxShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
            }}
          >
            <Terminal size={18} /> LAUNCH CLI [~]
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              padding: '12px 20px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--neon-cyan)';
              soundFX.playBlip();
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <Send size={15} /> DIRECT UPLINK
          </button>
        </div>

        {/* Holographic Stats HUD Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            maxWidth: '900px',
          }}
        >
          {[
            { label: 'ACADEMIC ALMA MATER', val: 'UET Lahore (BS CS)', sub: 'Graduated 2024' },
            { label: 'VERIFIED PROJECTS', val: '10+ Mobile & Web', sub: 'Production & Open-Source' },
            { label: 'INDUSTRY EXPERIENCE', val: 'Apex Space Ltd.', sub: 'MERN Stack Engineering' },
            { label: 'CORE STACK FOCUS', val: 'Flutter & Native OS', sub: 'Clean MVVM Architecture' },
          ].map((stat, i) => (
            <div
              key={i}
              className="cyber-card cyber-corner-reticles"
              style={{
                padding: '16px',
                background: 'rgba(10, 16, 30, 0.65)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '1px',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--neon-cyan)',
                  marginBottom: '2px',
                }}
              >
                {stat.val}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberHero;

