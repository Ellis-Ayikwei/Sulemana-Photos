import type { Config } from "tailwindcss";
import { colors, gradients } from "./lib/palette";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      backgroundImage: gradients,
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      spacing: {
        /** Header height - drives the hero and About page fills. */
        nav: "var(--nav-h)",
      },
      screens: {
        /** The single breakpoint this design uses. */
        nav: "900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
