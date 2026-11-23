import { javaChapter, javaProgram } from "./chapter";

export const certificate = javaChapter("Java Cert", "Beginner", [
  {
    title: "Java Certificate",
    summary: "Turn certification objectives into short, checkable practice tasks.",
    content: [
      "Use the certification provider's objectives for your target Java version to select what to study. For each objective, write a question, predict a result, and test it. Oracle's linked learning path describes its Java SE 17 assessment and credential requirements.",
      "For an objective about object references, trace two lists that start with equal contents. Explain which changes affect both lists and record the distinction in your revision notes.",
    ],
    examples: [{
      title: "Practice an object-reference question",
      code: javaProgram(`var original = new ArrayList<>(List.of("A"));
var alias = original;
var copy = new ArrayList<>(original);
alias.add("B");
System.out.println(original.size() + " " + copy.size());`, ["java.util.ArrayList","java.util.List"]),
      result: "2 1. The alias reaches the original list, while the copy has its own list of elements.",
    }],
    quizzes: [{
      question: "Which variable refers to the same list object as original?",
      options: ["copy", "alias", "Both alias and copy"],
      answer: 1,
      explanation: "Assigning original to alias copies the reference. The new expression constructs a separate list.",
    }],
    reading: { title: "Oracle Java SE 17 developer certification and objectives", url: "https://learn.oracle.com/ols/learning-path/become-a-java-se-17-developer/118071/99487" },
  },
]);

export const howTo = javaChapter("Java How To's", "Beginner", [
  {
    title: "Java How Tos",
    summary: "Format a duration as minutes and two-digit seconds.",
    content: [
      "Start with a nonnegative total in seconds. Integer division by sixty counts complete minutes, and the remainder is the seconds left in the current minute. This pair also works on exact minute boundaries.",
      "Use printf to assemble a display label without altering either number. The 02 in %02d sets a minimum width of two digits and fills an unused place with zero. Test 59, 60 and 61 seconds to see the rollover.",
    ],
    examples: [{
      title: "Make a rehearsal timer label",
      code: javaProgram(`int totalSeconds = 125;
int minutes = totalSeconds / 60;
int seconds = totalSeconds % 60;
System.out.printf("%d:%02d%n", minutes, seconds);`),
      result: "2:05. Changing the total to 60 prints 1:00.",
    }],
    quizzes: [{
      question: "What appears for a total of 61 seconds?",
      options: ["1:01", "0:61", "1:10"],
      answer: 0,
      explanation: "One full minute leaves one second, formatted with a leading zero.",
    }],
  },
]);

export const practice = javaChapter("Java Examples", "Beginner", [
  {
    title: "Java Examples",
    summary: "Trace the data through a small report before modifying it.",
    content: [
      "A program becomes easier to understand when you can say what each variable means after one iteration. In this report total accumulates visits and peak keeps the largest single reading. Starting peak at zero works because visit counts cannot be negative.",
      "Predict both final values. Then replace the middle reading with zero and check which outputs change. This is a quick way to discover whether a line depends on every reading or only on the largest one.",
    ],
    examples: [{
      title: "Summarize attendance across three shows",
      code: javaProgram(`int total = 0;
int peak = 0;
for (int visitors : new int[] {12, 19, 14}) {
    total += visitors;
    peak = Math.max(peak, visitors);
}
System.out.println("Total " + total + ", peak " + peak);`),
      result: "Total 45, peak 19. Replacing 19 with zero gives Total 26, peak 14.",
    }],
    quizzes: [{
      question: "What changes if another show with five visitors is added?",
      options: ["Only the total increases", "Only the peak increases", "Both values increase"],
      answer: 0,
      explanation: "Five contributes to the sum and is below the current peak.",
    }],
  },
  {
    title: "Java Videos",
    summary: "Use a short demonstration to practice predicting a program's next step.",
    content: [
      "Choose a Java demonstration from the linked Dev.java video collection. Pause when an expression or method call is introduced and write down what you expect to happen. Recreate a small part of the demonstration in Main.java.",
      "For example, trace how substring selects the label below. After you run it, change the position of the hyphen and check whether your program still finds the code. This turns a watched example into a test you can repeat.",
    ],
    examples: [{
      title: "Pause and predict a substring",
      code: javaProgram(`String cue = "LIGHTS-27";
int separator = cue.indexOf('-');
System.out.println(cue.substring(separator + 1));`),
      result: "27. indexOf locates the hyphen and substring begins at the character after it.",
    }],
    quizzes: [{
      question: "What will the same code print for SOUND-8?",
      options: ["-8", "8", "SOUND"],
      answer: 1,
      explanation: "The separator is located in the new text before the suffix is extracted.",
    }],
    reading: { title: "Watch Java demonstrations on Dev.java", url: "https://dev.java/learn/watchlisten/" },
  },
  {
    title: "Java Compiler",
    summary: "Use a compiler diagnostic to locate and correct a type mismatch.",
    content: [
      "The compiler checks whether an expression can be assigned to its declared type. Compile the working example as Main.java with javac Main.java. Then change Integer.parseInt(text) to text in the assignment to minutes and compile again.",
      "Look for the first error, its line number and the types it mentions. Restoring the conversion gives the compiler an int and lets the calculation proceed. The linked Java Playground also lets you try small programs in a browser.",
    ],
    examples: [{
      title: "Turn text into a value the compiler can accept",
      code: javaProgram(`String text = "12";
int minutes = Integer.parseInt(text);
System.out.println(minutes + 3);`),
      result: "The working program prints 15. Assigning text directly to minutes produces a compile-time String-to-int type error.",
    }],
    quizzes: [{
      question: "Which expression adds three numerically to the entered minutes?",
      options: ["text + 3", "\"12\" + \"3\"", "Integer.parseInt(text) + 3"],
      answer: 2,
      explanation: "Parsing converts the digits to an int before arithmetic is evaluated.",
    }],
    reading: { title: "Open the Java Playground", url: "https://dev.java/playground/" },
  },
  {
    title: "Java Exercises",
    summary: "Practice a loop that counts only values meeting a condition.",
    content: [
      "Write a method that counts the performances at or above 80 percent attendance. Take an array of whole-number percentages and return a count. Predict the results for an empty array and for a show at exactly 80 before you read the solution.",
      "Use a separate counter so a passing percentage contributes one show. To extend the exercise, turn the threshold into a second method parameter and retest the same four shows.",
    ],
    examples: [{
      title: "Count well-attended shows",
      code: javaProgram(`System.out.println(countFullShows(new int[] {79, 80, 95, 45}));
System.out.println(countFullShows(new int[] {}));`, [], `static int countFullShows(int[] percentages) {
    int count = 0;
    for (int percentage : percentages) {
        if (percentage >= 80) count++;
    }
    return count;
}`),
      result: "The counts are 2 and 0. Eighty is included, and an empty array takes no loop iterations.",
    }],
    quizzes: [{
      question: "Why use count++ inside the condition?",
      options: ["Each qualifying show contributes one to the count", "It increases each show's percentage", "It changes the threshold for the next show"],
      answer: 0,
      explanation: "The requested result is a number of shows, so each passing item adds exactly one.",
    }],
  },
  {
    title: "Java Quiz",
    summary: "Predict how Java handles a reference, a comparison and an integer division.",
    content: [
      "Write down your prediction for each printed line before running the example. Start by drawing one array and two names pointing to it, then trace the assignment through other.",
      "For the last two lines, evaluate the expression inside println first. One expression compares text content, while the other divides two integers. Use the questions to check which rule explains each result.",
    ],
    examples: [{
      title: "Trace three expressions",
      code: javaProgram(`int[] seats = {3, 5};
int[] other = seats;
other[0] = 9;
System.out.println(seats[0]);
System.out.println("row".equals("ROW"));
System.out.println(5 / 2);`),
      result: "The three lines show 9, false and 2.",
    }],
    quizzes: [{
      question: "Why does seats[0] print 9?",
      options: ["Every array has a shared first slot", "Both variables refer to the same array", "The assignment copies each element"],
      answer: 1,
      explanation: "The assignment copies the reference. Writing through other updates the array also reached through seats.",
    }, {
      question: "Why does the second line print false?",
      options: ["equals compares the two strings' characters and their case", "equals checks their lengths only", "Strings cannot be compared"],
      answer: 0,
      explanation: "The strings have the same length but differ in letter case. equalsIgnoreCase would accept this pair.",
    }, {
      question: "Which replacement for 5 / 2 produces 2.5?",
      options: ["(double) (5 / 2)", "5 % 2", "5 / 2.0"],
      answer: 2,
      explanation: "A double operand triggers floating-point division. Casting the already computed integer quotient would produce 2.0.",
    }],
  },
  {
    title: "Java Code Challenges",
    summary: "Find the largest increase between consecutive readings in one pass.",
    content: [
      "Given a sequence of attendance counts, return the largest upward change from one show to the next. A decline contributes no increase. Define the answer as zero for fewer than two readings or when no pair increases.",
      "Start at index one so every current reading has a previous reading. Compare the difference with the largest increase saved so far. The solution visits each pair once and uses a fixed number of extra variables.",
    ],
    examples: [{
      title: "Find the largest attendance jump",
      code: javaProgram(`System.out.println(largestRise(new int[] {20, 16, 25, 23, 27}));
System.out.println(largestRise(new int[] {9, 7, 5}));`, [], `static int largestRise(int[] attendance) {
    int best = 0;
    for (int i = 1; i < attendance.length; i++) {
        best = Math.max(best, attendance[i] - attendance[i - 1]);
    }
    return best;
}`),
      result: "The first sequence returns 9 from the jump between 16 and 25. The descending sequence returns 0.",
    }],
    quizzes: [{
      question: "What is the result for {5, 1, 4, 8}?",
      options: ["7", "3", "4"],
      answer: 2,
      explanation: "The positive consecutive differences are 3 and 4. Comparing 1 directly with 8 would skip a reading.",
    }],
  },
  {
    title: "Java Practice Problems",
    summary: "Count distinct visitors and total visits from the same input.",
    content: [
      "A front desk records a name on each visit. Report both the number of visits and the number of different people, treating surrounding spaces and letter case consistently. For this exercise the names are nonempty and each name identifies one person.",
      "Keep the original array for the visit count. Put normalized names into a set for the visitor count. Repeated names then change only the number of visits. Try an empty input and an input containing one repeatedly entered name.",
    ],
    examples: [{
      title: "Summarize a sign-in sheet",
      code: javaProgram(`String[] visits = {" Jo ", "SAM", "jo", "Sam", "Kim"};
Set<String> people = new HashSet<>();
for (String name : visits) {
    people.add(name.strip().toLowerCase(Locale.ROOT));
}
System.out.println(visits.length + " visits, " + people.size() + " people");`, ["java.util.HashSet","java.util.Set","java.util.Locale"]),
      result: "5 visits, 3 people. Jo and Sam each appear twice after normalization.",
    }],
    quizzes: [{
      question: "What changes if another entry is \" kim \"?",
      options: ["There are 6 visits and 3 people", "There are 5 visits and 4 people", "There are 6 visits and 4 people"],
      answer: 0,
      explanation: "The extra entry increases array length but normalizes to a name already in the set.",
    }],
  },
  {
    title: "Java Server",
    summary: "Handle a request and inspect its response on your own computer.",
    content: [
      "The JDK includes an HTTP server that can map a path to a handler. The handler below sends a status code and a short UTF-8 body for /status. Run the sample with a local JDK that permits loopback sockets.",
      "Binding to 127.0.0.1 keeps the demonstration local. Port zero asks the operating system for an available port. The program starts the server, makes one request with HttpClient, prints the response and stops the server in a finally block.",
    ],
    examples: [{
      title: "Serve and request a one-line status",
      code: javaProgram(`HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
server.createContext("/status", exchange -> {
    byte[] bytes = "Doors open".getBytes(StandardCharsets.UTF_8);
    exchange.sendResponseHeaders(200, bytes.length);
    try (var body = exchange.getResponseBody()) {
        body.write(bytes);
    }
});
server.start();
try {
    URI uri = URI.create("http://127.0.0.1:" + server.getAddress().getPort() + "/status");
    var request = HttpRequest.newBuilder(uri).GET().build();
    var reply = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(reply.statusCode() + " " + reply.body());
} finally {
    server.stop(0);
}`, ["com.sun.net.httpserver.HttpServer","java.net.InetSocketAddress","java.net.URI","java.net.http.HttpClient","java.net.http.HttpRequest","java.net.http.HttpResponse","java.nio.charset.StandardCharsets"]),
      result: "200 Doors open. The client receives the response and the process releases the temporary port.",
    }],
    quizzes: [{
      question: "Why use the UTF-8 byte array's length in the response headers?",
      options: ["It counts HTTP requests", "It gives the number of bytes the server will write", "It selects the server port"],
      answer: 1,
      explanation: "The declared response length measures bytes, which may differ from the number of characters in text.",
    }],
    reading: { title: "JDK 17 HTTP server API", url: "https://docs.oracle.com/en/java/javase/17/docs/api/jdk.httpserver/com/sun/net/httpserver/HttpServer.html" },
  },
  {
    title: "Java Syllabus",
    summary: "Follow the curriculum by building one increasingly capable program.",
    content: [
      "Begin with the Tutorial and Methods chapters to calculate a result and move its rule into a method. Then use Classes to give a booking an identity and state. In Errors and Problem Solving, practice predicting failures and testing boundary cases.",
      "Use Projects, File Handling and I/O Streams to save a report. Move to Data Structures when you need grouped results, and Advanced Java when you want to customize ordering or separate work across threads. Use the reference chapter to look up an unfamiliar method as it appears.",
    ],
    examples: [{
      title: "Check the first syllabus milestone",
      code: javaProgram(`int[] requests = {4, 2, 3};
int seats = 0;
for (int request : requests) {
    seats += request;
}
System.out.println(seats);`),
      result: "9. For the next milestone, move the loop into a static method named totalSeats that takes an int[] and returns the same result.",
    }],
    quizzes: [{
      question: "Which chapter helps convert this calculation into a reusable operation?",
      options: ["Java Methods", "Java I/O Streams", "Java Cert"],
      answer: 0,
      explanation: "A method can accept the counts as a parameter and return the total to different callers.",
    }],
  },
  {
    title: "Java Study Plan",
    summary: "Practice one rule through prediction, implementation and revision.",
    content: [
      "In your first session, trace a short program on paper, including its boundary inputs. In the second, rebuild its core method from memory and run your previous cases. In the third, change a requirement and add a test that would fail under the old rule.",
      "Apply this sequence to a rule that admits visitors aged twelve and older. First predict the three printed results, then implement the rule from memory. On the third pass, raise the threshold to thirteen and identify the one result that should change.",
    ],
    examples: [{
      title: "Repeat a threshold exercise over three sessions",
      code: javaProgram(`for (int age : new int[] {11, 12, 13}) {
    System.out.println(age + " " + eligible(age));
}`, [], `static boolean eligible(int age) {
    return age >= 12;
}`),
      result: "The lines are 11 false, 12 true and 13 true. Raising the threshold to thirteen changes the middle result.",
    }],
    quizzes: [{
      question: "Which test records the change from minimum age 12 to minimum age 13?",
      options: ["Age 11", "Age 13", "Age 12"],
      answer: 2,
      explanation: "A twelve-year-old qualifies under the original rule and falls below the revised minimum.",
    }],
  },
  {
    title: "Java Interview Q&A",
    summary: "Explain pass-by-value by predicting two effects of a method call.",
    content: [
      "Can a method change an array supplied by its caller? The argument is passed by value. For an array, the copied value is a reference to the same object. The method can use it to change an element.",
      "Can the method reassign the caller's variable to another array? Reassigning the parameter only changes the method's local copy of the reference. Draw both references before and after the new expression to explain the output.",
    ],
    examples: [{
      title: "Mutate an element and rebind a parameter",
      code: javaProgram(`int[] seats = {4};
update(seats);
System.out.println(seats[0]);`, [], `static void update(int[] counts) {
    counts[0]++;
    counts = new int[] {99};
}`),
      result: "5. The first statement in update changes the shared array. The reassignment then makes the local parameter refer to a different array.",
    }],
    quizzes: [{
      question: "What would print if update only contained the reassignment?",
      options: ["99", "4", "5"],
      answer: 1,
      explanation: "Without the element update, the original array retains its initial value of 4.",
    }],
  },
]);
