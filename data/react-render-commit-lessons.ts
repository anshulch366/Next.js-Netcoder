import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function renderTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace this step in the UI update and compare the component output with the page." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "React skips both rendering and the browser"] : [alternate, correct, "React skips both rendering and the browser"],
      answer,
      explanation,
    })),
  };
}

export const renderCommitLessons = chapter("Learn React · Adding Interactivity · Render and Commit", [
  renderTopic("react-render-and-commit", "Render and Commit", "Learn how React calculates the next interface and applies the needed changes.", [
    "A React screen update moves through three broad phases: an update is triggered, React renders components to calculate the UI, and React commits any necessary changes to the host environment such as the browser DOM.",
    "Rendering is a calculation, so components should produce consistent UI from their inputs without changing outside data. A render does not guarantee that every DOM node will be rewritten; React commits only the changes needed to match the latest result.",
  ], [
    "// Trigger: the app starts and asks React to render its root component.",
    "// Render: components calculate JSX from current props and state.",
    "// Commit: React applies required DOM changes; the browser then paints pixels.",
  ], [
    ["Which sequence describes a typical React screen update?", "Trigger, render, commit", "Commit, paint, then trigger", 0, "React first receives an update, calculates UI, and commits required changes."],
    ["What does rendering mean in this process?", "Calling components to calculate the next UI", "Painting pixels directly to the display", 0, "Rendering computes the UI description from component inputs."],
    ["Does every render replace all DOM nodes?", "No, React applies only the necessary changes", "Yes, the whole page is always rebuilt", 0, "React can leave DOM nodes alone when their rendered output has not changed."],
  ]),
  renderTopic("react-trigger-a-render", "Step 1: Trigger a Render", "Identify what causes React to begin calculating a UI update.", [
    "React performs an initial render when an app starts and asks it to display a root component. In a client-rendered app, a root is connected to a DOM container and receives the component tree to show.",
    "After the initial display, a state update can queue another render. Updates from an ancestor can also affect which child components need to be calculated, because their props or rendered position may change.",
  ], [
    "import { createRoot } from 'react-dom/client';\nconst root = createRoot(document.getElementById('app'));\nroot.render(<Library />);",
    "const [active, setActive] = useState(false);\n<button onClick={() => setActive(true)}>Activate</button>",
    "function Parent({ title }) {\n  return <Heading title={title} />;\n}\n// Updating Parent's inputs can lead to a child render with new props.",
  ], [
    ["What starts the initial client render in a simple React setup?", "Rendering the root component into its container", "Adding a CSS class to the body", 0, "The root render request tells React what component tree to display."],
    ["What does calling a state setter do?", "Queues an update that can trigger a render", "Directly edits the DOM text node", 0, "A state setter asks React to render with the next state value."],
    ["Can a parent's update affect the UI of its children?", "Yes, changed inputs can lead React to render child components", "No, child output can never depend on its parent", 0, "Children receive parent props and are part of the rendered tree."],
  ]),
  renderTopic("react-initial-render", "Initial Render", "Follow the first pass from the root component through its descendants.", [
    "On the first render, React starts with the root component. As components return nested components, React evaluates those descendants too until it has a description of the full interface.",
    "For a client-rendered page, React then creates and connects the needed host elements in the DOM. Frameworks may manage the root setup for you, but the same idea remains: React needs an initial UI description before it can display the app.",
  ], [
    "function App() { return <main><Title /><BookList /></main>; }",
    "function Title() { return <h1>Reading room</h1>; }",
    "// The root begins the first pass; nested components describe the rest of the screen.",
  ], [
    ["Which component begins the initial component evaluation?", "The root component", "The deepest button", 0, "React starts from the root and follows the nested component tree."],
    ["What happens when a component returns another component?", "React evaluates the returned child as part of the tree", "React ignores the child until a click", 0, "Rendering proceeds through nested components to calculate the interface."],
    ["What must React have before it can display a client-rendered UI?", "A description of the interface to render", "A screenshot of the finished page", 0, "React calculates the host UI from the component tree."],
  ]),
  renderTopic("react-rerenders-on-state-updates", "Re-renders When State Updates", "Understand how state changes request another component render.", [
    "After a component has appeared, calling its state setter queues an update. React later evaluates the component again using the new state snapshot so the calculated UI can reflect the change.",
    "A setter does not synchronously replace the variable in the running handler. React can group related updates and process them after the current event code finishes, then render the resulting state.",
  ], [
    "const [message, setMessage] = useState('Draft');\n<button onClick={() => setMessage('Published')}>Publish</button>",
    "const [score, setScore] = useState(0);\nsetScore(value => value + 1); // queues a new score",
    "const [expanded, setExpanded] = useState(false);\nreturn expanded ? <Details /> : <Summary />;",
  ], [
    ["What can a state update cause React to do?", "Render the component again with new state", "Re-run the entire browser application process", 0, "State updates queue a render so React can calculate the updated UI."],
    ["When is the next state value used by the component?", "In a later render", "By changing the running handler's local snapshot", 0, "The current render's values remain fixed while React prepares the next render."],
    ["What might change after a state update?", "The component's calculated output", "The component's source code", 0, "Updated state can produce different JSX on the next render."],
  ]),
  renderTopic("react-renders-components", "Step 2: React Renders Your Components", "Keep component rendering a pure calculation of the next interface.", [
    "During rendering, React calls component functions to learn what the UI should look like for current props and state. This work can continue through descendants returned by those components.",
    "A component should return the same UI when given the same inputs and should not mutate values from earlier renders. Keeping render pure lets React repeat or pause calculations safely; development Strict Mode may call components extra times to reveal impure logic.",
  ], [
    "function Status({ ready }) {\n  return <p>{ready ? 'Ready' : 'Loading'}</p>;\n}",
    "function Cards({ items }) {\n  const sorted = [...items].sort((a, b) => a.rank - b.rank);\n  return sorted.map(item => <Card key={item.id} item={item} />);\n}",
    "function Price({ amount }) {\n  return <strong>${amount.toFixed(2)}</strong>;\n}\n// Same amount produces the same UI description.",
  ], [
    ["What does React do during the render phase?", "Calls components to calculate UI", "Updates every DOM node immediately", 0, "The render phase determines the next UI description."],
    ["What makes a component render calculation predictable?", "Same inputs produce the same output without changing shared data", "It edits props before returning", 0, "Pure rendering avoids side effects and mutation."],
    ["Why might development Strict Mode repeat rendering work?", "To help reveal mistakes such as impure render logic", "To make the production page render twice", 0, "Extra development checks can surface unsafe side effects in render."],
  ]),
  renderTopic("react-commit-to-dom", "Step 3: React Commits Changes to the DOM", "Learn when React applies differences between the previous and next UI.", [
    "Once React has calculated the next UI, it commits the changes needed to bring the host environment in line with that result. On an initial client render this includes creating and attaching DOM elements.",
    "For a later render, React compares the new result with the previous one and applies relevant differences. If an input remains in the same place with the same props, React can leave its DOM node and typed value untouched while updating another part of the page.",
  ], [
    "// First commit: attach the heading and list elements to the root container.",
    "// Later commit: update a changed heading while preserving an unchanged input.",
    "function Clock({ label }) {\n  return <><h2>{label}</h2><input /></>;\n}",
  ], [
    ["What is the commit phase responsible for?", "Applying required changes to the DOM or other host UI", "Calculating which component function to call first", 0, "Commit applies the differences React determined during rendering."],
    ["If one part changes and another stays the same, what can React do?", "Update the changed part and leave the unchanged node alone", "Replace the entire document every time", 0, "React can minimize host updates to what actually changed."],
    ["Why can text typed into an unchanged input remain there after a parent update?", "React can preserve the same input DOM node", "React stores every typed character in the page title", 0, "If the input remains in the same position with the same props, React need not replace it."],
  ]),
  renderTopic("react-browser-paint", "Epilogue: Browser Paint", "Distinguish React's DOM commit from the browser drawing the visible frame.", [
    "After React commits host changes, the browser handles layout and paints the visible result. Painting is the browser's work of drawing pixels; it is separate from React calling components and calculating JSX.",
    "This distinction helps when investigating a visual update: React may have calculated and committed correctly, while the browser still needs to perform its display work. Avoid treating the phrase browser rendering as the same step as React component rendering.",
  ], [
    "// React render: calculate the next element description.",
    "// React commit: apply required DOM updates.",
    "// Browser paint: draw the updated screen for the user.",
  ], [
    ["Which step draws the updated pixels on screen?", "Browser paint", "React calling the component function", 0, "The browser paints after the host UI has been updated."],
    ["Does React component rendering itself draw pixels?", "No, it calculates the UI description", "Yes, it is exactly the browser paint step", 0, "React rendering and browser painting are separate parts of the update process."],
    ["What usually happens before the browser paints a React update?", "React commits the required host changes", "React deletes all component state", 0, "The DOM needs to reflect the committed UI before the browser paints it."],
  ]),
  renderTopic("react-render-commit-recap", "Recap", "Summarize the trigger, render, commit, and paint stages of an update.", [
    "A React UI update begins with a trigger such as the initial root render or a state update. React then calls components to calculate the next interface and commits any differences to the DOM.",
    "The browser paints after the DOM changes. Rendering should stay pure, and a render does not mean that all DOM nodes will be changed; unchanged output can remain in place.",
  ], [
    "// Trigger: setOpen(true)",
    "// Render: calculate <Details /> from the new state.",
    "// Commit and paint: apply needed DOM changes, then display the frame.",
  ], [
    ["Which phase calculates component output?", "Render", "Commit", 0, "React calls components during render to calculate the UI."],
    ["Which phase applies host changes?", "Commit", "Trigger", 0, "Commit applies the required DOM updates."],
    ["What should a component avoid doing during render?", "Mutating shared data or performing side effects", "Returning JSX from its inputs", 0, "Render should be a predictable calculation of UI."],
  ]),
]);
