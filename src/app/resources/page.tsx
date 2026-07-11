import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Boys with Scoliosis",
};

type Resource = {
  title: string;
};

type Category = {
  title: string;
  id: string;
  resources: Resource[];
};

// Real links aren't ready yet, so entries are plain text rather than
// <a href="#">  placeholders — a fake link that goes nowhere is worse
// than no link at all.
const categories: Category[] = [
  {
    title: "Medical organizations & specialist directories",
    id: "medical-organizations",
    resources: [
      { title: "[Content: organization name + link goes here]" },
      { title: "[Content: organization name + link goes here]" },
    ],
  },
  {
    title: "Bracing & equipment",
    id: "bracing-and-equipment",
    resources: [
      { title: "[Content: brace manufacturer / supplier link goes here]" },
      { title: "[Content: brace manufacturer / supplier link goes here]" },
    ],
  },
  {
    title: "Support communities",
    id: "support-communities",
    resources: [
      { title: "[Content: support group / forum link goes here]" },
      { title: "[Content: support group / forum link goes here]" },
    ],
  },
  {
    title: "Books & further reading",
    id: "books-and-reading",
    resources: [
      { title: "[Content: book or article link goes here]" },
      { title: "[Content: book or article link goes here]" },
    ],
  },
  {
    title: "Mental health & counseling",
    id: "mental-health",
    resources: [
      { title: "[Content: counseling resource link goes here]" },
      { title: "[Content: counseling resource link goes here]" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl mb-4">Resources</h1>
      <p className="text-lg text-muted mb-10">
        [Content: short framing paragraph — how these resources were chosen /
        vetted]
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
          <ul className="flex flex-col gap-3">
            {category.resources.map((resource, index) => (
              <li
                key={index}
                className="rounded-lg border border-border bg-surface p-4 text-muted"
              >
                {resource.title}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
