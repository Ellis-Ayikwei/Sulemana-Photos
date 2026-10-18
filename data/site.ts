/** Global site config - nav, studio details, social links, client roster. */

export const site = {
  name: "Sulemana Photos",
  wordmark: { first: "Sulemana", second: "PHOTOS" },
  /**
   * The script logo mark in the header - white knockout on transparent,
   * auto-trimmed from the supplied artwork (kept at brand/logo-source.png).
   * Set to null to fall back to the typographic lockup.
   */
  logo: "/brand/logo.png" as string | null,
  logoSize: { width: 1126, height: 663 },
  tagline:
    "Creative direction, photography and cinematography in Accra, Ghana.",
  /** Used for metadata + sitemap. Change to the real domain before launch. */
  url: "https://sulemanaphotos.com",
  email: "hello@sulemanaphotos.com",
  phone: "+233 20 189 1083",
  location: "Accra, Ghana",
  social: {
    instagram: "#",
    facebook: "#",
    x: "#",
    tiktok: "#",
  },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const CLIENTS = [
  "Samsung Ghana",
  "Sue Shimmers",
  "Iserd Ltd",
  "Nexans Cable Metal",
  "Kibita Organic",
] as const;
