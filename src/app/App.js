import React from 'react';
import './App.css';

import NavBar from '../components/nav/nav';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <About />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Contact />
        <hr></hr>
        <Footer />
      </div>
    )
  }
}


export default App;
