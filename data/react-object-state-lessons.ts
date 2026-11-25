import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function objectTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Compare the previous object with the new value and check that the update creates fresh data." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "React automatically repairs every mutation"] : [alternate, correct, "React automatically repairs every mutation"],
      answer,
      explanation,
    })),
  };
}

export const objectStateLessons = chapter("Learn React · Adding Interactivity · Updating Objects in State", [
  objectTopic("react-updating-objects-in-state", "Updating Objects in State", "Create replacement objects when state data needs to change.", [
    "React state can hold objects, but an object stored in state should be treated as read-only. When a value needs to change, create a new object and pass it to the setter so React can use the new value on the next render.",
    "A new object also preserves the previous render's data. This makes updates predictable and helps prevent different parts of the app from accidentally sharing changes through the same object reference.",
  ], [
    "const [coordinates, setCoordinates] = useState({ x: 12, y: 8 });",
    "setCoordinates({ x: pointerX, y: pointerY });",
    "setAccount(current => ({ ...current, active: true }));",
  ], [
    ["What is a reliable way to update an object stored in state?", "Create a new object and pass it to the setter", "Change a property on the existing state object", 0, "A replacement object gives React a new state value and keeps the old snapshot intact."],
    ["Why should the previous state object remain unchanged?", "Earlier renders may still rely on that value", "Objects cannot contain strings", 0, "Immutable updates preserve the data associated with earlier renders."],
    ["What can an object setter receive?", "A new object or an updater that returns one", "Only a property name", 0, "Setters accept the next value or a function that calculates it."],
  ]),
  objectTopic("react-whats-a-mutation", "What's a Mutation?", "Distinguish replacing a value from changing an existing object in place.", [
    "A mutation changes the contents of an existing object or array. For example, assigning to position.x modifies the same object reference rather than creating a new one.",
    "Primitive values such as numbers and strings are replaced rather than edited in place. Objects can be mutated in JavaScript, but mutating an object held in React state can change data from a past render without notifying React.",
  ], [
    "const nextLevel = level + 1; // creates a new number value",
    "profile.nickname = 'Sky'; // mutation of an existing object",
    "const nextProfile = { ...profile, nickname: 'Sky' }; // replacement object",
  ], [
    ["Which line mutates an existing object?", "profile.nickname = 'Sky'", "const label = 'Sky'", 0, "Assigning to a property changes the existing profile object."],
    ["What does mutation mean here?", "Changing an existing object's contents", "Creating an independent replacement value", 0, "Mutation changes data on the existing object reference."],
    ["Why can state mutation cause trouble?", "It changes a previous value without a setter update", "It automatically creates too many components", 0, "React may not be notified and older render snapshots can be altered."],
  ]),
  objectTopic("react-treat-state-as-read-only", "Treat State as Read-Only", "Use state setters with new objects instead of editing state directly.", [
    "Reading an object from a render gives the component a reference to state data. Avoid assigning to its properties in event handlers or render logic; React cannot infer that the object changed just because one of its fields was edited.",
    "Build a replacement object and call the setter. React can then schedule a render using that value, and other code that still refers to the previous object will not see it unexpectedly change.",
  ], [
    "// Avoid: position.x = event.clientX;",
    "setPosition({ x: event.clientX, y: event.clientY });",
    "setPreferences(current => ({ ...current, theme: 'dark' }));",
  ], [
    ["Why is direct assignment to a state object's property unreliable?", "It changes data without notifying React through the setter", "React requires every property to be a number", 0, "A direct mutation does not request a render with a new state value."],
    ["What should a pointer handler do with new coordinates?", "Create and set a new coordinates object", "Mutate the existing coordinates object", 0, "Passing a new object to the setter requests the UI update."],
    ["What does treating state as read-only protect?", "Previous render data and predictable updates", "The CSS class names from being parsed", 0, "Immutable state preserves earlier values and makes updates trackable."],
  ]),
  objectTopic("react-copy-objects-spread", "Copying Objects with the Spread Syntax", "Preserve unchanged properties while replacing selected fields.", [
    "When only one property should change, object spread can copy the old top-level fields into a fresh object. Put the updated property after the spread so its new value overrides the copied one.",
    "Spread is shallow: nested objects are copied by reference. For a nested update, copy the outer object and the nested object that changes; other unchanged nested values may remain shared if treated as immutable.",
  ], [
    "setProfile(current => ({ ...current, name: 'Asha' }));",
    "setForm(current => ({ ...current, email: event.target.value }));",
    "setSettings(current => ({ ...current, notifications: !current.notifications }));",
  ], [
    ["What does { ...profile, name: 'Asha' } do?", "Copies top-level fields and overrides name", "Mutates profile.name directly", 0, "Spread creates a new object and the later name property supplies the replacement."],
    ["Which copy is shallow?", "Object spread", "A recursive deep clone by default", 0, "Spread copies the top level and keeps nested object references as they were."],
    ["Where should an updated property appear relative to the spread?", "After the spread so it overrides the old value", "Before the spread so the old value overrides it", 0, "Later properties with the same key replace earlier copied values."],
  ]),
  objectTopic("react-updating-nested-object", "Updating a Nested Object", "Copy each changed level in a nested structure before setting state.", [
    "Objects that look nested are connected through references. To update a field such as profile.address.city, create a new address object and then a new profile object that points to it.",
    "Copy each level between the state root and the changed field, carrying other properties forward with spread syntax. For deeply nested structures, consider a flatter state shape to simplify updates.",
  ], [
    "setProfile(current => ({ ...current, address: { ...current.address, city: 'Surat' } }));",
    "const nextAddress = { ...profile.address, postalCode: '395001' };\nsetProfile({ ...profile, address: nextAddress });",
    "setProject(current => ({ ...current, owner: { ...current.owner, name: 'Dev' } }));",
  ], [
    ["How many levels should be copied for a nested field update?", "Every level from the state root through the changed object", "Only the deepest object, while mutating its parents", 0, "Each changed level needs a new object reference to preserve the prior structure."],
    ["Why copy profile when changing profile.address.city?", "The state root must point to the new address object", "React cannot store strings in nested objects", 0, "A new root object connects the updated nested object to the next state."],
    ["What can simplify very deep state updates?", "Flattening the state shape", "Adding more in-place mutations", 0, "A flatter structure can reduce the number of copies needed for an update."],
  ]),
  objectTopic("react-immer-object-updates", "Write Concise Update Logic with Immer", "Use Immer as an optional helper for producing immutable updates with nested data.", [
    "Immer is an optional library that lets update logic be written against a temporary draft. It records those draft edits and produces a new immutable result, while leaving the previous state untouched.",
    "This can make deeply nested updates shorter, but it adds a dependency and a specific update style. Plain object spreads remain a good choice for small structures; choose an approach that keeps ownership and immutability clear.",
  ], [
    "// Immer-style draft update: draft.address.city = 'Surat';",
    "// Typical hook API: updateProfile(draft => { draft.name = 'Asha'; });",
    "// Equivalent explicit update: setProfile(current => ({ ...current, name: 'Asha' }));",
  ], [
    ["What does Immer do with draft edits?", "Produces a new immutable state result", "Changes the previous state object directly", 0, "Immer tracks draft operations and returns a new result without overwriting prior state."],
    ["Is Immer required to update React object state?", "No, it is an optional helper", "Yes, React state setters require it", 0, "Object spread and other immutable techniques work without Immer."],
    ["What is one tradeoff of using Immer?", "It adds a dependency and a particular update pattern", "It removes the need for state setters", 0, "Immer can simplify updates but introduces another library and convention."],
  ]),
  objectTopic("react-object-state-recap", "Recap", "Review mutation, shallow copying, nested updates, and optional helper libraries.", [
    "Treat objects in state as read-only. Create a replacement object and pass it to the setter so React can render with the new value while earlier snapshots remain intact.",
    "Spread copies one level. For nested changes, copy each changed level, or consider flattening the data. Immer can reduce repetitive copying when the structure is deeply nested, but it is optional.",
  ], [
    "setUser(current => ({ ...current, displayName: 'Nia' }));",
    "setUser(current => ({ ...current, address: { ...current.address, city: 'Mysuru' } }));",
    "// For a deeply nested model, choose a clear immutable update strategy.",
  ], [
    ["What should happen to an object in state when a field changes?", "A replacement object should be created", "The old object should be edited in place", 0, "Replacing objects preserves prior render data and makes the update explicit."],
    ["What must a nested immutable update copy?", "Each changed object level along the path", "Only the deepest field's parent and mutate the rest", 0, "Copying each changed level connects the new data to a new state root."],
    ["Which statement about Immer is correct?", "It is optional and can simplify nested immutable updates", "It is required for every useState object", 0, "Immer is one optional tool among several immutable update approaches."],
  ]),
  objectTopic("react-object-state-challenges", "Challenges", "Fix state object bugs and choose a concise immutable update strategy.", [
    "Challenge 1: A score button changes player.score directly and the number does not reliably update. Replace the object through its setter and keep the other player fields. Challenge 2: Updating a last name unexpectedly removes the score; preserve all unchanged fields.",
    "Challenge 3: Change a nested project's owner name without mutating any object from the previous render. Try a spread-based update, then outline how an Immer draft could express the same change if the app already uses that library.",
  ], [
    "setPlayer(current => ({ ...current, score: current.score + 1 }));",
    "setPlayer(current => ({ ...current, lastName: event.target.value }));",
    "setProject(current => ({ ...current, owner: { ...current.owner, name: nextName } }));",
  ], [
    ["How should the score button increment a field in player state?", "Set a new player object using the previous object", "Use player.score++ without calling the setter", 0, "A setter with a copied object preserves the rest and requests a render."],
    ["Why might a last-name update accidentally remove score?", "The replacement object omitted unchanged fields", "Object spread always deletes numbers", 0, "A replacement must preserve properties that should remain in state."],
    ["How do you update owner.name immutably?", "Copy the project and its owner object", "Mutate owner.name on the existing project", 0, "Both the root and nested object need new references along the changed path."],
  ]),
]);
