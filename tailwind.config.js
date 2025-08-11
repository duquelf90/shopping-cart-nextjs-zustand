/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      width: {
        frame: "77.5rem",
      },
      maxWidth: {
        frame: "77.5rem",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
