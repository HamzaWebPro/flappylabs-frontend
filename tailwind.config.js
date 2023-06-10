/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradiant:
        "linear-gradient(174deg, rgba(41,228,159,1) 0%, rgba(56,215,169,1) 46%, rgba(103,176,201,1) 100%)",
      gradiantReverse:
        " linear-gradient(280deg, rgba(41,228,159,1) 0%, rgba(56,215,169,1) 46%, rgba(103,176,201,1) 100%)",
        pinkGradiant:" linear-gradient(150deg, #67B0C9 32%, #9E75F4 100%)"
      },
      colors: {
        transparentBlack: "#000000E8",
        gray:"#dedede",
        softblack:"#212121"
      },
      maxWidth: {
        container: "1150px",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        nokora: "'Nokora', sans-serif",
        lexend: "'Lexend', sans-serif",
      },
    },
  },
  plugins: [],
};
