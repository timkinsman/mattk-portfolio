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
    },
  },
  plugins: [],
};
