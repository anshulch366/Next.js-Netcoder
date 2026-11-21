import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const practiceLessons = chapter("CSS Examples", [
  {
    id: "css-examples-templates", title: "CSS Templates", level: "Intermediate",
    summary: "Separate shared card styles from the featured variant.",
    content: [
      "Cards can share spacing and borders while a featured card uses a different accent. Duplicating the base styles makes future edits harder.",
      "Write a base card class and a modifier class. Test three different titles and check that longer text can wrap without being clipped by a fixed height.",
    ],
    examples: [{
      title: "CSS Templates · Practice",
      code: cssDemo("<article class=\"card\">Sketch practice</article><article class=\"card featured\">Monthly exhibition</article>")(".card { padding: 1rem; margin-block: .5rem; border-left: 4px solid silver; }\n.featured { border-color: teal; }"),
      result: "Both cards share the same spacing. Only the featured card has a teal border.",
    }],
    quizzes: [
      { question: "Where do the shared styles belong?", options: [".card", ".featured", "The article text"], answer: 0, explanation: "Both cards use the base class." },
      { question: "What class attribute value should a new featured card use?", options: ["#featured", "card featured", "The literal text card.featured"], answer: 1, explanation: "Spaces separate class names in HTML." },
      { question: "What does a long title test?", options: ["Network throughput", "URL scheme", "Wrapping and height"], answer: 2, explanation: "The template needs to accommodate real variations in content." },
    ],
  },
  {
    id: "css-examples-examples", title: "CSS Examples", level: "Intermediate",
    summary: "Isolate the effect of a rule with a controlled example.",
    content: [
      "Change one property between the baseline and its variation so you can trace the result to its cause. Several changes at once are harder to explain.",
      "Give both notes the same width and background. Add padding only to the second and measure the distance between its text and background edge.",
    ],
    examples: [{
      title: "CSS Examples · Practice",
      code: cssDemo("<p>Baseline</p><p class=\"variant\">Variation</p>")("p { box-sizing: border-box; width: 12rem; background: ivory; }\n.variant { padding: 1rem; }"),
      result: "Both notes are 12rem wide on the outside. The variation's text sits farther inside and has less content width.",
    }],
    quizzes: [
      { question: "Which property varies in the experiment?", options: ["Background", "Padding", "Outer width"], answer: 1, explanation: "Only the variant rule changes the padding." },
      { question: "Why is the outer width stable?", options: ["Margin auto", "Font size", "border-box"], answer: 2, explanation: "The padding fits inside the declared width." },
      { question: "Which note has the smaller content width?", options: ["Variant", "Baseline", "They are always equal"], answer: 0, explanation: "Horizontal padding takes up space inside the variant." },
    ],
  },
  {
    id: "css-examples-videos", title: "CSS Videos", level: "Intermediate",
    summary: "Pause a video lesson to predict the result before you see it.",
    content: [
      "Watching code can make it seem familiar. Predicting the result tests whether you understand the axis or cascade rule. Try the same idea with new content after the demo.",
      "Pause a flexbox demo before it shows the output. Predict the visual and HTML order after row-reverse, then Tab through the links to compare the two orders.",
    ],
    examples: [{
      title: "CSS Videos · Practice",
      code: cssDemo("<nav><a href=\"#a\">A</a><a href=\"#b\">B</a></nav><p id=\"a\">A section</p><p id=\"b\">B section</p>")("nav { display: flex; flex-direction: row-reverse; justify-content: flex-end; gap: .5rem; }"),
      result: "On a left-to-right page, the links appear as B then A. Default keyboard navigation reaches A first because it comes first in the source.",
    }],
    quizzes: [
      { question: "Which link appears farthest left?", options: ["A", "Both overlap", "B"], answer: 2, explanation: "Reversing the row reverses the visual order." },
      { question: "Which link is the first tab stop?", options: ["A", "B", "Paragraph"], answer: 0, explanation: "A comes first in the DOM." },
      { question: "What should you reproduce after the video?", options: ["Only the thumbnail", "The axis experiment with new labels", "Only the timeline"], answer: 1, explanation: "Applying the rule in a new situation tests understanding." },
    ],
  },
  {
    id: "css-examples-editor", title: "CSS Editor", level: "Intermediate",
    summary: "Distinguish saved editor changes from temporary browser edits.",
    content: [
      "Toggling styles in DevTools is a quick way to experiment. To preserve a change across reloads, save the rule in the stylesheet or editor source.",
      "Change the preview's border width from 2px to 6px. Try it in DevTools first, then save the source and reload. Compare the authored and computed values.",
    ],
    examples: [{
      title: "CSS Editor · Practice",
      code: cssDemo("<p class=\"sample\">Editor test</p>")(".sample { border: 2px solid teal; padding: 8px; }"),
      result: "The original preview shows a 2px border. After you save 6px in the file, the thicker border survives a reload.",
    }],
    quizzes: [
      { question: "Where should you save a lasting change?", options: ["Source stylesheet", "Only in a DevTools toggle", "Browser history"], answer: 0, explanation: "The browser reads the stylesheet again on reload." },
      { question: "What does the Computed panel show?", options: ["Only the file name", "Resolved style values", "Quiz score"], answer: 1, explanation: "Computed styles let you inspect resolved property values." },
      { question: "Which property changes just the border thickness?", options: ["border-color", "padding", "border-width"], answer: 2, explanation: "Border width controls the thickness of the stroke." },
    ],
  },
  {
    id: "css-examples-snippets", title: "CSS Snippets", level: "Intermediate",
    summary: "Identify the assumptions behind a snippet before reusing it.",
    content: [
      "A visually hidden label can still provide an accessible name. Using display: none can also remove the text from the accessibility tree.",
      "Put a text label in the icon button and visually clip it with a utility class. Inspect the button's name in the accessibility tree and check keyboard focus.",
    ],
    examples: [{
      title: "CSS Snippets · Practice",
      code: cssDemo("<button><span aria-hidden=\"true\">↓</span><span class=\"sr\">Download notes</span></button>")(".sr { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }"),
      result: "The button shows an arrow and has the accessible name “Download notes.” The label remains in the DOM.",
    }],
    quizzes: [
      { question: "What is the button's accessible name?", options: ["Only the down arrow", "Download notes", "sr"], answer: 1, explanation: "The decorative arrow is hidden from assistive technology and the text label is available." },
      { question: "What could go wrong with display: none on this label?", options: ["The text becomes bold", "The button grows larger", "The button can lose its name"], answer: 2, explanation: "A hidden subtree is normally excluded from the accessibility tree." },
      { question: "Where should the visually hidden utility go?", options: ["Label span", "The entire button", "The body"], answer: 0, explanation: "The control itself should stay visible and focusable." },
    ],
  },
  {
    id: "css-examples-quiz", title: "CSS Quiz", level: "Intermediate",
    summary: "Identify matching declarations before answering a cascade quiz.",
    content: [
      "Check inheritance, specificity, and source order in context. For the rules here, importance and layer are equal, so compare specificity and then use source order to resolve a tie.",
      "Write down the heading color before running the page. Remove one class rule and predict again. Each time, name the winning selector and explain what decided the result.",
    ],
    examples: [{
      title: "CSS Quiz · Practice",
      code: cssDemo("<h2 class=\"note\">Class update</h2>")(".note { color: navy; }\nh2 { color: red; }\n.note { color: teal; }"),
      result: "The final color is teal. The class rules have equal specificity, so the later class rule wins.",
    }],
    quizzes: [
      { question: "What is the final color?", options: ["Red", "Navy", "Teal"], answer: 2, explanation: "The last of the equally specific class rules declares teal." },
      { question: "What color wins if you remove the last rule?", options: ["Navy", "Red", "Transparent"], answer: 0, explanation: "The remaining class selector still outweighs the type selector." },
      { question: "What color wins if both class rules are removed?", options: ["Teal", "Red", "Navy"], answer: 1, explanation: "Only the h2 rule supplies a matching color declaration." },
    ],
  },
  {
    id: "css-examples-exercises", title: "CSS Exercises", level: "Intermediate",
    summary: "Turn a requirement into a CSS edit you can test.",
    content: [
      "The card must stay 200px wide with 12px padding and a border, and fit its container. Calculate its expected size first and verify it with the working code.",
      "Write the missing box-sizing value yourself. Compare it with the answer below, then change the padding to 16px and check the boundary again.",
    ],
    examples: [{
      title: "CSS Exercises · Practice",
      code: cssDemo("<div class=\"exercise\">Practice card</div>")(".exercise { box-sizing: border-box; width: 200px; padding: 12px; border: 2px solid; }"),
      result: "The outer width is 200px and the content is 172px wide. Changing the padding preserves the outer width.",
    }],
    quizzes: [
      { question: "Which sizing mode meets the requirement?", options: ["border-box", "content-box", "The padding-box default"], answer: 0, explanation: "The width must include both the padding and the border." },
      { question: "What is the initial content width?", options: ["176px", "172px", "228px"], answer: 1, explanation: "Subtracting 24px of padding and 4px of borders from 200px leaves 172px." },
      { question: "What is the content width with 16px padding?", options: ["168px", "200px", "164px"], answer: 2, explanation: "Subtracting 32px of padding and 4px of borders from 200px leaves 164px." },
    ],
  },
  {
    id: "css-examples-code-challenges", title: "CSS Code Challenges", level: "Intermediate",
    summary: "Design for new content without assuming a fixed number of cards.",
    content: [
      "A wide row should fit as many columns as space allows. A single card should still fit a very narrow parent.",
      "Combine auto-fit with a bounded minimum. Add and remove cards, then test a parent narrower than 10rem. Compare your prediction with the computed track sizes.",
    ],
    examples: [{
      title: "CSS Code Challenges · Practice",
      code: cssDemo("<div class=\"shelf\"><div>A</div><div>B</div><div>C</div></div>")(".shelf { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr)); gap: .5rem; }\n.shelf > div { background: lavender; }"),
      result: "Columns form wherever 10rem tracks fit. In an 8rem parent the minimum can shrink to 8rem.",
    }],
    quizzes: [
      { question: "Why use the inner min() function?", options: ["To fix the rows", "To avoid overflow in a narrow parent", "To choose colors"], answer: 1, explanation: "The minimum cannot force the track to be wider than the parent." },
      { question: "What determines how many columns fit?", options: ["z-index", "rowspan", "auto-fit"], answer: 2, explanation: "Auto-repeat creates tracks based on the available space." },
      { question: "What fills the spare width?", options: ["1fr maximum", "10rem margin", "Absolute position"], answer: 0, explanation: "The flexible track maximum takes a share of the remaining width." },
    ],
  },
  {
    id: "css-examples-projects", title: "CSS Projects", level: "Intermediate",
    summary: "Turn a design brief into checks you can run.",
    content: [
      "An event banner should make the name, date, and registration link easy to find. Allow for long titles and let the link wrap on narrow screens.",
      "Write the content first, then add flexible layout rules. Test a long event name at a 320px viewport and check that the link and text do not overlap. Follow the link to verify its destination.",
    ],
    examples: [{
      title: "CSS Projects · Practice",
      code: cssDemo("<header><div><h2>Sketch meetup</h2><p>12 June</p></div><a href=\"#join\">Registration</a></header><p id=\"join\">Entry desk, Room A</p>")("header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1rem; background: ivory; }"),
      result: "When space allows, the details and link sit at opposite ends. With less room, the link can move to the next line.",
    }],
    quizzes: [
      { question: "Which test checks the responsive requirement?", options: ["Only an empty title", "Only a wide screen", "A long name on a narrow screen"], answer: 2, explanation: "Realistic content reveals where the layout runs out of space." },
      { question: "Where does the link go?", options: ["The element with the join ID", "Header class", "Current color"], answer: 0, explanation: "The fragment targets the element with the matching ID." },
      { question: "What problem could occur without wrapping?", options: ["An extra column always appears", "Crowding or overflow", "Text is deleted"], answer: 1, explanation: "All the flex items would have to share one line." },
    ],
  },
  {
    id: "css-examples-website", title: "CSS Website", level: "Intermediate",
    summary: "Organize shared styling for a consistent multi-page site.",
    content: [
      "Keep site-wide navigation, spacing, and color values in one stylesheet so a single edit can update every page. Use scoped classes for page-specific styles.",
      "Put the demo rules in site.css and link it from the head of both Home and About. Put the current-page marker on the appropriate link in each file.",
    ],
    examples: [{
      title: "CSS Website · Practice",
      code: cssDemo("<nav><a href=\"index.html\">Home</a><a href=\"about.html\" aria-current=\"page\">About</a></nav><main><h1>About</h1></main>")(":root { --ink: #12344a; }\nbody { color: var(--ink); font-family: system-ui, sans-serif; }\nnav { display: flex; gap: 1rem; }\nnav [aria-current] { font-weight: bold; }"),
      result: "The About link is bold and the body uses the shared text color. Other pages can use the same stylesheet for a consistent appearance.",
    }],
    quizzes: [
      { question: "Where should the shared design rules live?", options: ["site.css", "In each anchor's text", "In an image file"], answer: 0, explanation: "Multiple documents can link to the same stylesheet." },
      { question: "Where does the current marker belong on the Home page?", options: ["On About", "On the Home link", "On both links"], answer: 1, explanation: "The marker should identify the actual current destination." },
      { question: "What happens when you edit a shared color value?", options: ["URLs change", "HTML translate", "Styles that use the value update"], answer: 2, explanation: "Each use of the custom property resolves to its current value." },
    ],
  },
  {
    id: "css-examples-syllabus", title: "CSS Syllabus", level: "Intermediate",
    summary: "Study CSS topics in an order that builds on earlier concepts.",
    content: [
      "Learn selectors before the cascade and sizing before flexbox and grid. These foundations make responsive layout easier to debug. Give each unit an outcome you can observe.",
      "For this milestone, identify the selector, calculate the box width, and predict the behavior in a narrow parent. When all three predictions match, move on to responsive tracks.",
    ],
    examples: [{
      title: "CSS Syllabus · Practice",
      code: cssDemo("<div class=\"milestone\">Layout checkpoint</div>")(".milestone { box-sizing: border-box; width: min(100%, 18rem); padding: 1rem; border: 1px solid; }"),
      result: "The card grows to a maximum of 18rem and uses 100% of a narrower parent. Both widths include the padding and border.",
    }],
    quizzes: [
      { question: "What should you understand before debugging this card's size?", options: ["3D animation", "Matching selector", "Video codec"], answer: 1, explanation: "Identifying which rule matches the card is the first step." },
      { question: "What is the outer width in a 20rem parent?", options: ["20rem", "19rem", "18rem"], answer: 2, explanation: "The min function selects the smaller value." },
      { question: "What is the outer width in a 10rem parent?", options: ["10rem", "18rem", "12rem"], answer: 0, explanation: "Here 100% of the parent is the smaller value." },
    ],
  },
  {
    id: "css-examples-study-plan", title: "CSS Study Plan", level: "Intermediate",
    summary: "Divide practice into prediction, implementation, and inspection.",
    content: [
      "On day one, write selectors and box-model rules from memory. On day two, compare flexbox and grid. On day three, build a small responsive project. Record the rule behind each unexpected result.",
      "For today's drill, predict the width of two items after subtracting the gap. Tomorrow, change the container width and repeat without notes. Verify the answer with the grid overlay.",
    ],
    examples: [{
      title: "CSS Study Plan · Practice",
      code: cssDemo("<div class=\"drill\"><b>A</b><b>B</b></div>")(".drill { display: grid; width: 240px; grid-template-columns: 1fr 1fr; gap: 20px; }\nb { background: ivory; }"),
      result: "Each item occupies a 110px track. With a 300px container, each track grows to 140px.",
    }],
    quizzes: [
      { question: "What is each track's width in a 240px container?", options: ["120px", "100px", "110px"], answer: 2, explanation: "Subtract the 20px gap and divide the remaining 220px by two." },
      { question: "What is each track's width in a 300px container?", options: ["140px", "150px", "130px"], answer: 0, explanation: "After subtracting the gap, half of 280px is 140px." },
      { question: "What would be a meaningful retest in the next session?", options: ["Copy the same number", "Predict the width for a new container size", "Change only the color"], answer: 1, explanation: "Applying the calculation to a new case tests recall." },
    ],
  },
  {
    id: "css-examples-interview-prep", title: "CSS Interview Prep", level: "Intermediate",
    summary: "Explain both the property and the reasoning behind a layout decision.",
    content: [
      "Flexbox can align actions of different widths in a row. Grid can be a better fit when several rows need to share column lines.",
      "Give the toolbar title the available space and the action its natural width. Explain how a long title will behave at a narrow width, then test your prediction.",
    ],
    examples: [{
      title: "CSS Interview Prep · Practice",
      code: cssDemo("<div class=\"toolbar\"><strong>Monthly exhibition schedule</strong><button>Open</button></div>")(".toolbar { display: flex; align-items: center; gap: .5rem; }\nstrong { flex: 1; min-width: 0; overflow-wrap: anywhere; }\nbutton { flex: none; }"),
      result: "The title takes the available space and wraps when necessary. The button keeps its natural width.",
    }],
    quizzes: [
      { question: "Why use flexbox for this toolbar?", options: ["To align items along one main axis", "Two-dimensional tracks are required", "It supports only buttons"], answer: 0, explanation: "The title and action share a row." },
      { question: "Why does the button keep its width?", options: ["gap .5rem", "flex: none", "strong min-width"], answer: 1, explanation: "The none value sets both grow and shrink to zero." },
      { question: "Which layout shares column lines across rows?", options: ["Opacity", "Float alone", "Grid"], answer: 2, explanation: "Grid provides shared tracks for rows and columns." },
    ],
  },
]);
