import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#E96750',
          light: '#FF8A73',
          dark: '#D14F38'
        },
        golden: '#F4B840',
        navy: '#1A1F3A',
        forest: '#3A4E3F',
        cream: '#F5F3E8',
        beige: '#FFF9ED'
      },
      fontFamily: {
        palmore: ['var(--font-palmore)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }]
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '48px',
        'xl': '64px',
        '2xl': '96px',
        '3xl': '128px'
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'pill': '9999px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scroll': 'scroll 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' }
        }
      }
    }
  },
  plugins: []
}

export default config
