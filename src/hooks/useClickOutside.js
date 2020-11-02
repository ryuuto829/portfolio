import { useEffect } from 'react';

// https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref, callback) => {
  const handleClick = event => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.current || ref.current.contains(event.target)) return;

    callback(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  });
};

export default useClickOutside;
