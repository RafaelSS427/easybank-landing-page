import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|navbar).js'
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(233,26%,24%)',
        limeGreen: 'hsl(136,65%,51%)',
        brightCyan: 'hsl(192,70%,51%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [nextui()],
}
export default config