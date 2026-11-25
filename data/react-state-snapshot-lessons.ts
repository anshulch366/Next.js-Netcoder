import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function snapshotTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace which render supplied each value, then predict what the next render will display." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "The state value changes in every closure instantly"] : [alternate, correct, "The state value changes in every closure instantly"],
      answer,
      explanation,
    })),
  };
}

export const stateSnapshotLessons = chapter("Learn React · Adding Interactivity · State as a Snapshot", [
  snapshotTopic("react-state-as-snapshot", "State as a Snapshot", "Understand why each render and its handlers keep the state values supplied to that render.", [
    "State can look like a regular variable, but it is stored by React between renders. A component receives the current state values when React calls it; setting state requests another render rather than changing variables in the currently running function.",
    "The JSX returned from a render includes handlers that close over that render's props, state, and local values. Even if a callback runs later, it still reads the snapshot from the render that created it.",
  ], [
    "function Status() {\n  const [sent, setSent] = useState(false);\n  return sent ? <p>Sent</p> : <button onClick={() => setSent(true)}>Send</button>;\n}",
    "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}",
    "function Greeting({ name }) {\n  return <button onClick={() => alert(`Hi, ${name}`)}>Greet</button>;\n}",
  ], [
    ["What is a state snapshot?", "The state values supplied to a component for one render", "A live variable that changes inside every existing handler", 0, "Each render receives its own state values and creates handlers using them."],
    ["What does a state setter do to the running handler's state variable?", "It leaves that render's value unchanged and requests a later render", "It rewrites the variable immediately", 0, "The setter queues the next value; the current render remains a snapshot."],
    ["Which values can a handler close over?", "Props and state from the render that created it", "Only the latest values from all future renders", 0, "A handler retains the lexical values from the render where it was created."],
  ]),
  snapshotTopic("react-setting-state-triggers-renders", "Setting State Triggers Renders", "Use state updates to ask React to calculate and display a new UI.", [
    "An interaction does not directly rewrite the screen. A handler calls a state setter with the next value, and React queues work to call the component again using that value.",
    "The next render can return different JSX based on the updated state. For example, a form may replace its fields with a confirmation after submission; any external action such as sending data should be triggered deliberately by the handler too.",
  ], [
    "const [submitted, setSubmitted] = useState(false);\nreturn submitted ? <p>Thanks for joining.</p> : <button onClick={() => setSubmitted(true)}>Join</button>;",
    "function handleSelect(id) {\n  setSelectedId(id);\n}",
    "function handleSubmit(event) {\n  event.preventDefault();\n  sendDraft(message);\n  setSent(true);\n}",
  ], [
    ["What tells React to render with a new state value?", "Calling the state's setter", "Changing a local variable", 0, "A setter queues a state update that can produce a new render."],
    ["Does a click directly edit the visible JSX already on the page?", "No, it requests an update that React renders and commits", "Yes, event handlers rewrite JSX source", 0, "React calculates and applies the next UI after a state update."],
    ["Where should an action like sending a form request be started?", "In the submit handler", "During every component render", 0, "The handler runs because the user submitted the form."],
  ]),
  snapshotTopic("react-rendering-snapshot-in-time", "Rendering Takes a Snapshot in Time", "Connect a component call, its returned JSX, and the handlers attached to that render.", [
    "Each time React renders a component, the function runs with the current inputs and returns a new UI description. The event handlers in that description are new functions formed with the values from that same render.",
    "React updates the screen to match the returned description and connects its event handlers. A later render creates a fresh snapshot; handlers from an earlier render do not silently change to use the newer values.",
  ], [
    "function Greeting({ name }) {\n  return <button onClick={() => alert(name)}>Show name</button>;\n}\n// The handler closes over this render's name prop.",
    "const [mode, setMode] = useState('basic');\nconst label = mode === 'basic' ? 'Basic view' : 'Full view';\nreturn <button onClick={() => setMode('full')}>{label}</button>;",
    "function Counter({ count }) {\n  function handleClick() { console.log(count); }\n  return <button onClick={handleClick}>Inspect</button>;\n}",
  ], [
    ["What does a component return during a render?", "A UI description calculated from that render's inputs", "A permanent event handler shared by every render", 0, "The returned JSX and its handlers are based on current props and state."],
    ["What happens when React renders again with new state?", "The component creates a fresh UI snapshot and handlers", "Old handlers are rewritten to use new local variables", 0, "Each render call produces new closures based on its own values."],
    ["If a button handler closes over count equal to 2, what value does it read later?", "The value 2 from the render that created it", "Whatever count becomes in all future renders", 0, "Closures retain the value from their creation render."],
  ]),
  snapshotTopic("react-state-over-time", "State Over Time", "Predict immediate and delayed handler results using the render's captured values.", [
    "Calling setCount(count + 5) asks React to store a later value, but a following console log in the same handler still reads count from the current render. The state variable is not reassigned in that running function.",
    "A timer or promise callback created by a handler also closes over that render's values. If you need to use a value calculated at interaction time, capture it explicitly; if you need to update from the latest queued state, use a state updater function.",
  ], [
    "function handleAdd() {\n  setCount(count + 5);\n  console.log(count); // current render's value\n}",
    "function handleLater() {\n  const clickedAt = count;\n  setTimeout(() => console.log(clickedAt), 1000);\n}",
    "function handleIncrementTwice() {\n  setCount(value => value + 1);\n  setCount(value => value + 1);\n}",
  ], [
    ["If count is 4, what does console.log(count) after setCount(count + 5) read in that handler?", "4, the current render's value", "9, because the setter changes the running variable", 0, "The current handler retains the state snapshot where count was 4."],
    ["What does a timer callback usually retain from its creating handler?", "The values captured by that handler's render", "All future state values automatically", 0, "The callback closes over values from the render where it was created."],
    ["Which form updates twice using the queued previous value?", "setCount(value => value + 1) called twice", "setCount(count + 1) called twice in one snapshot", 0, "Updater functions receive the latest queued state in sequence."],
  ]),
  snapshotTopic("react-state-snapshot-recap", "Recap", "Review how React stores state and supplies a fixed snapshot to each render.", [
    "State setters queue a new value and request rendering. They do not rewrite the values already read by the current component call or its event handlers.",
    "Every render creates a UI snapshot with handlers that use that render's props and state. This remains true for delayed callbacks; use updater functions when a new state depends on the latest queued value.",
  ], [
    "// A setter requests the next render: setOpen(true)",
    "// The current handler still reads the snapshot: console.log(open)",
    "// A queued update can use the prior value: setCount(value => value + 1)",
  ], [
    ["Do existing event handlers change their captured state after a setter call?", "No, they keep the snapshot from their render", "Yes, every closure updates itself", 0, "A setter schedules future work but does not alter existing closures."],
    ["What creates a new set of handlers for the next UI?", "A new component render", "A CSS repaint by itself", 0, "React calls the component again and creates a new UI snapshot."],
    ["Which tool helps calculate from the latest queued state?", "An updater function", "A local variable from an earlier render", 0, "Updater functions receive the pending state value as their argument."],
  ]),
  snapshotTopic("react-state-snapshot-challenges", "Challenges", "Apply snapshot reasoning to a traffic light, counter, and delayed message.", [
    "Challenge 1: A crossing signal toggles between Walk and Wait. Add a message in the click handler describing the next signal, and decide what the message should read before and after the setter call.",
    "Challenge 2: A +3 button calls setCount(count + 1) three times. Explain its result, then use updater functions to queue three increments. Challenge 3: A delayed message should refer to the recipient and text captured when Send was pressed.",
  ], [
    "function handleToggle() {\n  alert(walk ? 'Wait is next' : 'Walk is next');\n  setWalk(!walk);\n}",
    "function addThree() {\n  setCount(value => value + 1);\n  setCount(value => value + 1);\n  setCount(value => value + 1);\n}",
    "function handleSend() {\n  const sentTo = recipient;\n  const sentText = draft;\n  setTimeout(() => deliver(sentTo, sentText), 1000);\n}",
  ], [
    ["Why does setCount(count + 1) repeated three times often add only one?", "Each call uses the same count snapshot", "React ignores all but the last button click", 0, "All three expressions read the same value from the current render."],
    ["How can a +3 action queue three increments?", "Call the setter with an updater function three times", "Call setCount(count + 3) three times", 0, "Each updater receives the result of the previously queued update."],
    ["What will a delayed callback use if it closes over recipient and draft?", "The values from the render that created the callback", "Whatever values are typed after the timeout starts", 0, "The callback retains the state snapshot from its creation render."],
  ]),
]);
