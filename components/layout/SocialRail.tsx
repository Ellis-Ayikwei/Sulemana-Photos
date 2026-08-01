import { Facebook, Instagram, Twitter } from "lucide-react";
import { site } from "@/data/site";

/** Fixed social tab pinned to the right edge. Hidden on small screens. */
export default function SocialRail() {
  return (
    <div className="fixed right-0 top-1/2 z-[45] hidden -translate-y-1/2 flex-col gap-1 rounded-l-lg bg-ink/70 px-2 py-3.5 backdrop-blur-sm nav:flex">
      <a
        href={site.social.facebook}
        aria-label="Facebook"
        className="flex p-2 text-white opacity-85 transition-opacity hover:opacity-100"
      >
        <Facebook size={19} />
      </a>
      <a
        href={site.social.instagram}
        aria-label="Instagram"
        className="flex p-2 text-white opacity-85 transition-opacity hover:opacity-100"
      >
        <Instagram size={19} />
      </a>
      <a
        href={site.social.x}
        aria-label="X"
        className="flex p-2 text-white opacity-85 transition-opacity hover:opacity-100"
      >
        <Twitter size={19} />
      </a>
      {/* <a
        href={site.social.tiktok}
        aria-label="TikTok"
        className="flex p-2 text-white opacity-85 transition-opacity hover:opacity-100"
      >
        <TikTok size={19} />
      </a> */}
    </div>
  );
}
