import React, { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [stars, setStars] = useState([]);

  const createStar = () => ({
    id: Math.random(),
    left: Math.random() * 100,
    size: Math.random() * 10 + 2, // Increased minimum size
    duration: Math.random() * 6 + 2, // Slowed down animation
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.5, // Increased minimum opacity
  });

  useEffect(() => {
    // Initialize stars
    const initialStars = Array.from({ length: 30 }, createStar);
    setStars(initialStars);

    // Add new stars periodically
    const interval = setInterval(() => {
      setStars((prevStars) => {
        const filteredStars = prevStars.filter(() => Math.random() > 0.1);
        return [...filteredStars, createStar()];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Create and inject styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .star {
        position: absolute;
        background: #fff;
        border-radius: 50%;
        pointer-events: none;
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }

      @keyframes fall {
        0% {
          transform: translateY(-10vh) translateX(-10px);
        }
        100% {
          transform: translateY(110vh) translateX(100px);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background: "transparent",
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
              star.opacity
            })`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
