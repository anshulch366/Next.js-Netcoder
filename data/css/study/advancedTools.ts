import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const advancedTools = chapter("CSS Advanced", [
  {
    id: "css-advanced-image-centering", title: "CSS Image Centering", level: "Intermediate",
    summary: "Center an image within a frame or center its box in a parent.",
    content: [
      "Auto inline margins center a block image of limited width in its parent. Inside a fixed frame, grid alignment can center the image on both axes.",
      "Give the frame a height and set its grid alignment. Change the image size and watch its center stay in the same place.",
    ],
    examples: [{
      title: "CSS Image Centering · Practice",
      code: cssDemo("<div class=\"frame\"><img width=\"64\" src=\"/images/subjects/css.svg\" alt=\"CSS\"></div>")(".frame { display: grid; place-items: center; height: 8rem; background: ivory; }"),
      result: "The logo sits at the horizontal and vertical center of the frame.",
    }],
    quizzes: [
      { question: "Which declaration centers the logo on both axes?", options: ["text-align alone", "place-items: center", "margin-top: 0"], answer: 1, explanation: "The grid aligns its item in both directions." },
      { question: "Why is vertical centering visible?", options: ["The alt text is CSS", "The image is inline", "The frame has extra height"], answer: 2, explanation: "The frame has space above and below the image." },
      { question: "How can you center a block image horizontally?", options: ["Limit its width and use auto inline margins", "Use only automatic height", "Use only object-position"], answer: 0, explanation: "The margins align the image's outer box." },
    ],
  },
  {
    id: "css-advanced-image-filters", title: "CSS Image Filters", level: "Intermediate",
    summary: "Change how an image looks without editing its source file.",
    content: [
      "Grayscale can remove saturation, and contrast changes the difference between light and dark areas. Filters apply from left to right.",
      "Show the original and filtered versions of the same image side by side. Set grayscale to zero and check whether the contrast effect is still visible.",
    ],
    examples: [{
      title: "CSS Image Filters · Practice",
      code: cssDemo("<img width=\"64\" src=\"/images/subjects/css.svg\" alt=\"Original CSS logo\"> <img class=\"print\" width=\"64\" src=\"/images/subjects/css.svg\" alt=\"Print preview\">")(".print { filter: grayscale(1) contrast(1.2); }"),
      result: "Only the print preview appears in grayscale with enhanced contrast. Both images use the same source SVG.",
    }],
    quizzes: [
      { question: "Which value gives full grayscale?", options: ["0", "1px", "1"], answer: 2, explanation: "A grayscale value of 1 gives full conversion." },
      { question: "What happens to the original file?", options: ["It stays the same", "Permanently grayscale", "It is deleted"], answer: 0, explanation: "The filter changes the rendered image." },
      { question: "In what order do the filters run?", options: ["Alphabetically", "Left to right", "Random"], answer: 1, explanation: "Each filter receives the previous filter's result." },
    ],
  },
  {
    id: "css-advanced-image-shapes", title: "CSS Image Shapes", level: "Intermediate",
    summary: "Wrap text around an image's contour.",
    content: [
      "The shape-outside property sets the wrapping boundary of a float. Use border-radius or clip-path separately if you also want to crop the visible image.",
      "Place a circular float at the start of a paragraph. Increase shape-margin to widen the gap between text and curve. Remove the float to see how wrapping changes.",
    ],
    examples: [{
      title: "CSS Image Shapes · Practice",
      code: cssDemo("<article><img src=\"/images/subjects/css.svg\" alt=\"CSS logo\">Every week our club explores color, typography, and layout. Each student draws a small design in a sketchbook.</article>")("article { max-width: 18rem; }\nimg { float: left; width: 5rem; height: 5rem; border-radius: 50%; shape-outside: circle(50%); shape-margin: .4rem; }"),
      result: "The text follows the float's circular contour, with extra space beside the curve.",
    }],
    quizzes: [
      { question: "Which property defines the wrapping boundary?", options: ["shape-outside", "border-radius alone", "object-fit"], answer: 0, explanation: "The shape-outside property defines the contour used for text flow." },
      { question: "Why float the image in this example?", options: ["To fetch the image", "Shape wrapping applies to a floated box", "To show its alt text"], answer: 1, explanation: "A float allows text to flow beside it." },
      { question: "Which property adds space around the contour?", options: ["line-height", "outline-offset", "shape-margin"], answer: 2, explanation: "The shape margin expands the wrapping boundary." },
    ],
  },
  {
    id: "css-advanced-object-fit", title: "CSS object-fit", level: "Intermediate",
    summary: "Fit an image inside a fixed frame while keeping its proportions.",
    content: [
      "Contain shows the entire image. Cover fills the frame and can crop the edges. The image content and the box holding it have separate dimensions.",
      "Place the same image in two non-square frames. Compare the empty space with contain and the crop with cover.",
    ],
    examples: [{
      title: "CSS object-fit · Practice",
      code: cssDemo("<img class=\"all\" src=\"/images/subjects/html.svg\" alt=\"Full logo\"><img class=\"crop\" src=\"/images/subjects/html.svg\" alt=\"Cropped logo\">")("img { width: 8rem; height: 4rem; background: ivory; }\n.all { object-fit: contain; } .crop { object-fit: cover; }"),
      result: "The first frame shows the whole logo. The second can crop its edges. Both frames have the same outer dimensions.",
    }],
    quizzes: [
      { question: "Which value shows the whole logo?", options: ["cover", "contain", "Always fill"], answer: 1, explanation: "Contain fits the entire image using its intrinsic proportions." },
      { question: "Which option fills the frame without empty space?", options: ["contain", "Always scale-down", "cover"], answer: 2, explanation: "Cover fills the whole frame." },
      { question: "What does object-fit size?", options: ["Replaced content", "Parent width", "Document height"], answer: 0, explanation: "The property fits the replaced content inside the image box." },
    ],
  },
  {
    id: "css-advanced-object-position", title: "CSS object-position", level: "Intermediate",
    summary: "Keep an important part of a cropped photo in view.",
    content: [
      "With object-fit: cover, the scaled image can be larger than its frame. Use object-position to choose which part stays aligned with the frame.",
      "Cover a wide frame with a portrait or square image. Compare top and bottom positions when the image is cropped vertically.",
    ],
    examples: [{
      title: "CSS object-position · Practice",
      code: cssDemo("<img src=\"/images/subjects/html.svg\" alt=\"Top of the HTML logo\">")("img { width: 10rem; height: 3rem; object-fit: cover; object-position: center top; }"),
      result: "The image content is centered horizontally and aligned to the top. Excess height is cropped from the bottom.",
    }],
    quizzes: [
      { question: "Which value keeps the top visible?", options: ["center bottom", "right center", "center top"], answer: 2, explanation: "The second value sets vertical alignment." },
      { question: "What does object-position move?", options: ["The content within the image box", "The outer box in normal flow", "The parent"], answer: 0, explanation: "The property positions the image content inside its frame." },
      { question: "When will cover produce a visible crop?", options: ["When alt is empty", "When the aspect ratios differ", "When the border is 1px"], answer: 1, explanation: "Cover crops the excess when the frame and source have different proportions." },
    ],
  },
  {
    id: "css-advanced-masking", title: "CSS Masking", level: "Intermediate",
    summary: "Use a mask's opacity to control which areas of an element appear.",
    content: [
      "Opaque areas of an alpha mask reveal the element and transparent areas hide it. A gradient mask can create a soft fade, while a clip path usually gives a sharp edge.",
      "Apply mask-image to a decorative strip. Move the black stop from 25% to 75% and compare the length of the fully visible region.",
    ],
    examples: [{
      title: "CSS Masking · Practice",
      code: cssDemo("<div class=\"strip\" aria-hidden=\"true\"></div>")(".strip { height: 3rem; background: teal; mask-image: linear-gradient(to right, black 25%, transparent); }"),
      result: "The strip is solid on the left and fades out toward the right. The black mask reveals the underlying teal.",
    }],
    quizzes: [
      { question: "What does opaque black do in an alpha mask?", options: ["Reveals the content", "Turns the content black", "Hides the content"], answer: 0, explanation: "In alpha mode, opacity determines visibility." },
      { question: "What can produce a soft fade?", options: ["A hard cut alone", "Gradient mask", "Border width"], answer: 1, explanation: "A gradient provides a continuous range of alpha values." },
      { question: "What happens to the layout space?", options: ["It becomes zero", "It doubles", "It stays the same"], answer: 2, explanation: "Masking affects painting." },
    ],
  },
  {
    id: "css-advanced-buttons", title: "CSS Buttons", level: "Intermediate",
    summary: "Design the hover, focus, and disabled states of a button together.",
    content: [
      "A native button supports keyboard actions. Use the disabled attribute when the action is unavailable, and style that state so readers can recognize it.",
      "Add two buttons and press Tab to test which one receives focus. Check the contrast of the enabled button's border and focus ring.",
    ],
    examples: [{
      title: "CSS Buttons · Practice",
      code: cssDemo("<button>Register</button> <button disabled>Sold out</button>")("button { padding: .6em 1em; background: navy; color: white; border: 0; border-radius: .4em; }\nbutton:disabled { background: #555; }\nbutton:focus-visible { outline: 3px solid teal; outline-offset: 2px; }"),
      result: "Register can receive focus. Sold out looks muted and its native disabled state prevents activation.",
    }],
    quizzes: [
      { question: "What actually disables the action?", options: ["Gray color", "disabled attribute", "Border zero"], answer: 1, explanation: "The HTML disabled attribute prevents interaction." },
      { question: "Which unit makes the padding relative to the button's font size?", options: ["px", "fr", "em"], answer: 2, explanation: "An em scales with the button's font size." },
      { question: "What identifies the focused enabled button?", options: ["Teal outline", "Gray background", "Disabled label"], answer: 0, explanation: "The focus-visible rule draws the outline." },
    ],
  },
  {
    id: "css-advanced-pagination", title: "CSS Pagination", level: "Intermediate",
    summary: "Build navigation between pages of results.",
    content: [
      "Give each page number a real href so readers can share or bookmark the destination. Identify the current page visually and with aria-current.",
      "Label the navigation and make the current link bold. Activate each link from the keyboard and check the query parameter. A page handler supplies the actual results.",
    ],
    examples: [{
      title: "CSS Pagination · Practice",
      code: cssDemo("<nav aria-label=\"Results pages\"><a href=\"?page=1\">1</a><a href=\"?page=2\" aria-current=\"page\">2</a><a href=\"?page=3\">3</a></nav>")("nav { display: flex; gap: .4rem; }\na { padding: .5rem; }\n[aria-current=\"page\"] { font-weight: bold; border-bottom: 3px solid; }"),
      result: "Page 2 is marked as current. Link 3 opens the current path with the page=3 query.",
    }],
    quizzes: [
      { question: "Which page is marked as current?", options: ["1", "3", "2"], answer: 2, explanation: "The page 2 link has aria-current." },
      { question: "What supplies the link's destination?", options: ["href", "font-weight", "aria-label"], answer: 0, explanation: "The href attribute gives the link a navigable URL." },
      { question: "Does this CSS retrieve the next set of results?", options: ["Always", "No, a page handler supplies them", "Only if the link is bold"], answer: 1, explanation: "Styling the links and retrieving results are separate tasks." },
    ],
  },
  {
    id: "css-advanced-multiple-columns", title: "CSS Multiple Columns", level: "Intermediate",
    summary: "Flow a continuous article into newspaper-style columns.",
    content: [
      "Multi-column layout flows text down one column and then into the next. Use it for continuous content that should read in sequence.",
      "Place the paragraphs in a columns container and give it a gap. Use one column at narrow widths. The source order preserves the reading sequence in both views.",
    ],
    examples: [{
      title: "CSS Multiple Columns · Practice",
      code: cssDemo("<article><p>In the club's first class, everyone drew a simple sketch.</p><p>In the second class, we drew the same sketch again in color.</p></article>")("article { column-gap: 2rem; }\n@media (min-width: 32rem) { article { column-count: 2; column-rule: 1px solid silver; } }"),
      result: "In the wide view, text flows through two columns with a thin rule in the gap. The narrow view uses one column.",
    }],
    quizzes: [
      { question: "What draws the line between the columns?", options: ["column-rule", "border-bottom", "outline"], answer: 0, explanation: "The column rule is painted inside the gap." },
      { question: "In what order does the text flow?", options: ["Row by row cells", "Down one column, then into the next", "Random"], answer: 1, explanation: "Multi-column layout continues the content in the next column." },
      { question: "When do two columns appear?", options: ["Only at 32px", "At every viewport width", "At 32rem and wider"], answer: 2, explanation: "The minimum-width query switches the layout." },
    ],
  },
  {
    id: "css-advanced-user-interface", title: "CSS User Interface", level: "Intermediate",
    summary: "Make editing controls easy to resize and focus.",
    content: [
      "Vertical resizing gives a long response more room. Restrict the resize direction when horizontal resizing could break the layout.",
      "Set a minimum height and a width limit on the textarea. In a supporting desktop browser, drag its resize handle and press Tab to inspect its focus ring.",
    ],
    examples: [{
      title: "CSS User Interface · Practice",
      code: cssDemo("<label>Feedback <textarea></textarea></label>")("textarea { display: block; width: min(100%, 20rem); box-sizing: border-box; min-height: 4rem; resize: vertical; overflow: auto; }\ntextarea:focus-visible { outline: 2px solid navy; }"),
      result: "Users can increase the field's height. Its width is the smaller of the parent width and 20rem.",
    }],
    quizzes: [
      { question: "In which direction can the user resize the field?", options: ["Horizontal", "Vertical", "Both"], answer: 1, explanation: "The vertical value allows height adjustments." },
      { question: "What is the minimum height?", options: ["20rem", "100%", "4rem"], answer: 2, explanation: "The min-height property sets the lower bound." },
      { question: "What helps the field fit without horizontal overflow?", options: ["min() and border-box", "Outline", "Label text"], answer: 0, explanation: "The smaller width and inclusive box sizing keep the field within its parent." },
    ],
  },
  {
    id: "css-advanced-variables", title: "CSS Variables", level: "Intermediate",
    summary: "Give a reusable design value a custom property name.",
    content: [
      "Custom properties beginning with two hyphens participate in the cascade and normally inherit. The var() function resolves the value where it is used and can supply a fallback if the property is missing.",
      "Set a brand color on the root and override it in a section. Use the same rule for both buttons and check how their ancestors affect the final color.",
    ],
    examples: [{
      title: "CSS Variables · Practice",
      code: cssDemo("<button>Library</button><section><button>Studio</button></section>")(":root { --brand: navy; }\nsection { --brand: maroon; }\nbutton { background: var(--brand, teal); color: white; }"),
      result: "The first button is navy and the section's button is maroon. If the custom property is missing, the fallback is teal.",
    }],
    quizzes: [
      { question: "Which prefix introduces a custom property?", options: ["$", "@", "--"], answer: 2, explanation: "CSS custom property names begin with two hyphens." },
      { question: "Where does Studio get its color value?", options: ["Section override", "Only the root", "Fallback"], answer: 0, explanation: "The section supplies the inherited maroon value." },
      { question: "What is the fallback for a missing value?", options: ["White", "Teal", "Maroon"], answer: 1, explanation: "The second argument to var() supplies the fallback." },
    ],
  },
  {
    id: "css-advanced-property", title: "CSS @property", level: "Intermediate",
    summary: "Define the type and inheritance of a custom property.",
    content: [
      "Registration tells the browser which syntax a property accepts. It can then handle invalid values according to that type and interpolate between compatible values.",
      "Register a length property with inheritance disabled and set it to 30px on the parent. Leave the child without a declaration. Inspect its initial value and computed padding in a supporting browser.",
    ],
    examples: [{
      title: "CSS @property · Practice",
      code: cssDemo("<div class=\"parent\"><p>Inner note</p></div>")("@property --space { syntax: \"<length>\"; inherits: false; initial-value: 8px; }\n.parent { --space: 30px; }\np { padding: var(--space); background: ivory; }"),
      result: "With registration support, the paragraph gets 8px of padding. It uses the registered initial value because inheritance is disabled.",
    }],
    quizzes: [
      { question: "Which type does the property accept?", options: ["Length", "Color", "URL"], answer: 0, explanation: "The syntax descriptor specifies a length." },
      { question: "What value does the child use by default?", options: ["30px", "8px", "0px"], answer: 1, explanation: "The non-inherited registered property uses its initial value." },
      { question: "Which descriptor lets the child inherit the parent's value?", options: ["syntax: auto", "initial-value: inherit only", "inherits: true"], answer: 2, explanation: "The inherits descriptor controls inheritance." },
    ],
  },
  {
    id: "css-advanced-box-sizing", title: "CSS Box Sizing", level: "Intermediate",
    summary: "Choose whether the declared width includes padding and borders.",
    content: [
      "With content-box, padding and borders add to the declared width. With border-box, they fit inside the width and reduce the space available for content.",
      "Give two cards the same width, border, and padding. Change only box-sizing and compare their border-box widths in DevTools.",
    ],
    examples: [{
      title: "CSS Box Sizing · Practice",
      code: cssDemo("<p class=\"a\">Content</p><p class=\"b\">Border</p>")("p { width: 120px; padding: 10px; border: 2px solid; }\n.a { box-sizing: content-box; }\n.b { box-sizing: border-box; }"),
      result: "A has an outer width of 144px and B has an outer width of 120px. B's content is 96px wide.",
    }],
    quizzes: [
      { question: "How wide is A's border box?", options: ["120px", "144px", "96px"], answer: 1, explanation: "Add 120px of content, 20px of padding, and 4px of borders." },
      { question: "How wide is B's content box?", options: ["120px", "144px", "96px"], answer: 2, explanation: "Subtract the padding and borders from 120px." },
      { question: "Does the border-box width include margins?", options: ["No", "Always", "Only for px values"], answer: 0, explanation: "Margins occupy space outside the border." },
    ],
  },
  {
    id: "css-advanced-functions", title: "CSS Functions", level: "Intermediate",
    summary: "Use CSS functions to calculate or construct property values.",
    content: [
      "The var function resolves a custom property, min compares compatible sizes, and rgb constructs a color. The result must be valid for the property that receives it.",
      "Store a width limit in a custom property and pass it to min. Narrow the viewport to see when 100% becomes the smaller size. Set the color with rgb.",
    ],
    examples: [{
      title: "CSS Functions · Practice",
      code: cssDemo("<div class=\"panel\">Workshop panel</div>")(".panel { --limit: 18rem; width: min(100%, var(--limit)); background: rgb(220 235 240); }"),
      result: "The panel takes the smaller of the available width and 18rem. Its background is a pale blue-gray.",
    }],
    quizzes: [
      { question: "What does the nested var() return here?", options: ["100px", "Color", "18rem"], answer: 2, explanation: "The --limit property supplies the value." },
      { question: "How wide is the panel in a 12rem parent?", options: ["12rem", "18rem", "30rem"], answer: 0, explanation: "The min function selects the smaller value." },
      { question: "Which function returns a color?", options: ["minmax()", "rgb()", "counter()"], answer: 1, explanation: "The rgb function constructs a color from its channels." },
    ],
  },
  {
    id: "css-advanced-media-queries", title: "CSS Media Queries", level: "Intermediate",
    summary: "Activate rules when an environmental condition matches.",
    content: [
      "Media queries can test print output and reduced-motion preferences as well as viewport width. Start with functional base styles and add conditional rules where needed.",
      "Keep the navigation on screen and hide it for printing. Open Print Preview and check that the heading and main content still appear.",
    ],
    examples: [{
      title: "CSS Media Queries · Practice",
      code: cssDemo("<nav>Home · Lessons</nav><main><h1>Class notes</h1><p>Bring a pencil.</p></main>")("main { max-width: 40rem; }\n@media print { nav { display: none; } main { max-width: none; } }"),
      result: "The screen shows both menu and notes. In Print Preview, the notes use the available page width.",
    }],
    quizzes: [
      { question: "Which syntax targets print output?", options: ["@media print", "@print-screen", ":print"], answer: 0, explanation: "The print media type selects print output." },
      { question: "What is hidden when printing?", options: ["main", "nav", "h1"], answer: 1, explanation: "The conditional rule sets the nav element's display to none." },
      { question: "Where can you check the paper layout?", options: ["Network headers", "Color picker", "Print Preview"], answer: 2, explanation: "Print Preview applies the print styles." },
    ],
  },
]);
