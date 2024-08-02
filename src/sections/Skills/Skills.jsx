import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the CSS for styling

import "./Skills.css";

const Skill = ({ percentage, text, color, imageUrl }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((oldValue) => {
        if (oldValue >= percentage) {
          clearInterval(timer);
          return percentage;
        }
        return Math.min(oldValue + 1, percentage);
      });
    }, 400);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="skills-item">
      <img src={imageUrl} alt={text} />
      <div className="skill-circle">
        <CircularProgressbar
          value={percentage}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: "#111418",
            trailColor: "rgba(255, 255, 255, 0.2)",
            strokeWidth: 2,
            textSize: "1.5rem",
          })}
          strokeWidth={2}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills skills-container" id="skills">
      <div className="skills-header" data-aos="fade-down">
        <h1 className="skills-header-below">Skills</h1>
        <p className="skills-header-top">My Expertise</p>
      </div>

      <p className="skills-header" data-aos="fade-down">
        I leverage advanced data science and statistical techniques to uncover
        insights and drive decision-making. <br /> My skills are honed through
        rigorous analysis and innovative approaches.
      </p>

      <div className="skills-items" data-aos="fade-down">
        <Skill
          percentage={90}
          text="Big Data Analysis"
          color="#3498db"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/figma.svg"
        />
        <Skill
          percentage={85}
          text="Data Visualization"
          color="#e74c3c"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/webflow.svg"
        />
        <Skill
          percentage={80}
          text="Machine Learning"
          color="#2ecc71"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg"
        />
        <Skill
          percentage={85}
          text="Python, R, SQL"
          color="#f39c12"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/tailwind.svg"
        />
        <Skill
          percentage={90}
          text="Statistical Modeling"
          color="#9b59b6"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/webflow.svg"
        />

        <Skill
          percentage={95}
          text="Data Management"
          color="#fd7e14"
          imageUrl="https://html.themestransmit.com/html/minfotailwind/assets/img/skill/jquery.svg"
        />
      </div>
    </section>
  );
};

export default Skills;
