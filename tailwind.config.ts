import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				bluePrimary: '#080082',
				blueLight: '#E7E6F7',
				orangePrimary: '#FF9500',
				blackLight: '#2C2C2C',
				blackDark: '#181818',
			},
      fontFamily: {
				sans: ['var(--font-general)'],
        outfit: ['var(--font-outfit)'],
        nunito: ['var(--font-nunito)'],
			},
      screens: {
                xs: { max: '361px' },
                sm: { max: '599px' },
				'md': {min:'600px', max:'899px'},
                'mdxl':{min:"900px", max:"1023px"},
				'2md': {min:'1024px', max:'1279px'},
				'2lg': { min: '1280px', max: '1439px' },
				'1xl': { min: '1440px' },
				'xl': { min: '1490px' },
				'2xl': { min: '1650px' },
				'5xl': { min: '1920px' },
				'6xl': { min: '2560px' },
			},
    },
  },
  plugins: [],
}
export default config
