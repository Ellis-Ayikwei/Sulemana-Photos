"use client";

import { useState } from "react";
import Frame from "@/components/ui/Frame";
import MediaLightbox from "@/components/ui/MediaLightbox";
import type { Work } from "@/data/work";

/**
 * A project's own media - stills and film from the same shoot.
 * Every tile opens the lightbox, which then steps through the whole gallery.
 */
export default function ProjectGallery({ work }: { work: Work }) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  if (!work.media.length) return null;

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-1 px-1">
        {work.media.map((m, i) => {
          const isVideo = m.type === "video";
          return (
            <div key={i} className="aspect-[4/5]">
              <Frame
                title={isVideo ? `${work.title} - Film` : undefined}
                cat={isVideo ? work.cat : undefined}
                client={isVideo ? work.client : undefined}
                src={isVideo ? m.poster : m.src}
                alt={m.alt ?? `${work.title} - ${work.client}`}
                full
                videoTile={isVideo}
                onOpen={() => setOpenAt(i)}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>

      {openAt !== null && (
        <MediaLightbox
          items={work.media}
          index={openAt}
          onIndexChange={setOpenAt}
          onClose={() => setOpenAt(null)}
          title={work.title}
          client={work.client}
        />
      )}
    </>
  );
}
