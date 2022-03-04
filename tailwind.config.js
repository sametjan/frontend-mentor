const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-gray": "hsl(212, 45%, 89%)",
        "blue-gray": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
