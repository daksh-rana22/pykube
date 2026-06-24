import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhatWeDo from './components/WhatWeDo';
import Programs from './components/Programs';
import About from './components/About';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Companies from './components/Companies';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhatWeDo />
        <Programs />
        <About />
        <Process />
        <FAQ />
        <Testimonials />
        <Companies />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
