import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import BlurText from "../Common/BlurText";
import { Fade } from "react-reveal";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div
      id="skills"
      className="skills"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="skillsHeader">
        <BlurText
          text={"Skills"}
          delay={400}
          animateBy="words"
          direction="top"
          styles={{ color: theme.primary }}
          // onAnimationComplete={handleAnimationComplete}
          className="blurry-name"
        />
        {/* <h2 style={{ color: theme.primary }}>Skills</h2> */}
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          {/* scroll animation */}
          {/* <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            flexWrap="wrap"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee> */}

          <div className="skill-flex-container">
            {skillsData.map((skill, id) => (
          <Fade left>
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
