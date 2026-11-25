import { chapter } from "./resource-chapter";

type QuizRow = [string, string, string, number, string];

function interactiveTopic(
  id: string,
  title: string,
  summary: string,
  content: string[],
  examples: [string, string, string],
  quizRows: [QuizRow, QuizRow, QuizRow],
) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({
      title: `Example ${index + 1}`,
      code,
      result: "Try this pattern in a small component and observe how the rendered interface responds.",
    })),
    quizzes: quizRows.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0
        ? [correct, alternate, "Change the page by editing the DOM manually"]
        : [alternate, correct, "Change the page by editing the DOM manually"],
      answer,
      explanation,
    })),
  };
}

export const addingInteractivityLessons = chapter("Learn React · Adding Interactivity", [
  interactiveTopic("react-adding-interactivity", "Adding Interactivity", "Connect user actions to state so a React screen can respond and change over time.", [
    "Interactive interfaces respond to actions such as clicking a control, choosing an option, or entering text. In React, event handlers describe what should happen after an action, while state stores values that need to survive between renders.",
    "A state update asks React to render again with the new value. React calculates the next UI and commits the necessary changes to the page. Treat state as read-only: create new objects and arrays when their contents need to change.",
  ], [
    "function WelcomeButton() { return <button onClick={() => alert('Welcome!')}>Say hello</button>; }",
    "const [open, setOpen] = useState(false);\nreturn <button onClick={() => setOpen(value => !value)}>{open ? 'Close' : 'Open'}</button>;",
    "const [items, setItems] = useState([]);\nfunction addItem(item) { setItems(current => [...current, item]); }",
  ], [
    ["Which pair makes an interface respond to an action and remember a changing value?", "An event handler and state", "A class name and a comment", 0, "Handlers respond to actions; state keeps changing data between renders."],
    ["What does calling a state setter ask React to do?", "Render the component again using updated state", "Change the current local variable immediately", 0, "A setter queues a state change and React renders with the next state."],
    ["How should an array in state usually be changed?", "Create a new array containing the desired items", "Edit the existing array in place", 0, "A new array preserves the previous state value and makes the update clear."],
  ]),
  interactiveTopic("react-responding-to-events", "Responding to Events", "Attach functions to JSX event props to handle clicks, input, and other actions.", [
    "React event props use camelCase names such as onClick and onChange. Pass a function as the value so React can call it when the event happens; writing handleSave() would run it during rendering instead.",
    "You can define a handler inside a component or pass a handler prop to a child. The browser event is available as the handler argument, which is useful for reading form values or preventing a form's default submission.",
  ], [
    "function SaveButton() {\n  function handleSave() { console.log('Saved'); }\n  return <button onClick={handleSave}>Save</button>;\n}",
    "<input onChange={event => setQuery(event.target.value)} />",
    "function SearchForm() {\n  function handleSubmit(event) {\n    event.preventDefault();\n    search();\n  }\n  return <form onSubmit={handleSubmit}><button>Search</button></form>;\n}",
  ], [
    ["How should a click handler normally be supplied to onClick?", "Pass the function, such as onClick={handleSave}", "Call it during render, such as onClick={handleSave()}", 0, "Passing a function lets React invoke it after a click."],
    ["Which event prop commonly reports edits to an input?", "onChange", "onHoverText", 0, "onChange is used to react to input value changes."],
    ["What does event.preventDefault() do in a form handler?", "Stops the browser's default form submission behavior", "Clears every React state variable", 0, "It prevents the default browser action so the handler can manage submission."],
  ]),
  interactiveTopic("react-state-memory", "State: A Component's Memory", "Use state for information that must remain available across renders and change the UI.", [
    "A normal local variable is recreated when a component function runs. State is managed by React, so its latest value is available on the next render and can determine what the component displays.",
    "useState returns the current value and a setter. Give each state value a clear purpose, and call Hooks at the top level of a component or custom Hook rather than inside a condition or loop.",
  ], [
    "import { useState } from 'react';\nconst [page, setPage] = useState(1);",
    "const [isExpanded, setIsExpanded] = useState(false);\nreturn <section>{isExpanded && <p>Extra details</p>}</section>;",
    "function Stepper() {\n  const [step, setStep] = useState(0);\n  return <button onClick={() => setStep(step + 1)}>Step {step}</button>;\n}",
  ], [
    ["Why use state instead of a regular local variable for a changing screen value?", "React keeps state and uses it on later renders", "A local variable is automatically saved by the browser", 0, "React preserves state between component renders."],
    ["What two values does useState provide?", "The current state and a setter function", "A CSS class and a DOM node", 0, "The Hook returns the stored value and a function to request its update."],
    ["Where should a Hook such as useState be called?", "At the top level of a component or custom Hook", "Only inside an if branch", 0, "Top-level Hook calls keep their order consistent between renders."],
  ]),
  interactiveTopic("react-render-and-commit", "Render and Commit", "Follow how React responds to an update by calculating UI and applying changes.", [
    "A screen update begins when React receives a request to render, such as an initial mount or a state update. React then calls the relevant component functions to calculate what the interface should look like.",
    "After rendering, React commits the needed changes to the browser DOM. A render is a calculation; it should not perform actions such as changing shared data or sending a request. React may render without needing to change the DOM if the output is already equivalent.",
  ], [
    "// Initial mount: React calls App and its child components to calculate the UI.",
    "setIsOpen(true); // requests a new render with the updated value",
    "function Label({ text }) { return <span>{text}</span>; }\n// React compares the calculated result and commits needed DOM changes.",
  ], [
    ["What does rendering a component calculate?", "The UI that should correspond to its inputs and state", "A direct edit to every DOM node", 0, "Rendering computes the next UI description from the component's inputs."],
    ["What happens during a commit?", "React applies needed changes to the host UI", "React rewrites every source file", 0, "The commit phase applies relevant updates to the browser or native UI."],
    ["Which action belongs outside the render calculation?", "Sending a network request caused by a click", "Returning JSX from a component", 0, "Rendering should stay focused on calculating UI, not causing side effects."],
  ]),
  interactiveTopic("react-state-as-snapshot", "State as a Snapshot", "Understand why a state variable keeps its current render's value inside running code.", [
    "When React renders a component, it supplies a snapshot of state for that render. Event handlers created during that render close over those values, so calling a setter does not rewrite the variables in the already-running function.",
    "A setter requests a later render with new state. This explains why logging a value immediately after its setter still shows the older snapshot, and why a delayed callback may use values from the render where it was created.",
  ], [
    "function handleClick() {\n  setCount(count + 1);\n  console.log(count); // value from this render\n}",
    "function handleChoose() {\n  setColor('teal');\n  setTimeout(() => console.log(color), 500); // captured render value\n}",
    "function handleToggle() {\n  const next = !enabled;\n  setEnabled(next);\n  setNotice(next ? 'Enabled' : 'Disabled');\n}",
  ], [
    ["What does a handler's state variable represent?", "The value from the render that created that handler", "A variable that changes immediately after every setter call", 0, "Each render and its handlers use a fixed snapshot of state values."],
    ["What will a log directly after setCount(count + 1) usually read in that handler?", "The count from the current render", "The next render's count automatically", 0, "Setting state schedules an update but does not replace the current snapshot."],
    ["Why might a delayed callback use an earlier value?", "It closed over values from the render where it was created", "Timeout callbacks always reset React state", 0, "Closures retain the values that were in scope when the callback was created."],
  ]),
  interactiveTopic("react-queue-state-updates", "Queueing a Series of State Updates", "Use updater functions when the next state depends on the previous queued value.", [
    "Several state updates can be requested during one event. If each update is calculated from the same render snapshot, repeated calls such as setScore(score + 1) can all request the same next value.",
    "Pass a function to the setter when an update depends on the previous state. React applies updater functions in sequence, so each one receives the result produced by the one before it.",
  ], [
    "setScore(previous => previous + 1);",
    "function addThree() {\n  setScore(value => value + 1);\n  setScore(value => value + 1);\n  setScore(value => value + 1);\n}",
    "setMessages(current => [...current, newMessage]);\nsetMessages(current => current.slice(1));",
  ], [
    ["When is an updater function especially useful?", "When the next value depends on previous state", "When setting a fixed label that never changes", 0, "The updater receives the latest queued state value."],
    ["What happens when React processes several updater functions in order?", "Each function receives the result of the previous update", "Each function always receives the same initial state", 0, "Queued updaters are applied one after another."],
    ["Which setter adds one item using the previous array value?", "setItems(current => [...current, item])", "setItems(items.push(item))", 0, "Copying the previous array produces a new value with the added item."],
  ]),
  interactiveTopic("react-updating-objects-in-state", "Updating Objects in State", "Keep state objects unchanged and create a replacement with the updated fields.", [
    "Objects in state should be treated as read-only. Instead of changing a property on the existing object, create another object that contains the previous fields and the intended changes.",
    "The spread syntax copies the top level only. When changing a nested object, copy each level along the path to the field so unrelated fields are preserved and prior state remains intact.",
  ], [
    "setProfile(current => ({ ...current, nickname: 'Riya' }));",
    "setSettings(current => ({ ...current, notifications: !current.notifications }));",
    "setBook(current => ({ ...current, details: { ...current.details, city: 'Pune' } }));",
  ], [
    ["How should one field of an object state usually be changed?", "Create a new object with the old fields and the changed field", "Assign directly to the existing object's property", 0, "A replacement object keeps the previous state value unchanged."],
    ["What does object spread copy?", "Properties from the object at that level", "Every nested object recursively", 0, "Spread is shallow, so nested values need their own copies when changed."],
    ["Why copy each level when changing nested state?", "To preserve other fields and avoid mutating previous state", "To make the property names shorter", 0, "Each changed level needs a new object while unchanged fields are carried over."],
  ]),
  interactiveTopic("react-updating-arrays-in-state", "Updating Arrays in State", "Add, remove, or edit list items by creating a new array value.", [
    "Treat arrays in state as read-only. Methods such as push, pop, and sort change the original array, so avoid calling them directly on a state value. Use methods that return a new array or copy first.",
    "Use map to replace an item, filter to remove items, and spread syntax to add items. If sorting, copy the array before calling sort so the existing state is left untouched.",
  ], [
    "setTasks(current => [...current, newTask]);",
    "setTasks(current => current.filter(task => task.id !== removedId));",
    "setTasks(current => current.map(task => task.id === edited.id ? edited : task));\nconst sorted = [...tasks].sort(compareTasks);",
  ], [
    ["Which method can remove matching entries without mutating the original array?", "filter", "pop", 0, "filter creates a new array containing items that pass the condition."],
    ["How can an item be replaced while preserving the rest of an array?", "Use map and return a replacement for the matching item", "Assign to the array's existing index", 0, "map returns a new array and can replace only the matching element."],
    ["How can an array be sorted without mutating state?", "Copy it first, then sort the copy", "Call sort directly on the state array", 0, "sort mutates its target, so sorting a copy preserves the state array."],
  ]),
  interactiveTopic("react-interactivity-next", "What's Next?", "Bring event handling and state updates together, then continue to shared state patterns.", [
    "Interactive components use event handlers to respond to a specific action and state to remember information between renders. When an update depends on the previous value, use an updater function; for objects and arrays, produce a new value.",
    "Practice by building a small form, counter, or list editor. Once several components need the same changing information, the next step is to decide which component should own that shared state and how children can request updates.",
  ], [
    "// Form: read input in onChange and keep its value in state.",
    "// Counter: use setCount(value => value + 1) for previous-state updates.",
    "// List: add with [...items, item], remove with filter, and edit with map.",
  ], [
    ["What should an event handler usually do?", "Respond to the action and request any needed state update", "Mutate the DOM behind React's back", 0, "Handlers connect user actions to application behavior and state updates."],
    ["Which approach keeps an updated array predictable?", "Create a new array with the intended change", "Change the state array in place", 0, "New arrays preserve previous snapshots and make updates explicit."],
    ["Where should you continue after learning local interaction state?", "Explore how related components share state", "Repeat the same click handler in every child", 0, "Shared state patterns coordinate values used by multiple components."],
  ]),
]);
