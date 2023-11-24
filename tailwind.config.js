/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-white": "#FAFAFA",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/header-banner.jpeg')",
        "footer-pattern": "url('./src/assets/footer-banner.jpeg')",
      },
    },
  },
  plugins: [],
};
