import type { Metadata } from "next";
import Label from "@/components/ui/Label";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Campaign, portrait, product and jewelry photography from Accra, Ghana.",
};

export default function PortfolioPage() {
  return (
    <section className="pt-14">
      <div className={`${container} px-7`}>
        <Label>Portfolio</Label>
        <h1 className="mb-7 font-serif text-[clamp(30px,5vw,48px)]">
          Work made for people who value the frame.
        </h1>
      </div>

      <PortfolioGrid />

      <div className="pb-24" />
    </section>
  );
}
