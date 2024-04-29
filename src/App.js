import React from 'react';
import './App.scss';

import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Redirect from './components/Redirect/Redirect';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Experiences from './pages/Experiences';
import Awards from './pages/Awards/Awards';
import { ThemeContext } from './services/ThemeService';
import { NavigationContext } from './services/NavigationService';


class App extends React.Component {
  constructor(props) {
    super(props);

    let theme = localStorage.getItem('theme')
    theme = theme === null ? 'light' : theme;

    this.toggleTheme = () => {
      const newTheme = this.state.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
      this.setState(() => ({
        theme: newTheme
      }));
    }

    this.toggleMenu = (e) => {
      const words = e.target.href.split("/");
      let menu = words[words.length - 1];
      if(menu === "") menu = "home";
      this.setState(({
        menu: menu.toLowerCase()
      }));
    }

    this.state = {
      theme,
      toggleTheme: this.toggleTheme,

      menu: "home",
      toggleMenu: this.toggleMenu,
    }
  }

  componentDidMount = () => {
    const menu = window.location.href.split('/').at(-1);
    if (menu.length === 0) {
      this.setState({menu: 'home'});
    } else {
      this.setState({menu: menu});
    }
  }

  render = () => {
    const theme = this.state.theme;
    const toggleTheme = this.toggleTheme;

    const menu = this.state.menu;
    const toggleMenu = this.toggleMenu;

    return (
      <div className={"App " + (this.state.theme === 'dark' ? 'dark' : 'light')} >
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <NavigationContext.Provider value={{ menu, toggleMenu }}>
            <Navbar />
          </NavigationContext.Provider>
          <Container className="page">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='publications' element={<Publications />} />
              <Route path='experience' element={<Experiences />} />
              <Route path='awards' element={<Awards />} />
              <Route 
                path='il-datasets-data'
                element={
                  <Redirect
                    loc='https://huggingface.co/collections/NathanGavenski/imitation-learning-datasets-6542982072defaf65937432d'
                  />
                } 
              />
              <Route 
                path='il-datasets-video'
                element={
                  <Redirect
                    loc='https://youtu.be/-6tT29QOJ-k'
                  />
                } 
              />
            </Routes>
          </Container>
        </ThemeContext.Provider>
      </div >
    );
  };
}

export default App;