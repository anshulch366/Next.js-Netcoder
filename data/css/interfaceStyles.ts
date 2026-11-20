import { chapter } from "../resource-chapter";
import { cssDemo } from "./demo";

const controlsDemo = cssDemo(
  "<form class=\"search\"><label for=\"lookup\">Find an edition</label> <input id=\"lookup\" type=\"search\" name=\"q\"> <button>Search</button></form>\n<table><caption>Editions</caption><thead><tr><th>Title</th><th>Copies</th></tr></thead><tbody><tr><td><a href=\"#details\">River</a></td><td>12</td></tr><tr><td>Market</td><td>8</td></tr></tbody></table>\n<p id=\"details\">River · first edition</p>",
);

export const interfaceStyles = chapter("CSS Tutorial", [
  {
    id: "controls", title: "Style a search form and its results", level: "Intermediate",
    summary: "Make native controls, links and a results table feel like one interface.",
    content: [
      "Keep the visible label, input, submit button and column headers in HTML. Styling can make these roles easier to recognise. The demo form uses GET on the current page so you can submit a test value without a backend.",
      "Test the field with Tab and type a search term. In the table, compare selectors aimed at all cells with ones scoped to the table heading or body.",
    ],
    examples: [
      { title: "Match control typography", code: controlsDemo("body { font: 1rem/1.5 Georgia, serif; }\ninput, button { font: inherit; }"), result: "The field and button use the same font settings as the surrounding form." },
      { title: "Highlight an active field", code: controlsDemo("input[type=\"search\"]:focus { outline: 3px solid #157073; outline-offset: 2px; }"), result: "Focusing the search field gives it a visible teal outline." },
      { title: "Provide a clear button surface", code: controlsDemo("button { background: #803417; color: white; border: 0; border-radius: .4rem; padding: .6rem 1rem; }"), result: "The visual treatment changes and the native button still submits the form." },
      { title: "Distinguish visited links", code: controlsDemo("a:link { color: #134e73; }\na:visited { color: #623678; }"), result: "An unvisited destination uses blue; a visited one can use purple subject to browser privacy restrictions." },
      { title: "Keep quantities aligned", code: controlsDemo("th, td { padding: .4rem .7rem; }\ntr > :last-child { text-align: end; font-variant-numeric: tabular-nums; }"), result: "The copies column is end-aligned. A supporting font uses equal-width digits." },
      { title: "Highlight the row being inspected", code: controlsDemo("tbody tr:is(:hover, :focus-within) { background: #ffead8; }"), result: "The first row lights up when its link has keyboard focus, as well as on pointer hover." },
    ],
    quizzes: [
      { question: "What copies the parent font settings to the controls?", options: ["font: initial","display: inline","font: inherit"], answer: 2, explanation: "The field and button use the same font settings as the surrounding form." },
      { question: "Which state is active while typing?", options: [":focus",":visited",":disabled"], answer: 0, explanation: "Focusing the search field gives it a visible teal outline." },
      { question: "Which behaviour survives these paint changes?", options: ["Turning the button into a link","Native form submission","Removing keyboard access"], answer: 1, explanation: "The visual treatment changes and the native button still submits the form." },
      { question: "Which pseudo-class identifies an unvisited hyperlink?", options: [":target",":enabled",":link"], answer: 2, explanation: "An unvisited destination uses blue; a visited one can use purple subject to browser privacy restrictions." },
      { question: "Which value asks for equal-width digits?", options: ["tabular-nums","lining-nums","small-caps"], answer: 0, explanation: "The copies column is end-aligned. A supporting font uses equal-width digits." },
      { question: "Which state matches a row containing a focused link?", options: [":focus on the row only",":focus-within",":checked"], answer: 1, explanation: "The first row lights up when its link has keyboard focus, as well as on pointer hover." },
    ],
  },
]);
