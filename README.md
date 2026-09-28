# Reinhardt Erasmus — portfolio

Personal portfolio for a full-stack developer and Head of Operations. It shows business software, AI tooling, and games. It does not sell packages.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — intro, featured work, and a skills snapshot
- `/projects` — all projects, filtered by business software, AI and automation, or games
- `/projects/[slug]` — what was built, the stack, and links when the work is public
- `/skills` — tools grouped by area, each linked to the projects that use it
- `/about` — background and the same skills, in short form
- `/contact` — email form

`/services` redirects to `/skills`.

## Project structure

```
src/
├── app/                  # routes
├── components/           # layout, sections, project cards
├── data/
│   ├── projects.ts       # project write-ups
│   ├── skills.ts         # skills, derived from project.tech
│   └── logos.ts          # logo slider
└── lib/                  # constants, SEO, mail, validation
```

Private repositories are described in `projects.ts` with `visibility: "private"` and no `repo` link. Public repositories set `visibility: "public"` and include `repo`.

Screenshots are optional. A project without `coverImage` gets a generated cover.

## Getting started

Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

Without a Resend key, contact submissions are logged instead of emailed.

## Scripts

```bash
npm run dev          # development server
npm run build        # production build
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run test         # Vitest
npm run format       # Prettier
```

## Editing content

- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts` (every skill alias must match a `tech` string on at least one project)
- Name, links, and navigation: `src/lib/constants.ts`
- About timeline: `src/components/sections/about-journey.tsx`

## Deployment

The app is set up for Vercel. Set `NEXT_PUBLIC_SITE_URL`, and `RESEND_API_KEY` / `RESEND_FROM_EMAIL` if the contact form should send mail.
