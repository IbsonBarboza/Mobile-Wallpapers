/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ProtestFont: "Protest Riot, sans-serif",
        PoppinsFont: "Poppins, sans-serif"
      },
    },
  },
  plugins: [],
}