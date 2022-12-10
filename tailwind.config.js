/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const lineclamp = require('@tailwindcss/line-clamp');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      md: '768px',
      ipad: '820px',
      lg: '1024px',
      xl: '1120px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      open: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '34px',
      '5xl': '40px',
      '6xl': '48px',
    },
    extend: {
      colors: {
        gray: {
          100: '#F7F7F8',
          200: '#EEF0F1',
          300: '#D8DADE',
          400: '#C2C5CB',
          500: '#A1A6AF',
          600: '#848A97',
        },
        purple: {
          100: '#F7F7FE',
          200: '#EFEFFD',
          300: '#DFDEFB',
          400: '#BEBDF7',
          500: '#9E9DF2',
          600: '#7D7CEE',
        },
        orange: {
          100: '#FEF7F4',
          200: '#FEF0E9',
          300: '#FCE1D3',
          400: '#FAC2A7',
          500: '#F7A47A',
          600: '#F5854E',
          700: '#F26722',
        },
        white: '#FFFFFF',
        black: '#0E0F11',
        error: '#EB4949',
        'error-light': '#FEECEC',
        success: '#2EB961',
        'success-light': '#EFFBF3',
        info: '#F6A927',
        'info-light': '#FEF7EB',
      },
      boxShadow: {
        sm: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        md: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        xl: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        '2xl': '0px 2px 20px rgba(54, 57, 64, 0.06)',
        purple: '0px 2px 28px rgba(74, 73, 187, 0.16)',
      },
      lineHeight: {
        'extra-tight': '1.125rem',
      },
      backgroundImage: {
        gradient: 'linear-gradient(0deg, #FFFFFF 16.3%, rgba(255, 255, 255, 0) 92.86%)',
      },
    },
  },
  plugins: [lineclamp],
};
