/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          50: '#FFFBF5',
          100: '#FFF5E6',
          200: '#FFE4C4',
          300: '#FFD1A3',
          400: '#FFB366',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E3EBE3',
          200: '#C5D6C5',
          300: '#9BB89B',
          400: '#729A72',
          500: '#527A52',
          600: '#3D5F3D',
          700: '#2F4A2F',
          800: '#223622',
          900: '#182618',
        },
      },
    },
  },
  plugins: [],
}
