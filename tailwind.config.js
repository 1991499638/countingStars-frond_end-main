/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'tracking-in-contract-bck':
          'tracking-in-contract-bck 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'tracking-in-contract-bck-top':
          'tracking-in-contract-bck-top 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'tracking-in-contract-bck-bottom':
          'tracking-in-contract-bck-bottom 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'tracking-in-expand':
          'tracking-in-expand 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'in-left': 'in-left 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'in-right':
          'in-right 3s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
      },
      keyframes: {
        'tracking-in-contract-bck': {
          '0%': {
            'letter-spacing': '1em',
            transform: 'translateZ(400px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        'tracking-in-contract-bck-top': {
          '0%': {
            'letter-spacing': '1em',
            transform: 'translateZ(400px) translateY(-300px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
        'tracking-in-contract-bck-bottom': {
          '0%': {
            'letter-spacing': '1em',
            transform: 'translateZ(400px) translateY(500px)',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
        'tracking-in-expand': {
          '0%': {
            'letter-spacing': '-.5em',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            opacity: '1',
          },
        },
        'in-left': {
          '0%': {
            'letter-spacing': '1em',
            transform: ' translateX(-300px)',
            opacity: '0',
          },
          '60%': {
            opacity: '.6',
            transform: 'translateX(20px)',
          },
          to: {
            transform: ' translateX(0)',
            opacity: '1',
          },
        },
        'in-right': {
          '0%': {
            'letter-spacing': '1em',
            transform: ' translateX(300px)',
            opacity: '0',
          },
          '60%': {
            opacity: '.6',
            transform: ' translateX(-25px)',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
