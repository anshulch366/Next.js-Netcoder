import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function queueTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Trace the queued operations from the starting state to find the value React will use next." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "React discards every update in the queue"] : [alternate, correct, "React discards every update in the queue"],
      answer,
      explanation,
    })),
  };
}

export const queueUpdatesLessons = chapter("Learn React · Adding Interactivity · Queueing a Series of State Updates", [
  queueTopic("react-queue-state-updates", "Queueing a Series of State Updates", "Understand batching and how React applies several updates to the same state value.", [
    "A state setter queues work for React instead of changing the value in the currently running handler. React waits until the event handler finishes, then processes the queued updates and renders the result.",
    "When several updates depend on the previous value, pass updater functions such as current => current + 1. React applies them in order, carrying each returned value into the next updater. A direct value instead requests that state be replaced with that value.",
  ], [
    "function handlePublish() {\n  setPublished(true);\n  setNotice('Your post is ready');\n}",
    "function addThree() {\n  setScore(value => value + 1);\n  setScore(value => value + 1);\n  setScore(value => value + 1);\n}",
    "function applyChanges() {\n  setLevel(4);\n  setLevel(value => value + 2);\n}\n// The queued result is 6.",
  ], [
    ["What does batching mean for state updates in an event handler?", "React processes queued updates after the handler finishes", "React renders synchronously after every setter call", 0, "Batching lets React process related updates together after the event code completes."],
    ["Which pattern adds three to a value using the previous queued result?", "Call setScore(value => value + 1) three times", "Call setScore(score + 1) three times in the same render", 0, "Each updater receives the result of the earlier updater in the queue."],
    ["If a queue replaces a value with 4 and then adds 2, what is the result?", "6", "2", 0, "The replacement becomes 4, and the next updater receives 4 and returns 6."],
  ]),
  queueTopic("react-batching-state-updates", "React Batches State Updates", "See why React waits for event code to finish before rendering queued state changes.", [
    "React usually waits until the current event handler has completed before processing its state updates. This grouping is called batching; it avoids repeatedly rendering intermediate UI while one interaction is still being handled.",
    "Several state variables can be updated during one handler and shown together in the next render. Each intentional click is still handled separately, so one interaction's updates do not leave the next interaction acting on a half-finished UI.",
  ], [
    "function handleSave() {\n  setSaving(true);\n  setMessage('Saving your changes');\n  saveDocument();\n}",
    "function handleToggle() {\n  setOpen(value => !value);\n  setAnnouncement(open ? 'Closed' : 'Opened');\n}",
    "function handleAdd() {\n  setCount(value => value + 1);\n  setLastAction('Added one');\n}\n// React can render both updates together after this handler finishes.",
  ], [
    ["Why does React batch related updates?", "To avoid unnecessary intermediate renders", "To prevent all state variables from changing", 0, "Batching reduces extra render work and avoids showing partial states."],
    ["When does React usually process a handler's queued updates?", "After the handler code finishes", "Before the first line of the handler", 0, "React waits until the event handler has completed before processing the queued work."],
    ["Can one handler queue updates to more than one state variable?", "Yes, they can be processed together", "No, only one state variable may change per event", 0, "React can batch related updates from multiple state setters."],
  ]),
  queueTopic("react-update-same-state-multiple-times", "Updating the Same State Multiple Times Before the Next Render", "Use updater functions when several changes depend on earlier queued changes.", [
    "Writing setCount(count + 1) several times in one handler uses the same count snapshot each time. Those calls therefore request the same replacement value rather than building on each other.",
    "An updater function describes a transformation of the pending value. React queues each function and applies them in sequence, so three increments each receive the value produced by the previous increment.",
  ], [
    "// Starting from 0, these all request replacement with 1.\nsetCount(count + 1);\nsetCount(count + 1);\nsetCount(count + 1);",
    "// Starting from 0, this queue produces 3.\nsetCount(value => value + 1);\nsetCount(value => value + 1);\nsetCount(value => value + 1);",
    "setCart(items => [...items, firstItem]);\nsetCart(items => [...items, secondItem]);",
  ], [
    ["Why can three calls to setCount(count + 1) add only one?", "Each call reads the same count snapshot", "React combines the three numbers automatically", 0, "The count variable remains fixed for the current render."],
    ["How does React process updater functions in one state queue?", "In order, passing each result into the next function", "In reverse order, using the original value every time", 0, "Updater functions are applied sequentially to the pending state."],
    ["Which update is useful when appending based on the latest array?", "setCart(items => [...items, item])", "setCart(items.push(item))", 0, "The updater receives the queued array and returns a new array with the item."],
  ]),
  queueTopic("react-queue-update-after-replacement", "What Happens If You Update State After Replacing It?", "Follow a replacement value with an updater and calculate the final queued state.", [
    "A direct state value acts like a replacement in the queue. If an updater function follows it, the updater receives that replacement as its input and can transform it.",
    "For example, starting at 2, setting the value to 7 and then adding 1 produces 8. The earlier render snapshot is used to calculate the direct value; the later updater operates on the queue's pending result.",
  ], [
    "setCount(count + 5);\nsetCount(value => value + 1);\n// If count was 2, the next value is 8.",
    "setPage(10);\nsetPage(value => value * 2);\n// The queued result is 20.",
    "setTags(['react']);\nsetTags(tags => [...tags, 'state']);\n// The queue produces ['react', 'state'].",
  ], [
    ["Starting from 2, what is the result of setCount(count + 5) then setCount(value => value + 1)?", "8", "3", 0, "The first update replaces the pending value with 7; the next updater adds one."],
    ["What does an updater after a direct replacement receive?", "The value produced by the replacement", "The original state no matter what", 0, "Queue operations are processed in order, so the updater receives the pending result."],
    ["What does the second update do in the tags example?", "Adds state to the queued replacement array", "Restores the original array", 0, "The updater receives the new one-item array and returns a two-item array."],
  ]),
  queueTopic("react-queue-replacement-after-update", "What Happens If You Replace State After Updating It?", "See how a later direct value becomes the final result of the queue.", [
    "Queue order matters. React can apply an initial replacement, then an updater, then another replacement. The final replacement supplies the value for the next render, overriding the earlier intermediate result.",
    "Think of a direct value as 'replace the pending value with this' and an updater as 'calculate a value from what is pending.' This model makes mixed queues easier to read without guessing.",
  ], [
    "setCount(count + 5);\nsetCount(value => value + 1);\nsetCount(42);\n// The final value is 42.",
    "setMode('compact');\nsetMode(value => value.toUpperCase());\nsetMode('full');\n// The final value is 'full'.",
    "setItems([]);\nsetItems(items => [...items, draft]);\nsetItems(savedItems);\n// The final replacement is savedItems.",
  ], [
    ["What is the result when a direct replacement comes after an updater?", "The later replacement value", "The value returned by the earlier updater", 0, "The later replacement is processed last and determines the final state."],
    ["How should you read setCount(42) in the queue model?", "Replace the pending value with 42", "Add 42 to the pending value", 0, "A direct value replaces state rather than incrementing it."],
    ["Why does queue order matter?", "Each update can change the input seen by the next one", "All queued updates always run at once with the same input", 0, "Each operation is processed in sequence against the pending state."],
  ]),
  queueTopic("react-updater-naming-conventions", "Naming Conventions", "Choose readable parameter names for state updater functions.", [
    "An updater receives the pending state value as its argument. Short names such as n for number can keep a tiny expression concise, while a longer name can make more complex logic easier to understand.",
    "Names such as previousCount or currentItems make it clear that the argument is the value React is processing, not a separate source of state. Updater functions should stay pure: calculate and return the next value without side effects.",
  ], [
    "setEnabled(enabled => !enabled);",
    "setCount(previousCount => previousCount + 2);",
    "setFriends(currentFriends => [...currentFriends, newFriend]);",
  ], [
    ["What does the updater parameter represent?", "The pending state value React is processing", "A second state setter", 0, "React passes the queued state value to the updater function."],
    ["When is a longer name like previousCount helpful?", "When it makes the calculation easier to understand", "When React requires a specific parameter spelling", 0, "The parameter name is your choice; clarity is the goal."],
    ["What should an updater function avoid doing?", "Side effects such as setting another state variable", "Returning the calculated next value", 0, "Updaters should be pure calculations so React can safely process them."],
  ]),
  queueTopic("react-queue-updates-recap", "Recap", "Review batching, replacement values, and sequential updater functions.", [
    "React batches state updates from an event handler and processes them after the handler completes. A direct value replaces the pending state, while an updater function transforms the pending value.",
    "When several updates depend on one another, updater functions let each step use the result of the previous step. Keep them pure and name their parameter clearly.",
  ], [
    "setCount(value => value + 1);\nsetCount(value => value + 1);",
    "setCount(5);\nsetCount(value => value + 1); // final value: 6",
    "setCount(value => value + 1);\nsetCount(0); // final value: 0",
  ], [
    ["When are batched event updates usually processed?", "After the event handler finishes", "After each individual line immediately", 0, "React waits until the event code completes before processing the batch."],
    ["What should you use for a sequence of dependent changes?", "Updater functions", "Repeated expressions from one stale snapshot", 0, "Updater functions receive each pending result in order."],
    ["What determines the result of a mixed queue?", "The ordered sequence of replacements and updater functions", "Only the first update", 0, "React applies queued operations in order to determine the next state."],
  ]),
  queueTopic("react-queue-updates-challenges", "Challenges", "Fix request counters and build a small state-update queue.", [
    "Challenge 1: A purchase control tracks pending and completed requests. Rapid clicks cause incorrect totals because delayed callbacks use old snapshots. Update each counter from its pending value with an updater function.",
    "Challenge 2: Given a starting number and a list of replacements or updater functions, write a small pure reducer that applies each operation in order. Check your result for a replacement followed by an increment and an increment followed by a replacement.",
  ], [
    "setPending(value => value + 1);\nawait wait(1000);\nsetPending(value => value - 1);",
    "setCompleted(value => value + 1);",
    "function applyQueue(start, updates) {\n  return updates.reduce((value, update) =>\n    typeof update === 'function' ? update(value) : update, start);\n}",
  ], [
    ["Why should delayed request counters use updater functions?", "Each completion must adjust the latest queued counter value", "A timer callback automatically receives fresh component variables", 0, "Updater functions avoid calculating from an old render snapshot."],
    ["What should a queue simulator do with a function update?", "Call it with the current pending value", "Treat it as a literal replacement object", 0, "An updater transforms the value currently in the simulated queue."],
    ["What should a queue simulator do with a direct value?", "Replace the current pending value", "Add the value to the current number", 0, "Direct state values replace rather than transform the pending state."],
  ]),
]);
