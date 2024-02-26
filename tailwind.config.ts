import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'main-orange': '#CC6138',
      'main-gray': '#333333',
      'new-white': '#F0F0F0',
      'new-blue': '#165BAA',
      'new-purple': '#A155B9',
      'new-pink': '#F765A3',
      'gray-1': '#828282',
      'gray-2': '#4F4F4F',
      'gray-3': '#747474',
      'gray-4': '#ECECEC',
      'light-gray': '#D1D1D1',
      'main-red': '#B90000',
      ...colors
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    },
    screens: {
      sm: { min: '0px', max: '450px' },
      tablet: { min: '451px', max: '768px' },
      'md-': { min: '769px', max: '1024px' },
      md: {
        raw: '(max-height: 800px), (min-width:451px) and (max-width: 1024px)'
      },
      customImgScreen: { raw: '(max-height: 860px), (max-width: 1024px)' }
    },
    extend: {
      lineHeight: {
        '11': '2.75rem'
      },
      gridTemplateColumns: {
        'lg-table': '44px repeat(7, minmax(0, 1fr))'
      },
      zIndex: {
        '9': '9'
      }
    }
  },
  plugins: []
};
export default config;
