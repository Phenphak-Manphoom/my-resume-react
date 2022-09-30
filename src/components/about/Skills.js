import React from "react";
import "./skill.css";

const frontendSkills = [
  {
    title: "Javascript",
    width: "60%",
    percentage: "60%",
  },
  {
    title: "React",
    width: "40%",
    percentage: "40%",
  },
  {
    title: "Css",
    width: "70%",
    percentage: "70%",
  },
];

const backendSkills = [
  {
    title: "Java",
    width: "50%",
    percentage: "50%",
  },
  {
    title: "Mysql",
    width: "60%",
    percentage: "60%",
  },
];
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend_skills w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="Backend_skills w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill_data mb-3">
      <div className="skills_title  d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill_bar">
        <span
          className="skills_bar_percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};
export default Skills;
