/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#2c2c2c",
          "200": "#272727",
        },
        gainsboro: "#e0e0e0",
        black: "#000",
        dodgerblue: "#448fff",
        royalblue: "#2b75e6",
        whitesmoke: "#f0f0f0",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "akaya-kanadaka": "'Akaya Kanadaka'",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        "37xl": "56px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      base: "1rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "77xl": "6rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
