import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Frame from "@/components/ui/Frame";
import Label from "@/components/ui/Label";
import Meta from "@/components/ui/Meta";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import { WORK, getRelated, getSiblings, getWork } from "@/data/work";
import { btn, container } from "@/lib/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Project not found" };

  return {
    title: work.title,
    description: work.description.slice(0, 155),
    openGraph: {
      title: `${work.title} - ${work.client}`,
      description: work.description.slice(0, 155),
      images: work.cover ? [work.cover] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const siblings = getSiblings(slug)!;
  const related = getRelated(slug);
  const hasFilm = work.media.some((m) => m.type === "video");

  return (
    <article>
      <div className={`${container} px-7 pt-10`}>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-stone-600 no-underline"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>

      {/* full-bleed project hero */}
      <div className="mt-6 h-[75vh] min-h-[360px]">
        <Frame
          title={work.title}
          client={work.client}
          cat={work.cat}
          src={work.cover}
          alt={work.coverAlt}
          media={work.media}
          full
          priority
          sizes="100vw"
        />
      </div>

      <div className={`${container} px-7 pt-12`}>
        <div className="grid gap-10 nav:grid-cols-[1.4fr_1fr]">
          <div>
            <Label>{work.cat}</Label>
            <h1 className="mb-5 max-w-[620px] font-serif text-[clamp(30px,5vw,52px)]">
              {work.title}
            </h1>
            <p className="max-w-[600px] text-base leading-[1.8] text-stone-700">
              {work.description}
            </p>
          </div>

          <div className="grid grid-cols-[repeat(2,minmax(120px,1fr))] content-start gap-6">
            <Meta label="Client" value={work.client} />
            <Meta label="Year" value={work.year} />
            <Meta label="Role" value={work.role} />
            <Meta label="Category" value={work.cat} />
          </div>
        </div>
      </div>

      {/* this project's own media */}
      {work.media.length > 0 && (
        <>
          <div className={`${container} mt-14 px-7`}>
            <div className="mb-4 flex items-center gap-2">
              <Label>Gallery</Label>
              {hasFilm && (
                <span className="mb-3.5 ml-1 text-[11px] text-stone-500">
                  Stills and film from the same day
                </span>
              )}
            </div>
          </div>
          <ProjectGallery work={work} />
        </>
      )}

      {/* cross-links to other projects */}
      <div className={`${container} mt-16 px-7`}>
        <Label>More Work</Label>
      </div>
      <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-1 px-1">
        {related.map((w) => (
          <div key={w.slug} className="aspect-[10/3]">
            <Frame
              title={w.title}
              client={w.client}
              cat={w.cat}
              src={w.cover}
              alt={w.coverAlt}
              media={w.media}
              full
              href={`/portfolio/${w.slug}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* prev / next */}
      <nav className="mt-14 border-t border-ink/[0.12]">
        <div className={`${container} grid grid-cols-2`}>
          <Link
            href={`/portfolio/${siblings.prev.slug}`}
            className="flex flex-col gap-1.5 border-r border-ink/[0.12] p-7 text-left no-underline"
          >
            <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-500">
              <ArrowLeft size={12} /> Previous
            </span>
            <span className="font-serif text-xl">{siblings.prev.title}</span>
          </Link>

          <Link
            href={`/portfolio/${siblings.next.slug}`}
            className="flex flex-col items-end gap-1.5 p-7 text-right no-underline"
          >
            <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-500">
              Next <ArrowUpRight size={12} />
            </span>
            <span className="font-serif text-xl">{siblings.next.title}</span>
          </Link>
        </div>
      </nav>

      <div className="px-7 pb-24 pt-14 text-center">
        <p className="mb-4 text-[15px] text-stone-600">
          Have a similar project in mind?
        </p>
        <Link href="/contact" className={btn.solid}>
          Start a Conversation
        </Link>
      </div>
    </article>
  );
}
