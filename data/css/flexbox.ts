import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const flexAxesDemo = cssDemo(
  "<div class=\"rail\"><span>Brush</span><span>Ink</span><span>Paper</span></div>",
  ".rail { display: flex; border: 1px solid; min-height: 5rem; }\n.rail > span { padding: .4rem; background: #ffead8; }",
);

const flexAlignmentDemo = cssDemo(
  "<div class=\"rail\"><span>Brush</span><span>Ink</span><span>Paper</span></div>",
  ".rail { display: flex; border: 1px solid; min-height: 5rem; }\n.rail > span { padding: .4rem; background: #ffead8; }",
);

const flexSizingDemo = cssDemo(
  "<div class=\"rail\"><span>Brush</span><span>Ink</span><span>Paper</span></div>",
  ".rail { display: flex; width: 300px; }\n.rail > span { box-sizing: border-box; background: #ffe5d6; }",
);

export const flexbox = chapter("CSS Flexbox", [
  {
    id: "flex-axes", title: "Flex containers, axes and wrapping", level: "Beginner",
    summary: "Turn a list of tools into a row that can change direction.",
    content: [
      "Flex layout applies to direct children. The main axis follows flex-direction, while the cross axis runs perpendicular to it. These examples use English horizontal writing mode.",
      "Compare the coloured items with their outer border. Make the container narrower to reveal what wraps. Reversing a visual row leaves the document's reading order intact.",
    ],
    examples: [
      { title: "Observe the initial row", code: flexAxesDemo(".rail { flex-direction: row; }"), result: "Brush, Ink and Paper run left to right as flex items." },
      { title: "Change the main axis", code: flexAxesDemo(".rail { flex-direction: column; }"), result: "Items flow down the page in a column." },
      { title: "Reverse the row", code: flexAxesDemo(".rail { flex-direction: row-reverse; }"), result: "Brush starts at the right edge. Its DOM position stays first." },
      { title: "Wrap long rows", code: flexAxesDemo(".rail { width: 9rem; flex-wrap: wrap; }\n.rail > span { flex: 0 0 4rem; }"), result: "Items move to extra flex lines when their outer sizes no longer fit." },
      { title: "Set gutters", code: flexAxesDemo(".rail { gap: 12px; }"), result: "A 12px gutter appears between adjacent items without adding outer padding." },
      { title: "Use a compact container", code: flexAxesDemo(".rail { display: inline-flex; }"), result: "The flex container participates inline and takes a content-based width when space permits." },
    ],
    quizzes: [
      { question: "Which elements are the flex items?", options: ["The three direct spans","The containing div","Only the first span"], answer: 0, explanation: "Brush, Ink and Paper run left to right as flex items." },
      { question: "Which axis now runs vertically?", options: ["Inline text axis","Main axis","Neither"], answer: 1, explanation: "Items flow down the page in a column." },
      { question: "What remains unchanged after row-reverse?", options: ["Main-axis start edge","Visual order","Document order"], answer: 2, explanation: "Brush starts at the right edge. Its DOM position stays first." },
      { question: "Which declaration allows another line?", options: ["flex-wrap: wrap","flex-direction: row","align-items: stretch"], answer: 0, explanation: "Items move to extra flex lines when their outer sizes no longer fit." },
      { question: "Where does gap add space in a single row?", options: ["Outside both container edges","Between items","Inside each item"], answer: 1, explanation: "A 12px gutter appears between adjacent items without adding outer padding." },
      { question: "Which display value gives inline-level outer behaviour?", options: ["flex","flow-root","inline-flex"], answer: 2, explanation: "The flex container participates inline and takes a content-based width when space permits." },
    ],
  },
  {
    id: "flex-alignment", title: "Align items and distribute free space", level: "Intermediate",
    summary: "Position a group or one item by choosing the right axis.",
    content: [
      "Start by identifying the main axis. Justify-content distributes remaining space on that axis after the item sizes are resolved. Align-items controls the cross-axis alignment of items in their line.",
      "Align-content operates on flex lines. To see it work, use a wrapping container with several lines and surplus cross-axis space.",
    ],
    examples: [
      { title: "Centre the group", code: flexAlignmentDemo(".rail { justify-content: center; }"), result: "The items cluster in the middle of the main axis." },
      { title: "Separate the ends", code: flexAlignmentDemo(".rail { justify-content: space-between; }"), result: "The outer items touch the start and end edges with equal space between neighbours." },
      { title: "Centre each item vertically", code: flexAlignmentDemo(".rail { align-items: center; }"), result: "The items stop stretching and sit midway along the cross axis." },
      { title: "Override one item", code: flexAlignmentDemo(".rail { align-items: flex-start; }\n.rail > :last-child { align-self: flex-end; }"), result: "Paper alone sits along the lower edge." },
      { title: "Push a final tool away", code: flexAlignmentDemo(".rail > :last-child { margin-inline-start: auto; }"), result: "The last item's leading margin absorbs spare row space and separates it from the others." },
      { title: "Separate wrapped lines", code: flexAlignmentDemo(".rail { flex-wrap: wrap; width: 9rem; height: 12rem; align-content: space-between; }\n.rail > span { flex: 0 0 4rem; }"), result: "Multiple flex lines spread from top to bottom across the available height." },
    ],
    quizzes: [
      { question: "Which property centres the group along a row?", options: ["align-content","align-self","justify-content"], answer: 2, explanation: "The items cluster in the middle of the main axis." },
      { question: "Which mode leaves no extra spacing at the outer ends?", options: ["space-between","space-around","space-evenly"], answer: 0, explanation: "The outer items touch the start and end edges with equal space between neighbours." },
      { question: "Which axis does align-items control?", options: ["Main axis","Cross axis","Both at once"], answer: 1, explanation: "The items stop stretching and sit midway along the cross axis." },
      { question: "Which declaration overrides alignment for one item?", options: ["justify-content","flex-flow","align-self"], answer: 2, explanation: "Paper alone sits along the lower edge." },
      { question: "What absorbs the available space?", options: ["An auto margin","The last item's padding","The border"], answer: 0, explanation: "The last item's leading margin absorbs spare row space and separates it from the others." },
      { question: "Which property distributes entire lines?", options: ["align-self","align-content","flex-basis"], answer: 1, explanation: "Multiple flex lines spread from top to bottom across the available height." },
    ],
  },
  {
    id: "flex-sizing", title: "Grow, shrink and diagnose overflow", level: "Advanced",
    summary: "Predict how flex items trade space when a toolbar gets wider or narrower.",
    content: [
      "Flex-basis provides a starting main size. Grow factors divide positive free space, while shrink factors and base sizes help distribute a deficit. Padding, gaps and min-content constraints can affect the final result.",
      "The base fixture removes padding and uses border-box. Inspect the items' widths in developer tools. Try long unbroken text to see how the default automatic minimum can limit shrinking.",
    ],
    examples: [
      { title: "Divide available space equally", code: flexSizingDemo(".rail > span { flex: 1 1 0; }"), result: "Each short item takes 100px of the 300px row." },
      { title: "Give one item a larger share", code: flexSizingDemo(".rail > span { flex: 1 1 0; }\n.rail > :first-child { flex-grow: 2; }"), result: "The first item gets two of four equal shares, or 150px." },
      { title: "Keep a fixed label", code: flexSizingDemo(".rail > :first-child { flex: 0 0 80px; }\n.rail > span + span { flex: 1 1 0; }"), result: "Brush stays 80px wide; each remaining item gets 110px." },
      { title: "Shrink equal bases", code: flexSizingDemo(".rail > span { flex: 0 1 120px; }"), result: "Three 120px bases exceed the row by 60px, so each short item loses 20px." },
      { title: "Protect one basis", code: flexSizingDemo(".rail > span { flex: 0 1 120px; }\n.rail > :first-child { flex-shrink: 0; }"), result: "The first keeps 120px while the other two shrink to 90px each." },
      { title: "Permit text truncation", code: flexSizingDemo(".rail { width: 7rem; }\n.rail > span { flex: 1 1 0; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }"), result: "An item can become narrower than its text. Text that no longer fits is clipped with an ellipsis where space permits." },
    ],
    quizzes: [
      { question: "What width does each item receive?", options: ["150px","Its text width only","100px"], answer: 2, explanation: "Each short item takes 100px of the 300px row." },
      { question: "How wide is the first item?", options: ["150px","200px","100px"], answer: 0, explanation: "The first item gets two of four equal shares, or 150px." },
      { question: "How much space remains after the fixed label?", options: ["160px","220px","300px"], answer: 1, explanation: "Brush stays 80px wide; each remaining item gets 110px." },
      { question: "How many pixels does each item lose?", options: ["60","0","20"], answer: 2, explanation: "Three 120px bases exceed the row by 60px, so each short item loses 20px." },
      { question: "Which setting protects the first item from shrinking?", options: ["flex-shrink: 0","flex-grow: 0","flex-basis: auto"], answer: 0, explanation: "The first keeps 120px while the other two shrink to 90px each." },
      { question: "Which declaration explicitly relaxes the automatic minimum width?", options: ["white-space: nowrap","min-width: 0","flex-grow: 1"], answer: 1, explanation: "An item can become narrower than its text. Text that no longer fits is clipped with an ellipsis where space permits." },
    ],
  },
]);
