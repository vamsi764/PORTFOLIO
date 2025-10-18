import React from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    name: "Events Dashboard",
    description: "Developed a college event management website where admins can create and manage events, and students can register with dedicated profiles. Increased student participation by 40% and streamlined event management through role-based access control and real-time analytics.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#", // add your GitHub link
    demo: "#",   // add demo link if available
  },
  {
    name: "MERN Chat Application",
    description: "Developed a secure real-time chat application with private messaging, persistent chat history, and role-based authentication. Enhanced multi-user communication with scalable concurrent messaging, increasing engagement by 50%.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT Authentication"],
    github: "#",
    demo: "#",
  },
  {
    name: "Buy & Sell Platform",
    description: "Developed a role-based platform enabling vendors to list products and users to securely purchase items online. Improved transaction efficiency and user experience, reducing checkout errors by 30% and improving responsiveness.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#",
    demo: "#",
  },
];


const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-horizontal" key={index}>
            <h2>{project.name}</h2>
            <p className="description">{project.description}</p>
            <p className="technologies">
              <strong>Technologies Used:</strong> {project.technologies.join(", ")}
            </p>
            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
