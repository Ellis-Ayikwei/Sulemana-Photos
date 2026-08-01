import type { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Label from "@/components/ui/Label";
import { site } from "@/data/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquire about a campaign, brand film or portrait sitting. Based in Accra, Ghana; available across Ghana and internationally.",
};

export default function ContactPage() {
  return (
    <section className="px-7 pb-24 pt-[72px]">
      <div className={`${container} grid gap-12 nav:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <Label>Contact</Label>
          <h1 className="mb-5 max-w-[480px] font-serif text-[clamp(30px,5vw,48px)]">
            Let&rsquo;s frame something worth remembering.
          </h1>
          <p className="mb-8 max-w-[420px] text-[15px] leading-[1.7] text-stone-600">
            Whether it&rsquo;s a campaign, a brand film, or a portrait sitting —
            tell me a little about the story you want told, and I&rsquo;ll get
            back to you within two business days.
          </p>

          <div className="grid gap-[18px]">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-brass" />
              <span className="text-sm">{site.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-brass" />
              <a href={`mailto:${site.email}`} className="text-sm no-underline">
                {site.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-brass" />
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-sm no-underline"
              >
                {site.phone}
              </a>
            </div>
            <div className="mt-2 flex gap-3.5">
              <a href={site.social.facebook} className="flex text-ink" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={site.social.instagram} className="flex text-ink" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="mx-auto mt-[72px] max-w-[760px] border-t border-ink/[0.12] px-7 pt-12">
        <Label>Frequently Asked</Label>
        <h2 className="mb-6 font-serif text-[28px]">Before you book.</h2>
        <FAQ />
      </div>
    </section>
  );
}
