import '../styles/StatsBar.css';
import { FiUsers, FiAward, FiUserCheck, FiTarget } from 'react-icons/fi';

const stats = [
  { number: '300+', label: 'Candidates Trained', icon: <FiUsers /> },
  { number: '100+', label: 'Placed in USA', icon: <FiAward /> },
  { number: '20+', label: 'Real-Time Projects', icon: '/images/illustrations/laptop_icon.png' },
  { number: '10+', label: 'Expert Trainers', icon: <FiUserCheck /> },
  { number: '95%', label: 'Satisfaction Rate', icon: '/images/illustrations/star_icon.png' },
  { number: '100%', label: 'Placement Support', icon: <FiTarget /> },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon-wrap">
                {typeof s.icon === 'string' && s.icon.startsWith('/') ? (
                  <img src={s.icon} alt={s.label} className="stats-icon-img" />
                ) : (
                  s.icon
                )}
              </div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
