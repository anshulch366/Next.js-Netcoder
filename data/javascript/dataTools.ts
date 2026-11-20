import { javascriptChapter } from "./chapter";

export const dataTools = javascriptChapter("JS Tutorial", [
  {
    id: "dates", title: "Dates, time zones and international formatting", level: "Intermediate",
    summary: "Represent an instant and choose how to present it to a reader.",
    content: [
      "A Date holds a time value in milliseconds relative to the Unix epoch. ISO strings with Z have an explicit UTC interpretation. Use UTC accessors for reproducible exercises across time zones.",
      "Intl handles locale-dependent presentation. Prefer explicit locales and time zones when requirements specify them. For a fixed duration subtract timestamps; calendar-day calculations across daylight-saving boundaries need a time-zone-aware approach.",
    ],
    samples: [
      {
        title: "Read a UTC year", code: "console.log(new Date(\"2027-01-01T00:30:00Z\").getUTCFullYear());",
        question: "Which UTC year contains this instant?", options: ["2026","1970","2027"], answer: 2,
        explanation: "The UTC accessor reads the year in the timestamp's UTC representation.",
      },
      {
        title: "Count elapsed minutes", code: "const start = Date.parse(\"2027-05-10T09:00:00Z\");\nconst end = Date.parse(\"2027-05-10T09:45:00Z\");\nconsole.log((end - start) / 60000);",
        question: "How many minutes elapsed?", options: ["45","45000","0.75"], answer: 0,
        explanation: "Subtracting gives milliseconds, and division by 60000 converts them to minutes.",
      },
      {
        title: "Convert an offset to UTC", code: "console.log(new Date(\"2027-05-10T12:00:00+05:30\").toISOString());",
        question: "Which UTC instant corresponds to noon at +05:30?", options: ["2027-05-10T17:30:00.000Z","2027-05-10T06:30:00.000Z","2027-05-10T12:00:00.000Z"], answer: 1,
        explanation: "UTC is five hours and thirty minutes earlier than the supplied local clock time.",
      },
      {
        title: "Check an invalid date", code: "console.log(Number.isNaN(new Date(\"unreadable\").getTime()));",
        question: "Does this date contain a valid numeric timestamp? Choose the result of isNaN.", options: ["false","0","true"], answer: 2,
        explanation: "An invalid Date returns NaN from getTime.",
      },
      {
        title: "Format Indian grouping", code: "console.log(new Intl.NumberFormat(\"en-IN\").format(1234567));",
        question: "Which grouping does en-IN use here?", options: ["12,34,567","1,234,567","1234,567"], answer: 0,
        explanation: "The en-IN grouping uses lakhs for this number.",
      },
      {
        title: "Choose a display zone", code: "const fmt = new Intl.DateTimeFormat(\"en-GB\", { hour: \"2-digit\", minute: \"2-digit\", timeZone: \"Asia/Kolkata\", hourCycle: \"h23\" });\nconsole.log(fmt.format(new Date(\"2027-01-01T05:00:00Z\")));",
        question: "What local time does the formatter produce?", options: ["05:00","10:30","00:30"], answer: 1,
        explanation: "Kolkata is five and a half hours ahead of UTC at this instant.",
      },
    ],
  },
  {
    id: "regex", title: "Regular expressions and text parsing", level: "Intermediate",
    summary: "Extract, validate and replace patterns in small text records.",
    content: [
      "A regular expression describes a text pattern. Anchors constrain position, character classes select allowed characters and quantifiers describe repetition. Test examples that should fail as well as ones that should pass.",
      "With the global flag, matchAll can return each match and its captured fields. For a simple literal test, string methods may already express what you need.",
    ],
    samples: [
      {
        title: "Validate a full ticket code", code: "console.log(/^T-\\d{3}$/.test(\"T-042\"));",
        question: "Does T-042 satisfy the whole pattern?", options: ["false","042","true"], answer: 2,
        explanation: "The anchors require T- followed by exactly three digits across the whole string.",
      },
      {
        title: "Reject a suffix", code: "console.log(/^T-\\d{3}$/.test(\"T-042x\"));",
        question: "Does T-042x pass the anchored pattern?", options: ["false","true","undefined"], answer: 0,
        explanation: "The ending x prevents the end anchor from matching after the digits.",
      },
      {
        title: "Capture a field", code: "const match = /room:(?<id>\\d+)/.exec(\"room:17\");\nconsole.log(match.groups.id);",
        question: "Which text does the id group contain?", options: ["room:17","17","room"], answer: 1,
        explanation: "The named capture selects the digits without the room prefix.",
      },
      {
        title: "Collapse whitespace", code: "console.log(\"Ink   on\\tPaper\".replace(/\\s+/g, \" \"));",
        question: "What is the cleaned title?", options: ["InkonPaper","Ink   on Paper","Ink on Paper"], answer: 2,
        explanation: "One replacement is made for each run of whitespace.",
      },
      {
        title: "Ignore case", code: "console.log(/clay/i.test(\"CLAY studio\"));",
        question: "Does CLAY match /clay/i?", options: ["true","false","null"], answer: 0,
        explanation: "The i flag permits case-insensitive matching.",
      },
      {
        title: "Find every number", code: "const hits = [...\"A4 B12 C3\".matchAll(/\\d+/g)];\nconsole.log(hits.map(hit => hit[0]).join(\",\"));",
        question: "What numbers are captured in order?", options: ["4,1,2,3","4,12,3","4 only"], answer: 1,
        explanation: "Each run of digits produces a separate match.",
      },
    ],
  },
  {
    id: "json", title: "JSON, serialization and data exchange", level: "Intermediate",
    summary: "Convert structured values to portable text and back.",
    content: [
      "JSON represents objects, arrays, strings, numbers, booleans and null. Its syntax requires double-quoted property names. Parsing converts text to values but does not verify that a record contains the fields your program expects.",
      "Choose explicit conversions for dates and other non-JSON types. For local deep copying of supported values, structuredClone also supports types such as Map that JSON cannot preserve.",
    ],
    samples: [
      {
        title: "Parse a record", code: "const item = JSON.parse('{\"edition\":4}');\nconsole.log(item.edition + 1);",
        question: "What does the parsed edition plus one produce?", options: ["41","5","4"], answer: 1,
        explanation: "The parsed edition is a number so addition is numeric.",
      },
      {
        title: "Serialize an array", code: "console.log(JSON.stringify([\"ink\", 2]));",
        question: "Which JSON text is emitted?", options: ["[\"ink\",\"2\"]","{\"ink\":2}","[\"ink\",2]"], answer: 2,
        explanation: "Stringification emits compact JSON text containing a string and a number.",
      },
      {
        title: "Omit an undefined field", code: "console.log(JSON.stringify({ ready: true, draft: undefined }));",
        question: "Which record is emitted?", options: ["{\"ready\":true}","{\"ready\":true,\"draft\":null}","{}"], answer: 0,
        explanation: "An undefined object property is omitted during JSON serialization.",
      },
      {
        title: "Pick public fields", code: "console.log(JSON.stringify({ title: \"Ink\", count: 2 }, [\"title\"]));",
        question: "Which JSON remains after filtering?", options: ["{\"count\":2}","{\"title\":\"Ink\"}","[\"title\"]"], answer: 1,
        explanation: "The replacer array selects title as the property to include.",
      },
      {
        title: "Validate parsed shape", code: "const data = JSON.parse('{\"count\":\"4\"}');\nconsole.log(Number.isInteger(data.count));",
        question: "Is the parsed count an integer value?", options: ["true","4","false"], answer: 2,
        explanation: "Valid JSON may contain a string where an application expects an integer.",
      },
      {
        title: "Clone a nested list", code: "const original = { items: [\"ink\"] };\nconst copy = structuredClone(original);\ncopy.items.push(\"chalk\");\nconsole.log(original.items.length);",
        question: "How many items remain in the original?", options: ["1","2","0"], answer: 0,
        explanation: "The cloned nested array is independent of the original.",
      },
    ],
  },
  {
    id: "errors", title: "Errors, debugging and input checks", level: "Intermediate",
    summary: "Recognise failures and make their causes observable.",
    content: [
      "Syntax errors prevent parsing. Reference errors and type errors commonly occur at runtime. Read the first relevant stack frame, inspect inputs, then reproduce the smallest failing call. A debugger statement pauses there when a debugger is attached.",
      "Throw an Error object with a meaningful message for invalid input. Catch errors where you can handle them and use finally for cleanup. Avoid returning from finally because it can replace an earlier return or error.",
    ],
    samples: [
      {
        title: "Validate a quantity", code: "function seats(n) {\n  if (!Number.isInteger(n) || n < 1) throw new RangeError(\"positive seats required\");\n  return n;\n}\ntry { seats(0); } catch (error) { console.log(error.name); }",
        question: "Which error type reports this invalid quantity?", options: ["RangeError","TypeError","SyntaxError"], answer: 0,
        explanation: "The guard deliberately throws a range error for zero.",
      },
      {
        title: "Identify a type mismatch", code: "try { (12).toUpperCase(); } catch (error) { console.log(error.name); }",
        question: "Which error results from this call?", options: ["ReferenceError","TypeError","RangeError"], answer: 1,
        explanation: "The number has no callable toUpperCase method.",
      },
      {
        title: "Recover from malformed JSON", code: "try { JSON.parse(\"{\"); } catch (error) { console.log(error.name); }",
        question: "Which error does the malformed JSON produce?", options: ["TypeError","URIError","SyntaxError"], answer: 2,
        explanation: "The string is incomplete JSON; JSON.parse throws a SyntaxError at runtime.",
      },
      {
        title: "Run final cleanup", code: "const steps = [];\ntry { steps.push(\"work\"); } finally { steps.push(\"close\"); }\nconsole.log(steps.join(\"/\"));",
        question: "Which sequence is recorded?", options: ["work/close","close/work","work"], answer: 0,
        explanation: "The finally block runs after the try block finishes.",
      },
      {
        title: "Keep a useful message", code: "try { throw new Error(\"Unknown edition\"); } catch (error) { console.log(error.message); }",
        question: "Which message is available in the catch block?", options: ["Error.message","Unknown edition","undefined"], answer: 1,
        explanation: "The Error's message preserves the explanation supplied by the caller.",
      },
      {
        title: "Check a boundary case", code: "function free(capacity, booked) { return Math.max(0, capacity - booked); }\nconsole.log(free(3, 5) === 0);",
        question: "Does the overbooking check pass?", options: ["false","-2","true"], answer: 2,
        explanation: "The check confirms that overbooking never produces a negative availability.",
      },
    ],
  },
]);
