# Sulemana Photos

Creative direction, photography and cinematography in Accra, Ghana.

A Next.js 15 (App Router) site - statically generated, no database, no backend.
All content lives in typed files under [`data/`](data/), so copy and photography
can be updated without touching a component.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Running `npm run build` while `npm run dev` is up makes both processes fight
> over `.next`, and the build dies with confusing `ENOENT` errors part-way
> through. Build to a separate directory instead:
>
> ```bash
> NEXT_DIST_DIR=.next-build npm run build     # PowerShell: $env:NEXT_DIST_DIR=".next-build"
> ```

---

## Pages

| Route                | File                                                   | Notes                                     |
| -------------------- | ------------------------------------------------------ | ----------------------------------------- |
| `/`                  | [app/page.tsx](app/page.tsx)                             | Nine bands - see below                    |
| `/about`             | [app/about/page.tsx](app/about/page.tsx)                 | Bio + stats panel                         |
| `/portfolio`         | [app/portfolio/page.tsx](app/portfolio/page.tsx)         | Full-bleed grid with category filter      |
| `/portfolio/[slug]`  | [app/portfolio/[slug]/page.tsx](app/portfolio/%5Bslug%5D/page.tsx) | Project detail, gallery, prev/next |
| `/services`          | [app/services/page.tsx](app/services/page.tsx)           | Packages, add-ons, testimonials           |
| `/contact`           | [app/contact/page.tsx](app/contact/page.tsx)             | Enquiry form + FAQ                        |

Every project page is pre-rendered at build time from `WORK`, so adding a
project to the data file is all it takes to get a new route.

## Where the content lives

| File                                             | Controls                                        |
| ------------------------------------------------ | ----------------------------------------------- |
| [data/site.ts](data/site.ts)                      | Nav, studio email/phone/location, socials, client roster |
| [data/work.ts](data/work.ts)                      | Every portfolio project and its images          |
| [data/home.ts](data/home.ts)                      | The two hero frames + homepage headline copy    |
| [data/about.ts](data/about.ts)                    | Bio paragraphs + the cut-out portrait           |
| [data/services.ts](data/services.ts)              | Packages, prices, add-ons                       |
| [data/testimonials.ts](data/testimonials.ts)      | Client quotes                                   |
| [data/faqs.ts](data/faqs.ts)                      | Booking FAQ                                     |
| [lib/palette.ts](lib/palette.ts)                  | Colours + gradients - feeds the Tailwind theme  |
| [lib/ui.ts](lib/ui.ts)                            | Shared class strings (buttons, inputs, container) |
| [app/globals.css](app/globals.css)                | Tailwind directives, CSS variables, focus states |

---

## Adding photography

Images are optional everywhere. A frame with no `src` renders the gradient +
viewfinder placeholder at exactly the same size, so the layout never breaks
while you're part-way through a shoot.

> After adding files, run `./scripts/measure-images.ps1` so the masonry layout
> knows their aspect ratios.

**1. Resize first.** Camera originals are 25–30 MB; the web wants ~500 KB.
Target a long edge of **2400px at JPEG quality 82**. The script used for the
current set is kept at [`scripts/optimize-images.ps1`](scripts/optimize-images.ps1):

```powershell
./scripts/optimize-images.ps1 -Source "C:\path\to\originals" -Slug "new-project"
```

**2. Drop the files** into `public/work/<slug>/`.

**3. Point the data at them** in [data/work.ts](data/work.ts):

```ts
{
  slug: "new-project",
  title: "New Project",
  client: "Client Name",
  cat: "Portrait",          // a new value here adds a new filter chip
  year: "2026",
  role: "Photography",
  description: "…",
  cover: "/work/new-project/01.jpg",
  coverAlt: "Short description of the cover frame",
  media: [
    { type: "photo", src: "/work/new-project/02.jpg", alt: "…" },
    { type: "video", src: "https://player.vimeo.com/video/123456", poster: "/work/new-project/03.jpg" },
  ],
}
```

`alt` text is worth writing - it is what screen readers announce and what
search engines index against the image.

### Video

A `media` entry of `type: "video"` renders a film tile with a play button and
opens the lightbox on click. `src` must be an **embed** URL
(`https://www.youtube.com/embed/ID` or `https://player.vimeo.com/video/ID`),
not the page URL. `poster` is the still shown on the tile beforehand.

Leave `src` off and the lightbox shows a placeholder panel instead - useful for
staging a project before the edit is delivered.

---

## Before launch

- [ ] **Wire up the contact form.** It currently shows the confirmation panel
      without delivering anything - see the comment at the top of
      [components/contact/ContactForm.tsx](components/contact/ContactForm.tsx).
      The direct email link on the form is the only live channel until then.
- [ ] **Set the real domain** (`site.url`) - it feeds metadata, OG tags and the sitemap.
- [ ] **Swap the testimonials** in [data/testimonials.ts](data/testimonials.ts) for
      real quotes, then set `TESTIMONIALS_ARE_PLACEHOLDER = false` to hide the
      disclaimer.
- [ ] **Confirm the client credits.** `in-good-company` and `working-light` carry
      generic credits because those frames contain no identifying branding.
- [ ] **Add a portrait of Sulemana** for the About page - it currently borrows a
      frame from the *Held Close* sitting (see `PORTRAIT` in
      [app/about/page.tsx](app/about/page.tsx)).

## Notes

### Styling

Tailwind CSS v3. [lib/palette.ts](lib/palette.ts) is the single source of
truth for colour and is imported directly by
[tailwind.config.ts](tailwind.config.ts), so the palette is never duplicated.

| Utility | Value |
| ------- | ----- |
| `ink` | `#121212` - near-black, primary text |
| `paper` | `#f3efe6` - warm ivory background |
| `brass` / `brass-light` | `#b08d57` / `#e4c98f` - the accent |
| `stone-100` … `stone-700` | warm neutral ramp, lightest → darkest |
| `nav-ink` / `nav-panel` / `nav-wordmark` | the header's two-tone split |
| `accent` | `#7c2d20` - the hero's left stripe |

Hairlines use opacity modifiers rather than their own tokens:
`border-ink/[0.12]`, `border-paper/[0.18]`.

Placeholder gradients are `backgroundImage` utilities - `bg-tile`, `bg-scrim`,
`bg-studio`, `bg-hero-a` - also defined in `lib/palette.ts`.

**`nav:` is the one custom breakpoint (900px)**, where the header splits, the
hero goes side-by-side, and the About layouts go horizontal. Use it rather
than `md:`/`lg:` for anything tied to that switch.

`--nav-h` is a CSS variable (in `globals.css`) exposed to Tailwind as the
`nav` spacing value, so `h-nav` and `h-[calc(100svh-var(--nav-h))]` both work.

`globals.css` holds only what utilities cannot express: the variables, the
global focus ring, and the reduced-motion block. There are no component
classes in it.

The one remaining inline style is `Grain`'s `opacity`, which is a runtime
prop and so cannot be a static class.
- **The design source PDFs are gitignored** - they are ~2 GB each, well past
  GitHub's 100 MB per-file limit. So are the camera originals (`TransferNow-*/`).

### Brand assets

| File                      | Used for                                                        |
| ------------------------- | --------------------------------------------------------------- |
| `public/brand/logo.png`   | The header mark. Auto-trimmed of transparent padding, 1126×663.   |
| `public/brand/logo-source.png` | The original artwork as supplied (1801×973, lots of padding). |
| `public/icon.png`         | Favicon - the signature glyph on black, 512×512.                  |
| `public/apple-icon.png`   | Apple touch icon, 180×180.                                        |

To swap the logo, replace `public/brand/logo.png` and update `logoSize` in
[data/site.ts](data/site.ts) to the new intrinsic dimensions. Setting
`site.logo` to `null` falls back to a typographic lockup.

The icons are declared in [app/layout.tsx](app/layout.tsx) rather than using
Next's `app/icon.png` convention - metadata image routes break build-trace
collection on Windows.

### Header and hero

The header is a two-tone split (`.sp-header` in
[app/globals.css](app/globals.css)): a black brand block at 53% width against a
lighter grey nav block. It collapses to a single bar with a drawer below 900px.
Bar height is the `--nav-h` custom property.

The hero is two full-bleed frames in a 66/34 split, sized to
`calc(100svh - var(--nav-h))`, with no type over the top. Change which frames
it uses in [data/home.ts](data/home.ts). It stacks vertically below 900px.

### Home page

Nine bands, alternating light and dark so the page has rhythm:

| # | Band | Component |
| - | ---- | --------- |
| 1 | Hero - two frames, full viewport | [Hero](components/sections/Hero.tsx) |
| 2 | Headline + CTAs | inline |
| 3 | Client strip | inline |
| 4 | Pull-quote (dark) | [Statement](components/sections/Statement.tsx) |
| 5 | What I shoot - four disciplines | [Disciplines](components/sections/Disciplines.tsx) |
| 6 | Selected work | inline |
| 7 | Behind the Lens - portrait + bio (grey) | [AboutTeaser](components/sections/AboutTeaser.tsx) |
| 8 | Testimonials (dark) | [Testimonials](components/sections/Testimonials.tsx) |
| 9 | Closing CTA | [CallToAction](components/sections/CallToAction.tsx) |

All copy lives in `HOME_COPY` in [data/home.ts](data/home.ts); the four
disciplines are `DISCIPLINES` in [data/services.ts](data/services.ts).
`HOME_COPY.selectedWorkCount` controls how many projects band 6 shows.

Every one of these is a server component - the home page ships no extra
client JS for them.

### About page

A full-bleed studio-grey panel (`.sp-about`): serif copy on the left, the
cut-out portrait anchored bottom-right so it bleeds off the section edge. The
portrait is sized off its own aspect ratio against `--nav-h`, so it always
meets the bottom. Below 900px it stacks under the copy.

The body copy renders at `font-weight: 600`, which Georgia resolves to its bold
cut - that is what gives the reference layout its weight. Drop it to `400` in
[app/globals.css](app/globals.css) to lighten.

`public/about/portrait.png` is a transparent cut-out, auto-trimmed to the
subject. It has to stay PNG for the alpha; `next/image` serves it as an ~80 KB
AVIF, so the 1.7 MB master is never sent to a browser.

### Portfolio masonry

[PortfolioGrid](components/portfolio/PortfolioGrid.tsx) uses
`MasonryPhotoAlbum` from [react-photo-album](https://react-photo-album.com).
Tile heights come from each cover's real aspect ratio, so nothing is cropped -
a landscape frame stays landscape.

Columns: 1 below 640px, 2 below 1000px, 3 above.

The render callbacks keep it on the studio's own terms:

| Slot | Does |
| ---- | ---- |
| `image` | swaps the plain `<img>` for `next/image`, so covers still get srcsets and AVIF |
| `link` | swaps the `<a>` for `next/link`, keeping client-side navigation |
| `wrapper` | adds `group` so the hover states fire |
| `extras` | layers [FrameOverlay](components/ui/FrameOverlay.tsx) - scrim, viewfinder, caption, arrow |

`extras` is `pointer-events-none` so clicks fall through to the link beneath.
`defaultContainerWidth` keeps the server render close to the client one, so the
grid does not visibly reflow on hydration.

**Masonry needs intrinsic dimensions up front.** They live in
`data/image-sizes.json`, generated by
[scripts/measure-images.ps1](scripts/measure-images.ps1) and read through
[data/images.ts](data/images.ts):

```powershell
./scripts/measure-images.ps1     # re-run after adding or replacing photos
```

A missing entry falls back to 4:5 rather than breaking the layout.

### Gallery lightbox

Every tile in a project's gallery opens
[MediaLightbox](components/ui/MediaLightbox.tsx), which steps through the whole
set - arrows, a thumbnail rail, and a counter. It supports:

- **←** / **→** to move, **Esc** to close
- horizontal swipe on touch
- click the backdrop to close
- wrap-around at both ends

Video entries render their embed in place of the image; one with no `src` yet
falls back to a placeholder panel. It replaces the old `VideoLightbox`, which
only ever opened film tiles.
