import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const unitsDemo = cssDemo(
  "<section class=\"host\"><p class=\"swatch\">Sample</p></section>",
  "html { font-size: 16px; }\n.host { width: 240px; font-size: 20px; }\n.swatch { margin: 0; background: wheat; }",
);

const selectorIndexDemo = cssDemo(
  "<ul class=\"steps\"><li><label><input type=\"checkbox\"> Ink</label></li><li class=\"next\">Paper</li><li>Roller</li></ul>",
);

const rulesIndexDemo = cssDemo(
  "<main class=\"frame\"><p class=\"entry\">Edition 12</p></main>",
  ".frame { color: maroon; }",
);

export const references = chapter("CSS References", [
  {
    id: "units", title: "Lookup · Lengths, percentages and colours", level: "Beginner",
    summary: "Choose a unit by identifying the value it measures against.",
    content: [
      "For each entry, identify the reference size before predicting the result. Root-relative lengths follow the root's font size, while font-relative lengths can depend on the current element. Percentages depend on the specific property.",
      "Compare the coloured sample against its 240px parent. The root and parent font sizes are set explicitly to make these numerical examples repeatable.",
    ],
    examples: [
      { title: "CSS pixels", code: unitsDemo(".swatch { width: 96px; }"), result: "The computed width is 96 CSS pixels. Device pixel density can change the physical pixel count." },
      { title: "Root-relative lengths", code: unitsDemo(".swatch { width: 8rem; }"), result: "Eight times the 16px root font size is 128px." },
      { title: "Font-relative spacing", code: unitsDemo(".swatch { padding-inline: .5em; }"), result: "The inherited 20px font size produces 10px of padding on each inline side." },
      { title: "Percentage widths", code: unitsDemo(".swatch { width: 75%; }"), result: "Three quarters of the 240px host is 180px." },
      { title: "RGB with alpha", code: unitsDemo(".swatch { background: rgb(255 85 50 / 25%); color: #31211a; }"), result: "Only the background colour uses 25% alpha. The text remains opaque." },
      { title: "Use the current text colour", code: unitsDemo(".swatch { color: teal; border-bottom: 3px solid currentColor; }"), result: "The border follows the computed text colour and turns teal." },
    ],
    quizzes: [
      { question: "What does px describe here?", options: ["Physical display pixels in all cases","Points","CSS pixels"], answer: 2, explanation: "The computed width is 96 CSS pixels. Device pixel density can change the physical pixel count." },
      { question: "What is the width?", options: ["128px","160px","240px"], answer: 0, explanation: "Eight times the 16px root font size is 128px." },
      { question: "How much padding is on one side?", options: ["8px","10px","20px"], answer: 1, explanation: "The inherited 20px font size produces 10px of padding on each inline side." },
      { question: "What is the computed width?", options: ["75px","320px","180px"], answer: 2, explanation: "Three quarters of the 240px host is 180px." },
      { question: "What does the percentage after / control?", options: ["Background colour opacity","The red channel","Opacity of the entire paragraph"], answer: 0, explanation: "Only the background colour uses 25% alpha. The text remains opaque." },
      { question: "Which keyword reuses the computed color property?", options: ["inherit-width","currentColor","auto"], answer: 1, explanation: "The border follows the computed text colour and turns teal." },
    ],
  },
  {
    id: "selector-index", title: "Lookup · Combinators and pseudo selectors", level: "Intermediate",
    summary: "Find a selector by the relationship you want to describe.",
    content: [
      "Combinators describe relationships between elements. Pseudo-classes describe a state or structural condition, while pseudo-elements identify a generated part or part of a rendered element.",
      "Use the same short checklist for every example. Inspect the markup first, predict the matched nodes, then compare the painted result. Click a checkbox to test the state-dependent selector.",
    ],
    examples: [
      { title: "Direct child", code: selectorIndexDemo(".steps > li { border-bottom: 1px solid silver; }"), result: "All three direct list items gain a separator." },
      { title: "Adjacent sibling", code: selectorIndexDemo(".next + li { color: maroon; }"), result: "Roller is the first li immediately following Paper." },
      { title: "Subsequent siblings", code: selectorIndexDemo(".steps li:first-child ~ li { background: wheat; }"), result: "Paper and Roller follow the first item and share its parent." },
      { title: "Match a state on a descendant", code: selectorIndexDemo("li:has(input:checked) { background: peachpuff; }"), result: "Checking the box changes the containing list item's background." },
      { title: "Style a marker", code: selectorIndexDemo(".steps li::marker { color: #b44222; }"), result: "The bullets change colour while the list text retains its own colour." },
      { title: "Generate a decorative separator", code: selectorIndexDemo(".next::after { content: \" ·\"; color: sienna; }"), result: "A dot is painted after Paper without adding a DOM element. Keep meaningful labels in HTML." },
    ],
    quizzes: [
      { question: "Which symbol means immediate child?", options: ["+","~",">"], answer: 2, explanation: "All three direct list items gain a separator." },
      { question: "Which label turns maroon?", options: ["Roller","Ink","Paper"], answer: 0, explanation: "Roller is the first li immediately following Paper." },
      { question: "How many following siblings match?", options: ["One","Two","Three"], answer: 1, explanation: "Paper and Roller follow the first item and share its parent." },
      { question: "Which selector tests for the checked descendant?", options: [":checked li","li::checked",":has(input:checked)"], answer: 2, explanation: "Checking the box changes the containing list item's background." },
      { question: "Which part does ::marker style?", options: ["The list marker","The entire li","The first letter"], answer: 0, explanation: "The bullets change colour while the list text retains its own colour." },
      { question: "Where does ::after place the decoration?", options: ["Before the opening tag","After the element's content","After every sibling"], answer: 1, explanation: "A dot is painted after Paper without adding a DOM element. Keep meaningful labels in HTML." },
    ],
  },
  {
    id: "rules-index", title: "Lookup · At-rules, functions and defaults", level: "Advanced",
    summary: "Recognise the CSS construct required for a conditional or computed value.",
    content: [
      "Look at syntax first. An at-rule can define a condition or declare a named resource, a function supplies a value, and a CSS-wide keyword controls how a property obtains its value.",
      "For a feature-support question, check the documentation for the actual target browsers. A valid @supports result tells you that the declaration is recognised; checking the rendered result still matters.",
    ],
    examples: [
      { title: "Test a declaration", code: rulesIndexDemo("@supports (display: grid) { .frame { display: grid; gap: 1rem; } }"), result: "A browser recognising grid display applies the nested rules." },
      { title: "Use a bounded minimum", code: rulesIndexDemo(".entry { width: min(100%, 18rem); background: wheat; }"), result: "The smaller of the parent width and 18rem is selected." },
      { title: "Set a lower limit", code: rulesIndexDemo(".entry { padding-inline: max(12px, 2vw); }"), result: "Each inline side gets at least 12px of padding." },
      { title: "Request inheritance explicitly", code: rulesIndexDemo(".entry { border: 2px solid; border-color: inherit; }\n.frame { border-color: teal; }"), result: "The normally non-inherited border-color takes its parent's teal value." },
      { title: "Restore the initial value", code: rulesIndexDemo(".entry { color: teal; color: initial; }"), result: "Initial selects the property's specification-defined initial value rather than the parent's maroon." },
      { title: "Remove a later layer's contribution", code: rulesIndexDemo("@layer base, local;\n@layer base { .entry { color: teal; } }\n@layer local { .entry { color: revert-layer; } }"), result: "The local layer falls back to the lower layer's teal declaration." },
    ],
    quizzes: [
      { question: "Which at-rule checks declaration support?", options: ["@keyframes","@font-face","@supports"], answer: 2, explanation: "A browser recognising grid display applies the nested rules." },
      { question: "What does min() return?", options: ["The smallest resolved argument","Always its first argument","The middle argument"], answer: 0, explanation: "The smaller of the parent width and 18rem is selected." },
      { question: "Which function enforces this minimum?", options: ["min()","max()","round() only"], answer: 1, explanation: "Each inline side gets at least 12px of padding." },
      { question: "Which keyword explicitly takes the parent's computed value?", options: ["initial","revert-layer","inherit"], answer: 2, explanation: "The normally non-inherited border-color takes its parent's teal value." },
      { question: "What source does initial use?", options: ["The property definition","The parent's value","The previous author's rule"], answer: 0, explanation: "Initial selects the property's specification-defined initial value rather than the parent's maroon." },
      { question: "Which keyword rolls back only the current cascade layer?", options: ["unset","revert-layer","initial"], answer: 1, explanation: "The local layer falls back to the lower layer's teal declaration." },
    ],
  },
]);
