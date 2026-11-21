import { chapter } from "../resource-chapter";

export const firstSteps = chapter("JS Tutorial", [
  {
    id: "home", title: "JS Home", level: "Beginner",
    summary: "Run your first JavaScript statement and use its result on a page.",
    content: [
      "Open the Console in your browser’s developer tools. Enter the first example one line at a time. JavaScript evaluates the expression inside the parentheses before console.log displays its value.",
      "For the second example, save the HTML as welcome.html and open it. The browser creates the paragraph first. The script then finds that paragraph and changes the text you see.",
    ],
    examples: [
      { title: "Calculate available seats", code: "const capacity = 12;\nconst booked = 5;\nconsole.log(capacity - booked);", result: "The console prints 7. Change booked to 8 in a fresh run and it prints 4." },
      { title: "Write a welcome message", code: "<p id=\"welcome\">Opening the studio…</p>\n<script>\n  document.querySelector(\"#welcome\").textContent = \"The studio is open.\";\n</script>", result: "The paragraph reads “The studio is open.”" },
    ],
    quizzes: [
      { question: "What does the console show for 12 seats and 5 bookings?", options: ["12", "7", "17"], answer: 1, explanation: "Subtracting the bookings from capacity leaves seven seats." },
      { question: "Which part makes the welcome message visible on the page?", options: ["Assigning textContent", "Calling console.log", "Declaring capacity"], answer: 0, explanation: "Setting the paragraph’s textContent updates its displayed text." },
    ],
  },
  {
    id: "where-to", title: "JS Where To", level: "Beginner",
    summary: "Place a script where the elements it uses are available.",
    content: [
      "An inline classic script runs when the HTML parser reaches it. Placing it after a heading allows it to find that heading immediately.",
      "For a reusable file, put the JavaScript in label.js beside index.html and reference it from the head with defer. The browser downloads the file while parsing and runs it after parsing finishes.",
    ],
    examples: [
      { title: "Place a script after its target", code: "<h1 id=\"title\">Journal</h1>\n<script>\n  document.querySelector(\"#title\").textContent += \" • Spring\";\n</script>", result: "The heading becomes “Journal • Spring.”" },
      { title: "Defer an external script", code: "<!-- index.html -->\n<!doctype html>\n<html lang=\"en\">\n<head><title>Journal</title><script defer src=\"label.js\"></script></head>\n<body><p id=\"edition\">Draft</p></body>\n</html>\n\n// label.js (save as a separate file)\ndocument.querySelector(\"#edition\").textContent = \"First edition\";", result: "After the two files are saved and index.html is loaded, the paragraph reads “First edition.”" },
    ],
    quizzes: [
      { question: "Why can the inline script find the heading?", options: ["The heading has already been parsed", "IDs create script files", "Every script runs after load"], answer: 0, explanation: "The heading occurs earlier in the HTML." },
      { question: "What does defer do for this external classic script?", options: ["Repeats it after every click", "Delays the download until a click", "Waits until parsing finishes before execution"], answer: 2, explanation: "The browser can fetch the file during parsing and execute it afterward." },
    ],
  },
  {
    id: "output", title: "JS Output", level: "Beginner",
    summary: "Choose a destination for the result of a calculation.",
    content: [
      "Use console.log to inspect a value while developing. The message appears in the developer console. A learner using the page needs a visible place for the same value.",
      "Save the second example as an HTML file. The output element gives the result a place in the document. Assigning textContent displays the calculated value as plain text.",
    ],
    examples: [
      { title: "Inspect a subtotal", code: "const subtotal = 3 * 12;\nconsole.log(\"Subtotal\", subtotal);", result: "The console displays Subtotal followed by 36." },
      { title: "Display the subtotal", code: "<p>Subtotal: <output id=\"total\"></output></p>\n<script>\n  document.querySelector(\"#total\").textContent = String(3 * 12);\n</script>", result: "The page reads “Subtotal: 36.”" },
    ],
    quizzes: [
      { question: "Where does console.log send the subtotal?", options: ["Into the page title", "Into the developer console", "Into a file"], answer: 1, explanation: "Console output is visible in the developer tools." },
      { question: "What appears in the output element if the quantity becomes 4?", options: ["12", "36", "48"], answer: 2, explanation: "Four items at 12 each give a subtotal of 48." },
    ],
  },
  {
    id: "syntax", title: "JS Syntax", level: "Beginner",
    summary: "Read a declaration, an expression, and a block as separate parts of a program.",
    content: [
      "A declaration gives a value a name. An expression computes a value from literals, identifiers, or operators. JavaScript distinguishes uppercase and lowercase letters when resolving identifiers.",
      "Braces group statements into a block. Follow the first example from the declared price to the calculated bill, then change the number of tickets. In the second, the comparison decides whether the block runs.",
    ],
    examples: [
      { title: "Name a calculated value", code: "const ticketPrice = 8;\nconst bill = ticketPrice * 3;\nconsole.log(bill);", result: "The multiplication gives 24, which is stored in bill and printed." },
      { title: "Group a conditional action", code: "const seatsLeft = 2;\nif (seatsLeft > 0) {\n  console.log(\"Booking open\");\n}", result: "The message appears because 2 is greater than zero." },
    ],
    quizzes: [
      { question: "Which expression calculates the bill?", options: ["const", "ticketPrice * 3", "console"], answer: 1, explanation: "The multiplication produces the value assigned to bill." },
      { question: "What happens with seatsLeft set to 0?", options: ["The block is skipped", "The block runs twice", "The comparison changes the value"], answer: 0, explanation: "Zero is not greater than zero, so the condition is false." },
    ],
  },
  {
    id: "timers", title: "JS Timers", level: "Beginner",
    summary: "Schedule a callback once or repeat it until a condition is met.",
    content: [
      "setTimeout queues a callback to run after a delay in milliseconds. Even a delay of zero allows the current synchronous code to finish first. The browser may run the callback later if it is busy.",
      "setInterval repeats a callback. Keep its returned handle and pass it to clearInterval when the job is done. Run these examples separately in the console and wait for their messages.",
    ],
    examples: [
      { title: "Observe a queued callback", code: "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");", result: "The console prints A, C, then B." },
      { title: "Stop after two ticks", code: "let ticks = 0;\nconst timer = setInterval(() => {\n  ticks += 1;\n  console.log(ticks);\n  if (ticks === 2) clearInterval(timer);\n}, 100);", result: "The console prints 1 and 2, then the interval stops." },
    ],
    quizzes: [
      { question: "Why is C printed before B?", options: ["The timer never runs", "Synchronous code finishes first", "The console sorts letters"], answer: 1, explanation: "The callback must wait for the current code to finish." },
      { question: "Which value identifies the interval to stop?", options: ["ticks", "100", "timer"], answer: 2, explanation: "setInterval returns the handle that clearInterval accepts." },
    ],
  },
  {
    id: "scope", title: "JS Scope", level: "Beginner",
    summary: "Trace a variable name to the block or function that declared it.",
    content: [
      "When code reads a name, JavaScript looks in the current lexical scope and then works outward. A let or const declared inside braces can shadow a variable with the same name outside.",
      "A function can read variables in the scope where it was defined. Its parameters are local bindings that receive fresh values on each call. Predict which label each log reads before running these examples.",
    ],
    examples: [
      { title: "Compare two labels", code: "const label = \"Lobby\";\n{\n  const label = \"Studio\";\n  console.log(label);\n}\nconsole.log(label);", result: "The inner log prints Studio and the outer log prints Lobby." },
      { title: "Read an enclosing value", code: "const unit = \" seats\";\nfunction format(count) {\n  return count + unit;\n}\nconsole.log(format(4));", result: "The local count and the surrounding unit produce “4 seats.”" },
    ],
    quizzes: [
      { question: "Which value is visible after the inner block ends?", options: ["Studio", "Both labels joined together", "Lobby"], answer: 2, explanation: "The inner declaration is scoped to its block." },
      { question: "Where is count defined?", options: ["As a parameter of format", "As a global variable", "On the console object"], answer: 0, explanation: "Each call creates a local parameter binding." },
    ],
  },
  {
    id: "sets", title: "JS Sets", level: "Beginner",
    summary: "Use a Set when each distinct value should appear once.",
    content: [
      "A Set tracks membership. Adding the same primitive twice leaves one entry, and iterating the set visits entries in insertion order. Its size property gives the number of entries.",
      "Use has to check for an entry and delete to remove one. This works well for attendance, where recording the same student twice should still count as one visit.",
    ],
    examples: [
      { title: "Deduplicate a sign-in list", code: "const names = [\"Ada\", \"Bo\", \"Ada\"];\nconst attendees = new Set(names);\nconsole.log([...attendees].join(\", \"));", result: "The output is “Ada, Bo” in order of first appearance." },
      { title: "Remove a registration", code: "const booked = new Set([12, 15]);\nbooked.delete(12);\nconsole.log(booked.has(12), booked.size);", result: "The output is false and 1 because only seat 15 remains." },
    ],
    quizzes: [
      { question: "What changes when Ada is added a third time?", options: ["The size doubles", "Nothing about membership", "Ada moves to the end"], answer: 1, explanation: "An existing entry keeps its position and is stored once." },
      { question: "Which expression tests whether seat 15 remains?", options: ["booked[15]", "booked.length", "booked.has(15)"], answer: 2, explanation: "The has method checks membership by value." },
    ],
  },
  {
    id: "maps", title: "JS Maps", level: "Beginner",
    summary: "Associate keys with values and retrieve each value by its key.",
    content: [
      "A Map stores key–value pairs in insertion order. Calling set with an existing key updates its value. Keys can be numbers or objects as well as strings.",
      "Reading a missing key with get returns undefined. If undefined is itself a possible stored value, use has to distinguish a missing entry from an entry that exists.",
    ],
    examples: [
      { title: "Update a room assignment", code: "const rooms = new Map();\nrooms.set(\"Choir\", \"A\");\nrooms.set(\"Choir\", \"C\");\nconsole.log(rooms.get(\"Choir\"), rooms.size);", result: "The room is C and the map still contains one entry." },
      { title: "Look up a number key", code: "const seats = new Map([[4, \"reserved\"]]);\nconsole.log(seats.has(4), seats.has(\"4\"));", result: "The output is true, false. A number and its text representation are different keys." },
    ],
    quizzes: [
      { question: "What does set do when Choir already exists?", options: ["Adds another Choir key", "Updates the stored room", "Deletes the map"], answer: 1, explanation: "A Map has one value for each key." },
      { question: "Which test distinguishes a missing key from a stored undefined?", options: ["map.has(key)", "map.get(key) === undefined", "map.size === 1"], answer: 0, explanation: "Membership is independent of the value associated with the key." },
    ],
  },
  {
    id: "math", title: "JS Math", level: "Beginner",
    summary: "Choose rounding and range operations that match a real calculation.",
    content: [
      "Math exposes functions directly on the Math object. Use ceil when a partial unit needs a whole container, floor to round down, and round to take the nearest integer.",
      "Use min and max together to keep a quantity within an allowed range. Trace the inner call first, then apply the outer limit.",
    ],
    examples: [
      { title: "Count boxes for a shipment", code: "const prints = 17;\nconst perBox = 6;\nconsole.log(Math.ceil(prints / perBox));", result: "The result is 3. The last box holds the remaining five prints." },
      { title: "Keep a slider within its limits", code: "function brightness(value) {\n  return Math.min(100, Math.max(0, value));\n}\nconsole.log(brightness(-8), brightness(45), brightness(120));", result: "The three results are 0, 45, and 100." },
    ],
    quizzes: [
      { question: "How many boxes hold 19 prints at six per box?", options: ["3", "4", "6"], answer: 1, explanation: "Three boxes hold eighteen prints, so one more box is needed." },
      { question: "What does the inner Math.max enforce?", options: ["The upper limit of 100", "Rounding to an integer", "The lower limit of 0"], answer: 2, explanation: "It returns whichever is larger, zero or the supplied value." },
    ],
  },
]);
