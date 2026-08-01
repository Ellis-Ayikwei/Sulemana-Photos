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
 * ── NOTE ON CLIENT CREDITS ─────────────────────────────────────────────────
 * Sue Shimmers and Samsung Ghana are credited from branding visible in the
 * frames themselves. `in-good-company` and `working-light` carry generic
 * credits because the shots contain no identifying marks - set the real
 * client names before launch.
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
    slug: "line-light",
    title: "Line & Light",
    client: "Samsung Ghana",
    cat: "Campaign",
    year: "2024",
    role: "Creative Direction, Photography",
    description:
      "A lifestyle campaign built on a simple idea: technology should feel human. Rather than shoot the device in isolation, we put it in the middle of ordinary good moments - a ride through a garden, a selfie between friends, a couple messing about on a studio backdrop. Each set was colour-blocked to a single saturated tone so the product reads instantly without ever being the loudest thing in the frame.",
    cover: "/work/line-light/01.jpg",
    coverAlt:
      "Woman in a yellow dress on a yellow bicycle beside a flower wall, holding a phone",
    media: [
      { type: "photo", src: "/work/line-light/02.jpg", alt: "Woman in a yellow dress photographing with a phone in a garden set" },
      { type: "photo", src: "/work/line-light/03.jpg", alt: "Full-length portrait in a yellow dress holding a phone at arm's length" },
      { type: "photo", src: "/work/line-light/04.jpg", alt: "Woman in a yellow dress standing with a bicycle and flowers" },
      { type: "photo", src: "/work/line-light/05.jpg", alt: "Studio portrait against a red backdrop, phone held overhead" },
      { type: "photo", src: "/work/line-light/06.jpg", alt: "Two friends on a red sofa taking a selfie together" },
      { type: "photo", src: "/work/line-light/07.jpg", alt: "Couple on a pink backdrop with a heart balloon, taking a selfie" },
    ],
  },
  {
    slug: "quiet-gold",
    title: "Quiet Gold",
    client: "Sue Shimmers",
    cat: "Product & Jewelry",
    year: "2025",
    role: "Photography, Art Direction",
    description:
      "A studio product series built around restraint - gold chains, stone settings and the packaging they arrive in, lit to hold detail without competing for it. Every frame was shot to isolate texture: the bevel of a link, the nap of a jewelry pouch, the way light sits differently on brushed versus polished gold.",
    cover: "/work/quiet-gold/01.jpg",
    coverAlt:
      "Sue Shimmers gift box with a monogram pendant necklace and black ribbon",
    media: [
      { type: "photo", src: "/work/quiet-gold/02.jpg", alt: "Pendant necklace in an open box beside branded jewelry boxes and a pouch" },
      { type: "photo", src: "/work/quiet-gold/03.jpg", alt: "Two gold circle-pendant necklaces on white fabric" },
      { type: "photo", src: "/work/quiet-gold/04.jpg", alt: "Circle pendants set with coloured gemstones on white fabric" },
      { type: "photo", src: "/work/quiet-gold/05.jpg", alt: "Amethyst and aquamarine pendant necklaces on white blocks" },
      { type: "photo", src: "/work/quiet-gold/06.jpg", alt: "Rose gold pendant with a single stone on soft white fabric" },
      { type: "photo", src: "/work/quiet-gold/07.jpg", alt: "Tray of earrings and pendants laid out in a wooden case" },
      { type: "photo", src: "/work/quiet-gold/08.jpg", alt: "Jewelry pouch, certificate card and gold hoop earrings, flat lay" },
    ],
  },
  {
    slug: "held-close",
    title: "Held Close",
    client: "Sue Shimmers",
    cat: "Portrait",
    year: "2025",
    role: "Photography",
    description:
      "An intimate portrait sitting exploring closeness - hands, jewelry and expression shot tight enough to remove the distance between subject and viewer. Warm seamless, minimal retouching, and a lot of the frames taken in the unposed seconds between takes.",
    cover: "/work/held-close/01.jpg",
    coverAlt:
      "Close portrait in profile, a ringed hand resting against the collarbone",
    media: [
      { type: "photo", src: "/work/held-close/02.jpg", alt: "Portrait of a smiling woman, hands framing her face, wearing a fine chain" },
      { type: "photo", src: "/work/held-close/03.jpg", alt: "Woman in profile holding a Sue Shimmers box against a tan backdrop" },
      { type: "photo", src: "/work/held-close/04.jpg", alt: "Hand with stacked rings holding a tower of ribboned jewelry boxes" },
      { type: "photo", src: "/work/held-close/05.jpg", alt: "Layered gold coin pendant worn over an open collar" },
      { type: "photo", src: "/work/held-close/06.jpg", alt: "Portrait with a raised hand, layered necklaces against a tan backdrop" },
    ],
  },
  {
    slug: "worn-in-gold",
    title: "Worn In",
    client: "Sue Shimmers",
    cat: "Product & Jewelry",
    year: "2025",
    role: "Photography, Art Direction",
    description:
      "The companion catalog to Quiet Gold, moved off the table and onto the body. Chains, key pendants and watches shot on skin and knitwear, close enough that scale reads honestly - so a customer knows exactly how heavy a link sits before it ever arrives.",
    cover: "/work/worn-in-gold/01.jpg",
    coverAlt: "Gold curb chain worn over a black turtleneck, shot close",
    media: [
      { type: "photo", src: "/work/worn-in-gold/02.jpg", alt: "Key pendant on a fine chain worn at the collarbone" },
      { type: "photo", src: "/work/worn-in-gold/03.jpg", alt: "Second key pendant, worn against a black neckline" },
      { type: "photo", src: "/work/worn-in-gold/04.jpg", alt: "Gold chain and signet ring worn with a black turtleneck" },
      { type: "photo", src: "/work/worn-in-gold/05.jpg", alt: "Layered chains with a cross pendant over a black turtleneck" },
      { type: "photo", src: "/work/worn-in-gold/06.jpg", alt: "Two models wearing layered gold chains, shot against white" },
      { type: "photo", src: "/work/worn-in-gold/07.jpg", alt: "Pair portrait, gold chains and a cross pendant" },
      { type: "photo", src: "/work/worn-in-gold/08.jpg", alt: "Couple embracing, wrist watches and rings in the foreground" },
      { type: "photo", src: "/work/worn-in-gold/09.jpg", alt: "Close crop on paired watches and rings" },
    ],
  },
  {
    slug: "in-good-company",
    title: "In Good Company",
    client: "Studio Session",
    cat: "Portrait",
    year: "2025",
    role: "Photography, Art Direction",
    description:
      "A run of studio sittings built on saturated seamless and very little direction. Couples, groups of friends and solo sitters, each given a colour to stand against and enough room to behave like themselves - the frames that landed are almost all reactions rather than poses.",
    cover: "/work/in-good-company/01.jpg",
    coverAlt: "Three women in coral, orange and pink against a pink backdrop",
    media: [
      { type: "photo", src: "/work/in-good-company/02.jpg", alt: "Couple in matching blue against a teal backdrop" },
      { type: "photo", src: "/work/in-good-company/03.jpg", alt: "Woman in red blowing a kiss amid falling heart balloons" },
      { type: "photo", src: "/work/in-good-company/04.jpg", alt: "Three friends laughing over a phone on a pink backdrop" },
      { type: "photo", src: "/work/in-good-company/05.jpg", alt: "Group of three leaning together against a pink backdrop" },
      { type: "photo", src: "/work/in-good-company/06.jpg", alt: "Two women against a teal backdrop, one seated" },
    ],
  },
  {
    slug: "working-light",
    title: "Working Light",
    client: "Brand Campaign",
    cat: "Campaign",
    year: "2024",
    role: "Photography",
    description:
      "A business-lifestyle set shot entirely in available light across Accra - a balcony, a coffee shop, a shopfront counter. The brief was for imagery that could sit in a deck or on a landing page without looking like stock, so everything was shot with real working spaces and natural reactions rather than a studio build.",
    cover: "/work/working-light/01.jpg",
    coverAlt: "Three colleagues gathered around a tablet at a shop counter",
    media: [
      { type: "photo", src: "/work/working-light/02.jpg", alt: "Man working on a tablet outdoors" },
      { type: "photo", src: "/work/working-light/03.jpg", alt: "Woman reading a tablet on a sunlit balcony" },
      { type: "photo", src: "/work/working-light/04.jpg", alt: "Woman working on a tablet at a cafe window" },
      { type: "photo", src: "/work/working-light/05.jpg", alt: "Group of three collaborating over a tablet" },
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
