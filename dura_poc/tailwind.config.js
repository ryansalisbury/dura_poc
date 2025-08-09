/** @type {import('tailwindcss').Config} */
module.exports = {
  // include every file that uses className
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Expo Router screens
    "./components/**/*.{js,jsx,ts,tsx}", // your components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: { primaryBackground: "#B5EBDB", primaryButton: "#54A38E" },
    },
  },
  plugins: [],
};
