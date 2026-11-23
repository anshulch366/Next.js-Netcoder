import { pythonChapter } from "./chapter";

export const tutorial = pythonChapter("Python Tutorial", "Beginner", [
  {
    title: "Python HOME",
    summary: "Run a tiny Python program and trace how it gets its answer.",
    content: [
      "Imagine packing twelve postcards into sets of three. Python can keep track of the number of cards, calculate the number of full sets and print a label for the box.",
      "Start with Python 3.10 or later so you can try every language feature in this tutorial. Read the example from top to bottom and predict the result before changing the number of cards.",
    ],
    examples: [{
      title: "Count complete postcard sets",
      code: `cards = 12
per_set = 3
print("Complete sets:", cards // per_set)`,
      result: "Complete sets: 4. With 14 cards there are still four complete sets, with two cards left over.",
    }],
    quizzes: [{
      question: "If you have 17 cards, how many complete sets will the program report?",
      options: ["5","5.67","6"],
      answer: 0,
      explanation: "Five sets use fifteen cards. Integer floor division counts the whole sets that fit.",
    }],
  },
  {
    title: "Python Intro",
    summary: "Compare an interactive calculation with the same calculation in a script.",
    content: [
      "Python evaluates expressions and executes statements. At the interactive prompt you can type an expression and immediately see its value. This makes the prompt a convenient place to try a calculation.",
      "In a script, give intermediate results names and call print to show the output. Save the instructions in a .py file when you want to repeat them with different inputs.",
    ],
    examples: [{
      title: "Time a two-part trip",
      code: `walk_minutes = 8
train_minutes = 21
print(walk_minutes + train_minutes)`,
      result: "The script displays 29, the combined travel time in minutes.",
    }],
    quizzes: [{
      question: "Which line would display the new total after doubling the walking time?",
      options: ["print('walk_minutes + train_minutes')","print(walk_minutes * 2 + train_minutes)","walk_minutes + train_minutes"],
      answer: 1,
      explanation: "Python evaluates the arithmetic before print displays the result. Quotation marks would turn the expression into literal text.",
    }],
  },
  {
    title: "Python Get Started",
    summary: "Check the interpreter and run a saved file from a terminal.",
    content: [
      "Install Python 3 and open a terminal in a folder you can write to. Run python --version to check which interpreter the command selects. Some systems use python3, and on Windows you can also use the py launcher.",
      "Save the example as hello.py in that folder. Type python hello.py in the terminal, using the same launcher you just checked. When you edit the file, save it and repeat the command.",
    ],
    examples: [{
      title: "Run hello.py",
      code: `print("Hello from my first script!")`,
      result: "The terminal displays Hello from my first script! and returns to its prompt.",
    }],
    quizzes: [{
      question: "Where should you enter python hello.py?",
      options: ["Inside the quotation marks in hello.py","At the Python >>> prompt","In a terminal opened in the file's folder"],
      answer: 2,
      explanation: "The shell starts the interpreter and passes it the path of the file to execute.",
    }],
  },
  {
    title: "Python Syntax",
    summary: "Use indentation to show which statements belong to a block.",
    content: [
      "A colon opens a compound statement's block. Indent its body consistently, conventionally with four spaces. Moving a line back to the surrounding indentation ends the block.",
      "In the example the first message depends on the temperature. The last line lines up with the if statement, so it runs after the decision for any temperature.",
    ],
    examples: [{
      title: "Separate a conditional line from a shared line",
      code: `temperature = 18
if temperature < 20:
    print("Pack a sweater")
print("Check complete")`,
      result: "The script prints Pack a sweater followed by Check complete on the next line.",
    }],
    quizzes: [{
      question: "What will the example display at 22 degrees?",
      options: ["Both messages","Check complete","Pack a sweater"],
      answer: 1,
      explanation: "The indented block is skipped because 22 is above the threshold. Execution continues with the last line.",
    }],
  },
  {
    title: "Python Output",
    summary: "Control separators and line endings when printing.",
    content: [
      "print can display several values in one call. Its sep argument supplies the text between them, while end supplies the characters after the last value. The defaults are a space and a newline.",
      "Use these arguments to format a label assembled from separate values. An empty end lets the next print continue on the same line.",
    ],
    examples: [{
      title: "Print a shelf label",
      code: `print("Shelf", 4, sep="-", end=": ")
print("maps")`,
      result: "One line reads Shelf-4: maps.",
    }],
    quizzes: [{
      question: "What would end='\\n' change in the first call?",
      options: ["Shelf and 4 would be joined without a hyphen","The word maps would disappear","maps would begin on the next line"],
      answer: 2,
      explanation: "end controls what follows the final value of the first print call.",
    }],
  },
  {
    title: "Python Comments",
    summary: "Document the reason for a calculation beside the code.",
    content: [
      "Outside a string, a hash mark begins a comment that continues to the end of the line. Python ignores the comment when executing the program.",
      "A helpful comment records information that a reader cannot infer easily from the expression, such as why two seats have been set aside. A hash mark inside quotation marks is ordinary text.",
    ],
    examples: [{
      title: "Explain reserved seating",
      code: `capacity = 18
# Keep two seats available for facilitators.
print("Room #3:", capacity - 2)`,
      result: "Room #3: 16. The hash inside the room label appears in the output.",
    }],
    quizzes: [{
      question: "What happens if you delete only the comment line?",
      options: ["The output stays Room #3: 16","Capacity becomes 16","Python stops at the hash in the room label"],
      answer: 0,
      explanation: "The calculation uses the literal 2, so removing the explanatory comment leaves the statement intact.",
    }],
  },
  {
    title: "Python Variables",
    summary: "Follow a name as it is assigned a different value.",
    content: [
      "Assignment binds a name to the object produced by the expression on the right. On a later assignment Python evaluates the right-hand side before updating the binding.",
      "When two names initially refer to the same integer, rebinding one leaves the other pointing to the earlier value. Use names that make the distinction clear to someone reading the calculation.",
    ],
    examples: [{
      title: "Keep a copy of the starting stock",
      code: `stock = 9
opening_stock = stock
stock = stock - 2
print(opening_stock, stock)`,
      result: "9 7. opening_stock still refers to the original integer.",
    }],
    quizzes: [{
      question: "What does opening_stock contain after one more stock = stock - 2?",
      options: ["5","7","9"],
      answer: 2,
      explanation: "Only stock is rebound by the later assignment.",
    }],
  },
  {
    title: "Python Data Types",
    summary: "Choose a representation that matches the meaning of a value.",
    content: [
      "A value's type determines which operations it supports. Text can hold identifiers with leading zeros, while an integer represents a quantity you can add to.",
      "Use type to inspect an unfamiliar value. The operation + concatenates two strings or adds two numbers, so how you represent the inputs changes the result.",
    ],
    examples: [{
      title: "Distinguish a locker ID from a count",
      code: `locker = "007"
count = 7
print(type(locker).__name__, locker + "1")
print(type(count).__name__, count + 1)`,
      result: "The two lines are str 0071 and int 8.",
    }],
    quizzes: [{
      question: "Which representation preserves the locker label exactly?",
      options: ["The integer 7","The string '007'","The float 7.0"],
      answer: 1,
      explanation: "The string stores each character, including both leading zeros.",
    }],
  },
  {
    title: "Python Numbers",
    summary: "Use division, floor division and remainder for quantities.",
    content: [
      "Python integers represent whole numbers. Ordinary division with / produces a floating-point quotient from two integers. Floor division with // rounds down, and % supplies the corresponding remainder.",
      "For positive quantities, divmod returns the number of complete groups and the number of items left over. Multiplying the group count by the group size and adding the remainder reconstructs the starting quantity.",
    ],
    examples: [{
      title: "Pack envelopes in bundles of ten",
      code: `bundles, loose = divmod(37, 10)
print(bundles, loose)
print(37 / 10)`,
      result: "3 7 on the first line means three bundles and seven loose envelopes. The second line shows 3.7.",
    }],
    quizzes: [{
      question: "Which expression gives the loose envelopes for a batch of 46?",
      options: ["46 / 10","46 // 10","46 % 10"],
      answer: 2,
      explanation: "The remainder is 6 after four complete bundles.",
    }],
  },
  {
    title: "Python Casting",
    summary: "Convert numeric text before calculating with it.",
    content: [
      "Constructors such as int, float and str create values in a chosen representation. int accepts a string of integer digits with an optional sign. float also accepts decimal text.",
      "Check the format you expect from your input. int('3.5') raises ValueError, while int(3.5) accepts the float and truncates toward zero.",
    ],
    examples: [{
      title: "Calculate a length from printed measurements",
      code: `pieces = int("4")
length = float("2.5")
print(pieces * length)`,
      result: "10.0. The string inputs become numbers before multiplication.",
    }],
    quizzes: [{
      question: "Which conversion accepts the text '2.5' directly?",
      options: ["float('2.5')","int('2.5')","int('2.5', 10)"],
      answer: 0,
      explanation: "The decimal point belongs to a floating-point representation.",
    }],
  },
  {
    title: "Python Strings",
    summary: "Take slices of a label without changing the original text.",
    content: [
      "A string is an immutable sequence of Unicode code points. Index zero selects the first character. A slice uses a start index and an excluded stop index, and omitted bounds extend to the corresponding end.",
      "A method such as lower returns another string. Combine it with a slice to normalize just one part of an identifier.",
    ],
    examples: [{
      title: "Split a shelf code",
      code: `code = "MAP-204"
print(code[:3].lower())
print(code[4:])`,
      result: "map and 204 appear on separate lines. The original label stays MAP-204.",
    }],
    quizzes: [{
      question: "What does code[3:5] return?",
      options: ["P-","-2","20"],
      answer: 1,
      explanation: "Index 3 holds the hyphen, index 4 holds 2, and index 5 is excluded.",
    }],
  },
  {
    title: "Python Booleans",
    summary: "Use a comparison when the meaning of a text value matters.",
    content: [
      "Comparisons evaluate to True or False. Conditions can also test a value directly. Empty strings and zero are false in a truth test, while a string containing any characters is true.",
      "A form may send 'no' as text. Compare normalized text with the expected answer to decide whether the user agreed.",
    ],
    examples: [{
      title: "Interpret a written answer",
      code: `reply = " No "
print(bool(reply))
print(reply.strip().lower() == "yes")`,
      result: "The first line is True because the string contains characters. The second is False because the normalized answer is no.",
    }],
    quizzes: [{
      question: "Which input makes both printed values True?",
      options: ["An empty string","'False'","' YES '"],
      answer: 2,
      explanation: "The input is nonempty and normalizes to yes.",
    }],
  },
  {
    title: "Python Operators",
    summary: "Combine arithmetic and a comparison to test a budget.",
    content: [
      "Arithmetic operators produce numbers, comparison operators test relationships, and the Boolean operators and, or and not combine conditions. Python performs multiplication before addition and evaluates a comparison after the arithmetic on either side.",
      "Parentheses make the intended grouping visible. Calculate the total once and give it a name when several decisions use it.",
    ],
    examples: [{
      title: "Check an order against two limits",
      code: `tickets = 3
total = tickets * 8 + 2
print(total, total <= 30 and tickets <= 4)`,
      result: "26 True. The order costs 26 including the single booking fee and meets both limits.",
    }],
    quizzes: [{
      question: "At four tickets, which condition fails?",
      options: ["total <= 30","tickets <= 4","Both conditions fail"],
      answer: 0,
      explanation: "Four tickets cost 34 with the fee. The ticket count still clears its limit.",
    }],
  },
  {
    title: "Python Lists",
    summary: "Edit an ordered collection and recognize shared references.",
    content: [
      "A list keeps items in order and supports indexing, replacement and append. Assigning a list to another name gives you two references to the same list.",
      "Use copy to make a separate outer list before changing its contents. When a list contains other lists, a shallow copy still shares those nested objects.",
    ],
    examples: [{
      title: "Revise a draft packing list",
      code: `original = ["map", "pen"]
draft = original.copy()
draft[1] = "pencil"
draft.append("tape")
print(original)
print(draft)`,
      result: "The first list contains map and pen. The draft contains map, pencil and tape.",
    }],
    quizzes: [{
      question: "If draft = original replaced the copy, what would original contain at the end?",
      options: ["['map', 'pen']","['map', 'pencil', 'tape']","['tape']"],
      answer: 1,
      explanation: "Both variables would refer to the same list, so both edits would be visible through original.",
    }],
  },
  {
    title: "Python Tuples",
    summary: "Unpack a fixed group of values by position.",
    content: [
      "A tuple groups values in order. You can read and unpack its slots, but you cannot assign a new value to a slot. Tuples are useful for small records where the positions have agreed meanings.",
      "The comma creates a one-item tuple. In an unpacking assignment, match the number of target names to the number of items, or use a starred target to collect the rest.",
    ],
    examples: [{
      title: "Read the coordinates of a seat",
      code: `seat = ("B", 12)
row, number = seat
print(row, number)
print(len(("B",)))`,
      result: "The program prints B 12, then 1 for the length of the one-item tuple.",
    }],
    quizzes: [{
      question: "Which expression creates a one-item tuple?",
      options: ["('B')","tuple()","('B',)"],
      answer: 2,
      explanation: "The trailing comma turns the single expression into a tuple.",
    }],
  },
  {
    title: "Python Sets",
    summary: "Use set operations to compare group membership.",
    content: [
      "Sets store distinct hashable elements. They suit questions about membership and overlap. Duplicate additions leave the membership unchanged.",
      "Intersection (&) selects items in both groups. Difference (-) selects members of the left group missing from the right. Sort the results when you want a predictable display order.",
    ],
    examples: [{
      title: "Find returning workshop participants",
      code: `monday = {"Ari", "Bo", "Lee"}
friday = {"Bo", "Lee", "Kim"}
print(sorted(monday & friday))
print(sorted(friday - monday))`,
      result: "The returning names are ['Bo', 'Lee']. The new Friday attendee is ['Kim'].",
    }],
    quizzes: [{
      question: "Which expression finds participants who attended either day?",
      options: ["monday | friday","monday & friday","monday - friday"],
      answer: 0,
      explanation: "The union operator | collects every distinct member from either set.",
    }],
  },
  {
    title: "Python Dictionaries",
    summary: "Count occurrences by updating the value at a key.",
    content: [
      "A dictionary associates each unique key with one value. Use indexing to read a key you know exists. get can supply an initial value when a key is missing.",
      "To build a frequency table, read the old count, add one and store the new count under the same key. Each distinct item then has its own running total.",
    ],
    examples: [{
      title: "Tally drink orders",
      code: `counts = {}
for drink in ["tea", "water", "tea"]:
    counts[drink] = counts.get(drink, 0) + 1
print(counts)`,
      result: "The result is {'tea': 2, 'water': 1}.",
    }],
    quizzes: [{
      question: "Why supply 0 to get?",
      options: ["It resets an existing count","It starts a missing drink at zero","It removes missing keys"],
      answer: 1,
      explanation: "The fallback is used only if the key is missing, so its first order becomes count 1.",
    }],
  },
  {
    title: "Python If...Else",
    summary: "Put overlapping conditions in the order you want them tested.",
    content: [
      "An if/elif/else chain executes the first branch whose condition is true. The optional else handles values that reached the end without matching.",
      "When higher scores qualify for several thresholds, test the highest threshold first. Trace values exactly on each boundary to see whether the comparison includes them.",
    ],
    examples: [{
      title: "Assign a workshop level",
      code: `score = 80
if score >= 80:
    level = "advanced"
elif score >= 60:
    level = "intermediate"
else:
    level = "foundation"
print(level)`,
      result: "The result is advanced because the first threshold includes 80.",
    }],
    quizzes: [{
      question: "What happens to score 85 if the >= 60 branch is tested first and assigns intermediate?",
      options: ["It reaches both branches","It skips both branches","It receives intermediate"],
      answer: 2,
      explanation: "An if chain stops at its first matching condition.",
    }],
  },
  {
    title: "Python Match",
    summary: "Branch on the shape and contents of a value.",
    content: [
      "In Python 3.10 or later, match checks a subject against case patterns in order. Literal strings match those values exactly. A name within a pattern can capture a part of the subject.",
      "The tuple pattern below checks the command name and saves its argument in count. The wildcard case accepts any subject that reaches it.",
    ],
    examples: [{
      title: "Read a command with an argument",
      code: `command = ("repeat", 3)
match command:
    case ("repeat", count):
        print("go " * count, end="\\n")
    case _:
        print("Unknown command")`,
      result: "The first case prints go three times on one line, separated by spaces.",
    }],
    quizzes: [{
      question: "What does the command ('stop', 3) print?",
      options: ["Unknown command","go go go","3"],
      answer: 0,
      explanation: "The first element differs from the literal 'repeat', so execution reaches the wildcard case.",
    }],
  },
  {
    title: "Python While Loops",
    summary: "Repeat a step while a condition remains true.",
    content: [
      "A while loop tests its condition before each iteration. Its body may run zero times. Identify which value changes in the body and how that change eventually makes the condition false.",
      "Follow the counter one step beyond its last printed value. This reveals the difference between the last iteration and the state when the loop exits.",
    ],
    examples: [{
      title: "Count down to opening time",
      code: `minutes = 3
while minutes > 0:
    print(minutes)
    minutes -= 1
print("Open")`,
      result: "3, 2, 1 and Open appear on successive lines.",
    }],
    quizzes: [{
      question: "Which value does minutes hold when Open is printed?",
      options: ["1","0","-1"],
      answer: 1,
      explanation: "The update after printing 1 produces 0. The next condition check ends the loop.",
    }],
  },
  {
    title: "Python For Loops",
    summary: "Visit each item and attach a display position with enumerate.",
    content: [
      "A for loop requests successive items from an iterable. When the iterable is a list, the items arrive in list order. An empty list results in zero iterations.",
      "enumerate pairs each item with a counter. Set start=1 for display numbers while keeping the underlying list unchanged.",
    ],
    examples: [{
      title: "Number the stops on a route",
      code: `stops = ["Depot", "Park", "Museum"]
for number, stop in enumerate(stops, start=1):
    print(number, stop)`,
      result: "The route reads 1 Depot, 2 Park and 3 Museum on separate lines.",
    }],
    quizzes: [{
      question: "What changes if start=1 is omitted?",
      options: ["The first stop is skipped","The list is reversed","The first displayed number is 0"],
      answer: 2,
      explanation: "enumerate starts counting at zero by default and still visits every item.",
    }],
  },
  {
    title: "Python Functions",
    summary: "Separate a calculation from the code that displays it.",
    content: [
      "A def statement defines a function. Calling it binds the arguments to local parameter names. A default parameter supplies a value when the caller omits that argument.",
      "return sends a value back to the caller and ends the call. Returning the calculation makes it possible to reuse the result in another expression.",
    ],
    examples: [{
      title: "Calculate space for two tables",
      code: `def seats(tables, per_table=4):
    return tables * per_table

regular = seats(2)
print(regular + seats(1, per_table=6))`,
      result: "14. The two regular tables seat eight, and the larger table seats six.",
    }],
    quizzes: [{
      question: "Which call returns 12?",
      options: ["seats(3)","seats(3, 3)","seats(4, 4)"],
      answer: 0,
      explanation: "Three tables at the default capacity of four provide twelve seats.",
    }],
  },
  {
    title: "Python Range",
    summary: "Generate evenly spaced integers with an excluded endpoint.",
    content: [
      "range accepts a stop value, or a start and stop, with an optional step. The start is included if it is within the bounds. The stop is always excluded.",
      "A negative step moves downward. The range object represents the sequence compactly, and list makes its individual values visible for inspection.",
    ],
    examples: [{
      title: "List the even floors on a descent",
      code: `floors = range(8, 1, -2)
print(list(floors))
print(len(floors))`,
      result: "[8, 6, 4, 2] and 4. The next step would be 0, past the stopping boundary.",
    }],
    quizzes: [{
      question: "How do you also include floor 0?",
      options: ["range(8, 0, -2)","range(8, -1, -2)","range(8, 1, 2)"],
      answer: 1,
      explanation: "Setting the excluded bound below zero allows zero to be generated.",
    }],
  },
  {
    title: "Python Arrays",
    summary: "Store same-type numbers in a standard-library array.",
    content: [
      "The array module stores primitive values using a type code. For example, 'i' selects signed integers. Arrays support indexing and append, and reject values incompatible with their chosen representation.",
      "Choose this representation for a compact series of values of one numeric type. For numerical operations over whole arrays, see the NumPy Tutorial in the Python Modules chapter.",
    ],
    examples: [{
      title: "Record meter readings",
      code: `from array import array

readings = array("i", [10, 13])
readings.append(17)
print(readings[-1] - readings[0])`,
      result: "The difference between the last and first readings is 7.",
    }],
    quizzes: [{
      question: "Which addition is compatible with this array?",
      options: ["readings.append('21')","readings.append([21])","readings.append(21)"],
      answer: 2,
      explanation: "Type code 'i' accepts an integer within its supported range.",
    }],
  },
  {
    title: "Python Iterators",
    summary: "Track consumption when reading one value at a time.",
    content: [
      "iter creates an iterator over an iterable such as a list. Each next call advances the iterator. A for loop uses the same protocol and stops automatically at exhaustion.",
      "Calling next on an exhausted iterator normally raises StopIteration. Pass a second argument if the end of the stream should produce a chosen fallback value.",
    ],
    examples: [{
      title: "Serve the next two ticket numbers",
      code: `tickets = iter([41, 42])
print(next(tickets))
print(list(tickets))
print(next(tickets, "sold out"))`,
      result: "The lines show 41, [42] and sold out. Converting the remainder to a list consumes it.",
    }],
    quizzes: [{
      question: "What would a second list(tickets) return?",
      options: ["[]","[41, 42]","[42]"],
      answer: 0,
      explanation: "An exhausted iterator stays exhausted. Create another iterator from the original collection to start over.",
    }],
  },
  {
    title: "Python Modules",
    summary: "Share a function between two Python files.",
    content: [
      "A .py file can be imported as a module. Its top-level names become attributes of the imported module. Put related functions together so several programs can reuse the same implementation.",
      "Save the two labeled parts of this example as separate files in one folder and run python receipt.py from there. Python locates the neighboring prices module and the caller uses a qualified function name.",
    ],
    examples: [{
      title: "Calculate a receipt with a neighboring module",
      code: `# prices.py
def subtotal(quantity, unit_price):
    return quantity * unit_price

# receipt.py (save separately)
import prices

print(prices.subtotal(3, 7))`,
      result: "Running receipt.py prints 21.",
    }],
    quizzes: [{
      question: "After import prices, which expression calls the helper?",
      options: ["prices(3, 7)","prices.subtotal(3, 7)","import.subtotal(3, 7)"],
      answer: 1,
      explanation: "The name prices refers to the imported module, and subtotal is a function defined in it.",
    }],
  },
  {
    title: "Python Dates",
    summary: "Add a duration to a date and let the calendar handle rollover.",
    content: [
      "The datetime module provides date for calendar days and timedelta for durations. Subtracting two date values returns a duration. Adding a day-based duration to a date gives another date.",
      "Working with date objects handles month lengths and leap years. Convert the result to an ISO string when you want a year-month-day label.",
    ],
    examples: [{
      title: "Find a three-day loan deadline",
      code: `from datetime import date, timedelta

opened = date(2024, 2, 27)
due = opened + timedelta(days=3)
print(due.isoformat())
print((due - opened).days)`,
      result: "The due date is 2024-03-01 and the elapsed duration is 3 days. February 2024 includes a leap day.",
    }],
    quizzes: [{
      question: "Which expression returns the duration between the two dates?",
      options: ["due.isoformat()","opened + due","due - opened"],
      answer: 2,
      explanation: "Subtracting one date from another produces a timedelta.",
    }],
  },
  {
    title: "Python Math",
    summary: "Round a quantity up when a partial group needs a whole unit.",
    content: [
      "Built-ins such as min, max and abs cover common calculations. The math module adds functions such as ceil, floor and sqrt for real-valued arithmetic.",
      "A packing decision often needs the smallest whole number large enough to hold everything. ceil rounds a quotient upward even when an extra box will hold only one item.",
    ],
    examples: [{
      title: "Order boxes for prints",
      code: `import math

prints = 25
per_box = 6
print(math.ceil(prints / per_box))
print(max(0, 6 * 5 - prints))`,
      result: "Five boxes are needed, leaving five empty spaces.",
    }],
    quizzes: [{
      question: "Why would round(25 / 6) undercount the boxes?",
      options: ["The nearest integer is 4, which holds only 24 prints","round always rounds up","ceil discards the remainder"],
      answer: 0,
      explanation: "Packing the twenty-fifth print requires a fifth box even though the quotient is closer to four.",
    }],
  },
  {
    title: "Python JSON",
    summary: "Convert between JSON text and Python objects.",
    content: [
      "JSON represents objects, arrays, strings, numbers, booleans and null as portable text. json.loads parses a string into Python values. A JSON object becomes a dictionary and a JSON array becomes a list.",
      "Edit the parsed data with normal Python operations, then use json.dumps to serialize it. Use load and dump with open file objects when storing JSON on disk.",
    ],
    examples: [{
      title: "Update a reading list",
      code: `import json

record = json.loads('{"books": ["Atlas"], "public": false}')
record["books"].append("Tides")
print(json.dumps(record))`,
      result: "{\"books\": [\"Atlas\", \"Tides\"], \"public\": false}. The stored Boolean appears in JSON spelling.",
    }],
    quizzes: [{
      question: "What Python value does JSON false become?",
      options: ["'false'","False","0.0"],
      answer: 1,
      explanation: "The JSON decoder maps the Boolean token false to Python's False.",
    }],
  },
  {
    title: "Python RegEx",
    summary: "Extract repeated patterns from text with a regular expression.",
    content: [
      "Use the re module to match patterns whose exact contents vary. Square brackets specify a character class and a repetition count such as {2} sets the required length. A raw string preserves backslashes in the pattern.",
      "findall returns all non-overlapping matches. Word boundaries on either side help avoid picking a short code out of the middle of a longer word.",
    ],
    examples: [{
      title: "Extract shelf identifiers",
      code: `import re

note = "Check AB-12, CD-08 and XAB-123."
codes = re.findall(r"\\b[A-Z]{2}-[0-9]{2}\\b", note)
print(codes)`,
      result: "['AB-12', 'CD-08']. XAB-123 has extra letters and digits, so the bounded pattern skips it.",
    }],
    quizzes: [{
      question: "Which item matches the pattern as a whole?",
      options: ["A-123","ab-12","ZX-90"],
      answer: 2,
      explanation: "Two uppercase ASCII letters, a hyphen and two digits match each part in order.",
    }],
  },
  {
    title: "Python PIP",
    summary: "Inspect and install packages for the interpreter you are using.",
    content: [
      "pip installs Python packages into an environment. Running it as python -m pip selects the pip associated with that python command. Use your project environment so its dependencies are easy to identify.",
      "In the terminal, install the package you intend to use and then inspect the installed distribution. Installation needs access to the package index or a local copy of the package.",
    ],
    examples: [{
      title: "Install and inspect Requests in a project environment",
      code: `python -m pip install requests
python -m pip show requests`,
      result: "After a successful install, show prints metadata including Requests' installed version and location.",
    }],
    quizzes: [{
      question: "What does python -m pip show requests tell you?",
      options: ["The installed package's version and location","The response from a website","All future versions of the package"],
      answer: 0,
      explanation: "show reads the distribution metadata in the selected environment.",
    }],
  },
  {
    title: "Python Try...Except",
    summary: "Handle a conversion failure at the point where it can occur.",
    content: [
      "Put an operation that can fail inside try and handle the expected exception type with except. A separate else block runs when the try block completes successfully.",
      "Keep the try block focused so a conversion handler only responds to a failed conversion. A finally block, if present, runs as control leaves the statement and is useful for cleanup.",
    ],
    examples: [{
      title: "Validate an integer label",
      code: `text = "3B"
try:
    room = int(text)
except ValueError:
    print("Use digits for the room number")
else:
    print("Room", room)`,
      result: "3B cannot be parsed as an integer, so the program prints Use digits for the room number.",
    }],
    quizzes: [{
      question: "Which block prints Room 12 when text is '12'?",
      options: ["except","finally","else"],
      answer: 2,
      explanation: "The conversion succeeds, so the else block receives the assigned room number.",
    }],
  },
  {
    title: "Python String Formatting",
    summary: "Use format specifications to control a value's display.",
    content: [
      "An f-string evaluates expressions in braces. A colon within the braces introduces a format specification for the resulting value. For example, .2f requests exactly two decimal places.",
      "Formatting affects the displayed string. Keep using the original numeric value for arithmetic so intermediate display rounding does not alter later calculations.",
    ],
    examples: [{
      title: "Print a unit price and a percentage",
      code: `price = 7.5
filled = 3 / 8
print(f"Price: {price:.2f}")
print(f"Full: {filled:.1%}")`,
      result: "Price: 7.50 and Full: 37.5% appear on separate lines.",
    }],
    quizzes: [{
      question: "Which specification displays 0.4 as 40%?",
      options: [".2f",".0%",".0f"],
      answer: 1,
      explanation: "Percent formatting multiplies by 100 and appends the percent sign. Precision zero requests no decimal places.",
    }],
  },
  {
    title: "Python None",
    summary: "Distinguish a missing reading from a measured zero.",
    content: [
      "None is a singleton that can represent an absent value. Functions that reach their end without returning a value return None. A dictionary lookup with get also returns None by default when the key is absent.",
      "Use is None when zero, an empty string or an empty collection could be a legitimate result. A general truth test would group those values together with None.",
    ],
    examples: [{
      title: "Report a sensor with a valid zero reading",
      code: `readings = {"rain_mm": 0}
for key in ["rain_mm", "wind_kph"]:
    value = readings.get(key)
    if value is None:
        print(key, "missing")
    else:
        print(key, value)`,
      result: "The output reports rain_mm 0 and wind_kph missing.",
    }],
    quizzes: [{
      question: "Why would if not value give a misleading result here?",
      options: ["It converts every number to a string","It treats missing keys as errors","Both zero and None are false in a truth test"],
      answer: 2,
      explanation: "Zero records a real measurement, so the test must distinguish its identity from None.",
    }],
  },
  {
    title: "Python User Input",
    summary: "Turn a terminal response into a validated quantity.",
    content: [
      "input displays a prompt, waits for one line and returns its text without the trailing newline. Convert the text explicitly when you need arithmetic.",
      "A conversion check and a range check answer different questions. Catch ValueError for text that cannot be parsed, then decide whether the parsed quantity is allowed.",
    ],
    examples: [{
      title: "Request a positive seat count",
      code: `reply = input("Seats requested: ")
try:
    seats = int(reply)
except ValueError:
    print("Enter a whole number")
else:
    print("Request recorded" if seats > 0 else "Enter at least one seat")`,
      result: "Typing 3 prints Request recorded, typing 0 asks for at least one seat, and typing three asks for a whole number.",
    }],
    quizzes: [{
      question: "Which input reaches the range check and fails it?",
      options: ["'-2'","'two'","'5'"],
      answer: 0,
      explanation: "-2 parses as an integer but does not satisfy seats > 0.",
    }],
  },
  {
    title: "Python VirtualEnv",
    summary: "Create an isolated environment for one project's packages.",
    content: [
      "Run the standard-library venv module from your project folder to create a .venv directory. The environment uses the Python version that created it and has its own package installation location by default.",
      "Use the environment's interpreter directly, or activate it to make python select it in the current shell. The example uses Windows PowerShell. On macOS or Linux use .venv/bin/python in place of the Windows interpreter path.",
    ],
    examples: [{
      title: "Check a fresh project environment in PowerShell",
      code: `python -m venv .venv
.\\.venv\\Scripts\\python.exe -c "import sys; print(sys.prefix != sys.base_prefix)"
.\\.venv\\Scripts\\python.exe -m pip --version`,
      result: "True confirms the interpreter is running in a virtual environment. The pip output includes the environment's installation path.",
    }],
    quizzes: [{
      question: "Which command installs a package into this Windows environment without activation?",
      options: [".\\.venv\\Scripts\\python.exe -m pip install requests","python -m venv requests","pip show requests"],
      answer: 0,
      explanation: "Calling the environment's interpreter selects its package installation directly.",
    }],
    reading: { title: "Python's guide to virtual environments", url: "https://docs.python.org/3/tutorial/venv.html" },
  },
]);
