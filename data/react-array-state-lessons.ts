import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function arrayTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Beginner" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Follow how the operation returns a new array and leaves the previous state value unchanged." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "React always copies mutated state automatically"] : [alternate, correct, "React always copies mutated state automatically"],
      answer,
      explanation,
    })),
  };
}

export const arrayStateLessons = chapter("Learn React · Adding Interactivity · Updating Arrays in State", [
  arrayTopic("react-updating-arrays-in-state", "Updating Arrays in State", "Create new arrays when adding, removing, or changing items in React state.", [
    "JavaScript arrays can be changed in place, but arrays held in React state should be treated as read-only. When a list changes, create a new array and pass it to the state setter.",
    "Methods such as map and filter return new arrays. Spread syntax can copy or combine arrays. Methods such as push, pop, splice, reverse, and sort mutate their target, so use an independent copy before calling them when needed.",
  ], [
    "setTasks(current => [...current, newTask]);",
    "setTasks(current => current.filter(task => task.id !== removedId));",
    "const nextTasks = [...tasks];\nnextTasks.reverse();\nsetTasks(nextTasks);",
  ], [
    ["What should you pass to a state setter when a list changes?", "A new array with the desired contents", "The old array after changing it in place", 0, "A new array gives React a clear next state value and preserves the prior one."],
    ["Which method returns a new array containing matching items?", "filter", "pop", 0, "filter creates an array from the items that pass its condition."],
    ["How can reverse be used safely with array state?", "Copy the array first and reverse the copy", "Reverse the state array directly", 0, "reverse mutates its target, so use it on an independent copy."],
  ]),
  arrayTopic("react-arrays-without-mutation", "Updating Arrays Without Mutation", "Choose array operations that preserve the previous state array.", [
    "A state array can be shared with other values from earlier renders. Editing an index or using a mutating method can change that shared array without asking React to render.",
    "Prefer operations that return a fresh array: spread or concat for additions, filter for removal, and map for transformations or replacements. slice returns a copy of a range; splice changes the original array, so their similar names should not be confused.",
  ], [
    "const next = [...items, newItem]; // new array",
    "const remaining = items.filter(item => item.id !== targetId);",
    "const middle = items.slice(1, 3); // copy a range; original stays unchanged",
  ], [
    ["Which operation changes its original array?", "splice", "slice", 0, "splice edits the array, while slice returns a portion in a new array."],
    ["Why avoid direct assignment such as items[0] = nextItem?", "It mutates the state array", "It always creates a new array", 0, "Index assignment edits the existing array rather than returning a replacement."],
    ["Which method is a common immutable way to remove items?", "filter", "shift", 0, "filter returns a new array with the selected entries omitted."],
  ]),
  arrayTopic("react-add-to-array", "Adding to an Array", "Append or prepend an item by combining it with a copied array.", [
    "To add an item at the end, spread the current items into a new array and place the new item after them. To place it at the beginning, put the new item before the spread.",
    "If the new array depends on current state and updates may queue, use an updater function. This ensures the addition is based on the latest pending array value.",
  ], [
    "setNames(current => [...current, newName]);",
    "setNotifications(current => [newNotification, ...current]);",
    "setCart(current => current.concat(product));",
  ], [
    ["How does [...items, newItem] arrange the new value?", "At the end of a new array", "At the start of the original array", 0, "The spread copies existing items first and then adds the new item."],
    ["How can an item be prepended without mutation?", "[newItem, ...items]", "items.unshift(newItem)", 0, "A new array places the item before the copied existing items."],
    ["Why use an updater when appending based on state?", "It receives the latest queued array", "It mutates the current array automatically", 0, "The updater calculates from the pending state value."],
  ]),
  arrayTopic("react-remove-from-array", "Removing from an Array", "Filter out entries to create a new array without the removed item.", [
    "filter checks each element and returns a new array containing only those that meet a condition. To remove a record, keep the items whose stable IDs do not match the target.",
    "This approach leaves the source array unchanged and works well with a delete button. For positional removal, combine slices around the index when identity is not available.",
  ], [
    "setBooks(current => current.filter(book => book.id !== bookId));",
    "setTags(current => current.filter(tag => tag !== tagToRemove));",
    "const next = [...items.slice(0, index), ...items.slice(index + 1)];\nsetItems(next);",
  ], [
    ["What does filter return?", "A new array containing items that pass the condition", "The original array with matching items deleted", 0, "filter does not edit the original; it produces a new array."],
    ["Why is a stable ID useful when removing an item?", "It identifies the intended item even if list order changes", "It automatically changes the item text", 0, "IDs identify records independently of their current position."],
    ["Which operation removes an item immutably by its ID?", "Filter for entries with a different ID", "Call pop regardless of the item position", 0, "Filtering by ID creates a new list without the target record."],
  ]),
  arrayTopic("react-transform-array", "Transforming an Array", "Use map to calculate a new value for each item.", [
    "map calls a function for every array item and returns a new array containing each result. It is useful for transforming values while retaining the same number and order of entries.",
    "The callback can use an item's properties or its index to decide what to return. If an object changes, return a new object for that entry and preserve the other items unchanged.",
  ], [
    "const labels = names.map(name => name.toUpperCase());",
    "setShapes(current => current.map(shape => ({ ...shape, y: shape.y + 8 })));",
    "const totals = orders.map(order => order.price * order.quantity);",
  ], [
    ["What does map produce?", "A new array of callback results", "The original array with its entries edited", 0, "map builds a new array from the callback's result for each entry."],
    ["How can map update one field in each object immutably?", "Return a copied object with the changed field", "Assign to the field on the existing object", 0, "Returning a new object avoids mutating the current item."],
    ["When is map useful?", "When each item should be transformed into a corresponding value", "When you want to remove all matching items", 0, "map preserves one output position for each input item."],
  ]),
  arrayTopic("react-replace-array-items", "Replacing Items in an Array", "Return an updated item at the matching index while preserving other entries.", [
    "Avoid assigning directly to an array index in state. Use map to return a new array; for the target item return its replacement, and for other items return their existing values.",
    "A stable identifier is often clearer than a position because list items can move. Use whichever condition correctly identifies the entry the user intended to edit.",
  ], [
    "setCounters(current => current.map((count, i) => i === target ? count + 1 : count));",
    "setTasks(current => current.map(task => task.id === edited.id ? edited : task));",
    "setProducts(current => current.map(product => product.id === id ? { ...product, price: nextPrice } : product));",
  ], [
    ["How does map replace one array entry immutably?", "Return a replacement for the matching entry and the others unchanged", "Assign to the existing array index", 0, "map creates a new array and lets the callback select the replacement."],
    ["What can identify a record to replace?", "A stable ID or a known index", "A CSS color", 0, "The callback needs a condition that identifies the intended entry."],
    ["What should be returned for unaffected entries?", "Their existing value", "An undefined value for every other item", 0, "Unchanged entries can be returned as they are."],
  ]),
  arrayTopic("react-insert-into-array", "Inserting into an Array", "Combine slices and spread syntax to insert a value at a chosen position.", [
    "To insert at an index, take a copy of the items before that position, add the new item, and then include the remaining items. slice returns each range without changing the original array.",
    "Check that the insertion index is within the intended range. This method preserves the order of the existing entries and returns a new array for state.",
  ], [
    "const next = [...items.slice(0, index), newItem, ...items.slice(index)];",
    "setSteps(current => [...current.slice(0, 2), newStep, ...current.slice(2)]);",
    "function insertAt(items, index, item) {\n  return [...items.slice(0, index), item, ...items.slice(index)];\n}",
  ], [
    ["Which part comes first when inserting at index i?", "The slice before i", "The slice after i", 0, "Items before the insertion point are copied first."],
    ["Does slice change the source array?", "No, it returns a copy of the chosen range", "Yes, it deletes the selected range", 0, "slice returns a new array and leaves the source unchanged."],
    ["Where is the new item placed in the spread expression?", "Between the before and after slices", "After every existing item regardless of index", 0, "Putting the item between the slices inserts it at the requested position."],
  ]),
  arrayTopic("react-other-array-changes", "Making Other Changes to an Array", "Sort or reverse a copy when using methods that mutate their target.", [
    "Some array operations, including sort and reverse, modify the array they are called on. If you need their result for state, first make a shallow copy and perform the operation on that copy.",
    "A shallow copy duplicates the array container but keeps references to the same objects inside it. Do not mutate those items; create replacement objects for any entries that need changes.",
  ], [
    "const newestFirst = [...items].reverse();",
    "const sortedNames = [...names].sort((a, b) => a.localeCompare(b));",
    "const next = [...records];\nnext[0] = { ...next[0], active: true };\nsetRecords(next);",
  ], [
    ["Why copy before calling reverse on state data?", "reverse mutates the array it receives", "reverse only works on copied arrays", 0, "Copying protects the original state array from reverse's in-place change."],
    ["What does a shallow array copy share with the source?", "References to object items", "The same array container", 0, "The outer arrays differ, but object entries remain shared unless copied too."],
    ["How can an item in a copied array be changed safely?", "Replace it with a new object", "Mutate the shared object directly", 0, "A copied item prevents changing the object still referenced by previous state."],
  ]),
  arrayTopic("react-objects-inside-arrays", "Updating Objects Inside Arrays", "Copy both the array and any object whose fields need to change.", [
    "An array of objects contains references to those objects. Copying just the array does not create new copies of each item, so changing an object's property can still mutate data from the previous state or another list.",
    "Use map to locate the item and return a new object with the changed field. Return other objects unchanged. This creates a new array and a new object only for the item that changed.",
  ], [
    "setTodos(current => current.map(todo => todo.id === id ? { ...todo, done: true } : todo));",
    "setCart(current => current.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));",
    "setChoices(current => current.map(choice => choice.id === id ? { ...choice, selected: nextSelected } : choice));",
  ], [
    ["Does [...items] copy the objects inside the array?", "No, it copies only the outer array", "Yes, it deeply copies every item", 0, "Array spread is shallow and keeps the item references."],
    ["How should one object's field be updated in an array?", "Use map and return a copied object for that entry", "Mutate the object after copying only the array", 0, "The changed item needs a new object reference as well as a new array."],
    ["What should map return for entries that do not match the target?", "The existing item unchanged", "A mutated copy of every item", 0, "Unchanged entries can safely retain their existing references."],
  ]),
  arrayTopic("react-immer-array-updates", "Write Concise Update Logic with Immer", "Use Immer as an optional helper for concise immutable array and object updates.", [
    "Immer can provide a draft of state that update logic edits. It uses those edits to build a new immutable result, so the original state is not changed even though the draft syntax looks mutable.",
    "With an Immer-based Hook, operations such as push on the draft can be convenient. Immer is optional; spread, map, and filter work well for many updates, and deeply nested data may benefit from a flatter structure.",
  ], [
    "updateTodos(draft => { draft.push(newTodo); });",
    "updateCart(draft => {\n  const item = draft.find(entry => entry.id === id);\n  item.quantity += 1;\n});",
    "// Without Immer: setTodos(current => [...current, newTodo]);",
  ], [
    ["What is the draft in an Immer update?", "A temporary value whose edits become a new immutable result", "The previous state object to mutate permanently", 0, "Immer uses draft changes to create a next state without changing the original."],
    ["Is Immer required for array state?", "No, it is an optional library", "Yes, React arrays cannot be updated otherwise", 0, "Native immutable operations such as spread, map, and filter are sufficient."],
    ["What may help when state updates require many nested copies?", "Flattening the data or choosing an immutable helper", "Mutating old state to shorten the code", 0, "A clearer state shape or helper can reduce repetitive update logic safely."],
  ]),
  arrayTopic("react-array-state-recap", "Recap", "Review immutable array patterns for adding, removing, and changing entries.", [
    "When array state changes, create a new array and pass it to the setter. Use spread or concat to add, filter to remove, and map to transform or replace entries.",
    "Copy an array before sort or reverse. Remember that array copies are shallow: copy any item object whose fields change. Immer is an optional way to write concise update logic.",
  ], [
    "setItems(current => [...current, newItem]);",
    "setItems(current => current.filter(item => item.id !== deletedId));",
    "setItems(current => current.map(item => item.id === updated.id ? { ...item, ...updated } : item));",
  ], [
    ["Which pattern adds an item immutably?", "[...current, item]", "current.push(item)", 0, "Spread returns a new array containing the old entries and the new item."],
    ["Which method is useful for removing entries by condition?", "filter", "reverse", 0, "filter creates a new array containing entries that pass the test."],
    ["What needs copying when changing an object inside an array?", "The array and the changed object", "Only the array container", 0, "Both the container and changed item need new references."],
  ]),
  arrayTopic("react-array-state-challenges", "Challenges", "Practice updating a shopping cart and fixing array mutation bugs.", [
    "Challenge 1: Increase a selected cart item's quantity without changing other entries. Challenge 2: Remove a chosen product by ID. Challenge 3: Fix a list where reversing or editing one copied array unexpectedly changes another view.",
    "For each task, return a new array. When an object's field changes, return a new object for that item. When sorting or reversing, operate on a copied array and keep stable IDs for rendered items.",
  ], [
    "setProducts(current => current.map(product => product.id === id ? { ...product, count: product.count + 1 } : product));",
    "setProducts(current => current.filter(product => product.id !== id));",
    "const reversed = [...products].reverse();\nsetProducts(reversed);",
  ], [
    ["How should a cart quantity be increased for one product?", "Map to a new array and copy the matching product", "Increment product.count directly", 0, "The new array and changed object preserve the previous state."],
    ["How can a product be removed by ID?", "Filter for products with a different ID", "Pop the last product regardless of ID", 0, "Filtering removes the intended item without mutating the source array."],
    ["Why can changing a copied array's object still affect another list?", "The shallow copy shares object references", "Every copy automatically deep clones entries", 0, "A shallow array copy retains the original object references."],
  ]),
]);
