import PageHero from '../components/PageHero';
import Programs from '../components/Programs';
import CTA from '../components/CTA';
import '../styles/ProgramsPage.css';

const highlights = [
  { icon: '🎯', label: '6 Job-Ready Courses' },
  { icon: '👨‍🏫', label: '10+ Expert Trainers' },
  { icon: '💻', label: 'Live Online Classes' },
  { icon: '📁', label: 'Real-Time Projects' },
  { icon: '🎤', label: 'Mock Interviews' },
  { icon: '🚀', label: '100% Placement Support' },
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
                <span className="prog-hl-icon">{h.icon}</span>
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
