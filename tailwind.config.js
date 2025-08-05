/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#02b290',
          hover: '#019a7b',
        },
        brand: {
          light: '#ffffff',
        },
        body: '#5A5A5A',
        heading: '#212121',
        input: '#1D1E1F',
        black: '#000000',
        white: '#ffffff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        gray: {
          50: '#FBFBFB',
          100: '#F1F1F1',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          400: '#C4C4C4',
          500: '#A0A0A0',
          600: '#717171',
          700: '#4A4A4A',
          800: '#2D2D2D',
          900: '#1F1F1F',
        },
        social: {
          facebook: '#4267B2',
          facebookHover: '#365899',
          twitter: '#1DA1F2',
          twitterHover: '#1a91da',
          instagram: '#E4405F',
          instagramHover: '#d62d4a',
          youtube: '#FF0000',
          youtubeHover: '#e60000',
          google: '#4285F4',
          googleHover: '#357ae8',
        },
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10px': '.625rem',
        '13px': '13px',
        '15px': '15px',
      },
      screens: {
        '3xl': '1780px',
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}