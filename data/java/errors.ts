import { javaChapter, javaProgram } from "./chapter";

export const errors = javaChapter("Java Errors", "Intermediate", [
  {
    title: "Java Errors",
    summary: "Use when a failure appears to decide where to investigate.",
    content: [
      "A compilation error prevents javac from producing a valid program. A runtime exception interrupts a running operation. A logic error can finish normally and still compute a value that violates the requirement.",
      "Try calculating the average of seven points from two rounds. Both operands in the first division are integers, so Java discards the fractional part before storing the result in a double.",
    ],
    examples: [{
      title: "Diagnose a plausible but incorrect average",
      code: javaProgram(`int points = 7;
int rounds = 2;
double first = points / rounds;
double corrected = (double) points / rounds;
System.out.println(first);
System.out.println(corrected);`, []),
      result: "The lines show 3.0 and 3.5. Converting points before division preserves the fraction.",
    }],
    quizzes: [{
      question: "Which category describes the first calculation when the requirement is an exact average?",
      options: ["Compilation error", "Logic error", "Runtime exception"],
      answer: 1,
      explanation: "The program compiles and runs, but integer division produces the wrong value for the requirement.",
    }],
  },
  {
    title: "Java Debugging",
    summary: "Trace a small failing input and find the first unexpected state.",
    content: [
      "Reduce a bug to a repeatable case and write down the expected outcome. Inspect the loop index and accumulator at each step with a breakpoint or a short diagnostic print.",
      "The two-item list should total 7. The trace displays only one visited index, so inspect the stopping condition before changing the addition. Replace prices.length - 1 with prices.length and rerun.",
    ],
    examples: [{
      title: "Find an item missing from a total",
      code: javaProgram(`int[] prices = {2, 5};
int total = 0;
for (int i = 0; i < prices.length - 1; i++) {
    total += prices[i];
    System.out.println("i=" + i + ", total=" + total);
}
System.out.println("Final total: " + total);`, []),
      result: "The trace prints i=0, total=2 and Final total: 2. After the suggested fix, the trace visits index 1 and the total reaches 7.",
    }],
    quizzes: [{
      question: "Which observation locates the defect?",
      options: ["The accumulator starts at zero", "The array contains two integer values", "The trace never reaches index 1"],
      answer: 2,
      explanation: "The loop stops when i reaches 1, before adding the last price.",
    }],
  },
  {
    title: "Java Exceptions",
    summary: "Recover from an expected conversion failure at the point where a response is possible.",
    content: [
      "A thrown exception transfers control to a matching catch block. A failed operation skips the remaining statements in its try block. Use a specific exception type so other failures remain visible.",
      "Integer.parseInt accepts decimal integer text such as 24. For a mixed label such as B24 it throws NumberFormatException. This handler turns the failed conversion into a usable instruction.",
    ],
    examples: [{
      title: "Respond to an invalid seat number",
      code: javaProgram(`String seat = "B24";
try {
    int number = Integer.parseInt(seat);
    System.out.println("Seat " + number);
} catch (NumberFormatException ex) {
    System.out.println("Enter the numeric part of the seat label.");
}
System.out.println("Entry checked.");`, []),
      result: "The program prints the request for the numeric part and then Entry checked. Change B24 to 24 to see the success path.",
    }],
    quizzes: [{
      question: "Which input takes the success path?",
      options: ["24B", "24", "2.4"],
      answer: 1,
      explanation: "The string 24 is a decimal integer representation that parseInt accepts.",
    }],
  },
  {
    title: "Java Multiple Exceptions",
    summary: "Choose separate handlers when two failures need different messages.",
    content: [
      "A try block can have several catch clauses. Java chooses the first handler whose type can receive the thrown exception. Place a more specific exception before any catch that can handle its parent type.",
      "Here text can fail to parse, and a successfully parsed zero can make integer division fail. Two catch clauses identify which input rule was broken. When unrelated exception types need exactly the same action, they can share a multi-catch with a vertical bar.",
    ],
    examples: [{
      title: "Separate malformed text from division by zero",
      code: javaProgram(`for (String groups : new String[]{"four", "0", "4"}) {
    try {
        int size = 12 / Integer.parseInt(groups);
        System.out.println("Group size " + size);
    } catch (NumberFormatException ex) {
        System.out.println("Use integer digits");
    } catch (ArithmeticException ex) {
        System.out.println("Use a nonzero divisor");
    }
}`, []),
      result: "The lines read Use integer digits, Use a nonzero divisor, and Group size 3.",
    }],
    quizzes: [{
      question: "Which handler runs for the input \"0\"?",
      options: ["NumberFormatException", "Both handlers", "ArithmeticException"],
      answer: 2,
      explanation: "Parsing succeeds with the integer zero. The subsequent integer division throws ArithmeticException.",
    }],
  },
  {
    title: "Java try-with-resources",
    summary: "Use the resource header to close a reader on every exit from its block.",
    content: [
      "Declare an AutoCloseable resource in the parentheses after try. Java calls close when the block finishes, including when a return or exception leaves it. Multiple resources in one header close in reverse declaration order.",
      "The reader opens only after its input file is populated. Its lifetime ends before the finally block tries to delete the temporary file, which also permits cleanup on systems that lock open files.",
    ],
    examples: [{
      title: "Read a temporary note and release its handle",
      code: javaProgram(`Path note = Files.createTempFile("java-note-", ".txt");
try {
    Files.writeString(note, "Room 12");
    try (BufferedReader reader = Files.newBufferedReader(note)) {
        System.out.println(reader.readLine());
    }
} finally {
    Files.deleteIfExists(note);
}`, ["java.io.BufferedReader","java.nio.file.Files","java.nio.file.Path"]),
      result: "The program prints Room 12. The inner try closes the reader and the outer finally removes the exercise file.",
    }],
    quizzes: [{
      question: "What closes the reader if readLine throws?",
      options: ["The try-with-resources statement", "A successful println call", "Deleting the file"],
      answer: 0,
      explanation: "The resource is registered when it opens successfully, so Java closes it when control leaves the resource block.",
    }],
  },
]);
