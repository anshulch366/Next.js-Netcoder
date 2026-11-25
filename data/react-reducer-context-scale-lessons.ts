import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function scaleTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace how shared state and dispatch reach the components that need them." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Context automatically makes state persistent after reload"] : [alternate, correct, "Context automatically makes state persistent after reload"],
      answer,
      explanation,
    })),
  };
}

export const reducerContextScaleLessons = chapter("Learn React · Managing State · Scaling Up with Reducer and Context", [
  scaleTopic("react-scaling-up-reducer-context", "Scaling Up with Reducer and Context", "Combine reducer-managed state with context so distant components can read data and dispatch updates.", [
    "A reducer gathers related state transitions in one function. Context makes a value available to descendants without requiring every intermediate component to forward it through props.",
    "Together, they can organize a complex screen: a provider owns the reducer state and exposes the current data and dispatch function to components that need them. This pattern still keeps state scoped to a specific subtree.",
  ], [
    "const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);",
    "<TasksContext.Provider value={tasks}><TaskList /></TasksContext.Provider>",
    "const dispatch = useContext(TasksDispatchContext);",
  ], [
    ["What does combining a reducer and context help with?", "Organizing transitions and sharing state through a subtree", "Saving state permanently without a storage system", 0, "The reducer organizes updates, and context exposes selected values to descendants."],
    ["Where does reducer-managed state live in this pattern?", "In the component that calls useReducer, often a provider", "Inside every consumer as a shared global variable", 0, "The reducer state belongs to its owner component and is provided downward."],
    ["What does context remove in a deep tree?", "Repeatedly forwarding the same state and dispatch props", "The need for all component boundaries", 0, "Consumers can read selected context values without every layer forwarding them."],
  ]),
  scaleTopic("react-combining-reducer-with-context", "Combining a Reducer with Context", "Use context for both the current state and the dispatch function when many descendants need them.", [
    "A task application may keep its task list in a reducer near the top of the screen. Passing tasks, change handlers, and delete handlers through several layers can make components carry props they do not use.",
    "Create one context for the current state and another for dispatch. Components that display data read the state context; components that trigger changes read dispatch and send actions.",
  ], [
    "const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);",
    "<TasksContext.Provider value={tasks}><TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider></TasksContext.Provider>",
    "function TaskList() { const tasks = useContext(TasksContext); return <List tasks={tasks} />; }",
  ], [
    ["Why might state and dispatch use separate contexts?", "Components can subscribe to the value they actually need", "React requires every reducer to have two contexts", 0, "Separate contexts distinguish reading current data from sending actions."],
    ["Which context does a display-only list usually need?", "The current tasks state context", "The dispatch context only", 0, "A list needs state to render the current task data."],
    ["Which context does an add button need to update tasks?", "The dispatch context", "The state context as a setter", 0, "Dispatch sends an action to the reducer."],
  ]),
  scaleTopic("react-create-reducer-context", "Step 1: Create the Context", "Create context objects for the data and the actions, then export them for providers and consumers.", [
    "Use createContext to make a context for the current state and another for its dispatch function. Export both from a module so the provider and child components use the same context objects.",
    "A null default can make it clear that consumers are expected to be rendered within a provider. When useful, add a custom Hook that checks for a missing provider and reports a helpful error.",
  ], [
    "import { createContext } from 'react';\nexport const TasksContext = createContext(null);",
    "export const TasksDispatchContext = createContext(null);",
    "export function useTasks() { return useContext(TasksContext); }",
  ], [
    ["Why export context objects from a shared module?", "Provider and consumers can reference the same context", "The context is automatically written to a database", 0, "All consumers and providers must import the same context object."],
    ["What does a null default often communicate?", "A provider is expected to supply the actual value", "The reducer always returns null", 0, "The default can make an absent provider easier to detect."],
    ["Where is createContext usually called?", "At module scope", "Inside a component on every render", 0, "A stable context object should be created once, outside component renders."],
  ]),
  scaleTopic("react-put-state-and-dispatch-into-context", "Step 2: Put State and Dispatch into Context", "Provide the reducer state and dispatch to the subtree that will consume them.", [
    "Call useReducer in a provider or top-level screen component. Wrap the relevant children in the state and dispatch providers, supplying the current state and dispatch function as their values.",
    "While migrating, you can move consumers one at a time from props to context. Once they read the needed values themselves, remove the now-unneeded prop forwarding through intermediate components.",
  ], [
    "const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);",
    "return <TasksContext.Provider value={tasks}><TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider></TasksContext.Provider>;",
    "// Convert one consumer from props to useContext, then remove redundant forwarding.",
  ], [
    ["What does the provider's state context value contain?", "The current reducer state", "A function that changes CSS files", 0, "The state provider supplies the current state value."],
    ["What does the dispatch context value contain?", "The dispatch function returned by useReducer", "The initial state only", 0, "Descendants can dispatch actions through this function."],
    ["Can you migrate consumers gradually?", "Yes, move them from props to context in steps", "No, all components must switch at once", 0, "Incremental migration makes the data flow easier to check."],
  ]),
  scaleTopic("react-use-context-anywhere-in-tree", "Step 3: Use Context Anywhere in the Tree", "Let each descendant read state or dispatch directly, while keeping local state local.", [
    "A descendant that renders a task list can read the tasks context. An add form or task row can read dispatch and send actions such as added, changed, or deleted.",
    "Each component should read only what it needs. A local editing toggle can remain in the task row with useState, while the shared task collection stays in the reducer provider.",
  ], [
    "function TaskList() { const tasks = useContext(TasksContext); return tasks.map(task => <Task key={task.id} task={task} />); }",
    "function AddTask() { const dispatch = useContext(TasksDispatchContext); return <button onClick={() => dispatch({ type: 'added', text: 'Read' })}>Add</button>; }",
    "function Task({ task }) { const [editing, setEditing] = useState(false); /* local UI state */ }",
  ], [
    ["How can a distant component change reducer state?", "Read dispatch from context and send an action", "Mutate the provider's state object directly", 0, "Consumers dispatch actions; the reducer computes the next state."],
    ["Should every value in every descendant become context?", "No, components should read only shared values they need", "Yes, local UI state must also be global", 0, "Keep local concerns local and share only appropriate data."],
    ["Where might a task row's temporary edit toggle belong?", "As local state in the task row", "In a context used by the entire application", 0, "A small UI-only value can remain local to its component."],
  ]),
  scaleTopic("react-moving-wiring-single-file", "Moving All Wiring into a Single File", "Bundle the reducer, contexts, provider, and optional custom Hooks into a focused state module.", [
    "As context setup grows, a dedicated module can export the contexts, reducer, initial state, and a provider component. The provider owns useReducer and nests the state and dispatch providers around its children.",
    "The screen then focuses on layout: it wraps relevant content in the provider. Custom Hooks such as useTasks and useTasksDispatch can hide context details and provide one place to validate provider usage.",
  ], [
    "export function TasksProvider({ children }) {\n  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n  return <TasksContext.Provider value={tasks}><TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider></TasksContext.Provider>;\n}",
    "function TaskApp() { return <TasksProvider><TaskList /><AddTask /></TasksProvider>; }",
    "export function useTasksDispatch() { return useContext(TasksDispatchContext); }",
  ], [
    ["What is one benefit of a provider component?", "It collects reducer and context wiring in one place", "It removes the need to render children", 0, "A provider can keep setup code out of the screen layout."],
    ["What should a provider usually render around its children?", "The context providers with reducer values", "A new unrelated application root", 0, "The provider nests the state and dispatch contexts around its subtree."],
    ["What can a custom context Hook provide?", "A simpler API and a place to check provider usage", "Automatic permanent storage for all actions", 0, "A custom Hook can hide context details and validate assumptions."],
  ]),
  scaleTopic("react-scaling-up-reducer-context-recap", "Recap", "Review how a provider, reducer, state context, and dispatch context fit together.", [
    "A reducer owns the rules for changing shared state. A provider calls useReducer and supplies the current state and dispatch through contexts to descendants.",
    "Consumers read the data or dispatch actions as needed, so intermediate components do not have to forward every value. Keep provider scope intentional and leave simple or local values as props or component state when that is clearer.",
  ], [
    "<TasksProvider><TaskList /><AddTask /></TasksProvider>",
    "const tasks = useTasks();\nconst dispatch = useTasksDispatch();",
    "dispatch({ type: 'deleted', id: taskId });",
  ], [
    ["What does the reducer do in this pattern?", "Calculates state transitions from actions", "Passes values through the tree", 0, "The reducer owns the state update rules."],
    ["What does context do in this pattern?", "Makes selected values available to descendants", "Calculates every next state value", 0, "Context distributes the state and dispatch through a subtree."],
    ["What is a good rule for provider scope?", "Wrap the part of the tree that needs the shared state", "Wrap unrelated screens automatically", 0, "A focused provider keeps state ownership understandable."],
  ]),
]);
