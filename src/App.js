import React, { useEffect, useState } from 'react';
import './App.css';
import './pages/styles-pages.css';
import ProtectedRoute from './components/utils/ProtectedRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import NotFound from './pages/not_found';
import { useAuth } from './AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div style={{ overflow: 'hidden' }}>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute canActivate={isAuthenticated} />}>
            <Route path="/basic-information" element={<BasicInformation />} />
            <Route path="/legal-information" element={<LegalInformation />} />
            <Route path="/educational-information" element={<EducationalInformation />} />
            <Route path="/health-information" element={<HealthInformation />} />
            <Route path="/transport-information" element={<TransportInformation />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <FooterApp />
      </div>
    </Router>
  );
}

export default App;
