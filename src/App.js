import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
       <section id="home"><Home /></section>
       <section id="education"><Education /></section>
       <section id="technical-skills"><TechnicalSkills /></section>
       <section id="projects"><Projects /></section>
       <section id="achievements"><Achievements /></section>
       <section id="certifications"><Certifications /></section>
       <section id="contact"><Contact /></section> 
    </div>
  );
}

export default App;
