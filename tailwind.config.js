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
        "very-dark-blue": {
          900: "hsl(217, 54%, 11%)",
          600: "hsl(216, 50%, 16%)",
          200: "hsl(215, 32%, 27%)",
        },
        "soft-blue": "hsl(215, 51%, 70%)",
        "fm-cyan": "hsl(178, 100%, 50%)",
      },
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
