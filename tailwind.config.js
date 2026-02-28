/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Studio palette (brand guidelines v2) */
        ink: '#0E0E0E',
        studio: '#1C1C1C',
        graphite: '#4A4A4A',
        mist: '#E8E8E6',
        paper: '#F7F6F3',
        white: '#FFFFFF',
        /* Product accents (product contexts only) */
        amber: {
          DEFAULT: '#E8A020',
          dim: '#C4871A',
          pale: '#FDF3E0',
        },
        green: {
          DEFAULT: '#3AAA6A',
          dim: '#2D8A55',
          pale: '#E6F5ED',
        },
        /* Legacy aliases for gradual migration */
        black: '#0E0E0E',
        gray: {
          light: '#F7F6F3',
          border: '#E8E8E6',
          muted: '#4A4A4A',
          text: '#4A4A4A',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

