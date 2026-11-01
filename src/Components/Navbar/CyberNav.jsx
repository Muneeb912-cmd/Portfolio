import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Cpu, Menu, X, ShieldCheck } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const CyberNav = ({ activeSection, onToggleTerminal, fxMode, setFxMode }) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '01.SYS_INIT', target: 'home' },
    { id: 'about', label: '02.DOSSIER', target: 'about' },
    { id: 'skills', label: '03.MATRIX', target: 'skills' },
    { id: 'experience', label: '04.CHRONO', target: 'experience' },
    { id: 'projects', label: '05.ARSENAL', target: 'projects' },
    { id: 'services', label: '06.SERVICES', target: 'services' },
    { id: 'contact', label: '07.UPLINK', target: 'contact' },
  ];

  const handleAudioToggle = () => {
    const active = soundFX.toggleMute();
    setIsAudioActive(active);
  };

  const handleNavClick = (targetId) => {
    soundFX.playBlip();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cycleFxMode = () => {
    soundFX.playChirp();
    if (fxMode === 'high') setFxMode('low');
    else if (fxMode === 'low') setFxMode('static');
    else setFxMode('high');
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: scrolled ? '10px 24px' : '16px 28px',
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(5, 8, 17, 0.92)' : 'rgba(5, 8, 17, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--cyber-border)',
          boxShadow: scrolled ? '0 8px 30px rgba(0, 0, 0, 0.7)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo / Callout */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--neon-cyan)',
                background: 'rgba(5, 8, 17, 0.9)',
                clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                boxShadow: '0 0 12px rgba(0, 243, 255, 0.4)',
                padding: '3px',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}favicon.svg`}
                alt="EM Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                EMAN MUNEEB
                <span className="cyber-beacon" title="System Operational" />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--neon-cyan)',
                  letterSpacing: '1px',
                }}
              >
                MOBILE_ENG // SYS_VER_2.4
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.target)}
                  onMouseEnter={() => soundFX.playBlip()}
                  style={{
                    background: isActive ? 'rgba(0, 243, 255, 0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--neon-cyan)' : 'transparent',
                    color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 0 10px rgba(0, 243, 255, 0.3)' : 'none',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action HUD Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Terminal Quick Button */}
            <button
              onClick={() => {
                soundFX.playConfirm();
                onToggleTerminal();
              }}
              className="cyber-btn"
              style={{
                padding: '6px 14px',
                fontSize: '0.75rem',
                border: '1px solid var(--neon-cyan)',
              }}
              title="Toggle Cyber Terminal (Hotkey: ~ or Ctrl+K)"
            >
              <Terminal size={14} />
              <span className="d-none d-sm-inline">CLI_TERM</span>
            </button>

            {/* 3D FX Mode Switcher */}
            <button
              onClick={cycleFxMode}
              style={{
                background: 'rgba(10, 16, 30, 0.8)',
                border: '1px solid var(--cyber-border)',
                color: fxMode === 'high' ? 'var(--neon-cyan)' : fxMode === 'low' ? 'var(--neon-yellow)' : 'var(--text-muted)',
                padding: '7px 10px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
              }}
              title={`FX Graphics Mode: ${fxMode.toUpperCase()}`}
            >
              <Cpu size={14} />
              <span style={{ textTransform: 'uppercase' }}>{fxMode}</span>
            </button>

            {/* Audio SFX Toggle */}
            <button
              onClick={handleAudioToggle}
              style={{
                background: 'rgba(10, 16, 30, 0.8)',
                border: '1px solid var(--cyber-border)',
                color: isAudioActive ? 'var(--neon-green)' : 'var(--text-muted)',
                padding: '7px 10px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              title={isAudioActive ? 'Sound Effects Active' : 'Sound Effects Muted'}
            >
              {isAudioActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFX.playBlip();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              style={{
                background: 'rgba(0, 243, 255, 0.1)',
                border: '1px solid var(--neon-cyan)',
                color: 'var(--neon-cyan)',
                padding: '6px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              className="d-md-none"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile HUD Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '65px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 65px)',
            backgroundColor: 'rgba(5, 8, 17, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            borderBottom: '2px solid var(--neon-cyan)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-cyan)', marginBottom: '16px' }}>
            &gt; SYSTEM NAVIGATION PROTOCOL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.target)}
                style={{
                  background: 'rgba(10, 16, 30, 0.8)',
                  border: '1px solid var(--cyber-border)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  padding: '14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleTerminal();
              }}
              className="cyber-btn"
              style={{ marginTop: '16px' }}
            >
              <Terminal size={18} /> OPEN TERMINAL [CLI]
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default CyberNav;

