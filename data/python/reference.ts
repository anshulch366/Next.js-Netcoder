import { pythonChapter } from "./chapter";

export const reference = pythonChapter("Python Reference", "Beginner", [
  {
    title: "Python Overview",
    summary: "Follow names, objects and operations through a short Python program.",
    content: [
      "Python binds names to objects. An object's type determines the operations it supports. For example, strings have a split method, lists can be indexed, and len counts the items in either a string or a list.",
      "To look up an unfamiliar expression, work from the inside out. Find the type of the starting value, check what its method returns, then look up the operation on that result. type(value).__name__ is a quick way to inspect the type while experimenting.",
    ],
    examples: [{ title: "Follow a string into a list", code: `line = "oak pine elm"
trees = line.split()
print(type(line).__name__, type(trees).__name__)
print(trees[1], len(trees))`, result: "The types are str and list. Index 1 selects pine, and len counts all three names." }],
    quizzes: [{ question: "What is the type of trees[0] in the example?", options: ["list", "int", "str"], answer: 2, explanation: "Indexing retrieves one item from the list. Each item that split produced is a string." }],
    reading: { title: "The Python tutorial", url: "https://docs.python.org/3/tutorial/" },
  },
  {
    title: "Python Built-in Functions",
    summary: "Use built-ins to count, total and compare values without importing a module.",
    content: [
      "Built-in functions are available in a fresh Python session. Use len for the number of items, sum for a numeric total, and min or max for extrema. sorted produces a new ordered list from an iterable.",
      "Some built-ins accept optional arguments that determine edge-case behavior. For example, max accepts a default when passed a single iterable. This lets a program distinguish a missing maximum from an actual high score of zero.",
    ],
    examples: [{ title: "Summarize scores including an empty round", code: `scores = [8, 5, 8]
print(len(scores), sum(scores), max(scores))
print(sorted(scores))
print(max([], default=None))`, result: "The summary is 3 21 8, the sorted list is [5, 8, 8], and the empty round has a maximum of None." }],
    quizzes: [{ question: "Which built-in call returns a new ordered list?", options: ["sorted(scores)", "sum(scores)", "len(scores)"], answer: 0, explanation: "sorted collects the items in order in a fresh list. The other calls produce numbers." }],
    reading: { title: "Python built-in functions index", url: "https://docs.python.org/3/library/functions.html" },
  },
  {
    title: "Python String Methods",
    summary: "Clean and combine text with strip, split, casefold and join.",
    content: [
      "String methods return new values because strings are immutable. strip removes surrounding whitespace, split separates a string into pieces, and casefold normalizes case for comparisons. Assign intermediate results names while you learn the sequence.",
      "To join pieces, call join on the separator and supply an iterable of strings. In this example the hyphen supplies the text to insert between each pair of words.",
    ],
    examples: [{ title: "Build a label from a messy title", code: `title = "  Night   Classes  "
cleaned = title.strip().casefold()
words = cleaned.split()
print(words)
print("-".join(words))`, result: "The words are ['night', 'classes']. The finished label is night-classes." }],
    quizzes: [{ question: "What does ' / '.join(['OAK', 'ELM']) return?", options: ["['OAK', 'ELM']", "'OAK / ELM'", "' / OAKELM / '"], answer: 1, explanation: "join inserts its separator only between adjacent strings." }],
    reading: { title: "Python string methods reference", url: "https://docs.python.org/3/library/stdtypes.html#string-methods" },
  },
  {
    title: "Python List Methods",
    summary: "Use append, extend and pop to change an ordered collection.",
    content: [
      "append adds one object at the end of a list. extend reads another iterable and adds its items individually. Both change the existing list and return None. pop removes an item and returns it to the caller.",
      "Call pop without an index to take the last item, or pass an index to remove a specific position. Popping from an empty list raises IndexError. Check the current contents when the list may have no work left.",
    ],
    examples: [{ title: "Extend a reading queue and take one item", code: `queue = ["map"]
queue.append("atlas")
queue.extend(["guide", "novel"])
print(queue.pop())
print(queue)`, result: "pop returns novel. The remaining list is ['map', 'atlas', 'guide']." }],
    quizzes: [{ question: "What would queue.append(['guide', 'novel']) add?", options: ["Two separate strings", "A tuple", "One nested list"], answer: 2, explanation: "append treats its entire argument as the single item to add." }],
    reading: { title: "Python list methods", url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists" },
  },
  {
    title: "Python Dictionary Methods",
    summary: "Retrieve optional values, change entries and iterate over key-value pairs.",
    content: [
      "A dictionary maps a hashable key to a value. get(key, default) reads an optional entry. update adds new pairs and replaces values for existing keys. items exposes both parts of each entry so a loop can unpack them.",
      "Reading a missing key with get does not insert it. If a missing key must become an entry, assign it a value explicitly or use setdefault when you also want the stored value back.",
    ],
    examples: [{ title: "Read a missing key and update inventory", code: `stock = {"pens": 4}
print(stock.get("pads", 0), "pads" in stock)
stock.update({"pens": 6, "pads": 2})
for item, quantity in stock.items():
    print(item, quantity)`, result: "The first line is 0 False. After the update the loop prints pens 6 and pads 2." }],
    quizzes: [{ question: "Which method returns keys paired with their values?", options: ["items()", "keys()", "values()"], answer: 0, explanation: "Iterating items() supplies a key-value pair on each step, suitable for unpacking into two variables." }],
    reading: { title: "Python dictionary reference", url: "https://docs.python.org/3/library/stdtypes.html#mapping-types-dict" },
  },
  {
    title: "Python Tuple Methods",
    summary: "Count matches and locate the first matching item in an immutable sequence.",
    content: [
      "Tuples support two search methods. count(value) scans for equal items and returns how many occur. index(value) returns the position of the first match and raises ValueError if it cannot find one. Positions begin at zero.",
      "Use the optional starting position in index to find a later occurrence. When several possible values may be absent, a membership test with in lets you choose what to do before calling index.",
    ],
    examples: [{ title: "Find repeat visits along a route", code: `stops = ("Elm", "Oak", "Elm", "Pine")
print(stops.count("Elm"))
first = stops.index("Elm")
print(first, stops.index("Elm", first + 1))`, result: "Elm appears twice. Its first and next positions are 0 and 2." }],
    quizzes: [{ question: "What does stops.count('Ash') return?", options: ["None", "0", "ValueError"], answer: 1, explanation: "count totals all equal items. There are zero Ash entries in the tuple." }],
    reading: { title: "Python sequence operations", url: "https://docs.python.org/3/library/stdtypes.html#common-sequence-operations" },
  },
  {
    title: "Python Set Methods",
    summary: "Find overlaps and missing items between collections of distinct values.",
    content: [
      "Use add for one item and update to add items from an iterable. intersection returns the items shared by sets. difference returns the items in the first set that do not occur in the other. Set elements must be hashable.",
      "Use discard when removing an item whose presence is optional. A set has no positional order, so use sorted when presenting its contents as a predictable list.",
    ],
    examples: [{ title: "Check attendance against a roster", code: `roster = {"Bo", "Lin", "Sam"}
present = {"Sam", "Bo", "Jo"}
print(sorted(roster.intersection(present)))
print(sorted(roster.difference(present)))`, result: "The roster members present are ['Bo', 'Sam']. The absent member is ['Lin']." }],
    quizzes: [{ question: "Which expression finds visitors who are present but outside the roster?", options: ["roster.difference(present)", "present.intersection(roster)", "present.difference(roster)"], answer: 2, explanation: "The first set supplies the candidates and the second excludes its members. Only Jo remains." }],
    reading: { title: "Python set reference", url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset" },
  },
  {
    title: "Python File Methods",
    summary: "Write, reposition and read a text stream using file methods.",
    content: [
      "A stream has a current position. write places text there and advances it. readline reads from the current position through the next newline or end of file. seek(0) returns to the beginning of a seekable stream.",
      "StringIO gives you an in-memory text stream for practicing the same methods as a text file without creating a disk file. A with statement closes the stream when the indented block finishes.",
    ],
    examples: [{ title: "Replay two lines from a text stream", code: `from io import StringIO

with StringIO() as stream:
    stream.write("first\\nsecond\\n")
    stream.seek(0)
    print(stream.readline().rstrip())
    print(stream.read().rstrip())`, result: "The first read returns the first line. The following read consumes the remaining text, so the output is first and second on successive lines." }],
    quizzes: [{ question: "What would read() return immediately after writing at the end, without seek(0)?", options: ["An empty string", "The entire stream", "None"], answer: 0, explanation: "There is no text after the current end position." }],
    reading: { title: "Python I/O stream methods", url: "https://docs.python.org/3/library/io.html" },
  },
  {
    title: "Python Keywords",
    summary: "Recognize reserved words and test candidate identifiers.",
    content: [
      "Keywords such as for, class and return have special roles in Python's grammar. An identifier can look valid as text but still be a reserved word. Use str.isidentifier to check its spelling and keyword.iskeyword to check the reserved-word list.",
      "If an intended name collides with a keyword, choose a more descriptive name such as class_name. Some words, such as match in a match statement, are soft keywords whose special meaning depends on the context.",
    ],
    examples: [{ title: "Check proposed variable names", code: `import keyword

for name in ["class", "class_name", "2nd"]:
    usable = name.isidentifier() and not keyword.iskeyword(name)
    print(name, usable)`, result: "The checks print class False, class_name True and 2nd False. The last name starts with a digit." }],
    quizzes: [{ question: "Why does 'class'.isidentifier() alone miss the problem with using class as a variable?", options: ["It accepts only numbers", "It checks identifier spelling without excluding reserved words", "class is a soft keyword"], answer: 1, explanation: "The letters form a valid identifier shape, but Python reserves the keyword class for class definitions." }],
    reading: { title: "Python keywords and soft keywords", url: "https://docs.python.org/3/reference/lexical_analysis.html#keywords" },
  },
  {
    title: "Python Exceptions",
    summary: "Read an exception type and choose the recovery that fits its cause.",
    content: [
      "An exception interrupts the current operation and travels up the call stack until an appropriate handler catches it. Read the final line of a traceback for the exception type and message, then inspect the indicated line in your code.",
      "Different failures need different responses. A missing dictionary entry raises KeyError, while converting nonnumeric text to an integer raises ValueError. A narrow try block with separate handlers lets you report each case accurately.",
    ],
    examples: [{ title: "Distinguish a missing count from an invalid one", code: `def read_count(row):
    try:
        return int(row["count"])
    except KeyError:
        return "count missing"
    except ValueError:
        return "invalid number"

for row in [{"count": "5"}, {}, {"count": "many"}]:
    print(read_count(row))`, result: "The three lines read 5, count missing and invalid number. Each failure reaches its own handler." }],
    quizzes: [{ question: "Which expression raises KeyError for an empty dictionary named row?", options: ["row.get('count')", "'count' in row", "row['count']"], answer: 2, explanation: "Direct indexing requires a stored value at that key. The other operations handle a missing key normally." }],
    reading: { title: "Python built-in exceptions", url: "https://docs.python.org/3/library/exceptions.html" },
  },
  {
    title: "Python Glossary",
    summary: "Distinguish an iterable, an iterator and the items it yields.",
    content: [
      "An iterable is an object from which iter can obtain an iterator. An iterator has a current position and supplies the next item through next. Lists are iterable, so two independent calls to iter on the same list create two traversals.",
      "When an iterator runs out of items, next normally raises StopIteration. Pass a default as its second argument to receive that default when exhausted. A for loop handles exhaustion for you.",
    ],
    examples: [{ title: "Start two traversals over the same list", code: `names = ["Jo", "Mia"]
first = iter(names)
second = iter(names)
print(next(first), next(first))
print(next(first, "finished"))
print(next(second))`, result: "The first iterator yields Jo and Mia, then the default finished. The second iterator still starts at Jo." }],
    quizzes: [{ question: "What stores the current position during the first traversal?", options: ["The first iterator", "The list's first item", "The string 'finished'"], answer: 0, explanation: "The iterator advances independently each time next requests another item." }],
    reading: { title: "Python glossary", url: "https://docs.python.org/3/glossary.html" },
  },
]);

export const moduleReference = pythonChapter("Module Reference", "Intermediate", [
  {
    title: "Built-in Modules",
    summary: "Inspect the modules compiled into your interpreter and import one.",
    content: [
      "Python ships with a standard library. Some modules are built directly into the interpreter, while others are provided as files. sys.builtin_module_names lists the built-in module names for the Python interpreter you are running.",
      "Import a module to bind its name in your program. Then use a dot to access its attributes. sys.version_info exposes version fields as numbers so a program can inspect its runtime without parsing formatted version text.",
    ],
    examples: [{ title: "Inspect the running interpreter", code: `import sys

print("sys" in sys.builtin_module_names)
print(sys.version_info.major)
print(isinstance(sys.version_info.minor, int))`, result: "In CPython 3 the lines read True, 3 and True. The set of other built-in modules can depend on the interpreter build." }],
    quizzes: [{ question: "Which attribute lists names compiled into this interpreter?", options: ["sys.argv", "sys.builtin_module_names", "sys.version_info"], answer: 1, explanation: "sys.builtin_module_names holds those module names. argv holds command-line arguments and version_info describes the Python version." }],
    reading: { title: "Python sys module reference", url: "https://docs.python.org/3/library/sys.html#sys.builtin_module_names" },
  },
  {
    title: "Random Module",
    summary: "Sample distinct entries and repeat a simulation from a seed.",
    content: [
      "Use random.choice to pick one item from a nonempty sequence and sample to choose positions without replacement. When every item in the population is distinct, a sample will therefore contain distinct values.",
      "A random.Random instance keeps its own generator state. Starting two instances with the same seed and making the same calls reproduces the same sequence in the same environment. This helps compare two versions of a classroom simulation.",
    ],
    examples: [{ title: "Repeat a practice draw", code: `from random import Random

teams = ["Oak", "Pine", "Elm", "Ash"]
first = Random(12).sample(teams, k=2)
repeat = Random(12).sample(teams, k=2)
print(len(set(first)), first == repeat)`, result: "The output is 2 True. Each draw contains two distinct teams, and the two draws agree." }],
    quizzes: [{ question: "Which call picks two positions without replacement?", options: ["rng.choice(teams)", "rng.choices(teams, k=2)", "rng.sample(teams, k=2)"], answer: 2, explanation: "sample draws positions without replacement. choices draws with replacement and choice selects one item." }],
    reading: { title: "Python random module", url: "https://docs.python.org/3/library/random.html" },
  },
  {
    title: "Requests Module",
    summary: "Retrieve JSON and check the HTTP response before reading its fields.",
    content: [
      "Requests is a third-party package. In your virtual environment run python -m pip install requests. Its get function sends an HTTP GET request and returns a Response. Set a timeout so a connection or an inactive read cannot wait indefinitely.",
      "The public PyPI JSON endpoint below describes the requests package. Call raise_for_status to surface HTTP errors before decoding JSON. Then use ordinary dictionary access to select the name from the info object. Running this example requires internet access.",
    ],
    examples: [{ title: "Read a package name from PyPI", code: `import requests

response = requests.get("https://pypi.org/pypi/requests/json", timeout=5)
response.raise_for_status()
details = response.json()
print(details["info"]["name"])`, result: "When the endpoint responds successfully, the script prints requests." }],
    quizzes: [{ question: "Which call checks for an HTTP error status such as 404?", options: ["response.raise_for_status()", "response.json()", "details.keys()"], answer: 0, explanation: "raise_for_status raises HTTPError for client and server error responses. JSON decoding only concerns the response body." }],
    reading: { title: "Requests quickstart", url: "https://requests.readthedocs.io/en/latest/user/quickstart/" },
  },
  {
    title: "Statistics Module",
    summary: "Compare a data set's arithmetic mean, median and most frequent values.",
    content: [
      "The statistics module accepts ordinary Python collections. mean divides the sum by the number of values. median identifies the middle of the sorted data and averages the two middle values for an even count. multimode returns every value tied for the highest frequency.",
      "For waiting times, one unusually long wait can pull the mean away from a typical observation. Compare the summaries below and consider which would best answer a visitor asking about a usual wait.",
    ],
    examples: [{ title: "Summarize four waits in minutes", code: `from statistics import mean, median, multimode

waits = [2, 2, 4, 20]
print(mean(waits), median(waits), multimode(waits))`, result: "The mean is 7, the median is 3.0 and the modes list is [2]. The long wait increases the arithmetic mean." }],
    quizzes: [{ question: "If the last wait grows from 20 to 40, which summary in the example changes?", options: ["The median only", "The mean only", "The modes only"], answer: 1, explanation: "The two middle values and the frequency of 2 stay the same. The sum increases, so the mean increases." }],
    reading: { title: "Python statistics module", url: "https://docs.python.org/3/library/statistics.html" },
  },
  {
    title: "Math Module",
    summary: "Use real-valued functions and compare floating-point calculations with a tolerance.",
    content: [
      "The math module provides real-valued functions and constants, including pi, sqrt and hypot. With two components, hypot computes the distance from the origin using the lengths along perpendicular axes.",
      "Decimal fractions do not always have an exact binary floating-point representation. Use math.isclose for a comparison when a small approximation error is acceptable. Specify tolerances appropriate to the scale of the calculation.",
    ],
    examples: [{ title: "Check a diagonal and a fractional sum", code: `import math

print(math.hypot(3, 4))
print(math.isclose(0.1 + 0.2, 0.3, abs_tol=1e-12))`, result: "The diagonal is 5.0. The fractional sum is close enough to 0.3, so the second line is True." }],
    quizzes: [{ question: "What would math.hypot(6, 8) return?", options: ["14.0", "100.0", "10.0"], answer: 2, explanation: "The sum of squares is 36 + 64, and its square root is 10." }],
    reading: { title: "Python math module", url: "https://docs.python.org/3/library/math.html" },
  },
  {
    title: "cMath Module",
    summary: "Compute with complex numbers and inspect their real and imaginary parts.",
    content: [
      "Import the lowercase module name cmath for functions defined over complex inputs. Python writes the imaginary unit as 1j. A complex value exposes .real and .imag components, and its magnitude is available through abs.",
      "A negative real number has a complex square root. cmath.sqrt returns a principal square root. Squaring the result lets you check it against the original input using cmath.isclose.",
    ],
    examples: [{ title: "Check a square root outside the real numbers", code: `import cmath

root = cmath.sqrt(-9)
print(root)
print(root.real, root.imag)
print(cmath.isclose(root * root, -9))`, result: "The root is 3j. Its components are 0.0 and 3.0, and squaring it gives a value equal to -9 within tolerance." }],
    quizzes: [{ question: "What is abs(3 + 4j)?", options: ["5.0", "7.0", "4j"], answer: 0, explanation: "The magnitude is the distance from the origin, equal to the square root of 3 squared plus 4 squared." }],
    reading: { title: "Python cmath module", url: "https://docs.python.org/3/library/cmath.html" },
  },
]);
