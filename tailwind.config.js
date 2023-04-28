/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: '#A68C75',
      secondary: '#B8A391',
      // card: '#D1D1D1',
      // 'text-base': '#EAF2EF',
      light: '#F6F4F1',
      hover: '#D6CAC0',
      grey: '#666360',
    },
    extend: {},
  },
  plugins: [],
};
