# Boys with Scoliosis

A health information and support site for boys with scoliosis and their families. This is a ground-up rebuild of an existing, already-deployed site, with a much more thorough content structure and real accessibility work baked in from the start.

## Status

Structure and scaffolding phase. Pages exist with placeholder content; real medical content is being written separately and will replace the placeholders incrementally.

## Stack

- **Next.js (App Router) + TypeScript** — file-based routing maps cleanly onto the site's section structure, static generation keeps a content-heavy site fast, and the built-in `<Image>` and font optimization matter for a public health resource that needs to load well on any device.
- **Tailwind CSS** — keeps the design system (color, type scale, spacing) centralized in config rather than scattered across components, which matters here since tone and readability are first-class requirements, not an afterthought.
- **Vercel** — deployment target; pairs directly with Next.js with no extra config.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment

Deploys to Vercel with no custom config: import this repo at [vercel.com/new](https://vercel.com/new), it auto-detects Next.js, and every push to `main` deploys to production with PRs getting preview URLs. `engines.node` in `package.json` pins the Node version Vercel builds with.
