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
      colors: {
        primaryBackground: "#fdfdfd",
        primaryButton: "#21272c",
        primaryColour: "#2E7D32",
        secondaryBackground: "#21272c",
        secondaryColour: "#ffffff",
        error: "#B82E2E",
        primaryText: "#1C1C1C",
      },
      fontFamily: {
        nunito: ["Nunito_400Regular"],
        "nunito-semibold": ["Nunito_600SemiBold"],
        "nunito-bold": ["Nunito_700Bold"],
        poppins: ["Poppins_400Regular"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
