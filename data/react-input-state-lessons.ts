import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function inputStateTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use this idea to describe the UI for a state, then connect it to the event that changes that state." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Directly edit each DOM node after every event"] : [alternate, correct, "Directly edit each DOM node after every event"],
      answer,
      explanation,
    })),
  };
}

export const reactingToInputLessons = chapter("Learn React · Managing State · Reacting to Input with State", [
  inputStateTopic("react-reacting-to-input-with-state", "Reacting to Input with State", "Model an interaction as visual states and let React render the matching interface.", [
    "A component's interface can have several meaningful states, such as empty, editing, saving, success, or error. In React, describe what the UI should look like for each state rather than manually issuing separate show, hide, enable, and disable commands.",
    "Store the essential changing information, derive values that can be calculated, and update state from user or system events. React uses the new state to render the right interface, which makes interactions easier to extend without coordinating many direct DOM changes.",
  ], [
    "const [status, setStatus] = useState('editing');\nreturn status === 'success' ? <p>Saved</p> : <FormFields />;",
    "const canSend = message.trim().length > 0;\n<button disabled={!canSend}>Send</button>",
    "async function handleSend() {\n  setStatus('sending');\n  try { await send(message); setStatus('sent'); }\n  catch { setStatus('error'); }\n}",
  ], [
    ["What does a declarative component describe?", "The UI for its current state", "Every low-level DOM command in sequence", 0, "React components describe the interface and React applies the necessary changes."],
    ["What can represent a form's current visual phase?", "A state value such as editing, sending, or sent", "A separate manual DOM instruction for every field", 0, "A meaningful status can determine which controls and feedback appear."],
    ["What should happen after state changes?", "React renders the UI that matches the new state", "The event handler must rewrite all JSX strings", 0, "The component describes the output from the updated state."],
  ]),
  inputStateTopic("react-declarative-vs-imperative-ui", "How Declarative UI Compares to Imperative", "Compare describing a desired interface with issuing direct UI commands.", [
    "Imperative code spells out steps such as finding elements, hiding a message, enabling a button, and changing text. As interactions grow, each new path must keep all those instructions consistent.",
    "Declarative React code describes what should be visible for the current data and state. A handler changes the state; React works out which interface updates are needed, so the component focuses on the result rather than each DOM operation.",
  ], [
    "// Imperative idea: disable(button); show(spinner); hide(error);",
    "// Declarative idea: return status === 'saving' ? <Spinner /> : <SubmitButton />;",
    "// Event updates state: setStatus('saving'); the render describes the next UI.",
  ], [
    ["Which style directly lists operations to perform on UI elements?", "Imperative", "Declarative", 0, "Imperative code tells the program each step to carry out."],
    ["Which style describes the interface for the current state?", "Declarative", "Imperative", 0, "Declarative UI focuses on the desired output for current state."],
    ["What can make imperative UI harder to maintain as features grow?", "Many separate commands can get out of sync", "It cannot respond to clicks", 0, "More commands mean more paths that must coordinate element changes."],
  ]),
  inputStateTopic("react-thinking-about-ui-declaratively", "Thinking About UI Declaratively", "Start with the visible states before writing interaction logic.", [
    "For a form, first describe what a person sees while typing, while work is pending, after success, and after an error. This makes missing or contradictory screens easier to notice before wiring events.",
    "A small visual prototype can render from a status prop or sample data. Once the states look right, identify what changes between them and connect those transitions to events and state setters.",
  ], [
    "function SavePanel({ status }) {\n  if (status === 'done') return <p>Changes saved</p>;\n  return <button disabled={status === 'saving'}>Save</button>;\n}",
    "const views = { empty: <EmptyHint />, loading: <Spinner />, ready: <Results /> };\nreturn views[status];",
    "// Preview a prototype: <SavePanel status='saving' />",
  ], [
    ["What is useful to do before wiring all event logic?", "List or sketch the visual states", "Directly mutate the DOM", 0, "Knowing the possible screens helps make the behavior complete."],
    ["Why render a prototype from a status prop?", "It lets you check each visual state quickly", "It permanently replaces state management", 0, "A supplied status makes it easy to preview the output for different states."],
    ["After describing the UI states, what should you identify?", "The events that move the component between states", "The number of files in node_modules", 0, "Transitions connect user or system inputs to state updates."],
  ]),
  inputStateTopic("react-identify-visual-states", "Step 1: Identify Your Component's Different Visual States", "Enumerate the distinct screens a user may encounter during an interaction.", [
    "A form workflow may include empty input, valid text, pending submission, success, and recoverable error. Each state should correspond to a meaningful visual result rather than an arbitrary collection of booleans.",
    "Sketch the important states or build a simple preview controlled by props. Check whether every state gives the user a clear next action, and whether any proposed state combination would be confusing or impossible.",
  ], [
    "type Status = 'empty' | 'editing' | 'saving' | 'success' | 'error';",
    "function SubmitButton({ status }) {\n  return <button disabled={status === 'empty' || status === 'saving'}>Send</button>;\n}",
    "{status === 'error' && <p role='alert'>Please try again.</p>}\n{status === 'saving' && <Spinner />}",
  ], [
    ["What is a visual state?", "A meaningful version of the interface a user can see", "A random combination of unrelated booleans", 0, "Visual states describe distinct screens in an interaction."],
    ["Why list states before implementation?", "It helps catch missing screens and invalid combinations", "It automatically writes every event handler", 0, "Planning reveals which screens and transitions the interaction requires."],
    ["What could a saving state communicate?", "That a request is in progress and controls may be disabled", "That the form was deleted", 0, "A pending state can provide feedback while work is underway."],
  ]),
  inputStateTopic("react-determine-state-change-triggers", "Step 2: Determine What Triggers Those State Changes", "Map user actions and system results to transitions between visual states.", [
    "Some transitions begin with a person, such as typing, submitting, or selecting an item. Others begin with the system, such as a request resolving, a timer finishing, or a file loading.",
    "Write down each trigger and its destination state. For example, typing may move empty to editing; submitting moves editing to saving; a successful response moves saving to success, while a failure moves it to error.",
  ], [
    "// User: input change -> setDraft(event.target.value)",
    "// User: submit -> setStatus('saving')",
    "// System: request success -> setStatus('success'); request failure -> setStatus('error')",
  ], [
    ["Which is a human input?", "Typing in a field", "A network response arriving", 0, "Typing is an action performed by the user."],
    ["Which is a system input?", "A request resolving", "Clicking a submit button", 0, "A response is produced by the system after work completes."],
    ["What does a transition map help clarify?", "Which trigger moves the UI from one state to another", "Which CSS file is largest", 0, "Transitions connect inputs with the next visual state."],
  ]),
  inputStateTopic("react-represent-state-with-usestate", "Step 3: Represent the State in Memory with useState", "Store the minimum changing facts needed to render the planned states.", [
    "Use useState for information that must persist between renders, such as a draft answer, an error message, or the current workflow status. Choose initial values that represent the first screen clearly.",
    "It is fine to start with a straightforward model and refine it. Prefer a small set of essential values over many independent flags that can form combinations the interface should never show.",
  ], [
    "const [draft, setDraft] = useState('');",
    "const [error, setError] = useState(null);\nconst [status, setStatus] = useState('editing');",
    "const [step, setStep] = useState('details');\nconst [notice, setNotice] = useState('');",
  ], [
    ["Which value belongs in state if it must survive renders and can change?", "The user's current draft", "A constant heading that never changes", 0, "State is for changing information the component needs to remember."],
    ["What can useState represent in a multi-step interaction?", "The current status or step", "A direct DOM instruction list", 0, "A state variable can represent the current visual mode."],
    ["What is a useful goal when modeling state?", "Keep only the essential changing facts", "Create a boolean for every visual detail", 0, "A smaller model reduces duplicate and contradictory state."],
  ]),
  inputStateTopic("react-remove-nonessential-state", "Step 4: Remove Any Non-Essential State Variables", "Derive values and remove flags that duplicate or contradict other state.", [
    "If a value can be calculated from props or existing state, calculate it during rendering instead of storing a second copy. For instance, whether a field is empty can come from the current text.",
    "Prefer one status value for mutually exclusive phases rather than several booleans that can disagree. Keep an error object only when there is an error, instead of storing a separate isError flag too.",
  ], [
    "const isEmpty = answer.trim().length === 0; // derived, not another state variable",
    "const canSubmit = !isEmpty && status !== 'saving';",
    "const [status, setStatus] = useState('editing'); // editing | saving | success",
  ], [
    ["Why derive isEmpty from answer instead of storing it separately?", "The values could get out of sync", "React cannot store booleans", 0, "A duplicate flag creates another value that must be updated correctly."],
    ["What can replace conflicting isSaving and isSuccess booleans?", "A single status with distinct values", "A third duplicate state copy", 0, "One status prevents impossible combinations of mutually exclusive modes."],
    ["When is a derived value usually calculated?", "During rendering from current state or props", "In a second setter after every update", 0, "Derived values can be recalculated from their source data."],
  ]),
  inputStateTopic("react-connect-event-handlers-set-state", "Step 5: Connect the Event Handlers to Set State", "Implement transitions by updating state from user actions and system results.", [
    "Event handlers translate user actions into state updates. A submit handler can prevent the browser's default form action, switch to a pending status, then update to success or error after asynchronous work finishes.",
    "Input handlers keep draft state in sync with typing. Render controls and messages from that state so every transition has one clear source of truth; avoid directly enabling, hiding, or rewriting DOM elements.",
  ], [
    "function handleChange(event) { setDraft(event.target.value); }",
    "async function handleSubmit(event) {\n  event.preventDefault();\n  setStatus('saving');\n  try { await save(draft); setStatus('success'); }\n  catch (problem) { setError(problem); setStatus('error'); }\n}",
    "<textarea value={draft} onChange={handleChange} />\n<button disabled={!draft.trim() || status === 'saving'}>Send</button>",
  ], [
    ["Where should a submit-triggered state transition begin?", "In the form's submit handler", "During every render", 0, "The event handler runs because the user submitted the form."],
    ["What can the handler do after a request succeeds?", "Set status to success", "Directly replace the component function", 0, "A state update lets the component render its success interface."],
    ["How should a controlled textarea stay in sync with typing?", "Use its value from state and update that state in onChange", "Manually edit its DOM value elsewhere", 0, "The state value is the source for the input and onChange updates it."],
  ]),
  inputStateTopic("react-input-state-recap", "Recap", "Use a state-first workflow to build interactions with fewer inconsistent UI updates.", [
    "Describe each visible state, identify the user or system events that cause transitions, and store only the essential changing facts with useState. Calculate values that can be derived instead of duplicating them.",
    "Connect event handlers to the state setters and render the UI from the resulting state. This keeps interaction logic focused on state changes while React handles the corresponding interface updates.",
  ], [
    "// List screens: empty, editing, sending, success, error",
    "// Store: draft, status, and an error only when one exists",
    "// Derive: const canSubmit = draft.trim() !== '' && status !== 'sending';",
  ], [
    ["What should you identify before connecting handlers?", "The visual states and their triggers", "Only the final success screen", 0, "Planning states and transitions gives the interaction a complete model."],
    ["What should you avoid storing twice?", "Values derivable from existing props or state", "A user-entered draft", 0, "Duplicate data can drift away from its source."],
    ["What should determine which UI appears?", "The current state", "A series of unrelated DOM commands", 0, "Declarative rendering maps current state to visible interface."],
  ]),
  inputStateTopic("react-input-state-challenges", "Challenges", "Apply state-driven rendering to a toggle, profile editor, and form workflow.", [
    "Challenge 1: Build a picture toggle that moves an active style between the picture and its surrounding panel. Challenge 2: Create a profile editor with draft name and editing status, then show a preview when editing ends.",
    "Challenge 3: Refactor an imperative form that manually enables controls and hides messages. List its visual states, choose minimal state, and make each event handler update state instead of directly manipulating DOM elements.",
  ], [
    "const [selected, setSelected] = useState(false);\n<div className={selected ? 'panel' : 'panel active'} onClick={() => setSelected(false)}>\n  <img className={selected ? 'image active' : 'image'} onClick={event => { event.stopPropagation(); setSelected(true); }} />\n</div>",
    "const [editing, setEditing] = useState(true);\nconst [name, setName] = useState('Nia');\nreturn editing ? <input value={name} onChange={event => setName(event.target.value)} /> : <p>{name}</p>;",
    "const [status, setStatus] = useState('editing');\n<button disabled={status === 'saving'} onClick={handleSubmit}>Save</button>",
  ], [
    ["How should a picture interaction change its appearance?", "Update state and derive the classes from that state", "Manually add and remove classes in unrelated DOM calls", 0, "Rendering classes from state keeps the visual result declarative."],
    ["What can a profile editor store as state?", "The draft name and whether editing is active", "Both a draft and a second manually synchronized preview name", 0, "The preview can be derived from the draft value."],
    ["What is the goal when refactoring an imperative form?", "Make handlers update state and render from it", "Keep direct DOM updates but add more flags", 0, "State-driven rendering reduces fragile, scattered UI commands."],
  ]),
]);
