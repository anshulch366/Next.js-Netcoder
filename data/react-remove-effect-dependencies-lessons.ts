import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function dependencyTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Advanced" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Make the Effect's dependencies accurately describe its reactive inputs, then adjust the code structure if its synchronization is too broad." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Suppress the dependency linter and keep the code unchanged"] : [alternate, correct, "Suppress the dependency linter and keep the code unchanged"],
      answer,
      explanation,
    })),
  };
}

export const removeEffectDependencyLessons = chapter("Learn React · Escape Hatches · Removing Effect Dependencies", [
  dependencyTopic("react-removing-effect-dependencies", "Removing Effect Dependencies", "Keep dependency lists accurate and restructure Effects when they run more often than the intended synchronization requires.", [
    "The dependency linter checks that an Effect lists every reactive value it reads. This keeps the Effect synchronized with current props and state, while unnecessary dependencies can cause extra runs or loops.",
    "Do not remove a real dependency by suppressing the linter. Change the code so values are truly stable, move event actions into handlers, split separate synchronization processes, or use an Effect Event for non-reactive logic when appropriate.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "function handleSubmit() { postRegistration(); }",
    "const onMessage = useEffectEvent(message => playSoundIfAllowed(message));",
  ], [
    ["What should an Effect dependency list describe?", "Reactive values read by the Effect", "How often you hope it runs", 0, "Dependencies need to match the code's reactive inputs."],
    ["What can unnecessary dependencies cause?", "Extra synchronization or a loop", "Permanent storage of the Effect result", 0, "Dependencies that change unintentionally can retrigger an Effect often."],
    ["What should you do instead of suppressing a dependency warning?", "Restructure the code so the dependency behavior is correct", "Keep stale values and hide the warning", 0, "The Effect should remain synchronized with the values it uses."],
  ]),
  dependencyTopic("react-dependencies-should-match-code", "Dependencies Should Match the Code", "Include every reactive value an Effect reads so React can keep the external system current.", [
    "If an Effect reads a prop such as roomId, the prop belongs in its dependency list. When the value changes, React cleans up the previous setup and starts a new synchronization with the current value.",
    "The dependency list is not a control knob for choosing run frequency. It describes the code. If you do not want a value to trigger synchronization, restructure the logic rather than leaving out a value the Effect still reads.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "useEffect(() => { widget.setZoom(zoom); }, [widget, zoom]);",
    "// If setup reads a reactive value, include that value in dependencies.",
  ], [
    ["What should happen if roomId changes?", "The connection Effect resynchronizes", "The Effect keeps using the old room silently", 0, "The dependency ensures the connection follows the selected room."],
    ["What do dependencies represent?", "Reactive values used by the Effect", "A preferred scheduling frequency", 0, "Dependencies describe the code's reactive inputs."],
    ["What does the linter help catch?", "A reactive value used but missing from dependencies", "Every possible UI design decision", 0, "The linter checks dependency completeness, not all architecture choices."],
  ]),
  dependencyTopic("react-prove-value-is-not-a-dependency", "To Remove a Dependency, Prove That It’s Not a Dependency", "Make a value non-reactive by moving it outside rendering or creating it inside the Effect when appropriate.", [
    "A value that cannot change because of a component render does not need to trigger resynchronization. A true constant can live outside the component, or setup-only configuration can be created inside the Effect.",
    "This is how you prove to the linter that a value is not reactive. Do not keep a changing value inside the component and merely remove it from the dependency list.",
  ], [
    "const SERVER_URL = 'https://chat.example';\nfunction Chat() { useEffect(() => connect(SERVER_URL), []); }",
    "useEffect(() => { const options = { roomId }; connect(options); }, [roomId]);",
    "// Moving roomId outside a component is only valid if it truly never depends on props or state.",
  ], [
    ["How can a true constant become non-reactive?", "Move it outside the component", "Leave it inside and omit it from dependencies", 0, "Outside the component it cannot vary across that component's renders."],
    ["Where can setup-only options be created?", "Inside the Effect", "In a component state value updated by another Effect", 0, "Values created in setup are not component-render dependencies."],
    ["Can a prop be moved outside the component to silence lint?", "No, not if it still changes per component instance", "Yes, every prop is a constant", 0, "A value is non-reactive only if it truly cannot change with rendering."],
  ]),
  dependencyTopic("react-change-dependencies-by-changing-code", "To Change the Dependencies, Change the Code", "Rewrite the synchronization so dependencies reflect the behavior you actually want.", [
    "When a dependency list seems wrong, inspect what the Effect is doing and why. Move interaction-specific logic to a handler, split unrelated processes, use an updater function for previous-state updates, or extract non-reactive logic into an Effect Event.",
    "The code structure determines the dependencies. A shorter dependency list is not automatically better if it makes the Effect use stale values.",
  ], [
    "setMessages(previous => [...previous, message]);",
    "useEffect(() => { connect(roomId); }, [roomId]); // isolate the connection process",
    "const onVisit = useEffectEvent(() => logVisit(cartCount));",
  ], [
    ["What should determine the dependency list?", "The values used by the code", "The run frequency you prefer", 0, "Dependencies follow the code's reactive reads."],
    ["What can simplify a previous-state update?", "A functional updater", "Reading state from a stale Effect closure", 0, "An updater receives the pending previous state directly."],
    ["What should you avoid when editing dependencies?", "Removing a value while the Effect still reads it", "Changing code so it no longer reads that value", 0, "A real reactive read must remain represented in the synchronization."],
  ]),
  dependencyTopic("react-removing-unnecessary-dependencies", "Removing Unnecessary Dependencies", "Review whether each dependency belongs to the synchronization process and whether the Effect has one clear purpose.", [
    "After dependencies match the code, ask whether each change should restart this particular synchronization. If different parts need different triggers, split them into separate Effects.",
    "If a dependency represents an interaction rather than synchronization, move it into an event handler. If it is a reactive value that should be read without triggering a restart, an Effect Event may be appropriate.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "useEffect(() => { subscribe(topic); return unsubscribe; }, [topic]);",
    "// Put analytics for a button click in its event handler, not a room connection Effect.",
  ], [
    ["What question helps review a dependency?", "Should changing this value restart this synchronization?", "Can I delete it without checking the code?", 0, "Dependencies should reflect the purpose and inputs of the synchronization."],
    ["What if an Effect contains two independent synchronizations?", "Split them into separate Effects", "Combine their unrelated values in one list", 0, "Separate processes can have separate inputs and cleanup."],
    ["What if logic is caused by a click?", "Move it to an event handler", "Add the clicked state to an unrelated Effect", 0, "Interactions belong in handlers rather than render-driven synchronization."],
  ]),
  dependencyTopic("react-should-code-move-to-event-handler", "Should This Code Move to an Event Handler?", "Keep POST requests and notifications caused by submission in the submit handler.", [
    "If an Effect watches a submitted flag to send a POST and show a success message, the code is reacting to a render rather than the actual submit interaction.",
    "Move the request and notification into the event handler that processes submission. This ties the action to user intent and prevents repeated side effects when state is restored or the component remounts.",
  ], [
    "function handleSubmit() { post('/api/register', formData); showNotification('Registered'); }",
    "<form onSubmit={handleSubmit}>...</form>",
    "// Avoid an Effect that watches submitted and performs a one-time POST.",
  ], [
    ["What should trigger a registration POST?", "The submit interaction", "Any render where submitted is true", 0, "The handler represents the user's explicit submission."],
    ["Where should a submit success notification go?", "In the submit flow after the action", "In an Effect watching restored submitted state", 0, "This prevents notifications from appearing just because existing state loaded."],
    ["Why is the event handler clearer?", "It records which interaction caused the action", "It has no access to form values", 0, "The handler directly expresses the cause of the request."],
  ]),
  dependencyTopic("react-effect-doing-several-unrelated-things", "Is Your Effect Doing Several Unrelated Things?", "Split Effects with separate synchronization goals so one dependency does not restart unrelated work.", [
    "An Effect may fetch cities based on country and also reset a selected city. These behaviors have different causes: country changes drive the request, while selection changes may be local interaction state.",
    "Separate independent processes and give each its own dependencies and cleanup. This makes it clear why each Effect runs and avoids one value retriggering unrelated work.",
  ], [
    "useEffect(() => loadCities(country), [country]);",
    "useEffect(() => { const sub = subscribe(roomId); return () => sub.unsubscribe(); }, [roomId]);",
    "// Put unrelated logging in another Effect with its own inputs.",
  ], [
    ["Why split unrelated work into Effects?", "Each process can have its own dependencies and cleanup", "React only runs the first Effect in a component", 0, "Separating processes avoids coupling their synchronization triggers."],
    ["What should drive a city request?", "The selected country used by the request", "A local selection value it does not use", 0, "Dependencies should match the inputs to that request."],
    ["What can happen when unrelated logic shares one Effect?", "One dependency may restart work that did not need to change", "The Effect gets removed from the component", 0, "Coupled dependencies can cause unnecessary synchronization."],
  ]),
  dependencyTopic("react-reading-state-to-calculate-next-state", "Are You Reading Some State to Calculate the Next State?", "Use a functional state updater so a long-lived subscription does not depend on the previous state value.", [
    "A message subscription may append each received message to the current list. If the Effect reads messages directly, it must depend on messages, which can cause the connection to restart whenever the list changes.",
    "Pass an updater function to the state setter. React provides the latest pending state to the updater, so the connection Effect can depend only on the values that actually define the connection.",
  ], [
    "setMessages(previous => [...previous, receivedMessage]);",
    "useEffect(() => { connection.on('message', msg => setMessages(prev => [...prev, msg])); }, [roomId]);",
    "// Avoid setMessages([...messages, receivedMessage]) inside a persistent subscription Effect.",
  ], [
    ["What does a functional updater receive?", "The latest previous state", "The component's props only", 0, "React supplies the pending state value to the updater."],
    ["Why can a functional updater remove messages from dependencies?", "The Effect no longer reads messages directly", "It prevents messages from rendering", 0, "The updater handles previous state without capturing it in the Effect."],
    ["What should the connection Effect depend on?", "Values that define the connection, such as roomId", "The full messages array if not otherwise used", 0, "The Effect should restart only when its synchronization inputs change."],
  ]),
  dependencyTopic("react-read-value-without-reacting-to-changes", "Do You Want to Read a Value Without “Reacting” to Its Changes?", "Use an Effect Event to read a latest value for a callback without making it restart the synchronization.", [
    "A chat can play a sound when a message arrives unless muted. The connection should resynchronize when roomId changes, but muting or unmuting should not reconnect the chat.",
    "Use a functional updater for appending messages and an Effect Event for the sound decision. The Effect Event reads the latest isMuted value when the message arrives without adding it to the connection Effect's dependencies.",
  ], [
    "const onMessage = useEffectEvent(message => { if (!isMuted) playSound(); });",
    "useEffect(() => { const c = connect(roomId); c.on('message', onMessage); return () => c.disconnect(); }, [roomId]);",
    "setMessages(previous => [...previous, receivedMessage]);",
  ], [
    ["What should changing isMuted do in this example?", "Change whether the next message plays sound, without reconnecting", "Reconnect the current chat room", 0, "Mute state affects the callback behavior, not the connection itself."],
    ["When does the Effect Event read isMuted?", "When the incoming message callback runs", "Only when the room first mounts", 0, "Effect Events access latest state when invoked."],
    ["What should remain the connection dependency?", "roomId", "isMuted and the messages array", 0, "The room ID defines which connection is active."],
  ]),
  dependencyTopic("react-reactive-value-changes-unintentionally", "Does Some Reactive Value Change Unintentionally?", "Avoid render-created objects and functions as dependencies when they make synchronization restart every render.", [
    "Objects and functions created during rendering have a new identity on each render. If an Effect depends on one of them, React may treat it as changed even when its meaningful contents are the same.",
    "Move stable constants outside the component, create setup-only objects inside the Effect, or use useCallback/useMemo only when appropriate. Keep dependencies honest rather than suppressing the linter.",
  ], [
    "useEffect(() => { const options = { roomId }; connect(options); }, [roomId]);",
    "const SERVER_URL = 'https://chat.example'; // stable module constant",
    "const handle = useCallback(() => doWork(id), [id]); // stable when genuinely needed",
  ], [
    ["Why can a render-created object retrigger an Effect?", "Its identity changes on each render", "React compares only its nested text", 0, "New object references are different dependency values."],
    ["Where can an Effect-only options object be created?", "Inside the Effect", "As a new component state value on every render", 0, "Creating it inside setup avoids an unstable outer object dependency."],
    ["Should you suppress the linter for unstable objects?", "No, restructure the code to avoid unnecessary identity changes", "Yes, missing dependency warnings are harmless", 0, "Restructuring keeps synchronization correct and avoids unintended restarts."],
  ]),
  dependencyTopic("react-removing-effect-dependencies-recap", "Recap", "Review how to make dependencies correct by changing the code rather than hiding reactive reads.", [
    "Dependencies should match the reactive values read by the Effect. If the list is undesirable, move interaction logic to a handler, split unrelated Effects, use functional updaters, or extract non-reactive logic into an Effect Event.",
    "Objects and functions created during rendering can change identity unexpectedly. Move constants or setup-only values to a stable location, and keep the linter enabled to catch stale dependencies.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "setItems(previous => [...previous, item]);",
    "const onNotice = useEffectEvent(() => notify(theme));",
  ], [
    ["What should dependencies match?", "The Effect's reactive reads", "The smallest list that passes a build", 0, "Correct dependencies keep synchronization current."],
    ["How can previous state be read safely?", "Use a functional state updater", "Capture state in an Effect and omit it", 0, "Updater functions avoid stale state captures."],
    ["What should you avoid doing to silence a linter warning?", "Suppressing a real dependency", "Restructuring an object created during render", 0, "Hiding a dependency can cause stale or incorrect behavior."],
  ]),
  dependencyTopic("react-removing-effect-dependencies-challenges", "Challenges", "Refactor a reconnecting chat, a resetting interval, and an interaction hidden in an Effect.", [
    "Challenge 1: A chat reconnects whenever its options object is recreated. Construct options inside the Effect and depend on its primitive inputs. Challenge 2: A message listener captures an old array; use a functional updater.",
    "Challenge 3: A POST request runs from an Effect watching submitted. Move it to the submit handler. Challenge 4: A notification needs the latest theme but should not reconnect; use an Effect Event and keep the actual connection inputs reactive.",
  ], [
    "useEffect(() => { const options = { roomId }; const c = connect(options); return () => c.disconnect(); }, [roomId]);",
    "setMessages(previous => [...previous, message]);",
    "function handleSubmit() { post(formData); }",
  ], [
    ["How do you stop an options object from changing identity each render?", "Create it inside the Effect from its reactive inputs", "Remove it from dependencies without changing the code", 0, "This leaves primitive inputs as accurate dependencies."],
    ["How should a persistent listener append to state?", "Use a functional updater", "Use a captured array and omit it from dependencies", 0, "The updater receives the latest state when the message arrives."],
    ["Where should a form POST run?", "In the submit event handler", "In an Effect watching the submitted flag", 0, "The request is caused by the user's submit interaction."],
  ]),
]);
