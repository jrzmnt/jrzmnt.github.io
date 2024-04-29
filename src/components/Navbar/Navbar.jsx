import "./Navbar.scss";
import React from "react";

import { Navbar, Nav, Container, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../services/ThemeService';
import { NavigationContext } from '../../services/NavigationService';

function template(checked, setChecked) {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) =>
        <NavigationContext.Consumer>
          {({ menu, toggleMenu }) =>
            <Navbar className="navbar" bg={theme} expand="lg" variant={theme} sticky="top">
              <Container fluid>
                <Navbar.Brand className="brand" href="/">Juarez Monteiro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="justify-content nav">
                    <Link
                      className={"nav-link link " + (menu === "home" ? 'active' : '')}
                      to="/"
                      onClick={(e) => toggleMenu(e)}
                    >
                      Home
                    </Link>
                    <Link
                      className={"nav-link link " + (menu === "publications" ? 'active' : '')}
                      to="publications"
                      onClick={(e) => toggleMenu(e)}
                    >
                      Publications
                    </Link>
                    <Link
                      className={"nav-link link " + (menu === "experience" ? 'active' : '')}
                      to="experience"
                      onClick={(e) => toggleMenu(e)}
                    >
                      Experience
                    </Link>
                    <Link
                      className={"nav-link nav " + (menu === "awards" ? 'active' : '')}
                      to="awards"
                      onClick={(e) => toggleMenu(e)}
                    >
                      Awards, Grants and Projects
                    </Link>
                    <Link
                      className={"nav-link nav"}
                      target="_blank"
                      rel="noreferrer"
                      to="https://github.com/jrzmnt/jrzmnt.github.io/blob/master/src/assets/CV.pdf"
                    >
                      CV
                    </Link>
                    <ToggleButton
                      id="toggle-check"
                      type="checkbox"
                      variant={theme}
                      checked={checked}
                      onChange={() => setChecked(toggleTheme)}
                    >
                      {
                        theme === "dark" ?
                          <span role="img" aria-label="sun">🌞</span> :
                          <span role="img" aria-label="moon">🌚</span>
                      }
                    </ToggleButton>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          }
        </NavigationContext.Consumer>
      }
    </ThemeContext.Consumer>
  );
};

export default template;
