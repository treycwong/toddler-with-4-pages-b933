/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5235',
          container: '#456a4b',
          fixed: '#456a4b',
          'fixed-dim': '#2d5235',
        },
        surface: {
          DEFAULT: '#fefae6',
          'container-low': '#f8f4e0',
          'container-lowest': '#f0ecd8',
          'container-highest': '#e6e3cf',
        },
        secondary: '#605f50',
        'on-surface': '#1d1c10',
        'on-primary': '#ffffff',
        outline: {
          DEFAULT: '#605f50',
          variant: 'rgba(96, 95, 80, 0.15)',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'mountain-mist': '0 4px 60px -10px rgba(29, 28, 16, 0.05)',
      },
      letterSpacing: {
        'display': '0.02em',
        'eyebrow': '0.1em',
        'nav': '0.15em',
      },
    },
  },
  plugins: [],
}
