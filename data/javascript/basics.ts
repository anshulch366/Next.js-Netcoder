import { javascriptChapter } from "./chapter";

export const basics = javascriptChapter("JS Tutorial", [
  {
    id: "variables", title: "First script, variables and constants", level: "Beginner",
    summary: "Give values names and inspect how they change.",
    content: [
      "Open a blank page, open developer tools and select Console. Run one example at a time. To save one, put its code between <script> and </script> in an HTML file and reload with the console open.",
      "A declaration introduces a binding. const requires an initial value and prevents reassignment. let allows reassignment. Names are case-sensitive. Comments explain code and are skipped by the engine.",
    ],
    samples: [
      {
        title: "Print a message", code: "// Open the workshop\nconsole.log(\"Doors open\");",
        question: "What does the first script print?", options: ["Doors open","console.log","Open the workshop"], answer: 0,
        explanation: "console.log writes the string to the developer console.",
      },
      {
        title: "Name a venue", code: "const venue = \"Dari\";\nconsole.log(venue);",
        question: "What does logging venue print?", options: ["venue","Dari","undefined"], answer: 1,
        explanation: "Reading the identifier retrieves its bound value.",
      },
      {
        title: "Update a count", code: "let seats = 3;\nseats += 2;\nconsole.log(seats);",
        question: "What does seats hold after += 2?", options: ["3","32","5"], answer: 2,
        explanation: "Compound assignment adds two and stores the result.",
      },
      {
        title: "Declare before assigning", code: "let artist;\nconsole.log(artist);",
        question: "What value does an unassigned let hold?", options: ["undefined","null","false"], answer: 0,
        explanation: "A let declaration without an initializer starts with undefined once evaluated.",
      },
      {
        title: "Distinguish letter case", code: "const ink = \"blue\";\nconst Ink = \"red\";\nconsole.log(ink);",
        question: "Which value belongs to lowercase ink?", options: ["red","blue","ReferenceError"], answer: 1,
        explanation: "The two spellings identify different bindings.",
      },
      {
        title: "Update a constant object's data", code: "const order = { copies: 2 };\norder.copies++;\nconsole.log(order.copies);",
        question: "What is the new copies value?", options: ["2","TypeError","3"], answer: 2,
        explanation: "The binding still points to the same object. Its property can change.",
      },
    ],
  },
  {
    id: "types", title: "Data types, conversion and equality", level: "Beginner",
    summary: "Predict how a value's type affects an operation.",
    content: [
      "The primitive types are string, number, bigint, boolean, undefined, symbol and null. Objects, including arrays and functions, have identity. typeof is useful but has historical exceptions such as typeof null.",
      "Convert user-entered strings explicitly before doing arithmetic. Strict equality compares without type coercion. A failing numeric conversion can yield NaN.",
    ],
    samples: [
      {
        title: "Inspect a numeric label", code: "console.log(typeof \"24\");",
        question: "What type does the quoted label report?", options: ["number","integer","string"], answer: 2,
        explanation: "Quotes make 24 text.",
      },
      {
        title: "Convert a field value", code: "console.log(Number(\"24\") + 1);",
        question: "What does the converted sum produce?", options: ["25","241","NaN"], answer: 0,
        explanation: "Number converts the numeric text before addition.",
      },
      {
        title: "Compare without coercion", code: "console.log(\"0\" === 0);",
        question: "What does strict equality return here?", options: ["true","false","undefined"], answer: 1,
        explanation: "A string and a number have different types.",
      },
      {
        title: "Recognise NaN", code: "console.log(Number.isNaN(Number(\"ink\")));",
        question: "Does converting ink yield NaN?", options: ["false","TypeError","true"], answer: 2,
        explanation: "Converting ink yields NaN, which is detected by Number.isNaN.",
      },
      {
        title: "Inspect null", code: "console.log(typeof null);",
        question: "Which string does typeof null produce?", options: ["object","null","undefined"], answer: 0,
        explanation: "typeof null reports object for historical reasons; null is a primitive.",
      },
      {
        title: "Test object identity", code: "const a = { id: 1 };\nconst b = { id: 1 };\nconsole.log(a === b);",
        question: "Are the two records strictly equal?", options: ["true","false","1"], answer: 1,
        explanation: "Two object literals create separate identities even when their fields match.",
      },
    ],
  },
  {
    id: "operators", title: "Arithmetic, comparisons and logical operators", level: "Beginner",
    summary: "Build expressions and reason about evaluation order.",
    content: [
      "Parentheses make evaluation order explicit. Multiplication binds more tightly than addition. Remainder can be used to distribute records into repeating slots.",
      "Logical operators can return operands. A nullish fallback applies only to null or undefined, whereas an OR fallback also replaces other falsy values such as zero.",
    ],
    samples: [
      {
        title: "Price a batch", code: "console.log(4 + 3 * 2);",
        question: "What is 4 + 3 * 2?", options: ["10","14","18"], answer: 0,
        explanation: "Multiplication happens before addition.",
      },
      {
        title: "Use a rotating slot", code: "console.log(14 % 4);",
        question: "Which slot index is 14 % 4?", options: ["3","2","4"], answer: 1,
        explanation: "Four fits three times into fourteen with two left over.",
      },
      {
        title: "Scale an area", code: "console.log(3 ** 2);",
        question: "What does 3 ** 2 evaluate to?", options: ["6","8","9"], answer: 2,
        explanation: "Exponentiation raises three to the second power.",
      },
      {
        title: "Check a range", code: "const age = 18;\nconsole.log(age >= 16 && age < 21);",
        question: "Does 18 satisfy both bounds?", options: ["true","false","18"], answer: 0,
        explanation: "Both comparisons are true at age 18.",
      },
      {
        title: "Keep a zero count", code: "const remaining = 0;\nconsole.log(remaining ?? 12);",
        question: "Which count does ?? preserve here?", options: ["12","0","null"], answer: 1,
        explanation: "Zero is a defined value, so the nullish fallback is skipped.",
      },
      {
        title: "Supply an OR fallback", code: "console.log(\"\" || \"untitled\");",
        question: "Which label is returned for an empty title?", options: ["false","undefined","untitled"], answer: 2,
        explanation: "An empty string is falsy, so OR returns its right operand.",
      },
    ],
  },
  {
    id: "conditions", title: "Conditions, switch and branching", level: "Beginner",
    summary: "Choose a path using the result of a test.",
    content: [
      "An if statement selects the first matching branch. Check a more specific threshold before a broader one if both can match. Braces keep each branch's extent clear.",
      "Use switch for discrete choices and break to leave the matching case. A conditional expression is convenient when choosing a single value. An early return can keep a function's normal path easy to follow.",
    ],
    samples: [
      {
        title: "Handle an empty shelf", code: "const stock = 0;\nif (stock === 0) console.log(\"empty\");\nelse console.log(\"ready\");",
        question: "Which status appears for zero stock?", options: ["ready","empty","0"], answer: 1,
        explanation: "The equality test chooses the first branch.",
      },
      {
        title: "Order thresholds", code: "const score = 85;\nif (score >= 80) console.log(\"distinction\");\nelse if (score >= 50) console.log(\"pass\");\nelse console.log(\"retry\");",
        question: "Which branch handles 85?", options: ["pass","retry","distinction"], answer: 2,
        explanation: "The first passing threshold ends the chain.",
      },
      {
        title: "Choose a delivery fee", code: "const distance = 3;\nconsole.log(distance <= 5 ? 0 : 40);",
        question: "What fee applies at distance 3?", options: ["0","40","true"], answer: 0,
        explanation: "The true branch of the conditional expression supplies zero.",
      },
      {
        title: "Match a case", code: "const kind = \"audio\";\nswitch (kind) {\n  case \"audio\": console.log(\"listen\"); break;\n  case \"video\": console.log(\"watch\"); break;\n  default: console.log(\"read\");\n}",
        question: "Which action is selected?", options: ["watch","listen","read"], answer: 1,
        explanation: "The audio case matches and break ends the switch.",
      },
      {
        title: "Share a branch", code: "const day = \"Sun\";\nswitch (day) {\n  case \"Sat\":\n  case \"Sun\": console.log(\"weekend\"); break;\n  default: console.log(\"weekday\");\n}",
        question: "Which group includes Sun?", options: ["weekday","undefined","weekend"], answer: 2,
        explanation: "Both weekend cases lead to the same statement.",
      },
      {
        title: "Return early", code: "function divide(total, people) {\n  if (people === 0) return \"no guests\";\n  return total / people;\n}\nconsole.log(divide(20, 0));",
        question: "Which result does the guard produce?", options: ["no guests","Infinity","20"], answer: 0,
        explanation: "The guard returns before division.",
      },
    ],
  },
  {
    id: "loops", title: "Loops, break and continue", level: "Beginner",
    summary: "Repeat work safely over a count, a collection or a changing condition.",
    content: [
      "A counted loop has an initializer, a condition and an update. Check the initial value and the final allowed iteration on paper before running it. A while loop needs some change that eventually makes its test false.",
      "Use for...of for iterable values. Use for...in for enumerable string property keys, including inherited ones. Continue skips the current iteration and break exits the loop.",
    ],
    samples: [
      {
        title: "Count iterations", code: "let count = 0;\nfor (let i = 0; i < 4; i++) count++;\nconsole.log(count);",
        question: "How many iterations run?", options: ["3","5","4"], answer: 2,
        explanation: "The counter advances for i equal to 0, 1, 2 and 3.",
      },
      {
        title: "Consume a queue", code: "const jobs = [1, 2, 3];\nwhile (jobs.length) jobs.pop();\nconsole.log(jobs.length);",
        question: "What is the final queue length?", options: ["0","1","3"], answer: 0,
        explanation: "Popping the last job makes the next condition false.",
      },
      {
        title: "Run the body once", code: "let runs = 0;\ndo { runs++; } while (false);\nconsole.log(runs);",
        question: "How often does this body run?", options: ["0","1","2"], answer: 1,
        explanation: "A do...while evaluates its condition after the body.",
      },
      {
        title: "Skip inactive entries", code: "let total = 0;\nfor (const n of [4, -1, 6]) {\n  if (n < 0) continue;\n  total += n;\n}\nconsole.log(total);",
        question: "Which sum includes only nonnegative entries?", options: ["9","4","10"], answer: 2,
        explanation: "Continue skips the negative entry without ending the loop.",
      },
      {
        title: "Stop on a marker", code: "let seen = 0;\nfor (const value of [\"a\", \"end\", \"b\"]) {\n  if (value === \"end\") break;\n  seen++;\n}\nconsole.log(seen);",
        question: "How many values are counted?", options: ["1","2","3"], answer: 0,
        explanation: "The sentinel ends the loop before b is visited.",
      },
      {
        title: "Collect property names", code: "const keys = [];\nfor (const key in { ink: 2, paper: 4 }) keys.push(key);\nconsole.log(keys.join(\", \"));",
        question: "Which pair is collected by for...in?", options: ["2, 4","ink, paper","0, 1"], answer: 1,
        explanation: "The loop visits the record's enumerable string keys.",
      },
    ],
  },
  {
    id: "functions", title: "Functions, parameters and return values", level: "Beginner",
    summary: "Separate a repeatable calculation from the code that calls it.",
    content: [
      "A function declaration introduces a callable value. Arguments are supplied by the caller and parameters name them inside the function. Return passes a value back and stops the current call.",
      "Use a default for an omitted or undefined argument. A rest parameter collects leftover arguments into an array. Functions can also be passed to other functions as callbacks.",
    ],
    samples: [
      {
        title: "Return a calculated amount", code: "function charge(count, rate) {\n  return count * rate;\n}\nconsole.log(charge(3, 8));",
        question: "What does charge(3, 8) return?", options: ["24","11","38"], answer: 0,
        explanation: "Each call binds its own count and rate.",
      },
      {
        title: "Use a default", code: "function greet(name = \"guest\") { return \"Hi \" + name; }\nconsole.log(greet());",
        question: "What greeting is returned with no argument?", options: ["Hi undefined","Hi guest","Hi null"], answer: 1,
        explanation: "An omitted argument activates the parameter default.",
      },
      {
        title: "Collect extra arguments", code: "function roster(first, ...others) { return others.length; }\nconsole.log(roster(\"A\", \"B\", \"C\"));",
        question: "How many values reach others?", options: ["3","1","2"], answer: 2,
        explanation: "The first argument is bound separately and two remain in the rest array.",
      },
      {
        title: "Write an arrow expression", code: "const double = n => n * 2;\nconsole.log(double(7));",
        question: "What does double(7) return?", options: ["14","7","undefined"], answer: 0,
        explanation: "An expression-body arrow implicitly returns its expression.",
      },
      {
        title: "Pass a callback", code: "function apply(value, transform) { return transform(value); }\nconsole.log(apply(6, n => n + 4));",
        question: "What value comes back from apply?", options: ["6","10","24"], answer: 1,
        explanation: "apply invokes the supplied callback with six.",
      },
      {
        title: "Recognise a missing return", code: "function calculate(n) { const result = n + 1; }\nconsole.log(calculate(4));",
        question: "What does a call return when it reaches the end without return?", options: ["5","null","undefined"], answer: 2,
        explanation: "A local calculation is not automatically returned by a block-bodied function.",
      },
    ],
  },
]);
