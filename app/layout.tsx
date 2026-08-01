import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SocialRail from "@/components/layout/SocialRail";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Photography & Cinematography, Accra`,
    template: `%s - ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} - Photography & Cinematography, Accra`,
    description: site.tagline,
    images: ["/home/hero-campaign.jpg"],
  },
  // Served from public/ and declared here rather than as app/icon.png:
  // Next's metadata image routes break build-trace collection on Windows.
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SocialRail />
        <SiteFooter />
      </body>
    </html>
  );
}
