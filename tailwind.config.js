/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Prompt, sans-serif", { fontFeatureSettings: '"cv11", "ss01"' }],
    },
    extend: {
      gridTemplateColumns: {
        "3fr1fr": "3fr 1fr",
        "1fr1fr": "1fr 1fr",
        "1fr5fr": "1fr 5fr",
      },
      clipPath: {
        arrow: "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%);",
      },
    },
  },
  plugins: [],
};
