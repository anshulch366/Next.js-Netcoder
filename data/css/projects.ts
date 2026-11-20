import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const eventCardDemo = cssDemo(
  "<article class=\"event\"><p class=\"date\"><time datetime=\"2027-06-12\">12 June</time></p><h2>Sketch the old town</h2><p>A walk with local illustrators.</p><a href=\"#details\">Event details</a></article>\n<section id=\"details\"><h3>Meeting point</h3><p>Library steps, 9 am.</p></section>",
);

const timetableDemo = cssDemo(
  "<div class=\"scroll\"><table><caption>Saturday sessions</caption><thead><tr><th>Time</th><th>Room</th><th>Class</th></tr></thead><tbody><tr><th scope=\"row\">09:00</th><td>North</td><td>Colour mixing</td></tr><tr><th scope=\"row\">11:00</th><td>West</td><td>Screen printing</td></tr></tbody></table></div>",
);

const exhibitLayoutDemo = cssDemo(
  "<main class=\"shell\"><h1>Spring exhibits</h1><div class=\"catalog\"><article><h2>Clay</h2><p>Work from six potters.</p><a href=\"#clay\">Clay notes</a></article><article><h2>Paper</h2><p>Handmade sheets from three workshops, with notes on fibre and texture.</p><a href=\"#paper\">Paper notes</a></article></div><p id=\"clay\">Clay · West room</p><p id=\"paper\">Paper · East room</p></main>",
  "article { padding: 1rem; border: 1px solid #d8c6ba; }",
);

export const projects = chapter("CSS Examples", [
  {
    id: "event-card", title: "Project · Design an event card", level: "Beginner",
    summary: "Take a plain event announcement through six design decisions.",
    content: [
      "Make a local folder for the event card. Open one example at a time to see the effect of its rule on the same markup. To assemble the final card, keep the HTML once and collect the six example rules in its style element.",
      "Test with a longer heading and a different date. Check that the date is still easy to locate and that the action can be reached with Tab.",
    ],
    examples: [
      { title: "Set the card measure", code: eventCardDemo(".event { box-sizing: border-box; width: min(100%, 24rem); padding: 1.25rem; }"), result: "The card fits a narrow parent and stops expanding at 24rem." },
      { title: "Separate the surface", code: eventCardDemo(".event { border: 1px solid #d5bbaa; border-radius: 12px; background: #fff5ec; }"), result: "A warm surface and rounded edge group the event details." },
      { title: "Make the date easy to find", code: eventCardDemo(".date { display: inline-block; margin: 0; padding: .2rem .5rem; background: #ffe0bd; color: #65331a; }"), result: "The compact label follows the date's content width." },
      { title: "Give the title a clear rhythm", code: eventCardDemo(".event h2 { margin: .6rem 0 .25rem; font: bold 1.6rem/1.15 Georgia, serif; }"), result: "The title has more space above than below and a compact line height." },
      { title: "Make the link easier to activate", code: eventCardDemo(".event a { display: inline-flex; align-items: center; min-height: 44px; padding-inline: .8rem; color: white; background: #85381c; }"), result: "The link has a minimum 44px high clickable box and still navigates to the details." },
      { title: "Check keyboard navigation", code: eventCardDemo(".event a:focus-visible { outline: 3px solid #145b83; outline-offset: 4px; }"), result: "Tab to Event details to see the additional focus ring." },
    ],
    quizzes: [
      { question: "What caps the card's width?", options: ["The date text","The 24rem argument in min()","The heading size"], answer: 1, explanation: "The card fits a narrow parent and stops expanding at 24rem." },
      { question: "Which declaration rounds the corners?", options: ["background","outline-offset","border-radius"], answer: 2, explanation: "A warm surface and rounded edge group the event details." },
      { question: "Why use inline-block on this paragraph?", options: ["To fit its badge around its content","To turn the date into a link","To force full width"], answer: 0, explanation: "The compact label follows the date's content width." },
      { question: "Which part of the font shorthand sets line height?", options: ["1.6rem","1.15","bold"], answer: 1, explanation: "The title has more space above than below and a compact line height." },
      { question: "Which property sets the minimum target height?", options: ["align-items","color","min-height"], answer: 2, explanation: "The link has a minimum 44px high clickable box and still navigates to the details." },
      { question: "How can you test the focus state without a pointer?", options: ["Press Tab","Resize the viewport","Reload while scrolling"], answer: 0, explanation: "Tab to Event details to see the additional focus ring." },
    ],
  },
  {
    id: "timetable", title: "Project · Build a timetable that prints", level: "Intermediate",
    summary: "Keep a compact table legible on screen, on phones and on paper.",
    content: [
      "Use the same three-column schedule throughout. Each example isolates one improvement. Combine the rules after inspecting them separately, then add another row to test the striping.",
      "Keep the caption and real header cells in the markup while styling. In a narrow window a scrollable wrapper lets the table retain its column relationships.",
    ],
    examples: [
      { title: "Unify cell edges", code: timetableDemo("table { border-collapse: collapse; }\nth, td { border: 1px solid #c4b9ad; }"), result: "Adjacent cell borders share an edge." },
      { title: "Align the labels", code: timetableDemo("th, td { padding: .65rem 1rem; text-align: start; }\ncaption { text-align: start; font-weight: bold; }"), result: "Headers, values and caption align to the start side of the text direction." },
      { title: "Style column headings", code: timetableDemo("thead th { background: #4b3428; color: white; }"), result: "Only the column-heading row receives the dark fill." },
      { title: "Stripe the data rows", code: timetableDemo("tbody tr:nth-child(even) { background: #fff0d9; }"), result: "The 11:00 row is the second row of tbody and receives the stripe." },
      { title: "Keep scrolling inside the wrapper", code: timetableDemo(".scroll { max-width: 100%; overflow-x: auto; }\ntable { min-width: 26rem; }"), result: "Narrowing the viewport below the table width creates horizontal scrolling inside the wrapper." },
      { title: "Prepare for printing", code: timetableDemo("@media print {\n  table { width: 100%; min-width: 0; }\n  tr { break-inside: avoid; }\n  th, td { border-bottom: 1px solid black; }\n}"), result: "Print preview gives rows black separators and asks the browser to keep each row together." },
    ],
    quizzes: [
      { question: "Which declaration combines the borders?", options: ["border-collapse: collapse","border-spacing: 1rem","table-layout: fixed"], answer: 0, explanation: "Adjacent cell borders share an edge." },
      { question: "Which value adapts to writing direction?", options: ["left","start","right"], answer: 1, explanation: "Headers, values and caption align to the start side of the text direction." },
      { question: "Why do row headers stay unfilled?", options: ["They are th elements","Their scope is missing","They are in tbody"], answer: 2, explanation: "Only the column-heading row receives the dark fill." },
      { question: "Which row gets the stripe in this fixture?", options: ["11:00","09:00","The header row"], answer: 0, explanation: "The 11:00 row is the second row of tbody and receives the stripe." },
      { question: "Which element should own the horizontal scroll?", options: ["Every individual cell","The wrapper","The caption"], answer: 1, explanation: "Narrowing the viewport below the table width creates horizontal scrolling inside the wrapper." },
      { question: "Which declaration discourages a page break within a row?", options: ["border-bottom","width: 100%","break-inside: avoid"], answer: 2, explanation: "Print preview gives rows black separators and asks the browser to keep each row together." },
    ],
  },
  {
    id: "exhibit-layout", title: "Project · Adapt an exhibition catalogue", level: "Advanced",
    summary: "Combine layout constraints, reusable colours and container queries.",
    content: [
      "The exhibition sits inside a resizable shell. Each example demonstrates one feature against the same baseline. Combine the six rules in order for a two-card catalogue with shared alignment and print-friendly details.",
      "Test it inside a narrow parent as well as at different window widths. Compare the print result to the screen result and use a keyboard to reach both exhibit links.",
    ],
    examples: [
      { title: "Define colours once", code: exhibitLayoutDemo(".shell { --accent: #893417; --paper: #fff5ed; }\narticle { background: var(--paper); }\narticle a { color: var(--accent); }"), result: "Both articles inherit the same paper and accent tokens from the shell." },
      { title: "Start with one flexible track", code: exhibitLayoutDemo(".catalog { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }"), result: "Cards form one stack with a consistent gutter." },
      { title: "Let the component choose columns", code: exhibitLayoutDemo(".shell { container-type: inline-size; }\n.catalog { display: grid; gap: 1rem; }\n@container (min-width: 34rem) { .catalog { grid-template-columns: 1fr 1fr; } }"), result: "The catalogue splits only when its enclosing shell can spare 34rem." },
      { title: "Align actions at the bottom", code: exhibitLayoutDemo(".catalog { display: grid; grid-template-columns: 1fr 1fr; }\narticle { display: flex; flex-direction: column; }\narticle a { margin-block-start: auto; }"), result: "The equal-height grid items use auto margins to bring both links to the bottom." },
      { title: "Give linked notes a target state", code: exhibitLayoutDemo(".shell > p:target { background: #ffe0b9; outline: 2px solid #713f19; }"), result: "Following an exhibit link highlights its matching destination paragraph." },
      { title: "Produce a single-column handout", code: exhibitLayoutDemo("@media print {\n  .shell .catalog { display: block; }\n  article { break-inside: avoid; margin-block-end: 1rem; }\n}"), result: "In print the catalogue uses block flow and keeps article content together where space permits." },
    ],
    quizzes: [
      { question: "Which ancestor supplies the shared tokens?", options: [".catalog a","body by default",".shell"], answer: 2, explanation: "Both articles inherit the same paper and accent tokens from the shell." },
      { question: "How many explicit columns does this baseline create?", options: ["One","Two","One per article"], answer: 0, explanation: "Cards form one stack with a consistent gutter." },
      { question: "What happens in a 25rem sidebar on a large monitor?", options: ["It always uses two columns","The cards stay stacked","The query uses monitor width"], answer: 1, explanation: "The catalogue splits only when its enclosing shell can spare 34rem." },
      { question: "What absorbs spare space above each link?", options: ["The grid gap","The heading colour","An auto block-start margin"], answer: 2, explanation: "The equal-height grid items use auto margins to bring both links to the bottom." },
      { question: "Which pseudo-class matches the current fragment destination?", options: [":target",":checked",":focus-within"], answer: 0, explanation: "Following an exhibit link highlights its matching destination paragraph." },
      { question: "Why select .shell .catalog in the print override?", options: ["Print always requires two classes","It outweighs the base .catalog layout selector","It changes the document order"], answer: 1, explanation: "In print the catalogue uses block flow and keeps article content together where space permits." },
    ],
  },
]);
