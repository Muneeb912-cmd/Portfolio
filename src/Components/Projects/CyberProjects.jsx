import React, { useState } from 'react';
import { Layers, ExternalLink, Code, Smartphone, Globe, Terminal, X, CheckCircle, ShieldAlert } from 'lucide-react';
import { GithubIcon } from '../Icons/BrandIcons';
import { soundFX } from '../../utils/soundFX';

const projectList = [
  {
    id: 'swift-stock',
    title: 'Swift Stock — Inventory Management',
    category: 'mobile',
    type: 'Mobile Application (Android)',
    techStack: ['Flutter', 'Dart', 'Provider', 'SQLite', 'REST APIs'],
    repo: 'https://github.com/Muneeb912-cmd/InventoryManagement.git',
    summary: 'A high-performance mobile inventory management system built in Flutter for real-time stock control, SKU tracking, low-inventory alerts, and offline caching.',
    architecture: 'Model-View-ViewModel (MVVM) with Repository Pattern separating offline SQLite persistence from network synchronization.',
    challenges: 'Handling concurrent barcode/SKU queries while maintaining 60 FPS scrolling through thousands of cached stock items.',
    solution: 'Implemented lazy-loaded paginated lists, SQLite indexing on product SKUs, and isolated background compute isolates for data transformations.',
    highlights: ['Offline-first SQLite caching', 'Real-time stock audit & alerts', 'Barcode/SKU search optimization'],
  },
  {
    id: 'chatty-buzz',
    title: 'ChattyBuzz — Real-Time Messaging',
    category: 'mobile',
    type: 'Mobile Application (Android / iOS)',
    techStack: ['Flutter', 'Dart', 'Firebase Realtime DB', 'Firebase Auth', 'Cloud Storage'],
    repo: 'https://github.com/Muneeb912-cmd/chattyBuzz.git',
    summary: 'A cross-platform real-time chat application featuring instant 1-on-1 messaging, presence indicators, media attachment uploads, and reactive message threads.',
    architecture: 'Reactive StreamBuilder architecture with Firebase Realtime Database and decoupled authentication service.',
    challenges: 'Preventing state desynchronization and latency spikes during intermittent network connections.',
    solution: 'Configured Firebase offline cache persistence, optimistic UI message rendering with status checkmarks, and auto-retry queues.',
    highlights: ['Sub-100ms message delivery', 'Optimistic UI rendering', 'End-to-end Firebase security rules'],
  },
  {
    id: 'flutter-pdf-downloader',
    title: 'Flutter PDF Downloader SaaS',
    category: 'mobile',
    type: 'SaaS Mobile App',
    techStack: ['Flutter', 'Firebase Cloud Storage', 'Dio', 'Path Provider', 'Permission Handler'],
    repo: 'https://github.com/Muneeb912-cmd/Flutter_PDF_Downloader.git',
    summary: 'Cloud-integrated mobile utility for discovering, previewing, and background-downloading PDF documentation and reports with chunked transfer resume support.',
    architecture: 'Event-driven download manager with stateful progress listeners and Android scoped storage compliance.',
    challenges: 'Managing large file downloads across Android background process lifecycle without memory crashes.',
    solution: 'Used Dio stream chunking to disk directly, bypassing RAM buffering, and integrated notification progress channels.',
    highlights: ['Resumable chunked file streaming', 'Android 13+ permission compliance', 'Cloud asset indexing'],
  },
  {
    id: 'sim-portal',
    title: 'Student Interest System (SIM)',
    category: 'web',
    type: 'Full-Stack Web Platform',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    repo: 'https://github.com/Muneeb912-cmd/StudentInterestSystem-MERN.git',
    summary: 'Comprehensive web portal designed for educational institutions to profile student extracurricular interests, academic preferences, and faculty advisory matching.',
    architecture: 'MERN stack multi-tier architecture with RESTful endpoints, JWT cookie session authentication, and MongoDB aggregation pipelines.',
    challenges: 'Structuring dynamic survey schemas that could evolve without breaking existing student evaluation data.',
    solution: 'Designed polymorphic MongoDB documents with strict Mongoose validation and schema versioning.',
    highlights: ['Role-based access control (RBAC)', 'Complex aggregation reports', 'Responsive student dashboard'],
  },
  {
    id: 'brain-train-school',
    title: 'The Brain Train School System',
    category: 'desktop',
    type: 'Enterprise Management System',
    techStack: ['C# (.NET)', 'SQL Server (SSMS)', 'Windows Forms', 'Crystal Reports'],
    repo: 'https://github.com/Muneeb912-cmd/SchoolManagementSystem.git',
    summary: 'Production school management enterprise software deployed for a commercial client to automate student admissions, fee tracking, grade calculation, and attendance.',
    architecture: '3-tier N-tier desktop application architecture separating UI forms, business logic managers, and SQL Server data access layer.',
    challenges: 'Ensuring transactional integrity for multi-student monthly fee voucher generation without database deadlocks.',
    solution: 'Leveraged ACID SQL Server stored procedures with explicit transaction blocks and indexed primary keys.',
    highlights: ['Multi-role admission & fee tracking', 'Automated report card generation', 'Commercial client deployment'],
  },
  {
    id: 'task-manager',
    title: 'Task Manager Mobile',
    category: 'mobile',
    type: 'Mobile Productivity App',
    techStack: ['Flutter', 'Dart', 'Shared Preferences', 'Local Notifications'],
    repo: 'https://github.com/Muneeb912-cmd/Task-Management.git',
    summary: 'Minimalist mobile task and priority management tool with scheduled deadline reminders, category tags, and intuitive completion gestures.',
    architecture: 'Stateful UI components with reactive state updates and local device notification scheduling.',
    challenges: 'Accurate alarm scheduling across varying Android battery optimization modes.',
    solution: 'Integrated exact alarm permissions and persistent serialized local storage.',
    highlights: ['Zero-latency local interaction', 'Custom category color codes', 'Scheduled notification triggers'],
  },
  {
    id: 'rest-api-crud',
    title: 'RESTful API Mobile Architecture',
    category: 'mobile',
    type: 'Mobile Engineering Architecture',
    techStack: ['Flutter', 'Dart', 'HTTP Client', 'JSON Serialization'],
    repo: 'https://github.com/Muneeb912-cmd/Rest_API_CRUD.git',
    summary: 'A reference mobile architecture demonstrating resilient HTTP communication, custom error handling, pagination, and full Create-Read-Update-Delete pipelines.',
    architecture: 'Clean service layer abstraction with generic HTTP client interceptors.',
    challenges: 'Graceful handling of server timeouts, 4xx/5xx status codes, and network disconnections.',
    solution: 'Implemented comprehensive exception mappings and user-facing snackbar alerts with retry mechanisms.',
    highlights: ['Decoupled network layer', 'Generic model deserialization', 'Automated request retry logic'],
  },
  {
    id: 'modern-dashboard',
    title: 'Modern Analytics Dashboard',
    category: 'web',
    type: 'Web Dashboard Application',
    techStack: ['React', 'MERN Stack', 'CSS3 Modules', 'Chart Visuals'],
    repo: 'https://github.com/Muneeb912-cmd/Modren-DashBoard_MERN.git',
    summary: 'A responsive administrative and metrics dashboard showcasing dynamic data visualization, theme toggles, and user management grids.',
    architecture: 'Component-driven modular React architecture with reusable card widgets.',
    challenges: 'Maintaining responsive grid layouts across varied screen resolutions from 320px mobile to 4K displays.',
    solution: 'Utilized CSS grid with dynamic `minmax()` breakpoints and flexbox fallbacks.',
    highlights: ['Dynamic KPI metrics cards', 'Modular administrative tables', 'Responsive sidebar layout'],
  },
];

const CyberProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL_ARSENAL' },
    { id: 'mobile', label: 'MOBILE_APPS' },
    { id: 'web', label: 'WEB_PLATFORMS' },
    { id: 'desktop', label: 'SYSTEMS_&_DESKTOP' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.95)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
            <Layers size={14} /> // SECTION 05: ARSENAL OF REPOSITORIES
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            ENGINEERING SHOWCASE &amp; CASE STUDIES
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

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {filters.map((f) => {
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  soundFX.playBlip();
                  setActiveFilter(f.id);
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
                [ {f.label} ]
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cyber-card cyber-corner-reticles"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={() => soundFX.playBlip()}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--neon-cyan)',
                      background: 'rgba(0, 243, 255, 0.08)',
                      padding: '2px 8px',
                      border: '1px solid var(--cyber-border)',
                    }}
                  >
                    {project.type}
                  </span>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '10px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '18px',
                  }}
                >
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px',
                  }}
                >
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '2px 7px',
                        background: 'rgba(10, 16, 30, 0.9)',
                        border: '1px solid var(--cyber-border)',
                        color: 'var(--text-muted)',
                        borderRadius: '2px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderTop: '1px solid rgba(0, 243, 255, 0.1)',
                  paddingTop: '16px',
                }}
              >
                <button
                  onClick={() => {
                    soundFX.playConfirm();
                    setSelectedProject(project);
                  }}
                  className="cyber-btn"
                  style={{
                    flex: 1,
                    padding: '8px 14px',
                    fontSize: '0.76rem',
                  }}
                >
                  <Code size={14} /> DEEP DIVE ARCHITECTURE
                </button>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid var(--cyber-border)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                    soundFX.playBlip();
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cyber-border)')}
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(5, 8, 17, 0.94)',
            backdropFilter: 'blur(12px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="cyber-card cyber-corner-reticles"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              background: '#070c18',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  // ARCHITECTURE DEEP DIVE // {selectedProject.type}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    marginTop: '4px',
                  }}
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neon-cyan)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-purple)', marginBottom: '4px' }}>
                ARCHITECTURE PATTERN:
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {selectedProject.architecture}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-yellow)', marginBottom: '4px' }}>
                TECHNICAL CHALLENGE:
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedProject.challenges}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-green)', marginBottom: '4px' }}>
                ENGINEERING SOLUTION:
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {selectedProject.solution}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-cyan)', marginBottom: '8px' }}>
                KEY ARCHITECTURAL HIGHLIGHTS:
              </div>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle size={14} color="var(--neon-cyan)" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={selectedProject.repo}
                target="_blank"
                rel="noreferrer"
                className="cyber-btn"
                style={{ flex: 1 }}
              >
                <GithubIcon size={16} /> INSPECT CODE ON GITHUB
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--cyber-border)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  padding: '10px 20px',
                  cursor: 'pointer',
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CyberProjects;

