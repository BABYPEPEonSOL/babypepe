/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero.jpg')",
      },
      colors: {
        'theme': '#09121d',
        'lightText':'#798da3',
        'themeGreen':'#278701',
      },
    },
    fontFamily:{
      custom:['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
}

