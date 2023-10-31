import React from 'react';
import './App.css';
import './pages/styles-pages.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HeaderApp from './components/header';
import FooterApp from './components/footer';
import Home from './pages/home';
import Support from './pages/support';
import AboutUs from './pages/about_us';
import Entry from './pages/entry';
import BasicInformation from './pages/basic_information';
import LegalInformation from './pages/legal_information';
import EducationalInformation from './pages/education_information';
import HealthInformation from './pages/health_information';
import TransportInformation from './pages/transport_information';
import Register from './pages/register';

function App() {
  const isSpaceVisible = window.location.pathname !== '/entry' && window.location.pathname !== '/register';

  return (
    <Router>
      <div>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/register" element={<Register />} />
          <Route path="/id/basic-information" element={<BasicInformation />} />
          <Route path="/id/legal-information" element={<LegalInformation />} />
          <Route path="/id/educational-information" element={<EducationalInformation />} />
          <Route path="/id/health-information" element={<HealthInformation />} />
          <Route path="/id/transport-information" element={<TransportInformation />} />
        </Routes>
        {isSpaceVisible && <div className="space-between"></div>}
        <FooterApp />
      </div>
    </Router>
  );
}

export default App;
