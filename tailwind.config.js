module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite'
      },
      keyframes: {
        goyang: {
          '0% 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    }, //you can change(override) any class in tailwind, for example font-family
  },
  plugins: [],
}
