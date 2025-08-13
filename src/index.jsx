import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx' // Add .jsx extension

console.log('[index.jsx] Starting application')

const container = document.getElementById('root')
console.log('[index.jsx] container:', container)

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

console.log('[index.jsx] root.render() called')
