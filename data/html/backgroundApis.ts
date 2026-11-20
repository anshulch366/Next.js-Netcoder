import { chapter } from "../resource-chapter";

export const backgroundApis = chapter("Web APIs", [
  {
    id: "workers", title: "Web workers and background calculations", level: "Advanced",
    summary: "Move a calculation off the main thread and return its result.",
    content: ["Serve the files over localhost. Put the first snippet in index.html and the second in counts.js beside it. Reload and inspect the developer console. A dedicated worker runs in its own global environment and exchanges messages with its creator.",
      "The remaining examples are variations labelled by filename. When a variation changes the message format, update the receiving side too. Workers can calculate data, while DOM updates belong on the main thread."],
    examples: [
      { title: "Start a worker in index.html", code: "<output id=\"total\"></output>\n<script>\n  const worker = new Worker(\"./counts.js\");\n  worker.onmessage = event => {\n    document.querySelector(\"#total\").textContent = \"Total prints: \" + event.data;\n  };\n  worker.postMessage([3, 7, 4]);\n</script>", result: "With counts.js from the next example, the page displays Total prints: 14." },
      { title: "Calculate inside counts.js", code: "self.onmessage = event => {\n  const total = event.data.reduce((sum, count) => sum + count, 0);\n  self.postMessage(total);\n};", result: "The worker receives an array and posts the number 14 back." },
      { title: "Validate input inside counts.js", code: "self.onmessage = ({ data }) => {\n  if (!Array.isArray(data) || !data.every(Number.isFinite)) {\n    self.postMessage(\"Expected a list of numbers\");\n    return;\n  }\n  self.postMessage(data.reduce((sum, n) => sum + n, 0));\n};", result: "An input such as [2,\"7\"] produces a diagnostic instead of concatenating strings." },
      { title: "Observe a startup error in index.html", code: "<script>\n  const task = new Worker(\"./missing-worker.js\");\n  task.onerror = () => console.log(\"Worker failed to load or run\");\n</script>", result: "Serving a missing worker file causes an error event on the page's Worker object." },
      { title: "Transfer a buffer from index.html", code: "<script>\n  const task = new Worker(\"./counts.js\");\n  const values = new Uint8Array([3, 7, 4]);\n  task.postMessage(values, [values.buffer]);\n  console.log(values.byteLength);\n</script>", result: "The buffer moves to the worker. The original typed array reports zero bytes after transfer." },
      { title: "End a one-shot worker in index.html", code: "<script>\n  const task = new Worker(\"./counts.js\");\n  task.onmessage = ({ data }) => {\n    console.log(data);\n    task.terminate();\n  };\n  task.postMessage([4, 5]);\n</script>", result: "The page waits for the result before ending this one-use worker." },
    ],
    quizzes: [
      { question: "Which context can update the output element?", options: ["The dedicated worker directly","The main page","Either context using document"], answer: 1, explanation: "With counts.js from the next example, the page displays Total prints: 14." },
      { question: "How does the worker send the result?", options: ["return total from onmessage","document.write(total)","self.postMessage(total)"], answer: 2, explanation: "The worker receives an array and posts the number 14 back." },
      { question: "Which input will this worker reject?", options: ["[2, \"7\"]","[2, 7]","[]"], answer: 0, explanation: "An input such as [2,\"7\"] produces a diagnostic instead of concatenating strings." },
      { question: "Which handler reports an uncaught worker loading or runtime failure?", options: ["onmessage","onerror","onfocus"], answer: 1, explanation: "Serving a missing worker file causes an error event on the page's Worker object." },
      { question: "What happens to the sender's transferred ArrayBuffer?", options: ["It doubles in size","It becomes a DOM element","It becomes detached"], answer: 2, explanation: "The buffer moves to the worker. The original typed array reports zero bytes after transfer." },
      { question: "Why terminate in the message handler?", options: ["The result has already arrived","To start the worker","To clear localStorage"], answer: 0, explanation: "The page waits for the result before ending this one-use worker." },
    ],
  },
  {
    id: "streams", title: "Server-sent events and live updates", level: "Advanced",
    summary: "Display a studio notice from a one-way event stream.",
    content: ["Run the Node.js server below as server.mjs with node server.mjs. Save the client snippet as index.html beside it. Open http://localhost:8080 and watch the notice after a few seconds. The server and document share an origin.",
      "The last four examples vary that baseline. Stream fields are text lines and a blank line finishes a message. EventSource reconnects after interruptions unless explicitly closed."],
    examples: [
      { title: "Serve a local event feed", code: "// server.mjs\nimport http from \"node:http\";\nimport { readFileSync } from \"node:fs\";\nconst page = readFileSync(new URL(\"./index.html\", import.meta.url));\nhttp.createServer((req, res) => {\n  if (req.url !== \"/updates\") {\n    res.writeHead(200, { \"Content-Type\": \"text/html; charset=utf-8\" });\n    return res.end(page);\n  }\n  res.writeHead(200, { \"Content-Type\": \"text/event-stream\", \"Cache-Control\": \"no-cache\" });\n  res.write(\": connected\\n\\n\");\n  const timer = setInterval(() => res.write(\"data: Press available\\n\\n\"), 3000);\n  res.on(\"close\", () => clearInterval(timer));\n}).listen(8080, \"127.0.0.1\");", result: "The /updates route stays open and emits a notice roughly every three seconds." },
      { title: "Read a default event in index.html", code: "<p id=\"notice\" role=\"status\">Waiting for a notice…</p>\n<script>\n  const feed = new EventSource(\"/updates\");\n  feed.onmessage = ({ data }) => { document.querySelector(\"#notice\").textContent = data; };\n</script>", result: "After the first data event, the paragraph reads Press available." },
      { title: "Dispatch a named event", code: "// Replace the server's interval callback body:\nres.write(\"event: opening\\ndata: Room 2\\n\\n\");\n// Add inside the client script:\nfeed.addEventListener(\"opening\", e => console.log(e.data));", result: "The opening listener receives Room 2. Named events use their named listener." },
      { title: "Send structured data", code: "// In the server's timer:\nres.write(\"data: \" + JSON.stringify({ free: 3 }) + \"\\n\\n\");\n// In the client script:\nfeed.onmessage = e => console.log(JSON.parse(e.data).free);", result: "Parsing the event text yields the number 3." },
      { title: "Set a reconnect interval", code: "// Write this after the stream headers:\nres.write(\"retry: 5000\\n\\n\");", result: "The retry field advises a 5000-millisecond reconnect interval." },
      { title: "Stop listening", code: "<!-- Add after the client script. -->\n<button id=\"stop\">Stop updates</button>\n<script>\n  document.querySelector(\"#stop\").onclick = () => feed.close();\n</script>", result: "Closing the EventSource ends the connection and stops automatic reconnects." },
    ],
    quizzes: [
      { question: "Which content type identifies this stream?", options: ["application/json","text/event-stream","text/html"], answer: 1, explanation: "The /updates route stays open and emits a notice roughly every three seconds." },
      { question: "Which property carries the text payload?", options: ["event.id","event.origin alone","event.data"], answer: 2, explanation: "After the first data event, the paragraph reads Press available." },
      { question: "Which client listener receives an event named opening?", options: ["addEventListener(\"opening\", ...)","onopen only","onmessage only"], answer: 0, explanation: "The opening listener receives Room 2. Named events use their named listener." },
      { question: "Why is JSON.parse needed for this payload?", options: ["EventSource only accepts integers","Event data arrives as text","The response is a DOM node"], answer: 1, explanation: "Parsing the event text yields the number 3." },
      { question: "Which stream field sets the reconnection delay?", options: ["event","id","retry"], answer: 2, explanation: "The retry field advises a 5000-millisecond reconnect interval." },
      { question: "Which method intentionally stops future reconnects?", options: ["close()","removeEventListener alone","clearInterval on the client"], answer: 0, explanation: "Closing the EventSource ends the connection and stops automatic reconnects." },
    ],
  },
]);
