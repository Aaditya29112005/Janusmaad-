/** @type {import('tailwind').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        janus: {
          bg: '#FAFCFF',
          card: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(120, 81, 169, 0.12)',
          purple: '#7851A9',
          'purple-light': '#9B6FD0',
          mint: '#48BE9C',
          'mint-light': '#6EE7C4',
          dark: '#0F172A',
          slate: '#334155',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'purple-mint-gradient': 'linear-gradient(135deg, #7851A9 0%, #48BE9C 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.7) 100%)',
        'card-glow': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(120, 81, 169, 0.08), transparent 40%)',
      },
      boxShadow: {
        'glow-purple': '0 10px 30px -5px rgba(120, 81, 169, 0.25), 0 5px 15px -3px rgba(72, 190, 156, 0.15)',
        'glow-mint': '0 10px 30px -5px rgba(72, 190, 156, 0.25), 0 5px 15px -3px rgba(120, 81, 169, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
