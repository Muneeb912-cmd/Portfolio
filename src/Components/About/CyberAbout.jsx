import React, { useState } from 'react';
import { User, Download, Code2, Cpu, Camera, Layers, ShieldCheck, GitMerge } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const CyberAbout = () => {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const handleDownloadResume = () => {
    soundFX.playConfirm();
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

        {/* Profile & Dossier Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Holographic Photograph Dossier Box */}
          <div
            className="cyber-card cyber-corner-reticles"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.05), rgba(176, 38, 255, 0.05))',
                border: '1px dashed var(--cyber-border)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '36px 20px',
                overflow: 'hidden',
                borderRadius: '4px',
                marginBottom: '20px',
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

              {/* Holographic Profile Photograph / Biometric Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: `2px solid ${photoLoaded ? 'var(--neon-green)' : 'var(--neon-cyan)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  background: 'rgba(0, 243, 255, 0.08)',
                  boxShadow: photoLoaded 
                    ? '0 0 25px rgba(57, 255, 20, 0.35)' 
                    : '0 0 25px rgba(0, 243, 255, 0.25)',
                  overflow: 'hidden',
                }}
              >
                {!photoError && (
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Eman Muneeb"
                    onLoad={() => setPhotoLoaded(true)}
                    onError={() => setPhotoError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: photoLoaded ? 'block' : 'none',
                    }}
                  />
                )}

                {(!photoLoaded || photoError) && (
                  <User size={50} color="var(--neon-cyan)" />
                )}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
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
                  marginBottom: '16px',
                }}
              >
                STATUS: DEVSINC MOBILE DEVELOPER
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: photoLoaded ? 'var(--neon-green)' : 'var(--text-muted)',
                  textAlign: 'center',
                  padding: '8px 16px',
                  background: 'rgba(5, 8, 17, 0.85)',
                  border: `1px solid ${photoLoaded ? 'rgba(57, 255, 20, 0.4)' : 'var(--cyber-border)'}`,
                  maxWidth: '92%',
                  lineHeight: 1.5,
                }}
              >
                {photoLoaded ? (
                  <>
                    [ BIOMETRIC PHOTOGRAPH CONFIRMED ]<br />
                    Studio profile photograph uplink verified.
                  </>
                ) : (
                  <>
                    [ PHOTOGRAPH UPLINK READY ]<br />
                    Place your photo at <code>public/profile.jpg</code> to activate.
                  </>
                )}
              </div>
            </div>

            {/* Biometric & Career Telemetry Metadata */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '12px 14px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  ORGANIZATION
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--neon-cyan)', fontWeight: 600 }}>
                  Devsinc (May '24 - Pres)
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '12px 14px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  EDUCATION
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
                  BS CS (UET Lahore)
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '12px 14px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  PRIMARY DOMAIN
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--neon-purple)', fontWeight: 600 }}>
                  Native OS & Cross-Platform
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(5, 8, 17, 0.6)',
                  padding: '12px 14px',
                  border: '1px solid var(--cyber-border)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  VERIFIED CLEARANCE
                </div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: 'var(--neon-green)', fontWeight: 600 }}>
                  Active Engineering Node
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Dossier Card */}
          <div
            className="cyber-card-purple cyber-corner-reticles"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--neon-purple)',
                  letterSpacing: '1px',
                  marginBottom: '18px',
                  textTransform: 'uppercase',
                }}
              >
                Identity &amp; Engineering Trajectory
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                }}
              >
                I am a Software Engineer and Mobile Application Developer at <strong>Devsinc</strong>, having graduated in Computer Science from the <strong>University of Engineering and Technology (UET) Lahore</strong>. My journey blends deep curiosity for software craftsmanship with practical industry experience delivering production-grade applications.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                }}
              >
                Specializing in <strong>Native OS (Android / iOS)</strong> and cross-platform ecosystems like <strong>Flutter and React Native</strong>, I engineer robust systems with <strong>Clean Architecture, MVVM, and CI/CD automated release pipelines</strong>. Whether implementing cloud integrations with Firebase or REST APIs, I focus on clean maintainable code, predictive state management, and zero-friction user experiences.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                paddingTop: '16px',
                borderTop: '1px solid rgba(176, 38, 255, 0.2)',
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
                  color: 'var(--neon-green)',
                }}
              >
                <ShieldCheck size={16} /> DEVSINC VERIFIED ENGINEER
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Pillars - Full Width Responsive Grid */}
        <div style={{ marginTop: '32px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--neon-cyan)',
              marginBottom: '14px',
              letterSpacing: '1px',
            }}
          >
            // ARCHITECTURAL FOUNDATION &amp; CORE PILLARS
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: <Layers size={20} color="var(--neon-cyan)" />,
                title: 'Software Architect',
                desc: 'Enterprise Clean Architecture, decoupled domain boundaries, and bulletproof MVVM data flows.',
              },
              {
                icon: <Code2 size={20} color="var(--neon-purple)" />,
                title: 'Performance-First',
                desc: 'Sub-millisecond frame rendering, asset compression, memory leak prevention, and zero-jank 60/120 FPS.',
              },
              {
                icon: <GitMerge size={20} color="var(--neon-green)" />,
                title: 'CI/CD & DevOps Automation',
                desc: 'Automated test suites, GitHub Actions build pipelines, and continuous deployment for Android & iOS.',
              },
              {
                icon: <Camera size={20} color="var(--neon-magenta)" />,
                title: 'Creative Precision',
                desc: 'A background in visual photography and content creation brings meticulous attention to UI aesthetics and micro-interactions.',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="cyber-card"
                style={{ padding: '22px' }}
              >
                <div style={{ marginBottom: '10px' }}>{pillar.icon}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.05rem',
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
                    fontSize: '0.85rem',
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
