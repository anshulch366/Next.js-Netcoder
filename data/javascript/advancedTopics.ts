import { chapter } from "../resource-chapter";

export const advancedTopics = chapter("JS Advanced", [
  {
    id: "temporal", title: "JS Temporal", level: "Advanced",
    summary: "Choose a calendar date or an exact instant before doing time arithmetic.",
    content: [
      "A Temporal.PlainDate represents a calendar date without a clock time or time zone. Use it for a library due date. Temporal.Instant represents a point on the timeline and suits a timestamp shared across time zones.",
      "Run these examples in a runtime that exposes Temporal. Both check for support first. Temporal values are immutable, so keep the value returned by add. Compare the original date with the result across a month boundary.",
    ],
    examples: [
      { title: "Advance a due date", code: "if (typeof Temporal === \"undefined\") {\n  console.log(\"Temporal support required\");\n} else {\n  const due = Temporal.PlainDate.from(\"2024-02-28\");\n  const renewed = due.add({ days: 2 });\n  console.log(due.toString(), renewed.toString());\n}", result: "With Temporal, the two dates are 2024-02-28 and 2024-03-01. The calculation crosses leap day." },
      { title: "Compare two timestamps", code: "if (typeof Temporal === \"undefined\") {\n  console.log(\"Temporal support required\");\n} else {\n  const first = Temporal.Instant.from(\"2026-06-01T12:00:00Z\");\n  const second = Temporal.Instant.from(\"2026-06-01T14:00:00+02:00\");\n  console.log(first.equals(second));\n}", result: "With Temporal, the result is true. Both timestamps describe the same instant." },
    ],
    quizzes: [
      { question: "Which type fits a birthday recorded without a time or zone?", options: ["Temporal.Instant", "Temporal.PlainDate", "Temporal.Duration"], answer: 1, explanation: "A PlainDate holds the calendar year, month, and day." },
      { question: "What happens to due when add returns?", options: ["It changes to March 1", "It becomes a timestamp", "It remains February 28"], answer: 2, explanation: "Temporal operations return new values." },
    ],
  },
  {
    id: "advanced-functions", title: "JS Functions", level: "Advanced",
    summary: "Let a function remember a value or supply behavior to another function.",
    content: [
      "A closure lets a returned function keep access to bindings from the call that created it. Two calls to a factory can give you two functions with separate state.",
      "A higher-order function accepts a function or returns one. Pass a calculation into map to reuse it across an array. Predict which values are shared across calls in the first example and passed explicitly in the second.",
    ],
    examples: [
      { title: "Give each desk a ticket counter", code: "function makeCounter() {\n  let ticket = 0;\n  return () => ++ticket;\n}\nconst front = makeCounter();\nconst side = makeCounter();\nconsole.log(front(), front(), side());", result: "The output is 1, 2, 1. Each desk closes over its own ticket binding." },
      { title: "Build a reusable conversion", code: "function multiplyBy(factor) {\n  return value => value * factor;\n}\nconst toMinutes = multiplyBy(60);\nconsole.log([1, 2, 3].map(toMinutes).join(\", \"));", result: "The conversion remembers 60 and produces 60, 120, 180." },
    ],
    quizzes: [
      { question: "What does the next call to side() return?", options: ["1", "2", "3"], answer: 1, explanation: "Only one previous call updated the side counter." },
      { question: "Where does toMinutes get its factor?", options: ["From its enclosing call to multiplyBy", "From the array index", "From a global variable named value"], answer: 0, explanation: "The returned arrow function closes over the factor parameter." },
    ],
  },
  {
    id: "advanced-objects", title: "JS Objects", level: "Advanced",
    summary: "Trace property lookup through a prototype and control how a property behaves.",
    content: [
      "An object can delegate a lookup to its prototype. An own property with the same name takes priority. Object.hasOwn checks the object itself, while the in operator also sees inherited properties.",
      "Property descriptors control features such as enumerability. A getter computes a property on each read. Compare the inherited opening time with the calculated label below.",
    ],
    examples: [
      { title: "Override an inherited setting", code: "const defaults = { opens: 9 };\nconst studio = Object.create(defaults);\nconsole.log(studio.opens, Object.hasOwn(studio, \"opens\"));\nstudio.opens = 10;\nconsole.log(studio.opens, defaults.opens);", result: "The first line prints 9 and false. After the assignment, the studio reads 10 while the prototype still reads 9." },
      { title: "Compute a label on access", code: "const seat = { row: \"B\", number: 4 };\nObject.defineProperty(seat, \"label\", {\n  get() { return this.row + this.number; }\n});\nseat.number = 5;\nconsole.log(seat.label, Object.keys(seat).join(\", \"));", result: "The label reads B5. Object.keys lists row and number because the new descriptor is non-enumerable by default." },
    ],
    quizzes: [
      { question: "Before the assignment, where is opens found?", options: ["On the prototype", "On the studio itself", "On the console"], answer: 0, explanation: "Object.create sets defaults as the prototype of studio." },
      { question: "Why does label read B5 after the edit?", options: ["The string was stored twice", "The getter runs when the property is read", "Object.keys updates the label"], answer: 1, explanation: "The getter reads the current row and number." },
    ],
  },
  {
    id: "classes", title: "JS Classes", level: "Advanced",
    summary: "Define a common interface while keeping state separate for each instance.",
    content: [
      "Calling new runs the constructor for a fresh instance. Methods declared in the class body are shared through the prototype. A private field beginning with # can be read or updated by code in the declaring class.",
      "An extending class can reuse a base method with super and add a narrower behavior of its own. In the second example, trace the label through the base method and then through the override.",
    ],
    examples: [
      { title: "Track loans per shelf", code: "class Shelf {\n  #loans = 0;\n  borrow() { this.#loans += 1; }\n  get loans() { return this.#loans; }\n}\nconst art = new Shelf();\nconst maps = new Shelf();\nart.borrow();\nconsole.log(art.loans, maps.loans);", result: "The two counts are 1 and 0. Each instance owns its private field." },
      { title: "Extend a base label", code: "class Pass {\n  label() { return \"Entry\"; }\n}\nclass GuestPass extends Pass {\n  label() { return super.label() + \" for guest\"; }\n}\nconsole.log(new GuestPass().label());", result: "The override builds on the base method and returns “Entry for guest.”" },
    ],
    quizzes: [
      { question: "Which expression reads the public loan count?", options: ["art.#loans from outside the class", "Shelf.borrow()", "art.loans"], answer: 2, explanation: "The getter exposes the count while the field stays private." },
      { question: "What does super.label() call here?", options: ["The base class method", "The constructor again", "The override recursively"], answer: 0, explanation: "super looks up label on the base prototype." },
    ],
  },
  {
    id: "modules", title: "JS Modules", level: "Advanced",
    summary: "Split code across files with explicit exports and imports.",
    content: [
      "Each ES module has its own top-level scope. An export makes a binding available to another module. A named import uses the exported name, while a default import can choose its own local name.",
      "Save the two examples as separate files in the same folder. Run node report.mjs there, or load report.mjs from a local web server with a script element of type module. The relative path identifies the dependency.",
    ],
    examples: [
      { title: "Export a named function and a default value", code: "// pricing.mjs\nexport function subtotal(quantity, unitPrice) {\n  return quantity * unitPrice;\n}\nexport default \"GBP\";", result: "This module exposes subtotal and a default currency code. Running it alone prints nothing." },
      { title: "Import both values into a report", code: "// report.mjs\nimport currency, { subtotal } from \"./pricing.mjs\";\nconsole.log(currency, subtotal(3, 8));", result: "Running report.mjs prints GBP and 24." },
    ],
    quizzes: [
      { question: "Which binding must match a named export in this import?", options: ["currency", "subtotal", "console"], answer: 1, explanation: "The name within braces identifies the exported binding unless explicitly aliased." },
      { question: "What does ./pricing.mjs resolve against?", options: ["The user’s home folder", "The website title", "The importing module’s location"], answer: 2, explanation: "A relative module specifier is resolved from the importing file." },
    ],
  },
  {
    id: "meta-proxy", title: "JS Meta & Proxy", level: "Advanced",
    summary: "Intercept an object operation and forward the underlying behavior with Reflect.",
    content: [
      "A Proxy wraps a target with traps such as get and set. Code using the proxy triggers its traps. Direct access to the target bypasses them. Reflect provides standard operations you can call inside a trap.",
      "Forward reads using Reflect.get with the supplied receiver. For writes, validate the new value and return the boolean result from Reflect.set. Calling Reflect.set on the proxy lets you inspect a rejected write as false.",
    ],
    examples: [
      { title: "Supply a display default", code: "const labels = new Proxy({ open: \"Available\" }, {\n  get(target, key, receiver) {\n    return Reflect.get(target, key, receiver) ?? \"Unknown\";\n  }\n});\nconsole.log(labels.open, labels.closed);", result: "The known label is Available. The missing one falls back to Unknown." },
      { title: "Validate a quantity", code: "const stock = new Proxy({ count: 3 }, {\n  set(target, key, value, receiver) {\n    if (key === \"count\" && (!Number.isInteger(value) || value < 0)) return false;\n    return Reflect.set(target, key, value, receiver);\n  }\n});\nconsole.log(Reflect.set(stock, \"count\", -1), stock.count);", result: "The attempted write returns false and the count remains 3." },
    ],
    quizzes: [
      { question: "Which trap handles labels.closed?", options: ["set", "get", "apply"], answer: 1, explanation: "Reading a property invokes the get trap." },
      { question: "What happens if Reflect.set writes 0 to count?", options: ["The write succeeds", "The value stays 3", "The get trap rejects it"], answer: 0, explanation: "Zero passes both the integer and nonnegative checks." },
    ],
  },
  {
    id: "typed-arrays", title: "JS Typed Arrays", level: "Advanced",
    summary: "Read numeric data through fixed-width views of a binary buffer.",
    content: [
      "An ArrayBuffer stores bytes. A typed array interprets those bytes as values of one numeric type. Uint8Array uses one unsigned byte per element, while Uint16Array uses two.",
      "A subarray shares its backing storage. Use slice when you need independent values. For a multi-byte file format, DataView lets you specify the byte order explicitly.",
    ],
    examples: [
      { title: "Share a row of pixel data", code: "const pixels = new Uint8Array([10, 20, 30, 40]);\nconst middle = pixels.subarray(1, 3);\nmiddle[0] = 99;\nconsole.log(pixels.join(\", \"));", result: "The original now reads 10, 99, 30, 40 because the two views share storage." },
      { title: "Read an unsigned 16-bit field", code: "const bytes = new Uint8Array([1, 2]);\nconst view = new DataView(bytes.buffer);\nconsole.log(view.getUint16(0, false), view.getUint16(0, true));", result: "Big-endian reads 258 (1 × 256 + 2). Little-endian reads 513 (2 × 256 + 1)." },
    ],
    quizzes: [
      { question: "Which operation shares storage with pixels?", options: ["pixels.slice(1, 3)", "pixels.subarray(1, 3)", "Array.from(pixels)"], answer: 1, explanation: "A subarray is a view into the same buffer." },
      { question: "How many bytes does each Uint16Array element occupy?", options: ["1", "16", "2"], answer: 2, explanation: "Sixteen bits occupy two eight-bit bytes." },
    ],
  },
  {
    id: "dom-navigation", title: "JS DOM Navigation", level: "Advanced",
    summary: "Navigate between related elements while accounting for text nodes.",
    content: [
      "The DOM contains several node types. Whitespace between tags can form a text node. Use children or firstElementChild when you specifically want elements. childNodes includes text and comment nodes as well.",
      "From one element, parentElement moves up the tree and nextElementSibling moves across it. Try both HTML examples and inspect which node each step returns.",
    ],
    examples: [
      { title: "Skip the whitespace before a list item", code: "<ul id=\"queue\">\n  <li>Ari</li>\n  <li>Sam</li>\n</ul>\n<script>\n  const list = document.querySelector(\"#queue\");\n  console.log(list.firstChild.nodeName, list.firstElementChild.textContent);\n</script>", result: "The newline creates a #text first child. The first element child contains Ari." },
      { title: "Move from one stop to the next", code: "<ol><li id=\"here\">Hall</li><li>Garden</li></ol>\n<script>\n  const here = document.querySelector(\"#here\");\n  console.log(here.parentElement.tagName, here.nextElementSibling.textContent);\n</script>", result: "The console shows OL and Garden." },
    ],
    quizzes: [
      { question: "Which collection contains only element children?", options: ["children", "childNodes", "firstChild"], answer: 0, explanation: "The children collection excludes text and comment nodes." },
      { question: "What is nextElementSibling on the last list item?", options: ["The list itself", "The first item", "null"], answer: 2, explanation: "There is no following element sibling." },
    ],
  },
  {
    id: "graphics", title: "JS Graphics", level: "Advanced",
    summary: "Draw shapes with canvas and update individual shapes in SVG.",
    content: [
      "A canvas has a drawing surface with its origin in the upper-left corner. The x coordinate increases to the right and y increases downward. Set width and height attributes to define the drawing area.",
      "SVG keeps shapes as document elements. You can select a circle and change its radius later. Save each example as HTML and compare what appears in the DOM inspector after drawing.",
    ],
    examples: [
      { title: "Draw two bars on a canvas", code: "<canvas id=\"chart\" width=\"160\" height=\"80\" aria-label=\"Counts: 3 and 5\" role=\"img\"></canvas>\n<script>\n  const ctx = document.querySelector(\"#chart\").getContext(\"2d\");\n  ctx.fillStyle = \"teal\";\n  ctx.fillRect(15, 40, 30, 30);\n  ctx.fillRect(60, 20, 30, 50);\n</script>", result: "Two teal bars share a baseline at y = 70. The second bar is 20 pixels taller." },
      { title: "Resize an SVG circle", code: "<svg viewBox=\"0 0 100 60\" width=\"100\" height=\"60\" role=\"img\" aria-label=\"Gold marker\">\n  <circle id=\"marker\" cx=\"50\" cy=\"30\" r=\"5\" fill=\"gold\"/>\n</svg>\n<script>\n  document.querySelector(\"#marker\").setAttribute(\"r\", \"20\");\n</script>", result: "The gold circle has a radius of 20 and keeps its center at (50, 30)." },
    ],
    quizzes: [
      { question: "What does the fourth argument to fillRect specify?", options: ["The color", "The height", "The bottom coordinate"], answer: 1, explanation: "The arguments give x, y, width, and height." },
      { question: "Which shape can you select directly by ID after drawing?", options: ["Either canvas bar", "The canvas drawing command", "The SVG circle"], answer: 2, explanation: "The circle is a document element with its own attributes." },
    ],
  },
]);
