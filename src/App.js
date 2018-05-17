import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './MyNav.js';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav />
        <Home />
      </div>
    );
  }
}

export default App;
