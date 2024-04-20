/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary100: "##FCEFF1",
        primary200: "#F9E0E6",
        primary300: "#EDC9D6",
        primary400: "#DCB2C5",
        primary500: "#C694AF",
        primary600: "#AA6C93",
        primary700: "#8E4A7C",
        primary800: "#722F68",
        primary900: "#5F1C5B",
        secondary100: "#F4EEFA",
        secondary200: "#E8DFF5",
        secondary300: "#D0C4E3",
        secondary400: "#B1A5C8",
        secondary500: "#8A7EA4",
        secondary600: "#695C8D",
        secondary700: "#4D3F76",
        secondary800: "#34285F",
        secondary900: "#22184E",
        fontHeader: "#593D7C",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "24px",
          lg: "24px",
        },
      },
    },
  },
  plugins: [],
};
