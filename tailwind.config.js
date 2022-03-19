module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appGray: "#E1E6E1",
        appGray1: "#242331",
        appGray2: "#f5f5f5",
        appGray4: "#404040",
        appGray5: "#424242",
        appBlue: "#0078f2",
        appBlack: "#6622CC",
        appBlack1: "#202020",
      },
      keyframes: {
        thumbnail: {
          from: {
            width: "0%",
            borderRadius: "1rem 0 0 1rem",
          },
          to: {
            width: "100%",
            borderRadius: "1rem",
          },
        },
      },
      animation: {
        thumbnail: "thumbnail 6s linear 1",
      },
      aspectRatio: {
        poster: "2 / 3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
