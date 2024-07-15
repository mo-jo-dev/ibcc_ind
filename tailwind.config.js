/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-map': "url('https://www.ibccind.com/wp-content/uploads/2020/04/bg-map.png')"
      }
    },
  },
  plugins: [],
}

