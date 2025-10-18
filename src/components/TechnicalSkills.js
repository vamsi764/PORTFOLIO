import React from "react";
import "../styles/TechnicalSkills.css";

const technicalSkillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "Python", "Java"],
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "MERN Stack"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB (CRUD Operations)"],
  },
  {
    category: "Soft Skills",
    skills: ["Effective Communication", "Team Collaboration", "Problem-Solving"],
  },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical & Soft Skills</h2>
      <div className="skills-container">
        {technicalSkillsData.map((item, index) => (
          <div key={index} className="skills-card">
            <h3>{item.category}</h3>
            <ul>
              {item.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
