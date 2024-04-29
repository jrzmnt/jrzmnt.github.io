import "./Awards.scss";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Award from "../../components/Award";

function template() {
    return (
        <div className="experiences">
            <Row className="greetings">
                <Col className="col">
                    <span className="emoji" role="img" aria-label="notepad">
                        🏆
                    </span>
                    <div className="text">
                        <h1 className="title">
                            Awards, Grants and Projects
                        </h1>
                        <h2 className="subtitle">
                            A chronological list of all awards, grants and projects.
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row className="list">
                <Container>
                    <div className="projects">
                        <div className="section-header">
                            <p className="section-title">Projects</p>
                            <p className="divider" />
                        </div>
                        <Award
                            title="Motorola/Lenovo"
                            year="2018-2019"
                            extra="This project developed several Deep Learning techniques aimed at handling data from and about mobile phones. Our contribution included algorithms for analyzing mobile phone reviews and identifying the sentiment about specific aspects of a mobile phone."
                        />
                        <Award
                            title="Hewlett-Packard"
                            year="2016-2018"
                            extra="Learning and Inference for Ambient Intelligence was a project about the identification of action and goals in video sequences. I started working with deep learning algorithms and computer vision in that project."
                        />
                    </div>
                    <div className="academic">
                        <div className="section-header">
                            <p className="section-title">Awards and grants</p>
                            <p className="divider" />
                        </div>
                        <Award
                            title="2nd. Best Master’s Dissertation in Artificial Intelligence of Brazil, Best MSc Dissertation"
                            year="2018"
                            extra="PhD Thesis Contest in Artificial Intelligence, CTDIAC-BRACIS"
                        />
                        <Award
                            title="Best Student Paper"
                            year="2017"
                            extra="IEEE Joint Conference on Neural Networks, IJCNN"
                        />
                        <Award
                            title="Best Student Poster"
                            year="2015"
                            extra="Instituto Federal do Rio Grande do Sul, Canoas, Scientific hall"
                        />
                    </div>
                </Container>
            </Row>
        </div>
    );
};

export default template;
