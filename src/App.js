import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import MyNav from './MyNav';
import Home from './Home';
import Articles from './Articles';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

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
