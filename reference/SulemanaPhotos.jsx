import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ArrowLeft,
  Camera,
  Aperture,
  Film,
  Play,
} from "lucide-react";

/* ---------------------------------------------------------
   TOKENS
   ink    #121212  - near-black, primary text / nav
   paper  #f3efe6  - warm ivory background
   stone  #8f897d  - muted secondary text
   brass  #b08d57  - restrained accent (camera brass / jewelry gold)
   line   rgba(18,18,18,.14) - hairline rules
--------------------------------------------------------- */

const NAV = ["Home", "About", "Portfolio", "Services", "Contact"];

const CATEGORIES = ["All", "Portrait", "Product & Jewelry", "Campaign", "Wedding", "Motion"];

/* Placeholder testimonials - swap with real client quotes before launch. */
const TESTIMONIALS = [
  {
    quote:
      "He understood the brief before we finished explaining it. The final campaign images felt like our brand, not a generic shoot.",
    name: "Marketing Lead",
    org: "Samsung Ghana",
  },
  {
    quote:
      "Every piece felt like it belonged in a jewelry box, not a product catalog. Our sales pages have never looked this good.",
    name: "Founder",
    org: "Sue Shimmers",
  },
  {
    quote:
      "We got a highlight film we still watch a year later, and a print gallery our parents actually display. Worth every cedi.",
    name: "Afia & Kwabena",
    org: "Wedding Client",
  },
];

const PACKAGES = [
  {
    name: "Portrait Session",
    price: "GHS 1,500",
    duration: "1.5 hours · studio or on-location",
    includes: ["1 outfit change", "20 fully edited images", "Private online gallery", "5-day delivery"],
  },
  {
    name: "Wedding Day",
    price: "From GHS 8,500",
    duration: "Full-day coverage · up to 10 hours",
    includes: [
      "Ceremony + reception coverage",
      "150+ edited images",
      "3–5 min highlight film",
      "Online gallery + USB",
      "3-week delivery",
    ],
    featured: true,
  },
  {
    name: "Brand Campaign",
    price: "Custom quote",
    duration: "Half-day to multi-day",
    includes: [
      "Creative direction included",
      "Studio or on-location",
      "Product + lifestyle imagery",
      "Usage rights discussed upfront",
      "Rush delivery available",
    ],
  },
];

const ADDONS = [
  "Second shooter",
  "Drone footage",
  "Extra hour of coverage",
  "Rush 48-hour delivery",
  "Printed album",
];

const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For weddings, 3–6 months ahead is ideal, especially for peak season (Nov–Jan). Portrait sessions and brand shoots can often be booked 1–2 weeks out, depending on the calendar.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes - a non-refundable 30% deposit secures your date, with the balance due before final delivery. Payment plans are available for wedding packages.",
  },
  {
    q: "Do you travel outside Accra?",
    a: "Yes, across Ghana and internationally. Travel fees apply outside the Greater Accra region and are quoted upfront before booking.",
  },
  {
    q: "What's the turnaround time for edited images?",
    a: "5 business days for portrait and brand sessions, up to 3 weeks for full wedding galleries. Rush delivery is available as an add-on.",
  },
  {
    q: "Can I get the raw, unedited files?",
    a: "Raw files aren't included by default - every delivered image is retouched and color-graded to match the studio's style. Raw files can be discussed for select brand contracts.",
  },
];

const WORK = [
  {
    slug: "quiet-gold",
    title: "Quiet Gold",
    client: "Sue Shimmers",
    cat: "Product & Jewelry",
    year: "2025",
    role: "Photography, Art Direction",
    description:
      "A studio product series built around restraint - gold chains and stone settings lit to hold detail without competing for it. Every frame was shot to isolate texture: the bevel of a link, the weight of a clasp, the way light sits differently on brushed versus polished gold.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "line-light",
    title: "Line & Light",
    client: "Samsung Ghana",
    cat: "Campaign",
    year: "2024",
    role: "Creative Direction, Photography",
    description:
      "A national campaign built on a simple idea: technology should feel human. We paired studio portraiture with product macro shots, using a consistent grid of hard light and soft shadow across every market touchpoint.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "held-close",
    title: "Held Close",
    client: "Sue Shimmers",
    cat: "Portrait",
    year: "2025",
    role: "Photography",
    description:
      "An intimate portrait sitting exploring closeness - hands, jewelry, and expression shot tight to remove distance between subject and viewer. Minimal retouching, natural window light, deliberately unposed moments between takes.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "cable-form",
    title: "Cable & Form",
    client: "Nexans Cable Metal",
    cat: "Campaign",
    year: "2024",
    role: "Photography, Cinematography",
    description:
      "An industrial brand story shot on location - coiled cable, raw metal, and the people who work with both. The brief asked for dignity without polish; we leaned into texture, sweat, and the honest geometry of the factory floor.",
    media: [{ type: "photo" }, { type: "video" }, { type: "photo" }],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    client: "Kibita Organic",
    cat: "Portrait",
    year: "2024",
    role: "Photography, Art Direction",
    description:
      "A farm-to-shelf story told through the growers themselves. Shot at golden hour across three farms, the series pairs environmental portraits with close detail of produce at harvest.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "structure-study",
    title: "Structure Study",
    client: "Iserd Ltd",
    cat: "Campaign",
    year: "2023",
    role: "Creative Direction, Photography",
    description:
      "A corporate identity shoot reframed as architecture study - clean lines, negative space, and a muted palette that let the brand's own geometry carry the visual language.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "two-hands",
    title: "Two Hands",
    client: "Sue Shimmers",
    cat: "Product & Jewelry",
    year: "2025",
    role: "Photography",
    description:
      "A companion piece to Quiet Gold, built around gesture - two hands, layered rings, and the small choreography of putting jewelry on. Shot handheld for a looser, more candid feel than the rest of the series.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "behind-the-lens",
    title: "Behind the Lens",
    client: "Sulemana Photos",
    cat: "Motion",
    year: "2025",
    role: "Direction, Cinematography",
    description:
      "A short behind-the-scenes film documenting a full campaign day, from lighting setup to final frame - made for clients who want to see the process, not just the product.",
    media: [{ type: "video" }, { type: "video" }, { type: "photo" }],
  },
  {
    slug: "grain",
    title: "Grain",
    client: "Kibita Organic",
    cat: "Portrait",
    year: "2024",
    role: "Photography",
    description:
      "A black-and-white study of texture and grain - soil, skin, and produce shot on film to give the campaign a tactile, unpolished honesty the client's original brief called for directly.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "afia-kwabena",
    title: "Afia & Kwabena",
    client: "Private Client",
    cat: "Wedding",
    year: "2025",
    role: "Photography, Cinematography",
    description:
      "A full wedding-day story shot across two locations in Accra - traditional knocking ceremony in the morning, white wedding and reception through the evening. Delivered as a still gallery alongside a short highlight film, so the day exists both as photographs to print and a film to watch back.",
    media: [{ type: "photo" }, { type: "video" }, { type: "photo" }, { type: "photo" }],
  },
  {
    slug: "under-the-arch",
    title: "Under the Arch",
    client: "Private Client",
    cat: "Wedding",
    year: "2024",
    role: "Photography, Cinematography",
    description:
      "An outdoor garden ceremony shot mostly on long lenses to stay out of the way of the day itself, paired with a same-day edit film shown at the reception that evening.",
    media: [{ type: "photo" }, { type: "photo" }, { type: "video" }],
  },
];

/* Viewfinder corner brackets - the signature motif, reused across
   the hero, the section markers, and every portfolio frame. */
function Viewfinder({ className = "", tight = false }) {
  const o = tight ? 6 : 0;
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <g stroke="currentColor" strokeWidth="1.4" fill="none">
        <path d={`M ${4 + o},18 V ${4 + o} H 18`} />
        <path d={`M ${100 - 18},${4 + o} H ${96 - o} V 18`} />
        <path d={`M ${96 - o},${100 - 18} V ${96 - o} H ${100 - 18}`} />
        <path d={`M 18,${96 - o} H ${4 + o} V ${100 - 18}`} />
      </g>
    </svg>
  );
}

function Frame({ title, client, cat, big = false, full = false, onOpen, media, videoTile = false }) {
  const [hover, setHover] = useState(false);
  const hasVideo = videoTile || (media || []).some((m) => m.type === "video");
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(e) => { if (onOpen && (e.key === "Enter" || e.key === " ")) onOpen(); }}
      style={{
        position: "relative",
        aspectRatio: full ? undefined : big ? "4 / 5" : "1 / 1",
        height: full ? "100%" : undefined,
        width: full ? "100%" : undefined,
        background:
          "linear-gradient(155deg, #d8d2c4 0%, #b7b0a0 38%, #8f897d 68%, #57534a 100%)",
        overflow: "hidden",
        cursor: onOpen ? "pointer" : "default",
      }}
    >
      {/* film-grain texture */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35, mixBlendMode: "overlay" }}>
        <filter id={`grain-${(title || "tile").replace(/\s/g, "")}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${(title || "tile").replace(/\s/g, "")})`} />
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(0deg, rgba(18,18,18,.72) 0%, rgba(18,18,18,0) 42%)",
        }}
      />

      <div style={{ color: "#f3efe6", opacity: hover ? 1 : 0.72, transition: "opacity .35s" }}>
        <Viewfinder tight={hover} />
      </div>

      {hasVideo && (
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#f3efe6",
            background: "rgba(18,18,18,.55)",
            border: "1px solid rgba(243,239,230,.4)",
            padding: "4px 9px",
          }}
        >
          <Film size={11} /> {videoTile ? "Film" : "Photo + Film"}
        </div>
      )}

      {videoTile && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid rgba(243,239,230,.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(18,18,18,.35)",
              transform: hover ? "scale(1.08)" : "scale(1)",
              transition: "transform .3s",
            }}
          >
            <Play size={18} color="#f3efe6" fill="#f3efe6" style={{ marginLeft: 2 }} />
          </div>
        </div>
      )}

      {title && (
        <div style={{ position: "absolute", left: 18, bottom: 16, right: 18, color: "#f3efe6" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#e4c98f", marginBottom: 4 }}>
            {cat}
          </div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: big ? 24 : 18, lineHeight: 1.15 }}>{title}</div>
          <div style={{ fontSize: 12, color: "#cfc9bc", marginTop: 2 }}>{client}</div>
        </div>
      )}

      {onOpen && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "1px solid rgba(243,239,230,.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: hover ? "scale(1)" : "scale(0.85)",
            opacity: hover ? 1 : 0,
            transition: "all .3s",
          }}
        >
          <ArrowUpRight size={13} color="#f3efe6" />
        </div>
      )}
    </div>
  );
}

function Label({ children }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#b08d57",
        fontWeight: 600,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

export default function SulemanaPhotos() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [sent, setSent] = useState(false);
  const [activeWork, setActiveWork] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const openWork = (work) => {
    setActiveWork(work);
    setPage("Project");
  };

  const openVideo = (v) => setActiveVideo(v);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [page]);

  const filtered = category === "All" ? WORK : WORK.filter((w) => w.cat === category);

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f3efe6", color: "#121212", minHeight: "100%" }}>
      {/* ---------------- NAV ---------------- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 28px",
          background: "#121212",
          color: "#f3efe6",
        }}
      >
        <button
          onClick={() => setPage("Home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 22 }}>Sulemana</span>
          <span style={{ fontSize: 10, letterSpacing: "0.24em", color: "#b08d57" }}>PHOTOS</span>
        </button>

        <nav style={{ display: "none", gap: 26 }} className="sp-nav-desktop">
          {NAV.map((n) => {
            const active = page === n || (n === "Portfolio" && page === "Project");
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: active ? "#f3efe6" : "#a39d8f",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  paddingBottom: 4,
                  borderBottom: active ? "1px solid #b08d57" : "1px solid transparent",
                }}
              >
                {n}
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen((m) => !m)}
          className="sp-nav-toggle"
          style={{ background: "none", border: "none", color: "#f3efe6", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <div className="sp-nav-toggle" style={{ background: "#121212", padding: "0 28px 20px" }}>
          {NAV.map((n) => {
            const active = page === n || (n === "Portfolio" && page === "Project");
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  color: active ? "#e4c98f" : "#cfc9bc",
                  fontSize: 15,
                  padding: "10px 0",
                  cursor: "pointer",
                }}
              >
                {n}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .sp-nav-desktop { display: flex !important; }
          .sp-nav-toggle { display: none !important; }
        }
      `}</style>

      {/* ---------------- PAGES ---------------- */}
      {page === "Home" && <Home setPage={setPage} openWork={openWork} />}
      {page === "About" && <About setPage={setPage} />}
      {page === "Portfolio" && (
        <Portfolio category={category} setCategory={setCategory} filtered={filtered} openWork={openWork} />
      )}
      {page === "Project" && activeWork && (
        <Project work={activeWork} setPage={setPage} openWork={openWork} openVideo={openVideo} />
      )}
      {page === "Services" && <Services setPage={setPage} />}
      {page === "Contact" && <Contact sent={sent} setSent={setSent} />}

      {/* ---------------- FOOTER ---------------- */}
      <footer style={{ background: "#121212", color: "#cfc9bc", padding: "48px 28px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
          <div>
            <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 20, color: "#f3efe6", marginBottom: 8 }}>
              Sulemana Photos
            </div>
            <p style={{ fontSize: 13, maxWidth: 280, lineHeight: 1.6, color: "#a39d8f" }}>
              Creative direction, photography and cinematography out of Accra, Ghana.
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <Label>Studio</Label>
              <div style={{ fontSize: 13, color: "#cfc9bc", lineHeight: 2 }}>
                Accra, Ghana
                <br />
                hello@sulemanaphotos.com
                <br />
                +233 24 000 0000
              </div>
            </div>
            <div>
              <Label>Follow</Label>
              <div style={{ display: "flex", gap: 14 }}>
                <a href="#" style={{ color: "#f3efe6" }} aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" style={{ color: "#f3efe6" }} aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(243,239,230,.12)", marginTop: 36, paddingTop: 18, fontSize: 11, color: "#726d61", maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
          © {new Date().getFullYear()} Sulemana Photos. All rights reserved.
        </div>
      </footer>

      {activeVideo && <Lightbox video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </div>
  );
}

/* ================= VIDEO LIGHTBOX ================= */
function Lightbox({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,10,10,.9)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 880, background: "#121212" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px" }}>
          <div style={{ color: "#f3efe6", fontSize: 13, letterSpacing: "0.08em" }}>
            {video.title}{video.client ? ` - ${video.client}` : ""}
          </div>
          <button
            onClick={onClose}
            aria-label="Close video"
            style={{ background: "none", border: "none", color: "#f3efe6", cursor: "pointer", display: "flex" }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "linear-gradient(155deg, #57534a 0%, #2c2a25 100%)" }}>
          <div style={{ position: "absolute", inset: 32, color: "#f3efe6", opacity: 0.3 }}>
            <Viewfinder />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "1px solid rgba(243,239,230,.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Play size={22} color="#f3efe6" fill="#f3efe6" style={{ marginLeft: 3 }} />
            </div>
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#cfc9bc" }}>
              Video placeholder - embed your player here
            </span>
          </div>
        </div>

        <div style={{ padding: "14px 18px", fontSize: 12, color: "#a39d8f", lineHeight: 1.6 }}>
          Drop in a hosted embed (YouTube, Vimeo, or a direct file) in place of this panel -
          the frame, title, and close behavior are already wired up.
        </div>
      </div>
    </div>
  );
}

/* ================= HOME ================= */
function Home({ setPage, openWork }) {
  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          minHeight: "78vh",
        }}
        className="sp-hero"
      >
        {/* left: single large frame */}
        <div style={{ position: "relative", minHeight: 320, background: "linear-gradient(165deg,#e2ddcf,#b7b0a0 45%,#8f897d 80%,#5c574c)" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3, mixBlendMode: "overlay" }}>
            <filter id="grain-hero-a"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#grain-hero-a)" />
          </svg>
          <div style={{ position: "absolute", inset: 36, color: "#f3efe6", opacity: 0.6 }}>
            <Viewfinder />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Camera size={56} color="#f3efe6" strokeWidth={1} style={{ opacity: 0.8 }} />
          </div>
          <div style={{ position: "absolute", left: 24, bottom: 20, color: "#f3efe6" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#e4c98f" }}>Campaign</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 18, marginTop: 2 }}>Your image here</div>
          </div>
        </div>

        {/* right: two stacked frames */}
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", minHeight: 320 }}>
          <div style={{ position: "relative", background: "linear-gradient(200deg,#d8d2c4,#a49d8c 55%,#5c574c)", borderTop: "3px solid #f3efe6" }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3, mixBlendMode: "overlay" }}>
              <filter id="grain-hero-b"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /></filter>
              <rect width="100%" height="100%" filter="url(#grain-hero-b)" />
            </svg>
            <div style={{ position: "absolute", inset: 24, color: "#f3efe6", opacity: 0.55 }}>
              <Viewfinder />
            </div>
            <div style={{ position: "absolute", left: 20, bottom: 16, color: "#f3efe6" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#e4c98f" }}>Product &amp; Jewelry</div>
            </div>
          </div>
          <div style={{ position: "relative", background: "linear-gradient(210deg,#c9c2b0,#8f897d 50%,#4a463d)", borderTop: "3px solid #f3efe6" }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3, mixBlendMode: "overlay" }}>
              <filter id="grain-hero-c"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" /></filter>
              <rect width="100%" height="100%" filter="url(#grain-hero-c)" />
            </svg>
            <div style={{ position: "absolute", inset: 24, color: "#f3efe6", opacity: 0.55 }}>
              <Viewfinder />
            </div>
            <div style={{ position: "absolute", left: 20, bottom: 16, color: "#f3efe6" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#e4c98f" }}>Portrait</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .sp-hero { grid-template-columns: 1.4fr 1fr !important; }
        }
      `}</style>

      {/* headline, moved below the full-bleed hero */}
      <section style={{ padding: "64px 28px 48px", borderBottom: "1px solid rgba(18,18,18,.12)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <Label>Creative Director / Photographer / Cinematographer</Label>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 5.5vw, 58px)",
                lineHeight: 1.05,
                maxWidth: 640,
                margin: 0,
              }}
            >
              Images that hold their frame long after the shutter closes.
            </h1>
            <p style={{ maxWidth: 480, color: "#4a463d", fontSize: 16, lineHeight: 1.7, marginTop: 20 }}>
              Over a decade of shaping brands and crafting visual stories for
              clients across Ghana and beyond - from campaign visuals to
              intimate portraiture.
            </p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage("Portfolio")}
              style={{
                background: "#121212",
                color: "#f3efe6",
                border: "none",
                padding: "14px 28px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View Portfolio <ArrowUpRight size={14} />
            </button>
            <button
              onClick={() => setPage("Contact")}
              style={{
                background: "none",
                color: "#121212",
                border: "1px solid #121212",
                padding: "14px 28px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Book a Shoot
            </button>
          </div>
        </div>
      </section>

      {/* clients strip */}
      <section style={{ padding: "40px 28px", borderTop: "1px solid rgba(18,18,18,.12)", borderBottom: "1px solid rgba(18,18,18,.12)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "space-between", alignItems: "center" }}>
          {["Samsung Ghana", "Sue Shimmers", "Iserd Ltd", "Nexans Cable Metal", "Kibita Organic"].map((c) => (
            <span key={c} style={{ fontSize: 13, letterSpacing: "0.08em", color: "#726d61", textTransform: "uppercase" }}>
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* selected work preview */}
      <section style={{ padding: "80px 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
              <Label>Selected Work</Label>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 34, margin: 0 }}>A few frames worth pausing on.</h2>
            </div>
            <button
              onClick={() => setPage("Portfolio")}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Full Portfolio <ArrowUpRight size={14} />
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4 }}>
            {WORK.slice(0, 3).map((w) => (
              <Frame key={w.title} {...w} big onOpen={() => openWork(w)} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

/* ================= ABOUT ================= */
function About({ setPage }) {
  return (
    <section style={{ padding: "72px 28px 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 48 }} className="sp-about">
        <div>
          <Label>About</Label>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 48px)", margin: "0 0 24px", maxWidth: 560 }}>
            I'm a Creative Director, Designer, Photographer and Cinematographer.
          </h1>

          <div style={{ color: "#3a362f", fontSize: 16, lineHeight: 1.85, maxWidth: 620, display: "grid", gap: 20 }}>
            <p>
              With a background in visual storytelling and image-making, I bring
              over a decade of experience shaping brands and crafting compelling
              visual experiences.
            </p>
            <p>
              My journey began with a degree in Publishing Studies from Kwame
              Nkrumah University of Science and Technology - a foundation in
              layout, typography and storytelling that still informs everything
              I create today.
            </p>
            <p>
              Over the years I've worked with leading brands like Samsung
              Ghana, helping bring ideas to life through bold design, strategic
              thinking and close attention to detail. From brand identity
              systems to campaign visuals, my work sits at the intersection of
              creativity and purpose.
            </p>
            <p>
              Beyond design, I work as a professional photographer and
              cinematographer, capturing stories for brands and individuals who
              value authenticity and strong visual narratives - including Sue
              Shimmers, Samsung Ghana, Iserd Ltd, Nexans Cable Metal and Kibita
              Organic.
            </p>
            <p style={{ fontStyle: "italic", color: "#121212" }}>
              At my core, I believe great design is more than aesthetics - it's
              about telling stories, evoking emotion, and building meaningful
              connections.
            </p>
          </div>

          <button
            onClick={() => setPage("Contact")}
            style={{ marginTop: 32, background: "#121212", color: "#f3efe6", border: "none", padding: "14px 28px", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}
          >
            Get in Touch
          </button>
        </div>

        <div style={{ position: "relative", minHeight: 420, background: "linear-gradient(200deg,#dcd6c8,#a49d8c 50%,#5c574c)" }}>
          <div style={{ position: "absolute", inset: 30, color: "#121212", opacity: 0.4 }}>
            <Viewfinder />
          </div>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <Aperture size={54} color="#f3efe6" strokeWidth={1} />
            <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "#f3efe6", textTransform: "uppercase" }}>Portrait, on assignment</span>
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: "1px solid rgba(18,18,18,.15)" }}>
            {[
              ["10+", "Years shaping brands"],
              ["5", "Long-standing clients"],
              ["1", "Point of view"],
            ].map(([n, l]) => (
              <div key={l} style={{ flex: 1, padding: "18px 14px", borderRight: "1px solid rgba(18,18,18,.1)", background: "rgba(243,239,230,.85)" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 26 }}>{n}</div>
                <div style={{ fontSize: 11, color: "#4a463d", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .sp-about { grid-template-columns: 1.1fr 0.9fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}

/* ================= PORTFOLIO ================= */
function Portfolio({ category, setCategory, filtered, openWork }) {
  return (
    <section style={{ padding: "56px 0 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px 32px" }}>
        <Label>Portfolio</Label>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 48px)", margin: "0 0 28px" }}>
          Work made for people who value the frame.
        </h1>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: "9px 18px",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                border: "1px solid #121212",
                background: category === c ? "#121212" : "transparent",
                color: category === c ? "#f3efe6" : "#121212",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* full-bleed, edge-to-edge grid - no side padding, no gaps, like the studio's own site */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridAutoRows: "38vw",
          gap: 0,
        }}
        className="sp-portfolio-grid"
      >
        {filtered.map((w, i) => (
          <div
            key={w.title}
            style={i % 5 === 0 ? { gridColumn: "span 2" } : undefined}
            className={i % 5 === 0 ? "sp-portfolio-wide" : undefined}
          >
            <Frame {...w} full onOpen={() => openWork(w)} />
          </div>
        ))}
      </div>

      <style>{`
        .sp-portfolio-grid { grid-auto-rows: 340px; }
        @media (max-width: 640px) {
          .sp-portfolio-grid { grid-template-columns: 1fr !important; grid-auto-rows: 260px; }
          .sp-portfolio-wide { grid-column: span 1 !important; }
        }
      `}</style>

      {filtered.length === 0 && (
        <p style={{ color: "#726d61", padding: "40px 28px" }}>No frames in this category yet.</p>
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 28px 96px", fontSize: 12, color: "#726d61", display: "flex", alignItems: "center", gap: 8 }}>
        <Film size={14} /> Placeholder frames - swap each panel with your own photography, full-bleed.
      </div>
    </section>
  );
}

/* ================= PROJECT DETAIL ================= */
function Project({ work, setPage, openWork, openVideo }) {
  const idx = WORK.findIndex((w) => w.slug === work.slug);
  const prev = WORK[(idx - 1 + WORK.length) % WORK.length];
  const next = WORK[(idx + 1) % WORK.length];
  const gallery = WORK.filter((w) => w.slug !== work.slug && w.cat === work.cat).slice(0, 3);
  const galleryItems = gallery.length ? gallery : WORK.filter((w) => w.slug !== work.slug).slice(0, 3);

  return (
    <section>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 28px 0" }}>
        <button
          onClick={() => setPage("Portfolio")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a463d", padding: 0 }}
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </button>
      </div>

      {/* full-bleed hero image for the project */}
      <div style={{ marginTop: 24, height: "56vh", minHeight: 320 }}>
        <Frame {...work} full />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 28px 0" }}>
        <div style={{ display: "grid", gap: 40 }} className="sp-project-head">
          <div>
            <Label>{work.cat}</Label>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 52px)", margin: "0 0 20px", maxWidth: 620 }}>
              {work.title}
            </h1>
            <p style={{ color: "#3a362f", fontSize: 16, lineHeight: 1.8, maxWidth: 600 }}>{work.description}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(120px, 1fr))", gap: 24, alignContent: "start" }}>
            <Meta label="Client" value={work.client} />
            <Meta label="Year" value={work.year} />
            <Meta label="Role" value={work.role} />
            <Meta label="Category" value={work.cat} />
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .sp-project-head { grid-template-columns: 1.4fr 1fr !important; }
          }
        `}</style>
      </div>

      {/* this project's own media - mix of stills and film where relevant */}
      {work.media && work.media.length > 0 && (
        <div style={{ maxWidth: 1100, margin: "56px auto 0", padding: "0 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Label>Gallery</Label>
            {work.media.some((m) => m.type === "video") && (
              <span style={{ fontSize: 11, color: "#726d61", marginBottom: 14, marginLeft: 4 }}>
                Stills and film from the same day
              </span>
            )}
          </div>
        </div>
      )}
      {work.media && work.media.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4, padding: "0 4px" }}>
          {work.media.map((m, i) => (
            <div key={i} style={{ aspectRatio: "4 / 5" }}>
              <Frame
                title={m.type === "video" ? `${work.title} - Film` : undefined}
                cat={work.cat}
                client={work.client}
                full
                videoTile={m.type === "video"}
                onOpen={m.type === "video" ? () => openVideo({ title: `${work.title} - Film`, client: work.client }) : undefined}
              />
            </div>
          ))}
        </div>
      )}

      {/* more work - cross-links to other projects */}
      <div style={{ maxWidth: 1100, margin: "64px auto 0", padding: "0 28px" }}>
        <Label>More Work</Label>
      </div>
      <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4, padding: "0 4px" }}>
        {galleryItems.map((w) => (
          <div key={w.slug} style={{ aspectRatio: "4 / 5" }}>
            <Frame {...w} full onOpen={() => openWork(w)} />
          </div>
        ))}
      </div>

      {/* prev / next */}
      <div style={{ borderTop: "1px solid rgba(18,18,18,.12)", marginTop: 56 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <button
            onClick={() => openWork(prev)}
            style={{ textAlign: "left", background: "none", border: "none", borderRight: "1px solid rgba(18,18,18,.12)", cursor: "pointer", padding: "28px 28px", display: "flex", flexDirection: "column", gap: 6 }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#726d61", display: "flex", alignItems: "center", gap: 6 }}>
              <ArrowLeft size={12} /> Previous
            </span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 20 }}>{prev.title}</span>
          </button>
          <button
            onClick={() => openWork(next)}
            style={{ textAlign: "right", background: "none", border: "none", cursor: "pointer", padding: "28px 28px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#726d61", display: "flex", alignItems: "center", gap: 6 }}>
              Next <ArrowUpRight size={12} />
            </span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 20 }}>{next.title}</span>
          </button>
        </div>
      </div>

      <div style={{ padding: "56px 28px 96px", textAlign: "center" }}>
        <p style={{ color: "#4a463d", fontSize: 15, marginBottom: 16 }}>Have a similar project in mind?</p>
        <button
          onClick={() => setPage("Contact")}
          style={{ background: "#121212", color: "#f3efe6", border: "none", padding: "14px 28px", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}
        >
          Start a Conversation
        </button>
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div style={{ borderTop: "1px solid rgba(18,18,18,.15)", paddingTop: 10 }}>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#726d61", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, color: "#121212" }}>{value}</div>
    </div>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  return (
    <section style={{ background: "#121212", color: "#f3efe6", padding: "72px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Label>What Clients Say</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, marginTop: 8 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ borderTop: "1px solid rgba(243,239,230,.18)", paddingTop: 20 }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 19, lineHeight: 1.55, fontStyle: "italic", margin: "0 0 18px" }}>
                "{t.quote}"
              </p>
              <div style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e4c98f" }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "#a39d8f", marginTop: 2 }}>{t.org}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 12, color: "#726d61" }}>
          Placeholder quotes - swap in real client feedback before launch.
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services({ setPage }) {
  return (
    <section style={{ padding: "72px 28px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Label>Services &amp; Pricing</Label>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 48px)", margin: "0 0 16px", maxWidth: 620 }}>
          Coverage built around how you'll actually use it.
        </h1>
        <p style={{ color: "#4a463d", fontSize: 15, lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
          Every package below is a starting point - sessions are shaped around
          your date, location, and how the final images and film will be used.
          Prices are quoted in Ghana cedis.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0, border: "1px solid rgba(18,18,18,.15)" }}>
          {PACKAGES.map((p, i) => (
            <div
              key={p.name}
              style={{
                padding: 32,
                background: p.featured ? "#121212" : "transparent",
                color: p.featured ? "#f3efe6" : "#121212",
                borderLeft: i > 0 ? "1px solid rgba(18,18,18,.15)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.featured && (
                <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e4c98f", marginBottom: 12 }}>
                  Most Booked
                </div>
              )}
              <div style={{ fontFamily: "Georgia, serif", fontSize: 24, marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{p.price}</div>
              <div style={{ fontSize: 12, color: p.featured ? "#a39d8f" : "#726d61", marginBottom: 22 }}>{p.duration}</div>
              <div style={{ display: "grid", gap: 10, marginBottom: 28, flex: 1 }}>
                {p.includes.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, fontSize: 13.5, alignItems: "flex-start" }}>
                    <span style={{ color: "#b08d57", marginTop: 2 }}>-</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPage("Contact")}
                style={{
                  border: p.featured ? "1px solid #f3efe6" : "1px solid #121212",
                  background: "none",
                  color: p.featured ? "#f3efe6" : "#121212",
                  padding: "12px 20px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Enquire
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, borderTop: "1px solid rgba(18,18,18,.12)", paddingTop: 32, display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
          <div style={{ minWidth: 200 }}>
            <Label>Add-ons</Label>
            <p style={{ fontSize: 13, color: "#4a463d", lineHeight: 1.6 }}>Available on any package.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
            {ADDONS.map((a) => (
              <span
                key={a}
                style={{
                  fontSize: 12,
                  padding: "8px 16px",
                  border: "1px solid rgba(18,18,18,.2)",
                  color: "#3a362f",
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 64 }}>
        <Testimonials />
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact({ sent, setSent }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section style={{ padding: "72px 28px 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 48 }} className="sp-contact">
        <div>
          <Label>Contact</Label>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 48px)", margin: "0 0 20px", maxWidth: 480 }}>
            Let's frame something worth remembering.
          </h1>
          <p style={{ color: "#4a463d", fontSize: 15, lineHeight: 1.7, maxWidth: 420, marginBottom: 32 }}>
            Whether it's a campaign, a brand film, or a portrait sitting -
            tell me a little about the story you want told, and I'll get
            back to you within two business days.
          </p>

          <div style={{ display: "grid", gap: 18 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <MapPin size={16} color="#b08d57" /> <span style={{ fontSize: 14 }}>Accra, Ghana</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Mail size={16} color="#b08d57" /> <span style={{ fontSize: 14 }}>hello@sulemanaphotos.com</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Phone size={16} color="#b08d57" /> <span style={{ fontSize: 14 }}>+233 24 000 0000</span>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
              <a href="#" style={{ color: "#121212" }} aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" style={{ color: "#121212" }} aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ background: "#121212", color: "#f3efe6", padding: 32 }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 22, marginBottom: 8 }}>Message sent.</div>
              <p style={{ color: "#cfc9bc", fontSize: 14, lineHeight: 1.6 }}>
                Thanks, {form.name.split(" ")[0]}. Your note has been logged -
                expect a reply at {form.email} within two business days.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                style={{ marginTop: 20, background: "none", border: "1px solid #f3efe6", color: "#f3efe6", padding: "10px 20px", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "grid", gap: 18, background: "#e9e4d7", padding: 32 }}>
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Project details">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Tell me about the shoot - date, location, brief."
                />
              </Field>
              <button
                type="submit"
                style={{ background: "#121212", color: "#f3efe6", border: "none", padding: "14px 28px", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .sp-contact { grid-template-columns: 0.9fr 1.1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 760, margin: "72px auto 0", padding: "48px 28px 0", borderTop: "1px solid rgba(18,18,18,.12)" }}>
        <Label>Frequently Asked</Label>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, margin: "0 0 24px" }}>Before you book.</h2>
        <FAQ />
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} style={{ borderTop: "1px solid rgba(18,18,18,.15)" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "18px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 15, color: "#121212" }}>{item.q}</span>
              <span style={{ fontSize: 18, color: "#b08d57", lineHeight: 1, flexShrink: 0 }}>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <p style={{ margin: "0 0 20px", fontSize: 14, lineHeight: 1.7, color: "#4a463d", maxWidth: 640 }}>{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4a463d" }}>{label}</span>
      {children}
    </label>
  );
}

const inputStyle = {
  border: "1px solid rgba(18,18,18,.25)",
  background: "#f3efe6",
  padding: "12px 14px",
  fontSize: 14,
  fontFamily: "inherit",
  color: "#121212",
  outline: "none",
};
