"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, site } from "@/data/site";

/**
 * Two-tone split header: a black block carrying the mark and the spaced-out
 * wordmark, butted against a lighter grey block carrying the nav.
 * Below the `nav` breakpoint (900px) it collapses to one bar plus a drawer.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Project detail pages live under /portfolio, so they keep it lit.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 grid h-nav grid-cols-1 bg-nav-ink nav:grid-cols-[53%_1fr]">
      {/* left: black block - mark + wordmark */}
      <div className="flex min-w-0 items-center gap-[clamp(20px,4vw,72px)] bg-nav-ink px-[clamp(18px,2vw,34px)]">
        <Link href="/" aria-label={`${site.name} - home`} className="flex no-underline">
          <Logo />
        </Link>

        <span
          aria-hidden="true"
          className="hidden whitespace-nowrap indent-[0.58em] text-[clamp(11px,1.1vw,17px)] uppercase tracking-[0.58em] text-nav-wordmark nav:block"
        >
          {site.wordmark.first} {site.wordmark.second}
        </span>

        {/* hamburger rides in the black block once the grey one is gone */}
        <button
          onClick={() => setMenuOpen((m) => !m)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto flex cursor-pointer border-none bg-transparent p-0 text-paper nav:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* right: grey block - nav */}
      <nav
        aria-label="Primary"
        className="hidden items-center justify-center gap-[clamp(26px,3.4vw,62px)] bg-nav-panel px-[clamp(20px,4vw,84px)] nav:flex"
      >
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            aria-current={isActive(n.href) ? "page" : undefined}
            className={`whitespace-nowrap border-b pb-[5px] text-[clamp(11px,0.92vw,15px)] uppercase tracking-[0.18em] no-underline transition-colors hover:text-white ${
              isActive(n.href)
                ? "border-brass text-white"
                : "border-transparent text-nav-link"
            }`}
          >
            {n.label}
          </Link>
        ))}
      </nav>

      {/* mobile drawer */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-nav border-t border-paper/[0.12] bg-nav-ink px-6 pb-[22px] pt-2 nav:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`block py-3 text-[15px] uppercase tracking-[0.14em] no-underline ${
                isActive(n.href) ? "text-brass-light" : "text-nav-link"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
