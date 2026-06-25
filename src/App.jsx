import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailsPage from './pages/ProgramDetailsPage';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<ProgramsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/courses/:id" element={<ProgramDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
