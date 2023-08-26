/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundColor:theme=>({
        'brand-color': '#5d3ebc'
      })
    },
  },
  plugins: [],
}