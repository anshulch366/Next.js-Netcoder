import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const flow = chapter("CSS Tutorial", [
  {
    id: "css-tutorial-icons", title: "CSS Icons", level: "Beginner",
    summary: "Align an icon with its label.",
    content: [
      "When nearby text names an action, you can hide a decorative icon from assistive technology. Use currentColor to match the icon to the surrounding text.",
      "Add a small arrow beside the visible Download label. Change the button's color and watch the arrow change with it.",
    ],
    examples: [{
      title: "CSS Icons · Practice",
      code: cssDemo("<button><span aria-hidden=\"true\">↓</span> Download</button>")("button { color: navy; }\nbutton span { border: 1px solid currentColor; padding-inline: .2em; }"),
      result: "The arrow and its border are navy. The button's accessible name is “Download.”",
    }],
    quizzes: [
      { question: "Where does the border get its color?", options: ["Background", "Computed color", "Font size"], answer: 1, explanation: "The currentColor keyword uses the element's text color." },
      { question: "Which part has aria-hidden?", options: ["The entire button", "Download text", "Arrow"], answer: 2, explanation: "Hiding the decorative arrow avoids an unnecessary announcement." },
      { question: "What names the action?", options: ["Download label", "Navy border", "Padding"], answer: 0, explanation: "The visible label gives the button its name." },
    ],
  },
  {
    id: "css-tutorial-links", title: "CSS Links", level: "Beginner",
    summary: "Make links easy to recognize within text.",
    content: [
      "An underline helps readers identify a link by more than color alone. Test both pointer hover and keyboard focus.",
      "Underline the link and apply a dark background on hover and focus-visible. Press Tab to focus it, then Enter to check its destination.",
    ],
    examples: [{
      title: "CSS Links · Practice",
      code: cssDemo("<a href=\"#fees\">View fees</a><p id=\"fees\">Admission is free.</p>")("a { color: navy; text-decoration: underline; }\na:hover, a:focus-visible { background: navy; color: white; }"),
      result: "The link normally appears underlined. On hover or keyboard focus, it shows white text on navy.",
    }],
    quizzes: [
      { question: "Which selector styles keyboard focus here?", options: ["a:hover", "a:visited", "a:focus-visible"], answer: 2, explanation: "The focus-visible state provides a visible cue during keyboard navigation." },
      { question: "Why keep the underline?", options: ["To identify the link without relying on color", "To shorten the URL", "To make the text bold"], answer: 0, explanation: "The underline provides another visual cue." },
      { question: "What is the link's destination?", options: ["The navy class", "The element with the fees ID", "White paragraph"], answer: 1, explanation: "The fragment in href points to the matching ID." },
    ],
  },
  {
    id: "css-tutorial-lists", title: "CSS Lists", level: "Beginner",
    summary: "Change list markers while preserving the list's meaning.",
    content: [
      "Browsers normally give a ul bullets and an ol numbers. Use list-style-type to choose the marker and ::marker to style it.",
      "Choose square markers and change only their color. Compare each marker with the text beside it.",
    ],
    examples: [{
      title: "CSS Lists · Practice",
      code: cssDemo("<ul><li>Pencil</li><li>Paper</li></ul>")("ul { list-style-type: square; }\nli::marker { color: teal; }"),
      result: "Both items have teal square bullets. The item text keeps its normal color.",
    }],
    quizzes: [
      { question: "Which property gives the bullets their square shape?", options: ["list-style-type", "border-radius", "marker color"], answer: 0, explanation: "The marker type determines its shape." },
      { question: "How would you select just the bullets?", options: ["li:hover", "li::marker", "ul::after"], answer: 1, explanation: "The ::marker pseudo-element represents the list marker." },
      { question: "Which HTML element marks an ordered sequence?", options: ["ul", "div", "ol"], answer: 2, explanation: "An ol tells readers that the order matters." },
    ],
  },
  {
    id: "css-tutorial-project-iv", title: "CSS Project IV", level: "Beginner",
    summary: "Build a resources menu with links that are easy to click.",
    content: [
      "A list groups the links. Padding on each anchor makes the entire padded area clickable. Keyboard users also need a visible focus indicator.",
      "Give the anchors inline-block display, padding, and a focus outline. Click the padded space just outside the text to test the target size.",
    ],
    examples: [{
      title: "CSS Project IV · Practice",
      code: cssDemo("<nav><ul><li><a href=\"#kit\">Kit list</a></li><li><a href=\"#time\">Timing</a></li></ul></nav><p id=\"kit\">Pencil</p><p id=\"time\">Four o'clock</p>")("nav ul { list-style: none; padding: 0; }\nnav a { display: inline-block; padding: .5rem 1rem; color: navy; }\nnav a:focus-visible { outline: 2px solid teal; }"),
      result: "Two padded links appear on separate rows. Pressing Tab reveals a focus ring on each navy link.",
    }],
    quizzes: [
      { question: "Why put padding on the anchor?", options: ["It changes the URL", "It enlarges the clickable area", "It removes the li"], answer: 1, explanation: "The anchor's padded box is interactive." },
      { question: "Which rule removes the bullets?", options: ["padding: 0 alone", "display: block", "list-style: none"], answer: 2, explanation: "The list style explicitly disables markers." },
      { question: "How would you test keyboard focus?", options: ["Tab through the links", "Use only the mouse", "Rename the file"], answer: 0, explanation: "Tabbing shows whether the focus ring is visible." },
    ],
  },
  {
    id: "css-tutorial-tables", title: "CSS Tables", level: "Beginner",
    summary: "Make rows of table data easier to read.",
    content: [
      "Cell padding separates text from cell edges. Collapsing borders resolves adjacent cell borders into shared edges.",
      "Give header and data cells the same padding. Switch border-collapse from collapse to separate and examine the joins. The th and td elements express the data relationships.",
    ],
    examples: [{
      title: "CSS Tables · Practice",
      code: cssDemo("<table><caption>Timetable</caption><tr><th>Day</th><th>Room</th></tr><tr><td>Mon</td><td>A</td></tr></table>")("table { border-collapse: collapse; }\nth, td { border: 1px solid gray; padding: .4rem; text-align: left; }"),
      result: "Cells share single border lines and their labels align to the left.",
    }],
    quizzes: [
      { question: "Which property controls how adjacent borders meet?", options: ["border-spacing alone", "outline", "border-collapse"], answer: 2, explanation: "The collapse value combines adjacent borders." },
      { question: "What adds space inside each cell?", options: ["padding", "Table margin", "Caption"], answer: 0, explanation: "Padding surrounds the cell's content." },
      { question: "What identifies a header cell?", options: ["Bold text alone", "th", "Left alignment"], answer: 1, explanation: "The th element marks the cell as a header." },
    ],
  },
  {
    id: "css-tutorial-display", title: "CSS Display", level: "Beginner",
    summary: "Choose how an element participates in layout and lays out its children.",
    content: [
      "A block normally starts on a new line. Inline content follows the text flow. Setting display to none removes an element and its descendants from layout.",
      "Display two spans as blocks and hide an extra hint with display: none. Set the hint back to block to see its space return.",
    ],
    examples: [{
      title: "CSS Display · Practice",
      code: cssDemo("<span>Morning</span><span>Evening</span><p class=\"hint\">Extra slot</p>")("span { display: block; }\n.hint { display: none; }"),
      result: "“Morning” and “Evening” appear on separate lines. “Extra slot” takes up no space.",
    }],
    quizzes: [
      { question: "Why does each span start on a new line?", options: ["display: block", "Spans are blocks by default", "The text is short"], answer: 0, explanation: "The CSS changes each span's outer display type." },
      { question: "What happens to the space for display: none?", options: ["Its height is reserved", "The space is removed", "Only the color changes"], answer: 1, explanation: "The element generates no layout box." },
      { question: "How can you hide an element while reserving its space?", options: ["display: none", "display: grid", "visibility: hidden"], answer: 2, explanation: "The hidden visibility value preserves layout." },
    ],
  },
  {
    id: "css-tutorial-max-width", title: "CSS Max-width", level: "Beginner",
    summary: "Fit a container on small screens and limit its width on larger ones.",
    content: [
      "A fixed width can exceed the viewport. A maximum width sets an upper limit while allowing the box to shrink when less space is available.",
      "Give the card width: 100% and max-width: 32rem. Resize the browser to see the card follow a narrow parent and stop growing on a wider one.",
    ],
    examples: [{
      title: "CSS Max-width · Practice",
      code: cssDemo("<article>Reading notes</article>")("article { width: 100%; max-width: 32rem; margin-inline: auto; background: ivory; }"),
      result: "The centered card grows to 32rem in a wide parent. In a narrower parent it shrinks to fit.",
    }],
    quizzes: [
      { question: "What is the maximum width?", options: ["100rem", "32rem", "32px"], answer: 1, explanation: "The max-width property sets the upper limit." },
      { question: "How wide is the card in a 20rem parent?", options: ["32rem", "52rem", "20rem"], answer: 2, explanation: "The available width is less than the maximum." },
      { question: "What centers the card horizontally?", options: ["margin-inline: auto", "max-width alone", "Background"], answer: 0, explanation: "Auto inline margins share the remaining space." },
    ],
  },
  {
    id: "css-tutorial-project-v", title: "CSS Project V", level: "Beginner",
    summary: "Build a timetable that scrolls on narrow screens.",
    content: [
      "Squeezing many columns together makes a table hard to read. Give it a minimum width and let its wrapper scroll horizontally so the rest of the page fits.",
      "Name the region and allow keyboard focus. Narrow the window and scroll inside the wrapper. Check that the scrollbar disappears when the table fits.",
    ],
    examples: [{
      title: "CSS Project V · Practice",
      code: cssDemo("<div class=\"wrap\" role=\"region\" aria-label=\"Class timings\" tabindex=\"0\"><table><tr><th>Session</th><th>Day</th><th>Room</th></tr><tr><td>Sketch</td><td>Mon</td><td>A</td></tr></table></div>")(".wrap { max-width: 100%; overflow-x: auto; }\ntable { min-width: 30rem; width: 100%; }\nth, td { padding: .5rem; text-align: left; }"),
      result: "The table can scroll horizontally inside a wrapper narrower than 30rem. Other page sections keep their usual widths.",
    }],
    quizzes: [
      { question: "Which element handles scrolling?", options: ["Every th", "Always the body", "Wrapper"], answer: 2, explanation: "Overflow is set on the wrapper." },
      { question: "Why can't the table shrink to 20rem?", options: ["min-width: 30rem", "padding .5rem", "role region"], answer: 0, explanation: "The minimum width keeps the table wide enough to read." },
      { question: "Why use tabindex=\"0\"?", options: ["To sort the table", "To allow keyboard focus", "To reset the width"], answer: 1, explanation: "A focusable region can be reached and scrolled with the keyboard." },
    ],
  },
  {
    id: "css-tutorial-position", title: "CSS Position", level: "Beginner",
    summary: "Compare normal flow with a positioned overlay.",
    content: [
      "A relatively positioned element keeps its place in flow and can establish the containing block for an absolutely positioned descendant. The absolute child is outside normal flow.",
      "Position the card relatively and the badge absolutely. Measure the top and right gaps. Remove relative positioning to see how the badge depends on its containing block.",
    ],
    examples: [{
      title: "CSS Position · Practice",
      code: cssDemo("<article>Class A <b>New</b></article>")("article { position: relative; padding: 2rem; background: ivory; }\nb { position: absolute; top: 4px; right: 6px; }"),
      result: "The badge sits at the top right of the card. Its height does not contribute to the card's automatic height.",
    }],
    quizzes: [
      { question: "What provides the badge's reference box?", options: ["Positioned article", "h1", "Document title"], answer: 0, explanation: "The nearest positioned ancestor establishes its containing block here." },
      { question: "Which child is outside normal flow?", options: ["article", "b", "Both are static"], answer: 1, explanation: "Absolute positioning takes the badge out of flow." },
      { question: "Which position usually anchors a box to the viewport?", options: ["static", "inline", "fixed"], answer: 2, explanation: "Fixed positioning usually uses the viewport as its reference." },
    ],
  },
  {
    id: "css-tutorial-position-offsets", title: "CSS Position Offsets", level: "Beginner",
    summary: "Set the offsets of a positioned box.",
    content: [
      "The top, right, bottom, and left properties set physical offsets. The inset shorthand follows the clockwise order used by margin. These offsets have no effect on a statically positioned box.",
      "Position the parent relatively and the child absolutely. Set all four offsets. Without an explicit size, opposing offsets determine the child's available width and height.",
    ],
    examples: [{
      title: "CSS Position Offsets · Practice",
      code: cssDemo("<div class=\"frame\"><span>Preview</span></div>")(".frame { position: relative; height: 6rem; background: tan; }\n.frame span { position: absolute; inset: 8px 16px; background: ivory; }"),
      result: "The inner box sits 8px from the top and bottom and 16px from the left and right.",
    }],
    quizzes: [
      { question: "How wide is the left gap?", options: ["8px", "16px", "24px"], answer: 1, explanation: "The second of two inset values sets the horizontal offsets." },
      { question: "Which ancestor provides the reference for the insets?", options: ["title", "The span's text", "The relatively positioned frame"], answer: 2, explanation: "The frame establishes the containing block." },
      { question: "Which property changes just the upper gap?", options: ["top", "padding-left", "z-index"], answer: 0, explanation: "The top property sets the physical upper offset." },
    ],
  },
  {
    id: "css-tutorial-z-index", title: "CSS Z-index", level: "Beginner",
    summary: "Control which box appears on top when elements overlap.",
    content: [
      "Within one stacking context, a positioned sibling with a higher z-index paints above one with a lower index. Descendants of a nested context stack within their parent's context.",
      "Overlap two absolutely positioned labels and swap their z-index values. Watch the top color change without editing the DOM order.",
    ],
    examples: [{
      title: "CSS Z-index · Practice",
      code: cssDemo("<div class=\"stage\"><b>A</b><i>B</i></div>")(".stage { position: relative; height: 4rem; }\nb, i { position: absolute; padding: 1rem; }\nb { background: gold; z-index: 2; }\ni { left: 1rem; background: teal; z-index: 1; }"),
      result: "The gold A box appears on top where the labels overlap. Both labels belong to the same stacking context.",
    }],
    quizzes: [
      { question: "Which box is on top?", options: ["B", "Both are transparent", "A"], answer: 2, explanation: "Layer 2 sits above layer 1." },
      { question: "What does z-index control?", options: ["Paint order", "Layout width", "DOM order"], answer: 0, explanation: "Stacking determines the order in which boxes are painted." },
      { question: "What limits a nested child's high z-index?", options: ["Its text length", "Its stacking context", "Its tag name"], answer: 1, explanation: "The parent context stacks as a unit." },
    ],
  },
  {
    id: "css-tutorial-overflow", title: "CSS Overflow", level: "Beginner",
    summary: "Choose what happens when content exceeds its box.",
    content: [
      "The auto value allows scrolling when needed. The hidden value clips overflow, while visible allows content to paint beyond the boundary.",
      "Give the box a small height and add more lines. Compare auto and hidden using a mouse and keyboard to check whether all the text is reachable.",
    ],
    examples: [{
      title: "CSS Overflow · Practice",
      code: cssDemo("<div class=\"log\" tabindex=\"0\">Line 1<br>Line 2<br>Line 3<br>Line 4</div>")(".log { height: 2.5rem; overflow: auto; border: 1px solid; }"),
      result: "When the lines no longer fit, scroll inside the box to read the remaining text.",
    }],
    quizzes: [
      { question: "Which value enables scrolling when needed?", options: ["auto", "visible", "clip"], answer: 0, explanation: "The auto value allows scrolling when content overflows." },
      { question: "Which property controls vertical overflow alone?", options: ["overflow-x", "overflow-y", "text-overflow"], answer: 1, explanation: "The y-axis is vertical." },
      { question: "What does auto do when the content fits?", options: ["Always shows two scrollbars", "Deletes the text", "Requires no scrolling"], answer: 2, explanation: "The behavior depends on the available space." },
    ],
  },
  {
    id: "css-tutorial-float", title: "CSS Float", level: "Beginner",
    summary: "Wrap paragraph text around a floated element.",
    content: [
      "A float sits to one side and nearby lines adjust to the width that's left. Setting display: flow-root on the parent lets it contain the floated child's height.",
      "Float a colored initial to the left and give it a right margin. Extend the paragraph to see the lines return to full width below the initial.",
    ],
    examples: [{
      title: "CSS Float · Practice",
      code: cssDemo("<article><b>A</b>Our art club began in a small room. Now we meet every week to draw a new sketch together.</article>")("article { display: flow-root; max-width: 18rem; }\nb { float: left; font-size: 3rem; margin-right: .5rem; }"),
      result: "The first lines wrap to the right of the large A. Below it, lines can use the full available width.",
    }],
    quizzes: [
      { question: "Where does the text wrap beside the initial?", options: ["Only above the A", "To the right of the A", "Always below it"], answer: 1, explanation: "The A floats to the left." },
      { question: "Which declaration lets the parent contain its float?", options: ["text-align: left", "opacity: 1", "display: flow-root"], answer: 2, explanation: "A flow root establishes a new block formatting context." },
      { question: "How can a following block start below the floats?", options: ["clear: both", "z-index: 2", "line-height: 1"], answer: 0, explanation: "The clear property prevents the block from sitting beside the floats." },
    ],
  },
  {
    id: "css-tutorial-inline-block", title: "CSS Inline-block", level: "Beginner",
    summary: "Size a box that sits on the same line as text.",
    content: [
      "An inline-block participates in inline flow and accepts width, height, and padding. Whitespace between adjacent inline-blocks in the HTML can produce a visible gap.",
      "Give two badges a fixed width. Narrow the window until a whole badge moves to the next line. Use vertical-align to adjust its alignment within the line.",
    ],
    examples: [{
      title: "CSS Inline-block · Practice",
      code: cssDemo("<span>AM</span> <span>PM</span>")("span { display: inline-block; width: 3rem; padding: .25rem; background: lavender; text-align: center; }"),
      result: "Both badges fit on one line when there is room. Each has a content width of 3rem.",
    }],
    quizzes: [
      { question: "Which value supports both inline flow and a set width?", options: ["none", "contents", "inline-block"], answer: 2, explanation: "An inline-block behaves as one box in the surrounding line." },
      { question: "What can cause the small gap between badges?", options: ["HTML whitespace", "The width property alone", "Font weight"], answer: 0, explanation: "Inline layout can render a space character between the elements." },
      { question: "What centers the label within each badge?", options: ["vertical-align", "text-align", "margin-top"], answer: 1, explanation: "The text-align property aligns inline content." },
    ],
  },
  {
    id: "css-tutorial-align", title: "CSS Align", level: "Beginner",
    summary: "Distinguish alignment of text, blocks, and flex items.",
    content: [
      "Use text-align for inline content inside a box. Auto inline margins center a block of limited width. Flex containers have separate alignment properties for their axes.",
      "Center the box and its text independently. Remove text-align, restore it, then remove the auto margins to see what each declaration controls.",
    ],
    examples: [{
      title: "CSS Align · Practice",
      code: cssDemo("<p class=\"label\">Room 2</p>")(".label { width: 8rem; margin-inline: auto; text-align: center; background: ivory; }"),
      result: "The box sits in the center of its parent, and “Room 2” sits in the center of the box.",
    }],
    quizzes: [
      { question: "What centers the box?", options: ["Auto inline margins", "text-align", "Color"], answer: 0, explanation: "The margins share the remaining horizontal space." },
      { question: "What centers the text?", options: ["margin-inline", "text-align", "width"], answer: 1, explanation: "The inline content aligns within the paragraph." },
      { question: "How much extra space can auto margins share if the box fills its parent?", options: ["Half the width", "8rem", "Zero"], answer: 2, explanation: "Only unused horizontal space can be distributed." },
    ],
  },
  {
    id: "css-tutorial-combinators", title: "CSS Combinators", level: "Beginner",
    summary: "Describe relationships between elements in a selector.",
    content: [
      "A space selects descendants at any depth. The > combinator selects direct children, + selects the next sibling, and ~ selects later matching siblings.",
      "Compare the direct link inside nav with the nested link. Replace > with a space and check whether the nested link now receives the rule.",
    ],
    examples: [{
      title: "CSS Combinators · Practice",
      code: cssDemo("<nav><a href=\"#a\">Home</a><div><a href=\"#b\">Archive</a></div></nav>")("nav > a { border-bottom: 3px solid teal; }"),
      result: "Only Home has a border. Archive's direct parent is a div.",
    }],
    quizzes: [
      { question: "Which symbol selects a direct child?", options: ["+", ">", "~"], answer: 1, explanation: "The greater-than sign matches one level down." },
      { question: "Which selector also matches the nested Archive link?", options: ["nav + a", "nav ~ a", "nav a"], answer: 2, explanation: "The descendant combinator matches at any depth." },
      { question: "Which symbol selects an immediately following sibling?", options: ["+", ">", "Space"], answer: 0, explanation: "The adjacent sibling combinator selects the next sibling element." },
    ],
  },
  {
    id: "css-tutorial-pseudo-classes", title: "CSS Pseudo-classes", level: "Beginner",
    summary: "Style an element by its state or position in the tree.",
    content: [
      "A pseudo-class describes a matching condition. Hover depends on a pointing device, and focus-visible can identify keyboard focus.",
      "Focus the button with Tab and hover over it with the pointer. Move the pointer away and check which rule still matches.",
    ],
    examples: [{
      title: "CSS Pseudo-classes · Practice",
      code: cssDemo("<button>Details</button>")("button:hover { background: lavender; }\nbutton:focus-visible { outline: 3px solid navy; }"),
      result: "Hover gives the button a lavender background. Keyboard focus adds a navy ring. Both states can apply at once.",
    }],
    quizzes: [
      { question: "Which prefix introduces a pseudo-class?", options: ["Hash", "Dot", "Single colon"], answer: 2, explanation: "Write a pseudo-class as :name." },
      { question: "Which state is relevant when using a keyboard?", options: [":focus-visible", "Only :hover", ":visited on a button"], answer: 0, explanation: "Keyboard focus can trigger :focus-visible." },
      { question: "What happens to the hover rule when the pointer leaves?", options: ["It is saved permanently", "It stops matching", "It becomes inline"], answer: 1, explanation: "A pseudo-class depends on the current state." },
    ],
  },
  {
    id: "css-tutorial-pseudo-elements", title: "CSS Pseudo-elements", level: "Beginner",
    summary: "Style part of an element or generate a decorative box.",
    content: [
      "Double colons identify pseudo-elements such as ::first-letter, ::before, and ::after. Put essential messages in the HTML.",
      "Enlarge the paragraph's first letter and add a decorative shape before the tag. Inspect the HTML to see how the shape appears without an extra span.",
    ],
    examples: [{
      title: "CSS Pseudo-elements · Practice",
      code: cssDemo("<p>Now open your notebook to begin.</p><span class=\"tag\">Open</span>")("p::first-letter { font-size: 2em; }\n.tag::before { content: \"\"; display: inline-block; width: .5em; height: .5em; background: teal; margin-right: .4em; }"),
      result: "The initial N appears larger, and a teal square appears before “Open.”",
    }],
    quizzes: [
      { question: "Which selector targets the initial letter?", options: ["::first-letter", ":first-child", "::marker"], answer: 0, explanation: "The ::first-letter pseudo-element targets the first letter of the text." },
      { question: "What generates the empty decorative box?", options: ["href", "content: \"\"", "name"], answer: 1, explanation: "The content property generates the ::before pseudo-element." },
      { question: "Why keep the word “Open” in the HTML?", options: ["To fix the color", "To round the box", "To keep the meaning in accessible text"], answer: 2, explanation: "The label remains available independently of the decoration." },
    ],
  },
  {
    id: "css-tutorial-opacity", title: "CSS Opacity", level: "Beginner",
    summary: "Compare fading an entire element with making just its background translucent.",
    content: [
      "Opacity fades an element and its children as a group. A color with an alpha value can make a single painted layer translucent.",
      "Compare the badges. Give the first half opacity and the second a half-transparent background color. Look closely at the two labels.",
    ],
    examples: [{
      title: "CSS Opacity · Practice",
      code: cssDemo("<p class=\"all\">Entire badge</p><p class=\"bg\">Background only</p>")(".all { background: teal; opacity: .5; }\n.bg { background: rgb(0 128 128 / 50%); }"),
      result: "Both text and background fade on the first badge. The second label stays fully opaque.",
    }],
    quizzes: [
      { question: "Which choice also fades the child text?", options: ["Only an alpha background", "Parent opacity", "font-weight"], answer: 1, explanation: "Opacity applies to the whole group." },
      { question: "What is the visual effect of opacity: 0?", options: ["Opaque", "Display none", "Transparent"], answer: 2, explanation: "The paint is transparent, but the box can still occupy space." },
      { question: "Which choice fades just the background?", options: ["Alpha color", "Parent opacity zero", "Visibility hidden"], answer: 0, explanation: "The alpha value applies only to that background color." },
    ],
  },
  {
    id: "css-tutorial-project-vi", title: "CSS Project VI", level: "Beginner",
    summary: "Place a readable status badge on a photo card.",
    content: [
      "Use a positioned card to anchor the badge and a translucent background to keep its text readable. Lowering opacity on the entire card would fade the label too.",
      "The demo uses a gradient as a sample image. Position the parent relatively and the badge absolutely. Resize the window to check that the badge stays in the card's corner.",
    ],
    examples: [{
      title: "CSS Project VI · Practice",
      code: cssDemo("<article class=\"photo\"><span>Registration open</span></article>")(".photo { position: relative; height: 9rem; background: linear-gradient(120deg, tan, teal); }\n.photo span { position: absolute; right: .5rem; bottom: .5rem; background: rgb(0 0 0 / 80%); color: white; padding: .4rem; }"),
      result: "White status text appears on a dark translucent strip at the lower right. The gradient shows faintly through it.",
    }],
    quizzes: [
      { question: "Which corner holds the badge?", options: ["Top left", "Center", "Bottom right"], answer: 2, explanation: "The example sets bottom and right offsets." },
      { question: "Why use alpha only on the background?", options: ["To keep the label fully opaque", "To fix the position", "To repeat the gradient"], answer: 0, explanation: "Element opacity would fade the text too." },
      { question: "What anchors the badge to the card?", options: ["Text color white", "Relative positioning on the parent", "Padding .4rem"], answer: 1, explanation: "The card establishes the absolute badge's containing block." },
    ],
  },
]);
