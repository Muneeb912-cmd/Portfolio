import React from 'react';
import { User, Download, Award, Code2, Cpu, Globe, Camera, BookOpen } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const CyberAbout = () => {
  const handleDownloadResume = () => {
    soundFX.playConfirm();
    // Provide clean resume download trigger
    const link = document.createElement('a');
    link.href = '#contact';
    // Smooth scroll to contact or offer resume preview
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    alert('Resume Request Protocol: You can download the latest PDF directly via the Contact/Uplink section or request an updated private CV copy.');
  };

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.85)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--neon-cyan)',
              marginBottom: '8px',
            }}
          >
            <User size={14} /> // SECTION 02: DOSSIER
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            DEVELOPER PROFILE &amp; PHILOSOPHY
          </h2>
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--neon-cyan), transparent)',
              marginTop: '12px',
            }}
          />
        </div>

        {/* Main Grid: Photo Placeholder & Biometrics HUD + Detailed Bio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Holographic Photograph Placeholder Box */}
          <div className="cyber-card cyber-corner-reticles" style={{ padding: '24px' }}>
            <div
              style={{
                position: 'relative',
                height: '380px',
                width: '100%',
                background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.05), rgba(176, 38, 255, 0.05))',
                border: '1px dashed var(--cyber-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* Futuristic scanning reticle overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                  boxShadow: '0 0 15px var(--neon-cyan)',
                  animation: 'scanline-sweep 3s ease-in-out infinite',
                }}
              />

              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: '2px solid var(--neon-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  background: 'rgba(0, 243, 255, 0.05)',
                  boxShadow: '0 0 25px rgba(0, 243, 255, 0.2)',
                }}
              >
                <User size={56} color="var(--neon-cyan)" />
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '1.5px',
                  marginBottom: '4px',
                }}
              >
                EMAN MUNEEB
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--neon-cyan)',
                  marginBottom: '14px',
                }}
              >
                STATUS: VERIFIED DEVELOPER
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  padding: '6px 16px',
                  background: 'rgba(5, 8, 17, 0.8)',
                  border: '1px solid var(--cyber-border)',
                  maxWidth: '85%',
                }}
              >
                [ PHOTOGRAPH UPLINK READY ]<br />
                Awaiting confirmed high-resolution studio photograph replacement.
              </div>
            </div>

            {/* Quick biometric metadata */}
            <div
              style={{
                marginTop: '18px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }}
            >
              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '8px 12px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  LOCATION
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: '#ffffff' }}>
                  Lahore, Pakistan
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '8px 12px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  EDUCATION
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', color: '#ffffff' }}>
                  BS CS (UET Lahore)
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Dossier & Engineering Principles */}
          <div>
            <div
              className="cyber-card-purple"
              style={{ padding: '32px', marginBottom: '24px' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--neon-purple)',
                  letterSpacing: '1px',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                Identity &amp; Engineering Trajectory
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                I am a Software Engineer and Mobile Application Developer graduated in Computer Science from the <strong>University of Engineering and Technology (UET) Lahore</strong>. My journey blends deep curiosity for software craftsmanship with practical industry experience delivering production-grade applications.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}
              >
                Whether architecting cross-platform mobile solutions in <strong>Flutter and React Native</strong>, building native Android experiences, or implementing resilient backend services with <strong>Firebase, REST APIs, and the MERN stack</strong>, I focus on clean maintainable code, predictive state management (MVVM, BLoC, Redux), and zero-friction user experiences.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={handleDownloadResume}
                  className="cyber-btn"
                  style={{ padding: '10px 22px' }}
                >
                  <Download size={16} /> DOWNLOAD RESUME [PDF]
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  <Award size={16} /> APEX SPACE CERTIFIED
                </div>
              </div>
            </div>

            {/* Core Engineering Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  icon: <Cpu size={20} color="var(--neon-cyan)" />,
                  title: 'Clean Architecture',
                  desc: 'Separation of concerns, decoupled domain logic, and bulletproof MVVM data flows.',
                },
                {
                  icon: <Code2 size={20} color="var(--neon-purple)" />,
                  title: 'Performance-First',
                  desc: 'Sub-millisecond frame rendering, asset compression, memory leak prevention, and fast startup.',
                },
                {
                  icon: <Camera size={20} color="var(--neon-magenta)" />,
                  title: 'Creative Precision',
                  desc: 'A background in visual photography and content creation brings meticulous attention to UI aesthetics.',
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="cyber-card"
                  style={{ padding: '18px' }}
                >
                  <div style={{ marginBottom: '10px' }}>{pillar.icon}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '6px',
                    }}
                  >
                    {pillar.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanline-sweep {
          0% { top: 0; opacity: 0.8; }
          50% { top: 100%; opacity: 1; }
          100% { top: 0; opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default CyberAbout;

