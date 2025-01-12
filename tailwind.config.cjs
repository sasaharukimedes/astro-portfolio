/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway Variable', 'sans-serif'],
        kiwimaru: ['Kiwimaru', 'serif'],
        kurenaido: ['Zen Kurenaido', 'serif'],
        homemade: ['Homemade Apple', 'serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        ".kurenaido-underline": {
          fontFamily: "'Zen Kurenaido', serif",
          textDecoration: "underline",
          textUnderlineOffset: "5px",
        },
      });
    },
  ],
  daisyui: {
    themes: ["cupcake", "pastel", "retro", "valentine"],
  },
};
