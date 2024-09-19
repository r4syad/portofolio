/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#2dd4bf',
        dark: '#0f172a',
        second:'#64748b',
        cyan:'#083344',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

