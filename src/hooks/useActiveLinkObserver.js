import { useEffect, useState, useRef } from 'react';

// Use this hook to know the id of current visible section
// to add active CSS class to navigation links
// Read more: https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
const useActiveLinkObserver = () => {
  const [currentActiveLink, setCurrentActiveLink] = useState('home');

  // Fix SSR problem with 'document' being undefined.
  // Read more: https://www.gatsbyjs.com/docs/using-client-side-only-packages/
  if (typeof window === `undefined`) return currentActiveLink;

  const config = {
    root: document,
    rootMargin: '-45% 0px -55%'
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

    // We attach observer to all sections that have id
    const ref = document.querySelectorAll('section[id]');

    ref.forEach(section => {
      currentObserver.observe(section);
    });

    return () => currentObserver.disconnect();
  }, []);

  return currentActiveLink;
};

export default useActiveLinkObserver;
