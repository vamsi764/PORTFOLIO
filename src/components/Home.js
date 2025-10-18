import React from "react";
import "../styles/Home.css";
import profile from "../assets/profile1.jpg"; // Add your profile image here
import resume from "../assets/resume.pdf"; 
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left - Profile Image */}
        <div className="home-left">
          <img src={profile} alt="Gamidi Vamsikrishna" className="profile-img" />
        </div>

        {/* Right - Summary */}
        <div className="home-right">
          <h1>GAMIDI VAMSIKRISHNA</h1>
          <p className="designation">
            Bachelor of Technology (2022–2026) | Computer Science & Engineering
          </p>
          <p className="college">Vasireddy Venkatadri Institute of Technology, Nambur</p>

          <div className="summary-text">
            <p>
              Motivated Computer Science student with strong expertise in Data Structures, Algorithms, DBMS,
              and Object-Oriented Programming. Skilled in building responsive, scalable, and efficient web
              applications using HTML, CSS, JavaScript, React, Python, and Java. Passionate about
              problem-solving and delivering high-quality solutions through teamwork and continuous learning.
            </p>
          </div>

          <div className="home-buttons">
            <a 
              href="https://www.linkedin.com/in/gamidivamsikrishna"
              
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vamsi764"
              
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a href={resume} download className="btn">
              Download Resume
            </a>
          </div>

          <div className="contact-info">
            <p>Email: vamsikrishnagamidi@gmail.com</p>
            <p>Phone: +91-9381498784</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
