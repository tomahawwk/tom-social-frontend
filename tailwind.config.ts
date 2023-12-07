import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      title: '24px',
      h1: [
        '48px',
        {
          lineHeight: '120%',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        },
      ],
    },
    backgroundSize: {
      contain: 'contain',
      cover: 'cover',
    },
    extend: {
      spacing: {
        xs: '12px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
      },
      colors: {
        primary: {
          main: '#15BEB6',
        },
        secondary: '#ABADB1',
        grey: {
          500: '#242424',
        },
        border: '#2A2A2A',
        white: '#F0F0F0',
        background: '#1B1B1B',
      },
      fontFamily: {
        grotesque: ['BasisGrotesquePro', 'sans-serif'],
      },
      maxWidth: {
        '1/2': '50%',
        md: '400px',
        lg: '1000px',
      },
      transitionTimingFunction: {
        cubic: 'cubic-bezier(.77,0,.175,1)',
      },
      boxShadow: {
        card: '0px 1px 10px rgba(0, 0, 0, .09)',
        'card-hover': '0px 1px 15px rgba(0, 0, 0, .15)',
        swipeModal: '0px -2px 10px rgba(0, 0, 0, .07)',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
      },
    },
  },
  plugins: [],
}
export default config
