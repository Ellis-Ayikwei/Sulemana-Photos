import { Facebook, Instagram } from "lucide-react";
import Label from "@/components/ui/Label";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-ink px-7 pb-7 pt-12 text-stone-200">
      <div className="mx-auto flex max-w-[1100px] flex-wrap justify-between gap-8">
        <div>
          <div className="mb-2 font-serif text-xl italic text-paper">{site.name}</div>
          <p className="max-w-[280px] text-[13px] leading-relaxed text-stone-300">
            {site.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <Label>Studio</Label>
            <div className="text-[13px] leading-loose text-stone-200">
              {site.location}
              <br />
              <a href={`mailto:${site.email}`} className="no-underline">
                {site.email}
              </a>
              <br />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="no-underline">
                {site.phone}
              </a>
            </div>
          </div>

          <div>
            <Label>Follow</Label>
            <div className="flex gap-3.5">
              <a href={site.social.facebook} className="flex text-paper" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={site.social.instagram} className="flex text-paper" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
<div className="flex flex-col gap-2">
      <div className="mx-auto text-[11px] text-stone-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
      <div className="mx-auto text-[11px] text-stone-500">
        Built by <a href="https://www.tradehut.shop/" className="text-paper">Tradehut Technologies Ghana</a>
      </div>
      </div>
    </footer>
  );
}
