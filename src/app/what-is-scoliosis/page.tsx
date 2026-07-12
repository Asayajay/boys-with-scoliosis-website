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
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16">
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
        <p className="mb-4">
          Scoliosis is a sideways curve in the spine. Looked at from behind, a
          typical spine runs in a fairly straight line from the base of the
          neck down to the hips. With scoliosis, it curves off to one side —
          often into a C-shape or an S-shape — and usually twists slightly
          along with the curve rather than staying flat.
        </p>
        <p className="mb-4">
          It&apos;s more common than most people think, showing up in
          somewhere around 2 to 3 out of every 100 adolescents. It typically
          appears or becomes noticeable during a growth spurt — often between
          ages 10 and 15, right around puberty — which is why it&apos;s so
          often caught in middle school or early high school rather than
          earlier.
        </p>
        <p>
          In the large majority of cases, called{" "}
          <em>idiopathic scoliosis</em>, there&apos;s no single identifiable
          cause. It isn&apos;t caused by a heavy backpack, bad posture, how
          you sit, or any sport you played, and nothing you or your parents
          did or didn&apos;t do made it happen. A diagnosis on its own also
          doesn&apos;t say much about severity — curves are measured in
          degrees, and that number, not the diagnosis itself, is what
          actually determines what happens next.
        </p>
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
