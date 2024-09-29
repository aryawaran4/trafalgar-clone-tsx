import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'source-serif': ['Source Serif', 'serif'],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#414141",
        "light-gray": "#6b6b6b"
      },
    },
  },
  plugins: [],
}
export default config
