import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from '../Icons/BrandIcons';
import { soundFX } from '../../utils/soundFX';

const CyberFooter = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    soundFX.playConfirm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--cyber-border)',
        backgroundColor: '#04060d',
        padding: '48px 24px 32px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '1.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              EMAN MUNEEB
              <span className="cyber-beacon" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--neon-cyan)',
                marginTop: '4px',
              }}
            >
              SOFTWARE ENGINEER // MOBILE APPLICATION DEVELOPER
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenTerminal}
              className="cyber-btn"
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              <Terminal size={14} /> CLI_TERMINAL [~]
            </button>

            <button
              onClick={scrollToTop}
              className="cyber-btn-purple"
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              <ArrowUp size={14} /> SYS_TOP
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Eman Muneeb. All rights reserved. Architected with React, Vite &amp; Three.js WebGL.
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://github.com/Muneeb912-cmd"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/eman-muneeb-363440225/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://youtube.com/@CODINGisFUN-xz2em"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/skittleclicks/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;

