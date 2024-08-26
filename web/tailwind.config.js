/** @type {import('tailwindcss').Config} */
export default {
  content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
  theme: {
    extend: {
            colors: {
                'brand-primary': 'rgb(232, 25, 72)',
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
            }
        },
  },
  plugins: [],
}

