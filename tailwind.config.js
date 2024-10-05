/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      'primary' : '#6366f1',
      'white' : '#fff',
      'black-400' : '#94a3b8',
      'black-500' : '#64748b',
    },
    extend: {},
  },
  plugins: [],
}