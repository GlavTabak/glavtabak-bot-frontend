import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

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
      colors: {
        "theme-bg-color": 'var(--tg-theme-bg-color)',
        "theme-secondary-bg-color": 'var(--tg-theme-secondary-bg-color)',
        "theme-text-color": 'var(--tg-theme-text-color)',
        "theme-button-color": 'var(--tg-theme-button-color)',
        "theme-button-text-color": 'var(--tg-theme-button-text-color)',
        "theme-accent-text-color": 'var(--tg-theme-accent-text-color)',
        "theme-header-bg-color": 'var(--tg-theme-header-bg-color)',
        "theme-section-bg-color": 'var(--tg-theme-section-bg-color)',
        "theme-hint-color": 'var(--tg-theme-hint-color)',
        "theme-link-color": 'var(--tg-theme-link-color)',
        "theme-section-header-text-color": 'var(--tg-theme-section-header-text-color)',
        "theme-destructive-text-color": 'var(--tg-theme-destructive-text-color)',
        "theme-subtitle-text-color": 'var(--tg-theme-subtitle-text-color)',
      }
    },
  },
  corePlugins: {
    float: false,
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;

export default config;
