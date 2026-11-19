export interface LearningLesson {
  id: string;
  title: string;
  summary: string;
  content: string[];
  example: string;
  examples?: { title: string; code: string }[];
  quiz: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
  quizzes?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }[];
  level?: "Beginner" | "Intermediate" | "Advanced";
}

export interface LearningLanguage {
  id: string;
  label: string;
  category: string;
  description: string;
  docs: string;
  lessons: LearningLesson[];
}

import { extendedLearningLanguages } from "./extended-learning-resources";

const coreLearningLanguages: LearningLanguage[] = [
  {
    id: "html",
    label: "HTML",
    category: "Markup",
    description: "Structure pages with accessible, meaningful elements.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    lessons: [
      {
        id: "document", title: "Document structure", summary: "Build a valid page and give browsers the metadata they need.",
        content: ["HTML describes the structure and meaning of web content. A document starts with a doctype, then a root <html> element containing metadata in <head> and visible content in <body>.", "Set the document language and a useful page title. These details help assistive technology, search engines, and browser tabs."],
        example: "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>My first page</title>\n  </head>\n  <body>\n    <h1>Hello, web!</h1>\n  </body>\n</html>",
        examples: [
          { title: "Minimal valid document", code: "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Field notes</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>" },
          { title: "Responsive page metadata", code: "<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Learning HTML | Netcoder</title>\n</head>" },
          { title: "Connect an external stylesheet", code: "<head>\n  <meta charset=\"utf-8\">\n  <title>Course page</title>\n  <link rel=\"stylesheet\" href=\"/styles/course.css\">\n</head>" },
          { title: "Add a description for search previews", code: "<head>\n  <title>CSS foundations</title>\n  <meta name=\"description\" content=\"Learn layout, color, and responsive CSS.\">\n</head>" },
          { title: "Declare page language and main content", code: "<html lang=\"en\">\n<body>\n  <header><a href=\"/\">Netcoder</a></header>\n  <main><h1>HTML foundations</h1></main>\n</body>\n</html>" },
        ],
        quiz: { question: "Where does the page's visible content belong?", options: ["Inside <head>", "Inside <body>", "Inside <title>"], answer: 1, explanation: "The body contains content rendered as part of the page." },
        quizzes: [
          { question: "Where does visible page content belong?", options: ["Inside <head>", "Inside <body>", "Inside <title>"], answer: 1, explanation: "The body contains content rendered as part of the page." },
          { question: "Which attribute sets the document's primary language?", options: ["lang on <html>", "charset on <body>", "name on <title>"], answer: 0, explanation: "The lang attribute on the root html element communicates the document language." },
          { question: "What is the purpose of the viewport meta tag?", options: ["Help pages use the device viewport on mobile", "Load JavaScript automatically", "Add a visible heading"], answer: 0, explanation: "The viewport declaration helps browsers size the layout to the device width." },
        ],
      },
      {
        id: "semantic", title: "Semantic elements", summary: "Choose elements for what content means, not just how it looks.",
        content: ["Semantic elements communicate a page's structure to browsers and assistive technologies. Use <header>, <nav>, <main>, <article>, and <footer> to describe major regions.", "Use headings in a logical hierarchy. A semantic element often provides useful behavior and accessibility without extra scripting."],
        example: "<article>\n  <header>\n    <h2>Getting started</h2>\n    <p>A short introduction to the topic.</p>\n  </header>\n  <p>Write the main article content here.</p>\n</article>",
        examples: [
          { title: "Page landmarks", code: "<header><a href=\"/\">Site name</a></header>\n<nav aria-label=\"Main\"><a href=\"/courses\">Courses</a></nav>\n<main><h1>Courses</h1></main>\n<footer>© 2026 Netcoder</footer>" },
          { title: "Article with a heading", code: "<article>\n  <h2>Responsive design</h2>\n  <p>Layouts adapt to their available space.</p>\n</article>" },
          { title: "A section with a descriptive heading", code: "<section aria-labelledby=\"faq-title\">\n  <h2 id=\"faq-title\">Questions</h2>\n  <p>Find answers to common questions.</p>\n</section>" },
          { title: "A description list for terms", code: "<dl>\n  <dt>HTML</dt><dd>Structures web content.</dd>\n  <dt>CSS</dt><dd>Styles web content.</dd>\n</dl>" },
          { title: "An accessible navigation landmark", code: "<nav aria-label=\"Course topics\">\n  <a href=\"#structure\">Structure</a>\n  <a href=\"#forms\">Forms</a>\n</nav>" },
        ],
        quiz: { question: "Which element should identify the main content of a page?", options: ["<main>", "<span>", "<b>"], answer: 0, explanation: "Use one <main> landmark for the page's primary content." },
        quizzes: [
          { question: "Which element identifies the page's primary content?", options: ["<main>", "<span>", "<b>"], answer: 0, explanation: "The main landmark identifies the central content of a page." },
          { question: "Which element is appropriate for a self-contained article?", options: ["<article>", "<i>", "<br>"], answer: 0, explanation: "Article represents a self-contained composition that can stand on its own." },
          { question: "Why use heading levels in a logical order?", options: ["To communicate the content outline", "To make every heading the same size", "To replace all landmarks"], answer: 0, explanation: "A logical heading hierarchy helps readers understand and navigate the page structure." },
        ],
      },
      {
        id: "forms", title: "Forms and inputs", summary: "Collect user input with labels, suitable controls, and validation.",
        content: ["Pair every input with a visible <label>. Matching the label's for attribute to the input id makes the control easier to understand and activate.", "Choose an input type that matches the data, such as email or number. Native constraints like required provide helpful baseline validation."],
        example: "<form>\n  <label for=\"email\">Email address</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Join newsletter</button>\n</form>",
        examples: [
          { title: "Label and email input", code: "<label for=\"email\">Email address</label>\n<input id=\"email\" name=\"email\" type=\"email\" required>" },
          { title: "Group related controls", code: "<fieldset>\n  <legend>Choose a level</legend>\n  <label><input type=\"radio\" name=\"level\" value=\"beginner\"> Beginner</label>\n  <label><input type=\"radio\" name=\"level\" value=\"advanced\"> Advanced</label>\n</fieldset>" },
          { title: "Use a helpful autocomplete hint", code: "<label for=\"full-name\">Full name</label>\n<input id=\"full-name\" name=\"name\" autocomplete=\"name\" required>" },
          { title: "Provide a select menu", code: "<label for=\"track\">Learning track</label>\n<select id=\"track\" name=\"track\" required>\n  <option value=\"\">Choose a track</option>\n  <option value=\"web\">Web development</option>\n</select>" },
          { title: "Show a form-level submit action", code: "<form action=\"/subscribe\" method=\"post\">\n  <label for=\"updates\">Email for updates</label>\n  <input id=\"updates\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Subscribe</button>\n</form>" },
        ],
        quiz: { question: "How is a label explicitly connected to an input?", options: ["label's for matches input id", "label's name matches input type", "input is placed after a button"], answer: 0, explanation: "The label's for value should match the input's id." },
        quizzes: [
          { question: "How is a label explicitly associated with an input?", options: ["The label's for matches the input id", "The label's name matches input type", "The input follows a button"], answer: 0, explanation: "Matching for and id creates an explicit accessible association." },
          { question: "Which input type provides basic email-format validation?", options: ["email", "text-only", "submit"], answer: 0, explanation: "The email type provides browser-level format checks, but server validation is still required." },
          { question: "Should browser validation replace server-side validation?", options: ["No, validate submitted data on the server too", "Yes, always", "Only when a form has a label"], answer: 0, explanation: "Client-side checks can be bypassed, so the server must validate submitted data." },
        ],
      },
    ],
  },
  {
    id: "css",
    label: "CSS",
    category: "Styling",
    description: "Create clear, responsive layouts and polished visual systems.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    lessons: [
      { id: "selectors", title: "Selectors and cascade", summary: "Target elements and understand which declaration wins.", content: ["A CSS rule combines a selector with declarations. Selectors can target elements, classes, attributes, and relationships between elements.", "When rules conflict, the cascade considers origin, importance, specificity, and source order. Prefer small, reusable classes over increasingly specific selectors."], example: "/* A reusable component style */\n.notice {\n  color: #382018;\n  background: #fff3ec;\n  border: 1px solid #f3c7b7;\n}\n\n.notice strong {\n  color: #c64020;\n}", quiz: { question: "Which selector targets elements with class='card'?", options: ["#card", ".card", "card()"], answer: 1, explanation: "A dot prefix selects a class in CSS." } },
      { id: "box-model", title: "The box model", summary: "Control content, padding, borders, and spacing predictably.", content: ["Every element is a box made from content, padding, border, and margin. Padding adds room inside the border; margin separates neighboring boxes.", "The border-box sizing model makes declared widths include padding and border, which is usually easier for layouts."], example: "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: min(100%, 32rem);\n  padding: 1.5rem;\n  border: 1px solid #e5d8d1;\n  margin-inline: auto;\n}", quiz: { question: "Which property adds space inside an element's border?", options: ["margin", "padding", "outline"], answer: 1, explanation: "Padding is the inner spacing between content and border." } },
      { id: "responsive", title: "Responsive layouts", summary: "Let content adapt gracefully across screen sizes.", content: ["Responsive design starts with flexible layouts. CSS Grid and Flexbox arrange content without hard-coding every screen width.", "Media queries are useful when the design needs a breakpoint. Prefer content-driven breakpoints and test with keyboard, zoom, and narrow viewports."], example: ".course-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 1rem;\n}\n\n@media (max-width: 40rem) {\n  .page { padding: 1rem; }\n}", quiz: { question: "Which CSS feature is designed for two-dimensional layouts?", options: ["CSS Grid", "text-decoration", "font-style"], answer: 0, explanation: "Grid supports rows and columns for two-dimensional layout." } },
    ],
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "Language",
    description: "Add behavior, work with data, and bring web interfaces to life.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    lessons: [
      { id: "variables", title: "Variables and functions", summary: "Name values and package reusable behavior into functions.", content: ["Use const by default for bindings that will not be reassigned, and let when a variable needs a new value. Avoid var in modern code because its scope rules are surprising.", "Functions take inputs through parameters and can return a result. Small, well-named functions make behavior easier to test and reuse."], example: "const taxRate = 0.08;\n\nfunction totalWithTax(price) {\n  return price * (1 + taxRate);\n}\n\nconsole.log(totalWithTax(25)); // 27", quiz: { question: "Which declaration is the best default for a value that won't be reassigned?", options: ["const", "let", "var"], answer: 0, explanation: "const prevents reassignment of the binding and communicates intent." } },
      { id: "arrays", title: "Arrays and objects", summary: "Represent collections and structured records with core data types.", content: ["Arrays store ordered values. Methods such as map, filter, and find help transform or search collections without manual index bookkeeping.", "Objects group related values under named properties. Use optional chaining when a nested value may be absent, and avoid mutating shared data unexpectedly."], example: "const learners = [\n  { name: \"Ari\", score: 92 },\n  { name: \"Sam\", score: 76 },\n];\n\nconst passingNames = learners\n  .filter((learner) => learner.score >= 80)\n  .map((learner) => learner.name);\n\nconsole.log(passingNames); // [\"Ari\"]", quiz: { question: "Which array method transforms each item into a new value?", options: ["map()", "push()", "pop()"], answer: 0, explanation: "map() returns a new array containing the callback's result for each item." } },
      { id: "dom", title: "DOM and events", summary: "Connect browser events to accessible interface updates.", content: ["The Document Object Model represents the page as nodes. Query elements with stable selectors, then update text or attributes rather than injecting untrusted HTML.", "Event listeners respond to user actions. Buttons already support keyboard activation, so prefer them over clickable generic containers."], example: "const button = document.querySelector(\"#add-item\");\nconst count = document.querySelector(\"#count\");\nlet total = 0;\n\nbutton?.addEventListener(\"click\", () => {\n  total += 1;\n  count.textContent = String(total);\n});", quiz: { question: "Which method attaches a handler for a browser event?", options: ["addEventListener()", "querySelectorAll()", "setAttribute()"], answer: 0, explanation: "addEventListener registers a callback for the chosen event type." } },
    ],
  },
  {
    id: "python",
    label: "Python",
    category: "Language",
    description: "Learn expressive syntax for automation, applications, and data.",
    docs: "https://docs.python.org/3/tutorial/",
    lessons: [
      { id: "values", title: "Values and variables", summary: "Work with basic types and give values clear names.", content: ["Python variables refer to values and do not require a separate type declaration. Common built-in types include int, float, str, bool, list, and dict.", "Use descriptive snake_case names. Convert input explicitly when you need a number, and remember that input() always returns text."], example: "name = input(\"Your name: \" )\nage = int(input(\"Your age: \"))\n\nprint(f\"Hello, {name}!\")\nprint(f\"Next year you will be {age + 1}.\")", quiz: { question: "What type does input() return?", options: ["str", "int", "bool"], answer: 0, explanation: "input() returns text; convert it when you need another type." } },
      { id: "loops", title: "Collections and loops", summary: "Store groups of values and iterate over them clearly.", content: ["Lists preserve order and can be changed. Dictionaries map keys to values. Choose a collection based on how you need to access and update the data.", "A for loop iterates directly over items. Use enumerate() when you also need an index, and avoid modifying a collection while iterating over it."], example: "scores = [82, 95, 73]\n\nfor position, score in enumerate(scores, start=1):\n    print(f\"Learner {position}: {score}\")\n\naverage = sum(scores) / len(scores)\nprint(f\"Average: {average:.1f}\")", quiz: { question: "Which collection stores key-value pairs?", options: ["tuple", "dict", "set"], answer: 1, explanation: "A dict stores values under unique keys." } },
      { id: "functions", title: "Functions and modules", summary: "Organize logic into reusable units with explicit inputs.", content: ["Define a function with def, name it clearly, and return a value when callers need a result. A docstring can explain purpose, inputs, and important behavior.", "Modules let you group related code and import it elsewhere. Keep side effects behind a main guard so importing a module does not unexpectedly run a script."], example: "def describe_temperature(celsius):\n    \"\"\"Return a readable temperature label.\"\"\"\n    return f\"{celsius:.1f}°C\"\n\n\nif __name__ == \"__main__\":\n    print(describe_temperature(21.5))", quiz: { question: "Which keyword begins a Python function definition?", options: ["function", "def", "fun"], answer: 1, explanation: "Python uses def to define a function." } },
    ],
  },
  {
    id: "java",
    label: "Java",
    category: "Language",
    description: "Explore strongly typed programming and object-oriented design.",
    docs: "https://dev.java/learn/",
    lessons: [
      { id: "classes", title: "Classes and objects", summary: "Model data and behavior with types you define.", content: ["A class defines fields and methods; an object is an instance of that class. Keep fields private when possible and expose behavior through methods.", "Constructors establish an object's valid initial state. Use clear names and give each class one focused responsibility."], example: "class Book {\n    private final String title;\n\n    Book(String title) {\n        this.title = title;\n    }\n\n    String getTitle() {\n        return title;\n    }\n}", quiz: { question: "What does a class primarily define?", options: ["A blueprint for objects", "A running thread", "A package manager"], answer: 0, explanation: "A class describes the state and behavior of its instances." } },
      { id: "types", title: "Types and control flow", summary: "Declare values with types and make decisions with branches.", content: ["Java is statically typed: variables have declared types checked by the compiler. Primitive types include int and boolean; reference types include String and arrays.", "Use if/else for conditional paths and loops for repetition. Braces make control-flow boundaries visible and help prevent accidental logic errors."], example: "int temperature = 18;\nString advice;\n\nif (temperature < 20) {\n    advice = \"Bring a light jacket\";\n} else {\n    advice = \"A t-shirt should be fine\";\n}\n\nSystem.out.println(advice);", quiz: { question: "Which type represents true or false in Java?", options: ["boolean", "String", "double"], answer: 0, explanation: "boolean is Java's primitive type for true/false values." } },
      { id: "collections", title: "Collections and generics", summary: "Store groups of typed values with collection classes.", content: ["The Collections Framework includes structures such as List, Set, and Map. Pick one based on ordering, uniqueness, and lookup needs.", "Generics express the element type, such as List<String>. This helps the compiler catch incompatible values and reduces manual casting."], example: "import java.util.ArrayList;\nimport java.util.List;\n\nList<String> topics = new ArrayList<>();\ntopics.add(\"Classes\");\ntopics.add(\"Collections\");\n\nfor (String topic : topics) {\n    System.out.println(topic);\n}", quiz: { question: "What does List<String> communicate?", options: ["The list contains strings", "The list is immutable", "The list is sorted"], answer: 0, explanation: "The generic type parameter describes the list's element type." } },
    ],
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "Language",
    description: "Add static types to JavaScript for safer, clearer applications.",
    docs: "https://www.typescriptlang.org/docs/",
    lessons: [
      { id: "annotations", title: "Everyday types", summary: "Describe values so mistakes are caught before runtime.", content: ["TypeScript adds a type system to JavaScript and compiles to JavaScript. Type annotations describe expected shapes and help editors provide precise completions.", "Let inference do the work when a value makes its type clear. Add explicit types at boundaries such as function parameters and exported APIs."], example: "function formatPrice(amount: number, currency = \"USD\"): string {\n  return new Intl.NumberFormat(\"en-US\", {\n    style: \"currency\", currency,\n  }).format(amount);\n}\n\nconst label = formatPrice(19.99);", quiz: { question: "What does the : number annotation express?", options: ["The parameter should be numeric", "The function runs once", "The value is optional"], answer: 0, explanation: "A type annotation describes the type expected for that value." } },
      { id: "unions", title: "Unions and narrowing", summary: "Represent alternatives safely and check which one you have.", content: ["A union type allows a value to be one of several types. Narrow it with checks such as typeof, equality comparisons, or an in operator before using type-specific behavior.", "Discriminated unions use a shared literal property to distinguish variants. They make state handling explicit and support exhaustive checks."], example: "type Result =\n  | { status: \"success\"; value: string }\n  | { status: \"error\"; message: string };\n\nfunction describe(result: Result): string {\n  if (result.status === \"success\") {\n    return result.value;\n  }\n  return result.message;\n}", quiz: { question: "What is type narrowing used for?", options: ["Checking a value's possible type before using it", "Making every value any", "Removing compiled JavaScript"], answer: 0, explanation: "Narrowing uses runtime checks to refine a union to a specific type." } },
      { id: "interfaces", title: "Interfaces and generics", summary: "Describe object shapes and write reusable typed functions.", content: ["Interfaces describe the properties and methods an object should provide. TypeScript uses structural typing, so compatibility depends on shape rather than explicit declarations.", "Generics preserve relationships between input and output types. Prefer a specific generic constraint to falling back to any."], example: "interface ApiResponse<T> {\n  data: T;\n  receivedAt: Date;\n}\n\nfunction first<T>(items: T[]): T | undefined {\n  return items[0];\n}\n\nconst topic = first([\"HTML\", \"CSS\"]);", quiz: { question: "Why use a generic type parameter?", options: ["To preserve type information across reusable code", "To disable type checking", "To convert TypeScript into HTML"], answer: 0, explanation: "Generics let reusable code retain the specific types it works with." } },
    ],
  },
  {
    id: "react",
    label: "React",
    category: "UI Library",
    description: "Compose interactive interfaces from reusable components.",
    docs: "https://react.dev/learn",
    lessons: [
      { id: "components", title: "Components and props", summary: "Build reusable UI pieces and configure them with data.", content: ["A React component is a JavaScript function that returns UI. Compose small components to give each part of the interface a clear responsibility.", "Props are read-only inputs from a parent. Use descriptive names, provide stable keys when rendering lists, and avoid changing props directly."], example: "type GreetingProps = { name: string };\n\nfunction Greeting({ name }: GreetingProps) {\n  return <h2>Welcome, {name}!</h2>;\n}\n\n<Greeting name=\"Jordan\" />", quiz: { question: "How should a component treat its props?", options: ["As read-only inputs", "As global variables", "As DOM nodes"], answer: 0, explanation: "Props are inputs; components should not mutate them." } },
      { id: "state", title: "State and events", summary: "Respond to user actions with state-driven rendering.", content: ["State is data that changes over time and affects what a component renders. The useState hook returns the current value and a setter that schedules an update.", "Treat state as immutable. When the next value depends on the previous value, use the functional setter form to avoid stale updates."], example: "import { useState } from \"react\";\n\nfunction LikeButton() {\n  const [likes, setLikes] = useState(0);\n\n  return (\n    <button onClick={() => setLikes((count) => count + 1)}>\n      Likes: {likes}\n    </button>\n  );\n}", quiz: { question: "What causes React to render with updated state?", options: ["Calling the state setter", "Changing a local variable", "Editing the DOM directly"], answer: 0, explanation: "Calling the setter queues a render with the new state value." } },
      { id: "effects", title: "Lists and effects", summary: "Render collections and synchronize with external systems.", content: ["Render arrays with map() and provide each sibling a stable key so React can track items between updates. Use meaningful IDs instead of array positions when items can move.", "useEffect synchronizes a component with an external system, such as a browser event listener. Do not use effects for values that can be calculated during rendering."], example: "const topics = [\n  { id: \"html\", name: \"HTML\" },\n  { id: \"css\", name: \"CSS\" },\n];\n\nfunction TopicList() {\n  return (\n    <ul>\n      {topics.map((topic) => (\n        <li key={topic.id}>{topic.name}</li>\n      ))}\n    </ul>\n  );\n}", quiz: { question: "Why should list items have stable keys?", options: ["So React can identify items between renders", "To apply CSS automatically", "To make the list sorted"], answer: 0, explanation: "Keys help React match items when a list changes." } },
    ],
  },
  {
    id: "sql",
    label: "SQL",
    category: "Database",
    description: "Query, filter, combine, and summarize relational data.",
    docs: "https://www.sqlite.org/lang.html",
    lessons: [
      { id: "select", title: "SELECT and filtering", summary: "Retrieve only the columns and rows your question needs.", content: ["SELECT chooses columns from a table; FROM names the source. WHERE filters rows before the result is returned.", "Use ORDER BY for predictable sorting and LIMIT to cap results. Prefer explicit column names over SELECT * in application queries."], example: "SELECT name, score\nFROM learners\nWHERE score >= 80\nORDER BY score DESC\nLIMIT 10;", quiz: { question: "Which clause filters rows?", options: ["WHERE", "ORDER BY", "SELECT"], answer: 0, explanation: "WHERE specifies conditions that rows must satisfy." } },
      { id: "joins", title: "Joining tables", summary: "Combine related records through matching key columns.", content: ["A JOIN combines rows from related tables. An INNER JOIN returns matching pairs; a LEFT JOIN preserves every row from the left table and fills unmatched right-side columns with NULL.", "Use table aliases to keep queries readable. Check whether join keys are unique to avoid accidentally multiplying rows."], example: "SELECT learners.name, courses.title\nFROM learners\nJOIN enrollments\n  ON enrollments.learner_id = learners.id\nJOIN courses\n  ON courses.id = enrollments.course_id;", quiz: { question: "Which join keeps all rows from its left table?", options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN"], answer: 0, explanation: "LEFT JOIN retains each left-side row, even without a match." } },
      { id: "aggregates", title: "Aggregates and grouping", summary: "Summarize records with counts, averages, and groups.", content: ["Aggregate functions such as COUNT, SUM, AVG, MIN, and MAX calculate a value across rows. GROUP BY produces one result per distinct group.", "WHERE filters source rows before grouping; HAVING filters the grouped results. Be explicit about grouping columns to keep results understandable."], example: "SELECT course_id, COUNT(*) AS learner_count,\n       AVG(score) AS average_score\nFROM results\nGROUP BY course_id\nHAVING COUNT(*) >= 5\nORDER BY average_score DESC;", quiz: { question: "Which clause filters groups after aggregation?", options: ["HAVING", "WHERE", "FROM"], answer: 0, explanation: "HAVING applies conditions to grouped aggregate results." } },
    ],
  },
  {
    id: "git",
    label: "Git",
    category: "Workflow",
    description: "Track changes and collaborate confidently with version control.",
    docs: "https://git-scm.com/doc",
    lessons: [
      { id: "commits", title: "Commits and history", summary: "Save focused snapshots and inspect how a project changed.", content: ["A commit records a snapshot of staged changes with a message. Stage only the changes that belong together, then write a concise message describing the intent.", "Git history helps you compare versions and understand why code changed. Review the diff before committing, especially when working with generated files."], example: "git status\ngit add src/greeting.js\ngit diff --staged\ngit commit -m \"Add greeting message\"\ngit log --oneline -5", quiz: { question: "What does staging choose?", options: ["Which changes go into the next commit", "Which branch is deleted", "Which files are installed"], answer: 0, explanation: "The staging area selects changes for the next commit." } },
      { id: "branches", title: "Branches and merging", summary: "Develop a change separately and bring it back safely.", content: ["A branch is a lightweight pointer to a line of development. Create a branch for a focused feature or fix so work can progress independently.", "Merging combines histories. If edits conflict, inspect both versions, resolve the file intentionally, and run tests before completing the merge."], example: "git switch -c feature/search\n# Make and commit the change\ngit add .\ngit commit -m \"Add resource search\"\n# Return to the base branch and merge\ngit switch main\ngit merge feature/search", quiz: { question: "Why create a feature branch?", options: ["To isolate work from the base branch", "To back up the entire computer", "To skip code review"], answer: 0, explanation: "Branches isolate changes while keeping the main line stable." } },
      { id: "collaboration", title: "Remote collaboration", summary: "Share commits and synchronize with a shared repository.", content: ["A remote is a named reference to another repository, often hosted by a team service. Fetch updates your remote-tracking references without changing your working files.", "Push shares local commits; pull fetches and integrates updates. Review status and resolve conflicts carefully before pushing shared work."], example: "git remote -v\ngit fetch origin\ngit status\ngit pull --rebase origin main\ngit push -u origin feature/search", quiz: { question: "What does git push do?", options: ["Shares local commits with a remote", "Deletes all local branches", "Rewrites every file"], answer: 0, explanation: "Push sends commits from your local branch to the remote repository." } },
    ],
  },
];

export const learningLanguages: LearningLanguage[] = [...coreLearningLanguages, ...extendedLearningLanguages];
