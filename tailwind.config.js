/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF7',
          100: '#F9F6F0',
          200: '#F4EFE6',
          300: '#E8E1D3',
        },
        sand: {
          100: '#ECE6DA',
          200: '#DFD7C7',
          300: '#CFC3AE',
          400: '#B6A68D',
        },
        charcoal: {
          950: '#0A0A0C',
          900: '#121214',
          800: '#1C1C20',
          700: '#2A2A30',
          600: '#4B4B54',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#E4E4E7',
          100: '#F4F4F5',
        },
        gold: {
          200: '#F2E4C4',
          300: '#E7D2A3',
          400: '#D4AF37',
          500: '#C5A880',
          600: '#AA8858',
          700: '#8A6A3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseSubtle: 'pulseSubtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
