import { useState, useEffect } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

const useScrollDirection = () => {
  const [srollDirection, setSrollDirection] = useState(SCROLL_DOWN);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      setSrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const onScrollHandler = () => {
      window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return srollDirection;
};

export default useScrollDirection;
