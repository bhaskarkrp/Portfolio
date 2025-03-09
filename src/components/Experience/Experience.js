import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import BlurText from '../Common/BlurText';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <BlurText
                        text={'Experience'}
                        delay={400}
                        animateBy="words"
                        direction="top"
                        styles={{ color: theme.primary }}
                        // onAnimationComplete={handleAnimationComplete}
                        className="blurry-name"
                    />
                    {/* <h1 style={{color:theme.primary}}>Experience</h1> */}
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            details={exp.details}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
