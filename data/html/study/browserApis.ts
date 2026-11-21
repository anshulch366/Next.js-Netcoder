import { chapter } from "../../resource-chapter";

export const browserApis = chapter("Web APIs", [
  {
    id: "study-browserapis-web-apis",
    title: "Web APIs",
    level: "Intermediate",
    summary: "JavaScript se browser ki ready-made capabilities use karo.",
    content: [
      "API ek defined interface hai. Browser DOM, storage aur location jaise features objects aur methods ke through deta hai. JavaScript language loop aur function deti hai, jabki document ke elements padhna DOM API ka kaam hai.",
      "Neeche browser console mein script ka result dekho. Pehle querySelector selector se element dhoondhta hai, phir textContent uska text padhta hai. Selector badalne par element na mile to result null ho sakta hai.",
    ],
    reading: { title: "W3Schools · Web APIs", url: "https://www.w3schools.com/html/html5_api_whatis.asp" },
    examples: [{
      title: "DOM se notice padho",
      code: "<p id=\"notice\">Room 3 taiyar hai.</p>\n<script>\n  const notice = document.querySelector(\"#notice\");\n  console.log(notice.textContent);\n</script>",
      result: "Console mein Room 3 taiyar hai. print hoga. Script paragraph ke baad hai, isliye query ke waqt node maujood hai.",
    }],
    quizzes: [
      { question: "Document tree ke liye kaunsi API hai?", options: ["Geolocation", "Storage", "DOM"], answer: 2, explanation: "DOM elements ko objects ki tarah access karne deta hai." },
      { question: "querySelector match na milne par kya deta hai?", options: ["null", "Empty paragraph", "Naya element"], answer: 0, explanation: "Query khud element create nahi karti." },
      { question: "Console mein kya aayega?", options: ["Poora HTTP response", "Paragraph ka text", "Screen width"], answer: 1, explanation: "textContent matched node ka text deta hai." },
    ],
  },
  {
    id: "study-browserapis-geolocation-api",
    title: "Geolocation API",
    level: "Intermediate",
    summary: "User ki permission ke saath device ki estimated position lo.",
    content: [
      "Nearby branch dikhane ke liye latitude aur longitude chahiye ho sakte hain. Browser secure context aur user permission ke saath estimate deta hai. Accuracy device aur environment par depend karti hai, isliye manual city selection bhi kaam aata hai.",
      "HTTPS ya localhost par button click se request chalao. Success callback coordinates padhta hai aur error callback permission deny ya location unavailable hone par alternative message deta hai. Page load par bina context ke prompt dikhane se bacho.",
    ],
    reading: { title: "W3Schools · Geolocation API", url: "https://www.w3schools.com/html/html5_geolocation.asp" },
    examples: [{
      title: "Click par location check",
      code: "<button id=\"loc\">Meri location dekho</button><p id=\"place\" role=\"status\"></p>\n<script>\n  const place = document.querySelector(\"#place\");\n  document.querySelector(\"#loc\").onclick = () => {\n    if (!navigator.geolocation) { place.textContent = \"Location available nahi hai.\"; return; }\n    navigator.geolocation.getCurrentPosition(\n      p => { place.textContent = [p.coords.latitude, p.coords.longitude].join(\", \"); },\n      () => { place.textContent = \"Location nahi mili. Apna shehar manually chuno.\"; }\n    );\n  };\n</script>",
      result: "Permission aur position milne par do coordinates dikhenge. Deny ya unavailable hone par error message aayega. Coordinates isi page par dikhaye jaate hain.",
    }],
    quizzes: [
      { question: "Latitude kis object se milta hai?", options: ["p.coords", "p.style", "document.head"], answer: 0, explanation: "Success result mein coords geographic values rakhta hai." },
      { question: "Permission deny ho to kaunsa callback chalega?", options: ["Success callback", "Error callback", "Button ka default submit"], answer: 1, explanation: "Failed request error handler ko report hoti hai." },
      { question: "Deployment ke liye kaunsa context chahiye?", options: ["Koi bhi insecure HTTP origin", "Sirf XML", "HTTPS"], answer: 2, explanation: "Browser geolocation ko secure contexts tak seemit rakhta hai." },
    ],
  },
  {
    id: "study-browserapis-drag-and-drop-api",
    title: "Drag and Drop API",
    level: "Intermediate",
    summary: "Drag source se drop target tak data le jao aur wahi action keyboard se bhi do.",
    content: [
      "Drag start par source dataTransfer mein payload rakhta hai. Target dragover par default handling cancel karke drop accept karta hai. Drop handler payload padhta hai aur application decide karti hai ki usse kya karna hai.",
      "Neeche label ko box par drag karo. Button se wahi assignment keyboard par test karo. Text ko textContent se dikhao taaki payload text hi rahe. Dono actions ke baad ek hi status update hona chahiye.",
    ],
    reading: { title: "W3Schools · Drag and Drop API", url: "https://www.w3schools.com/html/html5_draganddrop.asp" },
    examples: [{
      title: "Task ko Done mein bhejo",
      code: "<span draggable=\"true\" id=\"task\">Sketch</span>\n<p id=\"done\" role=\"status\">Done box</p>\n<button id=\"move\">Sketch ko Done mein rakho</button>\n<script>\n  const task = document.querySelector(\"#task\");\n  const done = document.querySelector(\"#done\");\n  const finish = text => { done.textContent = \"Done: \" + text; };\n  task.ondragstart = e => e.dataTransfer.setData(\"text/plain\", task.textContent);\n  done.ondragover = e => e.preventDefault();\n  done.ondrop = e => { e.preventDefault(); finish(e.dataTransfer.getData(\"text/plain\")); };\n  document.querySelector(\"#move\").onclick = () => finish(task.textContent);\n</script>",
      result: "Drag-drop ya button activate karne par Done: Sketch dikhega. Demo completion label update karta hai, source span apni jagah rehta hai.",
    }],
    quizzes: [
      { question: "Payload kab set hota hai?", options: ["dragover ke baad hamesha", "dragstart", "load"], answer: 1, explanation: "Source drag shuru hote waqt data transfer set karta hai." },
      { question: "dragover par preventDefault kyun hai?", options: ["Text bold karna", "Source remove karna", "Target ko drop accept karne dena"], answer: 2, explanation: "Default handling cancel karna drop eligibility signal karta hai." },
      { question: "Keyboard alternative kaunsa control hai?", options: ["Move button", "Draggable attribute akela", "Status paragraph"], answer: 0, explanation: "Native button se wahi action keyboard se milta hai." },
    ],
  },
  {
    id: "study-browserapis-popover-api",
    title: "Popover API",
    level: "Intermediate",
    summary: "Chhoti help ko button se top layer mein kholo aur dismiss karo.",
    content: [
      "Popover temporary non-modal content hai, jaise field ka help text. Default auto popover ko browser top layer mein dikhata hai aur light dismiss sambhalta hai. User baaki page ke saath interact kar sakta hai.",
      "Help element ko unique id aur popover attribute do. Button ke popovertarget mein wahi id do. Button dobara dabao, bahar click karo aur Escape se dismiss test karo. Is basic interaction ke liye custom click handler ki zaroorat nahi hai.",
    ],
    reading: { title: "W3Schools · Popover API", url: "https://www.w3schools.com/html/html5_popover.asp" },
    examples: [{
      title: "Seat code ka hint",
      code: "<button type=\"button\" popovertarget=\"seat-help\">Seat code kya hai?</button>\n<div popover id=\"seat-help\">Ticket par A12 jaisa code dekho.</div>",
      result: "Supporting browser mein button hint dikhata hai. Default auto popover bahar click ya Escape par band ho sakta hai.",
    }],
    quizzes: [
      { question: "popovertarget ki value kis se milni chahiye?", options: ["Button ka text", "CSS class", "Popover element ki id"], answer: 2, explanation: "Id invoker aur popover ko connect karti hai." },
      { question: "Default popover ko keyboard se kaise dismiss karoge?", options: ["Escape", "Shift akela", "Caps Lock"], answer: 0, explanation: "Open auto popover ko Escape dismiss karta hai." },
      { question: "Popover khulte hi kya hota hai?", options: ["Naya browser tab khulta hai", "Hint top layer mein aata hai", "Form submit zaroor hota hai"], answer: 1, explanation: "Browser existing element ko top layer mein show karta hai." },
    ],
  },
  {
    id: "study-browserapis-web-storage-api",
    title: "Web Storage API",
    level: "Intermediate",
    summary: "Chhoti preferences ko key-value strings ke roop mein browser mein rakho.",
    content: [
      "localStorage aam taur par same origin par browser sessions ke beech bachta hai. sessionStorage origin aur tab session se juda hota hai. Values strings hain, isliye objects ke liye JSON stringify aur parse chahiye. Storage user settings se unavailable bhi ho sakta hai.",
      "Ek hi origin par demo kholo. Button dabane ke baad page reload karo aur saved choice dekho. getItem missing key par null deta hai, isliye pehli visit ka fallback likho. Sirf preference jaisi gair-sensitive value rakho.",
    ],
    reading: { title: "W3Schools · Web Storage API", url: "https://www.w3schools.com/html/html5_webstorage.asp" },
    examples: [{
      title: "Lesson ki bhasha yaad rakho",
      code: "<button id=\"save\">Hindi chuno</button><p id=\"choice\"></p>\n<script>\n  const choice = document.querySelector(\"#choice\");\n  choice.textContent = localStorage.getItem(\"lesson-language\") ?? \"Abhi chuno\";\n  document.querySelector(\"#save\").onclick = () => {\n    localStorage.setItem(\"lesson-language\", \"Hindi\");\n    choice.textContent = \"Hindi\";\n  };\n</script>",
      result: "Storage enabled ho to pehli baar Abhi chuno aur button ke baad Hindi dikhega. Same origin par reload karne se Hindi phir milti hai.",
    }],
    quizzes: [
      { question: "Missing key ka return kya hai?", options: ["null", "false string", "Empty object"], answer: 0, explanation: "getItem missing entry ke liye null deta hai." },
      { question: "Tab session ke hisaab se alag storage kaunsa hai?", options: ["localStorage", "sessionStorage", "document.title"], answer: 1, explanation: "sessionStorage tab session ke scope mein hota hai." },
      { question: "Object ko save karne se pehle kya use karoge?", options: ["JSON.parse", "querySelector", "JSON.stringify"], answer: 2, explanation: "Stringify object ko storage ke liye string banata hai." },
    ],
  },
  {
    id: "study-browserapis-web-workers-api",
    title: "Web Workers API",
    level: "Advanced",
    summary: "CPU ka lamba calculation page ke main thread se alag chalao.",
    content: [
      "Main thread par heavy loop chale to button aur scrolling atak sakte hain. Dedicated Worker apne execution context mein calculate karta hai. Worker seedha page ka DOM edit nahi karta. Main thread aur worker messages se data bhejte hain.",
      "Ek hi folder mein index.html aur count.js rakho aur local HTTP server se kholo. Page worker ko number list bhejta hai. Worker total lautata hai, page result dikhata hai aur one-off kaam ke baad worker terminate karta hai.",
    ],
    reading: { title: "W3Schools · Web Workers API", url: "https://www.w3schools.com/html/html5_webworkers.asp" },
    examples: [{
      title: "index.html mein list bhejo",
      code: "<p id=\"total\">Ginti chal rahi hai</p>\n<script>\n  const worker = new Worker(\"count.js\");\n  worker.onmessage = event => {\n    document.querySelector(\"#total\").textContent = event.data;\n    worker.terminate();\n  };\n  worker.postMessage([4, 6, 3]);\n</script>",
      result: "Page worker ko teen numbers bhejta hai. Neeche wali count.js file saath mein save karne par page ko jawaab milega.",
    }, {
      title: "count.js mein total nikalo",
      code: "self.onmessage = event => {\n  self.postMessage(event.data.reduce((sum, n) => sum + n, 0));\n};",
      result: "Worker ko array milega aur woh 13 return karega. 13 page par main thread likhega. Chhoti list se message flow aasani se verify hota hai.",
    }],
    quizzes: [
      { question: "Worker ko array kaise milta hai?", options: ["DOM id se", "postMessage se", "CSS variable se"], answer: 1, explanation: "Message event ke data mein payload aata hai." },
      { question: "Paragraph ka text kaun badalta hai?", options: ["Worker seedha", "HTTP server", "Main thread"], answer: 2, explanation: "Dedicated worker ke paas page DOM nahi hota." },
      { question: "One-off worker khatam karne ka method kya hai?", options: ["terminate()", "reload()", "pause()"], answer: 0, explanation: "Worker object ka terminate execution rokta hai." },
    ],
  },
  {
    id: "study-browserapis-server-sent-events-api",
    title: "Server-Sent Events API",
    level: "Advanced",
    summary: "Ek khuli HTTP connection par server se naye updates receive karo.",
    content: [
      "Scoreboard jaise page par server kabhi bhi update bhej sakta hai. EventSource text/event-stream response sunta hai. Server har message ko data: line aur ek khaali line se poora karta hai. Browser default messages ko message event ke roop mein deta hai.",
      "Server par /updates ko streaming endpoint banao jo connection khula rakhe. Response ka Content-Type text/event-stream ho. Neeche sample message format aur uska client dekho. Connection ki zaroorat khatam ho to close karo.",
    ],
    reading: { title: "W3Schools · Server-Sent Events API", url: "https://www.w3schools.com/html/html5_serversentevents.asp" },
    examples: [{
      title: "Score ka live update",
      code: "<p id=\"score\">Update ka intezaar</p>\n<script>\n  const feed = new EventSource(\"/updates\");\n  feed.onmessage = e => { document.querySelector(\"#score\").textContent = e.data; };\n  window.addEventListener(\"pagehide\", () => feed.close());\n</script>",
      result: "Streaming endpoint sample message bheje to score Team A 12 ho jaayega. Sirf static HTML file kholne se live stream tayyar nahi hoti.",
    }, {
      title: "/updates ke response body mein ek event",
      code: "data: Team A 12\n\n",
      result: "Server jab data line ke baad khaali line bhejta hai, browser message event mein Team A 12 deta hai.",
    }],
    quizzes: [
      { question: "SSE mein update kis direction mein aata hai?", options: ["Dono taraf ek EventSource channel par", "CSS se server", "Server se client"], answer: 2, explanation: "EventSource server push receive karta hai." },
      { question: "Stream ka MIME type kya hai?", options: ["text/event-stream", "text/html", "application/pdf"], answer: 0, explanation: "EventSource SSE format wala response expect karta hai." },
      { question: "Ek event ki boundary kaise batate hain?", options: ["Semicolon se", "Khaali line se", "Closing p se"], answer: 1, explanation: "SSE parser blank line par accumulated event dispatch karta hai." },
    ],
  },
]);
