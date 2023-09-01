/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        audio: ["Audiowide"],
        press: ["Press Start 2P"],
        monoton: ["Monoton"],
        fascinate: ["Fascinate"],
      },
    },
  },
  plugins: [],
}

