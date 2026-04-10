import { useState, useCallback, useEffect } from 'react';

function getPath() {
  return location.pathname || '/';
}

export default function useHashRoute() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = useCallback((to) => {
    history.pushState(null, '', to);
    setPath(to);
  }, []);

  return { path, navigate };
}
