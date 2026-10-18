"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MasonryPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/masonry.css";
import FrameOverlay from "@/components/ui/FrameOverlay";
import { imageSize } from "@/data/images";
import { CATEGORIES, WORK, type Work } from "@/data/work";

/** Carries the project through to the render callbacks. */
type WorkPhoto = Photo & { work: Work };

/**
 * Masonry portfolio.
 *
 * Column count and tile heights come from each cover's real aspect ratio
 * (via `data/image-sizes.json`), so nothing is cropped - a landscape frame
 * stays landscape. `react-photo-album` computes the layout; the render
 * callbacks swap in `next/image` for optimisation and layer the studio's
 * own frame chrome on top.
 */
export default function PortfolioGrid() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All" ? WORK : WORK.filter((w) => w.cat === category);

  const photos: WorkPhoto[] = filtered.map((w) => {
    const { width, height } = imageSize(w.cover);
    return {
      key: w.slug,
      src: w.cover ?? "",
      width,
      height,
      alt: w.coverAlt ?? `${w.title} - ${w.client}`,
      href: `/portfolio/${w.slug}`,
      label: `${w.title} - ${w.client}`,
      work: w,
    };
  });

  return (
    <>
      <div className="mx-auto max-w-[1100px] px-7 pb-8">
        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={active}
                className={`cursor-pointer border border-ink px-[18px] py-[9px] text-[11px] uppercase tracking-[0.12em] ${
                  active ? "bg-ink text-paper" : "bg-transparent text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-1">
        <MasonryPhotoAlbum
          photos={photos}
          spacing={4}
          columns={(width) => (width < 640 ? 1 : width < 1000 ? 2 : 3)}
          // Keeps the server render close to the client one, so the grid
          // does not visibly reflow on hydration.
          defaultContainerWidth={1400}
          render={{
            wrapper: ({ className, ...rest }) => (
              <div
                {...rest}
                className={`${className ?? ""} group overflow-hidden bg-tile`}
              />
            ),
            link: ({ href, className, ...rest }) => (
              <Link
                href={href}
                {...rest}
                className={`${className ?? ""} block no-underline`}
              />
            ),
            image: (props, { photo }) => (
              <Image
                src={photo.src}
                alt={photo.alt ?? ""}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                className={`${props.className ?? ""} transition-transform duration-[600ms] ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.03]`}
              />
            ),
            extras: (_, { photo }) => (
              <div className="pointer-events-none absolute inset-0">
                <FrameOverlay
                  title={photo.work.title}
                  client={photo.work.client}
                  cat={photo.work.cat}
                  hasVideo={photo.work.media.some((m) => m.type === "video")}
                  interactive
                />
              </div>
            ),
          }}
        />
      </div>

      {filtered.length === 0 && (
        <p className="px-7 py-10 text-stone-500">No frames in this category yet.</p>
      )}
    </>
  );
}
