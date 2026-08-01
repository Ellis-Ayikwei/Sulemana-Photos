import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { WORK } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/portfolio", "/services", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projects = WORK.map((w) => ({
    url: `${site.url}/portfolio/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
