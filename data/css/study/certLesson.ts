import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const certLesson = chapter("CSS Cert", [
  {
    id: "css-cert-certificate", title: "CSS Certificate", level: "Intermediate",
    summary: "Prepare for the certificate exam by predicting cascade and layout results yourself.",
    content: [
      "Practice explaining the output of unfamiliar code. For each incorrect prediction, write down the rule that actually won. Check the provider's certificate page for registration and current exam details.",
      "In the mock task, predict the card's outer width and final color, then verify both in DevTools. The next day, change the numbers and repeat the calculation without notes.",
    ],
    reading: { title: "W3Schools CSS Certificate", url: "https://www.w3schools.com/css/css_exam.asp" },
    examples: [{
      title: "CSS Certificate · Practice",
      code: cssDemo("<p class=\"pass\">Mock test</p>")("p { width: 160px; padding: 8px; box-sizing: border-box; color: navy; }\n.pass { color: teal; }"),
      result: "The outer width is 160px, the content is 144px wide, and the text is teal. The task exercises both box sizing and specificity.",
    }],
    quizzes: [
      { question: "Which color wins?", options: ["Navy", "Teal", "Inherited black"], answer: 1, explanation: "The class selector is more specific than the type selector." },
      { question: "How wide is the content?", options: ["176px", "160px", "144px"], answer: 2, explanation: "Subtract 8px of padding on each side from 160px." },
      { question: "What is a good way to retest your understanding?", options: ["Make a prediction with new numbers", "Memorize the same answer", "Look only at the score"], answer: 0, explanation: "A new example asks you to apply the rule again." },
    ],
  },
]);
