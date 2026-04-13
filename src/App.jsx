import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyNav from './MyNav.jsx'
import Home from './Home.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'  // Add missing import
import Articles from './Articles.jsx'  // Add missing import
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './App.css'

export default function App() {
  return (
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
  )
}
