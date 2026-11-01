import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronRight, X, ExternalLink } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const experiences = [
  {
    role: 'MERN Stack Engineering Intern',
    organization: 'Apex Space Ltd.',
    period: 'Jun 2023 — Aug 2023',
    location: 'Lahore, Pakistan',
    type: 'Industry Internship',
    description: 'Completed an intensive industry software engineering internship building full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). Collaborated in an agile professional environment, writing clean APIs, modular React components, and integrating backend data pipelines.',
    achievements: [
      'Engineered scalable REST endpoints and responsive web interfaces',
      'Collaborated in daily agile scrums, PR reviews, and version control workflows',
      'Awarded official Certificate of Completion for outstanding performance',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    role: 'Freelance Mobile & Full-Stack Developer',
    organization: 'Self-Employed / DukoDevs',
    period: '2022 — Present',
    location: 'Remote',
    type: 'Client & Independent Practice',
    description: 'Delivering end-to-end mobile applications and desktop software for clients. Built and launched production Flutter applications, .NET desktop school management software with SQL Server, and full-stack solutions with high reliability.',
    achievements: [
      'Architected and delivered the School Management System for a local educational institution using .NET & SQL',
      'Created cross-platform Flutter applications including Swift Stock and ChattyBuzz',
      'Maintained 100% on-time delivery across diverse technical contracts',
    ],
    tech: ['Flutter', 'Dart', 'React', 'Firebase', 'C# (.NET)', 'SQL Server'],
  },
  {
    role: 'Lead Mobile Engineer & Academic Researcher',
    organization: 'University of Engineering and Technology (UET) Lahore',
    period: '2020 — 2024',
    location: 'Lahore, Pakistan',
    type: 'Academic Leadership',
    description: 'Led development teams across capstone and semester software engineering projects during the BS Computer Science program. Directed mobile architecture design, state management strategies, and code quality standards.',
    achievements: [
      'Spearheaded multiple term projects as Team Lead',
      'Mastered advanced data structures, algorithms, operating systems, and distributed architecture',
      'Graduated with verified BS Computer Science credential',
    ],
    tech: ['Flutter', 'Java', 'Python', 'Dart', 'C++', 'System Design'],
  },
];

const education = [
  {
    institution: 'University of Engineering and Technology (UET) Lahore',
    degree: 'BS Computer Science',
    period: '2020 — 2024',
    details: 'Completed comprehensive 4-year Computer Science program focusing on software architecture, mobile systems, database engineering, and algorithms.',
    link: 'https://www.uet.edu.pk/',
  },
  {
    institution: 'Unique College, Lahore',
    degree: 'Intermediate (Pre-Engineering)',
    period: '2017 — 2019',
    details: 'Rigorous foundation in mathematics, physics, and analytical problem solving.',
    link: 'https://www.unique.edu.pk/',
  },
  {
    institution: 'Adabistan-e-Soophia School, Lahore',
    degree: 'Matriculation (Pre-Medical)',
    period: '2008 — 2016',
    details: 'Secondary school education focusing on natural sciences and foundational mathematics.',
    link: 'https://adabistan.edu.pk/',
  },
];

const certifications = [
  {
    title: 'Certificate of Completion — Apex Space Ltd.',
    issuer: 'Apex Space Ltd.',
    date: 'August 2023',
    description: 'Verified completion of software engineering internship in MERN stack development.',
  },
  {
    title: 'Course Certification — Udemy',
    issuer: 'Udemy Online Academy',
    date: 'Verified',
    description: 'Advanced development curriculum covering modern software engineering and programming paradigms.',
  },
];

const CyberExperience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.88)',
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
            <Briefcase size={14} /> // SECTION 04: CAREER CHRONO
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            EXPERIENCE &amp; EDUCATION
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

        {/* Industry Experience Timeline */}
        <div style={{ marginBottom: '60px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '1.4rem',
              color: 'var(--neon-cyan)',
              marginBottom: '24px',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Briefcase size={20} /> INDUSTRY &amp; FREELANCE TIMELINE
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="cyber-card cyber-corner-reticles"
                style={{ padding: '28px' }}
                onMouseEnter={() => soundFX.playBlip()}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '4px',
                      }}
                    >
                      {exp.role}
                    </h4>
                    <div
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '1.05rem',
                        color: 'var(--neon-cyan)',
                        fontWeight: 600,
                      }}
                    >
                      {exp.organization}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--neon-green)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Calendar size={13} /> {exp.period}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        justifyContent: 'flex-end',
                        marginTop: '2px',
                      }}
                    >
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '16px',
                  }}
                >
                  {exp.description}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Key Accomplishments:
                  </div>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.88rem',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <ChevronRight size={15} color="var(--neon-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        background: 'rgba(0, 243, 255, 0.06)',
                        border: '1px solid var(--cyber-border)',
                        color: 'var(--neon-cyan)',
                        borderRadius: '2px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Education Column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.3rem',
                color: 'var(--neon-purple)',
                marginBottom: '20px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <GraduationCap size={20} /> ACADEMIC EDUCATION
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="cyber-card-purple"
                  style={{ padding: '20px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '6px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#ffffff',
                      }}
                    >
                      {edu.degree}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--neon-purple)',
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.95rem',
                      color: 'var(--neon-cyan)',
                      marginBottom: '8px',
                    }}
                  >
                    {edu.institution}
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '10px',
                    }}
                  >
                    {edu.details}
                  </p>

                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--neon-cyan)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Learn More <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.3rem',
                color: 'var(--neon-green)',
                marginBottom: '20px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Award size={20} /> CERTIFICATIONS
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="cyber-card"
                  style={{ padding: '20px' }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}
                  >
                    {cert.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--neon-green)',
                      marginBottom: '8px',
                    }}
                  >
                    Issued by: {cert.issuer} // {cert.date}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '12px',
                    }}
                  >
                    {cert.description}
                  </p>

                  <button
                    onClick={() => {
                      soundFX.playConfirm();
                      setSelectedCert(cert);
                    }}
                    className="cyber-btn"
                    style={{
                      padding: '6px 14px',
                      fontSize: '0.72rem',
                      background: 'rgba(57, 255, 20, 0.08)',
                      borderColor: 'var(--neon-green)',
                      color: 'var(--neon-green)',
                    }}
                  >
                    <Award size={13} /> INSPECT CREDENTIAL
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Credential Modal */}
      {selectedCert && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(5, 8, 17, 0.92)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cyber-card cyber-corner-reticles"
            style={{
              maxWidth: '540px',
              width: '100%',
              padding: '32px',
              background: '#070c18',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>
                [ HOLOGRAPHIC CREDENTIAL ARCHIVE ]
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neon-cyan)',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '10px' }}>
              {selectedCert.title}
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--neon-green)', marginBottom: '16px' }}>
              ISSUER: {selectedCert.issuer} // STATUS: VERIFIED
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedCert.description}
            </p>

            <div
              style={{
                padding: '16px',
                background: 'rgba(0, 243, 255, 0.05)',
                border: '1px solid var(--cyber-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '20px',
              }}
            >
              Note: High-resolution physical certificate scans are maintained on file and available for employer audit upon interview.
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="cyber-btn"
              style={{ width: '100%' }}
            >
              CLOSE CREDENTIAL VIEWER
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CyberExperience;

