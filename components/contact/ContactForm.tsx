"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { input } from "@/lib/ui";

/**
 * ⚠️  NOT WIRED TO A BACKEND YET.
 *
 * This is a faithful port of the original design: submitting flips to the
 * confirmation panel but no message is delivered anywhere. Before launch,
 * point `submit()` at one of:
 *
 *   • a Next.js route handler (app/api/contact/route.ts) + Resend / Postmark
 *   • a form service (Formspree, Basin) - just change the <form> action
 *   • your own SMTP relay
 *
 * Until then the direct email address below is the only channel that
 * actually reaches the studio, so it stays visible on the form.
 */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] uppercase tracking-[0.14em] text-stone-600">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-ink p-8 text-paper">
        <div className="mb-2 font-serif text-[22px]">Message sent.</div>
        <p className="text-sm leading-relaxed text-stone-200">
          Thanks, {form.name.split(" ")[0]}. Your note has been logged - expect a
          reply at {form.email} within two business days.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", message: "" });
          }}
          className="mt-5 cursor-pointer border border-paper bg-transparent px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] text-paper"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-[18px] bg-stone-100 p-8">
      <Field label="Name">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={input}
          placeholder="Your full name"
          autoComplete="name"
        />
      </Field>

      <Field label="Email">
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={input}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>

      <Field label="Project details">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${input} resize-y`}
          placeholder="Tell me about the shoot - date, location, brief."
        />
      </Field>

      <button
        type="submit"
        className="cursor-pointer border-none bg-ink px-7 py-3.5 text-xs uppercase tracking-[0.14em] text-paper"
      >
        Send Message
      </button>

      <p className="text-xs leading-relaxed text-stone-500">
        Prefer email? Write directly to{" "}
        <a href={`mailto:${site.email}`} className="text-ink">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
