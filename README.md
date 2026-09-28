# Reinhardt Erasmus

Personal site for Reinhardt Erasmus, a full-stack developer and Head of Operations based in South Africa. It presents production software, AI tooling, and games as a record of the work, with each skill tied back to a project.

[reinhardterasmus.info](https://reinhardterasmus.info) · [LinkedIn](https://www.linkedin.com/in/reinhardterasmus/) · [GitHub](https://github.com/Spottie97) · [reinhardterasmus@gmail.com](mailto:reinhardterasmus@gmail.com)

## Site

| Path | Contents |
| --- | --- |
| `/` | Introduction, featured work, and a short skills summary |
| `/projects` | All projects, grouped as business software, AI and automation, or games |
| `/projects/[slug]` | What was built, the stack, and a live or repository link when the work is public |
| `/skills` | Tools grouped by area, each linked to the projects that use it |
| `/about` | Background and a shorter view of the same skills |
| `/contact` | Contact form |

`/services` permanently redirects to `/skills`.

## Stack

Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. The contact form sends mail through [Resend](https://resend.com) when configured. The app is set up to deploy on Vercel.

## Local development

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Copy the variables below into `.env.local`. All of them are optional for local development.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_ENABLE_ANALYTICS=
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph, the sitemap, and `llms.txt`. When it is unset, those links use `https://reinhardterasmus.info`. Without `RESEND_API_KEY`, contact submissions are logged instead of emailed. Leave `NEXT_PUBLIC_ENABLE_ANALYTICS` empty locally. Any value, such as `true`, turns on Vercel Analytics and Speed Insights.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run test` | Vitest |
| `npm run format` | Prettier |

## Editing content

- Projects live in `src/data/projects.ts`. Private work uses `visibility: "private"` and has no repository link. Public work uses `visibility: "public"` and includes `repo`. A project without `coverImage` renders a generated cover.
- Skills are derived in `src/data/skills.ts`. Every skill must match a `tech` string on at least one project.
- Name, navigation, and profile links are in `src/lib/constants.ts`.
- The about timeline is in `src/components/sections/about-journey.tsx`.

## Deployment

Deploy on Vercel. Set `NEXT_PUBLIC_SITE_URL` to `https://reinhardterasmus.info`. Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` when the contact form should deliver email.
