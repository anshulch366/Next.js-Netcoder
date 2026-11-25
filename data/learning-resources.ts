export interface LearningLesson {
  id: string;
  title: string;
  summary: string;
  content: string[];
  contentLanguage?: string;
  example: string;
  examples?: { title: string; code: string; result?: string }[];
  section?: string;
  reading?: { title: string; url: string };
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
import { htmlLessons } from "./html";
import { cssLessons } from "./css";
import { javascriptLessons } from "./javascript";
import { pythonLessons } from "./python";
import { javaLessons } from "./java";
import { typescriptLessons } from "./typescript-lessons";
import { reactLessons, ticTacToeLessons, thinkingReactLessons, reactInstallationLessons, creatingReactAppLessons, scratchReactLessons, existingProjectLessons, reactSetupLessons, reactTypeScriptLessons, reactCompilerLessons, reactCompilerIntroLessons, reactCompilerInstallLessons, reactCompilerAdoptionLessons, reactCompilerDebugLessons } from "./react-lessons";

const coreLearningLanguages: LearningLanguage[] = [
  {
    id: "html",
    label: "HTML",
    category: "Markup",
    description: "Structure pages with accessible, meaningful elements.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    lessons: htmlLessons,
  },
  {
    id: "css",
    label: "CSS",
    category: "Styling",
    description: "Create clear, responsive layouts and polished visual systems.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    lessons: cssLessons,
  },
  {
    id: "javascript",
    label: "JavaScript",
    category: "Language",
    description: "Add behavior, work with data, and bring web interfaces to life.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    lessons: [
      ...javascriptLessons,
      { section: "Extra practice", level: "Beginner", id: "variables", title: "Variables and functions", summary: "Name values and package reusable behavior into functions.", content: ["Use const by default for bindings that will not be reassigned, and let when a variable needs a new value. Avoid var in modern code because its scope rules are surprising.", "Functions take inputs through parameters and can return a result. Small, well-named functions make behavior easier to test and reuse."], example: "const taxRate = 0.08;\n\nfunction totalWithTax(price) {\n  return price * (1 + taxRate);\n}\n\nconsole.log(totalWithTax(25)); // 27", quiz: { question: "Which declaration is the best default for a value that won't be reassigned?", options: ["const", "let", "var"], answer: 0, explanation: "const prevents reassignment of the binding and communicates intent." } },
      { section: "Extra practice", level: "Beginner", id: "arrays", title: "Arrays and objects", summary: "Represent collections and structured records with core data types.", content: ["Arrays store ordered values. Methods such as map, filter, and find help transform or search collections without manual index bookkeeping.", "Objects group related values under named properties. Use optional chaining when a nested value may be absent, and avoid mutating shared data unexpectedly."], example: "const learners = [\n  { name: \"Ari\", score: 92 },\n  { name: \"Sam\", score: 76 },\n];\n\nconst passingNames = learners\n  .filter((learner) => learner.score >= 80)\n  .map((learner) => learner.name);\n\nconsole.log(passingNames); // [\"Ari\"]", quiz: { question: "Which array method transforms each item into a new value?", options: ["map()", "push()", "pop()"], answer: 0, explanation: "map() returns a new array containing the callback's result for each item." } },
      { section: "Extra practice", level: "Beginner", id: "dom", title: "DOM and events", summary: "Connect browser events to accessible interface updates.", content: ["The Document Object Model represents the page as nodes. Query elements with stable selectors, then update text or attributes rather than injecting untrusted HTML.", "Event listeners respond to user actions. Buttons already support keyboard activation, so prefer them over clickable generic containers."], example: "const button = document.querySelector(\"#add-item\");\nconst count = document.querySelector(\"#count\");\nlet total = 0;\n\nbutton?.addEventListener(\"click\", () => {\n  total += 1;\n  count.textContent = String(total);\n});", quiz: { question: "Which method attaches a handler for a browser event?", options: ["addEventListener()", "querySelectorAll()", "setAttribute()"], answer: 0, explanation: "addEventListener registers a callback for the chosen event type." } },
    ],
  },
  {
    id: "python",
    label: "Python",
    category: "Language",
    description: "Learn expressive syntax for automation, applications, and data.",
    docs: "https://docs.python.org/3/tutorial/",
    lessons: [
      ...pythonLessons,
      { section: "Extra practice", level: "Beginner", id: "values", title: "Values and variables", summary: "Work with basic types and give values clear names.", content: ["Python variables refer to values and do not require a separate type declaration. Common built-in types include int, float, str, bool, list, and dict.", "Use descriptive snake_case names. Convert input explicitly when you need a number, and remember that input() always returns text."], example: "name = input(\"Your name: \" )\nage = int(input(\"Your age: \"))\n\nprint(f\"Hello, {name}!\")\nprint(f\"Next year you will be {age + 1}.\")", quiz: { question: "What type does input() return?", options: ["str", "int", "bool"], answer: 0, explanation: "input() returns text; convert it when you need another type." } },
      { section: "Extra practice", level: "Beginner", id: "loops", title: "Collections and loops", summary: "Store groups of values and iterate over them clearly.", content: ["Lists preserve order and can be changed. Dictionaries map keys to values. Choose a collection based on how you need to access and update the data.", "A for loop iterates directly over items. Use enumerate() when you also need an index, and avoid modifying a collection while iterating over it."], example: "scores = [82, 95, 73]\n\nfor position, score in enumerate(scores, start=1):\n    print(f\"Learner {position}: {score}\")\n\naverage = sum(scores) / len(scores)\nprint(f\"Average: {average:.1f}\")", quiz: { question: "Which collection stores key-value pairs?", options: ["tuple", "dict", "set"], answer: 1, explanation: "A dict stores values under unique keys." } },
      { section: "Extra practice", level: "Beginner", id: "functions", title: "Functions and modules", summary: "Organize logic into reusable units with explicit inputs.", content: ["Define a function with def, name it clearly, and return a value when callers need a result. A docstring can explain purpose, inputs, and important behavior.", "Modules let you group related code and import it elsewhere. Keep side effects behind a main guard so importing a module does not unexpectedly run a script."], example: "def describe_temperature(celsius):\n    \"\"\"Return a readable temperature label.\"\"\"\n    return f\"{celsius:.1f}°C\"\n\n\nif __name__ == \"__main__\":\n    print(describe_temperature(21.5))", quiz: { question: "Which keyword begins a Python function definition?", options: ["function", "def", "fun"], answer: 1, explanation: "Python uses def to define a function." } },
    ],
  },
  {
    id: "java",
    label: "Java",
    category: "Language",
    description: "Explore strongly typed programming and object-oriented design.",
    docs: "https://dev.java/learn/",
    lessons: [
      ...javaLessons,
      { section: "Extra practice", level: "Beginner", id: "classes", title: "Classes and objects", summary: "Model data and behavior with types you define.", content: ["A class defines fields and methods; an object is an instance of that class. Keep fields private when possible and expose behavior through methods.", "Constructors establish an object's valid initial state. Use clear names and give each class one focused responsibility."], example: "class Book {\n    private final String title;\n\n    Book(String title) {\n        this.title = title;\n    }\n\n    String getTitle() {\n        return title;\n    }\n}", quiz: { question: "What does a class primarily define?", options: ["A blueprint for objects", "A running thread", "A package manager"], answer: 0, explanation: "A class describes the state and behavior of its instances." } },
      { section: "Extra practice", level: "Beginner", id: "types", title: "Types and control flow", summary: "Declare values with types and make decisions with branches.", content: ["Java is statically typed: variables have declared types checked by the compiler. Primitive types include int and boolean; reference types include String and arrays.", "Use if/else for conditional paths and loops for repetition. Braces make control-flow boundaries visible and help prevent accidental logic errors."], example: "int temperature = 18;\nString advice;\n\nif (temperature < 20) {\n    advice = \"Bring a light jacket\";\n} else {\n    advice = \"A t-shirt should be fine\";\n}\n\nSystem.out.println(advice);", quiz: { question: "Which type represents true or false in Java?", options: ["boolean", "String", "double"], answer: 0, explanation: "boolean is Java's primitive type for true/false values." } },
      { section: "Extra practice", level: "Beginner", id: "collections", title: "Collections and generics", summary: "Store groups of typed values with collection classes.", content: ["The Collections Framework includes structures such as List, Set, and Map. Pick one based on ordering, uniqueness, and lookup needs.", "Generics express the element type, such as List<String>. This helps the compiler catch incompatible values and reduces manual casting."], example: "import java.util.ArrayList;\nimport java.util.List;\n\nList<String> topics = new ArrayList<>();\ntopics.add(\"Classes\");\ntopics.add(\"Collections\");\n\nfor (String topic : topics) {\n    System.out.println(topic);\n}", quiz: { question: "What does List<String> communicate?", options: ["The list contains strings", "The list is immutable", "The list is sorted"], answer: 0, explanation: "The generic type parameter describes the list's element type." } },
    ],
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "Language",
    description: "Add static types to JavaScript for safer, clearer applications.",
    docs: "https://www.typescriptlang.org/docs/",
    lessons: [
      ...typescriptLessons,
    ],
  },
  {
    id: "react",
    label: "React",
    category: "UI Library",
    description: "Compose interactive interfaces from reusable components.",
    docs: "https://react.dev/learn",
    lessons: [...reactLessons, ...reactInstallationLessons, ...creatingReactAppLessons, ...scratchReactLessons, ...existingProjectLessons, ...reactSetupLessons, ...reactTypeScriptLessons, ...reactCompilerLessons, ...reactCompilerIntroLessons, ...reactCompilerInstallLessons, ...reactCompilerAdoptionLessons, ...reactCompilerDebugLessons, ...ticTacToeLessons, ...thinkingReactLessons],
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
