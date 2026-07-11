export type NavItem = {
  label: string;
  href: string;
};

// Single source of truth for primary site sections, shared by the
// header nav, footer, and (later) any sitemap/breadcrumb rendering.
export const primaryNav: NavItem[] = [
  { label: "What is Scoliosis", href: "/what-is-scoliosis" },
  { label: "Bracing & Treatment", href: "/bracing-and-treatment" },
  { label: "Living With Scoliosis", href: "/living-with-scoliosis" },
  { label: "For Parents", href: "/for-parents" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
];
