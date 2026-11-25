import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function eventTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Use the handler in a small React component and follow which function runs after the interaction." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "The browser ignores all event handlers"] : [alternate, correct, "The browser ignores all event handlers"],
      answer,
      explanation,
    })),
  };
}

export const respondingToEventsLessons = chapter("Learn React · Adding Interactivity · Responding to Events", [
  eventTopic("react-responding-to-events", "Responding to Events", "Use event handlers to connect interface actions with application behavior.", [
    "Event handlers are functions that run after a user action, such as pressing a button or changing a field. Attach one to a JSX event prop and pass the function itself so React can call it at the right time.",
    "Handlers can read the props and state available to their component, and a parent can pass a callback to a child. Events can travel from the element that received the action toward its ancestors; use propagation controls only when the interface needs different behavior.",
  ], [
    "function RefreshButton() {\n  function handleRefresh() { console.log('Refreshing'); }\n  return <button onClick={handleRefresh}>Refresh</button>;\n}",
    "function NoticeButton({ text }) {\n  return <button onClick={() => console.log(text)}>Show notice</button>;\n}",
    "function Panel({ onClose }) {\n  return <button onClick={onClose}>Close panel</button>;\n}",
  ], [
    ["What should usually be passed to an event prop?", "A function to run after the event", "The result of calling the function during render", 0, "React needs the function so it can call it in response to the interaction."],
    ["What can a handler read from its component?", "Props and state from the render that created it", "Only values stored in the browser URL", 0, "A handler is defined in the component and can use its in-scope values."],
    ["What is event propagation?", "An event moving from its target toward ancestor elements", "A state value copied into CSS", 0, "Many browser events bubble from the target through parent elements."],
  ]),
  eventTopic("react-event-adding-handlers", "Adding Event Handlers", "Define a function and pass it to a JSX event prop.", [
    "An event handler can be a named function inside a component or a short inline function. React event props use camelCase, including onClick, onChange, and onSubmit.",
    "Pass the function reference rather than invoking it while JSX is being calculated. An expression like onClick={handleSave()} runs immediately; onClick={handleSave} waits for the click.",
  ], [
    "function PrintButton() {\n  function handlePrint() { console.log('Print requested'); }\n  return <button onClick={handlePrint}>Print</button>;\n}",
    "<button onClick={() => console.log('Added')}>Add item</button>",
    "<input onChange={event => setDraft(event.target.value)} />",
  ], [
    ["When does onClick={handlePrint} call the function?", "After the button is clicked", "Immediately while the component renders", 0, "Passing a function reference lets React invoke it on the event."],
    ["What does onClick={handlePrint()} do?", "Calls handlePrint while rendering", "Waits for the next click", 0, "Parentheses invoke the function immediately."],
    ["Which event prop is commonly used on a form?", "onSubmit", "onSendForm", 0, "onSubmit handles form submission events."],
  ]),
  eventTopic("react-event-reading-props", "Reading Props in Event Handlers", "Use component props inside a handler to customize an interaction.", [
    "A handler defined in a component can read that component's props. This lets a reusable control act on a value supplied by its parent, such as a label, record ID, or message.",
    "If a handler needs to run with different data for different instances, pass that data as props and use it when the event occurs. Keep the action in a function so it runs after the interaction rather than during render.",
  ], [
    "function MessageButton({ message }) {\n  function handleClick() { console.log(message); }\n  return <button onClick={handleClick}>Show</button>;\n}",
    "function RemoveButton({ itemId }) {\n  return <button onClick={() => removeItem(itemId)}>Remove</button>;\n}",
    "function ColorPicker({ color, onChoose }) {\n  return <button onClick={() => onChoose(color)}>Use {color}</button>;\n}",
  ], [
    ["How can two instances of one button component show different messages?", "Give each instance a different message prop", "Use a different event type for every instance", 0, "Props configure each rendered component instance."],
    ["When should a prop-based action run?", "When the user triggers its handler", "Every time the component renders", 0, "Passing a function delays the action until the event occurs."],
    ["What might a handler use an itemId prop for?", "Identifying which record the user's action targets", "Changing the component's function name", 0, "An ID can tell a callback which item should be updated or removed."],
  ]),
  eventTopic("react-event-handlers-as-props", "Passing Event Handlers as Props", "Let a parent provide behavior to a child component.", [
    "A parent can pass a callback through a prop, and a child can connect it to a browser event. This separates the child's presentation from the action chosen by the parent.",
    "A reusable button can forward onClick to a native button. The parent decides whether a particular instance saves, opens, or removes something, while the child can keep shared markup and styling consistent.",
  ], [
    "function ActionButton({ onAction, children }) {\n  return <button onClick={onAction}>{children}</button>;\n}",
    "<ActionButton onAction={saveDraft}>Save draft</ActionButton>",
    "function RenameControl({ onRename }) {\n  return <button onClick={() => onRename('Untitled')}>Rename</button>;\n}",
  ], [
    ["What does a callback prop let a parent do?", "Choose the behavior a child triggers", "Change the browser's built-in event names", 0, "The parent supplies the function, and the child calls it in response to an interaction."],
    ["What can a reusable button component forward to a native button?", "An event callback such as onClick", "A page reload command by default", 0, "The child can attach the callback to the built-in button event prop."],
    ["Which component is usually a good place to choose an app-specific action?", "The parent that owns the action", "A generic styled button with no context", 0, "The parent knows what the action should do in that part of the app."],
  ]),
  eventTopic("react-event-handler-prop-names", "Naming Event Handler Props", "Choose clear callback prop names for custom component interactions.", [
    "Native elements expect browser event prop names such as onClick. Custom components can use names that describe the application action, often starting with on followed by a capitalized verb or concept.",
    "A custom component can translate a domain-specific callback into a native event. Clear names make the relationship between a user's action and the parent's behavior easier to follow.",
  ], [
    "function MenuItem({ onChoose }) {\n  return <button onClick={onChoose}>Choose item</button>;\n}",
    "<VideoToolbar onPlayClip={playClip} onAddToQueue={queueClip} />",
    "function Toolbar({ onCreateReport }) {\n  return <button onClick={onCreateReport}>New report</button>;\n}",
  ], [
    ["Which name is a clear custom callback prop?", "onChoosePlan", "clickFunctionThing", 0, "A name that describes the action helps explain what the callback represents."],
    ["Which prop name does a native button use for a click?", "onClick", "onChoosePlan", 0, "Native elements use the browser event prop, onClick."],
    ["Why name a custom callback for the app action?", "It explains the behavior without exposing the child's implementation", "It makes React skip rendering the child", 0, "Domain-specific names keep parent-child responsibilities clear."],
  ]),
  eventTopic("react-event-propagation", "Event Propagation", "Understand how many events reach handlers on ancestor elements.", [
    "When an event happens on a nested element, it can bubble upward through the rendered DOM hierarchy. A handler on the target runs, followed by handlers on eligible ancestors.",
    "This can be useful when a parent intentionally handles actions from its children, but it can also trigger more than one response. Use semantic controls and make parent handlers safe for the events that may reach them.",
  ], [
    "<div onClick={() => console.log('Card')}>\n  <button onClick={() => console.log('Open')}>Open</button>\n</div>",
    "function ListRow() {\n  return <li onClick={selectRow}><button onClick={openDetails}>Details</button></li>;\n}",
    "<section onClick={trackSection}><a href='/guide'>Read guide</a></section>",
  ], [
    ["When a nested button is clicked, what may happen to the click event?", "It can reach handlers on ancestor elements", "It only exists on the button and can never travel", 0, "Click events bubble through ancestors unless propagation is stopped."],
    ["Which handler usually runs first in a bubbling click?", "The handler on the clicked target", "The handler on the outermost parent", 0, "Bubbling proceeds outward from the event target."],
    ["Why should a parent click handler account for child actions?", "A child's event may also reach the parent", "Parents always disable child controls", 0, "The same event can trigger handlers along the ancestor path."],
  ]),
  eventTopic("react-stopping-event-propagation", "Stopping Propagation", "Keep an event from reaching ancestor handlers when that fits the interaction.", [
    "An event handler receives an event object. Calling stopPropagation() tells the browser event system not to continue bubbling to ancestor handlers for that event.",
    "Use this selectively. A child control inside a clickable card may need to perform its own action without also activating the card. The child can stop propagation before running its callback.",
  ], [
    "<button onClick={event => {\n  event.stopPropagation();\n  openMenu();\n}}>More options</button>",
    "function InnerAction({ onRun }) {\n  return <button onClick={event => { event.stopPropagation(); onRun(); }}>Run</button>;\n}",
    "<article onClick={openArticle}>\n  <button onClick={event => { event.stopPropagation(); saveArticle(); }}>Save</button>\n</article>",
  ], [
    ["Which method stops a bubbling event from reaching ancestors?", "stopPropagation()", "preventDefault()", 0, "stopPropagation controls event travel through the ancestor path."],
    ["When might a nested button stop propagation?", "When its action should not also trigger a clickable parent", "Whenever the button has a label", 0, "A nested save or menu action may be separate from the parent card action."],
    ["What should happen after stopping propagation if the child still needs its action?", "Call the child's intended handler as well", "Assume stopping propagation calls it automatically", 0, "Stopping the event only affects propagation; it does not run the app callback."],
  ]),
  eventTopic("react-event-explicit-handler-chaining", "Passing Handlers Instead of Relying on Propagation", "Coordinate child and parent behavior through explicit callback calls.", [
    "A child handler can run its own small step and then call a callback provided by its parent. This makes the order of behavior explicit instead of relying on an event bubbling to another element's handler.",
    "Explicit callback chaining is useful when the child must do something before notifying the parent. It is ordinary function flow, so make sure the callback exists when the component requires it and pass any needed data deliberately.",
  ], [
    "function StarButton({ onToggle }) {\n  function handleClick() {\n    recordClick();\n    onToggle();\n  }\n  return <button onClick={handleClick}>Star</button>;\n}",
    "<Tag onRemove={() => removeTag(tag.id)} />",
    "function ConfirmButton({ onConfirm }) {\n  return <button onClick={() => { closeDialog(); onConfirm(); }}>Confirm</button>;\n}",
  ], [
    ["What does explicit callback chaining make easier to see?", "The order in which child and parent behaviors run", "The browser's CSS cascade order", 0, "The child handler calls its own steps and then the provided callback."],
    ["How can a child tell its parent which item changed?", "Pass the item ID to the callback", "Wait for a CSS selector to send the ID", 0, "A callback can receive the data the parent needs to update its state."],
    ["What is a callback prop?", "A function supplied by another component", "A special HTML attribute handled without JavaScript", 0, "The parent passes a function value that a child may call."],
  ]),
  eventTopic("react-preventing-default-behavior", "Preventing Default Behavior", "Stop a browser's built-in event action when React should handle it instead.", [
    "Some browser events have a built-in result. Submitting a form can navigate or reload the page, while a link follows its destination. Call preventDefault() on the event when the interface needs to handle that action itself.",
    "Preventing the default action is different from stopping propagation. One cancels a browser behavior associated with the event; the other controls whether the event travels to ancestor handlers.",
  ], [
    "function handleSubmit(event) {\n  event.preventDefault();\n  saveForm();\n}",
    "<form onSubmit={handleSubmit}><input name='email' /><button>Join</button></form>",
    "function handleLink(event) {\n  event.preventDefault();\n  openInPanel();\n}",
  ], [
    ["Which method cancels a browser's default action for an event?", "preventDefault()", "stopPropagation()", 0, "preventDefault prevents the event's built-in browser behavior."],
    ["What is often prevented when a React form handles its own submit?", "The browser's default form navigation or reload", "The component's next render", 0, "Preventing the default lets the app process the form without a browser navigation."],
    ["What does stopPropagation affect?", "Whether the event reaches ancestor handlers", "Whether a form's default navigation happens", 0, "Propagation and default browser behavior are separate event concerns."],
  ]),
  eventTopic("react-event-side-effects", "Can Event Handlers Have Side Effects?", "Run user-triggered actions in handlers while keeping render calculations predictable.", [
    "Event handlers run because a particular interaction occurred, so they are an appropriate place for actions such as updating state, saving a form, or requesting a download. Rendering has a different job: calculate the UI for current inputs.",
    "Avoid performing user actions directly in the component body, where rendering may happen more than once. Put each action behind the event that should trigger it and keep state updates immutable.",
  ], [
    "<button onClick={() => setSaved(true)}>Save</button>",
    "<button onClick={() => navigator.clipboard.writeText(text)}>Copy</button>",
    "function AddNote({ note, onAdd }) {\n  return <button onClick={() => onAdd(note)}>Add note</button>;\n}",
  ], [
    ["Where is a good place for an action caused by a click?", "In the click handler", "Directly in the component body on every render", 0, "The handler runs because the user requested that action."],
    ["What should a component render function primarily do?", "Calculate UI from current inputs and state", "Send every user request to a server", 0, "Rendering should describe the UI rather than perform unrelated actions."],
    ["Why place a save operation behind a submit or click event?", "It runs in response to the intended user action", "It guarantees that the component never renders again", 0, "The event provides the specific moment the side effect should occur."],
  ]),
  eventTopic("react-events-recap", "Recap", "Review how handlers, event objects, propagation, and browser defaults work together.", [
    "Pass event-handler functions to JSX props; do not call them during render. A handler can use component props, and a parent can provide behavior through callback props with clear names.",
    "Events can bubble to ancestors. Use stopPropagation() to prevent that travel and preventDefault() to cancel a browser's default action. These methods solve different problems, so choose only the one the interaction needs.",
  ], [
    "<button onClick={handleSave}>Save</button>",
    "<form onSubmit={event => { event.preventDefault(); submit(); }}>...</form>",
    "<button onClick={event => { event.stopPropagation(); selectOption(); }}>Select</button>",
  ], [
    ["What is the key difference between passing and calling a handler?", "Passing waits for the event; calling runs immediately", "They always run at the same time", 0, "A function reference is invoked by React when the event occurs."],
    ["Which method is for cancelling default browser behavior?", "preventDefault()", "stopPropagation()", 0, "preventDefault cancels an action such as a form's default navigation."],
    ["Which method is for stopping an event from bubbling to an ancestor?", "stopPropagation()", "preventDefault()", 0, "stopPropagation controls the event's path through ancestors."],
  ]),
  eventTopic("react-events-challenges", "Challenges", "Practice correcting handler timing and wiring reusable controls to parent actions.", [
    "Challenge 1: A theme button changes the page color in a function called handleTheme, but the change happens during render and the button cannot be clicked correctly. Fix the event prop so the function is passed for later execution.",
    "Challenge 2: A reusable NoteButton should call its parent's onAdd callback with the note ID. Add the needed props and handler, then prevent an enclosing clickable card from receiving the button click if those actions should stay separate.",
  ], [
    "// Fix: <button onClick={handleTheme}>Switch theme</button>",
    "function NoteButton({ noteId, onAdd }) {\n  return <button onClick={() => onAdd(noteId)}>Add note</button>;\n}",
    "<button onClick={event => { event.stopPropagation(); onAdd(noteId); }}>Add</button>",
  ], [
    ["A button uses onClick={handleTheme()}. What is the main issue?", "It calls the function during render instead of passing it", "It prevents React from reading CSS", 0, "The parentheses invoke the handler immediately."],
    ["How can a reusable child tell its parent which note to add?", "Call the provided callback with the note ID", "Change the parent's DOM node directly", 0, "The child can pass the ID to the parent's callback."],
    ["Which event method prevents the button click from reaching a parent card?", "stopPropagation()", "preventDefault()", 0, "Stopping propagation keeps the event from bubbling to the parent handler."],
  ]),
]);
