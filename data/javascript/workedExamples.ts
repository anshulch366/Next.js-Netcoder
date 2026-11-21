import { chapter } from "../resource-chapter";

export const workedExamples = chapter("JS Examples", [
  {
    id: "examples", title: "JS Examples", level: "Intermediate",
    summary: "Combine data transformation and a page update in a small reading-list exercise.",
    content: [
      "Start with three reading records. Write the data step in isolation so you can inspect its output with an empty list, one match, and several matches. filter keeps records that pass the test and map extracts their titles.",
      "Then display the result with a native button. The second example creates a fresh list of nodes on every activation. Try clicking twice, then try an empty array to check the empty state.",
    ],
    examples: [
      { title: "Extract unread titles", code: "function unreadTitles(books) {\n  return books.filter(book => !book.read).map(book => book.title);\n}\nconst books = [\n  { title: \"Ink\", read: false },\n  { title: \"Clay\", read: true },\n  { title: \"Glass\", read: false }\n];\nconsole.log(unreadTitles(books).join(\", \"));\nconsole.log(unreadTitles([]).length);", result: "The titles are Ink and Glass in source order. An empty list has zero unread titles." },
      { title: "Render the reading list", code: "<button id=\"show\">Show unread titles</button>\n<ul id=\"list\"></ul>\n<script>\n  const titles = [\"Ink\", \"Glass\"];\n  document.querySelector(\"#show\").addEventListener(\"click\", () => {\n    const items = (titles.length ? titles : [\"No unread titles\"]).map(title => {\n      const item = document.createElement(\"li\");\n      item.textContent = title;\n      return item;\n    });\n    document.querySelector(\"#list\").replaceChildren(...items);\n  });\n</script>", result: "Each click displays the same two items. Changing titles to [] displays “No unread titles.”" },
    ],
    quizzes: [
      { question: "If Clay becomes unread, where does it appear?", options: ["After Glass", "Before Ink", "Between Ink and Glass"], answer: 2, explanation: "Filtering and mapping preserve the input order of matching records." },
      { question: "Why do repeated clicks leave just two items?", options: ["The button disables itself", "replaceChildren replaces the previous items", "map only runs once"], answer: 1, explanation: "Each render supplies a complete new set of child nodes." },
    ],
  },
]);
