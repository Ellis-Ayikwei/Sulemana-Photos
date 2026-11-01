/**
 * Portfolio projects.
 *
 * ── Adding or replacing photography ────────────────────────────────────────
 * Every image slot is optional. Leave it out and the frame renders the
 * gradient + viewfinder placeholder; fill it in and the photo takes over.
 *
 *   1. Drop web-sized files into  public/work/<slug>/
 *      (long edge ~2400px, JPEG q82 - see README for the resize script)
 *   2. Set `cover` - the portfolio tile and the project hero
 *   3. Add a `media` entry per gallery image
 *
 * For video, `src` is the embed URL (the YouTube/Vimeo `/embed/` form) and
 * `poster` is the still shown on the tile before it is opened.
 *
 * ── NOTE ON PLACEHOLDERS ───────────────────────────────────────────────────
 * Descriptions, years and alt text are placeholders - replace them with the
 * real story for each set. Alt text should describe what is in the frame.
 */

export type Media = {
  type: "photo" | "video";
  src?: string;
  /** Video only: still shown on the tile before the film is opened. */
  poster?: string;
  alt?: string;
};

export type Work = {
  slug: string;
  title: string;
  client: string;
  cat: string;
  year: string;
  role: string;
  description: string;
  /** Tile + project-hero image. Falls back to a placeholder when omitted. */
  cover?: string;
  coverAlt?: string;
  media: Media[];
};

export const WORK: Work[] = [
  {
    slug: "samsung-campaign",
    title: "Samsung Campaign",
    client: "Samsung Ghana",
    cat: "Campaign",
    year: "2025",
    role: "Creative Direction, Photography",
    description:
      "A brand campaign for Samsung Ghana built around real, unposed moments - colour-blocked sets, studio and lifestyle setups, and people at ease with the product in their hands.",
    cover: "/work/samsung-campaign/01.jpg",
    coverAlt: "Samsung Ghana brand campaign - cover frame",
    media: [
      { type: "photo", src: "/work/samsung-campaign/02.jpg", alt: "Samsung Ghana brand campaign - frame 2" },
      { type: "photo", src: "/work/samsung-campaign/03.jpg", alt: "Samsung Ghana brand campaign - frame 3" },
      { type: "photo", src: "/work/samsung-campaign/04.jpg", alt: "Samsung Ghana brand campaign - frame 4" },
      { type: "photo", src: "/work/samsung-campaign/05.jpg", alt: "Samsung Ghana brand campaign - frame 5" },
      { type: "photo", src: "/work/samsung-campaign/06.jpg", alt: "Samsung Ghana brand campaign - frame 6" },
      { type: "photo", src: "/work/samsung-campaign/07.jpg", alt: "Samsung Ghana brand campaign - frame 7" },
      { type: "photo", src: "/work/samsung-campaign/08.jpg", alt: "Samsung Ghana brand campaign - frame 8" },
      { type: "photo", src: "/work/samsung-campaign/09.jpg", alt: "Samsung Ghana brand campaign - frame 9" },
      { type: "photo", src: "/work/samsung-campaign/10.jpg", alt: "Samsung Ghana brand campaign - frame 10" },
      { type: "photo", src: "/work/samsung-campaign/11.jpg", alt: "Samsung Ghana brand campaign - frame 11" },
      { type: "photo", src: "/work/samsung-campaign/12.jpg", alt: "Samsung Ghana brand campaign - frame 12" },
      { type: "photo", src: "/work/samsung-campaign/13.jpg", alt: "Samsung Ghana brand campaign - frame 13" },
      { type: "photo", src: "/work/samsung-campaign/14.jpg", alt: "Samsung Ghana brand campaign - frame 14" },
      { type: "photo", src: "/work/samsung-campaign/15.jpg", alt: "Samsung Ghana brand campaign - frame 15" },
      { type: "photo", src: "/work/samsung-campaign/16.jpg", alt: "Samsung Ghana brand campaign - frame 16" },
      { type: "photo", src: "/work/samsung-campaign/17.jpg", alt: "Samsung Ghana brand campaign - frame 17" },
      { type: "photo", src: "/work/samsung-campaign/18.jpg", alt: "Samsung Ghana brand campaign - frame 18" },
      { type: "photo", src: "/work/samsung-campaign/19.jpg", alt: "Samsung Ghana brand campaign - frame 19" },
      { type: "photo", src: "/work/samsung-campaign/20.jpg", alt: "Samsung Ghana brand campaign - frame 20" },
      { type: "photo", src: "/work/samsung-campaign/21.jpg", alt: "Samsung Ghana brand campaign - frame 21" },
      { type: "photo", src: "/work/samsung-campaign/22.jpg", alt: "Samsung Ghana brand campaign - frame 22" },
      { type: "photo", src: "/work/samsung-campaign/23.jpg", alt: "Samsung Ghana brand campaign - frame 23" },
      { type: "photo", src: "/work/samsung-campaign/24.jpg", alt: "Samsung Ghana brand campaign - frame 24" },
      { type: "photo", src: "/work/samsung-campaign/25.jpg", alt: "Samsung Ghana brand campaign - frame 25" },
      { type: "photo", src: "/work/samsung-campaign/26.jpg", alt: "Samsung Ghana brand campaign - frame 26" },
      { type: "photo", src: "/work/samsung-campaign/27.jpg", alt: "Samsung Ghana brand campaign - frame 27" },
      { type: "photo", src: "/work/samsung-campaign/28.jpg", alt: "Samsung Ghana brand campaign - frame 28" },
      { type: "photo", src: "/work/samsung-campaign/29.jpg", alt: "Samsung Ghana brand campaign - frame 29" },
      { type: "photo", src: "/work/samsung-campaign/30.jpg", alt: "Samsung Ghana brand campaign - frame 30" },
      { type: "photo", src: "/work/samsung-campaign/31.jpg", alt: "Samsung Ghana brand campaign - frame 31" },
      { type: "photo", src: "/work/samsung-campaign/32.jpg", alt: "Samsung Ghana brand campaign - frame 32" },
      { type: "photo", src: "/work/samsung-campaign/33.jpg", alt: "Samsung Ghana brand campaign - frame 33" },
      { type: "photo", src: "/work/samsung-campaign/34.jpg", alt: "Samsung Ghana brand campaign - frame 34" },
      { type: "photo", src: "/work/samsung-campaign/35.jpg", alt: "Samsung Ghana brand campaign - frame 35" },
      { type: "photo", src: "/work/samsung-campaign/36.jpg", alt: "Samsung Ghana brand campaign - frame 36" },
      { type: "photo", src: "/work/samsung-campaign/37.jpg", alt: "Samsung Ghana brand campaign - frame 37" },
      { type: "photo", src: "/work/samsung-campaign/38.jpg", alt: "Samsung Ghana brand campaign - frame 38" },
      { type: "photo", src: "/work/samsung-campaign/39.jpg", alt: "Samsung Ghana brand campaign - frame 39" },
      { type: "photo", src: "/work/samsung-campaign/40.jpg", alt: "Samsung Ghana brand campaign - frame 40" },
      { type: "photo", src: "/work/samsung-campaign/41.jpg", alt: "Samsung Ghana brand campaign - frame 41" },
      { type: "photo", src: "/work/samsung-campaign/42.jpg", alt: "Samsung Ghana brand campaign - frame 42" },
      { type: "photo", src: "/work/samsung-campaign/43.jpg", alt: "Samsung Ghana brand campaign - frame 43" },
      { type: "photo", src: "/work/samsung-campaign/44.jpg", alt: "Samsung Ghana brand campaign - frame 44" },

    ],
  },
  {
    slug: "sue-shimmers-jewelry",
    title: "Sue Shimmers Jewelry",
    client: "Sue Shimmers",
    cat: "Product & Jewelry",
    year: "2025",
    role: "Photography, Art Direction",
    description:
      "Product and on-body photography for Sue Shimmers - pendants, chains, rings and the packaging they arrive in, lit to hold detail and keep the gold looking the way it does in person.",
    cover: "/work/sue-shimmers-jewelry/01.jpg",
    coverAlt: "Sue Shimmers jewelry - cover frame",
    media: [
      { type: "photo", src: "/work/sue-shimmers-jewelry/02.jpg", alt: "Sue Shimmers jewelry - frame 2" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/03.jpg", alt: "Sue Shimmers jewelry - frame 3" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/04.jpg", alt: "Sue Shimmers jewelry - frame 4" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/05.jpg", alt: "Sue Shimmers jewelry - frame 5" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/06.jpg", alt: "Sue Shimmers jewelry - frame 6" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/07.jpg", alt: "Sue Shimmers jewelry - frame 7" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/08.jpg", alt: "Sue Shimmers jewelry - frame 8" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/09.jpg", alt: "Sue Shimmers jewelry - frame 9" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/10.jpg", alt: "Sue Shimmers jewelry - frame 10" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/11.jpg", alt: "Sue Shimmers jewelry - frame 11" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/12.jpg", alt: "Sue Shimmers jewelry - frame 12" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/13.jpg", alt: "Sue Shimmers jewelry - frame 13" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/14.jpg", alt: "Sue Shimmers jewelry - frame 14" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/15.jpg", alt: "Sue Shimmers jewelry - frame 15" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/16.jpg", alt: "Sue Shimmers jewelry - frame 16" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/17.jpg", alt: "Sue Shimmers jewelry - frame 17" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/18.jpg", alt: "Sue Shimmers jewelry - frame 18" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/19.jpg", alt: "Sue Shimmers jewelry - frame 19" },
      { type: "photo", src: "/work/sue-shimmers-jewelry/20.jpg", alt: "Sue Shimmers jewelry - frame 20" },

    ],
  },
  {
    slug: "portraits",
    title: "Portraits",
    client: "Portrait Sessions",
    cat: "Portrait",
    year: "2025",
    role: "Photography",
    description:
      "A selection of portrait sittings, in studio and on location - simple light, little direction, and room for the sitter to be themselves.",
    cover: "/work/portraits/01.jpg",
    coverAlt: "Portrait - cover frame",
    media: [
      { type: "photo", src: "/work/portraits/02.jpg", alt: "Portrait - frame 2" },
      { type: "photo", src: "/work/portraits/03.jpg", alt: "Portrait - frame 3" },
      { type: "photo", src: "/work/portraits/04.jpg", alt: "Portrait - frame 4" },
      { type: "photo", src: "/work/portraits/05.jpg", alt: "Portrait - frame 5" },
      { type: "photo", src: "/work/portraits/06.jpg", alt: "Portrait - frame 6" },
      { type: "photo", src: "/work/portraits/07.jpg", alt: "Portrait - frame 7" },
      { type: "photo", src: "/work/portraits/08.jpg", alt: "Portrait - frame 8" },
      { type: "photo", src: "/work/portraits/09.jpg", alt: "Portrait - frame 9" },
      { type: "photo", src: "/work/portraits/10.jpg", alt: "Portrait - frame 10" },
      { type: "photo", src: "/work/portraits/11.jpg", alt: "Portrait - frame 11" },
      { type: "photo", src: "/work/portraits/12.jpg", alt: "Portrait - frame 12" },
      { type: "photo", src: "/work/portraits/13.jpg", alt: "Portrait - frame 13" },
      { type: "photo", src: "/work/portraits/14.jpg", alt: "Portrait - frame 14" },
      { type: "photo", src: "/work/portraits/15.jpg", alt: "Portrait - frame 15" },
      { type: "photo", src: "/work/portraits/16.jpg", alt: "Portrait - frame 16" },
      { type: "photo", src: "/work/portraits/17.jpg", alt: "Portrait - frame 17" },
      { type: "photo", src: "/work/portraits/18.jpg", alt: "Portrait - frame 18" },
      { type: "photo", src: "/work/portraits/19.jpg", alt: "Portrait - frame 19" },
      { type: "photo", src: "/work/portraits/20.jpg", alt: "Portrait - frame 20" },
      { type: "photo", src: "/work/portraits/21.jpg", alt: "Portrait - frame 21" },
      { type: "photo", src: "/work/portraits/22.jpg", alt: "Portrait - frame 22" },
      { type: "photo", src: "/work/portraits/23.jpg", alt: "Portrait - frame 23" },
      { type: "photo", src: "/work/portraits/24.jpg", alt: "Portrait - frame 24" },
      { type: "photo", src: "/work/portraits/25.jpg", alt: "Portrait - frame 25" },
      { type: "photo", src: "/work/portraits/26.jpg", alt: "Portrait - frame 26" },
      { type: "photo", src: "/work/portraits/27.jpg", alt: "Portrait - frame 27" },
      { type: "photo", src: "/work/portraits/28.jpg", alt: "Portrait - frame 28" },
      { type: "photo", src: "/work/portraits/29.jpg", alt: "Portrait - frame 29" },
      { type: "photo", src: "/work/portraits/30.jpg", alt: "Portrait - frame 30" },

    ],
  },
  {
    slug: "kibita-organic",
    title: "Kibita Organic",
    client: "Kibita Organic",
    cat: "Campaign",
    year: "2025",
    role: "Photography",
    description:
      "Brand imagery for Kibita Organic.",
    cover: "/work/kibita-organic/01.jpg",
    coverAlt: "Kibita Organic brand - cover frame",
    media: [
      { type: "photo", src: "/work/kibita-organic/02.jpg", alt: "Kibita Organic brand - frame 2" },
      { type: "photo", src: "/work/kibita-organic/03.jpg", alt: "Kibita Organic brand - frame 3" },
      { type: "photo", src: "/work/kibita-organic/04.jpg", alt: "Kibita Organic brand - frame 4" },

    ],
  },
];

/** Filter chips on /portfolio - derived, so a new category appears by itself. */
export const CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(WORK.map((w) => w.cat))),
];

export function getWork(slug: string): Work | undefined {
  return WORK.find((w) => w.slug === slug);
}

/** Previous / next project, wrapping around the end of the list. */
export function getSiblings(slug: string) {
  const i = WORK.findIndex((w) => w.slug === slug);
  if (i === -1) return null;
  return {
    prev: WORK[(i - 1 + WORK.length) % WORK.length],
    next: WORK[(i + 1) % WORK.length],
  };
}

/** Up to `limit` other projects, preferring the same category. */
export function getRelated(slug: string, limit = 3): Work[] {
  const current = getWork(slug);
  if (!current) return [];
  const others = WORK.filter((w) => w.slug !== slug);
  const sameCat = others.filter((w) => w.cat === current.cat).slice(0, limit);
  return sameCat.length ? sameCat : others.slice(0, limit);
}
