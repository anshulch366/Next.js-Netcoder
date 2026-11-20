import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const selectorsDemo = cssDemo(
  "<section class=\"board\"><h1>Open studios</h1>\n<p id=\"today\" class=\"notice\">Today: pottery</p><p>Tomorrow: ink</p>\n<a href=\"#today\">Today’s notice</a></section>",
);

const boxModelDemo = cssDemo(
  "<article class=\"card\">Clay tools</article>",
  ".card { width: 160px; background: #ffede3; border: 2px solid #813b25; }",
);

const typeColourDemo = cssDemo(
  "<article class=\"note\"><h2>Night market</h2><p>Artists gather by the old library after sunset.</p><a href=\"#hours\">Opening hours</a></article>",
);

const flowDemo = cssDemo(
  "<article class=\"ticket\"><strong>Evening entry</strong> <span class=\"tag\">Booked</span><p>Collect your pass at reception.</p></article>",
  ".ticket { width: 15rem; border: 1px solid; padding: 1rem; }",
);

const cascadeDemo = cssDemo(
  "<nav class=\"menu\"><a id=\"home\" class=\"link\" href=\"#home\">Studio home</a></nav>",
);

export const tutorial = chapter("CSS Tutorial", [
  {
    id: "selectors", title: "Write your first rule", level: "Beginner",
    summary: "Style a printed notice and see which parts of the page match each selector.",
    content: [
      "Save a complete example as board.html and open it in a browser. The selector comes before the braces. Inside them, each declaration pairs a property with a value. Edit the selector, save and refresh.",
      "To share the rules, move the contents of style to board.css beside the page. Replace style with <link rel=\"stylesheet\" href=\"board.css\"> in head.",
    ],
    examples: [
      { title: "Target paragraphs", code: selectorsDemo("p { color: teal; }"), result: "Both notices turn teal; the heading keeps its colour." },
      { title: "Reuse a class", code: selectorsDemo(".notice { border-left: 4px solid coral; }"), result: "The paragraph with class=notice receives the stripe." },
      { title: "Identify a single notice", code: selectorsDemo("#today { background: mistyrose; }"), result: "The notice whose id is today gets a pink background." },
      { title: "Group selectors", code: selectorsDemo("h1, a { color: maroon; }"), result: "The title and link receive the same colour." },
      { title: "Select descendants", code: selectorsDemo(".board p { font-weight: bold; }"), result: "Paragraphs inside the board become bold even if nested more deeply." },
      { title: "Match an attribute prefix", code: selectorsDemo("a[href^=\"#\"] { text-decoration: underline double; }"), result: "The link gets a double underline because its destination begins with #." },
    ],
    quizzes: [
      { question: "Which elements match p?", options: ["Both paragraphs","Only the first paragraph","The entire board"], answer: 0, explanation: "Both notices turn teal; the heading keeps its colour." },
      { question: "Which prefix selects a class?", options: ["#",".","@"], answer: 1, explanation: "The paragraph with class=notice receives the stripe." },
      { question: "What matches id=\"today\"?", options: [".today","today","#today"], answer: 2, explanation: "The notice whose id is today gets a pink background." },
      { question: "What joins selectors that share a declaration block?", options: ["A comma","A colon","A slash"], answer: 0, explanation: "The title and link receive the same colour." },
      { question: "What relationship does the space represent?", options: ["Next sibling","Descendant","Same element"], answer: 1, explanation: "Paragraphs inside the board become bold even if nested more deeply." },
      { question: "What does ^= test?", options: ["Ends with","Exactly equals","Starts with"], answer: 2, explanation: "The link gets a double underline because its destination begins with #." },
    ],
  },
  {
    id: "box-model", title: "Sizing, spacing and the box model", level: "Beginner",
    summary: "Calculate the space a card occupies.",
    content: [
      "From the inside out, a box has content, padding, border and margin. Inspect the card using the browser's box-model diagram. Compare the size of its content with the distance between the border edges.",
      "Every sample starts with a 160px content width and 2px borders. Predict the outer width, then measure it.",
    ],
    examples: [
      { title: "Measure a content box", code: boxModelDemo(".card { padding: 12px; }"), result: "The border box measures 160 + 24 + 4 = 188px." },
      { title: "Keep the outer width fixed", code: boxModelDemo(".card { box-sizing: border-box; padding: 12px; }"), result: "The outer width stays at 160px and the content gets 132px." },
      { title: "Read three-value shorthand", code: boxModelDemo(".card { padding: 4px 16px 8px; }"), result: "Top gets 4px, the sides get 16px and bottom gets 8px." },
      { title: "Centre a narrow block", code: boxModelDemo(".card { margin-inline: auto; }"), result: "Extra inline space splits equally between the two margins." },
      { title: "Cap a fluid width", code: boxModelDemo(".card { box-sizing: border-box; width: 80%; max-width: 22rem; }"), result: "The border box follows 80% of the parent's width until it reaches 22rem." },
      { title: "Outline without resizing", code: boxModelDemo(".card { outline: 3px dashed teal; outline-offset: 4px; }"), result: "The outline is painted outside the border without consuming layout space." },
    ],
    quizzes: [
      { question: "What is the width including both borders?", options: ["188px","160px","184px"], answer: 0, explanation: "The border box measures 160 + 24 + 4 = 188px." },
      { question: "How wide is the content?", options: ["136px","132px","160px"], answer: 1, explanation: "The outer width stays at 160px and the content gets 132px." },
      { question: "Which side receives 8px?", options: ["Top","Left","Bottom"], answer: 2, explanation: "Top gets 4px, the sides get 16px and bottom gets 8px." },
      { question: "What centres this fixed-width block?", options: ["Auto inline margins","Equal vertical padding","The border colour"], answer: 0, explanation: "Extra inline space splits equally between the two margins." },
      { question: "Which value caps the width?", options: ["80rem","22rem","160%"], answer: 1, explanation: "The border box follows 80% of the parent's width until it reaches 22rem." },
      { question: "Which addition leaves the box dimensions intact?", options: ["Added padding","Thicker content-box borders","Outline"], answer: 2, explanation: "The outline is painted outside the border without consuming layout space." },
    ],
  },
  {
    id: "type-colour", title: "Type, colour and backgrounds", level: "Beginner",
    summary: "Give a short announcement a readable measure and hierarchy.",
    content: [
      "Choose a font on the parent so text can inherit it. Unitless line-height scales with each element's own font size. Compare the same paragraph before and after increasing the browser's text size.",
      "Apply foreground and background colours together. Check links against the final painted background in both their default and focus states.",
    ],
    examples: [
      { title: "Choose a fallback family", code: typeColourDemo(".note { font-family: Georgia, serif; }"), result: "When Georgia is unavailable the browser chooses a serif fallback." },
      { title: "Calculate line height", code: typeColourDemo(".note p { font-size: 20px; line-height: 1.5; }"), result: "The paragraph uses a 30px line height." },
      { title: "Limit line length", code: typeColourDemo(".note { max-inline-size: 32ch; }"), result: "The measure is based on the zero glyph of the current font." },
      { title: "Pair ink with paper", code: typeColourDemo(".note { color: #321b14; background-color: #fff2e8; }"), result: "The paragraph inherits dark text on a pale peach panel." },
      { title: "Adjust the underline", code: typeColourDemo(".note a { text-underline-offset: .2em; text-decoration-thickness: 2px; }"), result: "The underline sits farther from the letters while still identifying the link." },
      { title: "Paint a directional wash", code: typeColourDemo(".note { padding: 1rem; background: linear-gradient(90deg, white, peachpuff); }"), result: "The gradient progresses from white at the left to peach at the right." },
    ],
    quizzes: [
      { question: "Which family is the fallback?", options: ["Georgia","sans-serif","serif"], answer: 2, explanation: "When Georgia is unavailable the browser chooses a serif fallback." },
      { question: "Which line height follows from these values?", options: ["30px","21.5px","1.5px"], answer: 0, explanation: "The paragraph uses a 30px line height." },
      { question: "Which unit uses the zero glyph?", options: ["vh","ch","pt"], answer: 1, explanation: "The measure is based on the zero glyph of the current font." },
      { question: "Which declaration paints the panel?", options: ["color","outline-color","background-color"], answer: 2, explanation: "The paragraph inherits dark text on a pale peach panel." },
      { question: "Which property changes the distance from the text?", options: ["text-underline-offset","letter-spacing","line-height"], answer: 0, explanation: "The underline sits farther from the letters while still identifying the link." },
      { question: "Which direction is 90deg?", options: ["Down","To the right","To the left"], answer: 1, explanation: "The gradient progresses from white at the left to peach at the right." },
    ],
  },
  {
    id: "flow", title: "Display, positioning and overflow", level: "Intermediate",
    summary: "Trace a label through normal flow and positioned layouts.",
    content: [
      "Relative positioning offsets the painted box while preserving its place in flow. Absolute positioning uses a containing block and removes the positioned box from normal flow.",
      "Change the text in the ticket and inspect where each label sits. Shrink the available height to see how the browser handles overflowing content.",
    ],
    examples: [
      { title: "Start a new line", code: flowDemo(".tag { display: block; }"), result: "Booked begins its own block line." },
      { title: "Size an inline label", code: flowDemo(".tag { display: inline-block; width: 6rem; background: wheat; }"), result: "The label participates in the line while taking an explicit width." },
      { title: "Offset a painted label", code: flowDemo(".tag { position: relative; top: 5px; }"), result: "The label moves down 5px and its original space is preserved." },
      { title: "Anchor a corner badge", code: flowDemo(".ticket { position: relative; }\n.tag { position: absolute; top: 0; right: 0; background: coral; }"), result: "The badge sits against the ticket's top-right corner." },
      { title: "Allow scrolling", code: flowDemo(".ticket { block-size: 2rem; overflow: auto; }"), result: "When content exceeds the panel, the rest can be reached by scrolling." },
      { title: "Reserve an empty place", code: flowDemo(".tag { visibility: hidden; }"), result: "The label disappears visually and its space remains occupied." },
    ],
    quizzes: [
      { question: "Which change starts a block?", options: ["color: inherit","display: block","opacity: 1"], answer: 1, explanation: "Booked begins its own block line." },
      { question: "Which display value permits both behaviours?", options: ["inline","none","inline-block"], answer: 2, explanation: "The label participates in the line while taking an explicit width." },
      { question: "Which positioning keeps the original space?", options: ["relative","absolute","fixed"], answer: 0, explanation: "The label moves down 5px and its original space is preserved." },
      { question: "What establishes the local positioning reference?", options: ["The span's colour","position: relative on the ticket","The paragraph margin"], answer: 1, explanation: "The badge sits against the ticket's top-right corner." },
      { question: "Which value makes scrolling available on demand?", options: ["clip","visible","auto"], answer: 2, explanation: "When content exceeds the panel, the rest can be reached by scrolling." },
      { question: "Which alternative removes the layout box too?", options: ["display: none","opacity: 0","visibility: hidden"], answer: 0, explanation: "The label disappears visually and its space remains occupied." },
    ],
  },
  {
    id: "cascade", title: "Cascade, specificity and states", level: "Advanced",
    summary: "Explain which declaration wins when several rules match.",
    content: [
      "Check origin, importance and layer before comparing specificity. With equal precedence and specificity the later declaration wins.",
      "Inspect the link in developer tools and find the overridden declarations. Test the keyboard state with Tab and the pointer state with hover.",
    ],
    examples: [
      { title: "Resolve a source-order tie", code: cascadeDemo(".link { color: teal; }\n.link { color: maroon; }"), result: "Maroon wins the equal-specificity tie because it comes later." },
      { title: "Compare id and class", code: cascadeDemo("#home { color: navy; }\n.menu .link { color: tomato; }"), result: "The id outranks the two classes at the same layer and importance." },
      { title: "Lower default specificity", code: cascadeDemo(":where(.menu a) { color: purple; }\na { color: teal; }"), result: "The zero-specificity :where rule loses to the type selector." },
      { title: "Match a direct child", code: cascadeDemo(".menu > a { background: #ffeedd; padding: .5rem; }"), result: "The direct child link receives the background. A link inside a nested list would miss the selector." },
      { title: "Style keyboard focus", code: cascadeDemo(".link:focus-visible { outline: 3px solid teal; outline-offset: 3px; }"), result: "Tab to the link to see the focus outline." },
      { title: "Change hover paint", code: cascadeDemo(".link:hover { background: #f4dfcc; color: #482113; }"), result: "Hover changes the colours without resizing the link." },
    ],
    quizzes: [
      { question: "Which colour wins?", options: ["Teal","Maroon","Default blue"], answer: 1, explanation: "Maroon wins the equal-specificity tie because it comes later." },
      { question: "Which selector wins?", options: [".menu .link","The last rule regardless of specificity","#home"], answer: 2, explanation: "The id outranks the two classes at the same layer and importance." },
      { question: "What specificity does :where contribute?", options: ["Zero","Its strongest argument","One id"], answer: 0, explanation: "The zero-specificity :where rule loses to the type selector." },
      { question: "What relationship does > require?", options: ["Any descendant","Immediate child","Following sibling"], answer: 1, explanation: "The direct child link receives the background. A link inside a nested list would miss the selector." },
      { question: "Which state is intended for a visible focus cue?", options: [":visited",":active only",":focus-visible"], answer: 2, explanation: "Tab to the link to see the focus outline." },
      { question: "Which hover declaration changes box dimensions?", options: ["Neither","background","color"], answer: 0, explanation: "Hover changes the colours without resizing the link." },
    ],
  },
]);
