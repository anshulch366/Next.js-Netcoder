import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const referenceLessons = chapter("CSS References", [
  {
    id: "css-references-reference", title: "CSS Reference", level: "Intermediate",
    summary: "Look up a property's syntax, initial value, inheritance, and allowed units.",
    content: [
      "A property reference tells you which values the property accepts and which boxes it applies to. The browser's Computed panel shows the resolved value for a particular element.",
      "Look up the row and column values of gap. Make a grid to test their order in the two-value shorthand. Set its width and measure the gutters.",
    ],
    examples: [{
      title: "CSS Reference · Practice",
      code: cssDemo("<div class=\"grid\"><b>A</b><b>B</b><b>C</b><b>D</b></div>")(".grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; }\nb { background: ivory; }"),
      result: "Rows are 8px apart and columns are 20px apart.",
    }],
    quizzes: [
      { question: "What is the row gap?", options: ["20px", "8px", "28px"], answer: 1, explanation: "The first value in the gap shorthand applies between rows." },
      { question: "Why check inheritance in a property reference?", options: ["To validate a URL", "To find the compilation time", "To see whether children receive the value by default"], answer: 2, explanation: "Inheritance depends on the property." },
      { question: "Where can you inspect the resolved value?", options: ["Computed styles", "Bookmark list", "History"], answer: 0, explanation: "The browser displays resolved property values in its computed styles." },
    ],
  },
  {
    id: "css-references-selectors", title: "CSS Selectors", level: "Intermediate",
    summary: "Read a selector by identifying the set of elements it matches.",
    content: [
      "A compound selector combines conditions on one element without a space. A space between selectors introduces an ancestor-descendant relationship.",
      "Put two classes on one card and a nested label inside another. Compare the selectors and observe how removing the space before the second dot changes the match.",
    ],
    examples: [{
      title: "CSS Selectors · Practice",
      code: cssDemo("<p class=\"card hot\">A</p><div class=\"card\"><span class=\"hot\">B</span></div>")(".card.hot { border: 2px solid teal; }\n.card .hot { color: maroon; }"),
      result: "A gets a border because the same paragraph has both classes. B is maroon because its hot span is inside a card.",
    }],
    quizzes: [
      { question: "Which selector requires both classes on one element?", options: [".card .hot", ".card, .hot", ".card.hot"], answer: 2, explanation: "Adjacent class selectors form a compound condition." },
      { question: "Which selector matches the nested B?", options: [".card .hot", ".card.hot", "#card"], answer: 0, explanation: "The space matches the descendant relationship." },
      { question: "What happens if you use a comma between the selectors?", options: ["Both classes are required", "Either listed selector can match", "Only children match"], answer: 1, explanation: "A selector list combines the matches from its members." },
    ],
  },
  {
    id: "css-references-combinators", title: "CSS Combinators", level: "Intermediate",
    summary: "Compare adjacent and subsequent sibling relationships.",
    content: [
      "The + combinator selects the immediately following sibling element. The ~ combinator can select all later matching siblings with the same parent.",
      "Place two paragraphs after the heading. The first gets an indent and both get a color. Insert another element between the heading and first paragraph and check the adjacent match again.",
    ],
    examples: [{
      title: "CSS Combinators · Practice",
      code: cssDemo("<h2>Notes</h2><p>First</p><p>Second</p>")("h2 + p { padding-left: 1rem; }\nh2 ~ p { color: teal; }"),
      result: "The first paragraph is indented and teal. The second is teal with no indent.",
    }],
    quizzes: [
      { question: "Which combinator selects an immediately following sibling?", options: ["+", "~", ">"], answer: 0, explanation: "The plus sign selects the next sibling element." },
      { question: "What color is the second paragraph?", options: ["Default", "Teal", "Transparent"], answer: 1, explanation: "The subsequent-sibling rule matches both paragraphs." },
      { question: "Can ~ match a paragraph with a different parent?", options: ["Always", "Only if it is teal", "No"], answer: 2, explanation: "Siblings must have the same parent." },
    ],
  },
  {
    id: "css-references-pseudo-classes", title: "CSS Pseudo-classes", level: "Intermediate",
    summary: "Evaluate structural pseudo-classes against the actual list of siblings.",
    content: [
      "The nth-child pseudo-class checks an element's position among its parent's children. Odd or even positions can receive alternating styles.",
      "Insert a new item at the top of the ordered list and see which rows receive the highlight. Counting begins at one.",
    ],
    examples: [{
      title: "CSS Pseudo-classes · Practice",
      code: cssDemo("<ol><li>Mix</li><li>Fold</li><li>Dry</li><li>Pack</li></ol>")("li:nth-child(even) { background: lavender; }"),
      result: "Fold and Pack are highlighted. Adding a new first item changes which items occupy even positions.",
    }],
    quizzes: [
      { question: "What position does Fold occupy initially?", options: ["1", "2", "0"], answer: 1, explanation: "Element positions start at one." },
      { question: "How many original items match the even rule?", options: ["3", "4", "2"], answer: 2, explanation: "Among four siblings, positions two and four are even." },
      { question: "Which selector is equivalent to :first-child?", options: [":nth-child(1)", ":nth-child(0)", "Always :last-child"], answer: 0, explanation: "The first child occupies position one." },
    ],
  },
  {
    id: "css-references-pseudo-elements", title: "CSS Pseudo-elements", level: "Intermediate",
    summary: "Look up pseudo-elements for markers, selections, and placeholders.",
    content: [
      "A pseudo-element lets you style a defined part without writing an extra HTML tag. Check which properties the particular pseudo-element supports.",
      "Color the list markers teal and give selected text a gold background. Select some text with a mouse or keyboard to inspect the temporary highlight.",
    ],
    examples: [{
      title: "CSS Pseudo-elements · Practice",
      code: cssDemo("<ul><li>Paper kit</li><li>Ink kit</li></ul>")("li::marker { color: teal; }\n::selection { background: gold; color: navy; }"),
      result: "The bullets stay teal. The selected text appears navy against a gold highlight.",
    }],
    quizzes: [
      { question: "Which selector styles selected text?", options: [":checked", "::marker", "::selection"], answer: 2, explanation: "The ::selection pseudo-element represents the selected portion." },
      { question: "Which selector targets the bullet?", options: ["::marker", "Always ::before", ":first-child"], answer: 0, explanation: "The ::marker pseudo-element styles the existing list marker." },
      { question: "What happens to the gold highlight when you clear the selection?", options: ["Permanent", "It disappears", "It moves onto the bullet"], answer: 1, explanation: "The highlight lasts only for the duration of the selection." },
    ],
  },
  {
    id: "css-references-at-rules", title: "CSS At-rules", level: "Intermediate",
    summary: "Use at-rules for conditional styles, resource registration, and named definitions.",
    content: [
      "The @media rule checks the environment, @supports tests a capability, and @keyframes defines animation stages. Each at-rule keyword has its own syntax.",
      "Create a base notice with a separate print rule. Check the regular screen style and compare its appearance in Print Preview.",
    ],
    examples: [{
      title: "CSS At-rules · Practice",
      code: cssDemo("<p class=\"notice\">Class at four</p>")(".notice { background: lavender; }\n@media print { .notice { background: white; border: 1px solid black; } }"),
      result: "The notice has a lavender background on screen. In print it has a white background and black border.",
    }],
    quizzes: [
      { question: "Which rule tests an environmental condition?", options: ["@media", "@keyframes", "@font-face"], answer: 0, explanation: "A media rule checks output conditions." },
      { question: "Which rule defines stages of an animation?", options: ["@supports", "@keyframes", "@charset"], answer: 1, explanation: "Named keyframes describe values at positions in an animation." },
      { question: "What border appears in Print Preview?", options: ["None", "Lavender", "1px solid black"], answer: 2, explanation: "The print block declares the border." },
    ],
  },
  {
    id: "css-references-functions", title: "CSS Functions", level: "Intermediate",
    summary: "Check a function's arguments and return type in the reference.",
    content: [
      "The clamp function takes three compatible expressions, var reads a custom property, and calc performs arithmetic. A value of the wrong type can invalidate a declaration.",
      "Store a viewport-based preferred gap in a custom property and bound the gap with clamp. Widen the window to reach the upper limit and narrow it to reach the lower one.",
    ],
    examples: [{
      title: "CSS Functions · Practice",
      code: cssDemo("<div class=\"row\"><b>AM</b><b>PM</b></div>")(".row { --space: 4vw; display: flex; gap: clamp(8px, var(--space), 24px); }"),
      result: "The gap stays between 8px and 24px. Within those bounds its preferred size is 4vw.",
    }],
    quizzes: [
      { question: "What is the cap on a wide viewport?", options: ["8px", "24px", "4px"], answer: 1, explanation: "The last argument sets the maximum." },
      { question: "Which value does var() supply?", options: ["24px", "8px", "4vw"], answer: 2, explanation: "The --space property holds the viewport-relative value." },
      { question: "What does the first argument to clamp() specify?", options: ["Minimum", "Maximum", "Preferred"], answer: 0, explanation: "The arguments are the minimum, preferred value, and maximum, in that order." },
    ],
  },
  {
    id: "css-references-reference-aural", title: "CSS Reference Aural", level: "Intermediate",
    summary: "Distinguish speech-oriented CSS from accessible document structure.",
    content: [
      "Support for historical aural properties and modern CSS Speech features depends on the speech engine. Clear HTML headings and a meaningful reading order provide the foundation for assistive output.",
      "Add an optional voice-rate rule for speech media. Read the heading and paragraph in a visual browser, then test the spoken output in a reading environment that supports the feature.",
    ],
    examples: [{
      title: "CSS Reference Aural · Practice",
      code: cssDemo("<h2>Departure</h2><p class=\"timing\">Gate three at four o'clock.</p>")("@media speech { .timing { voice-rate: slow; } }"),
      result: "A visual browser shows the usual heading and paragraph. A renderer that supports speech CSS may read the departure time more slowly.",
    }],
    quizzes: [
      { question: "Which media type targets synthesized speech?", options: ["screen", "print", "speech"], answer: 2, explanation: "The speech media type targets speech output." },
      { question: "How does voice-rate affect the visual font size?", options: ["It has no effect", "Double", "Zero"], answer: 0, explanation: "Voice rate controls spoken delivery." },
      { question: "What provides an accessible baseline?", options: ["Aural rules alone", "Meaningful HTML and reading order", "Hidden text image"], answer: 1, explanation: "Assistive technology uses the document's semantic structure." },
    ],
  },
  {
    id: "css-references-web-safe-fonts", title: "CSS Web Safe Fonts", level: "Intermediate",
    summary: "Build an ordered list of common fonts and generic fallbacks.",
    content: [
      "A named font can be missing on a particular device. The browser chooses an available face that can render the text.",
      "Start with a specific family and finish with generic monospace. Temporarily remove the named families and compare how characters still line up in the code.",
    ],
    examples: [{
      title: "CSS Web Safe Fonts · Practice",
      code: cssDemo("<pre>Room  A1\nTime  04</pre>")("pre { font-family: Consolas, \"Courier New\", monospace; }"),
      result: "The browser uses Consolas if available and otherwise tries the next candidate. The monospace fallback preserves the intended fixed character widths.",
    }],
    quizzes: [
      { question: "Which family is tried first?", options: ["Consolas", "Courier New", "monospace"], answer: 0, explanation: "The list specifies preferences from left to right." },
      { question: "Which entry is a generic family?", options: ["Consolas", "monospace", "Courier New"], answer: 1, explanation: "The generic name lets the browser choose a font from that category." },
      { question: "How is the font name containing a space written here?", options: ["With a hash", "After a slash", "In quotes"], answer: 2, explanation: "Quotes clearly delimit the family name." },
    ],
  },
  {
    id: "css-references-animatable", title: "CSS Animatable", level: "Intermediate",
    summary: "Check a property's animation type before applying a transition.",
    content: [
      "Compatible numeric values can have intermediate steps. Some properties change discretely, so smooth interpolation depends on the property.",
      "Scale the button on focus and hover. Remove the transition for reduced motion. Look up transform and a discrete property to compare their animation behavior.",
    ],
    examples: [{
      title: "CSS Animatable · Practice",
      code: cssDemo("<button>Preview</button>")("button { transition: transform 200ms linear; }\nbutton:hover, button:focus-visible { transform: scale(1.1); }\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }"),
      result: "With motion enabled, the button grows visually by 10% over 200ms. Its original layout slot stays the same size.",
    }],
    quizzes: [
      { question: "How much larger is a scale of 1.1?", options: ["110% extra", "10%", "1%"], answer: 1, explanation: "Multiplying the original size by 1.1 increases it by 10%." },
      { question: "Which timing function is used?", options: ["ease-in", "step-start", "linear"], answer: 2, explanation: "The linear timing function gives constant progress." },
      { question: "What should you check in the reference?", options: ["Animation type", "Only the property's spelling", "File extension"], answer: 0, explanation: "Interpolation depends on the property's animation type." },
    ],
  },
  {
    id: "css-references-units", title: "CSS Units", level: "Intermediate",
    summary: "Use the reference to identify what percentage, viewport, and font-relative units measure.",
    content: [
      "The reference for an em can change with the property. If you know the root font size, you can predict the conversion between rem and px.",
      "Set the root to 16px and the panel font to 1.25rem. Give it .5em of padding. Calculate the font size first and use it to work out the padding.",
    ],
    examples: [{
      title: "CSS Units · Practice",
      code: cssDemo("<p class=\"measure\">Unit check</p>")("html { font-size: 16px; }\n.measure { font-size: 1.25rem; padding: .5em; background: ivory; }"),
      result: "The font is 20px and the padding is 10px on each side. A 20px root changes those values to 25px and 12.5px.",
    }],
    quizzes: [
      { question: "How large is 1.25rem in the initial example?", options: ["16px", "12.5px", "20px"], answer: 2, explanation: "Multiplying 16px by 1.25 gives 20px." },
      { question: "What is the reference for .5em padding?", options: ["The paragraph's 20px font", "The root's 16px directly", "Viewport"], answer: 0, explanation: "For padding, em uses the element's computed font size." },
      { question: "Which unit represents 1% of viewport height?", options: ["1vw", "1vh", "1rem"], answer: 1, explanation: "The vh unit is relative to viewport height." },
    ],
  },
  {
    id: "css-references-px-em-converter", title: "CSS PX-EM Converter", level: "Intermediate",
    summary: "Divide the target font size by the parent's pixel size to find its value in em.",
    content: [
      "The base is context-dependent. A target of 24px with a parent font size of 16px gives a ratio of 1.5em.",
      "Enter a target and a positive base in the form. Repeat with a base of 12 and the same target. Validate the base because division by zero gives no usable ratio.",
    ],
    examples: [{
      title: "CSS PX-EM Converter · Practice",
      code: cssDemo("<form id=\"units\"><label>Target px <input name=\"px\" type=\"number\" value=\"24\" min=\"0\" step=\"any\" required></label><label>Base px <input name=\"base\" type=\"number\" value=\"16\" min=\".01\" step=\"any\" required></label><button>Convert</button><output></output></form><script>document.querySelector(\"#units\").onsubmit = e => { e.preventDefault(); const f = e.currentTarget; f.querySelector(\"output\").textContent = f.elements.px.valueAsNumber / f.elements.base.valueAsNumber + \"em\"; };</script>")("form { display: grid; gap: .5rem; max-width: 18rem; }"),
      result: "Choosing Convert gives 1.5em for the initial values. A base of 12 and a target of 24 give 2em.",
    }],
    quizzes: [
      { question: "Which formula gives the em value?", options: ["Target / base", "Base / target", "Target + base"], answer: 0, explanation: "Divide the desired font size by the parent font size." },
      { question: "What do a target of 18 and a base of 12 give?", options: ["6em", "1.5em", ".67em"], answer: 1, explanation: "Dividing 18 by 12 gives 1.5." },
      { question: "Why reject a zero base?", options: ["Pixels are invalid", "CSS ignores zero", "Division by zero is undefined"], answer: 2, explanation: "A zero denominator cannot produce a valid size ratio." },
    ],
  },
  {
    id: "css-references-colors", title: "CSS Colors", level: "Intermediate",
    summary: "Compare a named color with its exact color value.",
    content: [
      "Named colors give readable names to sRGB values. You can specify the same shade with hex or RGB. Test foreground and background contrast separately.",
      "Style one label with teal and the other with its matching hex value. Compare their RGB channels in the inspector's color picker and view both on white.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<p class=\"named\">Open</p><p class=\"hex\">Open</p>")(".named { color: teal; } .hex { color: #008080; }\np { background: white; }"),
      result: "Both labels appear the same teal because their RGB channels are 0, 128, and 128.",
    }],
    quizzes: [
      { question: "Which hex value represents teal?", options: ["#800080", "#008080", "#808000"], answer: 1, explanation: "Teal has green and blue channels of 128." },
      { question: "What is the red channel value?", options: ["128", "255", "0"], answer: 2, explanation: "The first hex pair is 00." },
      { question: "What should you check text contrast against?", options: ["Actual background", "Only the color name", "File name"], answer: 0, explanation: "Readability depends on the relative luminance of the foreground and its actual background." },
    ],
  },
  {
    id: "css-references-color-values", title: "CSS Color Values", level: "Intermediate",
    summary: "Decode alpha in hexadecimal and functional color notation.",
    content: [
      "Eight-digit CSS hex uses RRGGBBAA order. An alpha of 00 is transparent and FF is opaque. The same translucent foreground can look different over different backgrounds.",
      "View the same translucent red overlay on white and dark surfaces. Hexadecimal 80 represents 128/255 alpha, or about 50%. Keep the text fully opaque.",
    ],
    examples: [{
      title: "CSS Color Values · Practice",
      code: cssDemo("<div class=\"light\"><span>A</span></div><div class=\"dark\"><span>B</span></div>")(".light { background: white; } .dark { background: #222; }\nspan { display: inline-block; padding: .5rem 2rem; background: #ff000080; color: white; }"),
      result: "Both strips specify the same red. Their shades look different because the underlying surfaces contribute different colors.",
    }],
    quizzes: [
      { question: "What does the last hex pair specify?", options: ["Blue", "Red", "Alpha"], answer: 2, explanation: "Eight-digit CSS hex puts alpha last." },
      { question: "What does FF alpha mean?", options: ["Opaque", "Transparent", "Half"], answer: 0, explanation: "An alpha of 255/255 gives full opacity." },
      { question: "Why do the shades look different?", options: ["The selector text differs", "The backdrops differ", "The red channel changes"], answer: 1, explanation: "Alpha compositing includes the underlying color." },
    ],
  },
  {
    id: "css-references-default-values", title: "CSS Default Values", level: "Intermediate",
    summary: "Compare initial, inherited, and browser stylesheet values.",
    content: [
      "A property's initial value is defined by CSS. Browsers also supply styles such as heading sizes and margins. The reset keyword you choose determines which value you get.",
      "Set a parent color. Give one child inherit and another initial. Set the heading margin to revert and inspect the effect of the browser's styles in the Computed panel.",
    ],
    examples: [{
      title: "CSS Default Values · Practice",
      code: cssDemo("<article><h2>Default test</h2><p class=\"inherit\">Parent color</p><p class=\"initial\">Initial color</p></article>")("article { color: teal; }\n.inherit { color: inherit; } .initial { color: initial; }\nh2 { margin: revert; }"),
      result: "The first paragraph is teal. The second uses the property's initial system color. The heading margin can come from the user or browser stylesheet.",
    }],
    quizzes: [
      { question: "Which keyword explicitly takes the parent's value?", options: ["inherit", "initial", "none"], answer: 0, explanation: "The inherit keyword uses the parent's computed value." },
      { question: "Where does the initial value come from?", options: ["Nearest sibling", "Property definition", "Last CSS file"], answer: 1, explanation: "CSS defines the initial value for each property." },
      { question: "What does revert do?", options: ["Sets every value to zero", "Always copies the parent", "Rolls back the current origin's effect"], answer: 2, explanation: "Revert lets an earlier cascade origin determine the value." },
    ],
  },
  {
    id: "css-references-browser-support", title: "CSS Browser Support", level: "Intermediate",
    summary: "Use a compatibility reference and test both the feature and its fallback.",
    content: [
      "A browser can support a declaration while a component still needs testing in context. Start with readable base styles and put an optional enhancement inside a feature query.",
      "Give the tag a fixed, readable background color. In supporting browsers, generate a shade with color-mix. Disable the enhancement in DevTools to compare the fallback.",
    ],
    examples: [{
      title: "CSS Browser Support · Practice",
      code: cssDemo("<span class=\"tag\">Practice</span>")(".tag { background: #d5eeee; color: #102f32; padding: .4rem; }\n@supports (background: color-mix(in srgb, teal 20%, white)) { .tag { background: color-mix(in srgb, teal 20%, white); } }"),
      result: "A supporting browser uses the mixed background. Otherwise the tag stays readable on its base background.",
    }],
    quizzes: [
      { question: "What is the fallback color?", options: ["Transparent", "#d5eeee", "Black"], answer: 1, explanation: "The base rule sits outside the conditional enhancement." },
      { question: "How is support detected?", options: ["The user-agent name", "Screen size", "An @supports declaration test"], answer: 2, explanation: "The feature query checks the property and its value." },
      { question: "What is the final verification step?", options: ["Test the component in the target browser", "Count the selectors", "Measure the CSS file size"], answer: 0, explanation: "Testing the rendered component checks its actual appearance and interaction." },
    ],
  },
]);
