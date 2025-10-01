# Agricultural Software Engineer Portfolio

Professional portfolio website for an agricultural software engineer, showcasing farm management platforms, IoT integrations, and precision agriculture solutions. Built with Next.js 15 (App Router), TypeScript, shadcn/ui, and Tailwind CSS—optimized for Vercel deployment.

## 🌱 Features

- **Mobile-first, responsive design** with agricultural green theme
- **Infinite logo slider** showcasing tech stack with smooth animations
- **SEO-optimized** with metadata API, JSON-LD structured data, sitemap, and robots.txt
- **Dark mode** via next-themes with custom agricultural color palette
- **Type-safe** with TypeScript and zod validation
- **Serverless architecture** ready for Vercel Edge deployment
- **Contact form** with Resend email integration (optional) and bot protection
- **Accessibility** with semantic HTML, ARIA labels, skip-to-content, keyboard navigation
- **Performance** optimized with next/image, proper caching, and Core Web Vitals focus

## 📁 Project Structure

```
portfolio-website-sitesmith/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (legal)/           # Route group for privacy/terms
│   │   ├── about/             # About page
│   │   ├── api/               # API routes (contact handler)
│   │   ├── contact/           # Contact page with form
│   │   ├── projects/          # Projects listing and [slug] details
│   │   ├── services/          # Service packages page
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   └── robots.ts          # Robots.txt generation
│   ├── components/
│   │   ├── cards/             # ProjectCard, ServiceCard
│   │   ├── forms/             # ContactForm, ContactDetails
│   │   ├── hooks/             # Custom React hooks
│   │   ├── layout/            # SiteHeader, SiteFooter, MainLayout
│   │   ├── navigation/        # ThemeToggle
│   │   ├── providers/         # ThemeProvider wrapper
│   │   ├── sections/          # Page sections (Hero, Testimonials, etc.)
│   │   └── ui/                # shadcn/ui components
│   ├── data/                  # Type-safe data modules
│   │   ├── logos.ts           # Logo cloud data
│   │   ├── projects.ts        # Project case studies
│   │   ├── services.ts        # Service packages
│   │   └── testimonials.ts    # Client testimonials
│   ├── lib/
│   │   ├── constants.ts       # Site-wide constants
│   │   ├── mailer.ts          # Resend email integration
│   │   ├── seo.ts             # Metadata builders and JSON-LD helpers
│   │   ├── utils.ts           # cn() utility
│   │   └── validators.ts      # Zod schemas for forms
│   └── env.mjs                # Typed environment variables
├── public/
│   ├── images/                # Project screenshots (if local)
│   └── logos/                 # Technology logos
├── middleware.ts              # Security headers middleware
└── next.config.ts             # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) Resend API key for contact form emails

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website-sitesmith
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_key_here
RESEND_FROM_EMAIL=hello@yourdomain.com
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customizing Content

### Update Personal Information

Edit `src/lib/constants.ts`:

```typescript
export const SITE_NAME = "Your Name";
export const SITE_TITLE = "Agricultural Software Engineer";
export const SITE_LOCATION = "Your Location";
export const SITE_CONTACT_EMAIL = "your@email.com";
export const SITE_PHONE = "0834003092";

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  x: "https://x.com/yourusername",
};
```

### Add/Edit Projects

Edit `src/data/projects.ts` and add new project objects:

```typescript
{
  title: "Your Project Name",
  slug: "project-slug",
  summary: "Brief project description",
  description: "Detailed description for project page",
  metaTitle: "SEO title",
  metaDescription: "SEO description",
  tech: ["Next.js", "IoT", "Python"],
  tags: ["Agriculture", "IoT"],
  role: "Lead Engineer",
  timeline: "12 weeks",
  publishedAt: "2024-01-15",
  outcomes: ["Outcome 1", "Outcome 2"],
  metrics: ["Metric 1", "Metric 2"],
  repo: "https://github.com/user/repo",
  live: "https://live-demo.com",
  featured: true,
  coverImage: "https://images.unsplash.com/photo-id",
  gallery: ["image1.jpg", "image2.jpg"],
  industry: "Agriculture",
}
```

### Update Service Packages

Edit `src/data/services.ts` to modify pricing, deliverables, and features for each package tier.

### Modify Testimonials

Edit `src/data/testimonials.ts`:

```typescript
{
  name: "Client Name",
  role: "Job Title",
  company: "Company Name",
  quote: "Testimonial text here",
}
```

### Update About Timeline

Edit `src/components/sections/about-summary.tsx` to modify your professional timeline and bio.

## 🎨 Theme Customization

The site uses an agricultural green color palette defined in `src/app/globals.css`. To customize:

```css
:root {
  --primary: oklch(0.45 0.15 142); /* Agricultural green */
  --secondary: oklch(0.96 0.01 142); /* Light green */
  /* ... other colors */
}
```

Hue value `142` gives the green tone. Adjust to your preference:
- Blue: `220-260`
- Green: `120-160`
- Brown/Earth: `30-60`

## 🧪 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run test         # Run Vitest tests
npm run test:watch   # Run tests in watch mode
npm run format       # Format code with Prettier
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Verify your sending domain
4. Add credentials to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxx
   RESEND_FROM_EMAIL=hello@yourdomain.com
   ```

If Resend is not configured, form submissions will log to console (check Vercel logs in production).

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY` (optional)
   - `RESEND_FROM_EMAIL` (optional)
   - `NEXT_PUBLIC_ENABLE_ANALYTICS` (optional)
4. Deploy

Vercel will automatically:
- Detect Next.js and configure build settings
- Enable Edge runtime for API routes
- Set up preview deployments for PRs

### Other Platforms

The app is serverless-compatible and can deploy to:
- Netlify
- Cloudflare Pages
- AWS Amplify

Ensure Edge runtime is supported or adjust `runtime = "edge"` in API routes to `runtime = "nodejs"`.

## 🔒 Security Headers

Security headers are configured in `middleware.ts`:
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- Basic Content Security Policy (adjust as needed)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and landmarks
- Skip-to-content link for keyboard users
- Focus states on all interactive elements
- Color contrast tested for WCAG AA compliance
- Forms with proper labels and error messaging

## 🔍 SEO Checklist

- ✅ Metadata API with Open Graph and Twitter cards
- ✅ JSON-LD structured data (Person, Organization, Project, Service)
- ✅ Dynamic sitemap.xml generation
- ✅ robots.txt with sitemap reference
- ✅ Canonical URLs for all pages
- ✅ Semantic heading hierarchy
- ✅ Image optimization with next/image
- ✅ Mobile-first responsive design

## 📊 Analytics

To enable Vercel Analytics:

1. Set environment variable:
   ```
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```
2. Vercel Analytics will auto-enable on Vercel deployments

For Google Analytics or other providers, add tracking scripts in `src/app/layout.tsx`.

## 🧪 Testing

Basic test setup with Vitest is included:

```bash
npm run test        # Run all tests
npm run test:watch  # Run in watch mode
```

Add tests in `src/__tests__/` or co-located with components (e.g., `ComponentName.test.tsx`).

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix primitives)
- **Forms**: react-hook-form + zod validation
- **Theme**: next-themes
- **Email**: Resend (optional)
- **Analytics**: Vercel Analytics (optional)
- **Testing**: Vitest + Testing Library
- **Deployment**: Vercel (Edge/serverless)

## 📄 License

See `LICENSE` file.

## 🤝 Support

For questions or issues:
- Email: hello@example.com
- Phone: 0834003092 (Available after 17:30)

---

Built with ❤️ for farmers and agribusinesses transforming through technology.
