/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 0px 15px 0px #AEAEAE80',

      },
    },
  },
  plugins: [],
};