/**
 * The hero: two full-bleed frames, a wide one beside a narrower one,
 * running edge to edge under the header with no type over the top.
 * Drop `src` and the panel falls back to its gradient placeholder.
 */
export type HeroPanel = {
  src?: string;
  alt?: string;
  /** Tailwind background utility, used when `src` is absent. */
  gradient: string;
};

export const HERO: HeroPanel[] = [
  {
    src: "/work/worn-in-gold/06.jpg",
    alt: "Two models against white — a linked gold chain over a white shirt, a cross pendant over a black turtleneck",
    gradient: "bg-hero-a",
  },
  {
    src: "/work/worn-in-gold/09.jpg",
    alt: "Couple close together, paired watches and rings in the foreground",
    gradient: "bg-hero-b",
  },
];

export const HOME_COPY = {
  eyebrow: "Creative Director / Photographer / Cinematographer",
  headline: "Images that hold their frame long after the shutter closes.",
  intro:
    "Over a decade of shaping brands and crafting visual stories for clients across Ghana and beyond — from campaign visuals to intimate portraiture.",

  /** Dark pull-quote band that breaks up the page. */
  statement:
    "Great design is more than aesthetics — it's about telling stories, evoking emotion, and building meaningful connections.",

  disciplinesHeading: "What I shoot.",
  disciplinesIntro:
    "Four things, done properly, rather than everything done adequately.",

  selectedWorkHeading: "A few frames worth pausing on.",

  aboutTeaser:
    "I'm a Creative Director, Designer, Photographer and Cinematographer working out of Accra. My background in Publishing Studies still shapes how I think about layout, typography and story — and it shows up in every frame I make.",

  ctaHeading: "Let's frame something worth remembering.",
  ctaCopy:
    "Tell me about the shoot — the date, the location, and how the images will be used. I reply within two business days.",

  /** Number of projects surfaced under Selected Work. */
  selectedWorkCount: 6,
} as const;
