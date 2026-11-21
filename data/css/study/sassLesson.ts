import { chapter } from "../../resource-chapter";

export const sassLesson = chapter("CSS SASS", [
  {
    id: "css-sass-sass-tutorial", title: "SASS Tutorial", level: "Intermediate",
    summary: "Sass is a preprocessor that compiles SCSS source into CSS a browser can use.",
    content: [
      "Variables beginning with $ let you reuse values. Nesting groups related selectors in the source. Link the compiled CSS file from the page.",
      "With Dart Sass installed, save the first block as club.scss and run sass club.scss club.css in a terminal. Compare the output with the compiled example. Link club.css in the page's head and add an element with the card class in the body.",
    ],
    reading: { title: "Sass documentation", url: "https://sass-lang.com/documentation/" },
    examples: [{
      title: "club.scss",
      code: "$ink: navy;\n.card {\n  color: $ink;\n  &:hover { color: teal; }\n}",
      result: "Dart Sass replaces the variable with navy and expands the nested hover selector.",
    }, {
      title: "Compiled club.css",
      code: ".card { color: navy; }\n.card:hover { color: teal; }",
      result: "The compiled stylesheet makes the card text navy and turns it teal on hover. The output contains the resolved color and expanded selector.",
    }],
    quizzes: [
      { question: "Which file should the page link to?", options: ["The raw club.scss file", "club.css", "Dart executable"], answer: 1, explanation: "The Sass build step produces CSS for the browser." },
      { question: "Which selector does & refer to here?", options: ["Root html", "Next sibling", "Parent .card"], answer: 2, explanation: "Sass replaces the parent selector with the current outer selector." },
      { question: "When does $ink receive its final value?", options: ["Compile time", "In the browser on every hover", "When the page is submitted"], answer: 0, explanation: "The Sass variable becomes a concrete value in the compiled CSS." },
    ],
  },
]);
