import PageHero from '../components/PageHero';
import Programs from '../components/Programs';
import CTA from '../components/CTA';
import '../styles/ProgramsPage.css';
import { FiTarget, FiUsers, FiFolder, FiMic, FiSend } from 'react-icons/fi';

const highlights = [
  { icon: <FiTarget />, label: '6 Job-Ready Courses' },
  { icon: <FiUsers />, label: '10+ Expert Trainers' },
  { icon: '/images/illustrations/laptop_icon.png', label: 'Live Online Classes' },
  { icon: <FiFolder />, label: 'Real-Time Projects' },
  { icon: <FiMic />, label: 'Mock Interviews' },
  { icon: <FiSend />, label: '100% Placement Support' },
];

export default function ProgramsPage() {
  const marqueeHighlights = [...highlights, ...highlights, ...highlights];
  return (
    <main>
      <PageHero
        tag="Our Programs"
        title="Job-Ready IT Training Programs"
        subtitle="Six industry-focused bootcamps taught by active US IT professionals. Pick your path and we'll get you placed."
        breadcrumb="Programs"
      />
      {/* Highlights bar */}
      <section className="prog-highlights-bar">
        <div className="prog-marquee-container">
          <div className="prog-marquee-track">
            {marqueeHighlights.map((h, i) => (
              <div className="prog-highlight" key={`h-${i}`}>
                <span className="prog-hl-icon">
                  {typeof h.icon === 'string' && h.icon.startsWith('/') ? (
                    <img src={h.icon} alt={h.label} className="prog-hl-icon-img" />
                  ) : (
                    h.icon
                  )}
                </span>
                <span className="prog-hl-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Programs />
      <CTA />
    </main>
  );
}
