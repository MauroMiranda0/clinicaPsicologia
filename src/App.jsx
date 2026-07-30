import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';
import DashboardPage from './components/pages/DashboardPage';
import PaymentsPage from './components/pages/PaymentsPage';
import ReminderPage from './components/pages/ReminderPage';

const pages = {
  home: HomePage,
  booking: BookingPage,
  dashboard: DashboardPage,
  payments: PaymentsPage,
  reminder: ReminderPage,
};

const pageFromHash = () => {
  const candidate = window.location.hash.slice(1);
  return pages[candidate] ? candidate : 'home';
};

export default function App() {
  const [page, setPage] = useState(pageFromHash);
  const [transition, setTransition] = useState('');

  const navigate = (destination, transitionName = 'push') => {
    if (destination === page) return;
    setTransition(transitionName);
    window.setTimeout(() => {
      window.location.hash = destination;
      setPage(destination);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTransition('');
    }, 160);
  };

  useEffect(() => {
    const handleHashChange = () => setPage(pageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const CurrentPage = pages[page];
  return (
    <div className={`app ${transition}`}>
      <Header currentPage={page} navigate={navigate} />
      <main><CurrentPage navigate={navigate} /></main>
      <Footer />
    </div>
  );
}
