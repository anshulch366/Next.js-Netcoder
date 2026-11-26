import { sqlLessons } from "./sql-lessons";
import { gitLessons } from "./git-lessons";

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
import { cLessons } from "./c-lessons";
import { awsLessons } from "./aws-lessons";
import { typescriptLessons } from "./typescript-lessons";
import { reactLessons, ticTacToeLessons, thinkingReactLessons, reactInstallationLessons, creatingReactAppLessons, scratchReactLessons, existingProjectLessons, reactSetupLessons, reactTypeScriptLessons, reactCompilerLessons, reactCompilerIntroLessons, reactCompilerInstallLessons, reactCompilerAdoptionLessons, reactCompilerDebugLessons, describingUiLessons, firstComponentLessons, componentModulesLessons, jsxLessons, jsxCurlyLessons, propsLessons, conditionalLessons, renderingListsLessons, pureComponentsLessons, uiTreeLessons } from "./react-lessons";
import { addingInteractivityLessons } from "./react-interactivity-lessons";
import { respondingToEventsLessons } from "./react-event-lessons";
import { stateMemoryLessons } from "./react-state-memory-lessons";
import { renderCommitLessons } from "./react-render-commit-lessons";
import { stateSnapshotLessons } from "./react-state-snapshot-lessons";
import { queueUpdatesLessons } from "./react-queue-updates-lessons";
import { objectStateLessons } from "./react-object-state-lessons";
import { arrayStateLessons } from "./react-array-state-lessons";
import { managingStateLessons } from "./react-managing-state-lessons";
import { reactingToInputLessons } from "./react-input-state-lessons";
import { stateStructureLessons } from "./react-state-structure-lessons";
import { sharingStateLessons } from "./react-sharing-state-lessons";
import { preservingStateLessons } from "./react-preserving-state-lessons";
import { reducerLessons } from "./react-reducer-lessons";
import { contextLessons } from "./react-context-lessons";
import { reducerContextScaleLessons } from "./react-reducer-context-scale-lessons";
import { escapeHatchesLessons } from "./react-escape-hatches-lessons";
import { refsLessons } from "./react-refs-lessons";
import { domRefsLessons } from "./react-dom-refs-lessons";
import { effectsLessons } from "./react-effects-lessons";
import { noEffectLessons } from "./react-no-effect-lessons";
import { effectLifecycleLessons } from "./react-effect-lifecycle-lessons";
import { separatingEventsEffectsLessons } from "./react-separating-events-effects-lessons";
import { removeEffectDependencyLessons } from "./react-remove-effect-dependencies-lessons";
import { customHookLessons } from "./react-custom-hooks-lessons";

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
    id: "c",
    label: "C",
    category: "Language",
    description: "Learn C from first program and core syntax to pointers, memory, files, and data structures.",
    docs: "https://en.cppreference.com/w/c",
    lessons: cLessons,
  },
  {
    id: "aws",
    label: "AWS",
    category: "Cloud Computing",
    description: "Learn cloud concepts, AWS services, security, architecture, migration, and cost management.",
    docs: "https://docs.aws.amazon.com/",
    lessons: awsLessons,
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
    lessons: [...reactLessons, ...reactInstallationLessons, ...creatingReactAppLessons, ...scratchReactLessons, ...existingProjectLessons, ...reactSetupLessons, ...reactTypeScriptLessons, ...reactCompilerLessons, ...reactCompilerIntroLessons, ...reactCompilerInstallLessons, ...reactCompilerAdoptionLessons, ...reactCompilerDebugLessons, ...describingUiLessons, ...firstComponentLessons, ...componentModulesLessons, ...jsxLessons, ...jsxCurlyLessons, ...propsLessons, ...conditionalLessons, ...renderingListsLessons, ...pureComponentsLessons, ...uiTreeLessons, ...addingInteractivityLessons.filter(lesson => lesson.id !== "react-responding-to-events" && lesson.id !== "react-state-memory" && lesson.id !== "react-render-and-commit" && lesson.id !== "react-state-as-snapshot" && lesson.id !== "react-queue-state-updates" && lesson.id !== "react-updating-objects-in-state" && lesson.id !== "react-updating-arrays-in-state" && lesson.id !== "react-reacting-to-input-with-state"), ...respondingToEventsLessons, ...stateMemoryLessons, ...renderCommitLessons, ...stateSnapshotLessons, ...queueUpdatesLessons, ...objectStateLessons, ...arrayStateLessons, ...managingStateLessons.filter(lesson => lesson.id !== "react-choosing-state-structure" && lesson.id !== "react-sharing-state-between-components" && lesson.id !== "react-preserving-and-resetting-state" && lesson.id !== "react-extracting-state-logic-reducer" && lesson.id !== "react-passing-data-deeply-context" && lesson.id !== "react-scaling-up-reducer-context" && lesson.id !== "react-escape-hatches"), ...reactingToInputLessons, ...stateStructureLessons, ...sharingStateLessons, ...preservingStateLessons, ...reducerLessons, ...contextLessons, ...reducerContextScaleLessons, ...escapeHatchesLessons.filter(lesson => lesson.id !== "react-referencing-values-with-refs" && lesson.id !== "react-manipulating-dom-with-refs" && lesson.id !== "react-synchronizing-with-effects" && lesson.id !== "react-you-might-not-need-an-effect" && lesson.id !== "react-lifecycle-of-reactive-effects" && lesson.id !== "react-reusing-logic-with-custom-hooks"), ...refsLessons, ...domRefsLessons, ...effectsLessons.filter(lesson => lesson.id !== "react-lifecycle-of-reactive-effects" && lesson.id !== "react-separating-events-from-effects" && lesson.id !== "react-removing-effect-dependencies"), ...noEffectLessons, ...effectLifecycleLessons, ...separatingEventsEffectsLessons, ...removeEffectDependencyLessons, ...customHookLessons, ...ticTacToeLessons, ...thinkingReactLessons],
  },
  {
    id: "sql",
    label: "SQL",
    category: "Database",
    description: "Query, filter, combine, and summarize relational data.",
    docs: "https://www.sqlite.org/lang.html",
    lessons: sqlLessons,
  },
  {
    id: "git",
    label: "Git",
    category: "Workflow",
    description: "Track changes and collaborate confidently with version control.",
    docs: "https://git-scm.com/doc",
    lessons: gitLessons,
  },
];

const allLearningLanguages: LearningLanguage[] = [...coreLearningLanguages, ...extendedLearningLanguages];

// Keep one navigation entry per subject. Prefer the first definition, which
// lets core subjects stay canonical while newer extended resources take precedence
// over older duplicates that may still be present in the extended catalog.
export const learningLanguages: LearningLanguage[] = allLearningLanguages.filter(
  (subject, index, all) => all.findIndex((candidate) => candidate.id === subject.id) === index,
);
