/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx,js,jsx}",
      "./components/**/*.{ts,tsx,js,jsx}",
      "./pages/**/*.{ts,tsx,js,jsx}"
    ],
    theme: {
      extend: {
        colors: {
          amber: {
            50: "#fff8f1",
            100: "#fff3e0",
            200: "#ffe4b5",
            700: "#8a4b10",
            800: "#6b3a0c",
            900: "#4b2908"
          }
        }
      }
    },
    plugins: [],
  };
  