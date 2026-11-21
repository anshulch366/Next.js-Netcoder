# Netcoder Technology LMS

A Next.js App Router learning app with three short courses, nine lessons, searchable course and resource catalogs, and a learner dashboard.

## Run locally

Use Node.js 22 or later and npm. Open a terminal in the directory containing `package.json` and run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To test the production build, stop the development server and run

```sh
npm run build
npm start
```

Run `npm run typecheck` for a standalone TypeScript check.

Production canonical links, social previews and the sitemap use `https://www.netcoder.in` by default. Set `SITE_URL` to the public origin before building for a different domain.

## Where to edit

| File or folder | Purpose |
| --- | --- |
| `app/page.tsx` and `app/home.module.css` | Homepage content and responsive path selection layout. |
| `app/MainPages.tsx` | Courses, Resources, and Dashboard share this file. Each route's small `page.tsx` exports the corresponding component. |
| `app/layout.tsx` and `app/globals.css` | Site layout, shared navigation, footer, typography, and responsive styling. |
| `app/resources/{python,javascript,sql}/index.tsx` | Topic-specific resource pages. The adjacent `page.tsx` exposes each page through the App Router. |
| `app/courses/[courseSlug]/` | Course overview and individual lesson routes. |
| `components/` | Header, navigation, footer, course and resource cards, lesson list, course progress, topic guide, button, and search input. |
| `data/` and `types/` | Course information, lessons, resource links, and their TypeScript definitions. |
| `public/images/` | Bundled course covers and notebook illustration. |

## Try the learning flow

1. Open `/courses` and search for Python.
2. Open **Think in Python**, select **Name a value**, and work through the exercise.
3. Select **Mark as complete**. Visit `/dashboard` to see the completed lesson. Select **Completed ✓** on the lesson to undo it.
4. Visit `/resources/python` to open the Python reference links.

Progress lives in local storage for the current browser and site address. Clearing site data resets it. When storage is unavailable, progress lasts for the current page session. The included courses run without API keys or a database.

