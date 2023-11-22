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
      colors: {
        'port-phillip': '#13676f',
        'bank-vic': '#279cd0',
        lumea: '#222f32',
        bupa: '#046ebc',
      },
      animation: {
        'ping-slow': 'ping 3s linear infinite',
        fade: 'fade 6s ease-in-out infinite',
        'fade-reverse': 'fade-reverse 6s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%, 45%': { opacity: 1, transform: 'none' },
          '55%, 100%': { opacity: 0, transform: 'translateY(-2.1rem)' },
        },
        'fade-reverse': {
          '0%, 45%': { opacity: 0, transform: 'translateY(-2.1rem)' },
          '55%, 100%': { opacity: 1, transform: 'none' },
        },
      },
    },
  },
  plugins: [],
};
