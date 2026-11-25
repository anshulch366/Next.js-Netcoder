import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function refsTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Check whether this value affects rendering; choose a ref for retained non-visual data and state for visible UI." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Read or write the ref during every render"] : [alternate, correct, "Read or write the ref during every render"],
      answer,
      explanation,
    })),
  };
}

export const refsLessons = chapter("Learn React · Escape Hatches · Referencing Values with Refs", [
  refsTopic("react-referencing-values-with-refs", "Referencing Values with Refs", "Use refs to retain values between renders when changing them should not update the interface.", [
    "A ref is an object with a current property. React keeps the same ref object between renders, and event handlers or Effects can update current without asking React to render again.",
    "Use state when a value determines what appears on screen. Use a ref for values such as a timer ID or a mutable counter used only by event logic. Refs are an escape hatch and should not become the main way UI data flows through an app.",
  ], [
    "const timerRef = useRef(null);",
    "timerRef.current = window.setTimeout(run, 300);",
    "const [count, setCount] = useState(0); // visible values belong in state",
  ], [
    ["What does useRef return?", "A retained object with a current property", "A setter that always triggers a render", 0, "useRef returns an object whose current value persists between renders."],
    ["What happens when ref.current changes?", "React does not render again because of that change", "React always renders immediately", 0, "Changing a ref does not notify React to render."],
    ["When should a displayed counter use state?", "When the count is shown in the interface", "When it is only a timer ID", 0, "State updates cause a render so visible output can reflect the new count."],
  ]),
  refsTopic("react-adding-a-ref-to-your-component", "Adding a Ref to Your Component", "Create a ref with useRef and read or update its current value from event logic.", [
    "Import useRef from React and call it at the top level of your component with an initial value. React returns an object shaped like { current: initialValue } and preserves that object for the component instance.",
    "The current property is mutable. You can store numbers, objects, functions, or browser handles there. Since React does not track changes to current, do not depend on it to refresh rendered output.",
  ], [
    "import { useRef } from 'react';\nconst clickRef = useRef(0);",
    "function handleClick() { clickRef.current += 1; console.log(clickRef.current); }",
    "const latestTaskRef = useRef(null);\nlatestTaskRef.current = task; // update from an event or Effect",
  ], [
    ["Where should useRef be called?", "At the top level of a component or custom Hook", "Inside a click handler each time it runs", 0, "Hooks must be called consistently at the top level."],
    ["How do you read the stored ref value?", "Through ref.current", "Through ref.value", 0, "The ref object's mutable field is named current."],
    ["What kind of values can a ref hold?", "Any JavaScript value", "Only DOM elements", 0, "Refs can store values such as IDs, objects, or DOM nodes."],
  ]),
  refsTopic("react-stopwatch-with-refs", "Example: Building a Stopwatch", "Combine state for the displayed time with a ref for the interval identifier.", [
    "A stopwatch needs visible time values, so start time and current time belong in state. Updating them asks React to render the latest elapsed time.",
    "The interval identifier is needed to stop the timer but does not appear in the UI, so keep it in a ref. Clear any existing interval before starting another, and clear it when stopping so multiple timers do not run at once.",
  ], [
    "const [start, setStart] = useState(null);\nconst [now, setNow] = useState(null);",
    "const intervalRef = useRef(null);\nintervalRef.current = setInterval(() => setNow(Date.now()), 100);",
    "function handleStop() { clearInterval(intervalRef.current); intervalRef.current = null; }",
  ], [
    ["Which stopwatch values should use state?", "Start/current timestamps used to display elapsed time", "The interval handle only", 0, "Visible time should be in state so updates render the screen."],
    ["Where should the interval ID be stored?", "In a ref", "In rendered text state", 0, "The ID is needed by event logic but does not itself affect the display."],
    ["Why clear an existing interval before starting another?", "To avoid multiple timers updating at once", "To force React to discard all state", 0, "Only one active interval should drive a single stopwatch."],
  ]),
  refsTopic("react-differences-between-refs-and-state", "Differences Between Refs and State", "Choose state for rendered information and refs for retained values that do not drive rendering.", [
    "Both refs and state persist between renders. State is updated with a setter and schedules a render; refs expose a mutable current property and do not schedule one.",
    "State is the reliable source for output because each render sees its state snapshot. Reading or changing a ref during rendering is usually unpredictable; use state whenever the interface needs to reflect a value change.",
  ], [
    "const [count, setCount] = useState(0); // button label updates after setCount",
    "const countRef = useRef(0); // useful to retain a value without rendering",
    "return <button onClick={() => setCount(value => value + 1)}>{count}</button>;",
  ], [
    ["Which update triggers a render?", "Calling the state setter", "Assigning to ref.current", 0, "State setters tell React to render with the updated state."],
    ["What is a ref's current property?", "Mutable", "An immutable render snapshot", 0, "A ref is a regular object whose current property can be changed."],
    ["Why is state a better fit for a visible count?", "State updates cause the UI to render again", "Refs cannot store numbers", 0, "The screen needs a render to show the latest count."],
  ]),
  refsTopic("react-when-to-use-refs", "When to Use Refs", "Use refs for browser handles, timer IDs, DOM nodes, and other values not needed to calculate JSX.", [
    "A ref is appropriate when a component must coordinate with a browser API or another imperative system, such as focusing a node or cancelling a timeout.",
    "If the value is required to calculate JSX, store it in state or derive it from existing props and state. Refs should remain a small bridge to imperative work rather than a hidden alternative state system.",
  ], [
    "const timeoutRef = useRef(null); // cancel a delayed action",
    "const inputRef = useRef(null); // focus a DOM input",
    "const isConnectedRef = useRef(false); // bookkeeping not shown in JSX",
  ], [
    ["Which value is a good ref candidate?", "A timeout ID used to cancel a timeout", "A label that must update visibly after each click", 0, "The timeout ID is used by logic but is not rendered."],
    ["What is an appropriate DOM-ref task?", "Focus an input programmatically", "Store a heading's text so React can render it", 0, "Refs can provide a DOM node for browser operations such as focus."],
    ["What should you use for a value needed in JSX?", "State or a value derived during render", "A ref that changes without rendering", 0, "The UI must receive a render to display an updated value."],
  ]),
  refsTopic("react-best-practices-for-refs", "Best Practices for Refs", "Keep refs as a focused escape hatch and avoid accessing current during rendering.", [
    "Treat refs as a bridge to external systems and browser APIs. If most application data flow depends on refs, reconsider whether state, props, or context would make updates clearer.",
    "Do not read or write ref.current during rendering because React does not know when it changes. Access refs from event handlers or Effects; a one-time initialization guard is a narrow exception for creating an object once.",
  ], [
    "function handleClick() { ref.current = nextValue; } // event logic",
    "useEffect(() => { widgetRef.current?.update(value); }, [value]);",
    "// Avoid: const visibleValue = ref.current; during render",
  ], [
    ["Where should refs usually be read or changed?", "In event handlers or Effects", "As changing inputs during every render", 0, "Refs are not reactive and are intended for imperative code."],
    ["Why avoid reading ref.current during render?", "React cannot track when it changes", "Refs cannot contain values", 0, "Untracked reads can make rendered output inconsistent."],
    ["What is a warning sign that refs are overused?", "Most UI data flow relies on mutable refs", "One timer ID is held in a ref", 0, "Refs should not replace the normal state and props model."],
  ]),
  refsTopic("react-refs-and-the-dom", "Refs and the DOM", "Attach a ref to a JSX element to access its DOM node after React renders it.", [
    "Pass a ref object to an element's ref attribute. React assigns the DOM node to current after the element is mounted, making focused imperative operations possible.",
    "When the node is removed, React resets current to null. Account for that possibility with optional checks, and avoid directly changing DOM content that React is responsible for rendering.",
  ], [
    "const inputRef = useRef(null);\nreturn <input ref={inputRef} />;",
    "inputRef.current?.focus();",
    "// After the referenced element is removed, inputRef.current becomes null.",
  ], [
    ["What does React put in a DOM ref after mounting?", "The corresponding DOM element", "The component's props object", 0, "React assigns the rendered node to the ref's current property."],
    ["What can ref.current become after the element is removed?", "null", "The previous DOM node forever", 0, "React clears the ref when the referenced node leaves the DOM."],
    ["How should a DOM ref be used?", "For focused imperative actions such as focus or measure", "To replace React's rendering of all page content", 0, "Refs are best for specific operations React does not express declaratively."],
  ]),
  refsTopic("react-referencing-values-with-refs-recap", "Recap", "Review when a ref is useful and how it differs from state.", [
    "A ref is a retained object with a mutable current property. Updating it does not render the component again, so it is suitable for values that do not affect JSX.",
    "Use state for rendered values, and use refs sparingly for imperative tasks such as timer handles and DOM access. Avoid reading or writing current during normal rendering.",
  ], [
    "const ref = useRef(initialValue);",
    "ref.current = timerId; // retained without a render",
    "const [value, setValue] = useState(initialValue); // rendered state",
  ], [
    ["What does a ref retain?", "A mutable current value across renders", "A value that always renders when changed", 0, "React keeps the ref object but does not render on current changes."],
    ["What should hold information shown in the interface?", "State", "A ref alone", 0, "State updates let React refresh visible output."],
    ["What is one common ref use?", "Keeping a timer ID or DOM node reference", "Deriving every displayed value", 0, "Refs are useful for non-rendering data and imperative DOM access."],
  ]),
  refsTopic("react-referencing-values-with-refs-challenges", "Challenges", "Practice fixing timer cancellation, visible counters, and debounced actions with refs and state.", [
    "Challenge 1: A delayed Send action cannot be cancelled because its timeout ID is stored in a local variable that resets on render. Keep the ID in a ref and clear it from Undo.",
    "Challenge 2: A button's visible count does not update because it uses a ref. Move the count to state. Challenge 3: A debounce timer should be cancelled before scheduling a replacement; store its ID in a ref and clear it during cleanup when appropriate.",
  ], [
    "const timeoutRef = useRef(null);\nfunction handleSend() { timeoutRef.current = setTimeout(send, 3000); }",
    "function handleUndo() { clearTimeout(timeoutRef.current); }",
    "const [count, setCount] = useState(0); // visible counter",
  ], [
    ["Why can a local timeout variable fail across renders?", "A new local variable is created on each render", "Timeout IDs cannot be stored in JavaScript", 0, "A ref preserves the same container between renders."],
    ["How should an Undo action cancel the pending timeout?", "Clear the timeout ID saved in a ref", "Change a ref and expect React to render it away", 0, "The ref retains the timer handle so clearTimeout can cancel it."],
    ["What should power a visible click count?", "State", "A ref only", 0, "The count must trigger a render to update the button label."],
  ]),
]);
