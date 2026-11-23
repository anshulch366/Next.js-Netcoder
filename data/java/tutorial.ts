import { javaChapter, javaProgram } from "./chapter";

export const tutorial = javaChapter("Java Tutorial", "Beginner", [
  {
    title: "Java HOME",
    summary: "Run a small program that tells a stage manager how many seats are free.",
    content: [
      "These lessons use Java 17. Save a worked example as Main.java and run java Main.java from its folder with a JDK installed. Each example is a complete program you can copy on its own.",
      "Start inside main, where the program begins. The first two statements name quantities, the third calculates the difference, and the last sends a readable answer to the console. Try changing sold to 48 before running it again.",
    ],
    examples: [{
      title: "Count seats at the evening show",
      code: javaProgram(`int capacity = 48;
int sold = 35;
int available = capacity - sold;
System.out.println("Seats available: " + available);`),
      result: "Seats available: 13. Changing sold to 48 makes the available count zero.",
    }],
    quizzes: [{
      question: "If five more seats sell, what should you change?",
      options: ["Set capacity to 53", "Set sold to 40", "Set available to 5"],
      answer: 1,
      explanation: "Selling tickets changes the sold count. Subtracting 40 from the unchanged capacity leaves eight seats.",
    }],
  },
  {
    title: "Java Intro",
    summary: "Follow a Java program from source text to a running application.",
    content: [
      "Write source code in a .java file. The javac compiler checks its syntax and types and produces bytecode in a .class file. The java launcher starts a Java Virtual Machine (JVM) that can execute the compiled class.",
      "The class below contains a main method, the entry point for this program. String[] args holds arguments from the launcher. Run java Main.java matinee after saving the example to pass the show name to main.",
    ],
    examples: [{
      title: "Greet a show by name",
      code: javaProgram(`String show = args.length == 0 ? "evening" : args[0];
System.out.println("Welcome to the " + show + " show");`),
      result: "With matinee as the first argument, the program prints Welcome to the matinee show. With no arguments, it welcomes the evening audience.",
    }],
    quizzes: [{
      question: "What does javac Main.java normally produce for this example?",
      options: ["A Main.class file containing bytecode", "The welcome message on screen", "A list of audience members"],
      answer: 0,
      explanation: "javac compiles the class. The main method runs when the class is launched.",
    }],
  },
  {
    title: "Java Get Started",
    summary: "Verify your JDK and compile a first program from a terminal.",
    content: [
      "Install a JDK with Java 17 or later and open a terminal. Run java -version and javac -version to check the runtime and compiler. Use the same JDK for both commands.",
      "Save the example in a plain-text file called Main.java. In that folder run javac Main.java, then java Main. Edit the message, save, and compile again before launching the updated class.",
    ],
    examples: [{
      title: "Compile and launch Main",
      code: javaProgram(`System.out.println("Rehearsal starts at six.");`),
      result: "A successful compile creates Main.class. The launch prints Rehearsal starts at six.",
    }],
    quizzes: [{
      question: "You edited Main.java and ran java Main, but saw the old message. Which step did you miss?",
      options: ["Rename Main.java after each edit", "Reinstall the JDK", "Recompile Main.java"],
      answer: 2,
      explanation: "java Main executes the compiled class. Rebuilding it incorporates the saved source edits.",
    }],
    reading: { title: "Getting started with Java", url: "https://dev.java/learn/getting-started/" },
  },
  {
    title: "Java Syntax",
    summary: "Read the boundaries between a class, a method and its statements.",
    content: [
      "Braces group declarations inside a class and statements inside a method or control block. A semicolon ends an ordinary statement such as a declaration or a println call. Indentation makes the nesting visible to the reader.",
      "Java names are case-sensitive. In the example the nested block runs when ready is true. The last print call sits after its closing brace, so it runs each time main reaches it.",
    ],
    examples: [{
      title: "Identify which lines belong to the decision",
      code: javaProgram(`boolean ready = false;
if (ready) {
    System.out.println("Open doors");
}
System.out.println("Sound check");`),
      result: "Only Sound check appears. Set ready to true and both messages appear in source order.",
    }],
    quizzes: [{
      question: "What marks the end of the if block?",
      options: ["The closing brace after the first println", "The blank space before System", "The semicolon after false"],
      answer: 0,
      explanation: "Braces delimit the statements controlled by the if condition.",
    }],
  },
  {
    title: "Java Output",
    summary: "Choose between printing on the current line and moving to the next.",
    content: [
      "System.out is the program's standard output stream. print writes a value, and println additionally ends the current line. Calling println with no argument just finishes the line.",
      "Inside a string expression, + can join text with a number. Use parentheses to finish an arithmetic expression before joining it to the label.",
    ],
    examples: [{
      title: "Print two parts of a ticket",
      code: javaProgram(`System.out.print("Row ");
System.out.println(3);
System.out.println("Seats: " + (2 + 4));`),
      result: "The first line reads Row 3 and the second reads Seats: 6.",
    }],
    quizzes: [{
      question: "What does \"Seats: \" + 2 + 4 produce?",
      options: ["Seats: 6", "Seats: 24", "A compiler error"],
      answer: 1,
      explanation: "Evaluation proceeds from left to right. Once the left value is text, each following number is appended as text.",
    }],
  },
  {
    title: "Java Comments",
    summary: "Explain a business rule beside the calculation that applies it.",
    content: [
      "Use // for a comment that ends at the next line break. Use /* and */ to surround a comment that spans several lines. The compiler ignores comments outside string and character literals.",
      "The words in a useful comment explain a decision that the calculation alone cannot show. Here a reader can see the subtraction and learn why two places are reserved.",
    ],
    examples: [{
      title: "Document the reservation rule",
      code: javaProgram(`int balcony = 20;
// Keep the two end seats available for ushers.
int forSale = balcony - 2;
System.out.println(forSale);`),
      result: "18. The comment explains the reservation and contributes no executable step.",
    }],
    quizzes: [{
      question: "What happens when only the comment is removed?",
      options: ["Two more seats go on sale", "The subtraction stops compiling", "The program still prints 18"],
      answer: 2,
      explanation: "The same declaration, subtraction and print call remain in the compiled program.",
    }],
  },
  {
    title: "Java Variables",
    summary: "Give changing quantities names and trace an assignment.",
    content: [
      "A local variable declaration gives a name a type such as int. Initialize it before reading it. Assignment evaluates the expression on the right and stores its result in the variable on the left.",
      "Assigning one int variable to another copies its value. Keeping an opening balance lets you compare it with the remaining balance after a sale.",
    ],
    examples: [{
      title: "Remember the starting stock",
      code: javaProgram(`int remaining = 15;
int opening = remaining;
remaining -= 4;
System.out.println(opening + " at opening, " + remaining + " now");`),
      result: "15 at opening, 11 now. The later subtraction updates remaining.",
    }],
    quizzes: [{
      question: "What is opening after another remaining -= 2?",
      options: ["15", "11", "9"],
      answer: 0,
      explanation: "opening holds its own copy of the int value assigned at the start.",
    }],
  },
  {
    title: "Java Data Types",
    summary: "Choose primitive and reference types to describe one ticket.",
    content: [
      "An int holds a whole number. A double holds a floating-point approximation, a boolean holds true or false, and a char holds one UTF-16 code unit. Java also has byte, short, long and float primitive types.",
      "Use String for a text label such as a show name or a ticket number with leading zeros. String is a reference type. Its length() method counts UTF-16 code units in the text.",
    ],
    examples: [{
      title: "Keep a printed ticket number intact",
      code: javaProgram(`String ticket = "007";
char row = 'B';
int seat = 7;
boolean reserved = true;
System.out.println(ticket + " " + row + seat + " " + reserved);`),
      result: "007 B7 true. The text preserves both zeros in the printed ticket number.",
    }],
    quizzes: [{
      question: "Which type represents a label such as 007 without losing its leading zeros?",
      options: ["boolean", "String", "int"],
      answer: 1,
      explanation: "The zeros are characters in an identifier. A numerical count represents seven regardless of its printed width.",
    }],
  },
  {
    title: "Java Type Casting",
    summary: "Control when a division takes place in floating point.",
    content: [
      "Java can widen many primitive values implicitly, such as assigning an int to a double. An explicit cast can request a narrowing conversion, such as (int) for a floating-point value. For values within int range it discards the fractional part toward zero.",
      "Put a cast before the division when the result needs a fraction. Casting an integer quotient afterward cannot recover the already discarded remainder.",
    ],
    examples: [{
      title: "Compute average program sales",
      code: javaProgram(`int programs = 7;
int shows = 2;
double perShow = (double) programs / shows;
double lateCast = (double) (programs / shows);
System.out.println(perShow + " versus " + lateCast);`),
      result: "3.5 versus 3.0. Only the first division has a floating-point operand.",
    }],
    quizzes: [{
      question: "What is the value of (int) -2.8?",
      options: ["-3", "2", "-2"],
      answer: 2,
      explanation: "The conversion discards the fraction toward zero.",
    }],
  },
  {
    title: "Java Operators",
    summary: "Combine arithmetic, comparison and short-circuit logic.",
    content: [
      "Use * and / before + and - in arithmetic, or use parentheses to group an expression explicitly. With integer operands, / gives an integer quotient and % gives the remainder.",
      "The && operator evaluates its right side only when its left side is true. This lets a condition check that a divisor is usable before testing whether the division is exact.",
    ],
    examples: [{
      title: "Split a booking into equal groups",
      code: javaProgram(`int tickets = 18;
int groups = 3;
boolean splitsEvenly = groups > 0 && tickets % groups == 0;
System.out.println(splitsEvenly);`),
      result: "true because 18 has no remainder when divided by 3. With groups set to zero, the first condition yields false and the remainder calculation is skipped.",
    }],
    quizzes: [{
      question: "What happens if tickets is 20 and groups is 3?",
      options: ["It prints false", "It prints true", "It throws because the quotient is fractional"],
      answer: 0,
      explanation: "The remainder is 2, so the equality test fails. Integer remainder accepts values that do not divide evenly.",
    }],
  },
  {
    title: "Java Strings",
    summary: "Normalize text before comparing two labels.",
    content: [
      "String objects are immutable. Methods such as strip and toUpperCase return a string representing the new text. Keep the returned value if you need the change later.",
      "Use equals to compare text content. equalsIgnoreCase is useful when the spelling may vary in case. The == operator on references asks whether they refer to the same object.",
    ],
    examples: [{
      title: "Recognize a seat category",
      code: javaProgram(`String entered = "  Balcony ";
String category = entered.strip();
System.out.println(category.equalsIgnoreCase("balcony"));
System.out.println(entered.length() - category.length());`),
      result: "true followed by 3. Stripping removed two leading spaces and one trailing space.",
    }],
    quizzes: [{
      question: "Which input still compares equal to balcony after strip?",
      options: ["'Bal cony'", "' BALCONY '", "'Balconies'"],
      answer: 1,
      explanation: "strip removes outer whitespace and equalsIgnoreCase accepts an uppercase spelling.",
    }],
  },
  {
    title: "Java Math",
    summary: "Use the Math library to enforce a volume limit.",
    content: [
      "Math exposes static methods you call directly on the class. min chooses the smaller argument and max chooses the larger. Nest the calls to constrain a measurement to a lower and an upper limit.",
      "Evaluate the inner call first. With a requested volume above ten, the first operation leaves the request positive and the second operation caps it at ten. Repeat with a negative request to exercise the other limit.",
    ],
    examples: [{
      title: "Clamp a sound desk setting",
      code: javaProgram(`int requested = 14;
int volume = Math.min(10, Math.max(0, requested));
System.out.println(volume);`),
      result: "10. For a request of -3 the same expression produces 0, and for a request of 7 it produces 7.",
    }],
    quizzes: [{
      question: "Which request will come through unchanged?",
      options: ["-2", "12", "6"],
      answer: 2,
      explanation: "Six falls between the limits, so neither operation changes it.",
    }],
  },
  {
    title: "Java Booleans",
    summary: "Turn individual checks into a yes-or-no decision.",
    content: [
      "A boolean holds one of two values, true or false. Comparisons produce booleans. Use the ! operator to reverse a boolean and && to require two conditions to hold.",
      "Give each condition a name that reads naturally in the final decision. Try changing one of the inputs at a time to see which condition prevents entry.",
    ],
    examples: [{
      title: "Decide whether an audience member can enter",
      code: javaProgram(`boolean hasTicket = true;
boolean alreadyUsed = false;
boolean canEnter = hasTicket && !alreadyUsed;
System.out.println(canEnter);`),
      result: "true. The visitor has a ticket and it has not been used.",
    }],
    quizzes: [{
      question: "When is canEnter false?",
      options: ["When hasTicket and alreadyUsed are both true", "Only when both flags are false", "Whenever alreadyUsed is false"],
      answer: 0,
      explanation: "A used ticket makes !alreadyUsed false, even if the visitor still holds it.",
    }],
  },
  {
    title: "Java If...Else",
    summary: "Order overlapping tests so the intended rule wins.",
    content: [
      "An if/else if/else chain runs the body of the first condition that evaluates to true. The final else handles every case that reaches it. In Java each condition must have a boolean value.",
      "Start with the narrowest qualifying range when multiple thresholds overlap. Trace the exact threshold too, since > and >= make different choices there.",
    ],
    examples: [{
      title: "Choose a group ticket rate",
      code: javaProgram(`int people = 10;
int price;
if (people >= 10) {
    price = 6;
} else if (people >= 5) {
    price = 8;
} else {
    price = 10;
}
System.out.println(price);`),
      result: "6 per person. A group of nine pays 8 per person, while a group of four pays 10.",
    }],
    quizzes: [{
      question: "What would happen to a group of ten if the >= 5 branch ran first and set price to 8?",
      options: ["Both discounts would apply", "It would be charged 8 per person", "The program would select the lower price"],
      answer: 1,
      explanation: "The first true branch handles the group and the rest of the chain is skipped.",
    }],
  },
  {
    title: "Java Switch",
    summary: "Map a known code to a value using a switch expression.",
    content: [
      "A switch expression chooses a branch from the selector's value and produces a result that you can assign. With arrow labels, only the matching branch runs. Several labels can share one result.",
      "A default branch handles any remaining code. This makes the expression cover all possible non-null string values in this example.",
    ],
    examples: [{
      title: "Look up an entrance",
      code: javaProgram(`String zone = "B";
String entrance = switch (zone) {
    case "A", "B" -> "North";
    case "C" -> "South";
    default -> "Box office";
};
System.out.println(entrance);`),
      result: "North. Both A and B share the first branch.",
    }],
    quizzes: [{
      question: "Where does zone = \"D\" send the visitor?",
      options: ["North", "South", "Box office"],
      answer: 2,
      explanation: "D matches none of the explicit labels, so the expression yields the default value.",
    }],
  },
  {
    title: "Java While Loop",
    summary: "Repeat a step until the remaining work reaches zero.",
    content: [
      "A while loop evaluates its condition before each iteration. If the first test fails, the body runs zero times. Identify what changes in the body and why that change eventually makes the test false.",
      "Here a cart loads at most four cases per trip. Taking the smaller of four and the number left accounts for a partially filled last trip.",
    ],
    examples: [{
      title: "Count equipment-cart trips",
      code: javaProgram(`int casesLeft = 9;
int trips = 0;
while (casesLeft > 0) {
    casesLeft -= Math.min(4, casesLeft);
    trips++;
}
System.out.println(trips + " trips");`),
      result: "3 trips. The cart moves four cases, then four, then one.",
    }],
    quizzes: [{
      question: "How many trips does the loop count for zero starting cases?",
      options: ["0", "1", "4"],
      answer: 0,
      explanation: "The condition is already false, so the counter remains at its initial value.",
    }],
  },
  {
    title: "Java For Loop",
    summary: "Trace a counter through initialization, test and update.",
    content: [
      "A counted for loop initializes its variable once, tests its condition before each iteration, and runs its update after each completed iteration. The loop variable declared in the header belongs to that loop.",
      "Choose an inclusive upper bound when the largest value itself belongs in the result. Here each row number also gives its seat count, so adding row to the running total counts all the seats.",
    ],
    examples: [{
      title: "Count seats in four stepped rows",
      code: javaProgram(`int seats = 0;
for (int row = 1; row <= 4; row++) {
    seats += row;
}
System.out.println(seats);`),
      result: "10. The running totals after each row are 1, 3, 6 and 10.",
    }],
    quizzes: [{
      question: "What changes if the condition becomes row < 4?",
      options: ["The first row is skipped", "The total becomes 6", "The total becomes 14"],
      answer: 1,
      explanation: "Only row values 1, 2 and 3 pass the new test.",
    }],
  },
  {
    title: "Java Break/Continue",
    summary: "Decide when to skip an item and when to end a scan.",
    content: [
      "continue jumps to the next iteration of the enclosing loop. break leaves the loop immediately. A scan can use both when an irrelevant item and an end marker have different meanings.",
      "Treat zero as a blank reading and a negative number as the end marker. Follow the scan through the first negative value and observe which positive reading is never reached.",
    ],
    examples: [{
      title: "Total a batch of ticket scans",
      code: javaProgram(`int total = 0;
for (int count : new int[] {3, 0, 2, -1, 8}) {
    if (count < 0) break;
    if (count == 0) continue;
    total += count;
}
System.out.println(total);`),
      result: "5. The blank is skipped and the -1 ends the scan before the 8.",
    }],
    quizzes: [{
      question: "What would the total be if the negative-value branch used continue instead of break?",
      options: ["4", "5", "13"],
      answer: 2,
      explanation: "The negative number would be skipped and the later 8 would be included.",
    }],
  },
  {
    title: "Java Arrays",
    summary: "Read and update a fixed-size sequence by index.",
    content: [
      "An array holds elements of a declared type and keeps its length once created. Positions start at zero, so the final legal index is length - 1. Accessing an index outside that range throws an exception.",
      "Use an index when you need to replace an element. Use an enhanced for loop when you need each value in turn, as in the total below.",
    ],
    examples: [{
      title: "Correct a count before totaling it",
      code: javaProgram(`int[] byDoor = {4, 7, 2};
byDoor[1] = 8;
int total = 0;
for (int count : byDoor) {
    total += count;
}
System.out.println(byDoor.length + " doors, " + total + " visitors");`),
      result: "3 doors, 14 visitors. Index 1 changes the second count from 7 to 8.",
    }],
    quizzes: [{
      question: "Which index refers to the last door?",
      options: ["byDoor.length - 1", "byDoor.length", "1"],
      answer: 0,
      explanation: "Three elements use indices 0, 1 and 2.",
    }],
  },
]);
