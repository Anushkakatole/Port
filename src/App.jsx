import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Agency from './Pages/Agency';  
import Premier from './Pages/Premier';
import Weave from './Pages/Weave';
import Trend from './Pages/Trend';
import Rush from './Pages/Rush'
import FrontPage from './Pages/FrontPage'

function App() {
  return (
    <div>

      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="agency" element={<Agency />} />
            <Route path="Premier" element={<Premier />} />
            <Route path="Weave" element={<Weave />} />
            <Route path="Trend" element={<Trend />} />
            <Route path="Rush" element={<Rush />} />
            <Route path="FrontPage" element={<FrontPage />} />

         </Routes>
      </Router>

    </div>
  )
}

export default App
