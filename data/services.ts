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
    name: "Studio Portrait",
    price: "GHS 1,500",
    duration: "2 hours · studio",
    includes: ["3 outfit changes", "12 fully edited images"],
  },
  {
    name: "On-Location Portrait",
    price: "GHS 2,000",
    duration: "2 hours · on-location",
    includes: [
      "3 outfit changes",
      "15 fully edited images",
      "Location fee covered by client",
    ],
  },
  {
    name: "Engagement / Wedding Day",
    price: "Price on request",
    duration: "2 days' coverage · up to 10 hours",
    includes: ["Ceremony + reception coverage", "Edited images on USB drive"],
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
