import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width } = useWindowSize();

  return (
    <div className="App">
      {width > 768 && (
        <nav className="header-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
      <div className="main-content">
        <div className="left-column">
          <Header />
          <Contact />
        </div>
        <div className="right-column">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Publications />
          <Awards />
        </div>
      </div>
    </div>
  );
}

export default App;

