/**
 * Single source of truth for the palette.
 *
 * Plain values only - no React types - so `tailwind.config.ts` can import
 * this directly. Everything here surfaces as a Tailwind utility; components
 * should use those (`bg-ink`, `text-brass`) rather than importing from here.
 *
 * ink    #121212  - near-black, primary text / nav
 * paper  #f3efe6  - warm ivory background
 * stone  a warm neutral ramp, 100 (lightest) → 700 (darkest)
 * brass  #b08d57  - restrained accent (camera brass / jewelry gold)
 */
export const colors = {
  ink: "#121212",
  paper: "#f3efe6",

  brass: {
    DEFAULT: "#b08d57",
    /** Lifted brass, for dark backgrounds where #b08d57 goes muddy. */
    light: "#e4c98f",
  },

  stone: {
    100: "#e9e4d7", // panels on paper
    200: "#cfc9bc", // secondary text on ink
    300: "#a39d8f", // tertiary text on ink
    400: "#8f897d", // the mid stone
    500: "#726d61", // faint text either side
    600: "#4a463d", // body text on paper
    700: "#3a362f", // strong body text on paper
  },

  /** Header: black brand block against a lifted grey nav block. */
  nav: {
    ink: "#0d0d0d",
    panel: "#3a3a3a",
    link: "#cfcfcf",
    wordmark: "#d6d2ca",
  },

  /** Thin stripe down the left edge of the hero. */
  accent: "#7c2d20",
} as const;

/** Placeholder fills used wherever a photo has not been supplied yet. */
export const gradients = {
  tile: "linear-gradient(155deg, #d8d2c4 0%, #b7b0a0 38%, #8f897d 68%, #57534a 100%)",
  "hero-a": "linear-gradient(165deg,#e2ddcf,#b7b0a0 45%,#8f897d 80%,#5c574c)",
  "hero-b": "linear-gradient(200deg,#d8d2c4,#a49d8c 55%,#5c574c)",
  "hero-c": "linear-gradient(210deg,#c9c2b0,#8f897d 50%,#4a463d)",
  portrait: "linear-gradient(200deg,#dcd6c8,#a49d8c 50%,#5c574c)",
  video: "linear-gradient(155deg, #57534a 0%, #2c2a25 100%)",

  /** Bottom scrim, so type stays legible over any photograph. */
  scrim: "linear-gradient(0deg, rgba(18,18,18,.72) 0%, rgba(18,18,18,0) 42%)",
  "scrim-soft": "linear-gradient(0deg, rgba(18,18,18,.62) 0%, rgba(18,18,18,0) 45%)",

  /** Studio grey behind the cut-out portraits. */
  studio: "radial-gradient(125% 105% at 76% 26%, #ededed 0%, #dedede 42%, #c9c9c9 100%)",
  "studio-left":
    "radial-gradient(120% 110% at 28% 30%, #ededed 0%, #dedede 44%, #cbcbcb 100%)",
} as const;
