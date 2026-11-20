import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const certBaselineDemo = cssDemo(
  "<ul class=\"roster\"><li>Arun</li><li class=\"lead\">Leela</li><li>Dev</li></ul>",
);

const certLayoutDemo = cssDemo(
  "<section class=\"rail\"><span>A</span><span>B</span><span>C</span></section>",
  ".rail { width: 300px; }\nspan { background: #ffead8; }",
);

const certDebugDemo = cssDemo(
  "<div class=\"panel\"><button class=\"action\">Save proof</button><p>Revision saved</p></div>",
);

export const cert = chapter("CSS Cert", [
  {
    id: "cert-baseline", title: "Read a rule before checking the answer", level: "Beginner",
    summary: "Practise predicting the result of a small stylesheet.",
    content: [
      "For this certification-preparation drill, cover the expected result and predict which element changes. Open the example, compare your prediction and explain any difference in one sentence.",
      "These are original Netcoder practice tasks. The W3Schools certificate link in Further reading leads to the provider's current exam information. Completion in this library tracks your local study session.",
    ],
    examples: [
      { title: "Predict a class match", code: certBaselineDemo("li.lead { font-weight: bold; }"), result: "Only Leela matches both the element name and the class." },
      { title: "Find an inherited value", code: certBaselineDemo(".roster { color: navy; }\n.lead { color: sienna; }"), result: "Arun and Dev inherit navy; Leela has a directly specified sienna value." },
      { title: "Decode four-value padding", code: certBaselineDemo(".lead { padding: 2px 4px 6px 8px; }"), result: "Clockwise shorthand sets the left padding to 8px." },
      { title: "Identify a list marker", code: certBaselineDemo(".roster { list-style-type: square; }"), result: "The list keeps its semantics and its markers become squares." },
      { title: "Distinguish rem from px", code: certBaselineDemo("html { font-size: 20px; }\n.lead { margin-left: 1.5rem; }"), result: "The lead item has a 30px left margin based on the root font size." },
      { title: "Trace a sibling match", code: certBaselineDemo(".lead + li { background: wheat; }"), result: "Only Dev immediately follows the lead item." },
    ],
    quizzes: [
      { question: "Which name appears bold?", options: ["Arun","Leela","Dev"], answer: 1, explanation: "Only Leela matches both the element name and the class." },
      { question: "What colour is Dev?", options: ["Sienna","Always black","Navy"], answer: 2, explanation: "Arun and Dev inherit navy; Leela has a directly specified sienna value." },
      { question: "Which side receives 4px?", options: ["Right","Left","Bottom"], answer: 0, explanation: "Clockwise shorthand sets the left padding to 8px." },
      { question: "Which declaration changes the marker shape?", options: ["font-style","list-style-type","outline-style"], answer: 1, explanation: "The list keeps its semantics and its markers become squares." },
      { question: "What is 1.5rem in this example?", options: ["20px","1.5px","30px"], answer: 2, explanation: "The lead item has a 30px left margin based on the root font size." },
      { question: "Which name receives the background?", options: ["Dev","Leela","Arun"], answer: 0, explanation: "Only Dev immediately follows the lead item." },
    ],
  },
  {
    id: "cert-layout", title: "Solve a layout calculation", level: "Intermediate",
    summary: "Work out positions and dimensions before opening developer tools.",
    content: [
      "For each problem, write down the width available inside the rail. Subtract any fixed tracks and gaps before assigning flexible space. These questions use short labels with no horizontal padding or borders on the items.",
      "Use the layout overlay or Computed panel to check your numbers. Repeat with a 360px rail and describe which values change and which stay fixed.",
    ],
    examples: [
      { title: "Subtract grid gutters", code: certLayoutDemo(".rail { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }"), result: "Two 12px gaps leave 276px. Each of the three tracks gets 92px." },
      { title: "Combine fixed and flexible columns", code: certLayoutDemo(".rail { display: grid; grid-template-columns: 80px 1fr 1fr; }"), result: "After the 80px track, two equal tracks share 220px." },
      { title: "Use unequal grow factors", code: certLayoutDemo(".rail { display: flex; }\nspan { flex: 1 1 0; }\nspan:last-child { flex-grow: 4; }"), result: "Six grow shares divide 300px. C receives four shares, or 200px." },
      { title: "Calculate a percentage", code: certLayoutDemo(".rail { display: flex; }\nspan { flex: none; width: 25%; }"), result: "Each item gets 75px and 75px of the row remains free." },
      { title: "Include a border in a given width", code: certLayoutDemo(".rail { display: flex; }\nspan { width: 100px; box-sizing: border-box; padding: 8px; border: 2px solid; }"), result: "Each 100px border box has 80px available for content." },
      { title: "Locate the second row", code: certLayoutDemo(".rail { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 40px; row-gap: 6px; }"), result: "C begins on the second row, 46px below the start of the first." },
    ],
    quizzes: [
      { question: "How wide is one track?", options: ["96px","100px","92px"], answer: 2, explanation: "Two 12px gaps leave 276px. Each of the three tracks gets 92px." },
      { question: "How wide is B?", options: ["110px","100px","80px"], answer: 0, explanation: "After the 80px track, two equal tracks share 220px." },
      { question: "How many pixels go to C?", options: ["150","200","120"], answer: 1, explanation: "Six grow shares divide 300px. C receives four shares, or 200px." },
      { question: "How much space is unoccupied?", options: ["25px","0px","75px"], answer: 2, explanation: "Each item gets 75px and 75px of the row remains free." },
      { question: "What is the content width?", options: ["80px","84px","100px"], answer: 0, explanation: "Each 100px border box has 80px available for content." },
      { question: "What is the vertical distance between row starts?", options: ["40px","46px","86px"], answer: 1, explanation: "C begins on the second row, 46px below the start of the first." },
    ],
  },
  {
    id: "cert-debug", title: "Diagnose a broken stylesheet", level: "Advanced",
    summary: "Identify the smallest change that explains a visual bug.",
    content: [
      "Start by checking whether the rule parsed and the selector actually matched. Next inspect cascade precedence, layout mode and the available space. Each example isolates a different failure or fix.",
      "Use the Styles panel to toggle the suspect declaration and write down the evidence. Then take the practice questions without referring to the results.",
    ],
    examples: [
      { title: "Spot an invalid value", code: certDebugDemo(".action { color: navy; color: 14px; }"), result: "14px is invalid for color, so the earlier navy declaration remains effective." },
      { title: "Repair a selector mismatch", code: certDebugDemo(".panel.action { color: red; }\n.panel .action { color: teal; }"), result: "The element with action is a descendant of panel. The compound selector matches neither element." },
      { title: "Find the missing layout mode", code: certDebugDemo(".panel { justify-content: space-between; }\n/* Apply the missing layout mode: */\n.panel { display: flex; }"), result: "After display:flex applies, the two children separate along the row." },
      { title: "Resolve a layered conflict", code: certDebugDemo("@layer defaults { .panel .action { color: purple; } }\n.action { color: teal; }"), result: "The normal unlayered author rule wins over the normal layered one." },
      { title: "Inspect a missing token", code: certDebugDemo(".action { background: var(--brand-fill, gold); }"), result: "Because the token is absent, the variable fallback paints the button gold." },
      { title: "Diagnose a media condition", code: certDebugDemo("@media (min-width: 48rem) { .panel { display: grid; grid-template-columns: 1fr 1fr; } }"), result: "At 40rem the query is false, so the two-column grid declaration does not apply." },
    ],
    quizzes: [
      { question: "Which declaration is ignored?", options: ["color: navy","color: 14px","Both declarations"], answer: 1, explanation: "14px is invalid for color, so the earlier navy declaration remains effective." },
      { question: "Which selector matches the button?", options: [".panel.action","action.panel",".panel .action"], answer: 2, explanation: "The element with action is a descendant of panel. The compound selector matches neither element." },
      { question: "What made justify-content distribute horizontal space here?", options: ["The flex formatting context","The button label","The paragraph text colour"], answer: 0, explanation: "After display:flex applies, the two children separate along the row." },
      { question: "What is the winning colour?", options: ["Purple","Teal","Default black"], answer: 1, explanation: "The normal unlayered author rule wins over the normal layered one." },
      { question: "What should you inspect if the expected brand colour is missing?", options: ["The page title","The width of the button","Whether --brand-fill is defined in scope"], answer: 2, explanation: "Because the token is absent, the variable fallback paints the button gold." },
      { question: "What explains the missing grid at 40rem?", options: ["The media condition is false","The selector has no class","Grid always requires a fixed height"], answer: 0, explanation: "At 40rem the query is false, so the two-column grid declaration does not apply." },
    ],
  },
]);
