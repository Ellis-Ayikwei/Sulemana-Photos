import fs from "node:fs";
import path from "node:path";
import HeroRotator from "./HeroRotator";
import { HERO, type HeroSlide } from "@/data/home";

const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

/** Every image in public/hero/<folder>, in filename order. */
function readSlides(folder: string): HeroSlide[] {
  const dir = path.join(process.cwd(), "public", "hero", folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE.test(f))
    .sort()
    .map((f) => {
      const words = f.replace(IMAGE, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
      return {
        src: `/hero/${folder}/${encodeURIComponent(f)}`,
        alt: words ? words[0].toUpperCase() + words.slice(1) : "",
      };
    });
}

/**
 * Full-bleed two-frame hero, sized to fill the viewport below the header.
 * Deliberately typeless - the work carries the fold on its own. Images are
 * read from public/hero/ at build time; see `HERO` in data/home.ts.
 */
export default function Hero() {
  const panels = HERO.map((p) => ({ ...p, slides: readSlides(p.folder) }));
  return <HeroRotator panels={panels} />;
}
