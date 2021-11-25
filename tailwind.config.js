module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "support-bg-image": "url('./images/support.jpg')",
      },
    },
    container: {
      padding: "2rem",
    },
    minHeight: {
      400: "400px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
