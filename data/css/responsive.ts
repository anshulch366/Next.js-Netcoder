import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const responsiveDemo = cssDemo(
  "<main class=\"page\"><h1>Field notebook</h1><p>Workshop observations and material samples.</p><p class=\"code\">ARCHIVE2027WATERCOLOURWORKBOOK</p></main>",
  ".page { background: #fff4e8; }",
);

const mediaQueriesDemo = cssDemo(
  "<main class=\"board\"><article>Morning classes</article><article>Evening classes</article><button>View timetable</button></main>",
  ".board { display: grid; gap: .5rem; }\narticle { padding: .75rem; background: wheat; }",
);

const containerMediaDemo = cssDemo(
  "<section class=\"slot\"><article class=\"card\"><img alt=\"Orange disk on ivory paper\" src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='120'%3E%3Crect width='240' height='120' fill='ivory'/%3E%3Ccircle cx='120' cy='60' r='48' fill='coral'/%3E%3C/svg%3E\"><p>Proof 04</p></article></section>",
  ".slot { width: min(100%, 36rem); }\n.card { background: #fff0dc; }",
);

export const responsive = chapter("CSS Responsive", [
  {
    id: "responsive", title: "Fluid pages and the mobile viewport", level: "Beginner",
    summary: "Make one layout work from a narrow phone to a wide window.",
    content: [
      "Start small, with one reading column and a viewport meta tag. Open an example in device emulation. Resize continuously so you can spot the exact width at which the content needs more room.",
      "The parent sets the available width. Percentage sizes, maximum sizes and flexible breaks help the page fit that space without relying on a particular phone model.",
    ],
    examples: [
      { title: "Use the available width", code: responsiveDemo(".page { width: 90%; margin-inline: auto; }"), result: "The page stays centred with five percent of its containing block available on each side." },
      { title: "Stop excessive expansion", code: responsiveDemo(".page { width: 90%; max-width: 42rem; margin-inline: auto; }"), result: "The page grows until the 42rem cap takes effect." },
      { title: "Count padding inside the width", code: responsiveDemo(".page { box-sizing: border-box; width: 100%; padding: 1rem; }"), result: "Padding is included in the specified width so it does not add another two rem to the page." },
      { title: "Wrap an unbroken identifier", code: responsiveDemo(".code { max-width: 10rem; overflow-wrap: anywhere; }"), result: "The archive code can break inside the string on a narrow line." },
      { title: "Scale the title within limits", code: responsiveDemo("h1 { font-size: clamp(1.5rem, 5vw, 3rem); }"), result: "The title follows viewport width between a 1.5rem floor and a 3rem ceiling." },
      { title: "Keep the page tall enough", code: responsiveDemo(".page { min-height: 100svh; }"), result: "The page is at least the small viewport height and can grow for longer content." },
    ],
    quizzes: [
      { question: "What is the width relative to?", options: ["The screen height","The containing block","The font size"], answer: 1, explanation: "The page stays centred with five percent of its containing block available on each side." },
      { question: "Which rule limits wide-screen expansion?", options: ["margin-inline","width: 90% alone","max-width"], answer: 2, explanation: "The page grows until the 42rem cap takes effect." },
      { question: "What prevents the padding from increasing outer width?", options: ["border-box","content-box","display: block"], answer: 0, explanation: "Padding is included in the specified width so it does not add another two rem to the page." },
      { question: "Which property creates emergency break opportunities?", options: ["text-indent","overflow-wrap","letter-spacing"], answer: 1, explanation: "The archive code can break inside the string on a narrow line." },
      { question: "What is the upper bound?", options: ["5vw regardless of width","1.5rem","3rem"], answer: 2, explanation: "The title follows viewport width between a 1.5rem floor and a 3rem ceiling." },
      { question: "Which choice still allows content to increase the height?", options: ["min-height","A fixed height with hidden overflow","max-height alone"], answer: 0, explanation: "The page is at least the small viewport height and can grow for longer content." },
    ],
  },
  {
    id: "media-queries", title: "Breakpoints, print and input capabilities", level: "Intermediate",
    summary: "Choose a layout based on space and how the reader interacts.",
    content: [
      "Write the narrow layout first. Stretch the window until two columns comfortably fit, then add a min-width query at that point. Queries can also describe output media and user preferences.",
      "Use responsive emulation for width queries, print preview for print styles and browser settings to test colour scheme. Keep essential actions available on both touch and mouse devices.",
    ],
    examples: [
      { title: "Add columns when space allows", code: mediaQueriesDemo("@media (min-width: 40rem) {\n  .board { grid-template-columns: 1fr 1fr; }\n}"), result: "Narrow windows use one column; at 40rem two equal tracks appear." },
      { title: "Target a middle range", code: mediaQueriesDemo("@media (min-width: 30rem) and (max-width: 50rem) {\n  .board { border: 4px solid teal; }\n}"), result: "The border appears only when both width conditions are satisfied." },
      { title: "Prepare a printed page", code: mediaQueriesDemo("@media print {\n  button { display: none; }\n  article { border: 1px solid black; }\n}"), result: "Print preview omits the interactive button and outlines article entries." },
      { title: "Enhance a hover-capable control", code: mediaQueriesDemo("@media (hover: hover) { button:hover { background: gold; } }"), result: "A hovering primary input can trigger the enhancement. The button remains present on touch devices." },
      { title: "Allow room for coarse pointers", code: mediaQueriesDemo("@media (pointer: coarse) { button { min-height: 48px; padding-inline: 1rem; } }"), result: "A coarse primary pointer receives a larger target." },
      { title: "Offer a dark palette", code: mediaQueriesDemo("@media (prefers-color-scheme: dark) {\n  body { background: #211d1a; color: white; }\n  article { background: #47382d; }\n}"), result: "Dark-mode preference selects paired text and surface colours." },
    ],
    quizzes: [
      { question: "When does the two-column rule begin?", options: ["Below 40rem only","At 40rem or wider","Only at exactly 40rem"], answer: 1, explanation: "Narrow windows use one column; at 40rem two equal tracks appear." },
      { question: "Which viewport matches the range?", options: ["20rem","60rem","40rem"], answer: 2, explanation: "The border appears only when both width conditions are satisfied." },
      { question: "Where can you verify this rule?", options: ["Print preview","Only in landscape mode","Only at 300px wide"], answer: 0, explanation: "Print preview omits the interactive button and outlines article entries." },
      { question: "What capability does hover: hover test?", options: ["A desktop operating system","Convenient hover by the primary input","A minimum viewport width"], answer: 1, explanation: "A hovering primary input can trigger the enhancement. The button remains present on touch devices." },
      { question: "What does coarse describe?", options: ["Network speed","Pixel density","Primary pointer accuracy"], answer: 2, explanation: "A coarse primary pointer receives a larger target." },
      { question: "Which feature checks the user's colour preference?", options: ["prefers-color-scheme","color-gamut","color-index"], answer: 0, explanation: "Dark-mode preference selects paired text and surface colours." },
    ],
  },
  {
    id: "container-media", title: "Container queries and responsive media", level: "Advanced",
    summary: "Adapt a component to its slot and keep visual content proportional.",
    content: [
      "A card may sit in a narrow sidebar on a wide monitor. Give the host inline-size containment and query its width to style descendants. Resize the host independently of the viewport.",
      "The sample contains an inline SVG image so all examples run locally. Its intrinsic size is 240 by 120. Compare scaling the image with cropping it into a fixed frame.",
    ],
    examples: [
      { title: "Fit an image into a narrow slot", code: containerMediaDemo(".slot { max-width: 160px; }\nimg { display: block; max-width: 100%; height: auto; }"), result: "With 160px available the 2:1 image becomes 160 by 80px." },
      { title: "Crop to a square frame", code: containerMediaDemo("img { width: 120px; height: 120px; object-fit: cover; }"), result: "The image retains its proportions and the sides are cropped to fill the square." },
      { title: "Show the entire image", code: containerMediaDemo("img { width: 120px; height: 120px; object-fit: contain; background: silver; }"), result: "The whole image is visible with unused space above and below." },
      { title: "Reserve a video-shaped area", code: containerMediaDemo(".card { aspect-ratio: 16 / 9; display: grid; place-content: center; }\nimg { width: 5rem; }"), result: "Where content fits, the card keeps a 16:9 preferred ratio as the slot changes width." },
      { title: "Switch layout by host width", code: containerMediaDemo(".slot { container-type: inline-size; }\n@container (min-width: 25rem) {\n  .card { display: flex; align-items: center; gap: 1rem; }\n}"), result: "The image and caption sit side by side only when the slot itself reaches 25rem." },
      { title: "Scale type to the host", code: containerMediaDemo(".slot { container-type: inline-size; }\np { font-size: clamp(1rem, 7cqi, 2rem); }"), result: "The preferred size is seven percent of the query container's inline size, bounded by the rem values." },
    ],
    quizzes: [
      { question: "What height corresponds to a 160px wide image?", options: ["80px","120px","160px"], answer: 0, explanation: "With 160px available the 2:1 image becomes 160 by 80px." },
      { question: "Which value fills the frame with cropping?", options: ["contain","cover","fill"], answer: 1, explanation: "The image retains its proportions and the sides are cropped to fill the square." },
      { question: "Which value shows all the artwork without distortion?", options: ["cover","fill","contain"], answer: 2, explanation: "The whole image is visible with unused space above and below." },
      { question: "Which property supplies the preferred ratio?", options: ["aspect-ratio","object-position","max-height"], answer: 0, explanation: "Where content fits, the card keeps a 16:9 preferred ratio as the slot changes width." },
      { question: "Which width triggers this query?", options: ["The screen resolution","The slot's inline size","The image file width"], answer: 1, explanation: "The image and caption sit side by side only when the slot itself reaches 25rem." },
      { question: "What does 1cqi represent?", options: ["One percent of screen height","One CSS pixel","One percent of the query container's inline size"], answer: 2, explanation: "The preferred size is seven percent of the query container's inline size, bounded by the rem values." },
    ],
  },
]);
