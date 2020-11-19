import { useEffect, useState, useRef } from 'react';

// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/

const useActiveLinkObserver = () => {
  const [currentActiveLink, setCurrentActiveLink] = useState('home');

  const config = {
    rootMargin: '-50px 0px -55%'
  };

  const observer = useRef(
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');

        if (entry.isIntersecting) setCurrentActiveLink(id);
      });
    }, config)
  );

  useEffect(() => {
    const { current: currentObserver } = observer;

    currentObserver.disconnect();

    const ref = document.querySelectorAll('section[id]');

    ref.forEach(section => {
      currentObserver.observe(section);
    });

    return () => currentObserver.disconnect();
  }, []);

  return currentActiveLink;
};

export default useActiveLinkObserver;
