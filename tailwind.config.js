/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        topBar: {
          DEFAULT: "#593e7e",
        },
        section2: {
          DEFAULT: "#6dbfb8",
        },
        menuBar: {
          DEFAULT: "#d4affb",
}
      },
      fontFamily: {
        topBar: ['Carrois Gothic SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
