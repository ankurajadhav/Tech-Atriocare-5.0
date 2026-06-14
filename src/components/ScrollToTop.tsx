import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      
      const scrollToSection = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      // Try scrolling immediately
      scrollToSection();

      // Schedule additional attempts in case the component is still rendering or mounting
      const timerShort = setTimeout(scrollToSection, 100);
      const timerLong = setTimeout(scrollToSection, 350);

      return () => {
        clearTimeout(timerShort);
        clearTimeout(timerLong);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
