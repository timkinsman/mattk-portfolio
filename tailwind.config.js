/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: 'minmax(0, 1fr) minmax(0, 1fr) min-content',
      },
      animation: {
        'ping-slow': 'ping 3s linear infinite',
        'fade-in-out': 'fade-in-out 12s ease-in-out infinite',
        'fade-in': 'fade-in 2s linear',
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: 0, transform: 'translateY(-2.1rem)' },
          '5%, 45%': { opacity: 1, transform: 'none' },
          '50%, 100%': { opacity: 0, transform: 'translateY(-2.1rem)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '20%, 100%': { opacity: 1 },
        },
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
    },
    transitionDuration: {
      DEFAULT: '1000ms',
    },
  },
  plugins: [],
};
