import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a tiny bit for render to finish
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
