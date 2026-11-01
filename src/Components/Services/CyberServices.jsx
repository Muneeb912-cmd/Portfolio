import React from 'react';
import { Smartphone, Layers, Server, Zap, RefreshCw, FileSearch, ArrowRight } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const services = [
  {
    icon: <Smartphone size={24} color="var(--neon-cyan)" />,
    title: 'Cross-Platform Mobile Engineering',
    summary: 'Building fluid, responsive, production-ready apps across Android and iOS using Flutter and React Native with unified codebases and native feel.',
    value: 'Reduces time-to-market by 40% while preserving platform-specific gestures and 60 FPS performance.',
    deliverables: ['Custom UI animations', 'Offline data sync', 'Native device API bridges'],
  },
  {
    icon: <Layers size={24} color="var(--neon-purple)" />,
    title: 'Software Architecture & System Design',
    summary: 'Structuring clean, modular enterprise architectures adhering to MVVM, Clean Architecture, and predictable state containers (BLoC, Provider, Redux) with automated CI/CD integration.',
    value: 'Eliminates spaghetti code, accelerates feature onboarding, and simplifies automated unit testing & deployment.',
    deliverables: ['Separation of concerns', 'Decoupled domain layers', 'CI/CD automated test & build flows'],
  },
  {
    icon: <Server size={24} color="var(--neon-green)" />,
    title: 'Backend, Cloud & API Integration',
    summary: 'Seamlessly connecting mobile clients to RESTful APIs, Firebase services (Firestore, Auth, Cloud Storage), and Node.js microservices.',
    value: 'Ensures real-time synchronization, secure session management, and resilient error recovery under low bandwidth.',
    deliverables: ['JWT/OAuth workflows', 'Firebase cloud rules', 'Optimistic caching pipelines'],
  },
  {
    icon: <Zap size={24} color="var(--neon-yellow)" />,
    title: 'Performance Profiling & Optimization',
    summary: 'Diagnosing frame drops, memory leaks, high battery consumption, and oversized bundle assets across mobile applications.',
    value: 'Guarantees sub-1-second startup times, butter-smooth 60/120Hz scrolling, and high Google Play ratings.',
    deliverables: ['DevTools memory audits', 'Build size tree-shaking', 'Isolate thread offloading'],
  },
  {
    icon: <RefreshCw size={24} color="var(--neon-magenta)" />,
    title: 'Legacy Modernization & Migration',
    summary: 'Refactoring outdated codebases into modern Flutter / React Native architectures or transitioning Java to modern Kotlin.',
    value: 'Revitalizes unmaintainable apps, patches security vulnerabilities, and enables modern OS features.',
    deliverables: ['Incremental module refactoring', 'Deprecated API replacement', 'CI/CD pipeline setup'],
  },
  {
    icon: <FileSearch size={24} color="var(--neon-blue)" />,
    title: 'Technical Consulting & Code Audits',
    summary: 'Comprehensive codebase evaluations, architectural review reports, dependency risk assessments, and hiring team guidance.',
    value: 'Provides actionable roadmaps for engineering leadership prior to product launches or investments.',
    deliverables: ['Full architecture assessment', 'Security & vulnerability audit', 'Actionable refactor plan'],
  },
];

const CyberServices = () => {
  const scrollToContact = () => {
    soundFX.playConfirm();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.9)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
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
            <Server size={14} /> // SECTION 06: DEPLOYABLE SERVICES
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            SOLUTIONS &amp; TECHNICAL CAPABILITIES
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

        {/* Services Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="cyber-card cyber-corner-reticles"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={() => soundFX.playBlip()}
            >
              <div>
                <div style={{ marginBottom: '16px' }}>{service.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '10px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '14px',
                  }}
                >
                  {service.summary}
                </p>

                <div
                  style={{
                    background: 'rgba(0, 243, 255, 0.04)',
                    borderLeft: '2px solid var(--neon-cyan)',
                    padding: '8px 12px',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <strong>Impact:</strong> {service.value}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Core Deliverables:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {service.deliverables.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--neon-cyan)',
                        background: 'rgba(0, 243, 255, 0.06)',
                        padding: '2px 8px',
                        borderRadius: '2px',
                      }}
                    >
                      • {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div
          className="cyber-card-purple cyber-corner-reticles"
          style={{
            padding: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                color: '#ffffff',
                marginBottom: '6px',
              }}
            >
              HAVE A SPECIFIC MOBILE OR SOFTWARE CHALLENGE?
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              Let's evaluate architecture requirements, project timelines, and implementation strategy.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="cyber-btn"
            style={{ padding: '12px 24px' }}
          >
            DISCUSS REQUIREMENTS <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CyberServices;

