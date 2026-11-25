import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function reducerTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace the action, reducer branch, and returned state to understand the transition." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Change the state object directly in an event handler"] : [alternate, correct, "Change the state object directly in an event handler"],
      answer,
      explanation,
    })),
  };
}

export const reducerLessons = chapter("Learn React · Managing State · Extracting State Logic into a Reducer", [
  reducerTopic("react-extracting-state-logic-reducer", "Extracting State Logic into a Reducer", "Use a reducer to keep related state transition rules together when component updates become hard to follow.", [
    "When several event handlers update the same state, each handler can accumulate its own update rules. A reducer moves those rules into one function that receives the current state and an action, then returns the next state.",
    "The component dispatches descriptions of user actions, while the reducer decides how those actions change data. This separation can make a complex component easier to scan, debug, and maintain.",
  ], [
    "function reducer(state, action) {\n  if (action.type === 'increment') return { count: state.count + 1 };\n  return state;\n}",
    "const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\ndispatch({ type: 'deleted', id: taskId });",
    "// Choose a reducer when multiple handlers share many related update rules.",
  ], [
    ["What problem can a reducer help with?", "State update logic spread across many handlers", "A component with one simple boolean", 0, "Reducers can centralize complex, related state transitions."],
    ["What does a reducer calculate?", "The next state from current state and an action", "The component's CSS styles from its filename", 0, "A reducer receives state and an action and returns the next state."],
    ["When is useState often simpler?", "When updates are small and straightforward", "Whenever state has more than one property", 0, "Simple state usually needs less setup with useState."],
  ]),
  reducerTopic("react-consolidate-state-logic-with-reducer", "Consolidate State Logic with a Reducer", "Recognize when related actions should share one place for their state update rules.", [
    "Imagine a task list with separate add, edit, and delete handlers. If each handler contains array transformations and validation, it can become difficult to see all possible transitions together.",
    "A reducer gathers those transitions in one place. Event handlers can focus on which interaction occurred, and the reducer can consistently produce the corresponding next list.",
  ], [
    "function addTask(tasks, task) { return [...tasks, task]; }\nfunction deleteTask(tasks, id) { return tasks.filter(task => task.id !== id); }",
    "dispatch({ type: 'added', id: nextId, text });\ndispatch({ type: 'deleted', id: taskId });",
    "// One reducer can handle added, changed, and deleted actions for a task list.",
  ], [
    ["What is a sign that state logic may benefit from a reducer?", "Many handlers repeat or coordinate related update rules", "A component contains a single static heading", 0, "Centralizing related rules makes larger transition sets easier to review."],
    ["Where does the reducer place the add/edit/delete rules?", "Together in one state transition function", "In the browser's DOM event system", 0, "The reducer centralizes how actions affect the state."],
    ["Does every component need a reducer?", "No, use one when it improves clarity", "Yes, useReducer is required for all state", 0, "A reducer is an organizational tool, not a requirement."],
  ]),
  reducerTopic("react-reducer-dispatch-actions", "Step 1: Move from Setting State to Dispatching Actions", "Describe what happened with actions instead of putting state transformations in every event handler.", [
    "An action is a regular object that describes one event. A type such as added, changed, or deleted names what happened; other fields carry the minimum data needed for the transition.",
    "Handlers call dispatch with an action. They do not calculate the entire next state. This keeps interaction code focused on user intent and sends the state change to the reducer.",
  ], [
    "dispatch({ type: 'added', id: nextId++, text });",
    "dispatch({ type: 'changed', task: updatedTask });",
    "dispatch({ type: 'deleted', id: taskId });",
  ], [
    ["What does an action usually describe?", "What happened in the interaction", "The full visual layout of the page", 0, "Actions describe events such as adding or deleting a task."],
    ["What is dispatch's role?", "Send an action for the reducer to process", "Directly mutate an array in place", 0, "dispatch asks React to process a described state transition."],
    ["What should an action usually contain?", "A type and the minimal data needed", "A duplicate copy of the entire application", 0, "Small action payloads make transitions easier to understand."],
  ]),
  reducerTopic("react-write-a-reducer-function", "Step 2: Write a Reducer Function", "Return a new state value for each supported action without mutating the existing state.", [
    "A reducer takes the current state and an action. It checks the action type and returns the next state. A switch statement is a common way to make each transition visible.",
    "Use immutable updates such as map, filter, and spread syntax for arrays and objects. Include a default case for unknown action types so mistakes are easy to detect during development.",
  ], [
    "function tasksReducer(tasks, action) {\n  switch (action.type) {\n    case 'deleted': return tasks.filter(task => task.id !== action.id);\n    default: return tasks;\n  }\n}",
    "case 'added':\n  return [...state, { id: action.id, text: action.text, done: false }];",
    "case 'changed':\n  return state.map(item => item.id === action.item.id ? action.item : item);",
  ], [
    ["What are the reducer's two inputs?", "Current state and action", "Props and a DOM node", 0, "Reducers use the existing state and dispatched action."],
    ["What should a reducer return?", "The next state value", "A call to setState inside the reducer", 0, "React uses the returned value as the updated state."],
    ["How should a normal reducer update an array?", "Return a new array without mutating the old one", "Push directly into the existing state array", 0, "Immutable updates preserve the previous state snapshot."],
  ]),
  reducerTopic("react-use-reducer-from-component", "Step 3: Use the Reducer from Your Component", "Connect a reducer to a component with useReducer and dispatch actions from event handlers.", [
    "Import useReducer and pass it a reducer function plus the initial state. It returns the current state and a dispatch function.",
    "Replace direct state-setting handlers with dispatch calls. The event handler explains the interaction; the reducer computes how the data changes. The reducer can live in the same file or a separate module.",
  ], [
    "import { useReducer } from 'react';\nconst [tasks, dispatch] = useReducer(tasksReducer, initialTasks);",
    "function handleDelete(id) {\n  dispatch({ type: 'deleted', id });\n}",
    "<TaskList tasks={tasks} onDelete={handleDelete} />",
  ], [
    ["What does useReducer return?", "The current state and a dispatch function", "A state value and a setter that only accepts numbers", 0, "useReducer returns state plus dispatch."],
    ["What arguments does useReducer receive?", "A reducer and initial state", "A JSX element and a CSS class", 0, "The reducer defines transitions, and the initial value starts the state."],
    ["Can a reducer live in another file?", "Yes, it can be imported into the component", "No, reducers must be nested inside JSX", 0, "Separating the reducer can make component files easier to read."],
  ]),
  reducerTopic("react-comparing-usestate-and-usereducer", "Comparing useState and useReducer", "Choose the state Hook that keeps the component's update logic easiest to understand.", [
    "useState often takes less code and is easy to follow when a value has a few simple updates. useReducer adds an action model and a reducer function, which can be worthwhile when many handlers update related state.",
    "Reducers also make transitions easier to test as a pure function. The tradeoff is extra structure and code, so choose based on clarity rather than assuming one Hook is always better.",
  ], [
    "const [isOpen, setIsOpen] = useState(false); // a small independent value",
    "const [state, dispatch] = useReducer(formReducer, initialForm); // coordinated transitions",
    "// A reducer can be tested with reducer(previousState, action).",
  ], [
    ["Which Hook is often simplest for one small value?", "useState", "useReducer with many action cases", 0, "useState has less setup for straightforward updates."],
    ["What can useReducer improve for complex state?", "Keeping related transitions organized", "Automatically making every component faster", 0, "A reducer organizes update rules but is not an automatic performance tool."],
    ["Why can a reducer be easy to test?", "It can be called with state and action as a pure function", "It requires a browser for every transition", 0, "Pure reducer inputs and outputs can be checked directly."],
  ]),
  reducerTopic("react-writing-reducers-well", "Writing Reducers Well", "Keep reducers pure and make each action describe one meaningful interaction.", [
    "A reducer should return the same result for the same state and action. Do not make network requests, schedule timers, or perform other side effects inside it; keep those in event handlers or other appropriate logic.",
    "Do not mutate state objects or arrays. Design each action around one user interaction, even when that interaction changes several fields together. A single reset action is clearer than several unrelated field actions for one reset click.",
  ], [
    "// Pure: return a new object from the inputs.\nreturn { ...state, saved: true };",
    "// One interaction can update multiple related fields.\n dispatch({ type: 'form_reset' });",
    "// Keep effects outside the reducer.\nasync function handleSave() { await saveDraft(); dispatch({ type: 'saved' }); }",
  ], [
    ["What does reducer purity mean?", "Same inputs produce the same result without side effects", "The reducer sends requests whenever it runs", 0, "Reducers should calculate state only and avoid external effects."],
    ["Where should a network request generally happen?", "Outside the reducer, such as in event-driven logic", "Inside every reducer case", 0, "Reducers should stay pure; side effects belong elsewhere."],
    ["How should one reset-button interaction be represented?", "One action describing the reset", "One action for each individual field by default", 0, "A single action can represent one interaction that updates multiple fields."],
  ]),
  reducerTopic("react-writing-concise-reducers-with-immer", "Writing Concise Reducers with Immer", "Use an Immer-enabled reducer when immutable nested updates become hard to read.", [
    "Immutable updates can become verbose when state contains nested objects or arrays. Immer lets a reducer work with a draft and express changes with familiar operations such as push or property assignment.",
    "The draft is managed by Immer, which produces an immutable next state. This behavior only applies when using an Immer integration such as useImmerReducer; ordinary useReducer reducers must still return immutable updates and must not mutate their state argument.",
  ], [
    "// With an Immer-enabled reducer draft:\ndraft.tasks.push(newTask);",
    "// With an Immer-enabled reducer draft:\ndraft.tasks[index].done = true;",
    "// With plain useReducer, use an immutable update:\nreturn { ...state, tasks: [...state.tasks, newTask] };",
  ], [
    ["Why can Immer make a reducer more concise?", "It lets you write changes against a managed draft", "It removes the need to define any state", 0, "Immer translates draft changes into an immutable result."],
    ["Can a plain useReducer reducer mutate its state argument?", "No, it should return an immutable update", "Yes, React always clones it automatically", 0, "Mutation is only safe through an integration that provides a managed draft."],
    ["What does Immer produce from draft changes?", "A new immutable state value", "A DOM update outside React", 0, "Immer tracks draft operations and creates an immutable result."],
  ]),
  reducerTopic("react-extracting-state-logic-reducer-recap", "Recap", "Review how dispatch, actions, reducers, and useReducer fit together.", [
    "To use a reducer, dispatch actions from event handlers, write a pure reducer that returns the next state, then connect both with useReducer.",
    "Reducers add structure and can help with complex update logic, debugging, and testing. Keep actions descriptive, state updates immutable, and side effects outside the reducer.",
  ], [
    "dispatch({ type: 'added', task });",
    "function reducer(state, action) { return nextState; }",
    "const [state, dispatch] = useReducer(reducer, initialState);",
  ], [
    ["What is the usual reducer workflow?", "Dispatch an action, calculate next state, render from that state", "Mutate the DOM, then copy it into state", 0, "Actions describe events; the reducer calculates state for React to render."],
    ["What must the reducer do with state?", "Return the next state without mutating the old one", "Change it in place and return nothing", 0, "Reducers should produce immutable next state values."],
    ["Where should side effects go?", "Outside the reducer", "Inside the reducer's state calculation", 0, "Keeping effects out preserves reducer purity."],
  ]),
  reducerTopic("react-extracting-state-logic-reducer-challenges", "Challenges", "Practice dispatching actions and organizing a small reducer-driven interaction.", [
    "Challenge 1: A task list has TODO handlers for add, edit, and delete. Dispatch an action from each handler using the action shapes expected by the reducer.",
    "Challenge 2: Build a message form reducer with message and selected recipient fields. Add actions to edit the message, change recipient, and clear the message after sending. Keep each action descriptive and each transition immutable.",
  ], [
    "function handleAdd(text) { dispatch({ type: 'added', text, id: nextId++ }); }",
    "case 'message_changed': return { ...state, message: action.message };",
    "case 'sent': return { ...state, message: '' };",
  ], [
    ["What should a TODO click handler do in a reducer pattern?", "Dispatch the matching action", "Edit the DOM directly", 0, "The handler describes the event by dispatching an action."],
    ["How can a sent-message action clear the input?", "Return state with message set to an empty string", "Mutate the input element without changing state", 0, "The reducer returns the new state that represents the cleared message."],
    ["What helps make reducer actions understandable?", "Names that describe what happened", "Names that only say update1 or update2", 0, "Descriptive action types clarify the event history and reducer branches."],
  ]),
]);
