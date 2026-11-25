import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function lifecycleTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Advanced" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Think of this Effect as one synchronization process: what starts it, what values change it, and how it stops." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Suppress dependency checks so the Effect runs less"] : [alternate, correct, "Suppress dependency checks so the Effect runs less"],
      answer,
      explanation,
    })),
  };
}

export const effectLifecycleLessons = chapter("Learn React · Escape Hatches · Lifecycle of Reactive Effects", [
  lifecycleTopic("react-lifecycle-of-reactive-effects", "Lifecycle of Reactive Effects", "Understand each Effect as an independent synchronization process with its own start, stop, and reactive values.", [
    "A component can render many times, but an Effect has a separate lifecycle: it starts synchronizing after a commit and may stop before it starts again or when the component is removed.",
    "Think from the Effect's point of view: what external system is it syncing, which values should restart that sync, and what cleanup undoes the previous setup? This model is more useful than treating an Effect as a one-time mount callback.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);",
    "// Each Effect should describe one independent synchronization process.",
  ], [
    ["What does an Effect represent?", "A synchronization process that can start and stop", "A component's entire mount-update-unmount lifecycle", 0, "Each Effect has a lifecycle separate from its component."],
    ["When can an Effect stop?", "Before a new setup or when its component is removed", "Only when the browser closes", 0, "Cleanup ends the previous synchronization when it is replaced or removed."],
    ["What is a useful way to reason about an Effect?", "Ask how its synchronization starts, changes, and stops", "Treat it as a one-time callback only", 0, "This perspective accounts for dependency changes and cleanup."],
  ]),
  lifecycleTopic("react-the-lifecycle-of-an-effect", "The Lifecycle of an Effect", "Distinguish the Effect's start-and-stop cycle from the component's render lifecycle.", [
    "A component may render because props or state changed. An Effect then synchronizes external state after the commit. When the Effect's synchronization is no longer current, cleanup stops it.",
    "An Effect may start and stop multiple times while the component remains mounted. Its lifecycle is controlled by dependencies and cleanup, not just by whether the component mounted once.",
  ], [
    "useEffect(() => { const connection = connect(room); return () => connection.disconnect(); }, [room]);",
    "// room A setup → cleanup room A → room B setup",
    "// Component remains mounted through the Effect's resynchronization.",
  ], [
    ["Can an Effect restart while its component stays mounted?", "Yes, when its dependencies change", "No, Effects only run on mount", 0, "Dependency changes cause cleanup and a new setup."],
    ["What commonly stops the old synchronization?", "Its cleanup function", "A new JSX variable name", 0, "Cleanup releases the previous external connection or resource."],
    ["What controls Effect resynchronization?", "The Effect's reactive dependencies", "The component's file name", 0, "Dependencies define which reactive values can change the synchronization."],
  ]),
  lifecycleTopic("react-why-synchronization-may-repeat", "Why Synchronization May Need to Happen More Than Once", "Resynchronize when a value such as a room ID changes so the external system matches the current UI.", [
    "If a chat component switches from one room to another, keeping the old connection would leave it synchronized with stale UI. The old connection should stop and a new one should start with the new room ID.",
    "Repeated synchronization is normal. Cleanup ensures there is not an obsolete connection left behind while the current screen displays something different.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "// roomId changes from 'general' to 'help': old connection closes, new one opens.",
    "useEffect(() => { map.setZoomLevel(zoom); }, [map, zoom]);",
  ], [
    ["Why reconnect when roomId changes?", "The external connection should match the room currently shown", "React requires one connection for every room forever", 0, "Synchronization should reflect the current selected room."],
    ["What happens to the previous connection?", "Cleanup disconnects it", "It stays active alongside every new connection", 0, "Cleanup prevents obsolete synchronization from remaining active."],
    ["Is repeated synchronization always a bug?", "No, it is expected when relevant values change", "Yes, an Effect must run only once", 0, "Effects are designed to resynchronize as their dependencies change."],
  ]),
  lifecycleTopic("react-how-react-resynchronizes-effect", "How React Re-synchronizes Your Effect", "Follow cleanup and setup in order when a dependency changes.", [
    "After a render with changed dependencies commits, React runs cleanup using the values from the previous setup, then runs setup using the latest values.",
    "For a connection, this means disconnect the previous room before connecting to the next room. Mirroring setup and cleanup avoids overlap and stale external state.",
  ], [
    "useEffect(() => { const connection = connect(roomId); return () => connection.disconnect(); }, [roomId]);",
    "// Previous cleanup uses its captured connection, then new setup creates another.",
    "// Changing serverUrl also cleans up and reconnects if it is a dependency.",
  ], [
    ["What order does React use when dependencies change?", "Previous cleanup, then new setup", "New setup, then old cleanup much later", 0, "Cleanup stops old synchronization before new synchronization begins."],
    ["Which values should cleanup use?", "The resources created by that setup", "Unrelated values from a future render", 0, "Cleanup should undo the specific work performed in its setup."],
    ["What does new setup receive?", "The latest committed reactive values", "The previous render's props forever", 0, "The new setup synchronizes using the current values."],
  ]),
  lifecycleTopic("react-thinking-from-effects-perspective", "Thinking from the Effect’s Perspective", "Describe the external connection each Effect owns instead of mapping code only to mount and update events.", [
    "Rather than asking whether code should run on mount or update, describe the synchronization process itself: connect to the selected room and disconnect when that room is no longer current.",
    "This framing makes cleanup and dependency changes easier to reason about. It also discourages empty-array tricks that hide changing values from the Effect.",
  ], [
    "// Start synchronizing with the current room; stop synchronizing with that room.",
    "useEffect(() => { const c = createConnection(roomId); c.connect(); return () => c.disconnect(); }, [roomId]);",
    "// Avoid treating an Effect as an onMount callback with arbitrary extra work.",
  ], [
    ["Which question helps reason about an Effect?", "What synchronization does it start and how does it stop?", "How can I make it run exactly once no matter what?", 0, "The Effect's own process clarifies setup and cleanup needs."],
    ["What is cleanup for in this model?", "Stopping the synchronization started by setup", "Running unrelated code after every render", 0, "Cleanup releases the Effect's external work."],
    ["Why is mount-only thinking limited?", "Effects can restart while the component remains mounted", "Components never render more than once", 0, "Dependencies can trigger multiple synchronization cycles."],
  ]),
  lifecycleTopic("react-how-react-verifies-effect-can-resynchronize", "How React Verifies That Your Effect Can Re-synchronize", "Use development setup-cleanup checks to find missing cleanup or assumptions about one-time execution.", [
    "In development, React may start and stop an Effect an extra time to check whether setup and cleanup are correctly paired. A working Effect should leave one correct active synchronization after this check.",
    "Do not hide the extra cycle with a ref flag. Fix missing cleanup or make setup idempotent where appropriate so the synchronization behaves correctly when restarted.",
  ], [
    "useEffect(() => { const sub = subscribe(); return () => sub.unsubscribe(); }, []);",
    "// Development check: setup → cleanup → setup; one subscription remains active.",
    "// Avoid didRunRef guards that skip required setup after a remount.",
  ], [
    ["Why does development repeat an Effect cycle?", "To reveal setup or cleanup bugs", "To make production permanently duplicate every Effect", 0, "The extra cycle stress-tests whether synchronization can restart safely."],
    ["What should remain after setup-cleanup-setup?", "One correct active synchronization", "Two active subscriptions", 0, "Cleanup should remove the first setup before the next one starts."],
    ["How should you fix an Effect that fails this check?", "Implement correct cleanup and restart behavior", "Add a ref flag to skip the second setup", 0, "A guard can hide the bug without fixing the synchronization lifecycle."],
  ]),
  lifecycleTopic("react-how-react-knows-effect-needs-resynchronize", "How React Knows That It Needs to Re-synchronize the Effect", "React compares each dependency with its value from the previous committed render.", [
    "React compares the dependency list from the current render with the previous list. If a dependency changed, cleanup and setup run again; if none changed, that Effect can keep its current synchronization.",
    "The dependency array is not a scheduling preference. It describes which reactive values the Effect reads, so it must accurately represent the code.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "useEffect(() => widget.setZoom(zoom), [widget, zoom]);",
    "// React compares dependency values across renders to decide whether to resync.",
  ], [
    ["What does React compare between renders?", "The dependency values", "The Effect function's source code text", 0, "Dependency value changes trigger resynchronization."],
    ["What happens if no dependency changed?", "The current synchronization can continue", "React always disconnects everything", 0, "Unchanged dependencies mean the Effect does not need to restart."],
    ["What does the dependency list describe?", "Reactive values used by the Effect", "A preferred run frequency", 0, "It is a description of the Effect's reactive inputs."],
  ]),
  lifecycleTopic("react-each-effect-separate-process", "Each Effect Represents a Separate Synchronization Process", "Split unrelated external synchronizations into independent Effects with their own dependencies.", [
    "An Effect should describe one independent process. If one component connects to a chat room and separately synchronizes a map zoom, those processes have different inputs and cleanup needs.",
    "Keeping them separate prevents a change to one process from unnecessarily restarting another and makes each setup-cleanup pair easier to understand.",
  ], [
    "useEffect(() => connect(roomId), [roomId]);",
    "useEffect(() => map.setZoomLevel(zoom), [map, zoom]);",
    "// Separate analytics subscription from an unrelated widget synchronization.",
  ], [
    ["Why split unrelated synchronization processes?", "They have independent dependencies and cleanup", "React only allows one Effect per component", 0, "Separate Effects keep each process and its inputs clear."],
    ["What should a room Effect depend on?", "The room values it reads", "An unrelated map zoom", 0, "Each process should track its own reactive values."],
    ["What can happen if unrelated processes share one Effect?", "One change may restart work that did not need to change", "React stops running all Effects", 0, "Unrelated dependencies couple the synchronization lifecycles."],
  ]),
  lifecycleTopic("react-effects-react-to-reactive-values", "Effects “React” to Reactive Values", "Treat props, state, and values calculated in the component as reactive inputs.", [
    "An Effect reacts to values that can change during rendering. Props and state are reactive, and so are values calculated from them in the component body.",
    "If an Effect reads a reactive value, that value belongs in its dependency list. When it changes, React should synchronize again so the external system receives current information.",
  ], [
    "function Chat({ roomId }) { useEffect(() => connect(roomId), [roomId]); }",
    "const serverUrl = selectedUrl ?? settings.defaultUrl; // reactive calculation",
    "useEffect(() => connect(serverUrl, roomId), [serverUrl, roomId]);",
  ], [
    ["Which values are reactive?", "Props, state, and values calculated in the component", "Only values created by useState", 0, "Any render-time value can change when its inputs change."],
    ["If the Effect reads roomId, what should happen?", "roomId should be a dependency", "It should be omitted to reduce runs", 0, "The Effect must resynchronize when its reactive input changes."],
    ["Can a value computed from props still be reactive?", "Yes", "No, calculated values never change", 0, "A calculation can change when its reactive inputs change."],
  ]),
  lifecycleTopic("react-effect-empty-dependencies", "What an Effect with Empty Dependencies Means", "An empty dependency list means the Effect reads no reactive values from the component body.", [
    "An empty array is appropriate only when setup uses no reactive values from the component. It means the synchronization starts for that component instance and stops when the instance is removed, aside from development verification cycles.",
    "If the Effect reads a prop or state value, an empty list is inaccurate. Do not use it as a command to run once; restructure the code or list the actual reactive dependencies.",
  ], [
    "useEffect(() => { const connection = connect(STATIC_URL); return () => connection.disconnect(); }, []);",
    "useEffect(() => { logVisit(); }, []); // no reactive values read",
    "useEffect(() => connect(roomId), [roomId]); // not an empty dependency Effect",
  ], [
    ["When is [] appropriate?", "When the Effect reads no reactive component values", "Whenever you want to silence dependency warnings", 0, "Empty dependencies are accurate only when no reactive value is used."],
    ["What does an empty list not mean?", "A command to ignore changing values and run once", "The Effect has no reactive dependencies", 1, "Dependencies must describe the code rather than dictate a preferred schedule."],
    ["What does cleanup do for an empty-dependency connection?", "Disconnect when the component instance is removed", "Run after every render", 0, "The synchronization lasts for that component instance's lifetime."],
  ]),
  lifecycleTopic("react-component-body-variables-are-reactive", "All Variables Declared in the Component Body Are Reactive", "Include component-body values in dependencies when the Effect reads them.", [
    "A local variable is recalculated whenever the component renders. If an Effect reads that value, it may differ on a later render, so it is reactive even if it was not declared with useState.",
    "To make a value non-reactive, prove that it cannot change because of rendering: move a true constant outside the component or create setup-only values inside the Effect.",
  ], [
    "function Chat({ roomId }) { const serverUrl = getUrl(roomId); useEffect(() => connect(serverUrl), [serverUrl]); }",
    "const SERVER_URL = 'https://chat.example'; // outside component",
    "useEffect(() => { const options = { roomId: 'general' }; connect(options); }, []);",
  ], [
    ["Why is a component-body variable reactive?", "It can be recalculated when the component renders", "It is stored permanently outside React", 0, "Render-time values can change across renders."],
    ["How can a true constant stop being reactive?", "Move it outside the component", "Remove it from dependencies while keeping it inside", 0, "A value outside the component cannot vary with that component's render."],
    ["Where can setup-only options be created?", "Inside the Effect", "In a new state value synchronized by another Effect", 0, "Values created inside setup are not recalculated by component rendering."],
  ]),
  lifecycleTopic("react-effect-dependencies-linter", "React Verifies That You Specified Every Reactive Value as a Dependency", "Use the Hook linter to find reactive values that an Effect reads but does not list.", [
    "The React Hooks linter checks that an Effect's dependency list includes reactive values used by its setup and cleanup. This helps prevent stale closures and missing resynchronization.",
    "If adding a dependency causes repeated runs or a loop, change the code structure rather than suppressing the warning. The linter can identify missing dependencies, while you choose the design that keeps synchronization correct.",
  ], [
    "useEffect(() => connect(serverUrl, roomId), [serverUrl, roomId]);",
    "// If an object dependency changes each render, create it inside the Effect when possible.",
    "// Avoid disabling exhaustive-deps to conceal a stale value.",
  ], [
    ["What does the dependency linter check?", "Whether reactive values used by an Effect are listed", "Whether the Effect has the shortest possible code", 0, "The linter checks dependency correctness."],
    ["What should you do if adding a dependency causes a loop?", "Restructure the Effect and its inputs", "Suppress the dependency warning", 0, "The code should be fixed so its dependencies match its actual synchronization needs."],
    ["Can the linter choose the best architecture for you?", "No, it flags dependency issues but design still needs judgment", "Yes, it rewrites component structure automatically", 0, "The linter helps detect errors but does not decide the best code design."],
  ]),
  lifecycleTopic("react-what-to-do-when-you-dont-want-to-resynchronize", "What to Do When You Don’t Want to Re-synchronize", "Restructure code to remove unnecessary reactive dependencies without hiding real ones.", [
    "Do not choose dependencies by preference or suppress the linter. If a value truly cannot change during rendering, move it outside the component or create it inside the Effect.",
    "If an Effect needs to read the latest value without resynchronizing for it, separate reactive synchronization from non-reactive event logic using an Effect Event where supported. Also avoid render-created objects or functions as dependencies when a simpler structure works.",
  ], [
    "const SERVER_URL = 'https://chat.example'; // stable outside the component",
    "useEffect(() => { const options = { roomId }; connect(options); }, [roomId]);",
    "// Move event-like logic out of the Effect instead of omitting a dependency.",
  ], [
    ["What should you avoid when you do not want resynchronization?", "Suppressing a real dependency warning", "Restructuring code to make values stable", 0, "Hiding dependencies can make the Effect use stale values."],
    ["How can a truly constant value be made non-reactive?", "Move it outside the component", "Keep recalculating it inside and omit it", 0, "A value outside rendering cannot change with component props or state."],
    ["What if an Effect reads a value that should not trigger synchronization?", "Separate the non-reactive event logic where supported", "Always leave the value out of dependencies", 0, "Separating concerns avoids stale data while keeping synchronization accurate."],
  ]),
  lifecycleTopic("react-lifecycle-of-reactive-effects-recap", "Recap", "Review dependency changes, cleanup, development checks, and reactive values.", [
    "Each Effect represents a separate synchronization process. When dependencies change, React cleans up the previous process and starts it again with current values.",
    "Props, state, and component-body calculations are reactive. Include every reactive value the Effect reads, and restructure code rather than suppressing the linter when synchronization is too frequent.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "// Dependencies represent reactive values used by this process.",
    "// Development may verify that setup and cleanup can repeat safely.",
  ], [
    ["What causes an Effect to resynchronize?", "A change to one of its dependencies", "A filename change", 0, "React compares current dependencies with the previous render."],
    ["What does cleanup do?", "Stops the previous synchronization", "Changes all component props", 0, "Cleanup releases work from the previous setup."],
    ["What should happen when the linter flags a missing dependency?", "Fix the code or dependency list structure", "Ignore it so the Effect runs less", 0, "The Effect should accurately represent the values it uses."],
  ]),
  lifecycleTopic("react-lifecycle-of-reactive-effects-challenges", "Challenges", "Practice fixing stale connections, missing dependencies, and Effects that are not restart-safe.", [
    "Challenge 1: A chat connection keeps using the first room ID. Add the reactive room ID as a dependency and disconnect the old connection in cleanup. Challenge 2: A function declared in the component makes an Effect restart every render; move the helper inside the Effect if it is only used there.",
    "Challenge 3: A subscription duplicates in development. Return the matching unsubscribe function. Challenge 4: A lint warning is suppressed for a URL that depends on settings; include the computed URL or restructure it so the value is truly stable.",
  ], [
    "useEffect(() => { const c = connect(roomId); return () => c.disconnect(); }, [roomId]);",
    "useEffect(() => { function buildOptions() { return { roomId }; } connect(buildOptions()); }, [roomId]);",
    "useEffect(() => { const off = store.subscribe(onChange); return off; }, [store, onChange]);",
  ], [
    ["How do you fix a connection using a stale room?", "Add roomId as a dependency and clean up the old connection", "Keep an empty dependency list", 0, "The Effect must resynchronize when the room changes."],
    ["What should a subscription Effect return?", "The matching unsubscribe cleanup", "A flag that blocks future setup", 0, "Cleanup removes the old listener before the next setup."],
    ["How should a changing URL be handled?", "Include it as a dependency or restructure its source correctly", "Suppress the lint warning", 0, "Every reactive value used by the Effect must be represented accurately."],
  ]),
]);
