module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ma-green': {
          light: "#CED7C0",
          DEFAULT: "#A1B883",
          dark: "#799561",
        },
        "ma-pink": {
          light: "#E6CBAF",
          DEFAULT: "#E7A99F",
        },
        "ma-blue": {
          DEFAULT: "#77ACA8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
