import { javaChapter, javaProgram } from "./chapter";

export const classes = javaChapter("Java Classes", "Intermediate", [
  {
    title: "Java OOP",
    summary: "Group the state of an object with operations that change it.",
    content: [
      "Imagine counting visitors at two entrances. Each entrance needs its own count that survives from one visitor to the next. A class defines what every counter stores and what it can do.",
      "The arrive method changes the count of the receiver, the object to the left of the dot. Calling it on the east counter twice affects the east counter on both calls.",
    ],
    examples: [{
      title: "Count visitors at separate entrances",
      code: javaProgram(`Counter east = new Counter();
Counter west = new Counter();
east.arrive();
east.arrive();
west.arrive();
System.out.println(east.count() + " east, " + west.count() + " west");`, [], `static class Counter {
    private int visitors;

    void arrive() {
        visitors++;
    }

    int count() {
        return visitors;
    }
}`),
      result: "2 east, 1 west. Each counter holds its own visitors field.",
    }],
    quizzes: [{
      question: "Which expression records a second visit at the west entrance?",
      options: ["new Counter()", "west.arrive()", "east.count()"],
      answer: 1,
      explanation: "west is the receiver of the call, so its field is the one incremented.",
    }],
  },
  {
    title: "Java Classes/Objects",
    summary: "Distinguish a class, an instance and a reference to that instance.",
    content: [
      "A class describes the fields and methods available on instances of a type. Each new expression creates an object, and a reference variable gives you a way to reach it.",
      "Assigning one reference to another copies the reference. Both names then lead to the same instance, so an update made using either name is visible through the other.",
    ],
    examples: [{
      title: "Trace two references to one box",
      code: javaProgram(`Box first = new Box();
Box alias = first;
Box second = new Box();
alias.label = "Paint";
System.out.println(first.label + " / " + second.label);`, [], `static class Box {
    String label = "Empty";
}`),
      result: "Paint / Empty. first and alias refer to one box, while second refers to a separately created box.",
    }],
    quizzes: [{
      question: "How many Box objects are created?",
      options: ["Three", "One", "Two"],
      answer: 2,
      explanation: "Only the two new Box() expressions create instances.",
    }],
  },
  {
    title: "Java Class Attributes",
    summary: "Use instance fields for individual values and static fields for shared values.",
    content: [
      "Java calls a variable declared directly inside a class a field. Each object has its own instance fields. A static field belongs to the class and is shared across its instances.",
      "The example gives each ticket a seat number while the whole ticket class shares one venue name. Read a static field through the class name to show that it is shared.",
    ],
    examples: [{
      title: "Label tickets for one venue",
      code: javaProgram(`Ticket first = new Ticket();
Ticket second = new Ticket();
first.seat = 7;
second.seat = 11;
System.out.println(Ticket.VENUE + " " + first.seat + ", " + second.seat);`, [], `static class Ticket {
    static final String VENUE = "Hall A";
    int seat;
}`),
      result: "Hall A 7, 11. Each seat assignment changes only the chosen ticket.",
    }],
    quizzes: [{
      question: "Which field should hold an individual seat number?",
      options: ["An instance field", "A shared static field", "A local variable inside main that every ticket reads"],
      answer: 0,
      explanation: "A seat belongs to one ticket, so each object needs its own storage.",
    }],
  },
  {
    title: "Java Class Methods",
    summary: "Choose an instance method for behavior that depends on object state.",
    content: [
      "An instance method has a receiver and can read the fields of that particular object. A static method has no current instance. It can perform a calculation using only its arguments.",
      "Here one conversion formula works for any measurement. The instance method supplies its own distance to that shared calculation.",
    ],
    examples: [{
      title: "Convert a recorded trail length",
      code: javaProgram(`Trail trail = new Trail(3500);
System.out.println(trail.kilometers());
System.out.println(Trail.toKilometers(750));`, [], `static class Trail {
    final int meters;

    Trail(int meters) {
        this.meters = meters;
    }

    double kilometers() {
        return toKilometers(meters);
    }

    static double toKilometers(int meters) {
        return meters / 1000.0;
    }
}`),
      result: "The lines show 3.5 for the recorded trail and 0.75 for the separate measurement.",
    }],
    quizzes: [{
      question: "Why can toKilometers be static?",
      options: ["Its answer is always the same number", "Its result depends only on its argument", "It reads every Trail instance"],
      answer: 1,
      explanation: "The conversion needs a meter value and no fields from an existing object.",
    }],
  },
  {
    title: "Java Class Challenge",
    summary: "Design a class that records loans while keeping its stock valid.",
    content: [
      "Build a LendingShelf initialized with a nonnegative number of copies. borrow() should return true and subtract one when copies are available. An empty shelf should return false and stay empty. Add a way to read the remaining count.",
      "Try a shelf with a single copy. The first call should succeed and the second should fail. Also test a shelf initialized at zero. The worked solution rejects a negative starting count in the constructor.",
    ],
    examples: [{
      title: "Test a shelf at its last copy",
      code: javaProgram(`LendingShelf shelf = new LendingShelf(1);
System.out.println(shelf.borrow());
System.out.println(shelf.borrow());
System.out.println(shelf.remaining());`, [], `static class LendingShelf {
    private int copies;

    LendingShelf(int copies) {
        if (copies < 0) {
            throw new IllegalArgumentException("Negative stock");
        }
        this.copies = copies;
    }

    boolean borrow() {
        if (copies == 0) {
            return false;
        }
        copies--;
        return true;
    }

    int remaining() {
        return copies;
    }
}`),
      result: "The three lines are true, false and 0. The unsuccessful loan leaves the shelf empty.",
    }],
    quizzes: [{
      question: "A shelf starts with two copies. What should the third borrow() return?",
      options: ["true with one copy left", "true with minus one copy left", "false with zero copies left"],
      answer: 2,
      explanation: "The first two calls exhaust the stock, so the guard rejects the third call before subtraction.",
    }],
  },
  {
    title: "Java Constructors",
    summary: "Establish a valid initial state when creating an object.",
    content: [
      "A constructor has the same name as its class and has no return type. Arguments to new supply the values consumed by the chosen constructor. Use the constructor to establish facts other methods can rely on.",
      "When a class declares any constructor, Java does not add a default no-argument constructor. Declare an additional overload if creating an instance with default values should be supported.",
    ],
    examples: [{
      title: "Create a print job with a required page count",
      code: javaProgram(`PrintJob job = new PrintJob(12);
System.out.println(job.pages);`, [], `static class PrintJob {
    final int pages;

    PrintJob(int pages) {
        if (pages < 1) {
            throw new IllegalArgumentException("At least one page required");
        }
        this.pages = pages;
    }
}`),
      result: "12. The constructor accepts this positive count and stores it in the new object.",
    }],
    quizzes: [{
      question: "What happens with new PrintJob(0)?",
      options: ["The constructor throws IllegalArgumentException", "Java silently creates a one-page job", "The constructor returns null"],
      answer: 0,
      explanation: "The guard rejects zero before the assignment.",
    }],
  },
  {
    title: "Java this Keyword",
    summary: "Refer to the current instance and delegate to another constructor.",
    content: [
      "Inside an instance method or constructor, this refers to the current object. When a parameter shadows a field, this.name identifies the field and an unqualified name can read the parameter.",
      "Under Java 17, a this(...) constructor invocation must be the first statement in the constructor. It delegates setup to another constructor of the same class so both paths initialize the fields consistently.",
    ],
    examples: [{
      title: "Provide a default caption",
      code: javaProgram(`Caption defaultCaption = new Caption();
Caption custom = new Caption("Opening night");
System.out.println(defaultCaption.text + " / " + custom.text);`, [], `static class Caption {
    final String text;

    Caption() {
        this("Untitled");
    }

    Caption(String text) {
        this.text = text;
    }
}`),
      result: "Untitled / Opening night. Both construction paths eventually assign the text field.",
    }],
    quizzes: [{
      question: "In this.text = text, what does the expression on the right refer to?",
      options: ["The Caption class", "The constructor parameter", "The default caption"],
      answer: 1,
      explanation: "The parameter is in local scope, and this.text explicitly selects the instance field.",
    }],
  },
  {
    title: "Java Modifiers",
    summary: "Read access and behavior modifiers separately in a declaration.",
    content: [
      "Access modifiers control where a member can be named. public makes it available to accessible callers, private limits access to the enclosing top-level type, and omitting an access modifier gives package access. protected also supports access from subclasses under Java's access rules.",
      "static puts a member on the class, and final restricts reassignment of a field. A private static final field is a useful home for an implementation constant that a public method uses.",
    ],
    examples: [{
      title: "Express a shared ticket limit",
      code: javaProgram(`System.out.println(Booking.allowed(3));
System.out.println(Booking.allowed(5));`, [], `static class Booking {
    private static final int MAX_TICKETS = 4;

    public static boolean allowed(int count) {
        return count >= 1 && count <= MAX_TICKETS;
    }
}`),
      result: "The calls print true and false because the limit is four tickets.",
    }],
    quizzes: [{
      question: "Which modifier prevents reassignment of MAX_TICKETS?",
      options: ["private", "static", "final"],
      answer: 2,
      explanation: "final permits the field to be assigned once. static makes it a class field and private constrains access.",
    }],
  },
  {
    title: "Java Encapsulation",
    summary: "Protect a valid state by routing changes through a method.",
    content: [
      "A class can keep a field private and expose operations that enforce its rules. A room booking should preserve the rule that available seats never become negative and never increase through an invalid reservation.",
      "Check the whole request before changing the field. A caller can inspect the result of reserve and read the new availability through a separate query.",
    ],
    examples: [{
      title: "Reject an oversized reservation",
      code: javaProgram(`Room room = new Room();
System.out.println(room.reserve(3));
System.out.println(room.reserve(2));
System.out.println(room.available());`, [], `static class Room {
    private int available = 4;

    boolean reserve(int count) {
        if (count <= 0 || count > available) {
            return false;
        }
        available -= count;
        return true;
    }

    int available() {
        return available;
    }
}`),
      result: "true, false and 1 appear on separate lines. The second reservation exceeds the one seat left.",
    }],
    quizzes: [{
      question: "Why reject a negative count?",
      options: ["Subtracting a negative count would add seats", "It would set the room's capacity to zero", "It would create a new room"],
      answer: 0,
      explanation: "The update subtracts count, so a negative request would violate the reservation rules.",
    }],
  },
  {
    title: "Java Packages / API",
    summary: "Locate a library class by its package and use its documented operations.",
    content: [
      "A package groups related types and gives each a qualified name, such as java.util.ArrayDeque. An import lets a source file refer to that type by its simple name. Types in java.lang, including String, are available automatically.",
      "Look up the class's constructors and method contracts when choosing an operation. ArrayDeque supports queue operations at opposite ends, so addLast followed by removeFirst can serve requests in arrival order.",
    ],
    examples: [{
      title: "Import and use a queue from java.util",
      code: javaProgram(`ArrayDeque<String> requests = new ArrayDeque<>();
requests.addLast("Mira");
requests.addLast("Sol");
System.out.println(requests.removeFirst());
System.out.println(requests.peekFirst());`, ["java.util.ArrayDeque"]),
      result: "Mira is removed and printed. Sol is printed next and remains in the queue.",
    }],
    quizzes: [{
      question: "Which fully qualified name could replace the imported simple name?",
      options: ["java.lang.ArrayDeque", "java.util.ArrayDeque", "ArrayDeque.java.util"],
      answer: 1,
      explanation: "The type is declared in the java.util package.",
    }],
  },
  {
    title: "Java Inheritance",
    summary: "Extend a base class and add behavior specific to a subtype.",
    content: [
      "Use extends when a subtype can stand in for its base type. A subclass inherits accessible members and can add its own fields and methods. Shared behavior can then live in one implementation on the base class.",
      "The base stores a private name and exposes it through name(). The subclass forwards construction to its base and uses that inherited method in a more specific display label.",
    ],
    examples: [{
      title: "Add a role to a named staff member",
      code: javaProgram(`Guide guide = new Guide("Ira");
System.out.println(guide.name());
System.out.println(guide.badge());`, [], `static class Staff {
    private final String name;

    Staff(String name) {
        this.name = name;
    }

    String name() {
        return name;
    }
}

static class Guide extends Staff {
    Guide(String name) {
        super(name);
    }

    String badge() {
        return "Guide " + name();
    }
}`),
      result: "The first line is Ira and the second is Guide Ira. The inherited method reads the base's private field.",
    }],
    quizzes: [{
      question: "Which member can be called through a variable declared as Staff?",
      options: ["badge()", "Every method added by Guide", "name()"],
      answer: 2,
      explanation: "The Staff type declares name(), while badge() is specific to Guide.",
    }],
  },
  {
    title: "Java Polymorphism",
    summary: "Predict which instance method runs when a variable has a base type.",
    content: [
      "A variable declared with a base class type can refer to a subclass object. The compiler checks that a called method is available on the declared type. At run time, an overridden instance method is selected using the actual object's class.",
      "A collection of base references can therefore ask every item for a label. Each object supplies the response appropriate to its own type.",
    ],
    examples: [{
      title: "Display two different sign labels",
      code: javaProgram(`Sign[] signs = {new Sign(), new ExitSign()};
for (Sign sign : signs) {
    System.out.println(sign.label());
}`, [], `static class Sign {
    String label() {
        return "Information";
    }
}

static class ExitSign extends Sign {
    @Override
    String label() {
        return "Exit";
    }
}`),
      result: "Information and Exit print on separate lines. The second object provides its override despite being read as a Sign.",
    }],
    quizzes: [{
      question: "What decides which label implementation runs?",
      options: ["The position of the array element", "The actual class of the object", "The name of the loop variable"],
      answer: 1,
      explanation: "Dynamic dispatch selects the override for the receiving object's runtime class.",
    }],
  },
  {
    title: "Java super Keyword",
    summary: "Extend a superclass implementation without duplicating its work.",
    content: [
      "A subclass can use super to invoke a superclass constructor or refer to its inherited implementation of an instance method. Under Java 17, an explicit super(...) constructor call belongs at the beginning of the constructor.",
      "In an override, super.label() calls the superclass behavior on the current object. This gives the subclass a base label to decorate without calling its own override again.",
    ],
    examples: [{
      title: "Extend an exhibit label",
      code: javaProgram(`System.out.println(new FeaturedExhibit("Night Sky").label());`, [], `static class Exhibit {
    private final String title;

    Exhibit(String title) {
        this.title = title;
    }

    String label() {
        return "Exhibit: " + title;
    }
}

static class FeaturedExhibit extends Exhibit {
    FeaturedExhibit(String title) {
        super(title);
    }

    @Override
    String label() {
        return super.label() + " (featured)";
    }
}`),
      result: "Exhibit: Night Sky (featured). The base formats the title and the override appends its suffix.",
    }],
    quizzes: [{
      question: "What would calling label() inside the override in place of super.label() do?",
      options: ["Read the title field directly", "Call the superclass implementation", "Call the same override recursively"],
      answer: 2,
      explanation: "An unqualified instance call uses the current object and reaches its override again.",
    }],
  },
  {
    title: "Java Inner Classes",
    summary: "Bind an inner object to the particular outer object it uses.",
    content: [
      "A non-static member class is an inner class. Each instance is associated with an enclosing instance and can access its fields. Use a static nested class when an enclosing instance is unnecessary.",
      "Create a reading through station.new Reading(...). The label can then combine the reading's value with the name of the station that created it.",
    ],
    examples: [{
      title: "Attach a measurement to its station",
      code: javaProgram(`Station west = new Station("West");
Station.Reading reading = west.new Reading(16);
System.out.println(reading.label());`, [], `static class Station {
    private final String name;

    Station(String name) {
        this.name = name;
    }

    class Reading {
        private final int value;

        Reading(int value) {
            this.value = value;
        }

        String label() {
            return name + " " + value;
        }
    }
}`),
      result: "West 16. Reading obtains name from its enclosing Station and value from its own field.",
    }],
    quizzes: [{
      question: "Which expression creates a reading attached to west?",
      options: ["west.new Reading(20)", "new Station.Reading(20)", "west.Reading(20)"],
      answer: 0,
      explanation: "Creating a non-static member class this way supplies its enclosing instance.",
    }],
  },
  {
    title: "Java Abstraction",
    summary: "Combine a common workflow with a step supplied by subclasses.",
    content: [
      "An abstract class can store state, implement methods and declare abstract methods without bodies. Programs construct a concrete subclass that supplies any remaining abstract operations.",
      "An implemented method in the abstract base can call an abstract operation. The call reaches the concrete object's implementation, so the common workflow can use a calculation defined by each subtype.",
    ],
    examples: [{
      title: "Describe a shape through its area",
      code: javaProgram(`Shape card = new Square(4);
System.out.println(card.describe());`, [], `static abstract class Shape {
    abstract int area();

    String describe() {
        return area() + " square units";
    }
}

static class Square extends Shape {
    final int side;

    Square(int side) {
        this.side = side;
    }

    @Override
    int area() {
        return side * side;
    }
}`),
      result: "16 square units. Shape supplies describe(), and Square supplies the value used by that method.",
    }],
    quizzes: [{
      question: "Which class supplies the area calculation for card?",
      options: ["Shape, because card has that declared type", "Square, because card holds a Square", "Main, because main prints the result"],
      answer: 1,
      explanation: "The implementation of the abstract operation comes from the concrete object.",
    }],
  },
  {
    title: "Java Interface",
    summary: "Declare an operation that different types can implement.",
    content: [
      "An interface describes a capability. A class can implement multiple interfaces and provide a public implementation for each required method. Code that depends on the interface can accept any compatible implementation.",
      "Here fare calculation is a dependency of receipt. Passing the policy through an interface parameter lets a different pricing rule be supplied for the same receipt logic.",
    ],
    examples: [{
      title: "Price a receipt using a fare policy",
      code: javaProgram(`System.out.println(receipt(new FlatFare(), 3));`, [], `interface FarePolicy {
    int centsFor(int riders);
}

static class FlatFare implements FarePolicy {
    @Override
    public int centsFor(int riders) {
        return riders * 150;
    }
}

static String receipt(FarePolicy policy, int riders) {
    return policy.centsFor(riders) + " cents";
}`),
      result: "450 cents. The receipt asks the supplied policy to calculate the fare for three riders.",
    }],
    quizzes: [{
      question: "What must a new class implementing FarePolicy provide to be concrete?",
      options: ["A constructor called FarePolicy", "A field named riders", "A public int centsFor(int) implementation"],
      answer: 2,
      explanation: "A concrete implementation must satisfy the interface method's signature and access requirements.",
    }],
  },
  {
    title: "Java Anonymous",
    summary: "Create a single-use implementation at the point where it is needed.",
    content: [
      "An anonymous class expression creates an object and declares its class body together. Use new InterfaceName() followed by a body that implements the required methods. Anonymous classes can declare fields and implement more than one method.",
      "An anonymous class can capture a local variable if it is final or effectively final. The prefix here is assigned once and then read from inside the implementation.",
    ],
    examples: [{
      title: "Format one set of archive labels",
      code: javaProgram(`String prefix = "Box ";
LabelMaker maker = new LabelMaker() {
    @Override
    public String label(int number) {
        return prefix + number;
    }
};
System.out.println(maker.label(8));`, [], `interface LabelMaker {
    String label(int number);
}`),
      result: "Box 8. The anonymous object implements label and reads prefix from its surrounding scope.",
    }],
    quizzes: [{
      question: "Why can the implementation read the local prefix?",
      options: ["prefix is effectively final", "prefix is a static field", "All local variables become public"],
      answer: 0,
      explanation: "The local variable is assigned once, which allows it to be captured.",
    }],
  },
  {
    title: "Java OOP Visuals",
    summary: "Draw references as arrows and objects as boxes to predict changes.",
    content: [
      "Write each variable name on the left and give each new object a box on the right. Draw an arrow for a reference. A reference assignment changes an arrow, while a field assignment changes the contents of the box it reaches.",
      "The diagram inside the example shows the initial state. Follow each update in order. After the first update, a and b still point to Box 1. After b = c, updates through b reach Box 2.",
    ],
    examples: [{
      title: "Trace a change of references",
      code: javaProgram(`Box a = new Box(2);
Box b = a;
Box c = new Box(7);

// a ----+
//       +----> [Box 1 | count = 2]
// b ----+
// c ---------> [Box 2 | count = 7]

b.count++;
b = c;
b.count++;
System.out.println(a.count + " " + b.count + " " + c.count);`, [], `static class Box {
    int count;

    Box(int count) {
        this.count = count;
    }
}`),
      result: "3 8 8. Box 1 and Box 2 were each incremented once, and the last two reads reach Box 2.",
    }],
    quizzes: [{
      question: "Right after b = c, which variables point to the same box?",
      options: ["a and b", "b and c", "a and c"],
      answer: 1,
      explanation: "The assignment copies c's reference into b.",
    }],
  },
  {
    title: "Java Enum",
    summary: "Represent a finite set of choices with named constants.",
    content: [
      "An enum defines a type with a fixed set of instances. Its constants can carry data and expose methods. Declaring a parameter or variable with the enum type restricts values to that family of choices or null.",
      "The example gives each paper size its width in millimeters. Storing the measurement beside its constant keeps the association visible at the declaration.",
    ],
    examples: [{
      title: "Look up the width of each paper size",
      code: javaProgram(`for (Paper paper : Paper.values()) {
    System.out.println(paper + " " + paper.widthMm);
}`, [], `enum Paper {
    A5(148), A4(210);

    final int widthMm;

    Paper(int widthMm) {
        this.widthMm = widthMm;
    }
}`),
      result: "A5 148 and A4 210 appear in declaration order.",
    }],
    quizzes: [{
      question: "What is the type of Paper.A4?",
      options: ["String", "int", "Paper"],
      answer: 2,
      explanation: "An enum constant is an instance of its declared enum type.",
    }],
  },
  {
    title: "Java User Input",
    summary: "Read complete input lines and convert them deliberately.",
    content: [
      "A Scanner can read from System.in for keyboard input or from a string when practicing with repeatable data. nextLine reads the remainder of a line, including spaces in a name, and advances past the line separator.",
      "Here both fields are read as lines. Strip whitespace before parsing an integer. A program accepting unrestricted input should also handle NumberFormatException and check for missing lines. To try the keyboard version, replace the sample string with System.in and enter the same two lines.",
    ],
    examples: [{
      title: "Read a participant and seat count",
      code: javaProgram(`try (Scanner input = new Scanner("Mira Chen\\n3\\n")) {
    String name = input.nextLine();
    int seats = Integer.parseInt(input.nextLine().strip());
    System.out.println(name + " reserved " + seats + " seats");
}`, ["java.util.Scanner"]),
      result: "Mira Chen reserved 3 seats. The first read keeps the space in the full name.",
    }],
    quizzes: [{
      question: "What happens if the second line is three?",
      options: ["Integer.parseInt throws NumberFormatException", "The number is parsed as 3", "nextLine returns an empty string"],
      answer: 0,
      explanation: "Integer.parseInt expects signed decimal digits in this overload.",
    }],
  },
  {
    title: "Java Date",
    summary: "Use an immutable calendar date for calculations that do not need a time zone.",
    content: [
      "LocalDate represents a year, month and day without a clock time or zone. Use of to construct a specific date and parse for an ISO date string. Operations such as plusDays produce a new value while the original date stays available.",
      "Calendar arithmetic accounts for the lengths of months and leap years. Use ChronoUnit.DAYS.between to measure the elapsed days between the two dates.",
    ],
    examples: [{
      title: "Find a deadline across a leap day",
      code: javaProgram(`LocalDate start = LocalDate.of(2024, 2, 28);
LocalDate due = start.plusDays(2);
System.out.println(start + " -> " + due);
System.out.println(ChronoUnit.DAYS.between(start, due));`, ["java.time.LocalDate","java.time.temporal.ChronoUnit"]),
      result: "2024-02-28 -> 2024-03-01, followed by 2. February 29 is one of the two elapsed days.",
    }],
    quizzes: [{
      question: "What value remains in start after the call to plusDays?",
      options: ["2024-03-01", "2024-02-28", "2024-02-29"],
      answer: 1,
      explanation: "LocalDate is immutable, so the adjusted date is returned as a separate value.",
    }],
  },
]);
