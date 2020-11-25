import { useEffect, useState } from 'react';

// React hook that checks if the component is still mounted.
// We'll use it to trigger animations only when components're not mounted,
// to avoid unnecessary transitions on window resize / element hide.
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return isMounted;
};

export default useIsMounted;
