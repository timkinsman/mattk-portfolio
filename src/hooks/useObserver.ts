import { useEffect, useState } from 'react';

export const useObserver = (ref: React.RefObject<HTMLDivElement>) => {
  const [isObserved, setIsObserved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setTimeout(() => setObserved(true), 250);

            setIsObserved(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: `-100px` }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line
        return observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isObserved;
};
