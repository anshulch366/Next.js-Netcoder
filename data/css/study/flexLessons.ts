import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const flexLessons = chapter("CSS Flexbox", [
  {
    id: "css-flexbox-flexbox-intro", title: "Flexbox Intro", level: "Intermediate",
    summary: "Arrange related items along one axis with flexbox.",
    content: [
      "The flex-direction property determines the main axis. The cross axis runs perpendicular to it. With the default row direction, direct children begin on a flex line.",
      "Place two paragraphs inside a flex container. Change the direction to column and watch the arrangement go from horizontal to vertical using the same markup.",
    ],
    examples: [{
      title: "Flexbox Intro · Practice",
      code: cssDemo("<div class=\"slots\"><p>AM</p><p>PM</p></div>")(".slots { display: flex; gap: 1rem; }\np { margin: 0; background: ivory; }"),
      result: "AM and PM appear side by side in the default row. With column direction, one appears below the other.",
    }],
    quizzes: [
      { question: "Which element becomes a flex item?", options: ["Every nested descendant", "Only a div", "Direct child"], answer: 2, explanation: "The flex container lays out its direct children." },
      { question: "What is the default direction?", options: ["row", "column", "row-reverse"], answer: 0, explanation: "The initial value of flex-direction is row." },
      { question: "How does the cross axis relate to the main axis?", options: ["It is always horizontal", "It is perpendicular to the main axis", "It is parallel to the main axis"], answer: 1, explanation: "The container's flow determines the axes." },
    ],
  },
  {
    id: "css-flexbox-flex-container", title: "Flex Container", level: "Intermediate",
    summary: "Set alignment, wrapping, and spacing on the container.",
    content: [
      "Use justify-content to distribute free space on the main axis and align-items to position items on the cross axis. Use gap to set a gutter between items.",
      "Give the row toolbar a height and place its items at opposite ends. Switch to a column and observe how the direction of justify-content changes.",
    ],
    examples: [{
      title: "Flex Container · Practice",
      code: cssDemo("<div class=\"bar\"><b>Club</b><button>Join</button></div>")(".bar { display: flex; justify-content: space-between; align-items: center; min-height: 4rem; gap: 1rem; background: ivory; }"),
      result: "Club and Join sit at opposite ends and are centered vertically.",
    }],
    quizzes: [
      { question: "Which property distributes space on the main axis?", options: ["justify-content", "align-items", "align-self"], answer: 0, explanation: "The justify-content property distributes the line's extra space." },
      { question: "What centers items vertically in this row?", options: ["justify-items", "align-items: center", "text-align"], answer: 1, explanation: "In horizontal writing mode, a row's cross axis is vertical." },
      { question: "What allows items to wrap?", options: ["align-content alone", "gap: auto", "flex-wrap: wrap"], answer: 2, explanation: "The wrap value allows multiple flex lines." },
    ],
  },
  {
    id: "css-flexbox-flex-items", title: "Flex Items", level: "Intermediate",
    summary: "Set each item's starting size and share of extra space.",
    content: [
      "The flex shorthand combines grow, shrink, and basis. After accounting for starting sizes and minimum constraints, flexbox distributes positive free space according to grow factors.",
      "Give two panels a zero basis and grow factors of 1 and 2. Compare their widths when the container has spare room. Setting min-width to zero allows a panel to shrink so long text can wrap.",
    ],
    examples: [{
      title: "Flex Items · Practice",
      code: cssDemo("<div class=\"row\"><p>Notes</p><p>Preview</p></div>")(".row { display: flex; gap: 12px; }\np { flex: 1 1 0; min-width: 0; background: lavender; }\np:last-child { flex-grow: 2; }"),
      result: "After the gap, the panels take roughly one third and two thirds of the available width.",
    }],
    quizzes: [
      { question: "What is the grow ratio?", options: ["2:1", "1:2", "1:1"], answer: 1, explanation: "The last item has a grow factor of 2." },
      { question: "What is the third component of the shorthand?", options: ["flex-wrap", "order", "flex-basis"], answer: 2, explanation: "The basis supplies the starting main size." },
      { question: "Which rule can reduce the content-based minimum?", options: ["min-width: 0", "max-width: none", "align-self"], answer: 0, explanation: "The automatic minimum can prevent an item from shrinking." },
    ],
  },
  {
    id: "css-flexbox-flex-responsive", title: "Flex Responsive", level: "Intermediate",
    summary: "Let cards wrap and grow with the available width.",
    content: [
      "The flex basis gives each card a starting size. Wrapping allows another line, and each line distributes its own free space independently.",
      "Give three cards a 12rem basis and allow them to grow. Narrow the viewport and inspect the last line. A single remaining card can grow to fill it.",
    ],
    examples: [{
      title: "Flex Responsive · Practice",
      code: cssDemo("<div class=\"cards\"><p>A</p><p>B</p><p>C</p></div>")(".cards { display: flex; flex-wrap: wrap; gap: 1rem; }\np { flex: 1 1 12rem; margin: 0; background: ivory; }"),
      result: "The cards sit together in a wide view. When space runs short they wrap, and the items on each line fill the available space.",
    }],
    quizzes: [
      { question: "What is each card's starting basis?", options: ["1rem", "0", "12rem"], answer: 2, explanation: "The final length in this flex shorthand is the basis." },
      { question: "Why can the last item fill its line?", options: ["Its grow factor is 1", "Its order is 1", "Its gap is zero"], answer: 0, explanation: "It receives the free space on that line." },
      { question: "Which layout can align columns across multiple rows?", options: ["Float only", "Grid", "Z-index"], answer: 1, explanation: "Grid provides shared tracks in two dimensions." },
    ],
  },
]);
