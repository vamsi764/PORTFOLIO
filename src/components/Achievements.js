import React from "react";
import "../styles/Achievements.css";

const achievementsData = [
  {
    title: "NPTEL Java Certification",
    description: "Ranked among top 10% in NPTEL Java Certification.",
  },
  {
    title: "160-Day Coding Challenge",
    description: "Completed the 160-Day Coding Challenge on GeeksForGeeks.",
  },
  {
    title: "GeeksForGeeks CSE Portal",
    description: "Achieved 18th rank in my institution and solved 500+ problems on LeetCode.",
  },
  {
    title: "Adobe India Hackathon",
    description: "Qualified Round 1 (Online MCQ and Coding) as part of a team.",
  },
  {
    title: "Certifications",
    description: "Certified in Python (Google), React (Meta), Frontend Development (IBM), Java Full Stack Development (AICTE).",
  },
];


const Achievements = () => {
  return (
    <div className="achievements-section">
      <h1 className="section-title">Achievements</h1>
      <div className="achievements-container">
        {achievementsData.map((ach, index) => (
          <div className="achievement-card" key={index}>
            <h2>{ach.title}</h2>
            <p className="description">{ach.description}</p>
            <p className="year">{ach.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
