import { Bell } from 'lucide-react';
import Button from '../ui/Button';

const navigation = [
  { label: 'Home', page: 'home' },
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'Payments', page: 'payments' },
];

export default function Header({ currentPage, navigate }) {
  const transitionFor = (destination) => {
    if (destination === 'home' || currentPage === 'reminder') return 'push-back';
    return 'push';
  };

  return (
    <header>
      <button className="brand" onClick={() => navigate('home', 'push-back')}>
        <span className="brandmark">✦</span>Psyche<span>Care</span>
      </button>
      <nav aria-label="Navegación principal">
        {navigation.map((item) => (
          <a
            key={item.page}
            className={currentPage === item.page ? 'active' : ''}
            onClick={() => navigate(item.page, transitionFor(item.page))}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="head-actions">
        <Bell size={20} />
        <span className="avatar">AV</span>
        <Button className="small" onClick={() => navigate('booking')}>Book Now</Button>
      </div>
    </header>
  );
}
