import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide — Boys with Scoliosis",
};

const swatches: Array<{ name: string; className: string; hex: string }> = [
  { name: "Background", className: "bg-background border border-border", hex: "#fbf7f1" },
  { name: "Surface", className: "bg-surface border border-border", hex: "#ffffff" },
  { name: "Foreground", className: "bg-foreground", hex: "#2b2620" },
  { name: "Muted", className: "bg-muted", hex: "#6b645c" },
  { name: "Primary", className: "bg-primary", hex: "#1f7a6c" },
  { name: "Primary hover", className: "bg-primary-hover", hex: "#175a50" },
  { name: "Accent", className: "bg-accent", hex: "#c84414" },
  { name: "Accent hover", className: "bg-accent-hover", hex: "#a23710" },
  { name: "Gold", className: "bg-gold", hex: "#e8b85b" },
  { name: "Success", className: "bg-success", hex: "#4c9a6a" },
];

// Internal reference page for the design system — not part of the
// public site navigation.
export default function StyleGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-2">Style guide</h1>
      <p className="text-muted mb-12">
        Internal reference for the color, type, and tone system. Not linked from
        site navigation.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {swatches.map((swatch) => (
            <div key={swatch.name}>
              <div className={`h-16 rounded-lg ${swatch.className}`} />
              <p className="mt-2 text-sm font-semibold">{swatch.name}</p>
              <p className="text-sm text-muted">{swatch.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Type scale</h2>
        <div className="flex flex-col gap-4">
          <p className="text-4xl">Heading 1 — Nunito 4xl</p>
          <p className="text-3xl">Heading 2 — Nunito 3xl</p>
          <p className="text-2xl">Heading 3 — Nunito 2xl</p>
          <p className="text-xl">Heading 4 — Nunito xl</p>
          <p className="text-lg">Lead paragraph — Inter lg</p>
          <p className="text-base">
            Body text — Inter base. Set at 18px with generous line height so
            long-form health content stays easy to read for both teens and
            parents.
          </p>
          <p className="text-sm text-muted">Caption / meta text — Inter sm</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-hover">
            Primary action
          </button>
          <button className="rounded-full bg-accent text-white px-6 py-3 font-semibold hover:bg-accent-hover">
            Accent action
          </button>
          <button className="rounded-full border border-border px-6 py-3 font-semibold hover:bg-subtle">
            Secondary action
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">Links &amp; tone</h2>
        <p>
          Links are underlined by default, like{" "}
          <a href="#">this example link</a>, so they never rely on color alone.
          Copy tone should stay warm and direct — written for a teenage reader
          first, with parent-focused sections written distinctly rather than
          reusing the same words for both audiences.
        </p>
      </section>
    </main>
  );
}
