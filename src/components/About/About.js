import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import BlurText from "../Common/BlurText";
import { Fade } from "react-reveal";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <BlurText
            text={aboutData.title}
            delay={400}
            animateBy="words"
            direction="top"
            styles={{ color: theme.primary }}
            // onAnimationComplete={handleAnimationComplete}
            className="blurry-name"
          />
          {/* <h2 style={{ color: theme.primary }}>{aboutData.title}</h2> */}
          <Fade left>
            <p style={{ color: theme.tertiary80 }}>
              {aboutData.description1}
              <br />
              <br />
            </p>
            <p
              style={{ color: theme.tertiary80 }}
              dangerouslySetInnerHTML={{ __html: aboutData.description2 }}
            />
          </Fade>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 1 ? theme.aboutimg2 : theme.aboutimg1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
