import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import ServicesPage from './ServicesPage'
import ResidentialPage from './ResidentialPage'
import CommercialPage from './CommercialPage'
import ArchitecturePage from './ArchitecturePage'
import BuildingPlanningPage from './BuildingPlanningPage'
import ElevationPage from './ElevationPage'
import LandscapingPage from './LandscapingPage'
import ContactPage from './ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/building-planning" element={<BuildingPlanningPage />} />
        <Route path="/elevation" element={<ElevationPage />} />
        <Route path="/landscaping" element={<LandscapingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App