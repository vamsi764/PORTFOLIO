import React from "react";
import "../styles/Education.css";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Vasireddy Venkatadri Institute of Technology, Nambur",
    year: "2022 - 2026",
    gpa: "CGPA: 8.7 / 10",
  },
  {
    degree: "Intermediate Board Of Education(MPC)",
    college: "Vagdevi Junior College, Narasaraopet",
    year: "2020 - 2022",
    gpa: "Percentage: 96%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    college: "Vignan High School, Dodleru",
    year: "2020",
    gpa: "Percentage: 96.8%",
  },
];


const Education = () => {
  return (
    <div className="education-section">
      <h1 className="section-title">Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h2>{edu.degree}</h2>
            <p className="college">{edu.college}</p>
            <p className="year">{edu.year}</p>
            <p className="gpa">{edu.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
