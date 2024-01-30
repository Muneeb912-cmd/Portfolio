import React, { useState, useEffect } from "react";

const App = () => {
  const [lines, setLines] = useState([
    "I am a Programmer!",
    "I am a Computer Scientist!",
    "I am a Youtuber!",
    "I am a Developer!",
    "I am a UI Designer!",
    "I am a Photographer!",
    "I am a Flutter Developer!",
    "I am a Web Developer!",
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      // Start typing the next line when the current line is fully displayed
      if (typedText === lines[currentLineIndex]) {
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
        setTypedText("");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [typedText, lines, currentLineIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add one character to the typedText at a time
      const currentLine = lines[currentLineIndex];
      setTypedText((prevTypedText) =>
        prevTypedText === currentLine
          ? prevTypedText
          : addGlitch(currentLine, prevTypedText.length + 1)
      );
    }, 100);

    return () => clearInterval(interval);
  }, [lines, currentLineIndex]);

  const addGlitch = (text, index) => {
    const glitchChance = 0.1; // Adjust the glitch chance as needed
    return text.substring(0, index) + (Math.random() < glitchChance ? "⚡" : text.charAt(index));
  };

  const containerStyle = {
    position: "relative",
    color: "#00ff41",
    fontFamily: "Courier New, monospace",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  };

  const contentStyle = {
    textAlign: "center",
  };

  const lineStyle = {
    position: "absolute",
    top: "40vh", // Adjust the position as needed
    fontWeight: "bold",
  };

  const cursorStyle = {
    display: "inline-block",
    verticalAlign: "text-bottom",
    animation: "blink-animation 0.8s infinite",
  };

  const cursorAnimation = `
    @keyframes blink-animation {
      0%, 100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
  `;

  const styles = document.styleSheets[0];
  styles.insertRule(cursorAnimation, styles.cssRules.length);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p>
          <h1 style={{ fontWeight: "bold" }}>
            Hello, I am Eman Muneeb and {typedText}
            <span style={cursorStyle}>|</span>
          </h1>
        </p>
      </div>
    </div>
  );
};

export default App;
