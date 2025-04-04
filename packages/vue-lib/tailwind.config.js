const shared = require('@mara-scope/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...shared,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/vue-lib/**/*.{js,ts,jsx,tsx}', // include the shared components
  ],
};
