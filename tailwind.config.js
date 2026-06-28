/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#05204E',
          dark: '#031432',
          light: '#1E3A8A',
          soft: '#EBF3FC',
          mid: '#ADC8E6',
        },
        secondary: {
          DEFAULT: '#F5A623',
          dark: '#D4890E',
          soft: '#FFF8EB',
          border: '#FDDC9A',
        },
        accent: {
          green: '#0D8A45',
          'green-soft': '#E8F5EE',
          'green-dark': '#066032',
        },
        cream: {
          DEFAULT: '#FFFBF5',
          border: '#F5EDE0',
        },
        canvas: '#F6F7FB',
        surface: {
          DEFAULT: '#FFFFFF',
          sunken: '#EEF1F6',
        },
        border: {
          DEFAULT: '#E6E8EC',
          strong: '#D1D5DB',
        },
        heading: '#111827',
        body: '#374151',
        muted: '#6B7280',
        subtle: '#9CA3AF',
        eyebrow: '#D4890E',
        'on-dark-muted': '#ADC8E6',
        chip: {
          money: { bg: '#EFF6FF', fg: '#2563EB' },
          home: { bg: '#F5F3FF', fg: '#7C3AED' },
          family: { bg: '#FFF7ED', fg: '#EA580C' },
          vehicle: { bg: '#EEF2FF', fg: '#4F46E5' },
          grocery: { bg: '#F0FDFA', fg: '#0D9488' },
          travel: { bg: '#EDE9FE', fg: '#6D28D9' },
          daily: { bg: '#ECFDF5', fg: '#0F766E' },
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(5, 32, 78, 0.06), 0 1px 3px rgba(5, 32, 78, 0.08)',
        card: '0 2px 8px rgba(5, 32, 78, 0.06), 0 4px 16px rgba(5, 32, 78, 0.04)',
        md: '0 4px 12px rgba(5, 32, 78, 0.08), 0 8px 24px rgba(5, 32, 78, 0.06)',
        lg: '0 8px 24px rgba(5, 32, 78, 0.1), 0 16px 48px rgba(5, 32, 78, 0.08)',
        mockup: '0 24px 64px rgba(5, 32, 78, 0.2), 0 8px 24px rgba(5, 32, 78, 0.12)',
        focus: '0 0 0 3px rgba(5, 32, 78, 0.25)',
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.25rem',
        phone: '1.5rem',
      },
      maxWidth: {
        container: '75rem',
        prose: '42.5rem',
        'hero-copy': '35rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        'section-y': '4.5rem',
        'section-y-lg': '5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
