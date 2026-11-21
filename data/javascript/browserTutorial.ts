import { chapter } from "../resource-chapter";

export const browserTutorial = chapter("JS Tutorial", [
  {
    id: "debugging", title: "JS Debugging", level: "Beginner",
    summary: "Find the first point where a value differs from your prediction.",
    content: [
      "Start with a small input and write down the expected result. Inspect both the value and its type. A numeric-looking value read from a form is often a string, which changes what the + operator does.",
      "Set a breakpoint on the return statement in DevTools or run the second example with the debugger open. Inspect raw and count, then step over the return to confirm the fix.",
    ],
    examples: [
      { title: "Reproduce a wrong total", code: "const raw = \"7\";\nconsole.log(typeof raw, raw + 1);", result: "The console reports string and 71. Addition concatenates when one operand is a string." },
      { title: "Inspect the corrected value", code: "function nextSeat(raw) {\n  const count = Number(raw);\n  debugger;\n  return count + 1;\n}\nconsole.log(nextSeat(\"7\"));", result: "With debugging enabled, execution pauses inside nextSeat. Resume to see 8." },
    ],
    quizzes: [
      { question: "What observation explains 71?", options: ["The input is a string", "The CPU rounds up", "The breakpoint changes the result"], answer: 0, explanation: "String concatenation appends the digit 1 to the text 7." },
      { question: "Where should you pause to inspect count?", options: ["Before calling the function only", "Inside the function after its assignment", "After closing the tab"], answer: 1, explanation: "The local binding is initialized and visible there." },
    ],
  },
  {
    id: "style-guide", title: "JS Style Guide", level: "Beginner",
    summary: "Choose names and formatting that let someone follow a calculation.",
    content: [
      "Use a name that states what the value measures. totalMinutes and sessionCount tell the reader more than a and b. Use consistent indentation to show which statements belong to a block.",
      "Extract a repeated decision into a named function. Its callers can then describe their intent while one implementation defines the rule. Keep a quick example to confirm the behavior before and after renaming.",
    ],
    examples: [
      { title: "Name units explicitly", code: "const sessionCount = 3;\nconst minutesPerSession = 25;\nconst totalMinutes = sessionCount * minutesPerSession;\nconsole.log(totalMinutes);", result: "The result is 75 minutes. The names distinguish a count from a duration." },
      { title: "Name a decision", code: "function hasOpenSeats(booked, capacity) {\n  return booked < capacity;\n}\nconsole.log(hasOpenSeats(8, 8));", result: "The result is false because a fully booked room has no open seats." },
    ],
    quizzes: [
      { question: "Which name communicates both purpose and unit?", options: ["value", "minutesPerSession", "m1"], answer: 1, explanation: "The name identifies a duration measured in minutes for one session." },
      { question: "Which test checks the exact capacity boundary?", options: ["hasOpenSeats(0, 8)", "hasOpenSeats(4, 8)", "hasOpenSeats(8, 8)"], answer: 2, explanation: "Equal counts exercise the boundary where the room becomes full." },
    ],
  },
  {
    id: "reference", title: "JS Reference", level: "Beginner",
    summary: "Use a reference entry to predict a method’s inputs, output, and side effects.",
    content: [
      "Start with the type of value you have, then find the relevant method. Read its parameters, return value, and whether it changes the original. These details matter when two methods have similar names.",
      "Compare slice and splice on separate arrays. Each returns an array, but their second arguments mean different things. Watch both the return value and the original list.",
    ],
    examples: [
      { title: "Read a range with slice", code: "const days = [\"Mon\", \"Tue\", \"Wed\", \"Thu\"];\nconsole.log(days.slice(1, 3).join(\", \"));\nconsole.log(days.length);", result: "The range contains Tue and Wed. The original still has four entries." },
      { title: "Remove entries with splice", code: "const days = [\"Mon\", \"Tue\", \"Wed\", \"Thu\"];\nconst removed = days.splice(1, 1);\nconsole.log(removed[0], days.join(\", \"));", result: "Tue is removed. The remaining entries are Mon, Wed, and Thu." },
    ],
    quizzes: [
      { question: "What does the 3 in slice(1, 3) mean?", options: ["Remove three entries", "Stop before index 3", "Include index 3"], answer: 1, explanation: "The end index of slice is exclusive." },
      { question: "Which detail explains the shorter array after splice?", options: ["The return type", "The array name", "The method mutates its receiver"], answer: 2, explanation: "Splice removes items directly from the array." },
    ],
  },
  {
    id: "projects", title: "JS Projects", level: "Intermediate",
    summary: "Build a counter by connecting state, an event, and a visible result.",
    content: [
      "Keep the attendance count in a number. A button click changes that state, and a render function copies the current value into an output element. This gives every action one way to refresh the display.",
      "Save the first example as an HTML file. Once two clicks show 2, extend that file with the second example below the first script. Test adding, resetting, and adding again.",
    ],
    examples: [
      { title: "Build the attendance counter", code: "<button id=\"add\">Add visitor</button>\n<output id=\"count\">0</output>\n<script>\n  let visitors = 0;\n  const count = document.querySelector(\"#count\");\n  function render() {\n    count.textContent = String(visitors);\n  }\n  document.querySelector(\"#add\").addEventListener(\"click\", () => {\n    visitors += 1;\n    render();\n  });\n</script>", result: "Each activation increases the displayed count by one." },
      { title: "Extend the counter with reset", code: "<!-- Append to the counter file above. -->\n<button id=\"reset\">Reset count</button>\n<script>\n  document.querySelector(\"#reset\").addEventListener(\"click\", () => {\n    visitors = 0;\n    render();\n  });\n</script>", result: "After adding two visitors, resetting, and adding once more, the display reads 1." },
    ],
    quizzes: [
      { question: "Which variable stores the attendance count?", options: ["count", "visitors", "render"], answer: 1, explanation: "visitors holds the number, while count refers to the output element." },
      { question: "Why call render after resetting?", options: ["To copy the new state into the page", "To attach another listener", "To reload the document"], answer: 0, explanation: "Changing the number does not by itself change the output element." },
    ],
  },
  {
    id: "versions", title: "JS Versions", level: "Intermediate",
    summary: "Distinguish a language edition from the features a particular runtime supports.",
    content: [
      "ECMAScript editions document changes to JavaScript. ES2015 introduced features such as const and arrow functions. Later editions added capabilities such as optional chaining and new built-in methods. A proposal can appear in learning materials before it is widely implemented.",
      "When a project needs a newer method, test for that capability and provide a fallback that produces the same result. New syntax needs a compatible parser or a build step because parsing takes place before your code runs.",
    ],
    examples: [
      { title: "Read an optional property", code: "const exhibit = { title: \"Paper\" };\nconsole.log(exhibit.curator?.name ?? \"Unassigned\");", result: "On a runtime supporting this syntax, the missing curator yields the fallback “Unassigned.”" },
      { title: "Detect a newer array method", code: "const rooms = [8, 2, 5];\nconst byNumber = (a, b) => a - b;\nconst sorted = typeof rooms.toSorted === \"function\"\n  ? rooms.toSorted(byNumber)\n  : [...rooms].sort(byNumber);\nconsole.log(sorted.join(\", \"), rooms[0]);", result: "Both paths produce 2, 5, 8 and leave 8 as the first item of the original array." },
    ],
    quizzes: [
      { question: "Why copy rooms in the fallback?", options: ["sort changes the array it is called on", "sort needs a Set", "Copies change the element type"], answer: 0, explanation: "Sorting the copy preserves the original ordering." },
      { question: "Which check tests the actual capability used here?", options: ["The calendar year", "The browser window size", "typeof rooms.toSorted === \"function\""], answer: 2, explanation: "Checking the method tests whether this runtime exposes it." },
    ],
  },
  {
    id: "html-dom", title: "JS HTML DOM", level: "Beginner",
    summary: "Find nodes in the document and update the part of the page they represent.",
    content: [
      "The browser parses HTML into a tree called the Document Object Model. document.querySelector returns the first element matching a CSS selector, or null if there is no match. Place the script after its target in these HTML examples.",
      "Change an existing node with textContent. To extend a list, create a new li, set its text, and append it to the list. The extra item becomes part of the live document.",
    ],
    examples: [
      { title: "Update a status", code: "<p id=\"status\">Waiting</p>\n<script>\n  const statusLine = document.querySelector(\"#status\");\n  statusLine.textContent = \"Ready for review\";\n</script>", result: "The paragraph shows “Ready for review.”" },
      { title: "Append a list item", code: "<ul id=\"tools\"><li>Pencil</li></ul>\n<script>\n  const item = document.createElement(\"li\");\n  item.textContent = \"Eraser\";\n  document.querySelector(\"#tools\").append(item);\n</script>", result: "Eraser appears as the second list item." },
    ],
    quizzes: [
      { question: "What does querySelector return for a missing ID?", options: ["An empty paragraph", "null", "An empty array"], answer: 1, explanation: "The method returns null when there is no matching element." },
      { question: "Which operation places the new item in the document?", options: ["Creating the element", "Setting its text", "Appending it to the list"], answer: 2, explanation: "A newly created element remains detached until it is inserted." },
    ],
  },
  {
    id: "html-events", title: "JS HTML Events", level: "Beginner",
    summary: "Respond to browser events with listeners attached to the relevant elements.",
    content: [
      "An event listener is a function the browser calls when an event occurs. Pass the function to addEventListener so it runs on the interaction. The event object supplies details about that interaction.",
      "Save each example as HTML. Try typing, pasting, and using the keyboard. The input event responds to edits, and a native button supports activation by both keyboard and pointer.",
    ],
    examples: [
      { title: "Count typed characters", code: "<label>Title <input id=\"title\"></label>\n<output id=\"length\">0</output>\n<script>\n  document.querySelector(\"#title\").addEventListener(\"input\", event => {\n    document.querySelector(\"#length\").value = event.target.value.length;\n  });\n</script>", result: "Typing or pasting Book shows 4. Deleting its last letter shows 3." },
      { title: "Handle the first activation", code: "<button id=\"confirm\">Confirm place</button>\n<script>\n  document.querySelector(\"#confirm\").addEventListener(\"click\", event => {\n    event.currentTarget.textContent = \"Confirmed\";\n  }, { once: true });\n</script>", result: "The first activation changes the label to Confirmed and removes the listener." },
    ],
    quizzes: [
      { question: "Which event updates the count as the field is edited?", options: ["submit", "load", "input"], answer: 2, explanation: "The input event fires on user edits, including pasting." },
      { question: "What does once: true do?", options: ["Removes the listener after its first call", "Disables the button forever", "Submits a form automatically"], answer: 0, explanation: "The browser unregisters that particular listener after it runs." },
    ],
  },
  {
    id: "html-first", title: "JS HTML First", level: "Beginner",
    summary: "Start with a usable HTML interaction and add JavaScript where it helps.",
    content: [
      "A link with an href already navigates, and a details element already opens and closes. Building on those behaviors lets people use the page even if a script loads late or fails.",
      "Save each example as HTML. In the second, the fee information and disclosure work on their own. JavaScript adds an optional status message. Disable scripting and compare what you can still do.",
    ],
    examples: [
      { title: "Link directly to content", code: "<a href=\"#fees\">See entry fees</a>\n<h2 id=\"fees\">Entry fees</h2>\n<p>Admission is free on Sundays.</p>", result: "Activating the link targets the fees heading using the browser’s built-in fragment navigation." },
      { title: "Enhance a native disclosure", code: "<details><summary>Entry fees</summary><p>Free on Sundays.</p></details>\n<output id=\"state\"></output>\n<script>\n  const fees = document.querySelector(\"details\");\n  fees.addEventListener(\"toggle\", () => {\n    document.querySelector(\"#state\").value = fees.open ? \"Expanded\" : \"Collapsed\";\n  });\n</script>", result: "The summary toggles the fee information. With JavaScript enabled, the status also updates." },
    ],
    quizzes: [
      { question: "What connects the fees link to its heading?", options: ["The fragment and matching ID", "An event listener", "The heading font size"], answer: 0, explanation: "The browser resolves #fees to the element with that ID." },
      { question: "Which feature still works with scripting disabled?", options: ["Updating the output via the listener", "Opening the native disclosure", "Calling the arrow function"], answer: 1, explanation: "The browser implements the details and summary interaction in HTML." },
    ],
  },
]);
