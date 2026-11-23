import { pythonChapter } from "./chapter";

export const certificate = pythonChapter("Python Cert", "Beginner", [
  {
    title: "Python Certificate",
    summary: "Prepare for a certificate assessment by checking one skill at a time.",
    content: [
      "Start with the awarding organization's published objectives. For example, the Python Institute's entry-level PCEP page describes the assessment and links to its syllabus. Use this lesson as preparation and consult the provider for current registration and award requirements.",
      "Turn an objective such as tracing loops into a test you can repeat with fresh input. Predict the output on paper, run the snippet and explain which branch ran for each value. Record the particular step you missed so your next practice question targets it.",
    ],
    examples: [{ title: "Trace a loop without running it first", code: `total = 0
for score in [2, 5, 4]:
    if score % 2 == 0:
        total += score
print(total)`, result: "The totals after the three iterations are 2, 2 and 6. The program prints 6." }],
    quizzes: [{ question: "Keeping the same condition, what does the loop print with scores [3, 6, 8]?", options: ["17", "14", "2"], answer: 1, explanation: "The even scores are 6 and 8. The accumulator holds their sum." }],
    reading: { title: "Python Institute PCEP exam and syllabus", url: "https://pythoninstitute.org/pcep" },
  },
]);

export const howTo = pythonChapter("Python How To", "Beginner", [
  {
    title: "Remove List Duplicates",
    summary: "Keep the first occurrence of each hashable item in a sequence.",
    content: [
      "Each dictionary key occurs once, and dictionaries preserve insertion order. Build a dictionary from the items with dict.fromkeys, then turn its keys back into a list. An item encountered a second time keeps its original position.",
      "This recipe works for hashable items such as strings and integers. For records stored in dictionaries, choose a hashable field such as a record ID to track which records you have seen.",
    ],
    examples: [{ title: "Keep the first signup for each club", code: `signups = ["art", "chess", "art", "film", "chess"]
clubs = list(dict.fromkeys(signups))
print(clubs)`, result: "The result is ['art', 'chess', 'film'] in the order the clubs first appeared." }],
    quizzes: [{ question: "What would the recipe return for [3, 1, 3, 2]?", options: ["[1, 2, 3]", "[3, 1, 2]", "[1, 2]"], answer: 1, explanation: "The first 3 keeps its place. The repeated 3 adds no new key." }],
  },
  {
    title: "Reverse a String",
    summary: "Use a negative slice step to read a string from its end.",
    content: [
      "A slice takes a start, a stop and a step. With the first two positions omitted and a step of -1, Python visits string elements from last to first and builds another string. The original remains available to the caller.",
      "This operation reverses Unicode code points. A displayed character can consist of several code points, so use this recipe for simple inputs such as the single-letter route codes below.",
    ],
    examples: [{ title: "Read a route in the opposite direction", code: `outbound = "ABCD"
inbound = outbound[::-1]
print(outbound, inbound)`, result: "The two route codes are ABCD and DCBA." }],
    quizzes: [{ question: "What does 'ABCD'[::-2] produce?", options: ["DB", "DC", "BD"], answer: 0, explanation: "Starting at D and moving back two indices reaches B. The next step goes beyond the string." }],
  },
  {
    title: "Add Two Numbers",
    summary: "Convert text input to the numeric type your calculation needs.",
    content: [
      "For two integers, the + operator computes their sum. For two strings, + joins the strings. When working with counts entered as text, parse both values with int before adding them.",
      "int accepts an optional sign and surrounding whitespace. A fractional value such as '2.5' raises ValueError when parsed as an integer. Choose float for a task that actually accepts fractional measurements.",
    ],
    examples: [{ title: "Combine two boxes of markers", code: `first_box = "12"
second_box = "8"
print(first_box + second_box)
print(int(first_box) + int(second_box))`, result: "Joining the text prints 128. Adding the parsed counts prints 20." }],
    quizzes: [{ question: "Which expression adds two counts supplied by input()?", options: ["input() + input()", "int(input() + input())", "int(input()) + int(input())"], answer: 2, explanation: "Each call to input returns text. Convert each count separately before applying the addition operator." }],
  },
]);

export const practice = pythonChapter("Python Examples", "Beginner", [
  {
    title: "Python Examples",
    summary: "Read a small program by following its input, transformation and result.",
    content: [
      "A worked example is easiest to adapt when you can name the job of each line. Here the input is a list of readings, the condition selects the readings above a limit, and len counts what passed. Before running it, mark the qualifying values yourself.",
      "To include the boundary value too, change > to >=. Change only the comparison and use the same readings so you can attribute the new count to that one decision.",
    ],
    examples: [{ title: "Count warm days", code: `readings = [18, 20, 24, 22]
warm_days = [temp for temp in readings if temp > 20]
print(warm_days)
print(len(warm_days))`, result: "The list is [24, 22] and the count is 2. Including temperatures equal to 20 raises the count to 3." }],
    quizzes: [{ question: "Which reading changes category if you replace > 20 with >= 20?", options: ["18", "20", "24"], answer: 1, explanation: "Equality is the only additional case admitted by >=." }],
  },
  {
    title: "Python Videos",
    summary: "Practice predicting a function call alongside a Python video lesson.",
    content: [
      "Open Harvard's CS50P Week 0 video on functions and variables using the lesson link. Pause when a function is defined. Identify its parameters, then predict which values the caller supplies. Use the lecture notes alongside the recording if you prefer reading.",
      "Try the related example below on your own. Say what the default argument supplies on the first call, then explain why the second call uses a different label.",
    ],
    examples: [{ title: "Pause and predict two introductions", code: `def introduce(name, role="reader"):
    return f"{name} is a {role}."

print(introduce("Jo"))
print(introduce("Jo", "writer"))`, result: "The lines read Jo is a reader. and Jo is a writer. The second call supplies its own role." }],
    quizzes: [{ question: "Which call uses the default role?", options: ["introduce('Ira')", "introduce('Ira', 'host')", "introduce()"], answer: 0, explanation: "The name is required and the role is optional. Supplying only the name uses the default reader." }],
    reading: { title: "Watch CS50P Week 0 · Functions and Variables", url: "https://cs50.harvard.edu/python/weeks/0/" },
  },
  {
    title: "Python Compiler",
    summary: "Compile an expression, then run it to see when Python produces a value.",
    content: [
      "Try the example in a Python 3 shell or the linked Pyodide browser console. The built-in compile function checks source and produces a code object. Its mode tells Python whether to expect a single expression ('eval') or a sequence of statements ('exec').",
      "Evaluate the code object below to calculate the result. Changing the fixed expression to '3 +' causes a SyntaxError at compilation. A syntactically valid expression such as '3 / 0' compiles, but raises ZeroDivisionError when evaluated.",
    ],
    examples: [{ title: "Compile a fixed arithmetic expression", code: `expression = compile("(3 + 4) * 2", "<practice>", "eval")
print(type(expression).__name__)
print(eval(expression))`, result: "Python prints code and then 14. Compilation created the object used by the later evaluation step." }],
    quizzes: [{ question: "At which step does the valid expression '9 / 0' raise an error?", options: ["While storing the source string", "When compile checks the syntax", "When the compiled expression runs"], answer: 2, explanation: "Division by zero is an arithmetic error. It arises when the operation executes." }],
    reading: { title: "Run Python in the Pyodide console", url: "https://pyodide.org/en/stable/console.html" },
  },
  {
    title: "Python Exercises",
    summary: "Write a function to count matching values and check its boundary cases.",
    content: [
      "Implement count_long(words, minimum) so it returns how many words have at least the given length. Try it with an empty list and with a word exactly at the cutoff. Write your own solution before checking the example.",
      "An assert records a result you expect. A false assertion raises AssertionError and points to the failing case. Keeping the example inputs small makes it easier to reproduce a mistake.",
    ],
    examples: [{ title: "Check three word lists", code: `def count_long(words, minimum):
    return sum(1 for word in words if len(word) >= minimum)

assert count_long(["cat", "owl", "ox"], 3) == 2
assert count_long([], 3) == 0
assert count_long(["tree"], 5) == 0
print("Three checks passed")`, result: "Both three-letter words satisfy the first check. All assertions pass and the final line prints Three checks passed." }],
    quizzes: [{ question: "Which test would catch an accidental change from >= to >?", options: ["count_long([], 3) == 0", "count_long(['cat'], 3) == 1", "count_long(['cactus'], 3) == 1"], answer: 1, explanation: "A word exactly at the cutoff passes >= and fails >, exposing the change." }],
  },
  {
    title: "Python Quiz",
    summary: "Check how assignment, list mutation and slicing affect a result.",
    content: [
      "Before running the example, draw one box for each list and label it with every name that refers to it. A plain assignment gives an existing object another name. A full slice of a list makes a new outer list.",
      "Predict the final collections after both append calls. Then try exchanging the assignment and the slice and trace which names share an object in that version.",
    ],
    examples: [{ title: "Track two names and a copy", code: `colors = ["red"]
alias = colors
copy = colors[:]
alias.append("blue")
copy.append("gold")
print(colors)
print(copy)`, result: "The first line prints ['red', 'blue'] and the second prints ['red', 'gold']." }],
    quizzes: [
      { question: "Immediately after alias = colors, what does alias is colors return?", options: ["True", "False", "None"], answer: 0, explanation: "Both names refer to the very same list object." },
      { question: "What is len(copy) after the two append calls?", options: ["1", "3", "2"], answer: 2, explanation: "The slice started with red. Only the append through copy added to that separate list." },
    ],
  },
  {
    title: "Python Challenges",
    summary: "Find the longest run of equal values in a single pass.",
    content: [
      "Write a function that takes a string and returns the length of the longest uninterrupted run of one character. A character can start a new run even if it appeared earlier. The empty string should give zero. Try it for 'aabbbaaaab' before reading the solution.",
      "Track the previous character, the length of the current run and the largest length seen. Reset the current length to one when the character changes. This handles the last run without a separate end-of-string check.",
    ],
    examples: [{ title: "Measure consecutive characters", code: `def longest_run(text):
    previous = None
    current = best = 0
    for char in text:
        current = current + 1 if char == previous else 1
        best = max(best, current)
        previous = char
    return best

print(longest_run("aabbbaaaab"), longest_run(""))`, result: "The four consecutive a characters form the longest run, so the output is 4 0." }],
    quizzes: [{ question: "Why would text.count('a') give the wrong answer for 'aaXaa'?", options: ["count ignores the final character", "count changes the string", "count includes separated runs"], answer: 2, explanation: "There are four a characters, but the X separates them into runs of length two." }],
  },
  {
    title: "Python Practice Problems",
    summary: "Turn a word-counting problem into small, testable steps.",
    content: [
      "Count each word in a space-separated shopping note, treating upper- and lowercase spellings alike. Split the note, normalize each word, and accumulate counts. Use an empty note and a note with repeated spaces to test your assumptions.",
      "Next, extend the solution to return the words that occur twice or more. Keep normalization and counting separate from this final selection so you can check each intermediate result.",
    ],
    examples: [{ title: "Count a short shopping note", code: `def word_counts(note):
    counts = {}
    for word in note.casefold().split():
        counts[word] = counts.get(word, 0) + 1
    return counts

counts = word_counts("Tea  rice TEA")
print(counts)
print([word for word, count in counts.items() if count >= 2])`, result: "The dictionary is {'tea': 2, 'rice': 1}. The extension returns ['tea']." }],
    quizzes: [{ question: "What does word_counts('   ') return?", options: ["{'': 1}", "{}", "None"], answer: 1, explanation: "With no separator argument, split discards surrounding whitespace and produces no words. The dictionary stays empty." }],
  },
  {
    title: "Python Server",
    summary: "Serve a practice HTML file over HTTP on your own computer.",
    content: [
      "Create an empty folder, save a file named index.html in it containing <h1>Reading room</h1>, and open a terminal in that folder. The standard library's http.server module can serve these static files while you develop.",
      "Run the command below, then visit http://127.0.0.1:8000/ in your browser. The server maps the requested directory to its index.html. Edit the heading and reload the browser to see the change. Press Ctrl+C in the terminal to stop serving.",
    ],
    examples: [{ title: "Start a local static file server in the terminal", code: "python -m http.server 8000 --bind 127.0.0.1", result: "The server listens on local port 8000. Visiting the home page displays Reading room and logs the incoming request in the terminal." }],
    quizzes: [{ question: "Which address belongs in your browser if you change the command's port to 9000?", options: ["http://127.0.0.1:9000/", "http://9000.0.0.1/", "http://127.0.0.1:8000/"], answer: 0, explanation: "The host stays at the loopback address. The part after its colon selects the port where the server is listening." }],
    reading: { title: "Python http.server documentation", url: "https://docs.python.org/3/library/http.server.html" },
  },
  {
    title: "Python Syllabus",
    summary: "Follow the prerequisites for a short project that summarizes text.",
    content: [
      "Begin with values, variables, strings and output. Use conditions and loops to select words, then lists and dictionaries to store results. Practice writing functions once you can trace a loop by hand. Finish with file handling, exceptions and tests.",
      "The checkpoint below combines string methods, iteration, a counting dictionary and a return value. Once you can explain each line, extend the function to accept text read from a file and add a test for empty input.",
    ],
    examples: [{ title: "Combine four syllabus skills", code: `def length_counts(sentence):
    counts = {}
    for word in sentence.split():
        size = len(word)
        counts[size] = counts.get(size, 0) + 1
    return counts

print(length_counts("we read at noon"))`, result: "The result is {2: 2, 4: 2}. Each key is a word length and its value counts words of that length." }],
    quizzes: [{ question: "Which earlier skill explains counts.get(size, 0)?", options: ["Drawing with Turtle", "Handling a missing dictionary key", "Opening a file"], answer: 1, explanation: "get supplies the initial count of zero the first time a length occurs." }],
  },
  {
    title: "Python Study Plan",
    summary: "Build a four-session plan with a checkable outcome each day.",
    content: [
      "In session one, convert three text readings to integers and print them. In session two, use a loop and condition to keep the valid readings. In session three, package the steps in a function. In session four, test ordinary input, an empty collection and a boundary value.",
      "Start each session by rebuilding the previous day's result from memory. The final checkpoint below is a specification for the function. Try implementing it from the assertions, then compare your version with the worked solution.",
    ],
    examples: [{ title: "Check the end-of-week reading filter", code: `def nonnegative_readings(values):
    numbers = [int(value) for value in values]
    return [number for number in numbers if number >= 0]

assert nonnegative_readings(["2", "-3", "0"]) == [2, 0]
assert nonnegative_readings([]) == []
print("Checkpoint complete")`, result: "The first check keeps the zero boundary and the positive reading. The empty-input check passes and the script prints Checkpoint complete." }],
    quizzes: [{ question: "Which change would the zero boundary case detect?", options: ["Renaming the loop variable", "Adding a comment before return", "Replacing >= 0 with > 0"], answer: 2, explanation: "Strict comparison would incorrectly remove zero from the result." }],
  },
  {
    title: "Python Interview Q&A",
    summary: "Explain why a mutable default argument can share state between calls.",
    content: [
      "When is a function's default argument evaluated? Python evaluates it when the def statement runs. If the default is an empty list and the function appends to it, repeated calls that omit the argument can observe the earlier changes.",
      "How would you give each caller a fresh list and still accept an existing list? Use None as the default and create a list inside the function when the argument is None. The explicit identity check also respects an empty list supplied by a caller.",
    ],
    examples: [{ title: "Distinguish an omitted collection from an empty one", code: `def add_label(label, labels=None):
    if labels is None:
        labels = []
    labels.append(label)
    return labels

print(add_label("red"))
print(add_label("blue"))
saved = []
add_label("green", saved)
print(saved)`, result: "The three lists are ['red'], ['blue'] and ['green']. The last call mutates the list passed by the caller." }],
    quizzes: [{ question: "Why would if not labels be a poor replacement for if labels is None here?", options: ["It also replaces an explicitly supplied empty list", "It raises on an empty list", "It always evaluates to False"], answer: 0, explanation: "An empty list is false in a condition. Rebinding labels would leave the caller's empty list untouched." }],
  },
  {
    title: "Python Training",
    summary: "Practice changing a function to meet a new requirement and testing the change.",
    content: [
      "A library charges two credits per overdue day and caps the charge at ten. A returned item can be early, on time or late. Write one expected result for each case before implementing the calculation.",
      "Use max to replace negative days with zero and min to apply the cap after multiplying by the daily rate. For a second round, change the rate to three credits and update the cases that exercise a partial charge.",
    ],
    examples: [{ title: "Test a capped overdue fee", code: `def fee(days_late):
    return min(10, max(0, days_late) * 2)

for days, expected in [(-1, 0), (0, 0), (2, 4), (9, 10)]:
    assert fee(days) == expected
print("Four fee cases passed")`, result: "The early and on-time items cost zero, two late days cost four credits, and the nine-day fee stops at ten." }],
    quizzes: [{ question: "At a rate of three credits per day and a cap of ten, what is the fee for four days?", options: ["7", "10", "12"], answer: 1, explanation: "Four days would cost twelve credits before applying the cap. The capped result is ten." }],
  },
]);
