import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
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
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/contact" component={Contact} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
