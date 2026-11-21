import { chapter } from "../resource-chapter";

export const webApis = chapter("JS Web API", [
  {
    id: "window", title: "JS Window API", level: "Intermediate",
    summary: "Use the browser window to inspect the current document’s environment.",
    content: [
      "In a page, window exposes browser facilities such as the location, viewport dimensions, and resize events. The viewport is the visible page area. Its width can change when the browser window is resized.",
      "Run the first example in a browser console. Save the second as HTML, open the page, and resize the window. The initial call displays the width immediately, and the listener updates it on later changes.",
    ],
    examples: [
      { title: "Inspect the current location", code: "console.log(window.location.pathname);\nconsole.log(window.location.hash);", result: "The first line shows the path of the open page. The second shows its fragment including #, or an empty string if it has none." },
      { title: "Display a changing width", code: "<output id=\"width\"></output>\n<script>\n  const width = document.querySelector(\"#width\");\n  function showWidth() {\n    width.value = window.innerWidth + \" CSS pixels\";\n  }\n  showWidth();\n  window.addEventListener(\"resize\", showWidth);\n</script>", result: "The page reports the current viewport width and updates the number when the window changes size." },
    ],
    quizzes: [
      { question: "Which part of a URL does location.hash report?", options: ["Its hostname", "Its fragment", "Its port"], answer: 1, explanation: "The hash property exposes the fragment after the path and query." },
      { question: "Why call showWidth before registering the listener?", options: ["To initialize the display immediately", "To resize the window", "To prevent future events"], answer: 0, explanation: "A listener alone would wait for a resize event." },
    ],
  },
  {
    id: "fetch", title: "JS Fetch API", level: "Intermediate",
    summary: "Read a response in two steps and handle unsuccessful requests.",
    content: [
      "fetch returns a promise for a Response. Once it resolves, inspect response.ok or the status code. A server can return a 404 response through a fulfilled promise. Reading the body as JSON is another asynchronous step.",
      "Try the first example in a browser console. Its data URL supplies a tiny practice response locally. The second example uses the same status check on a constructed response so you can reproduce a failure without a server.",
    ],
    examples: [
      { title: "Read a local JSON response", code: "async function readRoom() {\n  const url = \"data:application/json,\" + encodeURIComponent('{\"room\":\"B12\"}');\n  const response = await fetch(url);\n  if (!response.ok) throw new Error(\"Request failed: \" + response.status);\n  const schedule = await response.json();\n  return schedule.room;\n}\nreadRoom().then(console.log).catch(console.error);", result: "The console prints B12 after the response body has been parsed." },
      { title: "Handle a missing record", code: "async function readTitle(response) {\n  if (!response.ok) return \"Unavailable (\" + response.status + \")\";\n  const record = await response.json();\n  return record.title;\n}\nreadTitle(new Response(null, { status: 404 })).then(console.log);", result: "The output is “Unavailable (404)”. The missing response body is never parsed." },
    ],
    quizzes: [
      { question: "What does await fetch(url) give you?", options: ["A Response", "The parsed JSON object", "Only a status number"], answer: 0, explanation: "The Response holds the status, headers, and body." },
      { question: "Why check ok before parsing?", options: ["Every body is a promise rejection", "A 404 can still fulfill the fetch promise", "It converts HTML to JSON"], answer: 1, explanation: "HTTP error statuses are represented by responses." },
    ],
  },
  {
    id: "web-api", title: "JS Web API", level: "Intermediate",
    summary: "Use browser-provided objects to work with structured URLs and query parameters.",
    content: [
      "JavaScript defines language features such as functions and arrays. Browsers also provide interfaces for tasks such as reading a document or building a URL. An API describes the methods and properties you can use for that task.",
      "The URL constructor separates a URL into parts. Its searchParams object reads and updates individual query values, handling the encoding of spaces and punctuation for you. Run both examples in the browser console.",
    ],
    examples: [
      { title: "Read a search term", code: "const page = new URL(\"https://example.org/library?q=ink+pen&page=2\");\nconsole.log(page.pathname, page.searchParams.get(\"q\"));", result: "The path is /library and the decoded search term is “ink pen.”" },
      { title: "Build a query", code: "const query = new URLSearchParams();\nquery.set(\"room\", \"A & B\");\nquery.append(\"day\", \"Mon\");\nquery.append(\"day\", \"Fri\");\nconsole.log(query.toString());\nconsole.log(query.getAll(\"day\").join(\", \"));", result: "The query is room=A+%26+B&day=Mon&day=Fri. Reading all day values gives Mon, Fri." },
    ],
    quizzes: [
      { question: "Which interface lets you change one query parameter?", options: ["ArrayBuffer", "Date", "URLSearchParams"], answer: 2, explanation: "It represents the query as named values." },
      { question: "How do you retrieve both day values?", options: ["getAll(\"day\")", "get(\"day\")", "has(\"day\")"], answer: 0, explanation: "getAll returns every value stored under the name." },
    ],
  },
]);
