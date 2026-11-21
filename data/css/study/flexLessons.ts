import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const flexLessons = chapter("CSS Flexbox", [
  {
    id: "css-flexbox-flexbox-intro", title: "Flexbox Intro", level: "Intermediate",
    summary: "Flexbox ek direction mein related items arrange karta hai.",
    content: [
      "Container ka main axis flex-direction se tay hota hai aur cross axis uske perpendicular hota hai. Default row mein direct children ek flex line par shuru hote hain.",
      "Do paragraphs ko flex parent mein rakho. Direction column karke dekho ki markup wahi rehkar arrangement horizontal se vertical ho jaata hai.",
    ],
    examples: [{
      title: "Flexbox Intro · Practice",
      code: cssDemo("<div class=\"slots\"><p>AM</p><p>PM</p></div>")(".slots { display: flex; gap: 1rem; }\np { margin: 0; background: ivory; }"),
      result: "AM aur PM default row mein saath dikhenge. Column direction lagane par neeche-neeche aayenge.",
    }],
    quizzes: [
      { question: "Flex item kaun banta hai?", options: ["Har nested descendant", "Sirf div", "Direct child"], answer: 2, explanation: "Flex formatting parent ke direct boxes par hoti hai." },
      { question: "Default direction?", options: ["row", "column", "row-reverse"], answer: 0, explanation: "Initial flex-direction row hai." },
      { question: "Cross axis kaisa hai?", options: ["Hamesha horizontal", "Main axis ke perpendicular", "Main ke parallel"], answer: 1, explanation: "Axis direction container ke flow se nikalti hai." },
    ],
  },
  {
    id: "css-flexbox-flex-container", title: "Flex Container", level: "Intermediate",
    summary: "Container se alignment, wrapping aur spacing tay karo.",
    content: [
      "justify-content main axis par spare space baantta hai aur align-items cross axis par placement deta hai. Gap minimum gutter rakhta hai.",
      "Row toolbar ko height do aur dono edges par items rakho. Column direction try karo aur dekho ki justify-content ki direction bhi switch hoti hai.",
    ],
    examples: [{
      title: "Flex Container · Practice",
      code: cssDemo("<div class=\"bar\"><b>Club</b><button>Join</button></div>")(".bar { display: flex; justify-content: space-between; align-items: center; min-height: 4rem; gap: 1rem; background: ivory; }"),
      result: "Club aur Join opposite ends par honge aur vertically center dikhenge.",
    }],
    quizzes: [
      { question: "Main axis distribution?", options: ["justify-content", "align-items", "align-self"], answer: 0, explanation: "Justify-content line ki extra space distribute karta hai." },
      { question: "Vertical centering row mein?", options: ["justify-items", "align-items: center", "text-align"], answer: 1, explanation: "Row ka cross axis aam horizontal writing mein vertical hai." },
      { question: "Items wrap karane ka option?", options: ["align-content akela", "gap: auto", "flex-wrap: wrap"], answer: 2, explanation: "Wrap multiple lines allow karta hai." },
    ],
  },
  {
    id: "css-flexbox-flex-items", title: "Flex Items", level: "Intermediate",
    summary: "Har item ki base size aur extra space ka share set karo.",
    content: [
      "flex shorthand grow, shrink aur basis ko combine karta hai. Base sizes aur minimum constraints apply hone ke baad positive free space grow factors se banti hai.",
      "Do khaali-width panels ko zero basis aur 1:2 grow do. Container mein enough jagah ho to width compare karo. Long text ko wrap karne ke liye min-width zero useful hai.",
    ],
    examples: [{
      title: "Flex Items · Practice",
      code: cssDemo("<div class=\"row\"><p>Notes</p><p>Preview</p></div>")(".row { display: flex; gap: 12px; }\np { flex: 1 1 0; min-width: 0; background: lavender; }\np:last-child { flex-grow: 2; }"),
      result: "Gap ke baad available width lagbhag ek tihai aur do tihai mein bantegi.",
    }],
    quizzes: [
      { question: "Grow ratio kya hai?", options: ["2:1", "1:2", "1:1"], answer: 1, explanation: "Last item grow factor 2 leta hai." },
      { question: "Shorthand ka teesra hissa?", options: ["flex-wrap", "order", "flex-basis"], answer: 2, explanation: "Basis initial main size ka starting point hai." },
      { question: "Content minimum ko kam karne ka rule?", options: ["min-width: 0", "max-width: none", "align-self"], answer: 0, explanation: "Automatic minimum kabhi shrink ko rokta hai." },
    ],
  },
  {
    id: "css-flexbox-flex-responsive", title: "Flex Responsive", level: "Intermediate",
    summary: "Available width ke saath cards ko wrap aur grow karao.",
    content: [
      "Flex-basis ideal starting width deta hai aur wrap container ko next line lene deta hai. Har line apni free space independently baantti hai.",
      "Teen cards ko 12rem basis aur grow do. Viewport ghataakar last line dekho. Aakhri line mein ek item ho to grow usse poori line de sakta hai.",
    ],
    examples: [{
      title: "Flex Responsive · Practice",
      code: cssDemo("<div class=\"cards\"><p>A</p><p>B</p><p>C</p></div>")(".cards { display: flex; flex-wrap: wrap; gap: 1rem; }\np { flex: 1 1 12rem; margin: 0; background: ivory; }"),
      result: "Wide view mein cards saath honge. Jagah kam hone par next line banegi aur us line ke items apni space fill karenge.",
    }],
    quizzes: [
      { question: "Starting basis?", options: ["1rem", "0", "12rem"], answer: 2, explanation: "Flex shorthand ki aakhri length basis hai." },
      { question: "Last item line bhar sakta hai kyun?", options: ["Grow 1 hai", "Order 1 hai", "Gap zero hai"], answer: 0, explanation: "Us line ki free space growth mein milti hai." },
      { question: "Ek hi column alignment har row mein chahiye to kya consider karo?", options: ["Float only", "Grid", "Z-index"], answer: 1, explanation: "Grid shared two-dimensional tracks de sakta hai." },
    ],
  },
]);
