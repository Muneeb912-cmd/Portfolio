import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

const initialBanner = [
  '==============================================================',
  '  EMAN MUNEEB // CYBER TERMINAL CLI (v2.4.0-release)         ',
  '  STATUS: NEURAL UPLINK SYNCHRONIZED [OK]                     ',
  '  Type "help" for a list of available diagnostic commands.   ',
  '==============================================================',
];

const CyberTerminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState(initialBanner);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global key shortcut to open/close (~ or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    soundFX.playConfirm();

    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newHistory = [...history, `eman@cyber-os:~$ ${rawCmd}`];

    switch (cmd) {
      case 'help':
        newHistory.push(
          'AVAILABLE SYSTEM COMMANDS:',
          '  help        - Show this manual',
          '  about       - Display Eman Muneeb developer dossier',
          '  skills      - List core technology matrix',
          '  experience  - View industry and academic timeline',
          '  projects    - List verified engineering showcase repositories',
          '  services    - View professional engineering services',
          '  contact     - Display uplink communication channels',
          '  whoami      - Query current user authentication session',
          '  matrix      - Trigger matrix digital rain telemetry',
          '  clear       - Clear current terminal screen',
          '  exit        - Close developer terminal session'
        );
        break;

      case 'about':
        newHistory.push(
          '>> DOSSIER: Eman Muneeb',
          '   Software Engineer & Mobile Application Developer.',
          '   Graduated BS Computer Science from UET Lahore (2020-2024).',
          '   Specializing in Flutter, React Native, and native mobile architecture.',
          '   Passionate about clean code (MVVM), performance optimization, and creative development.'
        );
        break;

      case 'skills':
        newHistory.push(
          '>> TECHNOLOGY MATRIX:',
          '   [Mobile]       : Flutter, Dart, React Native, Kotlin, Java, iOS concepts',
          '   [Architecture] : MVVM, Clean Architecture, Repository Pattern, BLoC, Redux',
          '   [Backend]      : Firebase (Firestore/Auth), RESTful APIs, Node.js, Express',
          '   [Databases]    : PostgreSQL, SQL Server (SSMS), SQLite, MongoDB',
          '   [Languages]    : Dart, JavaScript, Python, C#, C++, SQL'
        );
        break;

      case 'experience':
        newHistory.push(
          '>> CAREER CHRONO:',
          '   1. Apex Space Ltd. (Jun 2023 - Aug 2023) - MERN Stack Intern',
          '   2. Freelance Mobile Developer (2022 - Present) - Production Flutter & .NET systems',
          '   3. UET Lahore (2020 - 2024) - Lead Student Engineer & BS CS Graduate'
        );
        break;

      case 'projects':
        newHistory.push(
          '>> VERIFIED REPOSITORIES:',
          '   • Swift Stock               : Flutter Android Inventory Management',
          '   • ChattyBuzz                : Real-Time Mobile Messaging App',
          '   • Flutter PDF Downloader    : SaaS Cloud Document Downloader',
          '   • Student Interest System   : Full-Stack MERN Portal (SIM)',
          '   • The Brain Train School    : Commercial .NET School Management ERP',
          '   • Task Manager Mobile       : Flutter Productivity Tracker',
          '   • Rest-API-CRUD             : Flutter REST Architecture Suite'
        );
        break;

      case 'services':
        newHistory.push(
          '>> DEPLOYABLE SERVICES:',
          '   [1] Cross-Platform Mobile Engineering (Flutter, React Native)',
          '   [2] Clean MVVM Mobile System Architecture',
          '   [3] Real-Time Firebase & REST Cloud Integration',
          '   [4] Mobile Performance Profiling & Bug Squashing',
          '   [5] Legacy Application Modernization'
        );
        break;

      case 'contact':
        newHistory.push(
          '>> TRANSMISSION CHANNELS:',
          '   • Email    : emanmuneeb1@gmail.com',
          '   • GitHub   : https://github.com/Muneeb912-cmd',
          '   • LinkedIn : https://www.linkedin.com/in/eman-muneeb-363440225/',
          '   • YouTube  : https://youtube.com/@CODINGisFUN-xz2em',
          '   • Formspree: Functional direct transmission available in contact section'
        );
        break;

      case 'whoami':
        newHistory.push('>> user@guest: authorized visitor with read/execute access');
        break;

      case 'matrix':
        newHistory.push(
          '>> INITIATING MATRIX RAIN TELEMETRY...',
          '   01000101 01001101 01000001 01001110',
          '   01001101 01010101 01001110 01000101 01000101 01000010',
          '   SYSTEM STATUS: SYNCHRONIZED [OK]'
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push(
          `Command not recognized: "${rawCmd}". Type "help" for a list of valid commands.`
        );
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    soundFX.playTerminalKey();
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isExpanded ? '0' : '20px',
        right: isExpanded ? '0' : '20px',
        width: isExpanded ? '100vw' : 'min(680px, calc(100vw - 40px))',
        height: isExpanded ? '100vh' : '460px',
        backgroundColor: 'rgba(5, 8, 17, 0.96)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--neon-cyan)',
        boxShadow: '0 0 30px rgba(0, 243, 255, 0.35)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          background: 'rgba(0, 243, 255, 0.12)',
          borderBottom: '1px solid var(--cyber-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TerminalIcon size={16} color="var(--neon-cyan)" />
          <span
            style={{
              fontSize: '0.8rem',
              color: 'var(--neon-cyan)',
              letterSpacing: '1px',
              fontWeight: 600,
            }}
          >
            EMAN_MUNEEB // DEV_TERMINAL [CLI]
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--neon-magenta)', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Quick Mobile Chips */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          padding: '8px 16px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid rgba(0, 243, 255, 0.1)',
        }}
      >
        {['help', 'about', 'skills', 'projects', 'services', 'contact', 'clear'].map((chip) => (
          <button
            key={chip}
            onClick={() => handleCommand(chip)}
            style={{
              background: 'rgba(0, 243, 255, 0.08)',
              border: '1px solid var(--cyber-border)',
              color: 'var(--neon-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              padding: '2px 8px',
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Terminal Output Log */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          fontSize: '0.82rem',
          lineHeight: 1.6,
          color: '#e2e8f0',
        }}
      >
        {history.map((line, i) => (
          <div
            key={i}
            style={{
              color: line.startsWith('eman@cyber-os')
                ? 'var(--neon-cyan)'
                : line.startsWith('>>')
                ? 'var(--neon-yellow)'
                : line.startsWith('  •') || line.startsWith('  [')
                ? 'var(--neon-green)'
                : '#cbd5e1',
              whiteSpace: 'pre-wrap',
            }}
          >
            {line}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Terminal Input Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderTop: '1px solid var(--cyber-border)',
        }}
      >
        <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>eman@cyber-os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type command (e.g. 'help', 'projects')..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#ffffff',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
          }}
        />
        <button
          onClick={() => handleCommand(inputVal)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--neon-cyan)',
            cursor: 'pointer',
          }}
        >
          <CornerDownLeft size={16} />
        </button>
      </div>
    </div>
  );
};

export default CyberTerminal;

