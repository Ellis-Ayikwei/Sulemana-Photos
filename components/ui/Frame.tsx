"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Grain from "./Grain";
import FrameOverlay from "./FrameOverlay";
import type { Media } from "@/data/work";

export type FrameProps = {
  title?: string;
  client?: string;
  cat?: string;
  /**
   * Photo for this frame. When omitted the gradient + grain placeholder
   * renders instead, so the layout is identical either way.
   */
  src?: string;
  alt?: string;
  /** Taller 4:5 tile. Ignored when `full`. */
  big?: boolean;
  /** Fill the parent box instead of holding its own aspect ratio. */
  full?: boolean;
  /** Navigate on click. */
  href?: string;
  /** Handle the click in JS (used to open the lightbox). */
  onOpen?: () => void;
  /** Drives the "Photo + Film" badge on project tiles. */
  media?: Media[];
  /** Renders as a film tile: play button + "Film" badge. */
  videoTile?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Frame({
  title,
  client,
  cat,
  src,
  alt,
  big = false,
  full = false,
  href,
  onOpen,
  media,
  videoTile = false,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw",
}: FrameProps) {
  // Only the viewfinder needs JS - it changes SVG geometry, not just style.
  // Everything else hangs off `group-hover`.
  const [hover, setHover] = useState(false);

  const hasVideo = videoTile || (media ?? []).some((m) => m.type === "video");
  const interactive = Boolean(href || onOpen);

  const box = [
    "group relative m-0 block overflow-hidden border-none bg-tile p-0 text-left appearance-none",
    full ? "h-full w-full" : big ? "aspect-[4/5]" : "aspect-square",
    interactive ? "cursor-pointer" : "cursor-default",
    "focus-visible:outline-2 focus-visible:outline-paper focus-visible:-outline-offset-[6px]",
  ].join(" ");

  const inner = (
    <>
      {src ? (
        <Image
          src={src}
          alt={alt ?? [title, client].filter(Boolean).join(" - ")}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <Grain />
      )}

      <FrameOverlay
        title={title}
        client={client}
        cat={cat}
        hasVideo={hasVideo}
        videoTile={videoTile}
        tight={hover}
        interactive={interactive}
        big={big}
      />
    </>
  );

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
  };

  if (href) {
    return (
      <Link href={href} className={box} {...handlers}>
        {inner}
      </Link>
    );
  }

  if (onOpen) {
    return (
      <button type="button" onClick={onOpen} className={box} {...handlers}>
        {inner}
      </button>
    );
  }

  return (
    <div className={box} {...handlers}>
      {inner}
    </div>
  );
}
