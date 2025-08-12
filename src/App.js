import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import MyNav from './MyNav';
import Home from './Home';
import Articles from './Articles';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <BrowserRouter>
      <div className="App main-container">
        <MyNav />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
