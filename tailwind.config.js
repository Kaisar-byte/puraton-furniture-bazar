/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    require('@sira-ui/tailwind'),
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}



