/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Add any other files or patterns that contain Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('autoprefixer'),
  ],
};