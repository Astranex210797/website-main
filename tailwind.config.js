/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1ABC9C',     // Primary Teal
          dark: '#145943',        // CTA Hover
          text: '#0D3B2E',        // Heading/Dark
          gray: '#6C757D',        // Subtext
          bg: '#F2FCF9',          // Soft light background
        },
        'bottle-green': '#0B3C32',
        'bottle-green-solid': '#062720',
        'pearlescent': '#F0FDF4',
        'pearlescent-subtle': '#DFF2E9',
        'lux-gold': '#D4AF37',
        'rich-black': '#0B0B0C',
      },
      spacing: {
        'carousel': 'calc(100vw - 2rem)',
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
        sanslux: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite linear',
        pulsefast: 'pulse 1.2s infinite',
        glow: 'glow 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #D4AF37, 0 0 20px #D4AF37' },
          '50%': { boxShadow: '0 0 20px #FFF, 0 0 30px #D4AF37' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
