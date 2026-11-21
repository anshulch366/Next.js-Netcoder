import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const rwdLessons = chapter("CSS Responsive", [
  {
    id: "css-responsive-rwd-intro", title: "RWD Intro", level: "Intermediate",
    summary: "Adapt content to the space available.",
    content: [
      "Flexible widths, wrapping, and well-chosen breakpoints keep one document readable across viewports. Start with the smallest usable layout.",
      "Give the notes column a relative width and a maximum reading width. Test at 320px and in a wide window. Look for horizontal scrolling and overly long lines.",
    ],
    examples: [{
      title: "RWD Intro · Practice",
      code: cssDemo("<main><h1>Sketch diary</h1><p>Read this entry even on a small screen.</p></main>")("main { width: 90%; max-width: 42rem; margin-inline: auto; overflow-wrap: anywhere; }"),
      result: "On a phone the column can use 90% of the available space. On desktop it stops growing at 42rem.",
    }],
    quizzes: [
      { question: "Which value makes the width responsive?", options: ["A fixed 42rem", "90%", "Auto margins alone"], answer: 1, explanation: "The percentage changes with the containing block's width." },
      { question: "Why set a maximum on desktop?", options: ["To disable phones", "To italicize the font", "To keep lines comfortable to read"], answer: 2, explanation: "The maximum width prevents overly long lines." },
      { question: "Which declaration helps with a long unbroken word?", options: ["overflow-wrap: anywhere", "white-space: nowrap", "position: fixed"], answer: 0, explanation: "Allowing a break within the word can prevent overflow." },
    ],
  },
  {
    id: "css-responsive-rwd-viewport", title: "RWD Viewport", level: "Intermediate",
    summary: "Match the mobile browser's layout viewport to the device width.",
    content: [
      "Without a viewport meta tag, some mobile browsers create a wide virtual layout and shrink it. Narrow-screen queries may then activate at unexpected widths.",
      "Find the viewport meta tag in the example file's head. Compare narrow and wide sizes in device emulation. Keep user zoom enabled.",
    ],
    examples: [{
      title: "RWD Viewport · Practice",
      code: cssDemo("<p>Viewport check</p>")("p { background: ivory; }\n@media (max-width: 32rem) { p { background: lavender; } }"),
      result: "The demo uses width=device-width. At 32rem or less the paragraph is lavender, and at larger widths it is ivory.",
    }],
    quizzes: [
      { question: "Where does the viewport meta tag belong?", options: ["CSS selector", "Footer", "Document head"], answer: 2, explanation: "The browser reads the layout settings from the document head." },
      { question: "What color appears at exactly 32rem?", options: ["Lavender", "Ivory", "Transparent"], answer: 0, explanation: "The max-width boundary includes 32rem." },
      { question: "Why keep user zoom available?", options: ["To fix the device width", "To let readers enlarge the text", "To load the CSS"], answer: 1, explanation: "Zoom helps readers with low vision." },
    ],
  },
  {
    id: "css-responsive-rwd-grid-view", title: "RWD Grid View", level: "Intermediate",
    summary: "Divide the available width into shares when building a grid.",
    content: [
      "Fractional tracks share flexible space, and a breakpoint can change that division. Account for the gutters separately to avoid overflow.",
      "Start with three cards in one column. When space allows, switch to three tracks and check that the row fits its container with the gaps included.",
    ],
    examples: [{
      title: "RWD Grid View · Practice",
      code: cssDemo("<div class=\"cards\"><p>A</p><p>B</p><p>C</p></div>")(".cards { display: grid; gap: 12px; }\n@media (min-width: 36rem) { .cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }\np { margin: 0; background: gold; }"),
      result: "The wide layout has three equal tracks after subtracting two gaps. In the narrow layout, the cards stack.",
    }],
    quizzes: [
      { question: "How many internal gaps are there between three columns?", options: ["2", "3", "4"], answer: 0, explanation: "Each pair of neighboring columns shares a gap." },
      { question: "What appears below 36rem?", options: ["Three fixed columns", "Single column", "Blank grid"], answer: 1, explanation: "The base layout places the cards in one column." },
      { question: "Which layout applies at exactly 36rem?", options: ["Only the base single column", "Print rule", "Three tracks"], answer: 2, explanation: "The min-width threshold includes 36rem." },
    ],
  },
  {
    id: "css-responsive-rwd-media-queries", title: "RWD Media Queries", level: "Intermediate",
    summary: "Choose a breakpoint by testing what the content needs.",
    content: [
      "Resize the toolbar to find the width where its labels become cramped. Use a media query to switch from the base stack to a horizontal layout.",
      "Start the navigation as a column and switch to a row at 34rem. Zoom in and check that the controls stay reachable and the labels remain visible.",
    ],
    examples: [{
      title: "RWD Media Queries · Practice",
      code: cssDemo("<nav><a href=\"#one\">Programme</a><a href=\"#two\">Registration</a></nav><p id=\"one\">Today's programme</p><p id=\"two\">Form details</p>")("nav { display: flex; flex-direction: column; gap: .5rem; }\n@media (min-width: 34rem) { nav { flex-direction: row; flex-wrap: wrap; } }"),
      result: "The links appear vertically on narrow screens and horizontally on wider ones. Long labels can wrap.",
    }],
    quizzes: [
      { question: "What is the base direction?", options: ["Row", "Column", "Reverse row"], answer: 1, explanation: "The base nav rule sets a column direction." },
      { question: "What should guide the breakpoint choice?", options: ["A single phone model", "URL length", "A test of how the content fits"], answer: 2, explanation: "Evaluate the layout using the actual labels." },
      { question: "Which property helps long labels fit in the wide layout?", options: ["flex-wrap", "Overflow hidden", "White-space nowrap"], answer: 0, explanation: "Wrapping allows an extra row when needed." },
    ],
  },
  {
    id: "css-responsive-rwd-images", title: "RWD Images", level: "Intermediate",
    summary: "Choose the displayed image size and the downloaded resource separately.",
    content: [
      "CSS fits an image into its frame. The srcset and sizes attributes give the browser information for choosing from several image files.",
      "Supply actual 480px and 960px images for the width descriptors in the example. The sizes attribute describes the expected slot. Reload and inspect the chosen source in the DevTools Network panel.",
    ],
    examples: [{
      title: "RWD Images · Practice",
      code: cssDemo("<img src=\"club-480.jpg\" srcset=\"club-480.jpg 480w, club-960.jpg 960w\" sizes=\"(max-width: 600px) 100vw, 600px\" alt=\"Club exhibition\">")("img { display: block; width: 100%; max-width: 600px; height: auto; }"),
      result: "The image fits a width of up to 600px. The browser can choose a source based on the viewport, pixel density, and available candidates.",
    }],
    quizzes: [
      { question: "What does 480w describe?", options: ["A mandatory CSS width", "Height", "The source image's intrinsic width"], answer: 2, explanation: "A width descriptor gives the source width in pixels." },
      { question: "What does sizes describe?", options: ["Expected slot width", "File size bytes", "Image caption"], answer: 0, explanation: "It tells the browser the expected display width for source selection." },
      { question: "What preserves the image proportions?", options: ["width: 0", "height: auto", "srcset alone"], answer: 1, explanation: "Automatic height scales with the CSS width." },
    ],
  },
  {
    id: "css-responsive-rwd-videos", title: "RWD Videos", level: "Intermediate",
    summary: "Fit a video or embedded player into the available width.",
    content: [
      "Native video has an intrinsic aspect ratio. Set aspect-ratio on an iframe to reserve a predictable rectangle and avoid distortion.",
      "The iframe uses local sample text without an external request. To try your own player, replace srcdoc with a src pointing to your embed URL. Resize the frame and compare its width and height.",
    ],
    examples: [{
      title: "RWD Videos · Practice",
      code: cssDemo("<iframe title=\"Demo player frame\" srcdoc=\"<p>Player preview</p>\"></iframe>")("iframe { display: block; width: 100%; max-width: 40rem; height: auto; aspect-ratio: 16 / 9; border: 0; }"),
      result: "The frame keeps a 16:9 aspect ratio. At 320px wide it is 180px tall.",
    }],
    quizzes: [
      { question: "How tall is a 320px-wide frame?", options: ["180px", "160px", "240px"], answer: 0, explanation: "Multiplying 320px by 9/16 gives 180px." },
      { question: "What identifies the purpose of the frame?", options: ["Aspect ratio", "title", "Border zero"], answer: 1, explanation: "The title supplies an accessible name for the embedded frame." },
      { question: "What is the maximum width?", options: ["16rem", "9rem", "40rem"], answer: 2, explanation: "The max-width property limits how far the frame grows on desktop." },
    ],
  },
  {
    id: "css-responsive-rwd-frameworks", title: "RWD Frameworks", level: "Intermediate",
    summary: "Understand how a responsive framework's classes control layout.",
    content: [
      "Container, grid, and breakpoint utilities let pages share common rules. A class takes effect when its matching stylesheet is loaded.",
      "Try the local container and row classes below and check for two columns at the breakpoint. When using an external framework, check its documented class names and breakpoint definitions.",
    ],
    examples: [{
      title: "RWD Frameworks · Practice",
      code: cssDemo("<div class=\"container\"><div class=\"row\"><p>Notes</p><p>Practice</p></div></div>")(".container { max-width: 52rem; margin: auto; padding: 1rem; }\n.row { display: grid; gap: 1rem; }\n@media (min-width: 40rem) { .row { grid-template-columns: repeat(2, 1fr); } }"),
      result: "The reusable classes center the container and create a two-column row on wide screens. The example uses local CSS.",
    }],
    quizzes: [
      { question: "What gives a class its visual effect?", options: ["The English meaning of its name", "Matching CSS rules", "The HTML version"], answer: 1, explanation: "The browser applies the CSS rules matching the class." },
      { question: "What does the container control?", options: ["Field validation", "Data fetching", "Width and outer alignment"], answer: 2, explanation: "The shared container sets the page width and padding." },
      { question: "What is the breakpoint here?", options: ["40rem", "52rem", "1rem"], answer: 0, explanation: "The media rule changes the row layout at 40rem." },
    ],
  },
  {
    id: "css-responsive-rwd-templates", title: "RWD Templates", level: "Intermediate",
    summary: "Build a reusable page structure that accommodates new content.",
    content: [
      "Give the header, main content, and footer consistent roles. Test the template with titles and descriptions of different lengths.",
      "Make the grid shell at least as tall as the viewport and give the main row the remaining space. Try short and long entries. The footer should sit at the bottom on a short page and follow the content on a long one.",
    ],
    examples: [{
      title: "RWD Templates · Practice",
      code: cssDemo("<div class=\"shell\"><header>Club diary</header><main><h1>Sketch day</h1><p>Class notes</p></main><footer>Art Club</footer></div>")("body { margin: 0; }\n.shell { display: grid; min-height: 100vh; grid-template-rows: auto 1fr auto; }\nheader, main, footer { padding: 1rem; }"),
      result: "On a short page the main row takes the spare vertical space. Longer content can increase the shell's height.",
    }],
    quizzes: [
      { question: "Which row is flexible?", options: ["Header", "Footer", "Main"], answer: 2, explanation: "The middle row gets 1fr." },
      { question: "Why use min-height?", options: ["To leave room for content to grow", "To fix the footer in place", "To prevent scrolling"], answer: 0, explanation: "A minimum height allows the box to grow taller." },
      { question: "What is a practical test of the template?", options: ["Only a blank page", "Long and short content", "One fixed screenshot"], answer: 1, explanation: "Varying the content exposes assumptions in the layout." },
    ],
  },
]);
