/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F4AA2",
        accent: "#C8A34D"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

