/**
 * The hero: two full-bleed frames, a wide one beside a narrower one,
 * running edge to edge under the header with no type over the top.
 *
 * Each frame rotates through every image in its folder:
 *
 *   public/hero/wide/   left frame  - landscape photos suit it best
 *   public/hero/tall/   right frame - portrait photos suit it best
 *
 * Files play in filename order, so prefix them 01-, 02-, ... The first is
 * the one that loads first and shows to reduced-motion visitors. The rest
 * of the filename becomes the alt text: "03-couple-in-matching-blue.jpg"
 * reads as "Couple in matching blue". An empty folder falls back to the
 * panel's gradient.
 */
export type HeroSlide = { src: string; alt: string };

export type HeroPanel = {
  /** Folder under public/hero/. */
  folder: string;
  /** Tailwind background utility, shown behind / instead of the photos. */
  gradient: string;
  sizes: string;
};

/** How long each slide holds, in ms. The frames take turns, half apart. */
export const HERO_INTERVAL = 6000;

export const HERO: HeroPanel[] = [
  { folder: "wide", gradient: "bg-hero-a", sizes: "(max-width: 900px) 100vw, 66vw" },
  { folder: "tall", gradient: "bg-hero-b", sizes: "(max-width: 900px) 100vw, 34vw" },
];

export const HOME_COPY = {
  eyebrow: "Creative Director / Photographer / Cinematographer",
  headline: "Images that hold their frame long after the shutter closes.",
  intro:
    "Over a decade of shaping brands and crafting visual stories for clients across Ghana and beyond - from campaign visuals to intimate portraiture.",

  /** Dark pull-quote band that breaks up the page. */
  statement:
    "Great design is more than aesthetics - it's about telling stories, evoking emotion, and building meaningful connections.",

  disciplinesHeading: "What I shoot.",
  disciplinesIntro:
    "Four things, done properly, rather than everything done adequately.",

  selectedWorkHeading: "A few frames worth pausing on.",

  aboutTeaser:
    "I'm a Creative Director, Designer, Photographer and Cinematographer working in Accra. My background in Publishing Studies still shapes how I think about layout, typography and story - and it shows up in every frame I make.",

  ctaHeading: "Let's frame something worth remembering.",
  ctaCopy:
    "Tell me about the shoot - the date, the location, and how the images will be used. I reply within two business days.",

  /** Number of projects surfaced under Selected Work. */
  selectedWorkCount: 6,
} as const;
