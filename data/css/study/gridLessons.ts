import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const gridLessons = chapter("CSS Grid", [
  {
    id: "css-grid-grid-intro", title: "Grid Intro", level: "Intermediate",
    summary: "Use grid to align items in rows and columns.",
    content: [
      "The container defines tracks and places its direct children into cells. Default auto-placement follows source order.",
      "Create four labels and two equal columns. Add another label and watch grid create an implicit row without an explicit row declaration.",
    ],
    examples: [{
      title: "Grid Intro · Practice",
      code: cssDemo("<div class=\"grid\"><b>A</b><b>B</b><b>C</b><b>D</b></div>")(".grid { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; }\nb { background: ivory; }"),
      result: "A and B occupy the first row. C and D occupy the second.",
    }],
    quizzes: [
      { question: "Which item starts the second row?", options: ["B", "D", "C"], answer: 2, explanation: "Auto-placement moves to the next row after filling two columns." },
      { question: "Which elements are direct grid items?", options: ["The four b elements", "Only the container", "Every letter of text"], answer: 0, explanation: "The container's direct children become grid items." },
      { question: "Where does a fifth item go?", options: ["Over the first item", "Into a third row", "Hidden"], answer: 1, explanation: "Grid creates an implicit row when needed." },
    ],
  },
  {
    id: "css-grid-grid-container", title: "Grid Container", level: "Intermediate",
    summary: "Give grid tracks fixed, flexible, or bounded sizes.",
    content: [
      "An fr represents a fraction of the remaining space. Gaps occupy space between tracks. Use minmax(0, 1fr) to allow a flexible track to shrink below its automatic content minimum.",
      "Give the container a width of 300px. Subtract the fixed track and the gap, then use the DevTools grid overlay to check the remaining track width.",
    ],
    examples: [{
      title: "Grid Container · Practice",
      code: cssDemo("<div class=\"grid\"><span>Menu</span><span>Report</span></div>")(".grid { display: grid; width: 300px; grid-template-columns: 90px minmax(0, 1fr); gap: 10px; }\nspan { background: lavender; }"),
      result: "The first track is 90px wide, the gap is 10px, and the second track is 200px wide.",
    }],
    quizzes: [
      { question: "How wide is the flexible track?", options: ["200px", "210px", "300px"], answer: 0, explanation: "Subtracting 90px and 10px from 300px leaves 200px." },
      { question: "Where do you define the column track sizes?", options: ["grid-column on child", "grid-template-columns", "place-self"], answer: 1, explanation: "The container's grid-template-columns property defines its columns." },
      { question: "Does the gap count toward a track's width?", options: ["Yes, inside the first track", "Yes, as padding in the second track", "No, it occupies separate space"], answer: 2, explanation: "Grid accounts for gutters separately from track widths." },
    ],
  },
  {
    id: "css-grid-grid-items", title: "Grid Items", level: "Intermediate",
    summary: "Place an item using grid lines or a track span.",
    content: [
      "Three columns have four boundary lines. The negative line number -1 refers to the last edge of the explicit grid.",
      "Place the lead card from the first column line to the last. Let the other cards use auto-placement. Change the column count and check that the lead still spans the explicit grid.",
    ],
    examples: [{
      title: "Grid Items · Practice",
      code: cssDemo("<div class=\"grid\"><b class=\"lead\">Today</b><b>A</b><b>B</b></div>")(".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .5rem; }\n.lead { grid-column: 1 / -1; background: gold; }"),
      result: "The lead fills the first row. A and B occupy the first two cells of the next row.",
    }],
    quizzes: [
      { question: "What does -1 refer to here?", options: ["Negative width", "The last explicit column line", "First item"], answer: 1, explanation: "Negative line numbers count from the end of the explicit grid." },
      { question: "How many boundary lines do three columns have?", options: ["3", "6", "4"], answer: 2, explanation: "Adjacent tracks share a boundary line." },
      { question: "Which declaration makes an item span two columns?", options: ["grid-column: span 2", "grid-row: 0", "gap: 2"], answer: 0, explanation: "The span value specifies a number of tracks." },
    ],
  },
  {
    id: "css-grid-grid-12-column-layout", title: "Grid 12-column Layout", level: "Intermediate",
    summary: "Use 12 equal tracks to build layouts with different proportions.",
    content: [
      "Twelve divides evenly by two, three, and four, so one grid can represent halves, thirds, and quarters. Account for gaps when calculating actual widths.",
      "Give the main content eight tracks and the sidebar four. Let both span the full grid on small screens. Inspect their shared grid lines in the desktop layout.",
    ],
    examples: [{
      title: "Grid 12-column Layout · Practice",
      code: cssDemo("<div class=\"layout\"><main>Workshop notes</main><aside>Dates</aside></div>")(".layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: .5rem; }\nmain, aside { grid-column: span 12; background: ivory; }\n@media (min-width: 42rem) { main { grid-column: span 8; } aside { grid-column: span 4; } }"),
      result: "On a wide row, the notes take eight tracks and the dates take four. On mobile, each occupies a full-width row.",
    }],
    quizzes: [
      { question: "How many tracks do the wide spans add up to?", options: ["8", "16", "12"], answer: 2, explanation: "Eight plus four fills one row of twelve." },
      { question: "How many tracks does the aside span in the narrow layout?", options: ["12", "4", "1"], answer: 0, explanation: "The base rule gives both regions a span of 12." },
      { question: "How many tracks make a quarter-width region?", options: ["4", "3", "6"], answer: 1, explanation: "One quarter of twelve is three." },
    ],
  },
  {
    id: "css-grid-project-viii", title: "CSS Project VIII", level: "Intermediate",
    summary: "Build a responsive magazine grid that gives the lead story more space.",
    content: [
      "Keep the lead story first in the source for mobile reading and keyboard navigation. On wide screens, use a larger span to show its importance.",
      "Place three articles in a grid. At 40rem and wider, create three tracks and let the lead span two. Narrow the window and check that each story fits the single column.",
    ],
    examples: [{
      title: "CSS Project VIII · Practice",
      code: cssDemo("<section><article class=\"lead\"><h2>Library opens</h2></article><article>Sketch meetup</article><article>Art show</article></section>")("section { display: grid; gap: 1rem; }\narticle { background: ivory; padding: 1rem; }\n@media (min-width: 40rem) { section { grid-template-columns: repeat(3, 1fr); } .lead { grid-column: span 2; } }"),
      result: "In the desktop layout the lead story fills two tracks and the meetup fills the third. Art show starts the next row.",
    }],
    quizzes: [
      { question: "Why is Art show on the second row?", options: ["The first row's three tracks are full", "Its order is -1", "Its display is none"], answer: 0, explanation: "The lead uses two tracks and the meetup uses one." },
      { question: "What happens to the lead's span rule on mobile?", options: ["It always spans two", "Inactive", "Becomes fixed"], answer: 1, explanation: "The span is inside the wide-screen media query." },
      { question: "What keeps the reading order consistent?", options: ["Negative z-index", "Reverse order", "The lead appears first in the HTML"], answer: 2, explanation: "The source order remains meaningful at every width." },
    ],
  },
  {
    id: "css-grid-supports", title: "CSS @supports", level: "Intermediate",
    summary: "Use a feature query to apply an enhancement when a declaration is supported.",
    content: [
      "Start with a usable base layout. The @supports rule tests whether the browser supports a property-value pair. Test the rendered layout as well.",
      "Stack the cards by default and use two columns when grid is supported. Disable the conditional block in DevTools and inspect the fallback.",
    ],
    examples: [{
      title: "CSS @supports · Practice",
      code: cssDemo("<div class=\"cards\"><p>Notes</p><p>Dates</p></div>")(".cards p { padding: .5rem; background: lavender; }\n@supports (display: grid) { .cards { display: grid; grid-template-columns: 1fr 1fr; gap: .5rem; } }"),
      result: "With grid support the cards appear side by side. Otherwise the paragraphs form a readable stack.",
    }],
    quizzes: [
      { question: "What does this feature query test?", options: ["Viewport width", "Support for display: grid", "Internet speed"], answer: 1, explanation: "A feature query checks support for a declaration." },
      { question: "Where is the fallback defined?", options: ["Only in JavaScript", "In the title", "Outside the conditional block"], answer: 2, explanation: "The base HTML and CSS already provide the fallback." },
      { question: "Which rule would you use for a viewport width condition?", options: ["@media", "@supports width syntax only", "@font-face"], answer: 0, explanation: "A media query tests environmental conditions such as viewport width." },
    ],
  },
]);
