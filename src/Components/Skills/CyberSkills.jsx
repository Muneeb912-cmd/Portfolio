import React, { useState } from 'react';
import { Cpu, Smartphone, Layers, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const skillCategories = [
  { id: 'all', label: 'ALL_MODULES' },
  { id: 'mobile', label: 'MOBILE_ENGINEERING' },
  { id: 'architecture', label: 'ARCHITECTURE & STATE' },
  { id: 'backend', label: 'BACKEND & CLOUD' },
  { id: 'database', label: 'DATA_SYSTEMS' },
  { id: 'tools', label: 'DEV_TOOLS' },
];

const skillsData = [
  // Mobile
  { name: 'Flutter & Dart', category: 'mobile', level: 'Production Core', description: 'Cross-platform reactive UI, custom animations, provider/bloc state, offline-first sync.' },
  { name: 'React Native', category: 'mobile', level: 'Core Stack', description: 'Component-driven mobile UI, Expo SDK, Redux Toolkit, navigation.' },
  { name: 'Native Android (Kotlin/Java)', category: 'mobile', level: 'Native Depth', description: 'Android SDK, Activities, Jetpack components, background services.' },
  { name: 'iOS Development Foundations', category: 'mobile', level: 'Cross-Platform', description: 'Swift concepts, Xcode toolchain, App Store distribution pipelines.' },
  
  // Architecture & Patterns
  { name: 'Software Architecture', category: 'architecture', level: 'Mastery', description: 'Enterprise system design, modular decoupled architectures, domain modeling, and technical leadership.' },
  { name: 'Clean Architecture', category: 'architecture', level: 'Mastery', description: 'Domain, Data, and Presentation separation for maintainable enterprise applications.' },
  { name: 'MVVM Pattern', category: 'architecture', level: 'Mastery', description: 'Model-View-ViewModel data-binding, decoupled business logic, testable components.' },
  { name: 'Repository Pattern', category: 'architecture', level: 'Mastery', description: 'Abstracted data source layers combining local caching (SQLite) and remote APIs.' },
  { name: 'State Management (Redux / Bloc)', category: 'architecture', level: 'Advanced', description: 'Predictable unidirectional state flows, immutable stores, and side-effect handling.' },

  // Backend & Cloud
  { name: 'Firebase Ecosystem', category: 'backend', level: 'Production Core', description: 'Firestore, Real-time Database, Firebase Auth, Cloud Storage, and Push Notifications.' },
  { name: 'RESTful API Architecture', category: 'backend', level: 'Mastery', description: 'REST standards, CRUD operations, authentication tokens, rate limiting, and Postman.' },
  { name: 'Node.js & Express', category: 'backend', level: 'Full-Stack', description: 'Lightweight API servers, JWT authentication, middleware pipelines, and microservices.' },
  { name: 'MERN Stack Integrations', category: 'backend', level: 'Internship Core', description: 'End-to-end full-stack web applications proven during Apex Space Ltd. internship.' },

  // Databases
  { name: 'PostgreSQL & SQL Server', category: 'database', level: 'Relational Core', description: 'Normalized schemas, indexing, stored procedures, and complex relational queries.' },
  { name: 'SQLite / Room', category: 'database', level: 'Mobile Core', description: 'High-speed local embedded storage for offline-first mobile applications.' },
  { name: 'MongoDB', category: 'database', level: 'Document Store', description: 'BSON schemas, Mongoose ODM, aggregation pipelines for web platforms.' },

  // Dev Tools & Languages
  { name: 'CI/CD & DevOps Automation', category: 'tools', level: 'Production Core', description: 'Automated test runners, GitHub Actions build pipelines, and continuous deployment workflows.' },
  { name: 'Git & GitHub Actions', category: 'tools', level: 'Essential', description: 'Version control branching models, PR workflows, CI/CD automated deployments.' },
  { name: 'C# (.NET / MVC)', category: 'tools', level: 'Enterprise', description: 'Desktop applications, .NET Core MVC, Windows desktop school management systems.' },
  { name: 'Python', category: 'tools', level: 'Scripting & Logic', description: 'Algorithmic problem solving, automated testing scripts, PyQT5 desktop GUI.' },
  { name: 'Vite & Modern JS/TS', category: 'tools', level: 'Frontend Core', description: 'Modern bundle optimization, ES modules, component design, responsive styling.' },
];

const CyberSkills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.92)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
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
            <Cpu size={14} /> // SECTION 03: TECHNOLOGY MATRIX
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            CORE CAPABILITIES &amp; STACK
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

        {/* Filter Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playBlip();
                  setActiveCategory(cat.id);
                }}
                style={{
                  background: isSelected ? 'rgba(0, 243, 255, 0.2)' : 'rgba(10, 16, 30, 0.8)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--neon-cyan)' : 'var(--cyber-border)',
                  color: isSelected ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '1px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 0 12px rgba(0, 243, 255, 0.4)' : 'none',
                }}
              >
                [ {cat.label} ]
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="cyber-card cyber-corner-reticles"
              style={{
                padding: '22px',
                background: 'rgba(10, 16, 30, 0.7)',
              }}
              onMouseEnter={() => soundFX.playBlip()}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.5px',
                  }}
                >
                  {skill.name}
                </h4>
              </div>

              <div
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--neon-cyan)',
                  background: 'rgba(0, 243, 255, 0.08)',
                  padding: '3px 8px',
                  border: '1px solid rgba(0, 243, 255, 0.2)',
                  borderRadius: '2px',
                  marginBottom: '12px',
                }}
              >
                {skill.level}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberSkills;

