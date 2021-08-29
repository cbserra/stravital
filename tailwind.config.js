module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        react: "#61DAFB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
