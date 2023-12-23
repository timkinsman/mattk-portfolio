import { useLocalStorage } from 'usehooks-ts';
import { Storage, storagePrefix } from '@/utils/storage';
import clsx from 'clsx';
import { useEffect } from 'react';
import { updateTheme } from '@/features/misc/utils';

export const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    `${storagePrefix}${Storage.theme}`,
    'dark'
  );

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  const isDarkTheme = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      type="button"
      className="opacity-60 hover:opacity-100 transition-opacity duration-300 text-current focus:outline-none rounded-lg text-sm p-2.5"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
    >
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        id="theme-toggle-light-icon"
        className={clsx('w-5 h-5', { hidden: !isDarkTheme })}
      >
        <path
          d="M6.40039 24H9.60039"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M11.5557 11.5557L13.8181 13.8181"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M24 6.40039V9.60039"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M36.445 11.5557L34.1826 13.8181"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M41.6004 24H38.4004"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M36.445 36.445L34.1826 34.1826"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M24 41.6004V38.4004"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M11.5557 36.445L13.8181 34.1826"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M24.0004 33.6004C29.3023 33.6004 33.6004 29.3023 33.6004 24.0004C33.6004 18.6985 29.3023 14.4004 24.0004 14.4004C18.6985 14.4004 14.4004 18.6985 14.4004 24.0004C14.4004 29.3023 18.6985 33.6004 24.0004 33.6004Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>

      <svg
        id="theme-toggle-dark-icon"
        viewBox="0 0 48 48"
        className={clsx('w-5 h-5', { hidden: isDarkTheme })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M35.2 28.7996C26.4 28.7996 19.2 21.5996 19.2 12.7996C19.2 11.3596 19.44 9.91957 19.76 8.55957C12.96 10.3996 8 16.6396 8 23.9996C8 32.7996 15.2 39.9996 24 39.9996C31.36 39.9996 37.6 35.0396 39.44 28.2396C38.08 28.5596 36.64 28.7996 35.2 28.7996Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
  );
};
