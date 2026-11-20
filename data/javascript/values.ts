import { javascriptChapter } from "./chapter";

export const values = javascriptChapter("JS Tutorial", [
  {
    id: "strings", title: "Strings, templates and Unicode", level: "Beginner",
    summary: "Build, search and edit text while keeping the original string intact.",
    content: [
      "Strings are immutable. A transformation returns a new string that you can bind to a name. Template literals place an expression inside a longer piece of text.",
      "String length counts UTF-16 code units. Iteration walks Unicode code points. A displayed character can contain several code points, so use segmentation when working with user-perceived characters.",
    ],
    samples: [
      {
        title: "Build a ticket label", code: "const row = \"C\";\nconsole.log(`Seat ${row}-${2 + 3}`);",
        question: "What is the seat label?", options: ["Seat C-2 + 3","Seat C-5","Seat row-5"], answer: 1,
        explanation: "The template evaluates the arithmetic expression before inserting its text.",
      },
      {
        title: "Trim a field", code: "console.log(\"  ink  \".trim().toUpperCase());",
        question: "What text remains after both transformations?", options: ["ink","Ink","INK"], answer: 2,
        explanation: "trim removes outer whitespace and toUpperCase returns a new string.",
      },
      {
        title: "Extract a code", code: "console.log(\"PASS-804\".slice(-3));",
        question: "What do the final three characters contain?", options: ["804","PASS","-80"], answer: 0,
        explanation: "A negative start counts backwards from the end.",
      },
      {
        title: "Check a prefix", code: "console.log(\"room-12\".startsWith(\"ROOM\"));",
        question: "Does lowercase room start with uppercase ROOM?", options: ["true","false","12"], answer: 1,
        explanation: "Prefix matching is case-sensitive.",
      },
      {
        title: "Replace repeated separators", code: "console.log(\"a_b_c\".replaceAll(\"_\", \"-\"));",
        question: "Which string contains all replacements?", options: ["a-b_c","a_b-c","a-b-c"], answer: 2,
        explanation: "replaceAll substitutes every matching underscore.",
      },
      {
        title: "Count code points", code: "const mark = \"A🎨\";\nconsole.log(`${mark.length}/${[...mark].length}`);",
        question: "What pair reports code units and code points?", options: ["3/2","2/2","3/3"], answer: 0,
        explanation: "The emoji takes two code units and one code point.",
      },
    ],
  },
  {
    id: "numbers", title: "Numbers, Math, BigInt and bitwise flags", level: "Beginner",
    summary: "Use the right numeric operation for quantities, prices and flags.",
    content: [
      "Number uses binary floating point. Handle currency in integer minor units when the required precision is known. Check whether a value is finite and whether an integer is within Number's safe range.",
      "BigInt represents whole numbers beyond the safe integer range. Its arithmetic operands must also be BigInts. Number bitwise operators use 32-bit integers and can encode small sets of flags.",
    ],
    samples: [
      {
        title: "Work in paise", code: "const totalPaise = 1050 + 2575;\nconsole.log((totalPaise / 100).toFixed(2));",
        question: "What amount is displayed?", options: ["36.20","36.25","3625.00"], answer: 1,
        explanation: "Adding integer minor units gives 3625 paise before formatting.",
      },
      {
        title: "Round a carton count", code: "console.log(Math.ceil(23 / 6));",
        question: "How many cartons hold 23 items at six per carton?", options: ["3","3.83","4"], answer: 2,
        explanation: "A partially filled carton still requires a whole carton.",
      },
      {
        title: "Check a bound", code: "console.log(Math.min(8, Math.max(1, 12)));",
        question: "What capped value is returned?", options: ["8","12","1"], answer: 0,
        explanation: "The inner maximum enforces a floor and the outer minimum caps at eight.",
      },
      {
        title: "Detect an invalid quotient", code: "console.log(Number.isFinite(5 / 0));",
        question: "Is five divided by zero finite?", options: ["true","false","NaN"], answer: 1,
        explanation: "Positive Infinity is not finite.",
      },
      {
        title: "Increment a large integer", code: "const id = 9007199254740992n;\nconsole.log(String(id + 1n));",
        question: "Which identifier follows the starting id?", options: ["9007199254740992","9007199254740994","9007199254740993"], answer: 2,
        explanation: "BigInt preserves this consecutive integer exactly.",
      },
      {
        title: "Read a binary flag", code: "const read = 1, print = 2;\nconst flags = read | print;\nconsole.log((flags & print) !== 0);",
        question: "Is the print bit set?", options: ["true","false","undefined"], answer: 0,
        explanation: "OR combines flags and AND tests the print bit.",
      },
    ],
  },
  {
    id: "arrays", title: "Arrays, indexing and mutation", level: "Beginner",
    summary: "Store ordered values and see which operations change the original list.",
    content: [
      "Arrays start at index zero. An absent index reads as undefined. A shallow copy makes a new outer array but still refers to the same nested objects.",
      "Use push and pop for the end, shift and unshift for the front, slice for a copy and splice for an in-place edit. Inspect both the return value and the source after an operation.",
    ],
    samples: [
      {
        title: "Read the last entry", code: "const rooms = [\"West\", \"Loft\", \"Court\"];\nconsole.log(rooms.at(-1));",
        question: "Which room is last?", options: ["Court","West","undefined"], answer: 0,
        explanation: "at(-1) reads the element one position from the end.",
      },
      {
        title: "Append an entry", code: "const inks = [\"red\"];\nconsole.log(inks.push(\"blue\"));",
        question: "What is returned by push?", options: ["blue","2","red,blue"], answer: 1,
        explanation: "push appends an item and returns the new length.",
      },
      {
        title: "Take from the front", code: "const queue = [\"Mira\", \"Dev\"];\nconsole.log(queue.shift());",
        question: "Who leaves the queue?", options: ["Dev","1","Mira"], answer: 2,
        explanation: "shift removes and returns the first item.",
      },
      {
        title: "Copy a range", code: "const names = [\"A\", \"B\", \"C\", \"D\"];\nconsole.log(names.slice(1, 3).join(\"\"));",
        question: "Which letters appear?", options: ["BC","BCD","AB"], answer: 0,
        explanation: "slice includes the start index but excludes the end.",
      },
      {
        title: "Replace in place", code: "const tools = [\"pen\", \"brush\", \"ink\"];\ntools.splice(1, 1, \"chalk\");\nconsole.log(tools.join(\"/\"));",
        question: "Which list remains?", options: ["pen/brush/chalk","pen/chalk/ink","chalk/brush/ink"], answer: 1,
        explanation: "splice replaces the one item at index one.",
      },
      {
        title: "Sort by numeric value", code: "const counts = [20, 3, 11];\nconsole.log([...counts].sort((a, b) => a - b).join(','));",
        question: "Which order does this comparator produce?", options: ["11,20,3","20,11,3","3,11,20"], answer: 2,
        explanation: "The comparator sorts by numeric difference. Spread protects the original outer array.",
      },
    ],
  },
  {
    id: "objects", title: "Objects, properties and destructuring", level: "Beginner",
    summary: "Use named fields to describe one record.",
    content: [
      "An object maps property keys to values. Dot notation works for a known identifier; bracket notation evaluates an expression to find the key. A missing field normally reads as undefined.",
      "Destructuring extracts fields, optionally under new names. Spread creates a shallow copy. Optional chaining lets a read stop when the intermediate value is null or undefined.",
    ],
    samples: [
      {
        title: "Read a dynamic key", code: "const card = { room: \"Loft\" };\nconst field = \"room\";\nconsole.log(card[field]);",
        question: "Which value is read through brackets?", options: ["room","Loft","undefined"], answer: 1,
        explanation: "Brackets evaluate field to the key room.",
      },
      {
        title: "Use property shorthand", code: "const stock = 8;\nconst record = { stock };\nconsole.log(record.stock);",
        question: "What is stored under stock?", options: ["stock","undefined","8"], answer: 2,
        explanation: "The binding supplies both the property name and its value.",
      },
      {
        title: "Rename a field", code: "const { name: label } = { name: \"Ochre\" };\nconsole.log(label);",
        question: "Which value is assigned to label?", options: ["Ochre","name","label"], answer: 0,
        explanation: "The name field is bound locally as label.",
      },
      {
        title: "Supply a missing value", code: "const { size = \"A5\" } = {};\nconsole.log(size);",
        question: "Which size is selected?", options: ["undefined","A5","null"], answer: 1,
        explanation: "The missing size is undefined and activates the default.",
      },
      {
        title: "Update a copy", code: "const old = { count: 3 };\nconst next = { ...old, count: 4 };\nconsole.log(`${old.count}/${next.count}`);",
        question: "Which pair shows original and copied counts?", options: ["4/4","3/3","3/4"], answer: 2,
        explanation: "The later property wins in the new object; the old count stays three.",
      },
      {
        title: "Read an optional branch", code: "const visit = {};\nconsole.log(visit.guest?.name ?? \"walk-in\");",
        question: "What label appears when guest is absent?", options: ["walk-in","TypeError","null"], answer: 0,
        explanation: "Optional chaining returns undefined and the fallback supplies the label.",
      },
    ],
  },
  {
    id: "array-methods", title: "Array search, map, filter and reduce", level: "Intermediate",
    summary: "Choose an array operation from the shape of the result you need.",
    content: [
      "Map returns one output per input, filter selects a subset and reduce combines values into an accumulator. Use an initial accumulator to define what reducing an empty list means.",
      "Find returns the first matching value. Some and every answer yes/no questions and can stop early. Avoid mutating the source array as a side effect of these callbacks.",
    ],
    samples: [
      {
        title: "Transform every price", code: "console.log([2, 4, 6].map(n => n * 10).join(','));",
        question: "What list follows from multiplying each item by ten?", options: ["2,4,6","20,40,60","12"], answer: 1,
        explanation: "Each input quantity is transformed once.",
      },
      {
        title: "Select qualifying counts", code: "console.log([2, 7, 4, 9].filter(n => n > 4).join(','));",
        question: "Which pair passes the filter?", options: ["7,4,9","2,4","7,9"], answer: 2,
        explanation: "Only values strictly greater than four are retained.",
      },
      {
        title: "Get the first match", code: "console.log([3, 8, 12].find(n => n % 2 === 0));",
        question: "Which value does find return?", options: ["8","12","1"], answer: 0,
        explanation: "find returns the first even value and stops.",
      },
      {
        title: "Accumulate a total", code: "console.log([4, 5, 6].reduce((total, n) => total + n, 10));",
        question: "What is the final accumulator?", options: ["15","25","10"], answer: 1,
        explanation: "The accumulator starts at ten and adds fifteen.",
      },
      {
        title: "Check completeness", code: "console.log([2, 0, 4].every(n => n > 0));",
        question: "Does every value exceed zero?", options: ["true","0","false"], answer: 2,
        explanation: "The zero makes the universal condition fail.",
      },
      {
        title: "Expand and flatten once", code: "console.log([\"a,b\", \"c\"].flatMap(s => s.split(\",\")).join(\":\"));",
        question: "What is the joined flat result?", options: ["a:b:c","a,b:c","a:b,c"], answer: 0,
        explanation: "flatMap flattens one layer of arrays returned by its callback.",
      },
    ],
  },
  {
    id: "collections", title: "Map, Set and object enumeration", level: "Intermediate",
    summary: "Choose a collection for unique values, keyed lookups or ordinary records.",
    content: [
      "Set remembers each distinct value in insertion order. Map accepts keys of any type and distinguishes an inserted key with an undefined value from an absent key through has().",
      "Object.keys, values and entries enumerate own enumerable string keys. Object.fromEntries builds a record from key-value pairs. Use a Map when object identities are meaningful keys.",
    ],
    samples: [
      {
        title: "Deduplicate attendance", code: "console.log([...new Set([\"Jo\", \"Li\", \"Jo\"])].join(\"/\"));",
        question: "Which names survive deduplication?", options: ["Jo/Li/Jo","Li/Jo","Jo/Li"], answer: 2,
        explanation: "The second Jo is already present, so the original insertion order remains.",
      },
      {
        title: "Count unique values", code: "const ids = new Set([2, 2, 7]);\nids.delete(2);\nconsole.log(ids.size);",
        question: "How many unique ids remain?", options: ["1","2","0"], answer: 0,
        explanation: "Only seven remains after deletion.",
      },
      {
        title: "Use an object as a key", code: "const room = {};\nconst slots = new Map([[room, 4]]);\nconsole.log(slots.get(room));",
        question: "What does the lookup with room return?", options: ["undefined","4","room"], answer: 1,
        explanation: "The identical object reference retrieves its mapped value.",
      },
      {
        title: "Distinguish absence", code: "const notes = new Map([[\"draft\", undefined]]);\nconsole.log(notes.has(\"draft\"));",
        question: "Is draft present as a key?", options: ["false","undefined","true"], answer: 2,
        explanation: "has checks key membership independently of the stored value.",
      },
      {
        title: "Enumerate values", code: "console.log(Object.values({ small: 3, large: 5 }).reduce((a,b) => a+b, 0));",
        question: "What is the sum of stock values?", options: ["8","2","35"], answer: 0,
        explanation: "values returns the two numeric counts, which reduce adds.",
      },
      {
        title: "Rebuild a record", code: "const item = Object.fromEntries([[\"name\", \"Pine\"], [\"stock\", 4]]);\nconsole.log(item.name);",
        question: "Which text is stored under name?", options: ["stock","Pine","undefined"], answer: 1,
        explanation: "fromEntries turns each pair into a named property.",
      },
    ],
  },
]);
