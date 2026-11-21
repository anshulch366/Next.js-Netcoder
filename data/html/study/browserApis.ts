import { chapter } from "../../resource-chapter";

export const browserApis = chapter("Web APIs", [
  {
    id: "study-browserapis-web-apis",
    title: "Web APIs",
    level: "Intermediate",
    summary: "Use the interfaces a browser exposes to JavaScript.",
    content: [
      "An API defines operations that a program can use. JavaScript supplies language features such as functions. Browser APIs supply capabilities such as reading a document, storing a preference or requesting a location.",
      "Use querySelector to find the notice and textContent to read it. Run the script after the paragraph exists. A selector without a match returns null, so check before reading a property when a match is uncertain.",
    ],
    reading: { title: "W3Schools · Web APIs", url: "https://www.w3schools.com/html/html5_api_whatis.asp" },
    examples: [{
      title: "Read a notice through the DOM",
      code: "<p id=\"notice\">Room 3 is ready.</p>\n<script>\n  const notice = document.querySelector(\"#notice\");\n  console.log(notice.textContent);\n</script>",
      result: "The console displays “Room 3 is ready.” The paragraph already exists when the script runs.",
    }],
    quizzes: [
      { question: "Which API represents document elements?", options: ["Geolocation", "Web Storage", "The DOM"], answer: 2, explanation: "The DOM exposes document nodes as objects." },
      { question: "What does querySelector return when no element matches?", options: ["null", "An empty paragraph", "A new element"], answer: 0, explanation: "A query searches existing elements." },
      { question: "What will the console display?", options: ["The complete HTTP response", "The paragraph's text", "The screen width"], answer: 1, explanation: "textContent reads the matched node's text." },
    ],
  },
  {
    id: "study-browserapis-geolocation-api",
    title: "Geolocation API",
    level: "Intermediate",
    summary: "Request an estimated device position after a deliberate user action.",
    content: [
      "A nearby-branch feature may need latitude and longitude. The browser requires a secure context and user permission. Accuracy varies, so provide a way to proceed when a position is unavailable.",
      "Test on HTTPS or localhost. Request a position after the button is activated. Handle success, denial and lack of browser support, and check each message in the status region.",
    ],
    reading: { title: "W3Schools · Geolocation API", url: "https://www.w3schools.com/html/html5_geolocation.asp" },
    examples: [{
      title: "Request a position from a button",
      code: "<button id=\"loc\">Show my location</button><p id=\"place\" role=\"status\"></p>\n<script>\n  const place = document.querySelector(\"#place\");\n  document.querySelector(\"#loc\").onclick = () => {\n    if (!navigator.geolocation) { place.textContent = \"Location is unavailable.\"; return; }\n    navigator.geolocation.getCurrentPosition(\n      p => { place.textContent = [p.coords.latitude, p.coords.longitude].join(\", \"); },\n      () => { place.textContent = \"Location could not be retrieved. Choose your city manually.\"; }\n    );\n  };\n</script>",
      result: "A successful request displays two coordinates. A denied or unsuccessful request displays a message. The example shows the result locally.",
    }],
    quizzes: [
      { question: "Where is latitude located?", options: ["p.coords", "p.style", "document.head"], answer: 0, explanation: "The success result exposes geographic values through coords." },
      { question: "Which callback handles denied permission?", options: ["The success callback", "The error callback", "The button's default action"], answer: 1, explanation: "The request reports a failure to the error handler." },
      { question: "Which context is appropriate for a public deployment?", options: ["Any insecure HTTP origin", "An XML document only", "HTTPS"], answer: 2, explanation: "Browser geolocation is restricted to secure contexts." },
    ],
  },
  {
    id: "study-browserapis-drag-and-drop-api",
    title: "Drag and Drop API",
    level: "Intermediate",
    summary: "Transfer a task label to a drop target and offer a keyboard equivalent.",
    content: [
      "At dragstart the source stores data in dataTransfer. Cancelling the target's dragover handling allows a drop. The drop handler reads the payload and decides how to use it.",
      "Drag Sketch onto the completion area. Then use the button with the keyboard. Both paths call the same function and write the result with textContent so the payload is displayed as text.",
    ],
    reading: { title: "W3Schools · Drag and Drop API", url: "https://www.w3schools.com/html/html5_draganddrop.asp" },
    examples: [{
      title: "Mark a task as complete",
      code: "<span draggable=\"true\" id=\"task\">Sketch</span>\n<p id=\"done\" role=\"status\">Done box</p>\n<button id=\"move\">Move Sketch to Done</button>\n<script>\n  const task = document.querySelector(\"#task\");\n  const done = document.querySelector(\"#done\");\n  const finish = text => { done.textContent = \"Done: \" + text; };\n  task.ondragstart = e => e.dataTransfer.setData(\"text/plain\", task.textContent);\n  done.ondragover = e => e.preventDefault();\n  done.ondrop = e => { e.preventDefault(); finish(e.dataTransfer.getData(\"text/plain\")); };\n  document.querySelector(\"#move\").onclick = () => finish(task.textContent);\n</script>",
      result: "Dropping the label or activating the button displays “Done: Sketch”. The example updates the status and leaves the source label in place.",
    }],
    quizzes: [
      { question: "When does the source set the payload?", options: ["After every dragover", "dragstart", "Page load"], answer: 1, explanation: "The source sets transfer data when the drag begins." },
      { question: "Why cancel dragover on the target?", options: ["To make the label bold", "To remove the source", "To allow a drop"], answer: 2, explanation: "Cancelling the default action signals that the target accepts a drop." },
      { question: "Which control provides the keyboard alternative?", options: ["The Move button", "The draggable attribute alone", "The status paragraph"], answer: 0, explanation: "A native button provides a keyboard-operable route to the same action." },
    ],
  },
  {
    id: "study-browserapis-popover-api",
    title: "Popover API",
    level: "Intermediate",
    summary: "Reveal a short help message without blocking the rest of the page.",
    content: [
      "A popover suits temporary, nonmodal information such as a field hint. An automatic popover appears in the top layer and supports dismissal by clicking outside it or pressing Escape.",
      "Give the hint a unique id and the popover attribute. Reference its id from the button's popovertarget. Test opening, toggling and dismissal without adding a click handler.",
    ],
    reading: { title: "W3Schools · Popover API", url: "https://www.w3schools.com/html/html5_popover.asp" },
    examples: [{
      title: "Explain a seat code",
      code: "<button type=\"button\" popovertarget=\"seat-help\">What is a seat code?</button>\n<div popover id=\"seat-help\">Look for a code such as A12 on your ticket.</div>",
      result: "In a supporting browser, activating the button opens the hint. Escape or an outside click dismisses the automatic popover.",
    }],
    quizzes: [
      { question: "What must popovertarget match?", options: ["The button text", "A CSS class", "The popover's id"], answer: 2, explanation: "The id connects the trigger to its target." },
      { question: "Which key dismisses this automatic popover?", options: ["Escape", "Shift alone", "Caps Lock"], answer: 0, explanation: "Escape requests dismissal of the open popover." },
      { question: "Where does the hint appear?", options: ["In a new tab", "In the top layer", "In a form submission"], answer: 1, explanation: "The browser shows the existing popover element in the top layer." },
    ],
  },
  {
    id: "study-browserapis-web-storage-api",
    title: "Web Storage API",
    level: "Intermediate",
    summary: "Store a small preference as a string in the browser.",
    content: [
      "Local storage normally survives browser sessions for the same origin. Session storage is also scoped to a tab session. Both store strings, so objects need explicit serialization. Browser settings can prevent storage access.",
      "Run the example on one origin with storage enabled. Choose English and reload. The fallback text covers a first visit, when getItem returns null. Use this pattern for non-sensitive preferences.",
    ],
    reading: { title: "W3Schools · Web Storage API", url: "https://www.w3schools.com/html/html5_webstorage.asp" },
    examples: [{
      title: "Remember a language preference",
      code: "<button id=\"save\">Choose English</button><p id=\"choice\"></p>\n<script>\n  const choice = document.querySelector(\"#choice\");\n  choice.textContent = localStorage.getItem(\"lesson-language\") ?? \"Choose a language\";\n  document.querySelector(\"#save\").onclick = () => {\n    localStorage.setItem(\"lesson-language\", \"English\");\n    choice.textContent = \"English\";\n  };\n</script>",
      result: "The first visit displays “Choose a language”. After the button is activated, reloading on the same origin displays English.",
    }],
    quizzes: [
      { question: "What does getItem return for a missing key?", options: ["null", "The string false", "An empty object"], answer: 0, explanation: "A missing storage entry produces null." },
      { question: "Which store is scoped to a tab session?", options: ["localStorage", "sessionStorage", "document.title"], answer: 1, explanation: "Session storage is partitioned by origin and tab session." },
      { question: "How can you serialize an object for storage?", options: ["JSON.parse", "querySelector", "JSON.stringify"], answer: 2, explanation: "Stringify produces a string that can be stored." },
    ],
  },
  {
    id: "study-browserapis-web-workers-api",
    title: "Web Workers API",
    level: "Advanced",
    summary: "Move a calculation off the page's main thread.",
    content: [
      "A long calculation on the main thread can delay input and rendering. A dedicated worker runs in a separate execution context. It exchanges messages with the page and cannot directly update the page's DOM.",
      "Save index.html and count.js in the same directory and serve them over local HTTP. The page sends a list, displays the reply and terminates the worker after this one-off calculation.",
    ],
    reading: { title: "W3Schools · Web Workers API", url: "https://www.w3schools.com/html/html5_webworkers.asp" },
    examples: [{
      title: "Send a list from index.html",
      code: "<p id=\"total\">Calculating the total</p>\n<script>\n  const worker = new Worker(\"count.js\");\n  worker.onmessage = event => {\n    document.querySelector(\"#total\").textContent = event.data;\n    worker.terminate();\n  };\n  worker.postMessage([4, 6, 3]);\n</script>",
      result: "The page sends three numbers to the worker. The following count.js file supplies the calculation and reply.",
    }, {
      title: "Calculate the total in count.js",
      code: "self.onmessage = event => {\n  self.postMessage(event.data.reduce((sum, n) => sum + n, 0));\n};",
      result: "The worker adds 4, 6 and 3 and returns 13. The main thread displays the result.",
    }],
    quizzes: [
      { question: "How does the list reach the worker?", options: ["A DOM id", "postMessage", "A CSS variable"], answer: 1, explanation: "The message event carries its payload in data." },
      { question: "Which context updates the paragraph?", options: ["The worker directly", "The HTTP server", "The main thread"], answer: 2, explanation: "The main thread has access to the page's DOM." },
      { question: "Which method stops this one-off worker?", options: ["terminate()", "reload()", "pause()"], answer: 0, explanation: "Calling terminate on the worker object ends its execution." },
    ],
  },
  {
    id: "study-browserapis-server-sent-events-api",
    title: "Server-Sent Events API",
    level: "Advanced",
    summary: "Receive updates over a long-lived HTTP response.",
    content: [
      "A scoreboard may need new values whenever the server has them. EventSource listens for a text/event-stream response. A data line followed by a blank line completes an ordinary message.",
      "Provide a streaming /updates endpoint with the correct content type. Use the first example on the page and send the second example as the response body. Close the connection when it is no longer needed.",
    ],
    reading: { title: "W3Schools · Server-Sent Events API", url: "https://www.w3schools.com/html/html5_serversentevents.asp" },
    examples: [{
      title: "Receive a score update",
      code: "<p id=\"score\">Waiting for an update</p>\n<script>\n  const feed = new EventSource(\"/updates\");\n  feed.onmessage = e => { document.querySelector(\"#score\").textContent = e.data; };\n  window.addEventListener(\"pagehide\", () => feed.close());\n</script>",
      result: "When the endpoint sends the sample event, the score changes to “Team A 12”. A static HTML file alone cannot produce the stream.",
    }, {
      title: "A message in the /updates response body",
      code: "data: Team A 12\n\n",
      result: "The blank line after the data line completes the message. The browser delivers Team A 12 as the event data.",
    }],
    quizzes: [
      { question: "Which direction does an EventSource message travel?", options: ["Both directions on the same channel", "Stylesheet to server", "Server to client"], answer: 2, explanation: "EventSource receives updates pushed by a server." },
      { question: "Which MIME type identifies the stream?", options: ["text/event-stream", "text/html", "application/pdf"], answer: 0, explanation: "EventSource expects a response in the SSE format." },
      { question: "What marks the end of an event?", options: ["A semicolon", "A blank line", "A closing paragraph tag"], answer: 1, explanation: "A blank line causes the accumulated event data to be dispatched." },
    ],
  },
]);
