import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MyNav from './MyNav.js';
import Home from './Home.js';
import Articles from './Articles.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <MyNav />

        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/contact" component={Contact} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
