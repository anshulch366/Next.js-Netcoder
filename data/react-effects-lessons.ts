import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function effectTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "This example shows how the Effect setup stays synchronized with the external system and its dependencies." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Put every interaction and calculation in an Effect"] : [alternate, correct, "Put every interaction and calculation in an Effect"],
      answer,
      explanation,
    })),
  };
}

export const effectsLessons = chapter("Learn React · Escape Hatches · Synchronizing with Effects", [
  effectTopic("react-synchronizing-with-effects", "Synchronizing with Effects", "Learn to connect a rendered component to external systems with setup, dependencies, and cleanup.", [
    "An Effect lets a component synchronize with something outside React, such as a browser API, a network connection, or a third-party widget. It runs after React commits the UI and can return cleanup for work that must be undone.",
    "Effects are not a general place for all component logic. Calculations belong in render, and actions caused by a particular click or submission belong in event handlers.",
  ], [
    "useEffect(() => { const connection = connect(roomId); return () => connection.disconnect(); }, [roomId]);",
    "useEffect(() => { map.setZoomLevel(zoomLevel); }, [map, zoomLevel]);",
    "const fullName = firstName + ' ' + lastName; // render-time calculation, no Effect",
  ], [
    ["What is the main purpose of an Effect?", "Synchronize with an external system", "Move all component logic outside render", 0, "Effects connect React to systems React does not control."],
    ["What can an Effect return?", "A cleanup function", "A JSX element to insert into render", 0, "Cleanup can reverse or release the setup work."],
    ["Where should click-specific behavior usually go?", "In the event handler", "In an Effect that watches a click flag", 0, "An event handler directly responds to that interaction."],
  ]),
  effectTopic("react-effects-vs-events", "What Are Effects and How Are They Different from Events?", "Tell apart synchronization caused by rendering and logic caused by a specific interaction.", [
    "An event handler runs because something happened, such as a click or form submission. An Effect runs because a component rendered with values that need to be synchronized with an external system.",
    "For example, buying a product belongs in the submit handler because the user requested that action. Connecting to a chat room belongs in an Effect because the connection should follow which room is currently displayed.",
  ], [
    "function handleBuy() { submitOrder(productId); } // event-driven",
    "useEffect(() => connect(roomId), [roomId]); // render-driven synchronization",
    "function handleSave() { saveDraft(formData); } // caused by a submit event",
  ], [
    ["What causes an event handler to run?", "A specific interaction", "Every render by default", 0, "Event handlers respond to interactions such as clicks or submits."],
    ["What causes an Effect to run?", "A committed render and its reactive values", "Only a user clicking a button", 0, "Effects are tied to rendering and synchronization needs."],
    ["Where does a purchase request belong?", "In the user-triggered event handler", "In an Effect that runs whenever the page renders", 0, "Buying is an action caused by the user's explicit interaction."],
  ]),
  effectTopic("react-you-might-not-need-an-effect", "You Might Not Need an Effect", "Avoid an Effect when render-time calculations or event handlers already express the behavior.", [
    "If a value can be calculated from props or state, calculate it while rendering instead of storing a duplicate value and using an Effect to keep it synchronized.",
    "If behavior happens because the user did something, put it in that event handler. Reserve Effects for synchronization with external systems, rather than using them to orchestrate ordinary React data flow.",
  ], [
    "const visibleTodos = todos.filter(todo => !todo.done);",
    "function handleSubmit() { sendForm(formData); }",
    "useEffect(() => { document.title = title; }, [title]); // external browser state",
  ], [
    ["Where should a value derived from props usually be calculated?", "During render", "In an Effect that copies it into state", 0, "Derived values can be calculated from their source data directly."],
    ["Where should code for a button click usually go?", "The button's event handler", "An Effect that watches an extra state flag", 0, "The interaction is the direct cause, so handle it in the event callback."],
    ["When does an Effect make sense?", "When synchronizing with an external system", "For every calculation used in JSX", 0, "Effects are intended for stepping outside React to synchronize."],
  ]),
  effectTopic("react-how-to-write-an-effect", "How to Write an Effect", "Build an Effect by identifying an external system, its reactive inputs, and any cleanup it needs.", [
    "First identify the external system and the operation that keeps it in sync. Then write an Effect setup function and include the reactive values that setup reads.",
    "Finally, decide whether setup creates a resource that must be released or reversed. If it does, return cleanup from the Effect. Keep unrelated event logic and derived calculations outside it.",
  ], [
    "useEffect(() => { widget.setValue(value); }, [widget, value]);",
    "useEffect(() => { const sub = subscribe(topic); return () => sub.unsubscribe(); }, [topic]);",
    "// Identify the external system, dependencies, and cleanup before adding the Effect.",
  ], [
    ["What should you identify before writing an Effect?", "The external system that needs synchronization", "A state variable to duplicate every prop", 0, "Effects should have a clear synchronization target."],
    ["What do dependencies represent?", "Reactive values the Effect setup reads", "All values in the entire application", 0, "Dependencies keep the Effect current with the values it uses."],
    ["When should an Effect include cleanup?", "When setup creates work or a resource to release", "Whenever an Effect reads a string", 0, "Cleanup reverses subscriptions, connections, timers, or similar setup."],
  ]),
  effectTopic("react-declare-an-effect", "Step 1: Declare an Effect", "Use useEffect to run synchronization after React commits the rendered UI.", [
    "Import useEffect and call it at the top level of your component. Pass a setup function that performs the synchronization after a render commits.",
    "The setup function can return a cleanup function. Effects run after the DOM update, so they can interact with external systems using the latest committed output.",
  ], [
    "import { useEffect } from 'react';",
    "useEffect(() => {\n  const connection = createConnection(serverUrl, roomId);\n  connection.connect();\n  return () => connection.disconnect();\n}, [serverUrl, roomId]);",
    "useEffect(() => { mapWidget.setZoomLevel(zoomLevel); }, [mapWidget, zoomLevel]);",
  ], [
    ["Where must useEffect be called?", "At the top level of a component or custom Hook", "Inside a conditional branch", 0, "Hooks must be called consistently at the top level."],
    ["When does Effect setup run?", "After React commits the render", "Before React calls the component", 0, "Effects run after the UI has been committed."],
    ["What may the setup function return?", "A cleanup function", "A second dependency array", 0, "The returned function runs to clean up the synchronization."],
  ]),
  effectTopic("react-specify-effect-dependencies", "Step 2: Specify the Effect Dependencies", "List every reactive value used by the Effect so React can resynchronize when it changes.", [
    "The dependency array tells React which reactive values the Effect uses. When one changes, React cleans up the old synchronization and runs setup with the new values.",
    "Props, state, and values declared in the component body are reactive. Do not omit values just to reduce runs; instead, restructure the Effect if it reads values that do not need to be reactive.",
  ], [
    "useEffect(() => { connect(roomId); }, [roomId]);",
    "useEffect(() => { map.setZoomLevel(zoom); }, [map, zoom]);",
    "useEffect(() => { document.title = title; }, [title]);",
  ], [
    ["What belongs in an Effect dependency list?", "Reactive values read by the Effect", "Only values you hope will change", 0, "Dependencies should match the reactive values used by the Effect."],
    ["What happens when a dependency changes?", "React cleans up the previous setup and runs the next one", "React ignores the Effect forever", 0, "React resynchronizes after dependencies change."],
    ["Should you omit a dependency to prevent reruns?", "No, restructure code while keeping dependencies correct", "Yes, dependency lists are optional hints", 0, "Omitting dependencies can leave an Effect using stale values."],
  ]),
  effectTopic("react-add-effect-cleanup", "Step 3: Add Cleanup if Needed", "Undo subscriptions, connections, and other setup when dependencies change or the component leaves.", [
    "If setup subscribes, connects, starts a timer, or otherwise creates ongoing work, return a cleanup function that releases it. React runs cleanup before starting a replacement Effect and when the component is removed.",
    "Cleanup should correspond to the specific setup it reverses. For example, disconnect the connection created by that setup rather than looking up some unrelated latest resource.",
  ], [
    "useEffect(() => { const connection = connect(roomId); return () => connection.disconnect(); }, [roomId]);",
    "useEffect(() => { window.addEventListener('resize', onResize); return () => window.removeEventListener('resize', onResize); }, [onResize]);",
    "useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);",
  ], [
    ["What should cleanup do?", "Release or reverse work created by setup", "Start a second subscription", 0, "Cleanup prevents obsolete external work from continuing."],
    ["When does React run cleanup before an update?", "Before rerunning setup with changed dependencies", "Before every component function call", 0, "Cleanup runs when the previous synchronization is replaced."],
    ["What should a subscription Effect return?", "A function that unsubscribes", "The subscription data as JSX", 0, "Unsubscribing prevents callbacks after the Effect is no longer active."],
  ]),
  effectTopic("react-effect-firing-twice-in-development", "How to Handle the Effect Firing Twice in Development?", "Make Effects safe to set up and clean up repeatedly instead of trying to force one run.", [
    "Development checks may set up, clean up, and set up an Effect again to reveal missing cleanup or assumptions that setup only happens once. This helps catch issues before production use.",
    "The solution is to make setup and cleanup mirror each other so repeated cycles leave one correct active synchronization. Do not add a ref guard just to hide the second setup; that can conceal a real cleanup bug.",
  ], [
    "useEffect(() => { const connection = connect(roomId); return () => connection.disconnect(); }, [roomId]);",
    "useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);",
    "// Avoid a didRun ref guard that prevents proper cleanup and resynchronization.",
  ], [
    ["Why might development run an extra setup-cleanup cycle?", "To reveal Effects that are not safe to restart", "To permanently double every production request", 0, "Development checks help find missing cleanup and unsafe assumptions."],
    ["What is the best fix for duplicate active subscriptions?", "Return cleanup that unsubscribes the previous one", "Block all future setups with a ref flag", 0, "Mirrored setup and cleanup keep only the current subscription active."],
    ["What should you focus on instead of forcing an Effect to run once?", "Making it work correctly after remounting", "Skipping dependency checks", 0, "Effects should tolerate correct setup-cleanup cycles."],
  ]),
  effectTopic("react-controlling-non-react-widgets", "Controlling Non-React Widgets", "Synchronize a third-party widget with React values through an Effect.", [
    "A map, chart, or media widget may expose imperative methods that React does not control. Keep its instance in a ref and use an Effect to apply current props or state to it.",
    "If creating the widget allocates resources, pair creation with cleanup. Dependencies should include the widget instance and the values being synchronized.",
  ], [
    "useEffect(() => { mapRef.current?.setZoomLevel(zoomLevel); }, [zoomLevel]);",
    "useEffect(() => { chartRef.current?.setData(data); }, [data]);",
    "useEffect(() => { const widget = createWidget(hostRef.current); widgetRef.current = widget; return () => widget.destroy(); }, []);",
  ], [
    ["Why can an Effect control a third-party widget?", "The widget is an external system React does not render directly", "Effects are required for all JSX", 0, "Effects synchronize React values with systems outside React."],
    ["What should happen if widget creation allocates resources?", "Clean up or destroy the widget when done", "Create a new widget on every render", 0, "Cleanup prevents stale widget instances and resource leaks."],
    ["What value should be synchronized to a map?", "The current zoom value", "The source code line number", 0, "The Effect should apply the relevant current UI value to the widget."],
  ]),
  effectTopic("react-subscribing-to-events", "Subscribing to Events", "Subscribe in an Effect and unsubscribe in cleanup to avoid stale listeners.", [
    "When a component needs browser or external events, register the listener in setup. Return cleanup that removes the same listener from the same target.",
    "If the listener depends on changing values, make those dependencies explicit or structure the handler so it receives the needed current data. Cleanup prevents duplicate listeners after updates.",
  ], [
    "useEffect(() => { window.addEventListener('online', handleOnline); return () => window.removeEventListener('online', handleOnline); }, [handleOnline]);",
    "useEffect(() => { const off = socket.on('message', onMessage); return off; }, [socket, onMessage]);",
    "useEffect(() => { document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey); }, [onKey]);",
  ], [
    ["What should subscription cleanup do?", "Remove or unsubscribe the registered listener", "Register the listener a second time", 0, "Cleanup prevents listeners from remaining active after the Effect ends."],
    ["Why should setup and cleanup use the same listener?", "So cleanup removes the exact handler that was registered", "Browser APIs match listeners by component name", 0, "The event target removes the listener by the same function reference."],
    ["What can happen without cleanup?", "Duplicate or stale listeners can remain", "React automatically removes every external listener", 0, "External subscriptions need an explicit cleanup path."],
  ]),
  effectTopic("react-triggering-animations", "Triggering Animations", "Start an external animation from an Effect and reset it during cleanup when appropriate.", [
    "An animation library may expose imperative methods. An Effect can start an animation when a component appears or when a reactive value changes.",
    "Cleanup should stop or reset the animation if the next synchronization needs a clean starting point. For animations that should happen directly in response to a click, an event handler may be the better location.",
  ], [
    "useEffect(() => { const animation = animate(nodeRef.current); return () => animation.cancel(); }, []);",
    "useEffect(() => { panelRef.current?.style.setProperty('--open', open ? '1' : '0'); }, [open]);",
    "function handleCelebrate() { confetti.start(); } // user-triggered animation",
  ], [
    ["What does animation cleanup often do?", "Cancel or reset the animation", "Start a duplicate animation", 0, "Cleanup should undo animation setup when it is replaced or removed."],
    ["Where might a click-triggered confetti effect belong?", "In the click handler", "In an Effect that watches an artificial click state", 0, "The animation is caused by a particular interaction."],
    ["When does an Effect-started animation make sense?", "When animation synchronizes with rendered state or lifecycle", "For every CSS property calculation", 0, "Effects are useful when the animation is part of external synchronization."],
  ]),
  effectTopic("react-fetching-data-with-effects", "Fetching Data", "Handle asynchronous results so stale requests do not update the current screen.", [
    "An Effect can fetch data when a component's query changes, but network requests may finish out of order. Cleanup can abort a request or mark its result as no longer relevant.",
    "For larger applications, framework data-loading features or a client cache can often handle caching, deduplication, and loading states more completely. If using an Effect, represent loading and error states clearly.",
  ], [
    "useEffect(() => { const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort(); }, [url]);",
    "useEffect(() => { let ignore = false; fetchUser(id).then(data => { if (!ignore) setUser(data); }); return () => { ignore = true; }; }, [id]);",
    "// Render loading, success, and error states from state rather than mutating the DOM.",
  ], [
    ["Why can a request result become stale?", "The query changes before the earlier request finishes", "React cannot run promises", 0, "A slower earlier request could finish after a newer query was selected."],
    ["How can cleanup handle an obsolete fetch?", "Abort it or ignore its result", "Always apply its result to the newest screen", 0, "Cleanup prevents outdated responses from replacing current data."],
    ["What may be a better option for complex data loading?", "Framework or client-cache data features", "A separate Effect for every displayed field", 0, "Dedicated data tools can manage caching and request coordination."],
  ]),
  effectTopic("react-sending-analytics", "Sending Analytics", "Record page-view information while keeping analytics setup safe under repeated development cycles.", [
    "Analytics may record that a screen was viewed. Such reporting can be connected to the component's appearance, unlike a purchase that must happen only after a specific confirmation action.",
    "Development can repeat Effect setup to find bugs, so analytics integrations should account for development behavior or deduplicate events where needed. Never use an Effect to perform an irreversible action that belongs to a user event.",
  ], [
    "useEffect(() => { analytics.page('settings'); }, []);",
    "useEffect(() => { analytics.page(pathname); }, [pathname]);",
    "function handlePurchase() { analytics.track('purchase_clicked'); submitOrder(); }",
  ], [
    ["What kind of event may be associated with a screen appearing?", "A page-view analytics event", "A purchase without user confirmation", 0, "A page view can correspond to a rendered screen visit."],
    ["Why should analytics consider development checks?", "Effect setup may be repeated during development", "Analytics disables React rendering", 0, "Repeated setup can reveal duplicate event recording assumptions."],
    ["Where should a purchase request be triggered?", "A user-confirmed event handler", "An Effect that runs on page mount", 0, "Purchases are explicit user actions with visible consequences."],
  ]),
  effectTopic("react-not-effect-initializing-application", "Not an Effect: Initializing the Application", "Keep truly application-wide initialization outside component Effects when it does not depend on a component.", [
    "Some setup belongs to the application entry point rather than to a component's synchronization lifecycle. If initialization does not depend on component props or state, it can be performed when the application starts.",
    "Putting global initialization in a component Effect can cause it to run again when that component remounts or in development checks. Keep component-specific synchronization in Effects and app-wide setup at the app boundary.",
  ], [
    "initializeTelemetry();\ncreateGlobalCache();\n// application entry point",
    "function App() { useEffect(() => initializeTelemetry(), []); return <Home />; } // reconsider if truly global",
    "useEffect(() => connect(roomId), [roomId]); // component-specific synchronization",
  ], [
    ["Where can global startup initialization go?", "At the application entry point", "In every component that might render", 0, "App-wide setup should not be repeated by component remounts."],
    ["Why can an Effect be a poor place for one-time global setup?", "The component may remount and the Effect may run again", "Effects only run during CSS loading", 0, "Component lifecycle checks can repeat setup."],
    ["What belongs in a component Effect?", "Synchronization that depends on that component's current values", "Unrelated app startup work", 0, "Effects should track the external system relevant to the component."],
  ]),
  effectTopic("react-not-effect-buying-a-product", "Not an Effect: Buying a Product", "Trigger irreversible actions such as purchases from the event that the user explicitly confirms.", [
    "A purchase is caused by a particular user action, not by the component appearing. Put the request in the click or submit handler so it runs in response to that interaction.",
    "An Effect may be set up more than once during development or when dependencies change. It is not an appropriate place for irreversible actions that could charge, send, or create something twice.",
  ], [
    "function handleBuy() { submitOrder(productId); }",
    "<button onClick={handleBuy}>Buy</button>",
    "// Avoid: useEffect(() => { submitOrder(productId); }, []);",
  ], [
    ["What should trigger a product purchase?", "The user's explicit buy action", "The component rendering", 0, "A purchase is interaction-driven and belongs in the event handler."],
    ["Why is an Effect risky for a purchase?", "It may run due to rendering or setup checks rather than user intent", "Effects cannot call functions", 0, "Rendering should not accidentally trigger irreversible purchases."],
    ["Where should submitOrder usually be called?", "Inside the buy or submit handler", "Inside an empty-dependency Effect", 0, "The handler ties the order to a direct user confirmation."],
  ]),
  effectTopic("react-putting-effects-all-together", "Putting It All Together", "Choose the right logic location and define each Effect as a complete synchronization cycle.", [
    "For each behavior, ask what causes it. Use render for calculations, event handlers for specific interactions, and Effects for keeping an external system synchronized with committed UI values.",
    "For every Effect, list the reactive values it reads and define cleanup for resources it creates. Test that setup-cleanup-setup leaves the external system in the correct state.",
  ], [
    "const fullName = first + ' ' + last; // render",
    "function handleSend() { sendMessage(text); } // event",
    "useEffect(() => { const sub = subscribe(room); return () => sub.unsubscribe(); }, [room]); // synchronization",
  ], [
    ["Which logic belongs in render?", "A pure calculation from current props and state", "A network subscription setup", 0, "Render describes the UI from current values."],
    ["Which logic belongs in an event handler?", "A send action caused by a click", "A subscription that follows the displayed room", 0, "Handlers respond to specific user actions."],
    ["What should a complete subscription Effect include?", "Setup, dependencies, and unsubscribe cleanup", "Only a setup with no way to stop it", 0, "Cleanup releases the old synchronization when it changes or ends."],
  ]),
  effectTopic("react-synchronizing-with-effects-recap", "Recap", "Review the difference between events and Effects and the role of cleanup.", [
    "Effects are caused by rendering and synchronize a component with external systems. Events are caused by specific interactions and should run in handlers.",
    "Declare setup, list every reactive dependency, and return cleanup when necessary. Avoid Effects for derived values, user-triggered actions, or application initialization that belongs elsewhere.",
  ], [
    "useEffect(() => { connect(room); return () => disconnect(room); }, [room]);",
    "function handleBuy() { buy(productId); }",
    "const total = price * quantity;",
  ], [
    ["What causes an Effect?", "A render that needs external synchronization", "Only a click event", 0, "Effects are linked to rendered values and synchronization needs."],
    ["What should dependencies include?", "All reactive values read by setup", "Only an empty array in every case", 0, "Dependencies must reflect the values the Effect uses."],
    ["What should you avoid putting in an Effect?", "A user-triggered irreversible action", "A subscription that tracks current props", 0, "Irreversible user actions belong in event handlers."],
  ]),
  effectTopic("react-synchronizing-with-effects-challenges", "Challenges", "Practice choosing between render, handlers, and Effects for realistic UI behavior.", [
    "Challenge 1: A chat connection should follow the selected room. Connect in an Effect, include the room ID, and disconnect in cleanup. Challenge 2: A Buy button accidentally submits twice because the request is in an Effect; move it to the confirmation handler.",
    "Challenge 3: A filtered list is copied into state with an Effect. Remove that synchronization and derive the filtered list during render. Challenge 4: A window listener remains after a screen closes; remove the exact listener in cleanup.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "function handleConfirmBuy() { submitOrder(productId); }",
    "const filtered = items.filter(matchesFilter);",
  ], [
    ["Where does a room connection belong?", "In an Effect with room ID dependency and cleanup", "In an event handler that is never called", 0, "The connection should stay synchronized with the displayed room."],
    ["How should a filtered list be updated?", "Derive it from items and filter during render", "Copy it into state with an Effect", 0, "A derived list does not need duplicate state."],
    ["How should a screen clean up a window listener?", "Remove the same listener in Effect cleanup", "Add another listener when unmounting", 0, "Cleanup unregisters the event handler that setup registered."],
  ]),
]);
