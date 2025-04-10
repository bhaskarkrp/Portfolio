import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Education.css";
import EducationCard from "./EducationCard";

import { educationData } from "../../data/educationData";
import BlurText from "../Common/BlurText";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <BlurText
            text={"Education"}
            delay={400}
            animateBy="words"
            direction="top"
            styles={{ color: theme.primary }}
            // onAnimationComplete={handleAnimationComplete}
            className="blurry-name"
          />
          {/* <h1 style={{ color: theme.primary }}>Education</h1> */}
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={theme.eduimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
