import Link from "next/link";
import { primaryNav } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-subtle">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="no-underline hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-6 text-sm text-muted">
          [Content: disclaimer / &quot;this is not a substitute for medical
          advice&quot; notice goes here]
        </p>
      </div>
    </footer>
  );
}
