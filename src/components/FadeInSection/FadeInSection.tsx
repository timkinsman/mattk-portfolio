import React from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  isVisibleByDefault?: boolean;
  infinite?: boolean;
};

/**
 *
 * @see https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
 */
export function FadeInSection({
  children,
  isVisibleByDefault = false,
  infinite = false,
}: FadeInSectionProps) {
  const [isVisible, setVisible] = React.useState(isVisibleByDefault);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (!infinite && !isIntersecting) {
          return;
        }
        setVisible(entry.isIntersecting);
      });
    });
    const div = domRef.current;
    if (div) observer.observe(div);
    return () => {
      if (div) observer.unobserve(div);
    };
  }, [infinite]);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
}
