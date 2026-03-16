/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.tmpl",
    "./module/*.tmpl",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
