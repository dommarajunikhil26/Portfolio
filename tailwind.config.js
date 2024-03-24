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
      colors:{
        color1: '#14052D',
        color2: '#052F5B',
        color3: '#005884',
        color4: '#0083A4',
        color5: '#00B0B8',
        color6: '#55DBC1',
      },
      backgroundImage: theme => ({
        'custom-gradient': "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
        'custom-gradient2': `linear-gradient(to right, ${theme('colors.color1')}, ${theme('colors.color2')}, ${theme('colors.color3')}, ${theme('colors.color4')}, ${theme('colors.color5')}, ${theme('colors.color6')})`,
      })
    },
  },
  plugins: [],
}
