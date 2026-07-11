import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living With Scoliosis — Boys with Scoliosis",
};

const sections = [
  { id: "sports-and-activity", title: "Sports & physical activity" },
  { id: "school-and-social-life", title: "School & social life" },
  { id: "body-image-and-confidence", title: "Body image & confidence" },
  { id: "daily-comfort", title: "Sleeping & daily comfort" },
  { id: "clothing", title: "Clothing & wearing a brace" },
  { id: "talking-to-friends", title: "Talking to friends about it" },
  { id: "staying-active-long-term", title: "Staying active long-term" },
];

export default function LivingWithScoliosisPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">Living With Scoliosis</h1>
      <p className="text-lg text-muted mb-10">
        [Content: short framing paragraph — written directly to a teenage
        reader about day-to-day life, not the medical basics]
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

      <section id="sports-and-activity" aria-labelledby="sports-and-activity-heading" className="mb-12">
        <h2 id="sports-and-activity-heading" className="text-2xl mb-3">
          Sports &amp; physical activity
        </h2>
        <p>
          [Content: what sports and activities are still fine, what to check
          with a doctor about]
        </p>
      </section>

      <section id="school-and-social-life" aria-labelledby="school-and-social-life-heading" className="mb-12">
        <h2 id="school-and-social-life-heading" className="text-2xl mb-3">
          School &amp; social life
        </h2>
        <p>
          [Content: gym class, sitting in class with a brace, handling
          questions from classmates]
        </p>
      </section>

      <section id="body-image-and-confidence" aria-labelledby="body-image-and-confidence-heading" className="mb-12">
        <h2 id="body-image-and-confidence-heading" className="text-2xl mb-3">
          Body image &amp; confidence
        </h2>
        <p>
          [Content: feeling different, self-esteem, hearing from other guys
          who&apos;ve been through it]
        </p>
      </section>

      <section id="daily-comfort" aria-labelledby="daily-comfort-heading" className="mb-12">
        <h2 id="daily-comfort-heading" className="text-2xl mb-3">
          Sleeping &amp; daily comfort
        </h2>
        <p>
          [Content: sleeping in a brace, getting comfortable, everyday
          adjustments]
        </p>
      </section>

      <section id="clothing" aria-labelledby="clothing-heading" className="mb-12">
        <h2 id="clothing-heading" className="text-2xl mb-3">
          Clothing &amp; wearing a brace
        </h2>
        <p>[Content: what to wear under a brace, dressing to feel normal]</p>
      </section>

      <section id="talking-to-friends" aria-labelledby="talking-to-friends-heading" className="mb-12">
        <h2 id="talking-to-friends-heading" className="text-2xl mb-3">
          Talking to friends about it
        </h2>
        <p>
          [Content: how much to share, handling curiosity or teasing]
        </p>
      </section>

      <section id="staying-active-long-term" aria-labelledby="staying-active-long-term-heading">
        <h2 id="staying-active-long-term-heading" className="text-2xl mb-3">
          Staying active long-term
        </h2>
        <p>
          [Content: life after bracing/treatment, long-term outlook, link out
          to Bracing &amp; Treatment]
        </p>
      </section>
    </main>
  );
}
