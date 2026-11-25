import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function noEffectTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Prefer direct calculations, event logic, or a purpose-built API when no external synchronization Effect is needed." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Create another state value and synchronize it with an Effect"] : [alternate, correct, "Create another state value and synchronize it with an Effect"],
      answer,
      explanation,
    })),
  };
}

export const noEffectLessons = chapter("Learn React · Escape Hatches · You Might Not Need an Effect", [
  noEffectTopic("react-you-might-not-need-an-effect", "You Might Not Need an Effect", "Use Effects for external synchronization, not as the default place for calculations or interaction logic.", [
    "Effects are an escape hatch for synchronizing a component with an external system, such as a browser API, network, or non-React widget. When there is no external system, an Effect may add extra renders and make data flow harder to follow.",
    "Calculate values from current props and state during render, and put interaction-specific work in the event handler. Use dedicated APIs for special cases such as subscribing to an external store.",
  ], [
    "const fullName = firstName + ' ' + lastName;",
    "function handleBuy() { submitOrder(productId); }",
    "useEffect(() => { connection.connect(); return () => connection.disconnect(); }, [connection]);",
  ], [
    ["When is an Effect usually appropriate?", "When synchronizing with an external system", "Whenever one state value depends on another", 0, "Effects connect React to systems outside its rendering model."],
    ["Where should a click-triggered action go?", "In its event handler", "In an Effect watching a click flag", 0, "The event handler knows which interaction occurred."],
    ["What can unnecessary Effects cause?", "Extra renders and harder-to-follow data flow", "Automatic permanent storage", 0, "Derived state synchronization can cause avoidable render passes."],
  ]),
  noEffectTopic("react-remove-unnecessary-effects", "How to Remove Unnecessary Effects", "Identify whether code derives UI data, handles an event, or truly synchronizes an external system.", [
    "Two common cases do not need Effects: transforming data for rendering and responding to user events. Transform values at the top level of the component, and run event-specific logic in the event handler.",
    "Keep Effects for synchronization with something outside React. Removing unnecessary Effects can reduce cascading renders and make the reason for each update easier to understand.",
  ], [
    "const visible = items.filter(item => item.active);",
    "function handleSubmit() { send(formData); }",
    "useEffect(() => { widget.setValue(value); }, [widget, value]); // external widget",
  ], [
    ["Which code should usually be removed from an Effect?", "A pure list transformation used for rendering", "A subscription to an external service", 0, "Pure transformations can run directly during render."],
    ["What should happen to user event logic?", "Move it into the corresponding handler", "Run it after every render", 0, "The handler is the place that knows which user action occurred."],
    ["Which Effect is likely needed?", "One synchronizing an external widget", "One copying a calculated label into state", 0, "External widgets need synchronization with React values."],
  ]),
  noEffectTopic("react-updating-state-based-on-props-or-state", "Updating State Based on Props or State", "Calculate derived values during render instead of storing duplicate state and synchronizing it.", [
    "If a value can be computed from existing props or state, calculate it during rendering. Storing a duplicate such as fullName and updating it from an Effect creates a render with stale data followed by another render.",
    "Derived values stay in sync automatically because they are recalculated from their source values. This avoids conflicting copies and reduces update code.",
  ], [
    "const fullName = firstName + ' ' + lastName;",
    "const canSubmit = email.length > 0 && password.length > 0;",
    "const selectedItem = items.find(item => item.id === selectedId) ?? null;",
  ], [
    ["Where should fullName from firstName and lastName be computed?", "During render", "In state updated by an Effect", 0, "The value is derived directly from current state."],
    ["Why avoid duplicating derived values in state?", "The copies can become inconsistent and add a render", "React cannot store strings", 0, "The source values and duplicated value can fall out of sync."],
    ["What can replace a stored selected object?", "Store its ID and derive the matching item", "Copy the object into several state variables", 0, "An ID can be the source of truth while the selected object is derived."],
  ]),
  noEffectTopic("react-caching-expensive-calculations", "Caching Expensive Calculations", "Use a pure calculation directly unless it is expensive enough to benefit from memoization.", [
    "Start by calculating derived data during render. If profiling shows that a pure calculation is expensive and unrelated renders repeat it unnecessarily, useMemo can cache the result for the same dependencies.",
    "Memoization is an optimization, not a way to make an Effect or impure calculation correct. Keep the dependencies accurate. React Compiler may handle memoization automatically in supported setups.",
  ], [
    "const visible = filterItems(items, filter); // simplest when inexpensive",
    "const visible = useMemo(() => filterItems(items, filter), [items, filter]);",
    "// Do not use an Effect to store visible as duplicate state.",
  ], [
    ["What should you try first for derived data?", "Calculate it during render", "Store it and synchronize with an Effect", 0, "Direct calculation is simpler unless there is a measured performance need."],
    ["When can useMemo help?", "When a pure calculation is expensive and should be cached", "When a side effect needs to run after render", 0, "useMemo caches pure calculation results; it does not run Effects."],
    ["What must useMemo's dependencies represent?", "The reactive values used by the calculation", "Values chosen only to suppress recalculation", 0, "Correct dependencies keep the cached result valid."],
  ]),
  noEffectTopic("react-resetting-all-state-when-prop-changes", "Resetting All State When a Prop Changes", "Use a key when a new entity should start a completely fresh component state tree.", [
    "If a profile component contains several pieces of state that all belong to the selected user, resetting each field in an Effect can cause an extra render and leave stale values briefly visible.",
    "Pass the user's stable ID as a key to an inner component. When that identity changes, React creates a fresh instance and resets its local state and descendant state together.",
  ], [
    "function ProfilePage({ userId }) { return <Profile key={userId} userId={userId} />; }",
    "function Profile({ userId }) { const [comment, setComment] = useState(''); }",
    "<Editor key={document.id} document={document} />",
  ], [
    ["What does a changed key tell React?", "This is a new component identity with fresh state", "Keep every old state value for the new item", 0, "A changed key resets the component subtree's local state."],
    ["What kind of key fits a profile reset?", "The selected user's stable ID", "A random value regenerated every render", 0, "The key should change when the conceptual entity changes."],
    ["Why is resetting each field in an Effect less ideal?", "It can briefly render stale data and then render again", "Effects cannot update state", 0, "The key resets the subtree as a single identity change."],
  ]),
  noEffectTopic("react-adjusting-some-state-when-prop-changes", "Adjusting Some State When a Prop Changes", "Prefer deriving state from IDs or keys before using the uncommon render-time adjustment pattern.", [
    "If only part of state must change when a prop changes, first check whether the state can be represented more simply. Storing a selected item ID and deriving the item can remove the need to reset selection at all.",
    "In uncommon cases, React allows a component to update its own state during render when comparing a prop with a stored previous value. React retries that render before updating the DOM. Keep the condition precise, and do not perform side effects in render.",
  ], [
    "const selected = items.find(item => item.id === selectedId) ?? null;",
    "const [previousItems, setPreviousItems] = useState(items);\nif (items !== previousItems) { setPreviousItems(items); setSelection(null); }",
    "// Prefer a key if all state should reset when the entity changes.",
  ], [
    ["What should you check before adjusting state on a prop change?", "Whether the value can be derived from a stable ID", "Whether to add more synchronization Effects", 0, "Derived state can avoid adjustment entirely."],
    ["What must guard the uncommon render-time adjustment?", "A condition that detects a real input change", "An unconditional setter on every render", 0, "Without a condition, rendering can loop."],
    ["What should not happen during this render-time pattern?", "External side effects such as DOM changes or timers", "A same-component state adjustment under a condition", 0, "Render must remain pure apart from React's guarded same-component retry pattern."],
  ]),
  noEffectTopic("react-sharing-logic-between-event-handlers", "Sharing Logic Between Event Handlers", "Extract a helper for behavior shared by multiple user actions instead of detecting events in an Effect.", [
    "If Buy and Checkout buttons both add a product and show a notification, extract a buyProduct function and call it from both handlers. The function then runs only when the user chooses one of those actions.",
    "An Effect watching cart state might show the notification again after a reload or when existing data is restored. Interaction-specific feedback belongs with the interaction that caused it.",
  ], [
    "function buyProduct() { addToCart(product); showNotification('Added'); }",
    "function handleBuy() { buyProduct(); }",
    "function handleCheckout() { buyProduct(); navigate('/checkout'); }",
  ], [
    ["How can two handlers share behavior?", "Call the same extracted helper from both", "Watch a cart prop in an Effect", 0, "A helper can keep interaction logic reusable and explicit."],
    ["Why can an Effect repeat a notification unexpectedly?", "It reacts to rendered state, including restored cart state", "Effects only run on click", 0, "An Effect cannot tell whether a user just clicked or the value was already present."],
    ["When should the notification run?", "In response to the user's add-to-cart action", "Whenever the product page renders", 0, "The interaction is the reason to show the notification."],
  ]),
  noEffectTopic("react-sending-a-post-request", "Sending a POST Request", "Send mutations caused by user intent from the relevant event handler.", [
    "A POST request that buys a product, sends a message, or creates a record should usually run from the handler for the user's confirmed action.",
    "An Effect can rerun when values or component identity change, and it may also run extra setup cycles in development. Use Effects for synchronization, not for one-off actions with visible or irreversible consequences.",
  ], [
    "async function handleBuy() { await fetch('/api/orders', { method: 'POST', body: JSON.stringify(order) }); }",
    "<button onClick={handleBuy}>Confirm purchase</button>",
    "// Avoid sending a purchase POST from an Effect that watches product state.",
  ], [
    ["Where should a user-confirmed POST mutation usually go?", "In its event handler", "In an Effect that runs on mount", 0, "The handler ties the mutation to the user's intent."],
    ["Why is a purchase Effect risky?", "It may run without a new confirmation action", "POST requests cannot be sent from handlers", 0, "Effects are driven by rendering, not by the exact user interaction."],
    ["What should trigger a create/send/buy mutation?", "The corresponding explicit user action", "Any rerender that changes a dependency", 0, "Mutations should be connected to user intent."],
  ]),
  noEffectTopic("react-chains-of-computations", "Chains of Computations", "Avoid chains of Effects that update state only to trigger more state updates.", [
    "A chain where one Effect updates a counter, another updates a round, and another marks a game over can cause several cascading renders. It also makes the transitions hard to replay or understand.",
    "Calculate derived values during render and compute related next state in the event handler that caused the change. If event handlers share the logic, extract a helper or use a reducer for coordinated transitions.",
  ], [
    "const isGameOver = round > maxRounds; // derive during render",
    "function handleNext(nextCard) { setCard(nextCard); setRound(current => current + 1); }",
    "// Use a reducer when one action coordinates many related state changes.",
  ], [
    ["What is a problem with chains of state-setting Effects?", "They create extra renders and fragile update order", "They make all values derived automatically", 0, "Each Effect can cause another render and trigger the next Effect."],
    ["Where should related updates caused by one action go?", "In the event handler or a reducer transition", "In a sequence of Effects watching each other", 0, "One interaction can calculate and apply its related next state together."],
    ["How should a game-over flag derived from round be handled?", "Calculate it from round during render", "Store another boolean and sync it in an Effect", 0, "The flag can be derived from the round value."],
  ]),
  noEffectTopic("react-initializing-the-application", "Initializing the Application", "Place app-wide startup logic at the application boundary instead of tying it to a component Effect unnecessarily.", [
    "If logic truly needs to run once per application load and does not depend on component values, putting it inside a component Effect can make it run again if that component remounts.",
    "Keep initialization at an application entry point or module boundary when appropriate, and design component Effects to tolerate setup and cleanup cycles. Avoid putting side effects in arbitrary modules that are imported unexpectedly.",
  ], [
    "// Application entry point: initialize a global client once.",
    "function App() { return <Application />; }",
    "useEffect(() => connect(roomId), [roomId]); // remains a component synchronization Effect",
  ], [
    ["Where can truly app-wide initialization belong?", "The app entry point or root setup", "Every screen component that mounts", 0, "Root initialization should not be tied to arbitrary child remounts."],
    ["Why should Effects still tolerate remounting?", "Components may be remounted during development or reuse", "Components never unmount", 0, "Robust setup and cleanup make components reusable and easier to verify."],
    ["Should every module perform side effects when imported?", "No, keep initialization at intentional app boundaries", "Yes, import order should start the app", 0, "Arbitrary import-time effects can surprise other code."],
  ]),
  noEffectTopic("react-notifying-parent-components-about-state-changes", "Notifying Parent Components About State Changes", "Notify a parent from the event that changes state, or let the parent own the state.", [
    "If a child toggle must notify its parent, calling the callback from an Effect means the child renders first and the parent updates afterward, adding another pass.",
    "Call the callback and update local state in the same event handler. If the parent should fully control the toggle, remove the child's duplicate state and accept the value and change callback as props.",
  ], [
    "function updateToggle(next) { setIsOn(next); onChange(next); }",
    "function handleClick() { updateToggle(!isOn); }",
    "function Toggle({ isOn, onChange }) { return <button onClick={() => onChange(!isOn)}>{isOn ? 'On' : 'Off'}</button>; }",
  ], [
    ["When should a child notify its parent about a toggle action?", "In the event handler that changes the toggle", "In an Effect watching the new toggle state", 0, "The event handler can update both components in one interaction."],
    ["What can avoid duplicate child and parent state?", "Make the child controlled by the parent", "Synchronize both values with two Effects", 0, "One source of truth avoids keeping two state variables in sync."],
    ["What does a controlled toggle usually receive?", "Its current value and an onChange callback", "A ref containing the parent's hidden state", 0, "Props let the parent own the value and respond to changes."],
  ]),
  noEffectTopic("react-passing-data-to-the-parent", "Passing Data to the Parent", "Keep data flowing down from the component that owns or fetches it instead of copying child data upward in an Effect.", [
    "A child that fetches data and then reports it to the parent from an Effect makes the data flow harder to trace. Both components may need the same information, and the parent receives it only after another update.",
    "Prefer having the parent own or fetch the shared data and pass it down as props. This follows React's top-down data flow and gives one clear place to understand the value.",
  ], [
    "function Parent() { const data = useSomeAPI(); return <Child data={data} />; }",
    "function Child({ data }) { return <Result value={data} />; }",
    "// Avoid a child Effect that calls onFetched(data) to copy data upward.",
  ], [
    ["What direction does React data usually flow?", "From parent to child", "From child Effects to parent state by default", 0, "Props and state ownership make top-down data flow easier to trace."],
    ["Who should often fetch data shared by parent and child?", "The parent, then pass the result down", "The child, then copy it upward in an Effect", 0, "A shared value has one clear owner and can flow to children."],
    ["What can an Effect that reports child data upward make harder?", "Tracing where the data came from", "Rendering a string", 0, "Effect-based upward synchronization obscures ownership and update order."],
  ]),
  noEffectTopic("react-subscribing-to-an-external-store-without-effect", "Subscribing to an External Store", "Use useSyncExternalStore for external data sources that can change outside React.", [
    "A browser API or third-party store may change without React knowing. A manual Effect subscription can work, but it needs careful setup, cleanup, and a reliable snapshot to avoid missing updates.",
    "For an external store, useSyncExternalStore is the purpose-built Hook. It accepts a subscription function, a snapshot reader, and optionally a server snapshot for server rendering.",
  ], [
    "const online = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);",
    "function subscribe(callback) { window.addEventListener('online', callback); return () => window.removeEventListener('online', callback); }",
    "function getSnapshot() { return navigator.onLine; }",
  ], [
    ["Which Hook is designed for subscribing to an external store?", "useSyncExternalStore", "useMemo", 0, "useSyncExternalStore coordinates subscriptions and snapshots."],
    ["What does a snapshot function provide?", "The current value from the external store", "A setter for React local state", 0, "React reads the snapshot to determine the current external value."],
    ["What should the subscribe function return?", "An unsubscribe function", "A new React component", 0, "Cleanup stops listening when the subscription is no longer needed."],
  ]),
  noEffectTopic("react-fetching-data-without-unnecessary-effect", "Fetching Data", "Use the app's data-loading tools where possible and guard Effect-based requests against stale results.", [
    "Data fetching can require synchronization with the network, but writing every request directly in a component Effect can miss caching, deduplication, and loading coordination. Frameworks often provide better data-loading patterns.",
    "If an Effect is appropriate, include the query dependencies and abort the request or ignore its result in cleanup so an older response cannot overwrite the latest screen.",
  ], [
    "// Prefer a framework loader or query cache for app-wide data needs.",
    "useEffect(() => { const controller = new AbortController(); load(query, controller.signal); return () => controller.abort(); }, [query]);",
    "useEffect(() => { let ignore = false; fetchResult(query).then(value => { if (!ignore) setResult(value); }); return () => { ignore = true; }; }, [query]);",
  ], [
    ["Why can framework data tools be preferable?", "They can provide caching and request coordination", "They prevent React from rendering pages", 0, "Data tools can handle common request lifecycle concerns."],
    ["What should a request Effect do when its query changes?", "Abort it or ignore an obsolete response", "Always apply whichever result arrives last in time", 0, "A stale response should not replace results for a newer query."],
    ["What belongs in the request Effect dependencies?", "The query values the request uses", "An empty array regardless of the query", 0, "The Effect should resynchronize when its request inputs change."],
  ]),
  noEffectTopic("react-you-might-not-need-an-effect-recap", "Recap", "Choose render, event handlers, state ownership, and specialized Hooks before adding an Effect.", [
    "Calculate derived values during render, use event handlers for user actions, and use keys or simpler state representations to avoid resetting state in Effects.",
    "Lift shared state to a common owner, use useSyncExternalStore for external stores, and use a framework's data loading when appropriate. Keep Effects for synchronization with external systems.",
  ], [
    "const total = price * quantity; // derive",
    "function handlePurchase() { purchase(productId); } // event",
    "useEffect(() => connect(roomId), [roomId]); // external sync",
  ], [
    ["Where should a value derived from state be calculated?", "During render", "In an Effect that mirrors it into state", 0, "Direct calculation avoids redundant state."],
    ["Where should a user action run?", "In its event handler", "In a mount Effect", 0, "Handlers run for the specific interaction."],
    ["What is the main reason to keep an Effect?", "Synchronizing with an external system", "Avoiding every use of props", 0, "Effects are intended for external synchronization."],
  ]),
  noEffectTopic("react-you-might-not-need-an-effect-challenges", "Challenges", "Refactor derived state, event-specific behavior, and state synchronization into simpler patterns.", [
    "Challenge 1: A fullName state value is updated by an Effect whenever firstName or lastName changes. Remove the duplicate state and calculate fullName in render. Challenge 2: A cart notification appears after refresh; move it into the add-to-cart event logic.",
    "Challenge 3: A profile comment should clear when the user changes; key the inner profile by user ID. Challenge 4: A component mirrors an external store manually; evaluate useSyncExternalStore or the store's supported Hook.",
  ], [
    "const fullName = firstName + ' ' + lastName;",
    "function buyProduct() { addToCart(product); showNotification('Added'); }",
    "<Profile key={user.id} user={user} />",
  ], [
    ["How should fullName be updated?", "Calculate it from first and last name during render", "Copy it into state with an Effect", 0, "The name is derived data."],
    ["How should a cart notification be triggered?", "From the add-to-cart interaction", "From an Effect that notices the product is in the cart", 0, "The interaction is the cause of the notification."],
    ["What can reset profile-local state for a new user?", "A stable user ID as the component key", "A new Effect for each state field", 0, "Changing the key creates a fresh component identity."],
  ]),
]);
