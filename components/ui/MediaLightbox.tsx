"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Viewfinder from "./Viewfinder";
import type { Media } from "@/data/work";

type Props = {
  items: Media[];
  /** Index currently on screen. Controlled by the parent. */
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
  title: string;
  client?: string;
};

/**
 * Full-screen gallery viewer: step through every frame in a project with the
 * arrows, the keyboard, or a swipe. Video entries render their embed instead.
 */
export default function MediaLightbox({
  items,
  index,
  onIndexChange,
  onClose,
  title,
  client,
}: Props) {
  const count = items.length;
  const item = items[index];

  const go = useCallback(
    (delta: number) => onIndexChange((index + delta + count) % count),
    [index, count, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);

    // Stop the page behind the overlay from scrolling.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  // Basic horizontal swipe for touch.
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const isVideo = item.type === "video";
  const caption = item.alt ?? [title, client].filter(Boolean).join(" — ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — image ${index + 1} of ${count}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col bg-[rgba(8,8,8,.96)]"
    >
      {/* header */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex shrink-0 items-center justify-between gap-4 px-5 py-4"
      >
        <div className="min-w-0">
          <div className="truncate text-[13px] tracking-[0.08em] text-paper">
            {title}
            {client ? ` — ${client}` : ""}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-5">
          <span className="text-[11px] tabular-nums tracking-[0.14em] text-stone-300">
            {index + 1} / {count}
          </span>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            autoFocus
            className="flex cursor-pointer border-none bg-transparent p-0 text-paper opacity-80 transition-opacity hover:opacity-100"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* stage */}
      <div
        className="relative min-h-0 flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-20"
        >
          {isVideo ? (
            item.src ? (
              <iframe
                key={item.src}
                src={item.src}
                title={`${title} — film`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full max-w-[1100px] border-none"
              />
            ) : (
              <div className="relative aspect-video w-full max-w-[1100px] bg-video">
                <div className="absolute inset-8 text-paper opacity-30">
                  <Viewfinder />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/60">
                    <Play size={22} className="ml-[3px] fill-paper text-paper" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-stone-200">
                    No film attached yet
                  </span>
                </div>
              </div>
            )
          ) : item.src ? (
            <div className="relative h-full w-full">
              <Image
                key={item.src}
                src={item.src}
                alt={caption}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="relative h-full w-full max-w-[900px] bg-tile" />
          )}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-paper/30 bg-ink/50 text-paper transition-colors hover:bg-ink/80 sm:left-5 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-paper/30 bg-ink/50 text-paper transition-colors hover:bg-ink/80 sm:right-5 sm:h-14 sm:w-14"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* caption + thumbnail rail */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="shrink-0 px-5 pb-5 pt-3"
      >
        {item.alt && (
          <p className="mx-auto mb-3 max-w-[820px] text-center text-xs leading-relaxed text-stone-300">
            {item.alt}
          </p>
        )}

        {count > 1 && (
          <div className="mx-auto flex max-w-full justify-start gap-1.5 overflow-x-auto sm:justify-center">
            {items.map((m, i) => {
              const thumb = m.type === "video" ? m.poster : m.src;
              return (
                <button
                  key={i}
                  onClick={() => onIndexChange(i)}
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === index}
                  className={`relative h-12 w-12 shrink-0 cursor-pointer overflow-hidden border bg-tile transition-opacity sm:h-14 sm:w-14 ${
                    i === index
                      ? "border-brass opacity-100"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  {thumb ? (
                    <Image src={thumb} alt="" fill sizes="56px" className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center">
                      <Play size={14} className="fill-paper text-paper" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
