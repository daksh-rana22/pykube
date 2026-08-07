import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailsPage from './pages/ProgramDetailsPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CareersPage from './pages/CareersPage';
import InterviewPage from './pages/InterviewPage';
import AdminBroadcastPage from './pages/AdminBroadcastPage';
import ScrollToAnchor from './components/ScrollToAnchor';
import GlobalParticleBackground from './components/GlobalParticleBackground';

function App() {
  return (
    <Router>
      {/* Global Interactive Particle Network Canvas */}
      <GlobalParticleBackground />
      {/* Handles smooth scrolling to hash anchors across routes */}
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<ProgramsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/courses/:id" element={<ProgramDetailsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/admin" element={<AdminBroadcastPage />} />
        <Route path="/admin/broadcast" element={<AdminBroadcastPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
