// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // adjust based on your setup
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        spinSlow: 'spinSlow 8s linear infinite',
        moveLeftToRight: 'leftToRight 5s ease-in-out infinite alternate',
        moveRightToLeft: 'rightToLeft 5s ease-in-out infinite alternate',
        bounceUpDown: 'upDown 3s ease-in-out infinite',
        slideRightToLeft: 'slideR2L 5s ease-in-out infinite alternate',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        leftToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20px)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20px)' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideR2L: {
          '0%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
    plugins: [],
  },
};