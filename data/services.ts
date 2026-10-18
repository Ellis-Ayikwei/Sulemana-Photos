/** Packages and add-ons shown on /services. Prices are in Ghana cedis. */

export type Package = {
  name: string;
  price: string;
  duration: string;
  includes: string[];
  /** Renders the dark "Most Booked" treatment. Use on one package at most. */
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Portrait Session",
    price: "GHS 1,500",
    duration: "1.5 hours · studio or on-location",
    includes: [
      "1 outfit change",
      "20 fully edited images",
      "Private online gallery",
      "5-day delivery",
    ],
  },
  {
    name: "Wedding Day",
    price: "From GHS 8,500",
    duration: "Full-day coverage · up to 10 hours",
    includes: [
      "Ceremony + reception coverage",
      "150+ edited images",
      "3–5 min highlight film",
      "Online gallery + USB",
      "3-week delivery",
    ],
    featured: true,
  },
  {
    name: "Brand Campaign",
    price: "Custom quote",
    duration: "Half-day to multi-day",
    includes: [
      "Creative direction included",
      "Studio or on-location",
      "Product + lifestyle imagery",
      "Usage rights discussed upfront",
      "Rush delivery available",
    ],
  },
];

/**
 * The four disciplines teased on the home page. `icon` maps to a
 * lucide-react name in components/sections/Disciplines.tsx.
 */
export const DISCIPLINES = [
  {
    icon: "camera",
    name: "Portraits",
    copy: "Studio and on-location sittings - editorial, personal, and everything between.",
  },
  {
    icon: "aperture",
    name: "Brand Campaigns",
    copy: "Creative direction through to final frame, built around how the images will be used.",
  },
  {
    icon: "gem",
    name: "Product & Jewelry",
    copy: "Macro and on-model work lit to hold texture, scale and finish honestly.",
  },
  {
    icon: "film",
    name: "Weddings & Documentaries",
    copy: "Full-day coverage delivered as a print gallery alongside a highlight film.",
  },
] as const;

export const ADDONS = [
  "Second shooter",
  "Drone footage",
  "Extra hour of coverage",
  "Rush 48-hour delivery",
  "Printed album",
] as const;
