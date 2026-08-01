import Link from "next/link";
import Label from "@/components/ui/Label";
import { btn } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="px-7 py-[120px] text-center">
      <div className="mx-auto max-w-[520px]">
        <Label>404</Label>
        <h1 className="mb-4 font-serif text-[clamp(28px,5vw,44px)]">
          Nothing in this frame.
        </h1>
        <p className="mb-8 text-[15px] leading-[1.7] text-stone-600">
          The page you were looking for has moved or never existed.
        </p>
        <Link href="/portfolio" className={btn.solid}>
          View Portfolio
        </Link>
      </div>
    </section>
  );
}
