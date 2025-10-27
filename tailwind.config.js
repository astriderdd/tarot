import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default font
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem', // 8px
      },
    },
  },
})
