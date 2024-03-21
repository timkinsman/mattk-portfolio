import clsx from 'clsx';
import { useState } from 'react';

type ImageProps = {
  aspect?: keyof typeof aspects;
  alt?: string;
  fallbackBackgroundColor?: string;
  src: string;
};

const aspects = {
  auto: 'aspect-auto',
  square: 'aspect-square',
  video: 'aspect-video',
};

export const Image = ({ aspect = 'auto', alt, fallbackBackgroundColor, src }: ImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div
      className={clsx('relative rounded-2xl overflow-hidden', aspects[aspect])}
      style={{ backgroundColor: fallbackBackgroundColor }}
    >
      <img
        className={clsx('w-full h-full object-cover object-center transition-opacity opacity-100', {
          ['!opacity-0']: !hasLoaded,
        })}
        src={src}
        alt={alt}
        onLoad={() => {
          setHasLoaded(true);
        }}
        loading="lazy"
      />

      {/* note: skeleton */}
      <div
        className={clsx(
          'animate-pulse h-full w-full absolute bg-gray-300 dark:bg-gray-700 opacity-10 top-0 left-0',
          {
            ['hidden']: hasLoaded,
          }
        )}
      />
    </div>
  );
};
