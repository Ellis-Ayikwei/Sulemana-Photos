/** Placeholder testimonials - swap with real client quotes before launch. */

export type Testimonial = {
  quote: string;
  name: string;
  org: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "He understood the brief before we finished explaining it. The final campaign images felt like our brand, not a generic shoot.",
    name: "Marketing Lead",
    org: "Samsung Ghana",
  },
  {
    quote:
      "Every piece felt like it belonged in a jewelry box, not a product catalog. Our sales pages have never looked this good.",
    name: "Founder",
    org: "Sue Shimmers",
  },
  {
    quote:
      "We got a highlight film we still watch a year later, and a print gallery our parents actually display. Worth every cedi.",
    name: "Afia & Kwabena",
    org: "Wedding Client",
  },
];

/**
 * Set to false once the quotes above are real - hides the
 * "placeholder quotes" disclaimer in the Testimonials section.
 */
export const TESTIMONIALS_ARE_PLACEHOLDER = true;
