import { ArrowUpRight, Film, Play } from "lucide-react";
import Viewfinder from "./Viewfinder";

/**
 * The chrome that sits over a photograph: scrim, viewfinder brackets,
 * caption and hover affordances.
 *
 * Shared by `Frame` (fixed-ratio tiles) and the masonry portfolio, so both
 * carry identical treatment. Expects a `relative` positioned parent with
 * the `group` class for the hover states.
 */
export default function FrameOverlay({
  title,
  client,
  cat,
  hasVideo = false,
  videoTile = false,
  tight = false,
  interactive = false,
  big = false,
}: {
  title?: string;
  client?: string;
  cat?: string;
  hasVideo?: boolean;
  /** Film tile: shows the play button and a "Film" badge. */
  videoTile?: boolean;
  /** Pulls the viewfinder brackets inward — the hover state. */
  tight?: boolean;
  /** Shows the corner arrow affordance. */
  interactive?: boolean;
  /** Larger title, for the 4:5 tiles. */
  big?: boolean;
}) {
  return (
    <>
      {/* bottom scrim, so overlaid type stays legible on any image */}
      <div className="absolute inset-0 bg-scrim" />

      <div className="text-paper opacity-[0.72] transition-opacity duration-300 group-hover:opacity-100">
        <Viewfinder tight={tight} />
      </div>

      {hasVideo && (
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 border border-paper/40 bg-ink/55 px-[9px] py-1 text-[10px] uppercase tracking-[0.12em] text-paper">
          <Film size={11} /> {videoTile ? "Film" : "Photo + Film"}
        </div>
      )}

      {videoTile && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-paper/70 bg-ink/35 transition-transform duration-300 group-hover:scale-[1.08]">
            <Play size={18} className="ml-0.5 fill-paper text-paper" />
          </div>
        </div>
      )}

      {title && (
        <div className="absolute bottom-4 left-[18px] right-[18px] text-paper">
          {cat && (
            <div className="mb-1 text-[10px] uppercase tracking-[0.16em] text-brass-light">
              {cat}
            </div>
          )}
          <div className={`font-serif leading-[1.15] ${big ? "text-2xl" : "text-lg"}`}>
            {title}
          </div>
          {client && <div className="mt-0.5 text-xs text-stone-200">{client}</div>}
        </div>
      )}

      {interactive && (
        <div className="absolute right-3.5 top-3.5 flex h-[26px] w-[26px] scale-[0.85] items-center justify-center rounded-full border border-paper/55 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight size={13} className="text-paper" />
        </div>
      )}
    </>
  );
}
