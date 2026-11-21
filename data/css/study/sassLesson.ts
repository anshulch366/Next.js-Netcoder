import { chapter } from "../../resource-chapter";

export const sassLesson = chapter("CSS SASS", [
  {
    id: "css-sass-sass-tutorial", title: "SASS Tutorial", level: "Intermediate",
    summary: "Sass ek preprocessor hai jo SCSS source ko browser-readable CSS mein compile karta hai.",
    content: [
      "Dollar variables aur nesting authoring ke waqt repeated values aur related selectors ko group karte hain. Browser ko compiled CSS file link karni hoti hai.",
      "Dart Sass available ho to pehla block club.scss mein rakho aur terminal mein sass club.scss club.css chalao. Neeche diya compiled rule milna chahiye. Page ke head mein club.css link karo aur body mein class card wala element rakho.",
    ],
    reading: { title: "Sass documentation", url: "https://sass-lang.com/documentation/" },
    examples: [{
      title: "club.scss",
      code: "$ink: navy;\n.card {\n  color: $ink;\n  &:hover { color: teal; }\n}",
      result: "Dart Sass variable ko navy se replace karega aur nested hover selector ko expand karega.",
    }, {
      title: "Compiled club.css",
      code: ".card { color: navy; }\n.card:hover { color: teal; }",
      result: "Compiled stylesheet lagne par card text navy aur hover par teal hoga. Final CSS mein dollar variable aur nesting compile ho chuke hain.",
    }],
    quizzes: [
      { question: "Browser ko kaunsi file link karoge?", options: ["club.scss raw", "club.css", "Dart executable"], answer: 1, explanation: "Sass build step browser ke liye CSS banata hai." },
      { question: "& kis selector ko refer karta hai?", options: ["Root html", "Next sibling", "Parent .card"], answer: 2, explanation: "Sass parent selector ko current outer selector se replace karta hai." },
      { question: "$ink kis stage par resolve hota hai?", options: ["Compile time", "Har hover par browser mein", "Page submit par"], answer: 0, explanation: "Sass variable compiled CSS mein concrete value banta hai." },
    ],
  },
]);
