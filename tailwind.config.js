module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"],
      "kanit": ["Kanit", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
