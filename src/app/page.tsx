import Image from "next/image";
import Link from "next/link";

const audiencePaths = [
  {
    title: "What is Scoliosis",
    description: "[Content: 1-2 sentence summary aimed at a teen reader]",
    href: "/what-is-scoliosis",
  },
  {
    title: "For Parents",
    description: "[Content: 1-2 sentence summary aimed at a parent reader]",
    href: "/for-parents",
  },
  {
    title: "Living With Scoliosis",
    description: "[Content: 1-2 sentence summary — school, sports, daily life]",
    href: "/living-with-scoliosis",
  },
];

const quickLinks = [
  { title: "Bracing & Treatment", href: "/bracing-and-treatment" },
  { title: "Frequently Asked Questions", href: "/faq" },
  { title: "Resources", href: "/resources" },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section className="bg-subtle">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl mb-4">
            [Content: homepage headline goes here]
          </h1>
          <p className="mx-auto text-lg text-muted mb-8">
            [Content: one or two sentences introducing the site to both a
            teenage reader and a parent — reassuring, not clinical]
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/what-is-scoliosis"
              className="rounded-full bg-primary text-white px-6 py-3 font-semibold no-underline hover:bg-primary-hover"
            >
              [Content: CTA — e.g. &quot;I was just diagnosed&quot;]
            </Link>
            <Link
              href="/for-parents"
              className="rounded-full bg-accent text-white px-6 py-3 font-semibold no-underline hover:bg-accent-hover"
            >
              [Content: CTA — e.g. &quot;I&apos;m a parent&quot;]
            </Link>
          </div>
        </div>
      </section>

      {/* Audience paths */}
      <section aria-labelledby="audience-paths-heading" className="mx-auto max-w-5xl px-6 py-16">
        <h2 id="audience-paths-heading" className="text-2xl mb-8 text-center">
          [Content: section heading — start here]
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {audiencePaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="block rounded-lg border border-border bg-surface p-6 no-underline hover:border-primary"
            >
              <h3 className="text-xl mb-2 text-foreground">{path.title}</h3>
              <p className="text-muted text-base">{path.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* My story */}
      <section aria-labelledby="my-story-heading" className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[240px_1fr] items-center">
          <Image
            src="/images/ajay-headshot.png"
            alt="Ajay, who created this site"
            width={240}
            height={240}
            className="rounded-xl object-cover mx-auto sm:mx-0"
          />
          <div>
            <h2 id="my-story-heading" className="text-2xl mb-3">
              My Story
            </h2>
            <p>
              [Content: personal story goes here — why this site exists, told
              in first person]
            </p>
          </div>
        </div>
      </section>

      {/* Reassurance / credibility strip */}
      <section aria-labelledby="credibility-heading" className="bg-primary-subtle">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center">
          <h2 id="credibility-heading" className="text-xl mb-2">
            [Content: reassurance statement — e.g. clinical review note]
          </h2>
          <p className="mx-auto text-muted">
            [Content: expand on who reviews this content and why it can be
            trusted]
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section aria-labelledby="quick-links-heading" className="mx-auto max-w-5xl px-6 py-16">
        <h2 id="quick-links-heading" className="text-2xl mb-6 text-center">
          [Content: section heading — explore more]
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block rounded-full border border-border px-5 py-2 no-underline hover:bg-subtle"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
