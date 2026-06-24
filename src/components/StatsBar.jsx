import '../styles/StatsBar.css';

const stats = [
  { number: '300+', label: 'Candidates Trained', icon: '👥' },
  { number: '100+', label: 'Placed in USA', icon: '🏆' },
  { number: '20+', label: 'Real-Time Projects', icon: '💻' },
  { number: '10+', label: 'Expert Trainers', icon: '👨‍🏫' },
  { number: '95%', label: 'Satisfaction Rate', icon: '⭐' },
  { number: '100%', label: 'Placement Support', icon: '🎯' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon-wrap">{s.icon}</div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
