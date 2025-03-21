import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { servicesData } from "../../data/servicesData";

import "./Services.css";
import SingleService from "./SingleService/SingleService";
import BlurText from "../Common/BlurText";
import { Fade } from "react-reveal";

function Services() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {servicesData.length > 0 && (
        <div
          className="services"
          id="services"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="services-header">
            <BlurText
              text={"Services"}
              delay={400}
              animateBy="words"
              direction="top"
              styles={{ color: theme.primary }}
              // onAnimationComplete={handleAnimationComplete}
              className="blurry-name"
            />
            {/* <h1 style={{color: theme.primary}}>Services</h1> */}
          </div>
          <div className="services-body">
            <p style={{ color: theme.tertiary80 }}>
              These are some of the services I offer. Reach out to me if I can
              help you with any!
            </p>
            <Fade right>
              <div className="services-bodycontainer">
                {servicesData.map((services) => (
                  <SingleService
                    key={services.id}
                    id={services.id}
                    title={services.title}
                    icon={services.icon}
                  />
                ))}
              </div>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
