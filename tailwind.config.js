/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f7',
          100: '#ffeef0',
          200: '#ffd7de',
          300: '#ffb6c1',
          400: '#ff859d',
          500: '#ff6b9d',
          600: '#ff497a',
          700: '#e02d5f',
          800: '#c44569',
          900: '#a63d55',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        whatsapp: '#25d366',
        gold: '#ffd700',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
        'gradient-pink-light': 'linear-gradient(135deg, #ffa6c1 0%, #ff6b9d 100%)',
      },
      boxShadow: {
        'pink': '0 10px 25px -5px rgba(255, 107, 157, 0.25)',
        'pink-lg': '0 20px 25px -5px rgba(255, 107, 157, 0.25), 0 10px 10px -5px rgba(255, 107, 157, 0.1)',
      }
    },
  },
  plugins: [],
}