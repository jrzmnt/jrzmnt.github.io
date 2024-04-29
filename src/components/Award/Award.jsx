import "./Award.scss";
import React from "react";

import ReactHtmlParser from 'html-react-parser';
import { Col, Row } from 'react-bootstrap';

function template(title, year, extra, misc) {
  return (
    <div className="award">
      <Row>
        <Col xl={1}>
          {
            year &&
            <p className="year">{year}</p>
          }
        </Col>

        <Col>
          <div className="title">
            <p className="position">{title}</p>
          </div>
          <div className="extra">{extra}</div>
          {
            misc &&
            <div className="misc">{ReactHtmlParser(misc)}</div>
          }
        </Col>
      </Row>
    </div>
  );
};

export default template;
