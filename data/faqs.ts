/** Booking FAQs, shown at the bottom of /contact. */

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, 3–6 months ahead is ideal, especially for peak season (Nov–Jan). Portrait sessions and brand shoots can often be booked 1–2 weeks out, depending on the calendar.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes - a non-refundable 30% deposit secures your date, with the balance due before final delivery. Payment plans are available for wedding packages.",
  },
  {
    q: "Do you travel outside Accra?",
    a: "Yes, across Ghana and internationally. Travel fees apply outside the Greater Accra region and are quoted upfront before booking.",
  },
  {
    q: "What's the turnaround time for edited images?",
    a: "5 business days for portrait and brand sessions, up to 3 weeks for full wedding galleries. Rush delivery is available as an add-on.",
  },
  {
    q: "Can I get the raw, unedited files?",
    a: "Raw files aren't included by default - every delivered image is retouched and color-graded to match the studio's style. Raw files can be discussed for select brand contracts.",
  },
];
