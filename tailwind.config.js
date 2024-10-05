/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      'primary' : '#6366f1',
      'primary-200': '#4f52c1',
      'white' : '#fff',
      'black' : '#000',
      'black-400' : '#94a3b8',
      'black-500' : '#64748b',
      'red': "red",
      'light' : "#f8f9fa"
    },
    extend: {},
  },
  plugins: [],
}