export type CourseCategory =
  | "Design"
  | "Web Development"
  | "Digital Marketing"
  | "Multimedia"
  | "Programming";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
export type DurationBucket = "0-1 Hours" | "1-5 Hours" | "5-10 Hours" | "10+ Hours";
export type PriceType = "Free" | "Paid";

export interface CourseLessonItem {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string;
  codeExample?: string;
  exercisePrompt?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLessonItem[];
}

export interface LmsCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: CourseCategory;
  shortCategory: string;
  level: CourseLevel;
  lessonsCount: number;
  durationLabel: string;
  durationHours: number;
  durationBucket: DurationBucket;
  priceType: PriceType;
  priceLabel: string;
  banner: string;
  instructor: string;
  recommendedRank: number;
  defaultModuleLabel: string;
  defaultLessonLabel: string;
  defaultCompletedCount: number;
  defaultLastAccessed: string;
  skills: string[];
  modules: CourseModule[];
  externalFieldGuideHref?: string;
}

const BANNER = "/images/courses/learning-studio.png";

function buildModules(
  courseSlug: string,
  specs: Array<{ title: string; lessons: Array<{ title: string; duration: string; summary: string; content: string; code?: string; exercise?: string }> }>,
): CourseModule[] {
  return specs.map((mod, mIdx) => ({
    id: `${courseSlug}-m${mIdx + 1}`,
    title: mod.title,
    lessons: mod.lessons.map((les, lIdx) => ({
      id: `${courseSlug}-m${mIdx + 1}-l${lIdx + 1}`,
      title: les.title,
      duration: les.duration,
      summary: les.summary,
      content: les.content,
      codeExample: les.code,
      exercisePrompt: les.exercise,
    })),
  }));
}

export const lmsCourses: LmsCourse[] = [
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    subtitle: "Learn Visual Communication, Typography, Colour And Layout.",
    description: "Build strong foundations in visual hierarchy, colour systems, brand marks, and editorial composition through guided studio critiques.",
    category: "Design",
    shortCategory: "Design",
    level: "Beginner",
    lessonsCount: 50,
    durationLabel: "8h 20m",
    durationHours: 8.33,
    durationBucket: "5-10 Hours",
    priceType: "Paid",
    priceLabel: "₹2,499",
    banner: "/images/Learning/What Makes a Good Logo.png",
    instructor: "Meera Thakur",
    recommendedRank: 1,
    defaultModuleLabel: "Module 04 · Typography",
    defaultLessonLabel: "Lesson 08 · Type Hierarchy",
    defaultCompletedCount: 25,
    defaultLastAccessed: "Yesterday",
    skills: ["Visual Hierarchy", "Brand Typography", "Colour Systems", "Grid Layouts", "Print & Social Export"],
    modules: buildModules("graphic-design", [
      {
        title: "Module 01 · Design Foundations",
        lessons: [
          { title: "Lesson 01 · Elements of Visual Communication", duration: "14m", summary: "Line, shape, space, and contrast as the grammar of visual design.", content: "Every layout communicates priority before a single word is read. Group related elements tightly and separate distinct sections with deliberate whitespace." },
          { title: "Lesson 02 · Focal Points & Visual Weight", duration: "18m", summary: "Guide the viewer's eye through scale and contrast.", content: "Use size ratios of at least 2:1 between headline and body copy so primary headlines anchor the composition immediately." },
        ],
      },
      {
        title: "Module 02 · Colour Theory & Palettes",
        lessons: [
          { title: "Lesson 03 · 60-30-10 Colour Distribution", duration: "16m", summary: "Balance neutral backgrounds with a crisp accent colour.", content: "Reserve high-saturation accents like Netcoder orange for primary calls to action and active states while keeping surfaces calm and readable." },
          { title: "Lesson 04 · Contrast Ratios & Accessibility", duration: "15m", summary: "Check AA/AAA readability on dark and light surfaces.", content: "Body copy should maintain at least a 4.5:1 contrast ratio against its container background across desktop and mobile viewports." },
        ],
      },
      {
        title: "Module 03 · Grids & Layout Systems",
        lessons: [
          { title: "Lesson 05 · Modular & 12-Column Grids", duration: "20m", summary: "Align cards, images, and headings on consistent gutters.", content: "Consistent gutters prevent visual clutter and make responsive breakpoints predictable from desktop down to single-column mobile." },
          { title: "Lesson 06 · Poster & Card Composition", duration: "22m", summary: "Structure asymmetrical and symmetrical layouts.", content: "Pair generous outer margins with tighter internal spacing inside related card groups." },
        ],
      },
      {
        title: "Module 04 · Typography",
        lessons: [
          { title: "Lesson 07 · Pairing Display & Body Fonts", duration: "19m", summary: "Contrast geometric monospace headings with clean sans body text.", content: "Pair distinctive display faces for titles with neutral, legible sans-serif typography for multi-line descriptions and UI controls." },
          { title: "Lesson 08 · Type Hierarchy", duration: "24m", summary: "Control tracking, line-height, and scale across headings and metadata.", content: "Tighten letter-spacing slightly on large headings while increasing line-height to 1.45-1.6 for body paragraphs so scanning stays effortless.", exercise: "Create a 3-level typographic scale (H1, subtitle, caption) using a 1.25 ratio." },
        ],
      },
    ]),
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    subtitle: "Build Responsive Websites With HTML, CSS And JavaScript.",
    description: "Go from semantic HTML structures and custom CSS grids to interactive JavaScript components and production deployment.",
    category: "Web Development",
    shortCategory: "Web",
    level: "Beginner",
    lessonsCount: 50,
    durationLabel: "9h 45m",
    durationHours: 9.75,
    durationBucket: "5-10 Hours",
    priceType: "Paid",
    priceLabel: "₹2,999",
    banner: "/images/courses/project-workshop.png",
    instructor: "Rohan Katoch",
    recommendedRank: 2,
    defaultModuleLabel: "Module 02 · CSS Fundamentals",
    defaultLessonLabel: "Lesson 09 · CSS Animation",
    defaultCompletedCount: 25,
    defaultLastAccessed: "Yesterday",
    skills: ["Semantic HTML5", "Custom CSS Grid & Flex", "Responsive Breakpoints", "DOM Events", "Animations"],
    modules: buildModules("web-development", [
      {
        title: "Module 01 · Semantic HTML Architecture",
        lessons: [
          { title: "Lesson 01 · Landmarks, Headings & Forms", duration: "15m", summary: "Structure accessible pages with header, nav, main, and section landmarks.", content: "Screen readers and search engines rely on clean landmark elements and a single logical heading hierarchy.", code: "<main id=\"main\">\n  <section aria-labelledby=\"course-title\">\n    <h1 id=\"course-title\">Web Development</h1>\n  </section>\n</main>" },
          { title: "Lesson 02 · Accessible Form Controls", duration: "18m", summary: "Connect labels, hints, and validation feedback cleanly.", content: "Always pair inputs with explicit label elements and clear error descriptions." },
        ],
      },
      {
        title: "Module 02 · CSS Fundamentals",
        lessons: [
          { title: "Lesson 08 · CSS Grid & Auto-Fit Cards", duration: "22m", summary: "Build fluid multi-column dashboards without layout shift.", content: "CSS Grid lets card layouts adapt seamlessly between 3-column desktop, 2-column tablet, and single-column mobile.", code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n}" },
          { title: "Lesson 09 · CSS Animation", duration: "21m", summary: "Craft crisp transitions respecting prefers-reduced-motion.", content: "Animate transform and opacity for smooth 60fps feedback on buttons, drawers, and progress bars without triggering layout recalculation.", code: ".card {\n  transition: transform 180ms ease, border-color 180ms ease;\n}\n.card:hover {\n  transform: translateY(-2px);\n}", exercise: "Add a reduced-motion media query around a hover lift transition." },
        ],
      },
      {
        title: "Module 03 · JavaScript & Interactivity",
        lessons: [
          { title: "Lesson 10 · DOM Selection & State Updates", duration: "20m", summary: "Bind event listeners and keep UI state synchronized.", content: "Separate data updates from DOM rendering so state remains predictable." },
          { title: "Lesson 11 · LocalStorage Persistence", duration: "17m", summary: "Save user progress and form drafts cleanly in the browser.", content: "Wrap storage reads and writes in try/catch blocks so private browsing modes never crash your app." },
        ],
      },
    ]),
  },
  {
    id: "advanced-graphic-design",
    slug: "advanced-graphic-design",
    title: "Advanced Graphic Design",
    subtitle: "Master Brand Identity Systems, Packaging & Editorial Design.",
    description: "Deep-dive studio track covering multi-touchpoint brand guidelines, packaging dielines, art direction, and portfolio case studies.",
    category: "Design",
    shortCategory: "Design",
    level: "Advanced",
    lessonsCount: 68,
    durationLabel: "10h 30m",
    durationHours: 10.5,
    durationBucket: "10+ Hours",
    priceType: "Paid",
    priceLabel: "₹3,499",
    banner: BANNER,
    instructor: "Meera Thakur",
    recommendedRank: 3,
    defaultModuleLabel: "Module 01 · Brand Systems",
    defaultLessonLabel: "Lesson 01 · Identity Architecture",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Brand Guidelines", "Packaging Mockups", "Editorial Grids", "Art Direction"],
    modules: buildModules("advanced-graphic-design", [
      {
        title: "Module 01 · Brand Systems",
        lessons: [
          { title: "Lesson 01 · Identity Architecture", duration: "22m", summary: "Build scalable logo marks, wordmarks, and clear-space rules.", content: "Strong brand systems stay unmistakable from a 16px favicon to a full storefront banner." },
          { title: "Lesson 02 · Design Tokens for Print & Web", duration: "24m", summary: "Translate brand palettes across CMYK and sRGB targets.", content: "Define primary, surface, ink, and muted contrast pairs so every deliverable feels unified." },
        ],
      },
      {
        title: "Module 02 · Packaging & Editorial",
        lessons: [
          { title: "Lesson 03 · Multi-Page Editorial Grids", duration: "28m", summary: "Use baseline grids and modular spreads for long-form publications.", content: "Establish rhythm across spreads using recurring folios, pull quotes, and balanced whitespace." },
          { title: "Lesson 04 · Portfolio Case Study Presentation", duration: "26m", summary: "Tell the story from brief to final shipped system.", content: "Present early explorations alongside final decisions so hiring managers see your thinking process." },
        ],
      },
    ]),
  },
  {
    id: "ui-ux-design-systems",
    slug: "ui-ux-design-systems",
    title: "UI/UX Design Systems",
    subtitle: "Design Scalable Component Libraries & Interactive Flows.",
    description: "Create cohesive web and mobile product interfaces with reusable component tokens, auto-layout patterns, and usability heuristics.",
    category: "Design",
    shortCategory: "Design",
    level: "Intermediate",
    lessonsCount: 42,
    durationLabel: "7h 15m",
    durationHours: 7.25,
    durationBucket: "5-10 Hours",
    priceType: "Paid",
    priceLabel: "₹2,799",
    banner: BANNER,
    instructor: "Aarav Verma",
    recommendedRank: 4,
    defaultModuleLabel: "Module 01 · Component Tokens",
    defaultLessonLabel: "Lesson 01 · Spacing & Radius Scales",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Design Tokens", "Wireframing", "Prototyping", "Usability Testing"],
    modules: buildModules("ui-ux-design-systems", [
      {
        title: "Module 01 · Component Tokens",
        lessons: [
          { title: "Lesson 01 · Spacing & Radius Scales", duration: "18m", summary: "Build consistent 4px/8px spacing rhythms.", content: "Predictable spatial steps eliminate guesswork across cards, modals, and forms." },
          { title: "Lesson 02 · Interactive Component States", duration: "20m", summary: "Design default, hover, focus, disabled, and error states.", content: "Every interactive control needs unmistakable focus rings and error feedback." },
        ],
      },
    ]),
  },
  {
    id: "brand-logo-workshop",
    slug: "brand-logo-workshop",
    title: "Brand & Logo Workshop",
    subtitle: "Craft Memorable Marks From Sketch To Vector Delivery.",
    description: "Focused mini-sprint on geometric logo construction, negative space, monochrome testing, and client presentation decks.",
    category: "Design",
    shortCategory: "Design",
    level: "Beginner",
    lessonsCount: 18,
    durationLabel: "3h 10m",
    durationHours: 3.16,
    durationBucket: "1-5 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Meera Thakur",
    recommendedRank: 5,
    defaultModuleLabel: "Module 01 · Concept Sketching",
    defaultLessonLabel: "Lesson 01 · Shape Simplification",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Logo Geometry", "Vector Cleanup", "Monochrome Scaling"],
    modules: buildModules("brand-logo-workshop", [
      {
        title: "Module 01 · Concept Sketching",
        lessons: [
          { title: "Lesson 01 · Shape Simplification", duration: "16m", summary: "Test marks at 16px before adding detail.", content: "A durable mark remains legible at icon size and works in pure black and white." },
        ],
      },
    ]),
  },
  {
    id: "fullstack-nextjs-lab",
    slug: "fullstack-nextjs-lab",
    title: "Full-Stack Next.js Lab",
    subtitle: "Build Modern App Router Apps With TypeScript & Custom CSS.",
    description: "Architect server and client components, dynamic routes, metadata, and interactive dashboards in Next.js App Router.",
    category: "Web Development",
    shortCategory: "Web Development",
    level: "Advanced",
    lessonsCount: 54,
    durationLabel: "11h 15m",
    durationHours: 11.25,
    durationBucket: "10+ Hours",
    priceType: "Paid",
    priceLabel: "₹3,999",
    banner: BANNER,
    instructor: "Rohan Katoch",
    recommendedRank: 6,
    defaultModuleLabel: "Module 01 · App Router Architecture",
    defaultLessonLabel: "Lesson 01 · Layouts & Server Components",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Next.js App Router", "TypeScript", "CSS Modules", "Dynamic Routing"],
    modules: buildModules("fullstack-nextjs-lab", [
      {
        title: "Module 01 · App Router Architecture",
        lessons: [
          { title: "Lesson 01 · Layouts & Server Components", duration: "22m", summary: "Split static shells from interactive client islands.", content: "Keep static metadata and page shells on the server while isolating interactive state to focused client components." },
        ],
      },
    ]),
  },
  {
    id: "javascript-interactive-dom",
    slug: "javascript-interactive-dom",
    title: "Make a page respond",
    subtitle: "Connect Data, Events, And The DOM To Build Interactive Apps.",
    description: "Hands-on JavaScript fundamentals covering state variables, event listeners, and live DOM updates.",
    category: "Web Development",
    shortCategory: "Web Development",
    level: "Beginner",
    lessonsCount: 24,
    durationLabel: "4h 10m",
    durationHours: 4.16,
    durationBucket: "1-5 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Rohan Katoch",
    recommendedRank: 7,
    defaultModuleLabel: "Module 01 · Interactive State",
    defaultLessonLabel: "Lesson 01 · Store a count",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["JavaScript ES2024", "DOM Events", "State Management"],
    externalFieldGuideHref: "/courses/javascript",
    modules: buildModules("javascript-interactive-dom", [
      {
        title: "Module 01 · Interactive State",
        lessons: [
          { title: "Store a count", duration: "15m", summary: "Use let for a value that changes across practice sessions.", content: "A counter starts at zero and increases each time you record a practice session.", code: "let count = 0;\ncount += 1;\nconsole.log(count); // 1", exercise: "Create a second counter called minutes and add a 15-minute session." },
          { title: "Listen for a click", duration: "18m", summary: "Attach addEventListener to respond to user clicks.", content: "Place the script after the button or wait for DOMContentLoaded so the element exists when queried." },
          { title: "Render the result", duration: "18m", summary: "Update textContent inside an output element.", content: "Keep both the stored number and visible output synchronized on every event." },
        ],
      },
    ]),
  },
  {
    id: "think-in-python",
    slug: "think-in-python",
    title: "Think in Python",
    subtitle: "Turn Lists Of Observations Into Answers With Variables, Loops & Functions.",
    description: "Structured Python programming foundations with guided coding walkthroughs, exercises, and real-world data scripts.",
    category: "Programming",
    shortCategory: "Programming",
    level: "Beginner",
    lessonsCount: 32,
    durationLabel: "5h 40m",
    durationHours: 5.66,
    durationBucket: "5-10 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Vikram Rana",
    recommendedRank: 8,
    defaultModuleLabel: "Module 01 · Core Python",
    defaultLessonLabel: "Lesson 01 · Name a value",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Python Variables", "Lists & Loops", "Functions", "Problem Solving"],
    externalFieldGuideHref: "/courses/python",
    modules: buildModules("think-in-python", [
      {
        title: "Module 01 · Core Python",
        lessons: [
          { title: "Name a value", duration: "15m", summary: "Store values in variables and format strings with f-strings.", content: "A variable gives a value a clear name so calculations and summaries stay readable.", code: 'title = "The Dispossessed"\npages = 24\nprint(f"{title}: {pages} pages")', exercise: "Add 12 to the page count and print the updated count." },
          { title: "Loop over a list", duration: "18m", summary: "Visit every entry in order with a for loop.", content: "Use a running total initialized to zero before iterating through the list." },
          { title: "Write a function", duration: "20m", summary: "Reuse calculations with parameters and early returns.", content: "Guard empty lists early to avoid ZeroDivisionError." },
        ],
      },
    ]),
  },
  {
    id: "ask-better-queries-sql",
    slug: "ask-better-queries-sql",
    title: "Ask better queries (SQL)",
    subtitle: "Read Tables, Filter Rows & Summarize Datasets With SQL.",
    description: "Practical relational database querying using SELECT, WHERE, ORDER BY, GROUP BY, and aggregate functions.",
    category: "Programming",
    shortCategory: "Programming",
    level: "Intermediate",
    lessonsCount: 28,
    durationLabel: "4h 30m",
    durationHours: 4.5,
    durationBucket: "1-5 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Vikram Rana",
    recommendedRank: 9,
    defaultModuleLabel: "Module 01 · SQL Querying",
    defaultLessonLabel: "Lesson 01 · Read a table",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["SELECT & WHERE", "Sorting", "GROUP BY Aggregates"],
    externalFieldGuideHref: "/courses/sql",
    modules: buildModules("ask-better-queries-sql", [
      {
        title: "Module 01 · SQL Querying",
        lessons: [
          { title: "Read a table", duration: "15m", summary: "Select columns from a study log table.", content: "Specify exact columns instead of SELECT * to keep queries explicit.", code: "SELECT topic, minutes FROM study;" },
          { title: "Filter and sort", duration: "17m", summary: "Combine WHERE conditions with ORDER BY.", content: "Filter before sorting so results stay crisp and fast." },
          { title: "Group your results", duration: "19m", summary: "Aggregate metrics with SUM and COUNT.", content: "Group rows by category to build summary reports." },
        ],
      },
    ]),
  },
  {
    id: "digital-marketing-growth",
    slug: "digital-marketing-growth",
    title: "Digital Marketing Strategy",
    subtitle: "SEO, Paid Campaigns, Content Funnels & Analytics.",
    description: "Plan measurable digital growth campaigns across organic search, social media storytelling, and conversion tracking.",
    category: "Digital Marketing",
    shortCategory: "Digital Marketing",
    level: "Beginner",
    lessonsCount: 36,
    durationLabel: "6h 15m",
    durationHours: 6.25,
    durationBucket: "5-10 Hours",
    priceType: "Paid",
    priceLabel: "₹1,999",
    banner: BANNER,
    instructor: "Neha Sharma",
    recommendedRank: 10,
    defaultModuleLabel: "Module 01 · Growth Foundations",
    defaultLessonLabel: "Lesson 01 · Funnel Mapping",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["On-Page SEO", "Campaign Strategy", "Analytics", "Copywriting"],
    modules: buildModules("digital-marketing-growth", [
      {
        title: "Module 01 · Growth Foundations",
        lessons: [
          { title: "Lesson 01 · Funnel Mapping", duration: "18m", summary: "Connect awareness, consideration, and conversion touchpoints.", content: "Align search intent with clear landing pages and measurable calls to action." },
        ],
      },
    ]),
  },
  {
    id: "seo-analytics-sprint",
    slug: "seo-analytics-sprint",
    title: "Technical SEO Sprint",
    subtitle: "Metadata, Sitemaps, Core Web Vitals & Search Intent.",
    description: "Quick hands-on audit checklist for improving organic visibility and structured schema markup.",
    category: "Digital Marketing",
    shortCategory: "Digital Marketing",
    level: "Intermediate",
    lessonsCount: 12,
    durationLabel: "0h 55m",
    durationHours: 0.92,
    durationBucket: "0-1 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Neha Sharma",
    recommendedRank: 11,
    defaultModuleLabel: "Module 01 · Technical Audits",
    defaultLessonLabel: "Lesson 01 · Structured Data",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["JSON-LD", "Sitemaps", "Core Web Vitals"],
    modules: buildModules("seo-analytics-sprint", [
      {
        title: "Module 01 · Technical Audits",
        lessons: [
          { title: "Lesson 01 · Structured Data", duration: "20m", summary: "Validate canonical links and LearningResource schema.", content: "Clean URLs and structured metadata help search engines index educational content accurately." },
        ],
      },
    ]),
  },
  {
    id: "multimedia-video-editing",
    slug: "multimedia-video-editing",
    title: "Multimedia & Motion Studio",
    subtitle: "Video Editing, Motion Graphics & Sound Design.",
    description: "Cut engaging visual stories, animate kinetic typography, and balance audio mixes for web and social campaigns.",
    category: "Multimedia",
    shortCategory: "Multimedia",
    level: "Intermediate",
    lessonsCount: 44,
    durationLabel: "8h 50m",
    durationHours: 8.83,
    durationBucket: "5-10 Hours",
    priceType: "Paid",
    priceLabel: "₹2,899",
    banner: BANNER,
    instructor: "Kabir Malhotra",
    recommendedRank: 12,
    defaultModuleLabel: "Module 01 · Storytelling Cuts",
    defaultLessonLabel: "Lesson 01 · Pacing & Rhythm",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Timeline Editing", "Motion Keyframes", "Audio Mixing", "Colour Grading"],
    modules: buildModules("multimedia-video-editing", [
      {
        title: "Module 01 · Storytelling Cuts",
        lessons: [
          { title: "Lesson 01 · Pacing & Rhythm", duration: "21m", summary: "Cut on motion and beat markers for crisp visual flow.", content: "Use J-cuts and L-cuts to bridge audio naturally between scene transitions." },
        ],
      },
    ]),
  },
  {
    id: "motion-graphics-essentials",
    slug: "motion-graphics-essentials",
    title: "Motion Graphics Essentials",
    subtitle: "Animate Logos, Lower Thirds & UI Explainers.",
    description: "Learn easing curves, mask reveals, and crisp vector animation workflows.",
    category: "Multimedia",
    shortCategory: "Multimedia",
    level: "Beginner",
    lessonsCount: 20,
    durationLabel: "3h 45m",
    durationHours: 3.75,
    durationBucket: "1-5 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Kabir Malhotra",
    recommendedRank: 13,
    defaultModuleLabel: "Module 01 · Easing & Curves",
    defaultLessonLabel: "Lesson 01 · Speed Graphs",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Easing Curves", "Logo Reveals", "Kinetic Type"],
    modules: buildModules("motion-graphics-essentials", [
      {
        title: "Module 01 · Easing & Curves",
        lessons: [
          { title: "Lesson 01 · Speed Graphs", duration: "19m", summary: "Replace linear keyframes with natural ease-out curves.", content: "Controlled deceleration gives UI and brand animations physical weight." },
        ],
      },
    ]),
  },
  {
    id: "dsa-problem-solving",
    slug: "dsa-problem-solving",
    title: "DSA & Problem Solving",
    subtitle: "Arrays, Hash Maps, Trees & Interview Patterns.",
    description: "Build algorithmic intuition with step-by-step complexity analysis and coding drills.",
    category: "Programming",
    shortCategory: "Programming",
    level: "Advanced",
    lessonsCount: 64,
    durationLabel: "12h 40m",
    durationHours: 12.67,
    durationBucket: "10+ Hours",
    priceType: "Paid",
    priceLabel: "₹3,799",
    banner: BANNER,
    instructor: "Vikram Rana",
    recommendedRank: 14,
    defaultModuleLabel: "Module 01 · Patterns",
    defaultLessonLabel: "Lesson 01 · Two Pointers",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Time Complexity", "Sliding Window", "Trees & Graphs"],
    modules: buildModules("dsa-problem-solving", [
      {
        title: "Module 01 · Patterns",
        lessons: [
          { title: "Lesson 01 · Two Pointers", duration: "24m", summary: "Solve sorted pair and partition tasks in O(n) time.", content: "Maintain left and right indices to eliminate nested loop scans." },
        ],
      },
    ]),
  },
  {
    id: "responsive-css-architecture",
    slug: "responsive-css-architecture",
    title: "Responsive CSS Architecture",
    subtitle: "Custom Properties, Container Queries & Fluid Spacing.",
    description: "Write maintainable custom CSS without framework bloat using CSS Modules and modern layout primitives.",
    category: "Web Development",
    shortCategory: "Web Development",
    level: "Intermediate",
    lessonsCount: 26,
    durationLabel: "4h 50m",
    durationHours: 4.83,
    durationBucket: "1-5 Hours",
    priceType: "Paid",
    priceLabel: "₹1,799",
    banner: BANNER,
    instructor: "Rohan Katoch",
    recommendedRank: 15,
    defaultModuleLabel: "Module 01 · Design Tokens in CSS",
    defaultLessonLabel: "Lesson 01 · Fluid Typography",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["CSS Modules", "Custom Properties", "Container Queries"],
    modules: buildModules("responsive-css-architecture", [
      {
        title: "Module 01 · Design Tokens in CSS",
        lessons: [
          { title: "Lesson 01 · Fluid Typography", duration: "16m", summary: "Scale headings smoothly with clamp().", content: "Combine rem and viewport units inside clamp() so type breathes cleanly across devices." },
        ],
      },
    ]),
  },
  {
    id: "packaging-print-production",
    slug: "packaging-print-production",
    title: "Print & Packaging Production",
    subtitle: "Bleeds, Dielines, Spot Colours & Press Checks.",
    description: "Prepare print-ready files for packaging, stationery, and large-format signage without costly press errors.",
    category: "Design",
    shortCategory: "Design",
    level: "Intermediate",
    lessonsCount: 16,
    durationLabel: "2h 40m",
    durationHours: 2.66,
    durationBucket: "1-5 Hours",
    priceType: "Paid",
    priceLabel: "₹1,499",
    banner: BANNER,
    instructor: "Meera Thakur",
    recommendedRank: 16,
    defaultModuleLabel: "Module 01 · Prepress Setup",
    defaultLessonLabel: "Lesson 01 · Bleed & Safe Margins",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Dielines", "CMYK Profiles", "Prepress Export"],
    modules: buildModules("packaging-print-production", [
      {
        title: "Module 01 · Prepress Setup",
        lessons: [
          { title: "Lesson 01 · Bleed & Safe Margins", duration: "15m", summary: "Extend background artwork 3mm past the trim box.", content: "Always keep critical logos and text inside the safe margin away from fold lines." },
        ],
      },
    ]),
  },
  {
    id: "social-media-creative-sprint",
    slug: "social-media-creative-sprint",
    title: "Social Media Creative Sprint",
    subtitle: "High-Converting Carousels, Reels & Campaign Kits.",
    description: "Quick practical sprint on designing cohesive social campaigns that turn views into enrollments.",
    category: "Digital Marketing",
    shortCategory: "Digital Marketing",
    level: "Beginner",
    lessonsCount: 10,
    durationLabel: "0h 50m",
    durationHours: 0.83,
    durationBucket: "0-1 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Neha Sharma",
    recommendedRank: 17,
    defaultModuleLabel: "Module 01 · Campaign Kits",
    defaultLessonLabel: "Lesson 01 · Hook Slide Design",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Carousel Hooks", "Ad Creatives", "CTA Placement"],
    modules: buildModules("social-media-creative-sprint", [
      {
        title: "Module 01 · Campaign Kits",
        lessons: [
          { title: "Lesson 01 · Hook Slide Design", duration: "14m", summary: "Lead with a single crisp promise and high contrast.", content: "Limit slide one to 7 words so mobile readers grasp the value in under 2 seconds." },
        ],
      },
    ]),
  },
  {
    id: "audio-podcast-production",
    slug: "audio-podcast-production",
    title: "Audio & Podcast Production",
    subtitle: "Clean Dialogue Recording, Noise Reduction & Mastering.",
    description: "Quick crash course on crisp voice recording, EQ, compression, and LUFS loudness standards.",
    category: "Multimedia",
    shortCategory: "Multimedia",
    level: "Beginner",
    lessonsCount: 14,
    durationLabel: "0h 45m",
    durationHours: 0.75,
    durationBucket: "0-1 Hours",
    priceType: "Free",
    priceLabel: "Free",
    banner: BANNER,
    instructor: "Kabir Malhotra",
    recommendedRank: 18,
    defaultModuleLabel: "Module 01 · Voice Clarity",
    defaultLessonLabel: "Lesson 01 · Gain Staging",
    defaultCompletedCount: 0,
    defaultLastAccessed: "Just enrolled",
    skills: ["Mic Technique", "Voice EQ", "Loudness Mastering"],
    modules: buildModules("audio-podcast-production", [
      {
        title: "Module 01 · Voice Clarity",
        lessons: [
          { title: "Lesson 01 · Gain Staging", duration: "12m", summary: "Record clean peaks around -12 dBFS without clipping.", content: "Clean acoustic placement matters far more than aggressive post-processing." },
        ],
      },
    ]),
  },
];

export function getCourseTotalClasses(course: LmsCourse): number {
  return Math.max(8, Math.round(course.lessonsCount * 0.48));
}

export interface ProgramClassSession {
  id: string;
  number: number;
  title: string;
  moduleTitle: string;
  duration: string;
}

export function getCourseProgramSessions(course: LmsCourse): ProgramClassSession[] {
  const total = getCourseTotalClasses(course);
  const moduleTitles = course.modules.map((m) => m.title);
  const lessonItems = course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ title: l.title, moduleTitle: m.title, duration: l.duration })),
  );

  return Array.from({ length: total }, (_, idx) => {
    const num = idx + 1;
    const mapped = lessonItems[idx];
    const modTitle =
      mapped?.moduleTitle ??
      moduleTitles[Math.min(moduleTitles.length - 1, Math.floor((idx / total) * moduleTitles.length))] ??
      course.defaultModuleLabel;
    const topicTitle = mapped
      ? mapped.title.replace(/^Lesson \d+\s*·\s*/i, "")
      : `${course.shortCategory} Practice Lab ${num}`;
    return {
      id: `${course.id}-cls-${num}`,
      number: num,
      title: `Class ${String(num).padStart(2, "0")} · ${topicTitle}`,
      moduleTitle: modTitle,
      duration: mapped?.duration ?? "45m",
    };
  });
}

export interface ScheduleSession {
  id: string;
  courseId: string;
  day: string;
  dateLabel: string;
  time: string;
  title: string;
  courseTitle: string;
  instructor: string;
  mode: "Live Studio" | "Campus Lab" | "Mentor Review";
  status: "Upcoming" | "Completed";
  rsvped: boolean;
}

export function getCourseScheduleSessions(course: LmsCourse): ScheduleSession[] {
  const firstMod = course.modules[0]?.title ?? course.defaultModuleLabel;
  const secondMod = course.modules[1]?.title ?? firstMod;
  return [
    {
      id: `sch-${course.id}-1`,
      courseId: course.id,
      day: "Today",
      dateLabel: "Upcoming Batch",
      time: "04:00 PM - 05:15 PM",
      title: `${firstMod.replace(/^Module \d+\s*·\s*/i, "")} Live Studio`,
      courseTitle: course.title,
      instructor: course.instructor,
      mode: "Live Studio",
      status: "Upcoming",
      rsvped: false,
    },
    {
      id: `sch-${course.id}-2`,
      courseId: course.id,
      day: "Saturday",
      dateLabel: "Weekly Lab",
      time: "11:00 AM - 12:30 PM",
      title: `${secondMod.replace(/^Module \d+\s*·\s*/i, "")} Mentor Review`,
      courseTitle: course.title,
      instructor: course.instructor,
      mode: "Campus Lab",
      status: "Upcoming",
      rsvped: false,
    },
    {
      id: `sch-${course.id}-3`,
      courseId: course.id,
      day: "Wednesday",
      dateLabel: "Weekly Practice",
      time: "03:30 PM - 04:30 PM",
      title: `${course.title} Practice Session`,
      courseTitle: course.title,
      instructor: course.instructor,
      mode: "Mentor Review",
      status: "Upcoming",
      rsvped: false,
    },
  ];
}

export const initialSchedule: ScheduleSession[] = [];

export interface LmsAssignment {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  moduleLabel: string;
  dueDate: string;
  status: "Pending" | "Submitted";
  brief: string;
  submissionNote?: string;
}

export function getCourseAssignments(course: LmsCourse): LmsAssignment[] {
  const primarySkill = course.skills[0] ?? course.category;
  const secondarySkill = course.skills[1] ?? course.shortCategory;
  const modOne = course.modules[0]?.title ?? course.defaultModuleLabel;
  const modTwo = course.modules[1]?.title ?? modOne;

  return [
    {
      id: `asg-${course.id}-1`,
      title: `${primarySkill} Practical Deliverable`,
      courseId: course.id,
      courseTitle: course.title,
      moduleLabel: modOne,
      dueDate: "7 Days",
      status: "Pending",
      brief: `Apply ${primarySkill.toLowerCase()} fundamentals covered in ${course.title} and share your project link or notes for mentor review.`,
    },
    {
      id: `asg-${course.id}-2`,
      title: `${secondarySkill} Capstone Exercise`,
      courseId: course.id,
      courseTitle: course.title,
      moduleLabel: modTwo,
      dueDate: "14 Days",
      status: "Pending",
      brief: `Complete a portfolio-ready exercise demonstrating ${secondarySkill.toLowerCase()} in ${course.title}.`,
    },
    {
      id: `asg-${course.id}-3`,
      title: `${course.shortCategory} Portfolio Review`,
      courseId: course.id,
      courseTitle: course.title,
      moduleLabel: modTwo,
      dueDate: "21 Days",
      status: "Pending",
      brief: `Prepare a short portfolio piece from ${course.title} and submit it for mentor feedback.`,
    },
  ];
}

export const initialAssignments: LmsAssignment[] = [];

export interface LmsCertificate {
  id: string;
  title: string;
  courseId: string;
  issuedOn: string;
  credentialCode: string;
  hours: string;
  status: "Earned" | "In Progress";
}

export const initialCertificates: LmsCertificate[] = [];

export interface LmsNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  category: "Schedule" | "Course" | "Assignment";
  read: boolean;
}

export const initialNotifications: LmsNotification[] = [
  {
    id: "notif-welcome",
    title: "Welcome To Netcoder Technology LMS",
    message: "Select your courses in Explore Courses to view your program, live schedule, and class attendance.",
    time: "Just now",
    category: "Course",
    read: false,
  },
];
