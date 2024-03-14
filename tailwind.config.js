// tailwind.config.js
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
        'glow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #eb09ff, 0 0 40px #eb09ff'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif']
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
