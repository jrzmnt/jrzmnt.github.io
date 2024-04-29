import "./Home.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import avatar from '../../assets/avatar.jpg';

function template() {
  return (
    <div className="home">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="waving-hand">👋</span>
          <div className="text">
            <h1 className="title"> Hi there, </h1>
            <h2 className="subtitle"> It's nice to meet you! </h2>
          </div>
        </Col>
      </Row>

      <Row className="content">
        <Col className="text" lg={8}>
          <p>
            I'm a PhD in Computer Science and currently work as an AI Researcher at Dell Technologies. <br />
            My research interests are <span className="research-field">Imitation Learning</span>, <span className="research-field">Computer Vision</span>, and <span className="research-field">Machine Learning</span>. <br />

          </p>

          <p>
            Before working with research, I was a machine learning engineer at unico IdTech, specializing in computer vision.<br />
          </p>
          <p>
            I am a fan of video games, drawing and traveling.<br />
            Feel free to get in touch using any of the links below.
          </p>

          <div className="socials">
            <a href="mailto:jrzmonteiro@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="icons" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/juarez-monteiro/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
            </a>
            <a href="https://github.com/jrzmnt" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icons" size="2x" />
            </a>
            <a href="https://scholar.google.com/citations?user=LVhKmIIAAAAJ" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGraduationCap} className="icons" size="2x" />
            </a>
          </div>
        </Col>
        <Col className="image" lg={4}>
          <img className="avatar rounded-circle" src={avatar} alt="Avatar" />
        </Col>
      </Row>
    </div>
  );
};

export default template;
