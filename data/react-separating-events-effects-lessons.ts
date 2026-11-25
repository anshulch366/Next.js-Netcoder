import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function separationTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Advanced" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Check what triggers this logic: a specific interaction, or a need to synchronize with an external system." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Make every value reactive by placing it in an Effect"] : [alternate, correct, "Make every value reactive by placing it in an Effect"],
      answer,
      explanation,
    })),
  };
}

export const separatingEventsEffectsLessons = chapter("Learn React · Escape Hatches · Separating Events from Effects", [
  separationTopic("react-separating-events-from-effects", "Separating Events from Effects", "Decide whether logic belongs in a user event handler or a reactive Effect, and separate non-reactive Effect Events when needed.", [
    "Event handlers run because a particular interaction happened. Effects run when a committed render needs to synchronize with an external system, and they resynchronize when their reactive dependencies change.",
    "Sometimes an Effect needs a reactive value to start synchronization and other current values only when a notification happens. Effect Events can separate that non-reactive logic while still reading the latest props and state.",
  ], [
    "function handleSend() { sendMessage(message); }",
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "const onConnected = useEffectEvent(() => showNotification(theme));",
  ], [
    ["What triggers an event handler?", "A specific interaction", "Every dependency change", 0, "Handlers run in response to a click, submit, or similar event."],
    ["What triggers an Effect?", "A need to synchronize after rendering", "Only a user's click", 0, "Effects keep external systems aligned with current rendered values."],
    ["What can an Effect Event do?", "Read latest values without making them resynchronize the surrounding Effect", "Replace all dependencies in every Effect", 0, "Effect Events separate non-reactive logic from a reactive synchronization process."],
  ]),
  separationTopic("react-choosing-between-event-handlers-and-effects", "Choosing Between Event Handlers and Effects", "Ask why the code needs to run to decide which React mechanism fits.", [
    "If the reason is that the user clicked Send, handle it in the button's event handler. If the reason is that the chat room is currently displayed and must stay connected, use an Effect.",
    "The source of the behavior matters: interaction-driven logic should not accidentally repeat because a prop changed, and synchronization logic should not depend on a user having clicked first.",
  ], [
    "function handleSend() { sendMessage(message); } // user intent",
    "useEffect(() => connect(roomId), [roomId]); // keep room synchronized",
    "function handleBuy() { submitOrder(productId); } // confirmed action",
  ], [
    ["Where should sending a message after a click go?", "The Send event handler", "An Effect that watches the message text", 0, "Typing changes text but should not send until the user chooses Send."],
    ["Where should a room connection go?", "An Effect that follows roomId", "A button handler that may never run", 0, "The connection should stay active for the currently displayed room."],
    ["What question helps choose between the two?", "Why does this logic need to run?", "Which Hook name is shorter?", 0, "The cause of the behavior determines its proper location."],
  ]),
  separationTopic("react-event-handlers-specific-interactions", "Event Handlers Run in Response to Specific Interactions", "Keep actions such as sending, buying, and submitting tied to the user's explicit choice.", [
    "An event handler runs when its event occurs. It can read the current props and state, but it will not rerun just because those values change later.",
    "This is useful for actions that must happen only on user intent. A message should not send just because its text changed, and a purchase should not happen merely because a component rendered.",
  ], [
    "function handleSend() { sendMessage(message); }",
    "<button onClick={handleSend}>Send</button>",
    "function handleSubmit(event) { event.preventDefault(); save(formData); }",
  ], [
    ["When does handleSend run?", "When the Send interaction occurs", "Whenever message changes", 0, "The event handler is called by the corresponding user interaction."],
    ["Can an event handler read a current state value?", "Yes, it reads values from the render that created it", "No, handlers cannot access state", 0, "Handlers close over the current render's props and state."],
    ["Should typing alone trigger a purchase?", "No, the purchase should follow an explicit action", "Yes, any reactive change should buy", 0, "Irreversible actions should be connected to clear user intent."],
  ]),
  separationTopic("react-effects-whenever-synchronization-needed", "Effects Run Whenever Synchronization Is Needed", "Use Effects for ongoing synchronization that should follow current props or state.", [
    "A connection should exist while its room is displayed, regardless of how the user arrived at that screen. An Effect can connect after the render and disconnect when the room changes or the component leaves.",
    "Effects are reactive: when a dependency changes, React cleans up the old synchronization and starts a new one using current values.",
  ], [
    "useEffect(() => { const connection = connect(roomId); return () => connection.disconnect(); }, [roomId]);",
    "useEffect(() => { map.setZoomLevel(zoom); }, [map, zoom]);",
    "useEffect(() => { document.title = title; }, [title]);",
  ], [
    ["Why should a chat connection be an Effect?", "It should exist whenever that room is being shown", "It should run only after pressing Send", 0, "The connection is about synchronizing the displayed room, not a particular click."],
    ["What happens when roomId changes?", "The old connection is cleaned up and the new room is connected", "The old connection stays forever", 0, "The Effect follows its reactive room ID dependency."],
    ["What is another synchronization example?", "Applying a zoom value to a map widget", "Sending a one-time purchase after a click", 0, "A map widget is an external system that can be synchronized."],
  ]),
  separationTopic("reactive-values-and-reactive-logic", "Reactive Values and Reactive Logic", "Recognize that props, state, and component-body values can change between renders.", [
    "Props and state are reactive values because they can change and cause a render. Values calculated from them in the component body are also reactive.",
    "Event handlers can read a reactive value without rerunning when it changes. An Effect that reads a reactive value must include it as a dependency and will resynchronize when that value changes.",
  ], [
    "function Chat({ roomId }) { const [message, setMessage] = useState(''); }",
    "const serverUrl = selectedUrl ?? settings.defaultUrl; // computed, still reactive",
    "useEffect(() => connect(serverUrl, roomId), [serverUrl, roomId]);",
  ], [
    ["Which values are reactive?", "Props, state, and values calculated in the component body", "Only values created by useState", 0, "Render-time values may change when their inputs change."],
    ["Does an event handler rerun when a value it reads changes?", "No, it waits for the interaction again", "Yes, handlers are reactive", 0, "Event handlers are not automatically rerun by value changes."],
    ["What should an Effect do with reactive values it reads?", "List them as dependencies", "Hide them from the dependency list", 0, "Dependencies ensure the Effect stays synchronized with the values it uses."],
  ]),
  separationTopic("react-logic-inside-event-handlers-not-reactive", "Logic Inside Event Handlers Is Not Reactive", "Use event handlers when changing data alone should not repeat an action.", [
    "An event handler runs in response to a particular interaction. It can read current values, but editing a value such as a message does not cause the send logic to rerun.",
    "This non-reactive behavior is exactly what you want for actions like send, buy, or submit. Tie those actions to the button or form event that represents user intent.",
  ], [
    "function handleSend() { sendMessage(message); }",
    "function handleBuy() { addToCart(product); showNotification('Added'); }",
    "<form onSubmit={handleSubmit}>...</form>",
  ], [
    ["What does non-reactive mean for event-handler logic?", "It runs for its interaction, not every time a value changes", "It cannot read current values", 0, "Handlers can read values without reacting to every update."],
    ["Should changing message text send the message?", "No, only the Send action should", "Yes, text is reactive", 0, "Sending is tied to user intent, not merely a change in text."],
    ["Where should form submission logic go?", "The form submit handler", "An Effect watching every form field", 0, "The handler represents the submit interaction."],
  ]),
  separationTopic("react-logic-inside-effects-is-reactive", "Logic Inside Effects Is Reactive", "Include every reactive value read by an Effect so it can resynchronize when necessary.", [
    "When an Effect reads roomId, changing the selected room should reconnect the chat. The dependency list makes this relationship explicit to React.",
    "Effects respond to reactive values, unlike event handlers. Do not omit a dependency just to prevent a resynchronization; restructure the code if part of the logic should not be reactive.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "useEffect(() => applyTheme(widget, theme), [widget, theme]);",
    "// A new room value starts a new connection after cleanup.",
  ], [
    ["If an Effect reads roomId, what should happen when it changes?", "The Effect should resynchronize", "The Effect should keep using the old room", 0, "The connection needs to follow the current room value."],
    ["What makes Effect logic reactive?", "Its reactive dependencies can change between renders", "It runs only after clicks", 0, "Effects rerun when their dependencies change."],
    ["Should you omit a value to avoid an Effect rerun?", "No, restructure code while keeping dependencies correct", "Yes, dependency lists are optional hints", 0, "Omitting real dependencies risks stale synchronization."],
  ]),
  separationTopic("react-extracting-non-reactive-logic-from-effects", "Extracting Non-reactive Logic out of Effects", "Separate synchronization inputs from callbacks that need the latest values only when an event occurs.", [
    "A chat connection depends on roomId, while a connected notification may need the latest theme. If theme is included directly in the connection Effect, changing the theme reconnects the chat unnecessarily.",
    "Move the notification logic into an Effect Event. The Effect remains reactive to roomId, while the callback reads the latest theme only when the connection reports success.",
  ], [
    "const onConnected = useEffectEvent(() => showNotification('Connected', theme));",
    "useEffect(() => { const c = connect(roomId); c.on('connected', onConnected); return () => c.disconnect(); }, [roomId]);",
    "// A theme change updates the next notification without reconnecting the room.",
  ], [
    ["Why extract notification logic from the connection Effect?", "Theme changes should not reconnect the chat", "The chat should ignore its room ID", 0, "The room controls synchronization; theme only affects the notification when it happens."],
    ["What does an Effect Event read?", "Latest props and state when it is called", "Only the initial render's values", 0, "Effect Events are non-reactive and access latest values."],
    ["What remains a dependency of the connection Effect?", "roomId", "Every value used only inside the Effect Event", 0, "The Effect Event is non-reactive; the connection still reacts to roomId."],
  ]),
  separationTopic("react-declaring-an-effect-event", "Declaring an Effect Event", "Create an Effect Event with useEffectEvent for non-reactive logic called from an Effect.", [
    "Call useEffectEvent at the top level of a component and pass it a function. The returned Effect Event can read the latest props and state without making the Effect resynchronize when those values change.",
    "Call it from the Effect's logic when the relevant event occurs, such as a connection callback. It is not a replacement for a normal user event handler.",
  ], [
    "const onConnected = useEffectEvent(() => { showNotification('Connected', theme); });",
    "useEffect(() => { connection.on('connected', () => onConnected()); }, [connection]);",
    "// useEffectEvent must be imported from React in versions that support it.",
  ], [
    ["Which Hook declares an Effect Event?", "useEffectEvent", "useEventHandler", 0, "useEffectEvent extracts non-reactive logic from an Effect."],
    ["Where should useEffectEvent be called?", "At the top level of a component or custom Hook", "Inside the Effect callback", 0, "Like other Hooks, it is called at the top level."],
    ["What can the Effect Event callback read?", "Latest props and state when called", "Only captured initial values", 0, "Effect Events provide access to current values without triggering resynchronization."],
  ]),
  separationTopic("react-reading-latest-props-state-effect-events", "Reading Latest Props and State with Effect Events", "Pass the event-specific value as an argument and read other current values inside the Effect Event.", [
    "A page visit should be logged when the URL changes, but the cart count can be included as its latest value without making every cart change count as another visit.",
    "Keep URL reactive in the Effect and pass it explicitly to the Effect Event. The Effect Event reads the latest cart count at the moment it is called, while a cart update alone does not trigger another visit log.",
  ], [
    "const onVisit = useEffectEvent(visitedUrl => logVisit(visitedUrl, cartCount));",
    "useEffect(() => { onVisit(url); }, [url]);",
    "// Pass the URL so a new page visit remains an explicit reactive trigger.",
  ], [
    ["Why pass visitedUrl as an argument?", "It keeps URL changes as the reactive event trigger", "It makes the Effect Event reactive to every cart change", 0, "The Effect's dependency on URL determines when a visit is logged."],
    ["What happens when cartCount changes by itself?", "No extra visit is logged", "The URL Effect always reruns", 0, "Cart count is read when called but does not trigger the Effect."],
    ["When does the Effect Event read the latest cart count?", "When the Effect Event is called", "When the component first mounted only", 0, "Effect Events access current props and state at call time."],
  ]),
  separationTopic("react-limitations-of-effect-events", "Limitations of Effect Events", "Keep Effect Events local to the Effects that use them and call them only from Effect logic.", [
    "Effect Events are intentionally limited. Call them only from Effects, and do not pass them as callbacks to another component or custom Hook.",
    "Declare an Effect Event next to the Effect that uses it. If logic belongs to a user interaction, use a regular event handler; if a reusable Hook needs a callback, design that Hook's API with ordinary callbacks and correct dependencies.",
  ], [
    "const onConnected = useEffectEvent(() => notify(theme));\nuseEffect(() => connection.on('connected', onConnected), [connection]);",
    "// Do not pass onConnected to <Child onAction={onConnected} />.",
    "// Do not call onConnected() from a button click handler.",
  ], [
    ["Where may an Effect Event be called?", "From inside Effect logic", "From any component or event handler", 0, "Effect Events are restricted to Effects."],
    ["Should an Effect Event be passed to a child component?", "No", "Yes, as a general callback prop", 0, "It must stay local to the Effect that uses it."],
    ["What should handle a button click?", "A regular event handler", "An Effect Event", 0, "Effect Events are not user interaction handlers."],
  ]),
  separationTopic("react-separating-events-effects-recap", "Recap", "Review what triggers handlers and Effects and how Effect Events separate non-reactive logic.", [
    "Event handlers run for specific interactions and are not reactive. Effects synchronize with external systems and resynchronize when their dependencies change.",
    "Effect Events can read latest props and state without making the surrounding Effect react to those values. Call them only from Effects and do not pass them to other components or Hooks.",
  ], [
    "function handleSend() { sendMessage(message); }",
    "useEffect(() => connect(roomId), [roomId]);",
    "const onConnected = useEffectEvent(() => notify(theme));",
  ], [
    ["What runs in response to a specific user action?", "An event handler", "An Effect Event on its own", 0, "Handlers are tied to a specific interaction."],
    ["What runs when synchronization inputs change?", "An Effect", "A click handler", 0, "Effects respond to changes in their reactive dependencies."],
    ["What is one restriction for Effect Events?", "Call them only from Effects", "Pass them to every child as a callback", 0, "They are limited to the Effect logic that declares them."],
  ]),
  separationTopic("react-separating-events-effects-challenges", "Challenges", "Practice fixing resubscriptions caused by theme changes and logging visits with current context.", [
    "Challenge 1: A chat reconnects whenever the theme changes, even though only the notification color should change. Extract the notification callback into an Effect Event and keep roomId as the connection dependency.",
    "Challenge 2: A page visit logger fires whenever the cart changes. Make URL the Effect dependency, pass it to an Effect Event, and read the latest cart count inside that event. Challenge 3: A component passes an Effect Event to a child; replace it with a regular event callback if the child handles user actions.",
  ], [
    "const onConnected = useEffectEvent(() => notify(theme));",
    "useEffect(() => connectRoom(roomId, onConnected), [roomId]);",
    "const onVisit = useEffectEvent(url => logVisit(url, cartCount));\nuseEffect(() => onVisit(path), [path]);",
  ], [
    ["How can theme stop restarting a chat connection?", "Read theme inside an Effect Event called by the connection Effect", "Remove roomId from dependencies", 0, "Theme updates the notification, while roomId controls the connection."],
    ["What should trigger a page-visit log?", "A URL change", "A cart count change", 0, "The URL represents a new page visit; cart count is only extra current context."],
    ["What should replace an Effect Event passed to a child for clicks?", "A regular event handler callback", "An Effect Event forwarded through more components", 0, "Effect Events are restricted to their local Effect context."],
  ]),
]);
