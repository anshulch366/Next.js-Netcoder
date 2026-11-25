import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function domRefTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use the ref for a focused browser operation while leaving normal DOM updates to React." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Manually replace the whole document after every render"] : [alternate, correct, "Manually replace the whole document after every render"],
      answer,
      explanation,
    })),
  };
}

export const domRefsLessons = chapter("Learn React · Escape Hatches · Manipulating the DOM with Refs", [
  domRefTopic("react-manipulating-dom-with-refs", "Manipulating the DOM with Refs", "Use refs for narrow browser operations on DOM nodes that React rendered.", [
    "React normally updates the DOM from your JSX. A DOM ref is useful when you need a browser operation that JSX does not describe, such as setting focus, scrolling to an element, or measuring its size.",
    "Keep these operations focused. Let React add, update, and remove the elements it manages; direct structural changes can put the actual DOM out of sync with React's next render.",
  ], [
    "const inputRef = useRef(null);",
    "return <input ref={inputRef} />;",
    "inputRef.current?.focus();",
  ], [
    ["What is a common reason to use a DOM ref?", "Focus or scroll a DOM node", "Replace React's entire rendering process", 0, "Refs allow targeted browser operations on nodes React created."],
    ["Who should normally manage the rendered DOM structure?", "React", "Uncoordinated DOM calls in every event handler", 0, "React keeps the DOM aligned with the component's render output."],
    ["What can a DOM ref provide?", "Access to a rendered DOM node", "A copy of the component's source file", 0, "React assigns the node to the ref's current property."],
  ]),
  domRefTopic("react-getting-a-ref-to-the-node", "Getting a Ref to the Node", "Attach a useRef object to a JSX element and access its DOM node after commit.", [
    "Call useRef(null) at the top level of the component, then pass the ref to the element's ref attribute. React sets current to the corresponding DOM node after it creates and commits that node.",
    "Before the node exists, current is null. It becomes null again when React removes the element, so check that the node is available before calling browser APIs on it.",
  ], [
    "const boxRef = useRef(null);\nreturn <div ref={boxRef}>Details</div>;",
    "boxRef.current?.scrollIntoView();",
    "if (boxRef.current) { console.log(boxRef.current.getBoundingClientRect()); }",
  ], [
    ["What is the initial value commonly passed for a DOM ref?", "null", "The element's final HTML string", 0, "The DOM node does not exist until React commits it."],
    ["When does React set a DOM ref's current value?", "When it commits the DOM node", "During the component's first line of rendering", 0, "React assigns the node during the commit phase."],
    ["What happens to the ref when its node is removed?", "current becomes null", "It always points to the removed node", 0, "React clears the ref when the corresponding DOM node leaves."],
  ]),
  domRefTopic("react-focus-a-text-input-with-ref", "Example: Focusing a Text Input", "Use a button handler and an input ref to move keyboard focus intentionally.", [
    "Create a ref for the input and attach it to the input element. In the button's click handler, read the node and call its focus method.",
    "The focus operation is imperative, but it does not take over normal rendering. Optional chaining protects the call if the input is not currently mounted.",
  ], [
    "const inputRef = useRef(null);\n<input ref={inputRef} />",
    "function handleFocus() { inputRef.current?.focus(); }",
    "<button onClick={handleFocus}>Focus the input</button>",
  ], [
    ["Where should the focus call usually happen?", "In the button's event handler", "During every render", 0, "Focus is an action caused by the user's click."],
    ["Which method moves keyboard focus to an input?", "focus()", "scrollIntoView()", 0, "The DOM node's focus method moves keyboard focus."],
    ["Why use optional chaining with the ref?", "The input node may not be mounted", "Refs only work with optional values", 0, "A ref can be null before mount or after removal."],
  ]),
  domRefTopic("react-scroll-to-an-element-with-ref", "Example: Scrolling to an Element", "Keep refs to selected elements and call scrollIntoView when a user chooses one.", [
    "A carousel can keep one ref per item and use a navigation button to scroll a selected item into view. Each ref points to the DOM node created for that item.",
    "For a fixed small set, separate refs can work well. For a dynamic list, use a callback ref or a map keyed by stable item IDs so each node can be found reliably.",
  ], [
    "const photoRef = useRef(null);\nphotoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });",
    "const firstRef = useRef(null);\nconst secondRef = useRef(null);",
    "function goToPhoto(ref) { ref.current?.scrollIntoView({ behavior: 'smooth' }); }",
  ], [
    ["Which browser method scrolls an element into view?", "scrollIntoView()", "focus()", 0, "scrollIntoView can bring a referenced element into the viewport."],
    ["What helps a dynamic list map item IDs to DOM nodes?", "A callback ref and a map", "One constant ref reused for every list item", 0, "A map keyed by stable IDs can track nodes in a dynamic collection."],
    ["What should a navigation button do to scroll an item?", "Call scrollIntoView on that item's node", "Remove the item and recreate the page", 0, "The selected item's DOM ref is the target for scrolling."],
  ]),
  domRefTopic("react-accessing-another-components-dom-nodes", "Accessing Another Component’s DOM Nodes", "Pass a ref through a child component when its parent needs a small imperative capability.", [
    "A parent can pass a ref to a child component, and the child can attach it to a DOM element it renders. This makes the DOM node accessible to the parent, but it also exposes an implementation detail.",
    "Prefer a narrow API when possible. A child can expose specific actions such as focus rather than its entire DOM node; use an imperative handle when that limited interface is a better boundary.",
  ], [
    "function SearchInput({ ref }) { return <input ref={ref} />; }",
    "const searchRef = useRef(null);\n<SearchInput ref={searchRef} />",
    "searchRef.current?.focus(); // parent uses the exposed node",
  ], [
    ["How can a parent receive a child's DOM node?", "The child can accept and attach a ref", "The parent searches the whole document by text", 0, "A ref can be passed through the child to its rendered element."],
    ["What is a risk of exposing a full DOM node?", "It can couple the parent to child implementation details", "It makes React stop rendering the child", 0, "A narrow API can keep component boundaries less fragile."],
    ["What can a child expose instead of its whole DOM node?", "A small set of imperative actions", "Every DOM node in the application", 0, "An imperative handle can limit the capabilities exposed to the parent."],
  ]),
  domRefTopic("react-when-react-attaches-the-refs", "When React Attaches the Refs", "Understand that DOM refs are set during the commit phase, not while rendering JSX.", [
    "React first renders components to determine the intended UI. During the commit phase, it applies DOM changes and assigns refs to the corresponding nodes.",
    "When a node is about to be replaced or removed, React clears the affected ref; after the DOM update it assigns the new node. Read DOM refs in event handlers or Effects, not while calculating render output.",
  ], [
    "// Render: inputRef.current may still be null.",
    "// Commit: React places the DOM input in inputRef.current.",
    "useEffect(() => { inputRef.current?.focus(); }, []);",
  ], [
    ["During which phase does React assign DOM refs?", "During commit", "Before rendering begins", 0, "Refs are attached as React commits DOM changes."],
    ["Why can current be null during rendering?", "The node may not have been created or committed yet", "The ref attribute only works on text nodes", 0, "Rendering determines output before the DOM commit happens."],
    ["Where is a safer place to access a DOM ref?", "An event handler or Effect", "While computing JSX on every render", 0, "Handlers and Effects run when the committed DOM is available."],
  ]),
  domRefTopic("react-best-practices-for-dom-manipulation-with-refs", "Best Practices for DOM Manipulation with Refs", "Prefer non-destructive browser operations and let React control nodes it renders.", [
    "Use refs for focused operations such as focus, scrolling, and measurement. Removing a React-managed node manually can make React's next update inconsistent with the actual DOM.",
    "Avoid adding, removing, or rewriting children that React manages. If you must manipulate the DOM, limit changes to a dedicated region React leaves empty and does not otherwise update.",
  ], [
    "inputRef.current?.focus(); // focused non-destructive operation",
    "panelRef.current?.scrollIntoView({ behavior: 'smooth' });",
    "// Prefer setShow(false) over ref.current.remove() for React-rendered content.",
  ], [
    ["Which DOM operation is usually safe and focused?", "Focusing a referenced input", "Removing a React-managed child behind React's back", 0, "Focusing changes browser interaction without changing React's DOM structure."],
    ["Why can manually removing a rendered node cause trouble?", "React may still expect that node during a later update", "Refs cannot point to DOM elements", 0, "React's model and the actual DOM can fall out of sync."],
    ["How should normal UI visibility change?", "Update state and let React render the result", "Call remove() directly on the rendered node", 0, "State keeps React responsible for the DOM structure."],
  ]),
  domRefTopic("react-manipulating-dom-with-refs-recap", "Recap", "Review how refs connect React components to DOM nodes and when direct operations are appropriate.", [
    "Attach a useRef object to an element's ref attribute to receive its DOM node after commit. Use browser APIs for focused tasks such as focus, scrolling, or measuring.",
    "Refs can be passed to child components when needed, though a narrow imperative API may be a cleaner boundary. Avoid changing DOM structure that React owns.",
  ], [
    "const nodeRef = useRef(null);\n<div ref={nodeRef} />",
    "nodeRef.current?.focus();",
    "// Prefer React state for adding or removing React-managed elements.",
  ], [
    ["What does React store in an attached DOM ref?", "The rendered node in current", "The current component's entire state", 0, "React assigns the DOM element to current after commit."],
    ["Which actions are good uses of DOM refs?", "Focus, scroll, and measure", "Replace all React-managed children", 0, "Refs support narrow imperative browser operations."],
    ["How should you change whether React renders an element?", "Change state or props", "Manually remove its DOM node", 0, "React should control its own rendered tree."],
  ]),
  domRefTopic("react-manipulating-dom-with-refs-challenges", "Challenges", "Practice wiring refs for media controls, search focus, and a carousel.", [
    "Challenge 1: A Play/Pause button changes its label but not the video. Attach a ref to the video and call play() or pause() from the handler; keep the displayed playing state synchronized with media events if browser controls can also change it.",
    "Challenge 2: Focus a search field from a separate component by passing a ref through the child. Challenge 3: Scroll a carousel item into view using a ref associated with its stable item identity.",
  ], [
    "const videoRef = useRef(null);\nfunction handleToggle() { isPlaying ? videoRef.current?.pause() : videoRef.current?.play(); }",
    "<video ref={videoRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />",
    "const searchRef = useRef(null);\n<SearchInput ref={searchRef} />\nsearchRef.current?.focus();",
  ], [
    ["Why does changing a Play/Pause label not control the video?", "The media element also needs play() or pause() called", "React labels automatically operate browser media", 0, "The browser media API controls playback; state alone changes only React output."],
    ["How can a separate search component expose its input?", "Accept and attach a ref or expose a narrow focus action", "Have the parent edit the DOM by matching visible text", 0, "Explicit ref wiring or an imperative handle creates a clear interface."],
    ["What should a carousel navigation action call?", "scrollIntoView on the selected item's node", "remove() on every other item", 0, "Scrolling is a focused browser operation that can use the target's ref."],
  ]),
]);
