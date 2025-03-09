import React, { useContext } from "react";

import "./Achievement.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";
import BlurText from "../Common/BlurText";

function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <BlurText
              text={"Achievements"}
              delay={400}
              animateBy="words"
              direction="top"
              styles={{ color: theme.primary }}
              // onAnimationComplete={handleAnimationComplete}
              className="blurry-name"
            />
            {/* <h1 style={{ color: theme.primary }}>Achievements</h1> */}
            <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards">
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Achievement;
