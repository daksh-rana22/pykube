import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import WhatWeDo from '../components/WhatWeDo';
import Programs from '../components/Programs';
import About from '../components/About';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Companies from '../components/Companies';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <WhatWeDo />
      <Programs />
      <About />
      <Process />
      <Testimonials />
      <Companies />
      <Blog />
      <FAQ />
      <CTA />
    </main>
  );
}
