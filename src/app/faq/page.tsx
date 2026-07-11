import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Boys with Scoliosis",
};

type Question = {
  question: string;
  id: string;
};

type Category = {
  title: string;
  id: string;
  questions: Question[];
};

// Native <details>/<summary> is used instead of a custom accordion —
// it's keyboard-operable and announces its expanded/collapsed state
// to screen readers with no extra ARIA wiring to get wrong. A heading
// is nested inside each <summary> (valid per the HTML spec's content
// model for summary) so screen reader users can still navigate the
// page question-by-question via heading shortcuts.
const categories: Category[] = [
  {
    title: "General",
    id: "general",
    questions: [
      { id: "general-1", question: "[Content: placeholder question]" },
      { id: "general-2", question: "[Content: placeholder question]" },
    ],
  },
  {
    title: "Diagnosis & Types",
    id: "diagnosis",
    questions: [
      { id: "diagnosis-1", question: "[Content: placeholder question]" },
      { id: "diagnosis-2", question: "[Content: placeholder question]" },
    ],
  },
  {
    title: "Bracing & Treatment",
    id: "treatment",
    questions: [
      { id: "treatment-1", question: "[Content: placeholder question]" },
      { id: "treatment-2", question: "[Content: placeholder question]" },
    ],
  },
  {
    title: "Living With Scoliosis",
    id: "living-with",
    questions: [
      { id: "living-with-1", question: "[Content: placeholder question]" },
      { id: "living-with-2", question: "[Content: placeholder question]" },
    ],
  },
  {
    title: "For Parents",
    id: "for-parents",
    questions: [
      { id: "for-parents-1", question: "[Content: placeholder question]" },
      { id: "for-parents-2", question: "[Content: placeholder question]" },
    ],
  },
];

export default function FaqPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-muted mb-10">
        [Content: short framing paragraph for the FAQ page]
      </p>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
          className="mb-10"
        >
          <h2 id={`${category.id}-heading`} className="text-2xl mb-4">
            {category.title}
          </h2>
          <div className="flex flex-col gap-3">
            {category.questions.map((item) => (
              <details
                key={item.id}
                className="rounded-lg border border-border bg-surface p-4 open:pb-4"
              >
                <summary className="cursor-pointer font-semibold marker:text-primary">
                  <h3 className="inline">{item.question}</h3>
                </summary>
                <p className="mt-3 text-muted">
                  [Content: answer placeholder]
                </p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
