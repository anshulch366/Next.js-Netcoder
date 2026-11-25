import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function escapeTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use this pattern only when the component needs to coordinate with a browser API or another external system." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Use an Effect for every value calculated during render"] : [alternate, correct, "Use an Effect for every value calculated during render"],
      answer,
      explanation,
    })),
  };
}

export const escapeHatchesLessons = chapter("Learn React · Escape Hatches", [
  escapeTopic("react-escape-hatches", "Escape Hatches", "Learn when refs, Effects, and custom Hooks help React components work with systems outside React.", [
    "Most React code should describe the interface from props and state. Some tasks need a connection to something React does not control, such as focusing a browser input, controlling a video player, or subscribing to an external service.",
    "Refs and Effects are tools for those cases. Use them deliberately: refs hold values that do not drive rendering, and Effects synchronize with external systems. If a value can be calculated during render or an interaction can be handled in an event handler, an Effect may be unnecessary.",
  ], [
    "const inputRef = useRef(null); // access a DOM node when needed",
    "useEffect(() => { video.play(); }, [isPlaying]); // sync an external player",
    "const fullName = firstName + ' ' + lastName; // derive during render",
  ], [
    ["When are escape hatches most useful?", "When coordinating with a system outside React", "For every ordinary calculation in render", 0, "Refs and Effects address cases where React must connect to external systems."],
    ["What does changing a ref do by itself?", "It does not trigger a render", "It always triggers a render", 0, "Refs retain values without notifying React to render again."],
    ["Where should a user click action usually be handled?", "In an event handler", "In an Effect watching a click counter", 0, "Event handlers are the direct place for interaction-specific logic."],
  ]),
  escapeTopic("react-referencing-values-with-refs", "Referencing Values with Refs", "Store a value between renders when changing it should not update the visible interface.", [
    "useRef returns an object whose current property can hold a value. React keeps that object between renders, but changing current does not cause a render.",
    "Refs suit values such as timer identifiers, a previous measurement, or a mutable counter used only by event logic. If the value determines what the user sees, use state instead so React can render the update.",
  ], [
    "const clickCount = useRef(0);\nclickCount.current += 1;",
    "const timerId = useRef(null);\ntimerId.current = setTimeout(run, 500);",
    "const [visibleCount, setVisibleCount] = useState(0); // use state when UI must update",
  ], [
    ["What property holds a ref's stored value?", "current", "valueOf", 0, "The ref object exposes its mutable value through current."],
    ["Does changing ref.current trigger a render?", "No", "Yes, every assignment renders the component", 0, "Ref changes do not notify React to render."],
    ["Which value belongs in state instead of a ref?", "A value that determines displayed UI", "A timeout identifier used only by code", 0, "State changes request a render when the interface depends on the value."],
  ]),
  escapeTopic("react-manipulating-dom-with-refs", "Manipulating the DOM with Refs", "Access a DOM element for focused actions such as focusing, scrolling, or measuring it.", [
    "React usually updates the DOM from your JSX. When you need a browser operation that JSX cannot express, attach a ref to the relevant element and use the DOM node after React has rendered it.",
    "Examples include focusing an input after a button click, scrolling a panel into view, or measuring an element. Keep direct DOM changes narrow so they do not conflict with React's rendering of the same content.",
  ], [
    "const inputRef = useRef(null);\nreturn <><input ref={inputRef} /><button onClick={() => inputRef.current?.focus()}>Focus</button></>;",
    "panelRef.current?.scrollIntoView({ behavior: 'smooth' });",
    "const width = elementRef.current?.getBoundingClientRect().width;",
  ], [
    ["What does a DOM ref give a component?", "A reference to the rendered DOM node", "A copy of the component's JSX source", 0, "Attaching a ref gives access to the DOM element React created."],
    ["Which is a suitable focused DOM-ref task?", "Focus an input after a button click", "Rewrite the whole page DOM on every render", 0, "Refs are useful for specific browser operations such as focus."],
    ["Why keep direct DOM changes narrow?", "So they do not conflict with React's rendering", "Because DOM nodes cannot be read", 0, "React should remain responsible for most rendered UI changes."],
  ]),
  escapeTopic("react-synchronizing-with-effects", "Synchronizing with Effects", "Use an Effect to keep an external system synchronized with the latest rendered values.", [
    "useEffect runs after React commits a render. It can connect to a service, subscribe to updates, or synchronize an external widget with current props and state.",
    "An Effect can return a cleanup function that undoes its setup, such as removing a listener or disconnecting. Effects are for synchronization with systems outside React, not for manually deriving one React state value from another.",
  ], [
    "useEffect(() => {\n  const connection = connect(roomId);\n  return () => connection.disconnect();\n}, [roomId]);",
    "useEffect(() => {\n  videoRef.current?.[isPlaying ? 'play' : 'pause']();\n}, [isPlaying]);",
    "useEffect(() => {\n  window.addEventListener('resize', onResize);\n  return () => window.removeEventListener('resize', onResize);\n}, []);",
  ], [
    ["What is an Effect mainly for?", "Synchronizing with an external system", "Calculating a value that can be derived during render", 0, "Effects connect React to systems outside its rendering model."],
    ["When does an Effect run?", "After React commits a render", "Before every component function can run", 0, "Effects run after the render has been committed to the screen."],
    ["What should cleanup do?", "Undo or release the Effect's setup", "Update unrelated state forever", 0, "Cleanup disconnects, unsubscribes, or otherwise reverses setup work."],
  ]),
  escapeTopic("react-you-might-not-need-an-effect", "You Might Not Need an Effect", "Avoid Effects for calculations and user interactions that can be handled directly.", [
    "If a value can be computed from current props or state, calculate it during render instead of storing a duplicate and synchronizing it in an Effect.",
    "If something should happen because a user clicked or submitted, put that logic in the event handler. Use an Effect when rendering itself means an external system must be synchronized, such as connecting to the selected room.",
  ], [
    "const visibleItems = items.filter(item => item.active); // derive directly",
    "function handleSubmit() { saveForm(formData); } // respond to an interaction",
    "useEffect(() => connect(roomId), [roomId]); // synchronize an external connection",
  ], [
    ["Where should a derived total usually be calculated?", "During render from its source values", "In an Effect that copies it to another state variable", 0, "Derived data does not need a second state value or synchronization Effect."],
    ["Where should click-specific behavior usually go?", "In the event handler", "In an Effect that detects a click flag", 0, "Event handlers directly express what should happen for an interaction."],
    ["When does a connection Effect make sense?", "When the selected room changes and an external connection must sync", "When adding two numbers for display", 0, "Effects are useful when an external system must match current UI state."],
  ]),
  escapeTopic("react-lifecycle-of-reactive-effects", "Lifecycle of Reactive Effects", "Think of each Effect as starting and stopping synchronization for a particular set of values.", [
    "An Effect has a setup phase and may have a cleanup phase. When dependencies change, React cleans up the previous synchronization before starting the new one; when the component leaves the tree, cleanup runs for the active setup.",
    "This is better understood as repeated start/stop synchronization than as code that runs only once at mount. Cleanup should use the values from the setup it is undoing, such as the connection or listener created there.",
  ], [
    "useEffect(() => {\n  const sub = subscribe(topic);\n  return () => sub.unsubscribe();\n}, [topic]);",
    "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);",
    "// When roomId changes: clean up the old room, then connect to the new one.",
  ], [
    ["What happens when an Effect dependency changes?", "The old setup is cleaned up before new synchronization starts", "The component is always removed from the page", 0, "React cleans up the previous Effect before applying the next setup."],
    ["What does Effect cleanup commonly release?", "A resource created by setup, such as a subscription", "The component's entire state tree", 0, "Cleanup reverses setup work such as listeners, timers, or connections."],
    ["How is an Effect lifecycle best understood?", "Start and stop synchronization as dependencies change", "A guaranteed one-time mount callback only", 0, "Effects can repeatedly synchronize as reactive values change."],
  ]),
  escapeTopic("react-separating-events-from-effects", "Separating Events from Effects", "Keep interaction-specific work in event handlers and synchronization work in Effects.", [
    "Event handlers run because a specific interaction happened, such as clicking Save. Effects run because a render committed with values that require an external system to be synchronized.",
    "Avoid moving a click action into an Effect just to watch a state flag. Keep the action in the handler, and use an Effect for ongoing synchronization such as subscribing while a component is showing a room.",
  ], [
    "function handleBuy() { purchase(productId); } // interaction-specific",
    "useEffect(() => { return subscribeToRoom(roomId); }, [roomId]); // synchronization",
    "<button onClick={handleSave}>Save</button>",
  ], [
    ["What triggers an event handler?", "A specific user interaction", "Every render with a dependency change", 0, "Event handlers are called in response to events such as clicks."],
    ["What triggers an Effect?", "A committed render that needs external synchronization", "Only a button click", 0, "Effects synchronize external systems based on reactive values."],
    ["Where should a purchase action go?", "In the button's event handler", "In an Effect that watches whether the button rendered", 0, "A purchase is caused by the user's action, so the handler is the right place."],
  ]),
  escapeTopic("react-removing-effect-dependencies", "Removing Effect Dependencies", "Make dependencies match the values an Effect actually reads by restructuring code safely.", [
    "Every reactive value used by an Effect belongs in its dependency list. If the list causes repeated work, do not hide a dependency; restructure the code so the Effect reads only values it truly needs.",
    "Move constant configuration outside the component, create temporary objects inside the Effect, or use an event-specific handler for interaction logic. This keeps synchronization correct without relying on stale values.",
  ], [
    "const serverUrl = 'https://example.invalid';\nfunction Chat({ roomId }) { useEffect(() => connect(serverUrl, roomId), [roomId]); }",
    "useEffect(() => {\n  const options = { roomId };\n  const connection = connect(options);\n  return () => connection.disconnect();\n}, [roomId]);",
    "useEffect(() => { console.log(selectedId); }, [selectedId]); // include reactive values read",
  ], [
    ["What should you do if an Effect uses a reactive value?", "Include it as a dependency", "Omit it to force the Effect to run less often", 0, "Dependencies keep the Effect synchronized with values it reads."],
    ["How can you reduce unnecessary dependencies safely?", "Restructure code so the Effect reads fewer reactive values", "Disable dependency checks", 0, "Restructuring preserves correctness while simplifying dependencies."],
    ["Where can an object used only during setup be created?", "Inside the Effect", "As a new component state value on every render", 0, "Creating it inside the Effect can avoid an unstable object dependency."],
  ]),
  escapeTopic("react-reusing-logic-with-custom-hooks", "Reusing Logic with Custom Hooks", "Extract repeated stateful behavior into a custom Hook that composes built-in Hooks.", [
    "When multiple components need the same synchronization or browser interaction logic, a custom Hook can package that behavior behind a focused function starting with use.",
    "Custom Hooks share logic, not one shared state instance by default. Each component calling a Hook gets its own Hook state unless the implementation connects to a shared external store or context.",
  ], [
    "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => { /* subscribe and clean up */ }, []);\n  return width;\n}",
    "function useChatConnection(roomId) {\n  useEffect(() => connect(roomId), [roomId]);\n}",
    "function Profile() { const width = useWindowWidth(); return <p>{width}</p>; }",
  ], [
    ["What is a custom Hook useful for?", "Reusing stateful behavior across components", "Sharing one automatic state instance between all callers", 0, "Custom Hooks reuse logic, while each caller normally has separate Hook state."],
    ["What naming convention identifies a custom Hook?", "Its name starts with use", "Its name ends with Component", 0, "Custom Hook names start with use and follow Hook rules."],
    ["Do two components calling the same custom Hook share state automatically?", "No, each call has its own Hook state by default", "Yes, all Hook calls become one global state", 0, "A custom Hook shares behavior, not a state instance."],
  ]),
  escapeTopic("react-escape-hatches-whats-next", "What’s Next?", "Choose the smallest escape hatch that fits and keep ordinary UI logic declarative.", [
    "Use refs for values or DOM nodes that do not directly drive rendering. Use Effects to synchronize with an external system, and return cleanup when setup creates a resource that must be released.",
    "Before adding an Effect, check whether render-time calculation, props, state, or an event handler already expresses the behavior. Extract a custom Hook when the same synchronization logic belongs to multiple components.",
  ], [
    "const formatted = formatPrice(price); // render-time calculation",
    "inputRef.current?.focus(); // imperative DOM operation",
    "useEffect(() => connect(roomId), [roomId]); // external synchronization",
  ], [
    ["What is the first question before using an Effect?", "Does this need to synchronize with something outside React?", "Can every render be moved into an Effect?", 0, "Effects are intended for external synchronization."],
    ["Which tool is appropriate for focusing a DOM input?", "A ref to the DOM node", "A duplicate state variable for the input element", 0, "A ref provides access for focused browser operations."],
    ["What can reduce repeated synchronization code across components?", "A custom Hook", "Copying slightly different Effects everywhere", 0, "Custom Hooks can package and reuse stateful logic."],
  ]),
]);
