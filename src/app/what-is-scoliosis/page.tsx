import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Scoliosis — Boys with Scoliosis",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "types", title: "Types of scoliosis" },
  { id: "causes", title: "What causes it" },
  { id: "signs-and-symptoms", title: "Signs & symptoms" },
  { id: "diagnosis", title: "How it's diagnosed" },
  { id: "myths", title: "Common myths" },
  { id: "next-steps", title: "What happens next" },
];

export default function WhatIsScoliosisPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">What is Scoliosis</h1>
      <p className="text-lg text-muted mb-10">
        [Content: short framing paragraph — what this page covers and who
        it&apos;s for]
      </p>

      <nav aria-label="On this page" className="mb-12 rounded-lg border border-border bg-subtle p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted mb-3">
          On this page
        </h2>
        <ul className="flex flex-col gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="overview" aria-labelledby="overview-heading" className="mb-12">
        <h2 id="overview-heading" className="text-2xl mb-3">
          Overview
        </h2>
        <p>[Content: plain-language explanation of what scoliosis is]</p>
      </section>

      <section id="types" aria-labelledby="types-heading" className="mb-12">
        <h2 id="types-heading" className="text-2xl mb-3">
          Types of scoliosis
        </h2>
        <p>
          [Content: idiopathic, congenital, neuromuscular — brief description
          of each]
        </p>
      </section>

      <section id="causes" aria-labelledby="causes-heading" className="mb-12">
        <h2 id="causes-heading" className="text-2xl mb-3">
          What causes it
        </h2>
        <p>[Content: known causes and risk factors, what&apos;s still unknown]</p>
      </section>

      <section id="signs-and-symptoms" aria-labelledby="signs-heading" className="mb-12">
        <h2 id="signs-heading" className="text-2xl mb-3">
          Signs &amp; symptoms
        </h2>
        <p>
          [Content: what a boy or parent might notice — uneven shoulders,
          waistline, etc.]
        </p>
      </section>

      <section id="diagnosis" aria-labelledby="diagnosis-heading" className="mb-12">
        <h2 id="diagnosis-heading" className="text-2xl mb-3">
          How it&apos;s diagnosed
        </h2>
        <p>
          [Content: screening, physical exam, X-rays, Cobb angle measurement
          explained simply]
        </p>
      </section>

      <section id="myths" aria-labelledby="myths-heading" className="mb-12">
        <h2 id="myths-heading" className="text-2xl mb-3">
          Common myths
        </h2>
        <p>
          [Content: myth/fact pairs — e.g. &quot;scoliosis is caused by
          carrying a heavy backpack&quot;]
        </p>
      </section>

      <section id="next-steps" aria-labelledby="next-steps-heading">
        <h2 id="next-steps-heading" className="text-2xl mb-3">
          What happens next
        </h2>
        <p>
          [Content: reassuring close, link out to Bracing &amp; Treatment and
          Living With Scoliosis]
        </p>
      </section>
    </main>
  );
}
