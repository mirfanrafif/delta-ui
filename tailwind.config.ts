import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/feature/**/*.{ts,tsx}',

    '../campaign/src/pages/**/*.{ts,tsx}',
    '../campaign/src/feature/**/*.{ts,tsx}',
    '../src/campaign/pages/**/*.{ts,tsx}',
    '../src/campaign/feature/**/*.{ts,tsx}',

    '../dashboard/src/pages/**/*.{ts,tsx}',
    '../dashboard/src/feature/**/*.{ts,tsx}',
    '../src/dashboard/pages/**/*.{ts,tsx}',
    '../src/dashboard/feature/**/*.{ts,tsx}',

    '../host/src/pages/**/*.{ts,tsx}',
    '../host/src/feature/**/*.{ts,tsx}',
    '../src/host/pages/**/*.{ts,tsx}',
    '../src/host/feature/**/*.{ts,tsx}',

    '../list/src/pages/**/*.{ts,tsx}',
    '../list/src/feature/**/*.{ts,tsx}',
    '../src/list/pages/**/*.{ts,tsx}',
    '../src/list/feature/**/*.{ts,tsx}',

    '../login/src/pages/**/*.{ts,tsx}',
    '../login/src/feature/**/*.{ts,tsx}',
    '../src/login/pages/**/*.{ts,tsx}',
    '../src/login/feature/**/*.{ts,tsx}',

    '../segmentation/src/pages/**/*.{ts,tsx}',
    '../segmentation/src/feature/**/*.{ts,tsx}',
    '../src/segmentation/pages/**/*.{ts,tsx}',
    '../src/segmentation/feature/**/*.{ts,tsx}',

    '../settings/src/pages/**/*.{ts,tsx}',
    '../settings/src/feature/**/*.{ts,tsx}',
    '../src/settings/pages/**/*.{ts,tsx}',
    '../src/settings/feature/**/*.{ts,tsx}',

    '../templates/src/pages/**/*.{ts,tsx}',
    '../templates/src/feature/**/*.{ts,tsx}',
    '../src/templates/pages/**/*.{ts,tsx}',
    '../src/templates/feature/**/*.{ts,tsx}',

    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#052A6E',
        'blue-darker': '#042258',
        'blue-secondary': '#E8F0FF',
        'blue-lighter': '#1E3F7D',
        'blue-low': '#F2F4F8',

        'dark-primary': '#333A47',
        'dark-secondary': '#6B707C',
        'dark-tertiary': '#B5B7BD',

        'gray-common': '#EBEDEE',
        'gray-low': '#F9F9F9',

        'red-default': '#E72F2F',
        'red-lighter': '#F73E3E',
        'red-darker': '#C20B0B',
        'red-low': '#FDEAEA',
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};

export default config;
