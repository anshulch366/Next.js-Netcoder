import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function stateTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use this pattern in a component and observe which value React remembers between renders." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "React ignores the component's state"] : [alternate, correct, "React ignores the component's state"],
      answer,
      explanation,
    })),
  };
}

export const stateMemoryLessons = chapter("Learn React · Adding Interactivity · State: A Component's Memory", [
  stateTopic("react-state-memory", "State: A Component's Memory", "Use component state to remember changing information and show it in the interface.", [
    "A component often needs to keep a value after an interaction: a selected tab, a draft field, or the current step in a flow. React calls this component-owned, changing information state.",
    "A state value survives later renders, and its setter asks React to render again with the next value. This makes state useful for information that affects what the user sees or what the component does next.",
  ], [
    "const [selectedTab, setSelectedTab] = useState('overview');",
    "const [draft, setDraft] = useState('');\nreturn <input value={draft} onChange={event => setDraft(event.target.value)} />;",
    "const [step, setStep] = useState(1);\nreturn <button onClick={() => setStep(value => value + 1)}>Step {step}</button>;",
  ], [
    ["What kind of information is a good fit for component state?", "A changing value the component needs to remember", "A constant that never changes and does not affect UI", 0, "State is for component data that can change over time and affect rendering."],
    ["What does a state setter request?", "A render using the next state value", "A change to the current local variable only", 0, "The setter tells React to store the next value and render with it."],
    ["Which value might be stored as state in a tab interface?", "The currently selected tab", "The source code line number", 0, "The selected tab changes through interaction and affects visible content."],
  ]),
  stateTopic("react-regular-variable-not-enough", "When a Regular Variable Isn't Enough", "See why local variables do not preserve changes or trigger a React update.", [
    "A local variable is created again when a component function runs. Changing it in an event handler does not ask React to render, so the screen may keep showing the earlier output.",
    "For a value that must survive renders and update the interface, use state. Regular variables are still useful for temporary calculations made while rendering, as long as they do not need to be remembered afterward.",
  ], [
    "function Counter() {\n  let count = 0; // starts over whenever Counter runs\n  function add() { count += 1; }\n  return <button onClick={add}>{count}</button>;\n}",
    "const [count, setCount] = useState(0);\nreturn <button onClick={() => setCount(count + 1)}>{count}</button>;",
    "const fullName = `${firstName} ${lastName}`; // temporary derived value",
  ], [
    ["Why doesn't changing a local variable reliably update displayed text?", "It neither survives a render nor asks React to render again", "All local variables are saved automatically by React", 0, "A local variable is reset when the function runs and is not a render trigger."],
    ["Which value should be state in a click counter?", "The count shown and changed after clicks", "A one-time arithmetic intermediate", 0, "The visible count must persist and update when the user clicks."],
    ["When is a regular variable useful during rendering?", "For a temporary value calculated from current inputs", "For a value that must persist after every render", 0, "Temporary derived values can be recalculated from current props and state."],
  ]),
  stateTopic("react-adding-state-variable", "Adding a State Variable", "Import useState, provide an initial value, and update it with its setter.", [
    "Import useState from React and call it at the top level of a component. Its initial value represents the starting state for that component instance.",
    "Destructure the returned pair into the current value and a setter. When an event calls the setter, React stores the next state and schedules a render that uses it.",
  ], [
    "import { useState } from 'react';\nconst [page, setPage] = useState(0);",
    "function Likes() {\n  const [likes, setLikes] = useState(0);\n  return <button onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>;\n}",
    "function SearchBox() {\n  const [query, setQuery] = useState('');\n  return <input value={query} onChange={event => setQuery(event.target.value)} />;\n}",
  ], [
    ["What does the initial argument to useState(0) represent?", "The value to use when this state begins", "The maximum value the state can reach", 0, "The argument initializes the state for the component instance."],
    ["Which name usually represents the setter for a state variable named page?", "setPage", "update_page_now", 0, "The common convention is set followed by the state name."],
    ["What should happen when a user changes the search input?", "The handler should pass the new text to the setter", "React should mutate the JSX attribute directly", 0, "The setter stores the new value and lets React render it."],
  ]),
  stateTopic("react-meet-your-first-hook", "Meet Your First Hook", "Recognize Hooks and follow the rules for calling them.", [
    "React functions whose names begin with use are Hooks. They let a function component use React features; useState is the Hook used to keep state.",
    "Call Hooks at the top level of a component or another Hook, in the same order on each render. Do not call them inside a condition, loop, event handler, or nested helper function.",
  ], [
    "function Panel() {\n  const [open, setOpen] = useState(false);\n  return <button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</button>;\n}",
    "function Profile() {\n  const [name, setName] = useState('Avi');\n  const [editing, setEditing] = useState(false);\n  return <p>{editing ? name : 'Profile'}</p>;\n}",
    "function usePanelState() {\n  const [open, setOpen] = useState(false);\n  return { open, setOpen };\n}",
  ], [
    ["How can you recognize a Hook by convention?", "Its name starts with use", "It is written only in uppercase", 0, "Built-in and custom Hook names start with use."],
    ["Where may useState be called?", "At the top level of a component or custom Hook", "Inside a click handler after the user clicks", 0, "React expects Hook calls to happen consistently while rendering."],
    ["Why must Hook calls remain in the same order?", "React associates Hook state with their call order", "It makes CSS selectors shorter", 0, "Consistent order lets React match each Hook call to its stored value."],
  ]),
  stateTopic("react-anatomy-of-usestate", "Anatomy of useState", "Understand the initial value, current state, and setter returned by useState.", [
    "The useState call returns two values: the current state and a setter function. Array destructuring assigns these to readable names, commonly a value name and its set-prefixed partner.",
    "The initial value is used when the component instance first needs that state. On later renders, React provides the latest stored value together with the same setter, rather than resetting it to the initial value.",
  ], [
    "const [volume, setVolume] = useState(5);",
    "const [isMuted, setIsMuted] = useState(false);\nsetIsMuted(true);",
    "const [profile, setProfile] = useState({ name: 'Noor', city: 'Jaipur' });",
  ], [
    ["What does the first value from useState represent?", "The current state value", "The setter function", 0, "The first item is the state value for the current render."],
    ["What does the second value represent?", "A function used to request a state update", "The initial state copied as text", 0, "The setter updates the state and schedules rendering."],
    ["Does useState(initialValue) replace state with initialValue on every render?", "No, the initial value is for initializing that state", "Yes, state resets on every render", 0, "React remembers the state for the component instance after initialization."],
  ]),
  stateTopic("react-multiple-state-variables", "Giving a Component Multiple State Variables", "Choose separate or grouped state values based on how the data relates.", [
    "A component can call useState more than once. Separate state variables work well for values that change independently, such as an active slide and whether its caption is open.",
    "When several fields form one closely related record or are routinely updated together, a single object state can be easier to manage. Whichever shape you choose, call each Hook at the top level and keep the structure understandable.",
  ], [
    "const [slide, setSlide] = useState(0);\nconst [showCaption, setShowCaption] = useState(true);",
    "const [form, setForm] = useState({ email: '', subscribed: false });",
    "const [filter, setFilter] = useState('all');\nconst [sortOrder, setSortOrder] = useState('newest');\nconst [page, setPage] = useState(1);",
  ], [
    ["When are separate state variables often clear?", "When the values have independent meanings and updates", "When every value is the same string", 0, "Separate variables make unrelated values easier to reason about."],
    ["When might an object state be useful?", "When several related fields belong to one record", "Whenever state contains a boolean", 0, "Related data that changes together can be represented as one object."],
    ["Where should multiple useState calls appear?", "Together at the top level of the component", "Inside different conditional branches", 0, "Top-level calls preserve Hook ordering across renders."],
  ]),
  stateTopic("react-state-isolated-private", "State Is Isolated and Private", "See how each rendered component instance owns its own local state.", [
    "State belongs to a particular component instance on the screen. Rendering the same component twice creates two independent state values, so updating one instance does not automatically change the other.",
    "A parent cannot directly edit a child's private state. If several components need one shared value, move that state to their nearest common parent and pass values and callbacks down as props; that pattern is covered in a later lesson.",
  ], [
    "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n\nfunction Page() { return <><Counter /><Counter /></>; }",
    "<ProfileCard profile={firstProfile} />\n<ProfileCard profile={secondProfile} />",
    "function Page() {\n  const [activeId, setActiveId] = useState('a');\n  return <Menu activeId={activeId} onSelect={setActiveId} />;\n}",
  ], [
    ["What happens when a Counter component is rendered twice?", "Each instance gets its own state", "Both instances automatically share one count", 0, "State is local to each component instance."],
    ["Can a parent directly change a child's private state variable?", "No, it should communicate through props and callbacks", "Yes, by assigning to the child's local variable", 0, "A parent communicates with children through their public props."],
    ["Where can shared state live when multiple children need it?", "In their closest common parent", "In a separate copy in every child", 0, "A common owner can keep one value and pass it to each child."],
  ]),
  stateTopic("react-state-memory-recap", "Recap", "Summarize why React state is different from a regular variable.", [
    "Use state for a value that must be remembered between renders and can affect the UI. useState provides the current value and a setter that requests an update.",
    "Hooks must be called at the top level. A component may own multiple state values, and each instance keeps its own private state unless a shared parent owns the value and passes it down.",
  ], [
    "const [step, setStep] = useState(0);",
    "function next() { setStep(current => current + 1); }",
    "// Two rendered instances have separate local state unless their parent owns a shared value.",
  ], [
    ["What should you use for information that must survive a re-render?", "React state", "A local variable that is recreated each time", 0, "React state is preserved for the component instance across renders."],
    ["What does the setter do?", "Requests a state change and a render with the next value", "Changes the JSX source code", 0, "The setter updates React's stored state and schedules a render."],
    ["What is true of two independent instances of one component?", "Each has its own local state", "They share state automatically", 0, "State belongs to each rendered component instance."],
  ]),
  stateTopic("react-state-memory-challenges", "Challenges", "Practice fixing local state, boundary handling, and controlled input behavior.", [
    "Challenge 1: A gallery's Next button changes a local index variable but the displayed item stays the same. Replace the local value with state, then prevent the index from moving beyond the available items and add a safe Previous action.",
    "Challenge 2: A text field looks controlled but cannot be edited. Check that its onChange handler stores event.target.value. Challenge 3: A component crashes after selecting the last entry; guard the boundary or disable the unavailable control.",
  ], [
    "const [index, setIndex] = useState(0);\nconst canGoNext = index < pictures.length - 1;",
    "<input value={email} onChange={event => setEmail(event.target.value)} />",
    "<button disabled={index === 0} onClick={() => setIndex(value => value - 1)}>Previous</button>",
  ], [
    ["What fixes a counter that changes a local variable but never updates the screen?", "Store the count with useState and call its setter", "Add another local variable", 0, "State persists and its setter tells React to render again."],
    ["What lets a controlled input accept edits?", "An onChange handler that updates its state value", "A fixed value prop without a handler", 0, "Updating state in onChange keeps the displayed value in sync with typing."],
    ["How can a gallery avoid moving past its final item?", "Check the boundary or disable Next when no item remains", "Always increment the index without checking", 0, "A boundary guard prevents indexing beyond the available data."],
  ]),
]);
