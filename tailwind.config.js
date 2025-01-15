/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      maxXs: {max: '479px'},
      xs: '480px',
      maxSm: {max: '639px'},
      sm: '640px',
      maxMd: { max: '767px' },
      md: '768px',
      maxLg: { max: '1023px' },
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}