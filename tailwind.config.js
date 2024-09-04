/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        customBlue: '#1e40af',  // Add your custom color here
        customGreen: '#10b981',
        yellow:'#faca0a',
        cream:"#9b764c",
        lightred:"#c66d7d"
      },
    },
  },
  plugins: [],
};
