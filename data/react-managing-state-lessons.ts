import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function managingTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use this pattern to keep component state and the displayed interface consistent." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Duplicate the same value in every component"] : [alternate, correct, "Duplicate the same value in every component"],
      answer,
      explanation,
    })),
  };
}

export const managingStateLessons = chapter("Learn React · Managing State", [
  managingTopic("react-managing-state", "Managing State", "Organize changing data so an expanding React interface stays predictable.", [
    "As an interface grows, state decisions affect more than one component. Decide which values truly need to be stored, which component owns them, and how updates should move through the tree.",
    "A reliable design avoids duplicate facts, keeps related state changes understandable, and shares data only with the components that need it. Reducers and context can help as update logic or component depth grows.",
  ], [
    "const [status, setStatus] = useState('editing');",
    "const fullName = `${firstName} ${lastName}`; // derive instead of storing twice",
    "// A parent can own shared state and pass values and callbacks to children.",
  ], [
    ["What is a useful first question when designing state?", "Which changing values must the UI remember?", "How many state variables can be added for every element?", 0, "Start with the changing information the interface actually needs."],
    ["Why avoid storing the same fact in multiple state variables?", "The copies can fall out of sync", "React cannot render strings", 0, "Duplicate state creates extra update paths and inconsistency risks."],
    ["What can help as state logic and component depth grow?", "Reducers and context, when they solve a real need", "More unrelated copies in each child", 0, "These tools can organize complex transitions and share values through a tree."],
  ]),
  managingTopic("react-reacting-to-input-with-state", "Reacting to Input with State", "Describe interface states and switch between them in response to user input.", [
    "Instead of issuing commands to manually show or hide individual elements, store the meaningful state of the interaction and describe what the UI looks like for each value.",
    "A form might have editing, saving, success, and error states. Event handlers update the state as work progresses, and the component renders the matching controls and feedback from that state.",
  ], [
    "const [status, setStatus] = useState('editing');\nreturn status === 'success' ? <p>Saved</p> : <button disabled={status === 'saving'}>Save</button>;",
    "const [answer, setAnswer] = useState('');\nconst canSubmit = answer.trim().length > 0;",
    "async function handleSave() {\n  setStatus('saving');\n  try { await saveDraft(); setStatus('success'); }\n  catch { setStatus('error'); }\n}",
  ], [
    ["How should a state-driven component decide what to display?", "Render UI based on the current interaction state", "Manually edit DOM nodes from every handler", 0, "The UI can be described as a function of the current state."],
    ["Where can a value such as canSubmit come from?", "A calculation from current state", "A second copy that must be manually synchronized", 0, "Derived values can be calculated during rendering from their source state."],
    ["What can a form status such as saving control?", "Feedback and whether controls are disabled", "The component's source file name", 0, "One meaningful status can drive several related UI details."],
  ]),
  managingTopic("react-choosing-state-structure", "Choosing the State Structure", "Shape state to avoid duplicate facts and contradictory combinations.", [
    "Keep the smallest set of facts needed to describe the interface. If a value can be calculated from existing state or props, derive it during rendering instead of storing another copy.",
    "Group fields that belong together, avoid deeply nested shapes when they make updates difficult, and represent mutually exclusive modes with one status rather than several booleans that can conflict.",
  ], [
    "const [first, setFirst] = useState('Mira');\nconst [last, setLast] = useState('Shah');\nconst fullName = `${first} ${last}`;",
    "const [status, setStatus] = useState('idle'); // idle | loading | success | error",
    "const [profile, setProfile] = useState({ name: 'Mira', city: 'Indore' });",
  ], [
    ["Should fullName be separate state if it is always first plus last?", "No, derive it from first and last during render", "Yes, update it independently in every handler", 0, "Derived data can be recalculated and does not need a synchronized state copy."],
    ["What can one status value prevent compared with several booleans?", "Impossible combinations such as loading and success at once", "The component from having any UI", 0, "A single mode represents mutually exclusive phases more clearly."],
    ["What should guide whether fields are grouped in an object?", "Whether they represent related data and update together", "A rule that every state value must be an object", 0, "Choose a structure that makes ownership and updates easy to understand."],
  ]),
  managingTopic("react-sharing-state-between-components", "Sharing State Between Components", "Move shared data to the nearest common owner and pass it to the components that use it.", [
    "If two components need to stay synchronized, independent state copies can drift apart. Move the shared value to their closest common parent, then pass the current value and the needed callbacks down as props.",
    "This is often called lifting state up. The parent owns the source of truth, while children display the supplied value and notify the parent when a user requests a change.",
  ], [
    "function Page() {\n  const [activeTab, setActiveTab] = useState('overview');\n  return <Tabs activeTab={activeTab} onSelect={setActiveTab} />;\n}",
    "<Quantity value={quantity} onChange={setQuantity} />",
    "function Parent() {\n  const [query, setQuery] = useState('');\n  return <><SearchBox value={query} onChange={setQuery} /><Results query={query} /></>;\n}",
  ], [
    ["Where should state live when two sibling components need the same value?", "In their closest common parent", "In separate copies inside both children", 0, "A shared parent can coordinate one value for both children."],
    ["How can a child request that shared state change?", "Call a callback prop from its parent", "Edit the parent's local variable directly", 0, "Callbacks let children communicate an interaction to the state owner."],
    ["What is a benefit of one source of truth?", "Related components stay synchronized", "Every component must render identically", 0, "One shared value prevents independently maintained copies from drifting."],
  ]),
  managingTopic("react-preserving-and-resetting-state", "Preserving and Resetting State", "Understand when React keeps component state and how a new identity resets it.", [
    "React associates state with a component's position and identity in the rendered tree. When the same component remains in the matching position, React generally preserves its state as props and output change.",
    "Sometimes a new item or recipient should start with fresh local state. Giving the component a different stable key tells React it represents a different instance, so its old state is discarded and initialized again.",
  ], [
    "<Editor documentId={document.id} /> // same position and type usually preserves editor state",
    "<Chat key={recipient.id} recipient={recipient} /> // a new recipient starts a fresh chat state",
    "{showEditor && <Editor />} // removing it unmounts the editor and discards its local state",
  ], [
    ["What usually helps React decide which component state to preserve?", "The component's identity and position in the tree", "The component's displayed text alone", 0, "React matches component identity in the rendered tree to preserve state."],
    ["What can a changed key communicate?", "This is a different component instance that should start fresh", "The component should keep every old state value", 0, "A different key gives the rendered component a new identity."],
    ["What happens to local state when a component is removed from the tree?", "That component instance is discarded", "Its state is automatically copied to its parent", 0, "Unmounting removes that instance and its local state."],
  ]),
  managingTopic("react-extracting-state-logic-reducer", "Extracting State Logic into a Reducer", "Centralize related state transitions in a pure reducer function.", [
    "When many event handlers update the same complex state, the transition rules can become scattered. A reducer receives the current state and an action description, then returns the next state.",
    "useReducer connects the reducer to a component and provides state plus dispatch. Handlers dispatch action objects that describe what happened; the reducer decides the resulting immutable state. Keep reducer logic pure and free of side effects.",
  ], [
    "function reducer(state, action) {\n  if (action.type === 'increment') return { count: state.count + 1 };\n  return state;\n}",
    "const [state, dispatch] = useReducer(reducer, { count: 0 });\n<button onClick={() => dispatch({ type: 'increment' })}>Add</button>",
    "function reducer(tasks, action) {\n  switch (action.type) {\n    case 'remove': return tasks.filter(task => task.id !== action.id);\n    default: return tasks;\n  }\n}",
  ], [
    ["What does a reducer receive?", "Current state and an action", "A DOM element and a CSS selector", 0, "A reducer uses state and an action to calculate the next state."],
    ["What does dispatch do?", "Sends an action to the reducer", "Changes a state object in place", 0, "dispatch requests a transition described by an action."],
    ["What should a reducer return?", "The next state value", "A promise that changes state later", 0, "Reducers synchronously calculate and return the next state."],
  ]),
  managingTopic("react-passing-data-deeply-context", "Passing Data Deeply with Context", "Make a shared value available to descendants without forwarding it through every layer.", [
    "Props are a clear way to pass values directly to children. If many intermediate components only forward the same value, context can let a provider make it available to descendants deeper in that subtree.",
    "Create a context, provide a value around the relevant part of the tree, and read it in descendants with useContext. Keep context scoped to data that is genuinely shared; direct parent-child data is often simpler with props.",
  ], [
    "const ThemeContext = createContext('light');",
    "<ThemeContext.Provider value={theme}><Toolbar /></ThemeContext.Provider>",
    "function IconButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Open</button>;\n}",
  ], [
    ["What problem can context help with?", "Forwarding the same value through many intermediate components", "Passing a value directly to one child", 0, "Context can avoid repeated prop forwarding for deeply shared values."],
    ["Which Hook reads a context value?", "useContext", "useReducer", 0, "useContext reads the closest provided value for that context."],
    ["When are props often simpler than context?", "When data only needs to go to a direct child", "When many distant descendants need shared information", 0, "Direct props make a straightforward parent-child relationship explicit."],
  ]),
  managingTopic("react-scaling-up-reducer-context", "Scaling Up with Reducer and Context", "Combine a reducer and context to share complex state and actions through a subtree.", [
    "A reducer can keep complex state transitions in one place, while context can make the state and dispatch function available to descendants. Together, they support screens where many components need to read or update coordinated data.",
    "A provider component can own useReducer and expose the result through context. Keep the provider near the subtree that needs the data, and separate state and dispatch contexts when that improves clarity or avoids unnecessary subscriptions.",
  ], [
    "const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);",
    "<TasksContext.Provider value={tasks}><TaskList /></TasksContext.Provider>",
    "<DispatchContext.Provider value={dispatch}><AddTask /></DispatchContext.Provider>",
  ], [
    ["What responsibility does the reducer handle in this pattern?", "Calculating state transitions from actions", "Providing CSS to every DOM node", 0, "The reducer centralizes how actions produce next state."],
    ["What responsibility does context handle?", "Making values available to descendants in a subtree", "Sorting every array automatically", 0, "Context distributes a provided value through the component tree."],
    ["Where should a provider usually be placed?", "Around the part of the tree that needs its value", "At the root for every value regardless of use", 0, "Scoped providers keep shared state close to its consumers."],
  ]),
  managingTopic("react-managing-state-next", "What's Next?", "Apply state organization tools where they make an interface easier to change.", [
    "Start with the simplest state shape that describes the current UI. Derive values that can be calculated, lift state when components must coordinate, and use keys when a new identity should reset local state.",
    "When transitions become difficult to follow, a reducer can centralize them. When a value is needed far down a subtree, context can remove repeated forwarding. Add these tools in response to a real design need and keep ownership understandable.",
  ], [
    "// Derived value: const canSave = title.trim().length > 0;",
    "// Shared owner: parent state + value and callback props",
    "// Complex transitions: reducer; distant consumers: scoped context",
  ], [
    ["What is a good default when choosing a state-management tool?", "Use the simplest approach that keeps ownership and updates clear", "Use context and reducers for every component", 0, "Choose tools based on the needs of the interface rather than by default."],
    ["When should state be lifted?", "When multiple components need one coordinated value", "Whenever a component has one local state value", 0, "Lifting is useful when components must stay in sync."],
    ["What can guide the next step after learning state organization?", "Build a feature and choose tools as its data flow requires", "Duplicate every state value across components", 0, "Practice helps determine when derived state, reducers, or context are useful."],
  ]),
]);
