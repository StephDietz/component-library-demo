const shared = require('@mara-scope/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...shared,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/react-lib/**/*.{js,ts,jsx,tsx}', // include the shared components
  ],
};
