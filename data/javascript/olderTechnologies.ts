import { chapter } from "../resource-chapter";

export const olderTechnologies = chapter("Old Technologies", [
  {
    id: "ajax", title: "JS AJAX", level: "Intermediate",
    summary: "Recognize how an older page loads data with XMLHttpRequest.",
    content: [
      "AJAX describes updating part of a page with data requested in the background. Older code often uses XMLHttpRequest (XHR). Create a request, configure it with open, attach listeners, and send it. The response can be text or JSON.",
      "Run each snippet in a browser console. The data URLs provide local practice payloads. For an HTTP endpoint, check the status in the load handler and handle network errors separately.",
    ],
    examples: [
      { title: "Read a text response", code: "const request = new XMLHttpRequest();\nrequest.open(\"GET\", \"data:text/plain,Gallery%20open\");\nrequest.addEventListener(\"load\", () => console.log(request.responseText));\nrequest.send();", result: "The console displays “Gallery open” when the response loads." },
      { title: "Request a parsed object", code: "const request = new XMLHttpRequest();\nconst data = encodeURIComponent('{\"seats\":6}');\nrequest.open(\"GET\", \"data:application/json,\" + data);\nrequest.responseType = \"json\";\nrequest.addEventListener(\"load\", () => console.log(request.response.seats));\nrequest.send();", result: "The browser parses the JSON body and the console prints 6." },
    ],
    quizzes: [
      { question: "Which method starts the configured request?", options: ["open", "send", "addEventListener"], answer: 1, explanation: "Calling send initiates the request." },
      { question: "With responseType set to json, where is the parsed value?", options: ["request.response", "request.statusText", "request.readyState"], answer: 0, explanation: "The response property holds the deserialized value." },
    ],
  },
  {
    id: "jquery", title: "JS jQuery", level: "Intermediate",
    summary: "Read jQuery selectors and event handlers in existing pages.",
    content: [
      "jQuery is a library that wraps a collection of matched elements. A selector such as .note can match multiple nodes, and a method call can operate on the whole collection. Load jQuery before any script that uses $.",
      "Save each example as HTML and open it with network access so the browser can load jQuery. Compare .text() with assigning textContent on a DOM element, and .on() with the native addEventListener method.",
    ],
    examples: [
      { title: "Update every matching note", code: "<p class=\"note\">A</p><p class=\"note\">B</p>\n<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\n<script>\n  $(\".note\").text(\"Ready\");\n</script>", result: "Both paragraphs display Ready after the library and script load." },
      { title: "Listen for an activation", code: "<button id=\"join\">Join</button><output id=\"status\"></output>\n<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\n<script>\n  $(\"#join\").on(\"click\", () => $(\"#status\").text(\"Joined\"));\n</script>", result: "Activating Join changes the output to Joined." },
    ],
    quizzes: [
      { question: "How many paragraphs does $(\".note\") match in the first example?", options: ["One", "None", "Two"], answer: 2, explanation: "Both paragraphs have the note class." },
      { question: "Why is the library script first?", options: ["It defines $ for the following script", "It creates the button", "It turns HTML into JSON"], answer: 0, explanation: "The inline script calls a function provided by jQuery." },
    ],
  },
  {
    id: "jsonp", title: "JS JSONP", level: "Intermediate",
    summary: "Recognize a JSONP response as a script that calls a named function.",
    content: [
      "Some older services returned data wrapped in a JavaScript function call. A page defined a callback first and then loaded the response with a script element. That script ran in the page, so the endpoint had to be trusted.",
      "Reproduce the format with two files in the same folder. Save the first example as index.html and the second as schedule.js. Open index.html. For a modern cross-origin data service, fetch and a server-configured CORS policy allow the response to be handled as data.",
    ],
    examples: [
      { title: "Prepare the page callback", code: "<!-- index.html -->\n<p id=\"room\">Waiting for schedule</p>\n<script>\n  function showSchedule(record) {\n    document.querySelector(\"#room\").textContent = record.room;\n  }\n</script>\n<script src=\"./schedule.js\"></script>", result: "The paragraph starts with a waiting message. The callback is defined before the response script runs." },
      { title: "Supply a fixed local response", code: "// schedule.js\nshowSchedule({ \"room\": \"Archive\" });", result: "Opening index.html displays Archive. The local script calls the page’s function with the record." },
    ],
    quizzes: [
      { question: "What distinguishes the JSONP file from plain JSON?", options: ["It has a room field", "It includes a function call", "It uses quotes"], answer: 1, explanation: "A JSONP response is executable script containing a callback invocation." },
      { question: "Why define showSchedule before loading schedule.js?", options: ["So the callback exists when invoked", "To convert the filename", "To create a network policy"], answer: 0, explanation: "The response script calls the function as soon as it runs." },
    ],
  },
]);
