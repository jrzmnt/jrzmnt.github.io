import "./Experiences.scss";
import React from "react";

import { Row, Col, Container } from 'react-bootstrap';
import Experience from '../../components/Experience';

function template() {
  return (
    <div className="experiences">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="notepad">
            🖥️
          </span>
          <div className="text">
            <h1 className="title">
              Experience
            </h1>
            <h2 className="subtitle">
              Currently, I'm working as an AI Researcher at Dell Technologies.
            </h2>
          </div>
        </Col>
      </Row>

      <Row className="list">
        <Container>
          <div className="education">
            <div className="section-header">
              <p className="section-title">Education</p>
              <p className="divider" />
            </div>
            <Experience
              title='Ph.D. in Computer Science'
              year='2018-2023'
              name="Thesis title: 'Advances in Imitation Learning from Observation'"
              supervisor="Prof. Rodrigo C. Barros and Prof. Felipe Meneguzzi"
              extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
            />
            <Experience
              title='MSc. in Computer Science'
              year='2016 - 2018'
              name="Dissertation title: 'Evaluating the feasibility of deep learning for action recognition in small datasets'"
              supervisor="Prof. Rodrigo C. Barros"
              extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
            />
            <Experience
              title='A.A.T. Systems Analysis and Development'
              year='2013 - 2015'
              name="Dissertation title: Analysis of the Applicability of Artificial Intelligence Techniques in a Digital Game: An Approach with Intelligent Agents"
              supervisor="Prof. Rafael Pinto"
              extra='at Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul'
            />
          </div>

          <div className="teaching">
            <div className="section-header">
              <p className="section-title">Teaching</p>
              <p className="divider" />
            </div>
            <div className="lecturer">
              <p className="section-divider">Lecturer</p>
              <Experience
                title='Machine and Deep Learning I'
                year='2021'
                name='Professor (6 months contract)'
                extra="at Feevale University"
              />
              <Experience
                title='Data Science'
                year='2020'
                name='Instructor (1 year contract)'
                extra="at TargetTrust Courses"
              />
              <Experience
                title='Python for Data Science'
                year='2018'
                name='Professor (6 months contract)'
                extra="at Feevale University"
              />
            </div>

            <div className="teaching-assistant">
              <p className="section-divider">Teaching Assistant</p>
              <Experience
                title='Business Intelligence'
                year='2018'
                name="Teaching Assistant for Professor Rodrigo C. Barros"
                extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
              />
              <Experience
                title='Database Laboratory'
                year='2018'
                name="Teaching Assistant for Professor Duncan Ruiz"
                extra="at Pontifícia Universidade Católica do Rio Grande do Sul"
              />
            </div>
          </div>

          <div className="industry">
            <div className="section-header">
              <p className="section-title">Industry</p>
              <p className="divider" />
            </div>
            <Experience
              title='Dell Technologies'
              year='2023 - Present'
              extra='AI Researcher'
            />
            <Experience
              title='Sicredi Bank'
              year='2022 - 2023'
              extra='Data Scientist'
            />
            <Experience
              title='unico IdTech'
              year='2021 - 2022'
              extra='ML Engineer'
            />
            <Experience
              title='CWI Software'
              year='2015 - 2015'
              extra='Intern - Software Developer'
            />
            <Experience
              title='Dell Technologies'
              year='2013 - 2015'
              extra='Intern - Performance Tester'
            />
            <Experience
              title='Stefanini IT Solutions'
              year='2013 - 2013'
              extra='Intern - Service Reports'
            />
          </div>
        </Container>
      </Row>
    </div>
  );
};

export default template;
