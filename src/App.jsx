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

// Move initialization logging to module level
console.log('[App.jsx] App component initializing')

export default function App() {
  // Remove render logging or use React.useEffect for runtime logs
  React.useEffect(() => {
    console.log('[App.jsx] App mounted')
    return () => console.log('[App.jsx] App unmounted')
  }, [])

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
