import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cinzel"', 'serif'], // fonte estilo art déco (adicione no HTML)
      },
    },
  },
  plugins: [],
}

export default config
