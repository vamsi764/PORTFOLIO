import React from "react";
import "../styles/Certifications.css";

const certificationsData = [
  {
    title: "Java Certifications",
    issuer: "Udemy, Board Infinity, NPTEL",
    year: "2024",
    link: "https://drive.google.com/file/d/1W6VoNS7Qo84qZUIK4DSbZxMiXnsaolmg/view?usp=sharing"
  },
  {
    title: "Python Certification",
    issuer: "Google, Udemy",
    year: "2024",
    link: "https://drive.google.com/file/d/1vE43GYZzgTv82Zh-FXkcdvvQ0Av630oU/view?usp=sharing"
  },
  {
    title: "DSA Certification",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1rPYcaXTO6gvN-_YNA-bK2Xb6voVLj9Dk/view?usp=sharing"
  },
  {
    title: "HTML, CSS & JavaScript",
    issuer: "IBM (Frontend Development)",
    year: "2025",
    link: "https://drive.google.com/file/d/1LHZIybAQ3LMmzE00CDInNn_yTiWmZ26T/view?usp=sharing"
  },
  {
    title: "React Certification",
    issuer: "Meta",
    year: "2025",
    link: "https://drive.google.com/file/d/1AsXOjt1n4Xy9T995rXRLMkgKcKCW8Q1C/view?usp=sharing"
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    year: "2025",
    link: "https://drive.google.com/file/d/1kLzKnF0Gj9EHkt4YDQ-AMxYtUPvBFfKt/view?usp=sharing"
  }
];



const Certifications = () => {
  return (
    <div className="certifications-section">
      <h1 className="section-title">Certifications</h1>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h2>{cert.title}</h2>
            <p className="issuer">{cert.issuer}</p>
            <p className="year">{cert.year}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
