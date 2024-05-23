import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import tailwindCssAnimate from 'tailwindcss-animate';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '600px',
      desktop: '1024px',
      desktopXl: '1400px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      keyframes: {
        'shake-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%': { transform: 'translateX(10px)' },
          '80%': { transform: 'translateX(8px)' },
          '90%': { transform: 'translateX(-8px)' },
        },
      },
      animation: {
        'shake-horizontal': 'shake-horizontal 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  corePlugins: {
    float: false,
  },
  darkMode: 'class',
  plugins: [tailwindCssAnimate,nextui()],
} satisfies Config;

export default config;
