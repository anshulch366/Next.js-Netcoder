import { javascriptChapter } from "./chapter";

export const asyncBasics = javascriptChapter("JS Tutorial", [
  {
    id: "async-basics", title: "Callbacks, promises and async/await", level: "Intermediate",
    summary: "Follow a result that becomes available after a function returns.",
    content: [
      "A callback is a function passed for later or immediate use. A Promise represents eventual fulfilment or rejection. Returning a value from then feeds the next step; throwing moves control to a rejection handler.",
      "An async function always returns a promise. Inside it, await pauses that function until the awaited value settles. Run each example separately and wait for its console output.",
    ],
    samples: [
      {
        title: "Run a callback", code: "function finish(report) { report(\"ready\"); }\nfinish(status => console.log(status));",
        question: "Which status reaches the callback?", options: ["ready","undefined","pending"], answer: 0,
        explanation: "finish calls the supplied reporter with its result.",
      },
      {
        title: "Read a fulfilled value", code: "Promise.resolve(4).then(value => console.log(value + 1));",
        question: "What does the fulfilment handler log?", options: ["4","5","[object Promise]"], answer: 1,
        explanation: "The fulfilment handler receives four.",
      },
      {
        title: "Chain transformations", code: "Promise.resolve(3)\n  .then(n => n * 2)\n  .then(n => n + 1)\n  .then(n => console.log(n));",
        question: "What is the final value of the chain?", options: ["6","4","7"], answer: 2,
        explanation: "Each handler receives the previous handler's returned value.",
      },
      {
        title: "Recover from rejection", code: "Promise.reject(new Error(\"Sold out\"))\n  .catch(error => error.message)\n  .then(label => console.log(label));",
        question: "What reaches the final handler?", options: ["Sold out","undefined","Unhandled rejection"], answer: 0,
        explanation: "The catch handler returns text and the chain becomes fulfilled.",
      },
      {
        title: "Await a calculation", code: "async function total() {\n  const count = await Promise.resolve(5);\n  return count * 3;\n}\ntotal().then(value => console.log(value));",
        question: "Which value fulfils total()?", options: ["5","15","3"], answer: 1,
        explanation: "Await supplies five and the async return fulfils the outer promise with fifteen.",
      },
      {
        title: "Catch an awaited failure", code: "async function status() {\n  try { await Promise.reject(new Error(\"offline\")); }\n  catch { return \"try later\"; }\n}\nstatus().then(console.log);",
        question: "Which fallback text is logged?", options: ["offline","undefined","try later"], answer: 2,
        explanation: "A rejected awaited promise enters catch inside the async function.",
      },
    ],
  },
]);
