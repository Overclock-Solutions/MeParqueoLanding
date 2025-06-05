/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0099FF', // Bright blue
          medium: '#017AD6', // Medium blue
          dark: '#0068AE',   // Dark blue
          light: '#75BEFF',  // Light blue
        },
        secondary: {
          DEFAULT: '#FF6B00', // Orange for contrast and CTAs
          light: '#FF8A3D',
          dark: '#E55D00',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 30px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.2)',
        'blue': '0 8px 25px rgba(0, 153, 255, 0.2)',
        'button': '0 4px 14px rgba(0, 153, 255, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(120deg, #0099FF, #017AD6)',
        'section-pattern': 'linear-gradient(180deg, #F9FAFB, #FFFFFF)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};