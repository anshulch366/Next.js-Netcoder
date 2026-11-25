import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function customHookTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "The custom Hook packages reusable behavior while each caller keeps its own Hook state." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "A custom Hook automatically shares one global state instance"] : [alternate, correct, "A custom Hook automatically shares one global state instance"],
      answer,
      explanation,
    })),
  };
}

export const customHookLessons = chapter("Learn React · Escape Hatches · Reusing Logic with Custom Hooks", [
  customHookTopic("react-reusing-logic-with-custom-hooks", "Reusing Logic with Custom Hooks", "Create application-specific Hooks to share stateful behavior without duplicating implementation details.", [
    "React includes Hooks such as useState, useContext, and useEffect. A custom Hook lets you combine these built-in Hooks to express a reusable behavior, such as tracking network status or connecting to a chat room.",
    "Custom Hooks let components describe what they need while the Hook contains how that behavior works. Each call follows the Rules of Hooks and runs as part of the calling component.",
  ], [
    "function StatusBar() { const online = useOnlineStatus(); return <p>{online ? 'Online' : 'Offline'}</p>; }",
    "function useChatRoom({ roomId }) { useEffect(() => connect(roomId), [roomId]); }",
    "function SaveButton() { const online = useOnlineStatus(); return <button disabled={!online}>Save</button>; }",
  ], [
    ["What is a custom Hook?", "A function that composes Hooks to reuse stateful logic", "A component that must return JSX", 0, "Custom Hooks organize reusable behavior and may return any value."],
    ["What can a custom Hook help remove?", "Duplicated stateful logic across components", "All independent component state", 0, "The shared implementation moves into the Hook."],
    ["What should a component focus on after extraction?", "The behavior it needs", "The internal subscription details", 0, "The Hook hides implementation details behind a meaningful API."],
  ]),
  customHookTopic("react-custom-hooks-share-logic-between-components", "Custom Hooks: Sharing Logic Between Components", "Extract repeated subscriptions or stateful behavior into one reusable Hook.", [
    "If a status bar and a save button both need to respond to online and offline events, copying the same state and subscription code into both components creates duplication.",
    "A useOnlineStatus Hook can own the subscription behavior and return the current status. Each component can use that result to render its own interface without repeating how browser events are handled.",
  ], [
    "function useOnlineStatus() { /* state plus online/offline subscription */ }",
    "function StatusBar() { const online = useOnlineStatus(); return <p>{online ? 'Online' : 'Offline'}</p>; }",
    "function SaveButton() { const online = useOnlineStatus(); return <button disabled={!online}>Save</button>; }",
  ], [
    ["What is shared by useOnlineStatus callers?", "The implementation logic", "One automatically shared state variable", 0, "Each call runs its own Hook state and Effect logic."],
    ["Why use a custom Hook instead of copying the subscription?", "It avoids repeating implementation details", "It makes both components become the same component", 0, "The behavior can be maintained in one place."],
    ["Can the two components render differently?", "Yes, they can use the same value for different UI", "No, a Hook forces identical JSX", 0, "Hooks share behavior, not component presentation."],
  ]),
  customHookTopic("react-extracting-custom-hook-from-component", "Extracting Your Own Custom Hook from a Component", "Move duplicated state and Effect logic into a focused use-prefixed function.", [
    "Start with repeated behavior inside a component, such as state plus an Effect that registers and removes browser event listeners. Move those Hook calls and related handlers into a new function.",
    "Return the value the component needs. Then replace the repeated code with a call to the custom Hook, keeping the component's presentation and user-specific actions in the component.",
  ], [
    "function useOnlineStatus() { const [online, setOnline] = useState(true); /* subscribe and clean up */ return online; }",
    "function StatusBar() { const isOnline = useOnlineStatus(); return <p>{isOnline ? 'Online' : 'Offline'}</p>; }",
    "function SaveButton() { const isOnline = useOnlineStatus(); /* render a disabled button when offline */ }",
  ], [
    ["What should move into a custom Hook?", "Reusable stateful behavior and its related Effects", "The component's entire visual tree by default", 0, "The Hook packages logic while the component keeps its rendering role."],
    ["What can a custom Hook return?", "Any useful value or object", "Only JSX", 0, "Unlike components, Hooks can return arbitrary values."],
    ["What should remain in the component?", "Its presentation and component-specific interactions", "Every duplicated subscription detail", 0, "Extraction should clarify responsibilities, not move all code indiscriminately."],
  ]),
  customHookTopic("react-hook-names-start-with-use", "Hook Names Always Start with use", "Follow the naming convention so React tooling can recognize functions that call Hooks.", [
    "A custom Hook name starts with use followed by a capital letter, such as useOnlineStatus or useChatRoom. Components start with a capital letter too, but components return UI while Hooks may return any value.",
    "The naming convention lets the Hooks linter know that the function may call Hooks and should follow Hook rules. A helper named getOnlineStatus should not call useState or useEffect.",
  ], [
    "function useOnlineStatus() { return useSyncExternalStore(subscribe, getSnapshot); }",
    "function useFormInput(initialValue) { const [value, setValue] = useState(initialValue); return [value, setValue]; }",
    "function StatusBar() { const online = useOnlineStatus(); return <p>{String(online)}</p>; }",
  ], [
    ["How should a custom Hook name begin?", "use followed by a capitalized word", "get followed by lowercase only", 0, "Hook naming lets React tooling identify Hook functions."],
    ["What can a Hook return?", "Any value", "Only a React element", 0, "Hooks are functions and can return values, objects, or tuples."],
    ["Why does the name matter to the linter?", "It signals that Hook rules apply inside", "It changes the Hook's runtime state sharing", 0, "The naming convention helps tooling enforce the Rules of Hooks."],
  ]),
  customHookTopic("react-custom-hooks-share-logic-not-state", "Custom Hooks Let You Share Stateful Logic, Not State Itself", "Remember that each custom Hook call has independent state unless you explicitly connect it to shared data.", [
    "Calling useOnlineStatus in two components runs the Hook logic for each component. The values may match because both subscribe to the same external network state, not because the Hook created one shared state variable.",
    "For shared React state, lift it to a common parent and pass it down, or use context or an external store when appropriate. A custom Hook alone shares logic, not a state instance.",
  ], [
    "function First() { const [value] = useLocalValue(); }\nfunction Second() { const [value] = useLocalValue(); } // independent calls",
    "function useLocalValue() { return useState(0); }",
    "// To share one value, keep it in a common owner or a shared store/context.",
  ], [
    ["Do two calls to the same custom Hook share local state automatically?", "No, each call is independent", "Yes, all calls become one global variable", 0, "Custom Hook calls have separate state just like the built-in Hooks they invoke."],
    ["Why might two online status values still match?", "Each Hook observes the same external network state", "The Hook shares one state instance by default", 0, "The values can match because both synchronize with the same source."],
    ["How can components share one React state value?", "Lift it to a common owner or use context/store", "Call the same custom Hook twice", 0, "Sharing state requires a shared owner or data source."],
  ]),
  customHookTopic("react-passing-reactive-values-between-hooks", "Passing Reactive Values Between Hooks", "Pass current props and state into custom Hooks so their Effects can synchronize with changes.", [
    "Custom Hooks run as part of the component render and receive the latest arguments. If roomId or serverUrl changes, the Hook can use those values as dependencies to reconnect appropriately.",
    "A Hook call is not an isolated one-time helper. Its logic participates in the caller's reactive data flow and must remain pure during rendering.",
  ], [
    "function useChatRoom({ serverUrl, roomId }) { useEffect(() => connect({ serverUrl, roomId }), [serverUrl, roomId]); }",
    "function ChatRoom({ roomId }) { const [serverUrl, setServerUrl] = useState(DEFAULT_URL); useChatRoom({ roomId, serverUrl }); }",
    "// Updating either input causes the Hook's synchronization to use the new value.",
  ], [
    ["When does a custom Hook receive updated inputs?", "When its component re-renders", "Only on the first call", 0, "The Hook receives current props and state on each render."],
    ["What should a Hook's Effect depend on?", "Reactive inputs it reads", "An empty list in every case", 0, "Dependencies make the Hook's external synchronization follow current inputs."],
    ["What should custom Hook code be during render?", "Pure", "A place for arbitrary immediate DOM mutations", 0, "Custom Hook logic is part of the calling component's render."],
  ]),
  customHookTopic("react-passing-event-handlers-to-custom-hooks", "Passing Event Handlers to Custom Hooks", "Accept callbacks as options and account for their identity when using them in Effects.", [
    "A custom chat Hook can accept onReceiveMessage so each component decides what to do with incoming messages. The Hook owns connection setup while the caller owns the notification behavior.",
    "If the callback is read by an Effect, it is a dependency and a new function each render may reconnect the chat. Where supported and appropriate, wrap the event-like callback in useEffectEvent so the Effect uses its latest behavior without treating it as a synchronization input.",
  ], [
    "function useChatRoom({ roomId, onReceiveMessage }) { /* connect and invoke callback */ }",
    "const onMessage = useEffectEvent(onReceiveMessage);\nuseEffect(() => connect(roomId, onMessage), [roomId]);",
    "useChatRoom({ roomId, onReceiveMessage: message => notify(message) });",
  ], [
    ["Why accept an event callback in a custom Hook?", "The caller can customize what happens when an event arrives", "The Hook can avoid all dependencies", 0, "The callback makes event behavior configurable by the caller."],
    ["What may happen if a callback dependency changes identity each render?", "An Effect may resynchronize unnecessarily", "React automatically shares the callback between components", 0, "New function identities can retrigger Effects that depend on them."],
    ["What can useEffectEvent help with where supported?", "Reading the latest callback behavior without restarting synchronization", "Replacing every Hook callback prop", 0, "Effect Events separate event-like logic from the Effect's reactive inputs."],
  ]),
  customHookTopic("react-when-to-use-custom-hooks", "When to Use Custom Hooks", "Extract a Hook when it makes a meaningful stateful behavior clearer, not just to wrap every line.", [
    "Not every small piece of repeated code needs a custom Hook. A Hook that only wraps one simple useState call may add a layer without making the code easier to understand.",
    "When you write an Effect, consider whether a focused custom Hook could name the external synchronization and make data flow clear. Keep separate Effects separate when they synchronize different things.",
  ], [
    "// A one-line wrapper around useState may not add much value.",
    "useChatRoom({ roomId, serverUrl }); // communicates a concrete synchronization purpose",
    "const cities = useData(citiesUrl);\nconst areas = useData(areasUrl); // reuse one focused data behavior",
  ], [
    ["Should every repeated line become a custom Hook?", "No, extract when it improves clarity or reuse", "Yes, every expression needs its own Hook", 0, "Some duplication is simpler than an unnecessary abstraction."],
    ["What is a useful custom Hook name?", "A name that describes a concrete behavior", "A generic name such as useStuff", 0, "A focused name makes intent and data flow clear."],
    ["Should two independent external synchronizations be merged into one Effect just because they're both Effects?", "No, keep independent processes separate", "Yes, all Effects belong together", 0, "Separate synchronization processes should retain separate inputs and cleanup."],
  ]),
  customHookTopic("react-custom-hooks-migrate-to-better-patterns", "Custom Hooks Help You Migrate to Better Patterns", "Hide implementation details behind a stable Hook API so internal solutions can improve later.", [
    "A useOnlineStatus Hook might begin with state and an Effect that subscribes to browser events. Later, it can switch internally to useSyncExternalStore to handle external-store consistency more completely.",
    "If components depend on the Hook's public value rather than its internal implementation, the upgrade can happen without changing every caller. Custom Hooks can make external-system logic easier to replace with better APIs.",
  ], [
    "function useOnlineStatus() { /* first version: state plus browser listeners */ }",
    "function useOnlineStatus() { return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot); }",
    "function StatusBar() { const online = useOnlineStatus(); return <p>{online ? 'Online' : 'Offline'}</p>; }",
  ], [
    ["What can a focused Hook API make easier?", "Changing its internal implementation later", "Changing every component that calls it", 0, "Callers remain stable when they use a consistent behavior-focused API."],
    ["What specialized Hook can subscribe to an external store?", "useSyncExternalStore", "useMemo", 0, "useSyncExternalStore is designed for external store subscriptions."],
    ["What should components depend on?", "The Hook's useful value or behavior", "Its internal event listener implementation", 0, "Encapsulation keeps components focused on intent."],
  ]),
  customHookTopic("react-there-is-more-than-one-way-to-do-it", "There Is More Than One Way to Do It", "Treat custom Hooks as a tool for expressing behavior, not a required wrapper for every React pattern.", [
    "A custom Hook can hide complex browser API or animation logic behind a small API, such as useFadeIn(ref, duration). Another component might keep a short Effect inline if extraction would make the code harder to follow.",
    "Choose the structure that makes the behavior, inputs, and cleanup easiest to understand. Do not extract merely because code contains an Effect; use a Hook when it gives the behavior a useful name or enables meaningful reuse.",
  ], [
    "useFadeIn(titleRef, 800);",
    "useEffect(() => { const sub = subscribe(topic); return () => sub.unsubscribe(); }, [topic]);",
    "// Keep a short, one-off Effect inline if a custom Hook would obscure its purpose.",
  ], [
    ["Is there one required way to organize every Effect?", "No, choose the structure that makes intent clearest", "Yes, every Effect must be extracted", 0, "Custom Hooks are a design choice based on clarity and reuse."],
    ["When can a custom Hook be especially helpful?", "When it names reusable behavior or hides complex implementation", "When it wraps a variable declaration without adding meaning", 0, "A meaningful abstraction communicates purpose and reduces duplication."],
    ["What should guide whether to extract?", "Clarity of intent, inputs, and cleanup", "The total number of lines in the file only", 0, "The best structure makes behavior easy to understand."],
  ]),
  customHookTopic("react-reusing-logic-with-custom-hooks-recap", "Recap", "Review Hook naming, independent state calls, reactive inputs, and focused abstractions.", [
    "Custom Hooks share reusable stateful logic between components. Their names start with use, and they follow the same Rules of Hooks as built-in Hooks.",
    "Each Hook call has independent local state unless it connects to a shared owner or store. Pass reactive values as inputs, extract only meaningful behavior, and keep callbacks and Effects' dependency rules accurate.",
  ], [
    "function useOnlineStatus() { /* reusable stateful behavior */ }",
    "const first = useFormInput('A');\nconst second = useFormInput('B'); // independent calls",
    "useChatRoom({ roomId, serverUrl }); // reactive inputs",
  ], [
    ["What do custom Hooks share?", "Logic", "One state instance by default", 0, "Each call has independent state unless explicitly connected to shared state."],
    ["What prefix must a custom Hook use?", "use", "get", 0, "The naming convention lets tooling apply Hook rules."],
    ["When should a Hook be extracted?", "When it gives reusable behavior a clearer name", "For every one-line expression", 0, "Extraction should improve clarity or meaningful reuse."],
  ]),
  customHookTopic("react-reusing-logic-with-custom-hooks-challenges", "Challenges", "Extract a network-status Hook, keep local state independent, and pass reactive inputs to a chat Hook.", [
    "Challenge 1: Two components duplicate online/offline listeners. Extract useOnlineStatus and use it in both. Challenge 2: Two form fields call useFormInput; explain why their values remain independent.",
    "Challenge 3: Extract a chat connection into useChatRoom({ roomId, serverUrl }). Include reactive inputs in its Effect and accept a message callback without causing unnecessary reconnects. Challenge 4: Decide whether a short, one-off Effect should stay inline or become a focused custom Hook.",
  ], [
    "function useOnlineStatus() { /* subscribe, clean up, return status */ }",
    "useChatRoom({ roomId, serverUrl, onReceiveMessage });",
    "// If using an Effect Event, keep it inside the Hook and call it from the Effect only.",
  ], [
    ["Why does each useFormInput call keep a separate value?", "Each Hook call has independent state", "A custom Hook merges every caller's state", 0, "The Hook runs separately at each call position."],
    ["What belongs in a chat connection Effect's dependencies?", "Reactive values such as roomId and serverUrl", "Only the callback, never connection inputs", 0, "The connection must follow its actual reactive inputs."],
    ["What should guide extracting a short Effect?", "Whether the Hook would make its intent clearer", "A rule that all Effects must be moved", 0, "Extraction is useful when it improves clarity or reuse."],
  ]),
]);
