import { useState, useEffect } from 'react';

const useScrolledToTop = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const scrollHandler = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return scrolledToTop;
};

export default useScrolledToTop;
