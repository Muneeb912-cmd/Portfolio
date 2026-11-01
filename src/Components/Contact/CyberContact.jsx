import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from '../Icons/BrandIcons';
import { soundFX } from '../../utils/soundFX';

const CyberContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFX.playConfirm();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Transmission failed: Please fill in all required telemetry fields (Name, Email, Message).');
      return;
    }

    setStatus('sending');
    setStatusMsg('Encrypting payload & establishing Formspree transmission uplink...');

    try {
      const response = await fetch('https://formspree.io/f/mgejvpdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Cyberpunk Portfolio Transmission',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMsg('Transmission received successfully. Eman Muneeb will review your message and reply via encrypted email uplink.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setStatusMsg(data?.error || 'Transmission uplink returned non-200 status. Please send directly to emanmuneeb1@gmail.com.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMsg('Network uplink interruption. Please transmit directly to emanmuneeb1@gmail.com.');
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px',
        position: 'relative',
        zIndex: 2,
        backgroundColor: 'rgba(5, 8, 17, 0.94)',
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
            <Send size={14} /> // SECTION 07: DIRECT TRANSMISSION UPLINK
          </div>
          <h2
            className="cyber-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '2px',
            }}
          >
            ESTABLISH CONNECTION
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Contact Details & Channels */}
          <div>
            <div
              className="cyber-card cyber-corner-reticles"
              style={{ padding: '32px', marginBottom: '24px' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--neon-cyan)',
                  marginBottom: '16px',
                  letterSpacing: '1px',
                }}
              >
                DIRECT TELEMETRY
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                }}
              >
                Whether seeking an experienced mobile software engineer for high-impact employment or a technical consultant to build your next mobile product, initiate contact below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 243, 255, 0.1)',
                      border: '1px solid var(--cyber-border)',
                      borderRadius: '4px',
                    }}
                  >
                    <Mail size={18} color="var(--neon-cyan)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      DIRECT EMAIL
                    </div>
                    <a
                      href="mailto:emanmuneeb1@gmail.com"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        color: '#ffffff',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--neon-cyan)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                    >
                      emanmuneeb1@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(176, 38, 255, 0.1)',
                      border: '1px solid var(--cyber-border-purple)',
                      borderRadius: '4px',
                    }}
                  >
                    <MapPin size={18} color="var(--neon-purple)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      HEADQUARTERS
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#ffffff' }}>
                      UET Lahore, Punjab, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ borderTop: '1px solid rgba(0, 243, 255, 0.15)', paddingTop: '20px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  Verified Public Identities:
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {[
                    { icon: <GithubIcon size={18} />, label: 'GitHub', url: 'https://github.com/Muneeb912-cmd', color: '#ffffff' },
                    { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/eman-muneeb-363440225/', color: '#0077b5' },
                    { icon: <YoutubeIcon size={18} />, label: 'YouTube', url: 'https://youtube.com/@CODINGisFUN-xz2em', color: '#ff0000' },
                    { icon: <InstagramIcon size={18} />, label: 'Instagram', url: 'https://www.instagram.com/skittleclicks/', color: '#e4405f' },
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '8px 14px',
                        background: 'rgba(10, 16, 30, 0.8)',
                        border: '1px solid var(--cyber-border)',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                        soundFX.playBlip();
                      }}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--cyber-border)')}
                    >
                      {soc.icon} {soc.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Functional Transmission Form */}
          <div className="cyber-card-purple cyber-corner-reticles" style={{ padding: '32px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '18px',
                letterSpacing: '0.5px',
              }}
            >
              TRANSMIT SECURE DISPATCH
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--neon-cyan)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    IDENTIFIER / SENDER NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Sarah Connor / Cyberdyne Systems"
                    style={{
                      width: '100%',
                      background: 'rgba(5, 8, 17, 0.8)',
                      border: '1px solid var(--cyber-border)',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--cyber-border)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--neon-cyan)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    RETURN TRANSMISSION EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. engineer@organization.com"
                    style={{
                      width: '100%',
                      background: 'rgba(5, 8, 17, 0.8)',
                      border: '1px solid var(--cyber-border)',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--cyber-border)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--neon-cyan)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    TRANSMISSION PROTOCOL / SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Mobile Developer Opportunity / Contract"
                    style={{
                      width: '100%',
                      background: 'rgba(5, 8, 17, 0.8)',
                      border: '1px solid var(--cyber-border)',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--cyber-border)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--neon-cyan)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    ENCRYPTED MESSAGE CONTENT *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Detail your engineering requirements, project scope, or opportunity details..."
                    style={{
                      width: '100%',
                      background: 'rgba(5, 8, 17, 0.8)',
                      border: '1px solid var(--cyber-border)',
                      padding: '10px 14px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--cyber-border)')}
                  />
                </div>

                {status !== 'idle' && (
                  <div
                    style={{
                      padding: '12px',
                      background:
                        status === 'success'
                          ? 'rgba(57, 255, 20, 0.1)'
                          : status === 'error'
                          ? 'rgba(255, 0, 127, 0.1)'
                          : 'rgba(0, 243, 255, 0.1)',
                      border: '1px solid',
                      borderColor:
                        status === 'success'
                          ? 'var(--neon-green)'
                          : status === 'error'
                          ? 'var(--neon-magenta)'
                          : 'var(--neon-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color:
                        status === 'success'
                          ? 'var(--neon-green)'
                          : status === 'error'
                          ? 'var(--neon-magenta)'
                          : 'var(--neon-cyan)',
                    }}
                  >
                    {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
                    {status === 'success' && <CheckCircle2 size={16} />}
                    {status === 'error' && <AlertCircle size={16} />}
                    <span>{statusMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cyber-btn"
                  style={{
                    padding: '12px 28px',
                    width: '100%',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                >
                  <Send size={16} /> TRANSMIT DISPATCH TO EMAN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberContact;

