import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents — Boys with Scoliosis",
};

const sections = [
  { id: "understanding-the-diagnosis", title: "Understanding the diagnosis" },
  { id: "supporting-your-son", title: "Supporting your son emotionally" },
  { id: "appointments-and-decisions", title: "Appointments & healthcare decisions" },
  { id: "bracing-at-home", title: "Bracing & treatment at home" },
  { id: "school-and-advocacy", title: "School & advocacy" },
  { id: "connecting-with-other-parents", title: "Connecting with other parents" },
  { id: "when-to-seek-help", title: "When to seek help" },
];

export default function ForParentsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">For Parents</h1>
      <p className="text-lg text-muted mb-10">
        [Content: short framing paragraph — written directly to a parent, not
        a rehash of the teen-facing pages]
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

      <section id="understanding-the-diagnosis" aria-labelledby="understanding-the-diagnosis-heading" className="mb-12">
        <h2 id="understanding-the-diagnosis-heading" className="text-2xl mb-3">
          Understanding the diagnosis
        </h2>
        <p>
          [Content: what a scoliosis diagnosis does and doesn&apos;t mean for
          your son&apos;s future, in plain terms]
        </p>
      </section>

      <section id="supporting-your-son" aria-labelledby="supporting-your-son-heading" className="mb-12">
        <h2 id="supporting-your-son-heading" className="text-2xl mb-3">
          Supporting your son emotionally
        </h2>
        <p>
          [Content: body image, self-esteem, how to talk about it without
          making it the center of his identity]
        </p>
      </section>

      <section id="appointments-and-decisions" aria-labelledby="appointments-and-decisions-heading" className="mb-12">
        <h2 id="appointments-and-decisions-heading" className="text-2xl mb-3">
          Appointments &amp; healthcare decisions
        </h2>
        <p>
          [Content: what to expect at checkups, questions worth asking, how
          treatment decisions get made]
        </p>
      </section>

      <section id="bracing-at-home" aria-labelledby="bracing-at-home-heading" className="mb-12">
        <h2 id="bracing-at-home-heading" className="text-2xl mb-3">
          Bracing &amp; treatment at home
        </h2>
        <p>
          [Content: wear-time compliance, daily routine, what&apos;s normal
          adjustment vs. worth calling the doctor about]
        </p>
      </section>

      <section id="school-and-advocacy" aria-labelledby="school-and-advocacy-heading" className="mb-12">
        <h2 id="school-and-advocacy-heading" className="text-2xl mb-3">
          School &amp; advocacy
        </h2>
        <p>
          [Content: talking to teachers and coaches, gym class and PE
          accommodations, handling questions from classmates]
        </p>
      </section>

      <section id="connecting-with-other-parents" aria-labelledby="connecting-with-other-parents-heading" className="mb-12">
        <h2 id="connecting-with-other-parents-heading" className="text-2xl mb-3">
          Connecting with other parents
        </h2>
        <p>
          [Content: community/support groups — link out to Resources]
        </p>
      </section>

      <section id="when-to-seek-help" aria-labelledby="when-to-seek-help-heading">
        <h2 id="when-to-seek-help-heading" className="text-2xl mb-3">
          When to seek help
        </h2>
        <p>
          [Content: red flags for curve progression, and when to seek
          emotional/mental health support for your son]
        </p>
      </section>
    </main>
  );
}
