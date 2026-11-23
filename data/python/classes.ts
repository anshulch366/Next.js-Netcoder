import { pythonChapter } from "./chapter";

export const classes = pythonChapter("Python Classes", "Intermediate", [
  {
    title: "Python OOP",
    summary: "Model a real operation by keeping its data and behavior together.",
    content: [
      "A class lets you define a type whose objects have state and operations. Ask what an object needs to remember between calls. A counter needs a total, and recording a visit changes that total.",
      "Give each counter its own initial state. Calling a method on the same instance twice lets the second call use the value left by the first.",
    ],
    examples: [{
      title: "Count visits at a museum door",
      code: `class DoorCounter:
    def __init__(self):
        self.visits = 0

    def record_visit(self):
        self.visits += 1

entrance = DoorCounter()
entrance.record_visit()
entrance.record_visit()
print(entrance.visits)`,
      result: "The counter prints 2 because both visits were recorded on entrance.",
    }],
    quizzes: [{
      question: "Where should each door's visit total live?",
      options: ["In a shared global total","On the individual DoorCounter instance","In a new local variable on every call"],
      answer: 1,
      explanation: "An instance attribute persists across calls and gives each door its own count.",
    }],
  },
  {
    title: "Python Classes/Objects",
    summary: "Distinguish a class from two objects created from it.",
    content: [
      "Executing a class statement defines a class. Calling that class creates an instance. Even if two instances have attributes with identical values, each can carry independent state.",
      "Attribute lookup can find values on the class. Assigning an ordinary attribute on an instance gives that instance a value of its own.",
    ],
    examples: [{
      title: "Label two exhibition rooms",
      code: `class Room:
    label = "Available"

east = Room()
west = Room()
east.label = "Booked"
print(east.label, west.label)`,
      result: "Booked Available. Only east has its own label, so west still reads the class default.",
    }],
    quizzes: [{
      question: "What will a newly created Room().label return?",
      options: ["Booked","None","Available"],
      answer: 2,
      explanation: "Creating a new instance leaves it using the class's default label.",
    }],
  },
  {
    title: "Python __init__ Method",
    summary: "Initialize each instance with the arguments supplied by its caller.",
    content: [
      "When a class creates an instance in the usual way, Python calls __init__ on that new object. Use it to set attributes needed by later methods. An initializer must return None, normally by reaching the end.",
      "Create mutable per-instance values inside __init__. Each new list in this example belongs to a single sketchbook, even when two sketchbooks have the same owner.",
    ],
    examples: [{
      title: "Give each sketchbook its own pages",
      code: `class Sketchbook:
    def __init__(self, owner):
        self.owner = owner
        self.pages = []

first = Sketchbook("Ari")
second = Sketchbook("Ari")
first.pages.append("bridge")
print(first.owner, second.pages)`,
      result: "Ari []. Adding a page to first leaves the pages of second empty.",
    }],
    quizzes: [{
      question: "Why do the two books have separate page lists?",
      options: ["Each __init__ call creates a fresh list","Their owners are different","append automatically copies lists"],
      answer: 0,
      explanation: "Evaluating [] inside the initializer allocates a list for that specific call.",
    }],
  },
  {
    title: "Python self Parameter",
    summary: "Trace how an instance method receives the object it acts on.",
    content: [
      "During an instance method call such as bell.ring(), Python supplies bell as the first argument to the underlying function. By convention, name that parameter self.",
      "Use self.attribute to read or change the instance. A bare assignment inside the function usually creates a local variable whose binding ends with the call.",
    ],
    examples: [{
      title: "Ring the same bell in two ways",
      code: `class Bell:
    def __init__(self):
        self.rings = 0

    def ring(self):
        self.rings += 1

bell = Bell()
bell.ring()
Bell.ring(bell)
print(bell.rings)`,
      result: "2. The two call forms deliver the same bell to the method.",
    }],
    quizzes: [{
      question: "What is self during bell.ring()?",
      options: ["The class name as text","The bell instance","The current count"],
      answer: 1,
      explanation: "Retrieving the method through bell binds that instance to the method call.",
    }],
  },
  {
    title: "Python Class Properties",
    summary: "Combine a shared class attribute with a computed property.",
    content: [
      "An attribute defined in the class body can hold a shared setting. Store measurements that vary per instance on self. Together these values describe each individual object.",
      "The @property decorator exposes a method through attribute access. Here centimeters is calculated from the current millimeters every time it is read, which keeps the two quantities in sync.",
    ],
    examples: [{
      title: "Read a length in two units",
      code: `class Ruler:
    unit = "cm"

    def __init__(self, millimeters):
        self.millimeters = millimeters

    @property
    def centimeters(self):
        return self.millimeters / 10

ruler = Ruler(35)
print(ruler.centimeters, Ruler.unit)
ruler.millimeters = 50
print(ruler.centimeters)`,
      result: "The first line is 3.5 cm. The second is 5.0 after the measurement changes.",
    }],
    quizzes: [{
      question: "How do you read the calculated property?",
      options: ["ruler.centimeters()","Ruler.centimeters(35)","ruler.centimeters"],
      answer: 2,
      explanation: "The property invokes its getter when accessed through the instance.",
    }],
  },
  {
    title: "Python Class Methods",
    summary: "Use a class method to build an object from another representation.",
    content: [
      "An ordinary instance method receives the instance as its first argument. A @classmethod receives the class, conventionally called cls, even when called through an instance.",
      "An alternate constructor parses input and returns cls(...). Calling the method on a compatible subclass then creates an instance of that subclass. Use @staticmethod when a helper needs neither an instance nor a class.",
    ],
    examples: [{
      title: "Read a point from a label",
      code: `class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    @classmethod
    def from_label(cls, label):
        x, y = label.split(",")
        return cls(int(x), int(y))

point = Point.from_label("4,7")
print(point.x + point.y)`,
      result: "The method constructs a point with integer coordinates 4 and 7. Their sum is 11.",
    }],
    quizzes: [{
      question: "Why call cls(...) inside the method?",
      options: ["To construct the class the method was called on","To split a string at commas","To create an integer coordinate"],
      answer: 0,
      explanation: "Python passes the receiving class as cls, so the constructor follows that class.",
    }],
  },
  {
    title: "Python Magic Methods",
    summary: "Connect a custom type to built-in operations.",
    content: [
      "Python recognizes special methods with double underscores on each side of the name. For example, len(obj) asks the object's type for __len__, and str(obj) uses its string representation.",
      "Implement a method only when the operation has a clear meaning for your type. __len__ must supply a nonnegative integer. For a playlist the natural length is the number of tracks.",
    ],
    examples: [{
      title: "Measure and display a playlist",
      code: `class Playlist:
    def __init__(self, tracks):
        self.tracks = list(tracks)

    def __len__(self):
        return len(self.tracks)

    def __str__(self):
        return " / ".join(self.tracks)

mix = Playlist(["Rain", "Dawn"])
print(len(mix))
print(mix)`,
      result: "The output is 2 followed by Rain / Dawn. print uses the playlist's string representation.",
    }],
    quizzes: [{
      question: "Which implementation makes len(mix) report a third track after one is appended?",
      options: ["return 'three'","return len(self.tracks)","return 2"],
      answer: 1,
      explanation: "Computing the current track count keeps length tied to the collection.",
    }],
  },
  {
    title: "Python Inheritance",
    summary: "Extend a base class's behavior while reusing its implementation.",
    content: [
      "A subclass inherits methods and attributes from its bases. Defining a method with the same name overrides the inherited behavior when called on the subclass.",
      "super() lets the override delegate part of the work through the method resolution order. In this single-inheritance example the base creates a label, then the subclass adds its own prefix.",
    ],
    examples: [{
      title: "Print a badge for a guide",
      code: `class Badge:
    def label(self):
        return "Museum"

class GuideBadge(Badge):
    def label(self):
        return "Guide | " + super().label()

print(Badge().label())
print(GuideBadge().label())`,
      result: "Museum appears on the first line and Guide | Museum on the second.",
    }],
    quizzes: [{
      question: "If the base label changes to Gallery, what will GuideBadge display?",
      options: ["Guide | Museum","Gallery","Guide | Gallery"],
      answer: 2,
      explanation: "The override calls the base implementation each time before adding its prefix.",
    }],
  },
  {
    title: "Python Polymorphism",
    summary: "Call the same operation on objects with different implementations.",
    content: [
      "Python can use an object through the operations it supports. Two unrelated classes can each implement a label method, allowing one loop to display both through the same interface.",
      "Keep the expected call signature and return meaning consistent. The loop can then let each object decide how to produce its own label.",
    ],
    examples: [{
      title: "Display two kinds of signs",
      code: `class DoorSign:
    def label(self):
        return "Entrance"

class DeskSign:
    def label(self):
        return "Information"

for sign in [DoorSign(), DeskSign()]:
    print(sign.label())`,
      result: "The signs display Entrance and Information in list order.",
    }],
    quizzes: [{
      question: "What does a third sign need to work with this loop?",
      options: ["A label() method callable without extra arguments","A subclass relationship with DoorSign","An attribute named Entrance"],
      answer: 0,
      explanation: "The loop calls label on the current object and prints the returned value.",
    }],
  },
  {
    title: "Python Encapsulation",
    summary: "Put rules for changing state inside a small public interface.",
    content: [
      "A class can keep related validation and state updates together. A leading underscore marks an attribute as an implementation detail by convention. Other code should use the supported operations.",
      "Here reserve validates the request before changing the seat count, and a property exposes the count for reading. A failed reservation leaves the previous value intact.",
    ],
    examples: [{
      title: "Reserve only available seats",
      code: `class Bench:
    def __init__(self):
        self._free = 3

    @property
    def free(self):
        return self._free

    def reserve(self, seats):
        if 0 < seats <= self._free:
            self._free -= seats
            return True
        return False

bench = Bench()
print(bench.reserve(2), bench.reserve(2), bench.free)`,
      result: "True False 1. The first request takes two seats, and the next request exceeds the remaining capacity.",
    }],
    quizzes: [{
      question: "Why check seats > 0 before subtraction?",
      options: ["To make every request succeed","To prevent a negative request from increasing availability","To hide the property from callers"],
      answer: 1,
      explanation: "Subtracting a negative number would add seats and violate the capacity rule.",
    }],
  },
  {
    title: "Python Inner Classes",
    summary: "Give a related helper type a name inside its enclosing class.",
    content: [
      "A class defined inside another class is stored as an attribute of the outer class. Use Outer.Inner to refer to that type. Nesting can show that the type has a specific role in the enclosing design.",
      "An inner instance does not receive an outer instance automatically. If it needs information from a particular outer object, pass that information explicitly.",
    ],
    examples: [{
      title: "Attach an entry type to a notebook",
      code: `class Notebook:
    class Entry:
        def __init__(self, text):
            self.text = text

    def __init__(self):
        self.entries = []

    def add(self, text):
        self.entries.append(self.Entry(text))

book = Notebook()
book.add("Check the tide")
print(book.entries[0].text)`,
      result: "The notebook holds one Notebook.Entry and prints Check the tide.",
    }],
    quizzes: [{
      question: "Which expression constructs an entry directly?",
      options: ["Notebook('note')","Notebook.entries('note')","Notebook.Entry('note')"],
      answer: 2,
      explanation: "The nested class is available on the enclosing class under the name Entry.",
    }],
  },
]);
