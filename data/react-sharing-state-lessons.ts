import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function sharingTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace how the parent owns the value and how children receive it through props." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Give each child another independent copy"] : [alternate, correct, "Give each child another independent copy"],
      answer,
      explanation,
    })),
  };
}

export const sharingStateLessons = chapter("Learn React · Managing State · Sharing State Between Components", [
  sharingTopic("react-sharing-state-between-components", "Sharing State Between Components", "Coordinate components by moving shared state to their closest common parent.", [
    "Two components cannot stay coordinated if each keeps its own independent copy of a value. Move that state to their nearest shared parent, then pass each child the values and callbacks it needs.",
    "This pattern is called lifting state up. The parent becomes the owner of the shared information, while child components display props and notify the parent when a user requests a change.",
  ], [
    "function Page() {\n  const [activeId, setActiveId] = useState('overview');\n  return <Tabs activeId={activeId} onSelect={setActiveId} />;\n}",
    "<Panel expanded={activePanel === 1} onShow={() => setActivePanel(1)} />",
    "function SharedSearch() {\n  const [query, setQuery] = useState('');\n  return <><SearchField value={query} onChange={setQuery} /><ResultList query={query} /></>;\n}",
  ], [
    ["When is lifting state up useful?", "When multiple components need one coordinated value", "When every component should keep unrelated local data", 0, "A shared owner keeps related child views synchronized."],
    ["Where should shared state usually be placed?", "In the closest common parent of the components using it", "In a new copy inside every child", 0, "The nearest shared parent can coordinate the consumers without moving state too far."],
    ["How can a child request an update to parent-owned state?", "Call a callback prop from the parent", "Change the parent's local variable directly", 0, "A callback prop communicates the child's interaction to its state owner."],
  ]),
  sharingTopic("react-lifting-state-up-example", "Lifting State Up by Example", "See how independent child state prevents two panels from coordinating.", [
    "Imagine an accordion with two panels. If each panel stores its own expanded boolean, both can open at once because neither knows what the other is doing.",
    "If the design requires only one open panel, the state should represent which panel is selected. A shared parent can then derive each child's expanded value from the same selection.",
  ], [
    "function Panel() {\n  const [expanded, setExpanded] = useState(false);\n  return <button onClick={() => setExpanded(!expanded)}>Toggle</button>;\n}",
    "const [activePanel, setActivePanel] = useState(0);\nconst firstExpanded = activePanel === 0;",
    "<Panel expanded={activePanel === 0} onShow={() => setActivePanel(0)} />\n<Panel expanded={activePanel === 1} onShow={() => setActivePanel(1)} />",
  ], [
    ["Why can two panels with local booleans both remain expanded?", "Each panel controls its own value independently", "React shares all child state automatically", 0, "Independent state does not coordinate sibling components."],
    ["What can one activePanel value represent?", "Which panel is currently expanded", "The expanded state of every panel separately", 0, "An index or ID gives the shared parent one source for the selection."],
    ["How can each child know whether it is active?", "Compare its ID or index with the parent's active value", "Read another child's private state", 0, "The parent derives and passes each child's active prop."],
  ]),
  sharingTopic("react-remove-state-from-child-components", "Step 1: Remove State from the Child Components", "Make child components display a parent-supplied value instead of owning shared state.", [
    "Start by removing the child's useState for the value that needs coordination. Accept that value as a prop instead, so the parent can determine what the child should display.",
    "The child becomes controlled for that behavior: it renders from the prop and can report user actions through a callback. It no longer changes the shared value by itself.",
  ], [
    "function Panel({ expanded }) {\n  return expanded ? <Details /> : <button>Show</button>;\n}",
    "function SearchField({ value, onChange }) {\n  return <input value={value} onChange={event => onChange(event.target.value)} />;\n}",
    "function Tab({ active, onSelect, title }) {\n  return <button aria-pressed={active} onClick={onSelect}>{title}</button>;\n}",
  ], [
    ["What replaces a child's local state when a parent should control it?", "A prop supplied by the parent", "A direct reference to the parent's local variable", 0, "Props provide the parent's current value to the child."],
    ["What does a controlled child do with its value prop?", "Renders according to it", "Mutates it directly", 0, "Props are read-only inputs; the parent supplies updated values."],
    ["How can a child communicate a user action?", "Call a callback prop", "Rewrite its parent's state declaration", 0, "Callbacks provide an explicit path for child-to-parent interaction."],
  ]),
  sharingTopic("react-pass-hardcoded-data-common-parent", "Step 2: Pass Hardcoded Data from the Common Parent", "Test the child interface by supplying fixed props from the shared parent.", [
    "Before adding state, locate the closest component that renders all components needing coordination. Temporarily pass fixed prop values from that parent to verify the child UI responds correctly.",
    "This separates the presentation contract from the state logic. Once the children render correctly from props, the parent can replace the fixed values with state-derived values.",
  ], [
    "<Panel expanded={true} />",
    "<Panel expanded={false} />",
    "<Panel expanded={activeIndex === 2} title='Details' /> // derived prop preview",
  ], [
    ["Why try fixed props before adding shared state?", "To confirm how the child presentation responds to its inputs", "To make the value permanently hardcoded", 0, "A fixed prop helps verify the child API before wiring dynamic data."],
    ["Which component is the common parent?", "The nearest component that renders all coordinated children", "Any unrelated component near the app root", 0, "The closest common parent is the natural owner of their shared value."],
    ["What should happen after the fixed-prop preview works?", "Replace fixed values with parent-owned state and callbacks", "Add state back independently to every child", 0, "The parent can now coordinate children from one state value."],
  ]),
  sharingTopic("react-add-state-to-common-parent", "Step 3: Add State to the Common Parent", "Store the shared choice in the parent and pass values plus event handlers down.", [
    "Add a state variable in the common parent that represents the shared decision, such as the active panel index. Derive a boolean or other display value for each child from that state.",
    "Pass a callback alongside each display value. When a child is activated, it calls the callback; the parent updates its state and all children receive props derived from the new value.",
  ], [
    "const [activeIndex, setActiveIndex] = useState(0);",
    "<Panel expanded={activeIndex === 1} onShow={() => setActiveIndex(1)} />",
    "function Accordion() {\n  const [active, setActive] = useState(0);\n  return panels.map((panel, index) => <Panel key={panel.id} expanded={active === index} onShow={() => setActive(index)} />);\n}",
  ], [
    ["Where does the shared active index live?", "In the common parent", "Independently inside every Panel", 0, "The parent coordinates which child is active."],
    ["What does a child callback typically request?", "That the parent select a particular child", "That the child change the parent's local variable directly", 0, "The callback reports the requested action to the state owner."],
    ["What happens to sibling props after active state changes?", "They are recalculated from the new shared value", "They remain permanently hardcoded", 0, "The parent renders new props derived from its updated state."],
  ]),
  sharingTopic("react-single-source-of-truth", "A Single Source of Truth for Each State", "Give each shared fact one clear owner without putting all app state in one place.", [
    "A single source of truth means one component owns a particular piece of state. It does not mean that every state value in an app belongs in the same component; unrelated local state can remain close to where it is used.",
    "Lift a value only as high as needed for its consumers. The owner passes data down and callbacks to request changes, avoiding duplicated shared state across sibling components.",
  ], [
    "// SearchBox owns its temporary focus state locally.",
    "// Page owns the shared query used by both SearchBox and Results.",
    "<SearchBox query={query} onQueryChange={setQuery} />\n<Results query={query} />",
  ], [
    ["Does single source of truth mean all state belongs at the app root?", "No, each state value has its own appropriate owner", "Yes, all local state must be global", 0, "Ownership is chosen per piece of state and its consumers."],
    ["Where can unrelated temporary state remain?", "In the component that uses it", "Always in a distant common ancestor", 0, "Local state can stay near its component when no other component needs it."],
    ["What avoids sibling copies drifting apart?", "One shared owner passing the value down", "Separate copies updated by convention", 0, "One owner keeps shared data synchronized."],
  ]),
  sharingTopic("react-sharing-state-recap", "Recap", "Review how to coordinate components with a common state owner.", [
    "When components need coordinated state, move it to their closest common parent. Remove the duplicate child state and first make the child render from props.",
    "Then store the shared value in the parent and pass each child the relevant data and callbacks. This keeps one source for the shared fact and lets local, unrelated state remain local.",
  ], [
    "const [active, setActive] = useState(0);",
    "<Panel active={active === index} onShow={() => setActive(index)} />",
    "// The parent owns shared selection; each child renders from its props.",
  ], [
    ["Where should coordinated state move?", "To the closest common parent", "To a duplicate in every child", 0, "The common parent can provide one shared value to its descendants."],
    ["What should children receive from the owner?", "Props and callbacks", "Direct access to parent's local variables", 0, "Props carry data down and callbacks communicate requested changes up."],
    ["What is controlled by props?", "A child behavior whose value is supplied by its parent", "A child value that only its private state can change", 0, "A controlled child reflects a parent-supplied value."],
  ]),
  sharingTopic("react-sharing-state-challenges", "Challenges", "Practice synchronizing inputs and coordinating filtered views.", [
    "Challenge 1: Two input components currently hold separate text values. Make edits in either field appear in both by moving the text value to their common parent and passing value and onChange props.",
    "Challenge 2: A search field and results list should respond to the same query. Let the parent own the query, pass it to both components, and have the field notify the parent when the text changes.",
  ], [
    "function SyncedFields({ value, onChange }) {\n  return <><input value={value} onChange={event => onChange(event.target.value)} /><input value={value} onChange={event => onChange(event.target.value)} /></>;\n}",
    "function Page() {\n  const [query, setQuery] = useState('');\n  return <><SearchField value={query} onChange={setQuery} /><Results query={query} /></>;\n}",
    "<Filter value={category} onChange={setCategory} />\n<ProductList category={category} />",
  ], [
    ["How can two inputs stay synchronized?", "Use one parent-owned value for both", "Give each input a different local value", 0, "Both fields render from the same state owner and callback."],
    ["Where should a search query live when both input and results need it?", "In their common parent", "Only inside the results list", 0, "The common parent can pass the same query to both consumers."],
    ["How does a child tell the parent that text changed?", "Call the onChange callback prop", "Assign directly to the parent state variable", 0, "The callback gives the child a defined way to request an update."],
  ]),
]);
