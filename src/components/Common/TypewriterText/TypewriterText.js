import { useState, useEffect, useContext } from "react";
import "./TypewriterText.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

const TypewriterText = ({ texts = [] }) => {
  const { theme } = useContext(ThemeContext);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const textToType = texts[currentTextIndex];

    if (currentCharIndex < textToType.length) {
      // Type next character
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Move to next text after brief pause
      const timer = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayedText("");
        setCurrentCharIndex(0);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentCharIndex]);

  return (
    <div className="container">
      <p className="text" style={{color: theme.primary}}>
        {displayedText}
        <span className="cursor"> |</span>
      </p>
    </div>
  );
};

export default TypewriterText;
