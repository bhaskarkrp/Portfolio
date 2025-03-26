import React, { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [stars, setStars] = useState([]);

  const createStar = () => ({
    id: Math.random(),
    left: Math.random() * 100,
    size: Math.random() * 10 + 2,
    duration: Math.random() * 6 + 2,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360,
    trailLength: Math.random() * 50 + 200,
  });

  useEffect(() => {
    const initialStars = Array.from({ length: 30 }, createStar);
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prevStars) => {
        const filteredStars = prevStars.filter(() => Math.random() > 0.1);
        return [...filteredStars, createStar()];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .star {
        position: absolute;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%);
        border-radius: 50%;
        pointer-events: none;
        animation-name: shooting-star;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        height: var(--trail-length);
      }

      @keyframes shooting-star {
        0% {
          transform: translateY(0) translateX(0) scale(1);
          opacity: 1;
        }
        70% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(100vh) translateX(50vw) scale(0.5);
          opacity: 0;
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
            transform: `rotate(${star.rotation}deg)`,
            "--trail-length": `${star.trailLength}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
