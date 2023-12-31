/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        '0.1': "1px",
      },
      backgroundImage: theme => ({
        'mobile-app': 'url("https://cdn.getir.com/getirweb-images/common/illustration/doodle.png")'
      }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
      },
    },
  },
  plugins: [],
};
