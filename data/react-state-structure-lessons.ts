import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function structureTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Check whether this state shape keeps one clear source for each changing fact." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Store every calculated value again in separate state"] : [alternate, correct, "Store every calculated value again in separate state"],
      answer,
      explanation,
    })),
  };
}

export const stateStructureLessons = chapter("Learn React · Managing State · Choosing the State Structure", [
  structureTopic("react-choosing-state-structure", "Choosing the State Structure", "Arrange state so it stays synchronized, easy to update, and free from needless copies.", [
    "A good state shape makes a component easier to change. Decide whether values belong together, whether they can contradict each other, and whether some values can be calculated from information already available.",
    "Keep one source for each changing fact, prefer manageable nesting, and avoid copying the same object into multiple state variables. The aim is a state model that represents valid interface situations and can be updated without hidden side effects.",
  ], [
    "const [position, setPosition] = useState({ x: 0, y: 0 });",
    "const [status, setStatus] = useState('idle'); // idle | saving | saved",
    "const fullName = `${firstName} ${lastName}`; // calculated from its source fields",
  ], [
    ["What is one goal of a well-designed state structure?", "Make valid updates clear and prevent inconsistent copies", "Store every UI detail independently", 0, "A clear structure reduces synchronization mistakes."],
    ["When might two values belong in one state object?", "When they describe one related value and often change together", "Whenever two values have different types", 0, "Related fields can be grouped to keep a combined update coherent."],
    ["What is a useful alternative to deeply nested state?", "A flatter structure with stable IDs", "More duplicate nested objects", 0, "Flattening can make updates and lookup simpler."],
  ]),
  structureTopic("react-state-structure-principles", "Principles for Structuring State", "Use practical rules to decide how much data a component should store.", [
    "Group values that naturally change together, and use distinct state modes for situations that cannot happen at the same time. Calculate derived information instead of creating a second state copy.",
    "Keep selected records represented by IDs when the source list already contains the full objects. If nested updates become cumbersome, normalize the data into ID-based records or move short-lived UI details closer to the component that uses them.",
  ], [
    "const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });",
    "const [selectedId, setSelectedId] = useState('book-7');",
    "const selectedBook = books.find(book => book.id === selectedId);",
  ], [
    ["Which pair of values is a strong candidate for grouping?", "Coordinates that are updated together", "Two unrelated settings with independent updates", 0, "Values that change as one logical unit can share a state object."],
    ["What can replace storing a selected object that already exists in a list?", "Store its ID and look up the object", "Copy the whole object into another state variable", 0, "Storing an ID avoids duplicating the object's data."],
    ["What can simplify cumbersome nested updates?", "A flatter or normalized data shape", "More levels of nesting", 0, "Flat records can reduce copying and traversal work."],
  ]),
  structureTopic("react-group-related-state", "Group Related State", "Decide between separate variables and one object based on how values change.", [
    "Separate state variables are useful when values have independent meanings and update at different times. A single object can fit better when fields describe one combined value or always need to be updated together.",
    "When updating an object, preserve fields that should remain by copying the previous object. A partial replacement such as { x: 10 } removes any omitted fields, so choose a state update that preserves the whole intended shape.",
  ], [
    "const [position, setPosition] = useState({ x: 0, y: 0 });\nsetPosition({ x: nextX, y: nextY });",
    "const [soundOn, setSoundOn] = useState(true);\nconst [page, setPage] = useState(1);",
    "setPosition(current => ({ ...current, x: 10 })); // retain y",
  ], [
    ["When is one object state often convenient?", "When multiple fields form one value and update together", "When values should never be related", 0, "Grouping related fields helps keep a coherent update together."],
    ["What happens with setPosition({ x: 10 }) if position also had y?", "The new object has no y field", "React automatically carries y forward", 0, "A replacement object contains only the fields explicitly included."],
    ["When can separate state variables be clearer?", "When their values have independent meanings and updates", "When every update must change them together", 0, "Independent values can be managed separately without synchronization."],
  ]),
  structureTopic("react-avoid-state-contradictions", "Avoid Contradictions in State", "Represent mutually exclusive modes so the state cannot describe impossible combinations.", [
    "Several independent booleans can accidentally describe states the interface should never show, such as both sending and sent. Every extra combination makes it harder to reason about which screen the component should render.",
    "Use one status value for mutually exclusive phases, then derive readable booleans from it when useful. This constrains the state to valid modes and makes transitions easier to review.",
  ], [
    "const [status, setStatus] = useState('editing'); // editing | sending | sent",
    "const isSending = status === 'sending';\nconst isSent = status === 'sent';",
    "setStatus('sending');\nawait sendFeedback();\nsetStatus('sent');",
  ], [
    ["Why can separate isSending and isSent flags be risky?", "Both might accidentally become true at once", "Booleans cannot be stored by React", 0, "Independent flags allow combinations that may not represent a valid screen."],
    ["What can represent exclusive workflow phases?", "A single status value", "A separate boolean for every possible pair of phases", 0, "One status constrains the component to one mode at a time."],
    ["What are isSending and isSent when calculated from status?", "Derived constants, not additional state", "Two independent sources of truth", 0, "They are calculated views of the single status value."],
  ]),
  structureTopic("react-avoid-redundant-state", "Avoid Redundant State", "Calculate values from their source instead of storing a synchronized copy.", [
    "If a value can be derived from props or current state, compute it during rendering. Storing it separately means every handler that changes the source must also remember to update the duplicate.",
    "Derived values are recalculated after a render, so they naturally reflect the latest inputs. Keep state for information that cannot be reconstructed from other current values, such as a user's draft or the result of an interaction.",
  ], [
    "const fullName = `${firstName} ${lastName}`;",
    "const hasItems = cart.length > 0;",
    "const canSubmit = query.trim().length > 0 && status !== 'saving';",
  ], [
    ["Should a full name be stored separately if it is always first plus last?", "No, calculate it from the two names", "Yes, keep a third state value in sync", 0, "The full name is derived and can be recalculated during rendering."],
    ["What is a benefit of deriving hasItems from cart.length?", "It cannot drift away from the cart data", "It makes the cart immutable automatically", 0, "The derived value always reflects the current cart."],
    ["Which value is more likely to need state?", "An editable draft that changes with user input", "A label calculated from two existing fields", 0, "A draft is changing input that cannot be inferred from other state."],
  ]),
  structureTopic("react-avoid-duplication-state", "Avoid Duplication in State", "Store a reference to existing data instead of keeping duplicate copies of that data.", [
    "If a selected item object is already present in a list, storing both the list and a second copy of the object creates two versions of the same information. Editing one copy can leave the other stale.",
    "Store the selected item's ID, then find the current object in the source list during rendering. When the list updates, the selected view automatically uses the latest object data.",
  ], [
    "const [selectedId, setSelectedId] = useState(items[0]?.id);",
    "const selectedItem = items.find(item => item.id === selectedId);",
    "setItems(current => current.map(item => item.id === changed.id ? changed : item));\n// selectedItem is read again from the updated list.",
  ], [
    ["What is a risk of storing both items and a selectedItem copy?", "They can become inconsistent after an item changes", "React forbids objects in state", 0, "Duplicated data must be manually synchronized."],
    ["What is a compact way to represent selection?", "Store the selected item's ID", "Store another complete copy of the selected object", 0, "An ID points to the current object in the source collection."],
    ["How can the current selected object be obtained?", "Find it in the current items array using its ID", "Read it from an old duplicated object", 0, "Looking it up returns the latest version from the source data."],
  ]),
  structureTopic("react-avoid-deeply-nested-state", "Avoid Deeply Nested State", "Reduce update complexity by flattening deeply hierarchical data when practical.", [
    "When a deeply nested record changes, immutable updates require copies along the path from the changed field to the state root. Removing a deeply nested entry can involve rebuilding several parent objects.",
    "A normalized structure can store records in a table keyed by ID and keep child ID lists. Then a change updates a record and its immediate parent rather than copying an entire hierarchy. Keep nesting when it naturally fits and remains easy to update.",
  ], [
    "const placesById = { 1: { id: 1, title: 'Earth', childIds: [2] }, 2: { id: 2, title: 'Oceania', childIds: [] } };",
    "const nextParent = { ...placesById[parentId], childIds: placesById[parentId].childIds.filter(id => id !== childId) };",
    "setPlacesById(current => ({ ...current, [parentId]: nextParent }));",
  ], [
    ["Why can deep nesting make state updates difficult?", "Many ancestor objects may need copying", "Nested objects cannot be rendered", 0, "Immutable updates copy each level from the change to the state root."],
    ["How can normalized records be organized?", "By ID, with parent records storing child IDs", "As duplicated full subtrees in every parent", 0, "ID-based records avoid repeatedly embedding complete copies of children."],
    ["Does every nested structure need to be flattened?", "No, flatten it when updates or lookup become cumbersome", "Yes, nesting is never allowed", 0, "Choose a shape based on how naturally it can be read and updated."],
  ]),
  structureTopic("react-state-structure-recap", "Recap", "Review grouping, deriving, identifying, and flattening state data.", [
    "Group values that move together, use a single mode for exclusive states, and calculate values that can be derived. Store IDs rather than copies of objects already present in a collection.",
    "If nested updates become hard to maintain, consider a normalized shape. The best structure is the simplest one that keeps valid UI states easy to represent and update.",
  ], [
    "const fullName = `${first} ${last}`; // derive",
    "const selected = items.find(item => item.id === selectedId); // reference by ID",
    "const [status, setStatus] = useState('editing'); // one exclusive mode",
  ], [
    ["What should happen to information that can be calculated from current state?", "Derive it during rendering", "Store another synchronized copy", 0, "Deriving avoids redundant state and synchronization work."],
    ["How can selected data avoid duplication?", "Keep its ID and look up the object", "Store another object copy", 0, "The ID refers to the current item in its source collection."],
    ["What should guide state structure decisions?", "How simply valid data can be updated and represented", "How many nested levels can be created", 0, "A useful shape keeps updates and valid UI states understandable."],
  ]),
  structureTopic("react-state-structure-challenges", "Challenges", "Refactor contradictory, duplicated, and deeply nested state examples.", [
    "Challenge 1: A form uses isSending and isSent flags that can both be true. Replace them with one status. Challenge 2: A name form stores firstName, lastName, and fullName; remove the redundant copy.",
    "Challenge 3: A menu stores both a list of editable items and a selected item object. Store its ID and derive the item. Challenge 4: A deeply nested tree is hard to update; sketch a normalized ID map and child ID lists.",
  ], [
    "const [status, setStatus] = useState('editing');\nconst isSending = status === 'sending';",
    "const fullName = `${firstName} ${lastName}`;",
    "const selectedItem = items.find(item => item.id === selectedId);",
  ], [
    ["How can mutually exclusive sending and sent modes be modeled?", "One status variable with valid values", "Two flags that can change independently", 0, "A status value prevents contradictory combinations."],
    ["How should a derived full name be handled?", "Calculate it from first and last name", "Store a third state copy", 0, "It is redundant when both source fields are already available."],
    ["What can make deep tree updates easier?", "Normalize records and reference children by ID", "Duplicate the entire tree in several state variables", 0, "A normalized shape reduces the number of nested copies needed."],
  ]),
]);
