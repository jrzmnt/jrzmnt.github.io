import "./Publications.scss";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';

import Publication from '../../components/Publication';

function template(publications, sortBy, filterPublications, filter) {
  return (
    <div className="publications">
      <Row className="greetings">
        <Col className="col">
          <span className="emoji" role="img" aria-label="notepad">
            📋
          </span>
          <div className="text">
            <h1 className="title">
              Publications
            </h1>
            <h2 className="subtitle">
              Currently my research topics are computer vision and imitation learning.
            </h2>
          </div>
        </Col>
        <p className='divider' />
      </Row>
      <Row>
        <div className='form-floating'>
            <input
              id='searhInput'
              type='text'
              className='form-control' 
              placeholder='Seach'
              aria-label='Search box'
              ref={filter}
              onKeyUp={() => filterPublications()}
            />
           <label id='searchPlaceholder' for='searchInput'>
             <FontAwesomeIcon id='searchIcon' icon={faSearch} /> Search
           </label>
        </div>
      </Row>
      <Row className="list">
        <Container>
          {publications.map((value, index) => (
            <Row className="item" key={value.title + index} >
              <Publication value={value} />
            </Row>
          ))}
        </Container>
      </Row>
    </div>
  );
};

export default template
