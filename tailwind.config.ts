import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading:"#1F314F",
        paragraph:"#68778D",
        slate:"#D5E1EF"

      },
      spacing:{
        '500':'40px',
        '300':'24px',
        '200':'16px'
      }
    },
  },
  plugins: [],
} satisfies Config;
