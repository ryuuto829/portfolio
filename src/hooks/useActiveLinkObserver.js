import { useEffect, useState, useRef } from 'react';

// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/

const useActiveLinkObserver = () => {
  const [currentActiveLink, setCurrentActiveLink] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.intersectionRatio > 0.5) setCurrentActiveLink(id);
        });
      },
      { threshold: 0.5 }
    )
  );

  useEffect(() => {
    const { current: currentObserver } = observer;

    currentObserver.disconnect();

    document.querySelectorAll('section[id]').forEach(section => {
      currentObserver.observe(section);
    });

    return () => currentObserver.disconnect();
  }, []);

  return currentActiveLink;
};

export default useActiveLinkObserver;
