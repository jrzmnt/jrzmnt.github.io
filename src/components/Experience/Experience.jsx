import "./Experience.scss";
import React from "react";

import { Col, Row } from 'react-bootstrap';

function template(title, year, extra, name, supervisor) {
  return (
    <div className="experience">
      <Row>
        <Col xl={2}>
          <p className="year">{year}</p>
        </Col>

        <Col>
          <div className="title">
            <p className="position">{title}</p>
          </div>
          {
            !!supervisor &&
            <div className="supervisor">{supervisor}</div>
          }
          {
            name &&
            <div className="name">{name}</div>
          }
          {
            extra &&
            <div className="extra">{extra}</div>
          }
        </Col>
      </Row>
    </div>
  );
};

export default template;
