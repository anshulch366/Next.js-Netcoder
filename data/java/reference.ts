import { javaChapter, javaProgram } from "./chapter";

export const reference = javaChapter("Java Reference", "Intermediate", [
  {
    title: "Java Reference",
    summary: "Read an API entry from its method signature through its return value.",
    content: [
      "Start with the class that owns the operation. In the method summary, read the parameter types, return type and whether the method is static. Check the detailed entry for boundary cases and exceptions.",
      "String.indexOf(String) returns an int. Its contract assigns −1 to an unsuccessful search, which lets the caller distinguish a match at the start from a missing match.",
    ],
    examples: [{
      title: "Locate a marker inside a label",
      code: javaProgram(`String label = "Zone B";
System.out.println(label.indexOf("Zone"));
System.out.println(label.indexOf("Gate"));`),
      result: "The output is 0 and then -1. The first character has index zero.",
    }],
    quizzes: [{
      question: "Which comparison accepts a match anywhere, including at index zero?",
      options: ["position > 0", "position >= 0", "position == -1"],
      answer: 1,
      explanation: "All valid string positions are nonnegative, and a missing match yields -1.",
    }],
    reading: { title: "Java SE 17 · String", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html" },
  },
  {
    title: "Java Keywords",
    summary: "Recognize keywords by how they shape declarations and control flow.",
    content: [
      "Keywords have special meaning in the language grammar. For instance, int declares an integral type, if selects a branch and return sends control back to a caller. Reserved keywords cannot serve as variable names.",
      "Use final on a local variable when its binding should be assigned once. In the program below the threshold stays fixed while the individual scores are tested against it.",
    ],
    examples: [{
      title: "Trace a loop that uses a fixed threshold",
      code: javaProgram(`final int passMark = 70;
for (int score : new int[] {65, 70}) {
    if (score >= passMark) {
        System.out.println(score);
    }
}`),
      result: "Only 70 is printed. The comparison includes the threshold itself.",
    }],
    quizzes: [{
      question: "Which word prevents assigning another value to passMark later?",
      options: ["for", "int", "final"],
      answer: 2,
      explanation: "A final local variable may be assigned only once.",
    }],
    reading: { title: "Java Language Specification · Keywords", url: "https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.9" },
  },
  {
    title: "ArrayList Methods",
    summary: "Insert, replace and remove elements by position.",
    content: [
      "ArrayList grows as elements are added and preserves their order. add(index, value) shifts elements at and after the insertion point. set(index, value) replaces the element already in that slot.",
      "remove(int) deletes by index, shifting later elements one place to the left. With an ArrayList<Integer>, remove(Integer.valueOf(n)) selects the overload that removes a matching value.",
    ],
    examples: [{
      title: "Edit a print queue",
      code: javaProgram(`var jobs = new ArrayList<>(List.of("Map", "Menu"));
jobs.add(1, "Sign");
jobs.set(0, "Atlas");
System.out.println(jobs.remove(1));
System.out.println(jobs);`, ["java.util.ArrayList", "java.util.List"]),
      result: "Sign is removed and printed. The remaining list is [Atlas, Menu].",
    }],
    quizzes: [{
      question: "Which call would remove the text Menu by value?",
      options: ["jobs.remove(\"Menu\")", "jobs.set(1, \"Menu\")", "jobs.get(1)"],
      answer: 0,
      explanation: "Passing a String selects remove(Object), which removes the first equal element.",
    }],
    reading: { title: "Java SE 17 · ArrayList", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html" },
  },
  {
    title: "Arrays Methods",
    summary: "Sort, search and copy fixed-size arrays.",
    content: [
      "Arrays supplies static methods for working with array values. sort modifies its input. binarySearch expects the same sort order and returns a matching index or a negative value encoding an insertion point.",
      "copyOfRange creates another array from a start index up to an excluded end. With primitive elements, changing an element of the result leaves the original array untouched.",
    ],
    examples: [{
      title: "Pick the two shortest durations",
      code: javaProgram(`int[] minutes = {12, 4, 9, 20};
Arrays.sort(minutes);
int[] shortest = Arrays.copyOfRange(minutes, 0, 2);
System.out.println(Arrays.toString(shortest));
System.out.println(Arrays.binarySearch(minutes, 12));`, ["java.util.Arrays"]),
      result: "The program prints [4, 9] and then 2, the sorted position of 12.",
    }],
    quizzes: [{
      question: "Why sort before using binarySearch?",
      options: ["To change the array's length", "To satisfy the search method's ordering requirement", "To turn numbers into strings"],
      answer: 1,
      explanation: "Binary search discards half the search interval based on the order of the values.",
    }],
    reading: { title: "Java SE 17 · Arrays", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Arrays.html" },
  },
  {
    title: "BufferedReader",
    summary: "Read a text source one logical line at a time.",
    content: [
      "BufferedReader reads character data through an underlying Reader. readLine removes the line terminator. A blank line yields an empty string, while reaching the end before reading any characters yields null.",
      "Use the null result to control a loop so blank lines are still processed. Wrapping a StringReader makes line handling easy to test with a small sample.",
    ],
    examples: [{
      title: "Count entries and blank lines",
      code: javaProgram(`int lines = 0;
int blanks = 0;
try (var reader = new BufferedReader(new StringReader("Map\\n\\nAtlas"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        lines++;
        if (line.isEmpty()) blanks++;
    }
}
System.out.println(lines + " lines, " + blanks + " blank");`, ["java.io.BufferedReader", "java.io.StringReader"]),
      result: "3 lines, 1 blank. The last line is read even without a trailing newline.",
    }],
    quizzes: [{
      question: "Which result marks end of input?",
      options: ["An empty string", "A single space", "null"],
      answer: 2,
      explanation: "readLine returns null when no characters remain to form another line.",
    }],
    reading: { title: "Java SE 17 · BufferedReader", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/BufferedReader.html" },
  },
  {
    title: "BufferedWriter",
    summary: "Write text in pieces and flush buffered characters downstream.",
    content: [
      "A BufferedWriter groups small writes before passing characters to its destination. write adds text, newLine adds the platform's line separator, and flush sends pending characters to the underlying writer.",
      "Closing a buffered writer also flushes it. This example flushes explicitly so it can examine the destination while the writer is open.",
    ],
    examples: [{
      title: "Assemble a two-line sign",
      code: javaProgram(`var destination = new StringWriter();
try (var writer = new BufferedWriter(destination)) {
    writer.write("Entrance");
    writer.newLine();
    writer.write("Gallery");
    writer.flush();
    System.out.println(destination.toString().lines().count());
}`, ["java.io.BufferedWriter", "java.io.StringWriter"]),
      result: "The destination contains two lines, so the program prints 2.",
    }],
    quizzes: [{
      question: "Which method delivers pending output while allowing further writes?",
      options: ["flush()", "newLine()", "close()"],
      answer: 0,
      explanation: "flush forwards buffered characters and leaves the writer usable.",
    }],
    reading: { title: "Java SE 17 · BufferedWriter", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/BufferedWriter.html" },
  },
  {
    title: "Character Methods",
    summary: "Classify Unicode characters and convert digit symbols to values.",
    content: [
      "Character provides static tests such as isLetter and isDigit. When scanning arbitrary Unicode text, use the int overloads with code points so a supplementary character can be examined as a single value.",
      "digit(symbol, radix) gives the digit value permitted in that base, or −1 when the symbol is invalid. A hexadecimal letter can therefore have a digit value even though isDigit returns false.",
    ],
    examples: [{
      title: "Interpret a hexadecimal label",
      code: javaProgram(`char symbol = 'B';
System.out.println(Character.isLetter(symbol));
System.out.println(Character.isDigit(symbol));
System.out.println(Character.digit(symbol, 16));`),
      result: "The lines are true, false and 11. B represents eleven in hexadecimal.",
    }],
    quizzes: [{
      question: "What does Character.digit('B', 10) return?",
      options: ["11", "-1", "0"],
      answer: 1,
      explanation: "Base ten accepts digit values zero through nine, so B is invalid.",
    }],
    reading: { title: "Java SE 17 · Character", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Character.html" },
  },
  {
    title: "Collections Methods",
    summary: "Apply a collection-wide operation and inspect what changes.",
    content: [
      "Collections contains static algorithms that operate on collection objects. frequency counts equal elements. rotate rearranges a list by a supplied distance, moving elements at the end around to the front for a positive distance.",
      "Choose a list that supports replacing elements before calling an algorithm that rearranges them. The example uses an ArrayList so its order can change.",
    ],
    examples: [{
      title: "Rotate the next shift to the front",
      code: javaProgram(`var shifts = new ArrayList<>(List.of("day", "day", "night"));
Collections.rotate(shifts, 1);
System.out.println(shifts);
System.out.println(Collections.frequency(shifts, "day"));`, ["java.util.ArrayList", "java.util.List", "java.util.Collections"]),
      result: "The new order is [night, day, day] and the frequency of day is 2.",
    }],
    quizzes: [{
      question: "What does rotating do to the number of day entries?",
      options: ["It removes the last one", "It adds a copy", "It preserves the count"],
      answer: 2,
      explanation: "Rotation rearranges the existing entries.",
    }],
    reading: { title: "Java SE 17 · Collections", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Collections.html" },
  },
  {
    title: "Comparator Methods",
    summary: "Compose a primary sort rule with a tie-breaker.",
    content: [
      "A Comparator supplies an ordering between two objects. comparingInt extracts an integer key and compares those keys. thenComparing adds another rule for pairs tied by the preceding rule.",
      "Apply the combined comparator to a mutable list. Reversing the whole comparator reverses both rules, so attach reversed to just the rule whose direction you intend to change.",
    ],
    examples: [{
      title: "Arrange labels by length and then spelling",
      code: javaProgram(`var labels = new ArrayList<>(List.of("Bee", "Ox", "Ant"));
Comparator<String> byLength = Comparator.comparingInt(String::length);
labels.sort(byLength.thenComparing(Comparator.naturalOrder()));
System.out.println(labels);`, ["java.util.ArrayList", "java.util.List", "java.util.Comparator"]),
      result: "The sorted list is [Ox, Ant, Bee]. Ant comes before Bee among the three-letter labels.",
    }],
    quizzes: [{
      question: "When does the secondary rule run?",
      options: ["When two lengths are equal", "For every pair before the primary rule", "Only for empty strings"],
      answer: 0,
      explanation: "thenComparing delegates to the secondary comparison when the primary comparison returns zero.",
    }],
    reading: { title: "Java SE 17 · Comparator", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html" },
  },
  {
    title: "Date and Time",
    summary: "Choose a calendar date for date-only arithmetic.",
    content: [
      "Use LocalDate for values such as birthdays or due dates that carry no time or time zone. LocalTime models a clock time, Instant represents a point on the timeline and ZonedDateTime connects a local date and time with a zone.",
      "LocalDate values are immutable. plusDays returns the adjusted date and accounts for changes in month or year. Keep its return value to use the new date.",
    ],
    examples: [{
      title: "Find a leap-year deadline",
      code: javaProgram(`LocalDate opened = LocalDate.of(2024, 2, 28);
LocalDate due = opened.plusDays(2);
System.out.println(opened);
System.out.println(due);`, ["java.time.LocalDate"]),
      result: "The dates are 2024-02-28 and 2024-03-01. February 29 is included in the calculation.",
    }],
    quizzes: [{
      question: "Which expression yields February 29 for this example?",
      options: ["opened.minusDays(1)", "opened.plusDays(1)", "opened.plusMonths(1)"],
      answer: 1,
      explanation: "One calendar day after February 28 in the leap year 2024 is February 29.",
    }],
    reading: { title: "Java SE 17 · LocalDate", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/LocalDate.html" },
  },
  {
    title: "Enum Methods",
    summary: "Translate a stored enum name into a typed value.",
    content: [
      "Every enum type supplies values(), which returns its constants in declaration order, and valueOf(String), which looks up an exact declared name. name() returns the identifier used in the declaration.",
      "ordinal() is the zero-based declaration position. Adding or rearranging constants can change positions, so a persisted numeric identifier needs a separately defined mapping.",
    ],
    examples: [{
      title: "Look up a delivery stage",
      code: javaProgram(`Stage stage = Stage.valueOf("PACKED");
System.out.println(stage.name());
System.out.println(Stage.values().length);`, [], "enum Stage { NEW, PACKED, SENT }"),
      result: "The program prints PACKED and 3.",
    }],
    quizzes: [{
      question: "What happens if valueOf receives \"packed\"?",
      options: ["It returns PACKED", "It returns null", "It throws IllegalArgumentException"],
      answer: 2,
      explanation: "Enum lookup requires an exact, case-sensitive name.",
    }],
    reading: { title: "Java SE 17 · Enum", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Enum.html" },
  },
  {
    title: "Errors & Exceptions",
    summary: "Trace a failure through its exception type, message and cause.",
    content: [
      "Throwable is the parent of Exception and Error. An exception can describe a failure a caller expects to handle. Errors often signal serious runtime problems. Catch the specific exception types a program can recover from.",
      "When translating a low-level failure into a domain-specific message, pass the original exception as the cause. The caller can inspect getMessage() for context and getCause() for the underlying failure.",
    ],
    examples: [{
      title: "Preserve a parsing failure as the cause",
      code: javaProgram(`try {
    try {
        Integer.parseInt("two");
    } catch (NumberFormatException cause) {
        throw new IllegalArgumentException("Invalid ticket count", cause);
    }
} catch (IllegalArgumentException problem) {
    System.out.println(problem.getMessage());
    System.out.println(problem.getCause().getClass().getSimpleName());
}`),
      result: "The first line is Invalid ticket count. The second identifies NumberFormatException.",
    }],
    quizzes: [{
      question: "What does getCause() return here?",
      options: ["The original NumberFormatException", "The string Invalid ticket count", "The input converted to zero"],
      answer: 0,
      explanation: "The parsing exception was passed into the constructor of the replacement exception.",
    }],
    reading: { title: "Java SE 17 · Throwable", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Throwable.html" },
  },
  {
    title: "File Methods",
    summary: "Inspect the components of a platform-specific file path.",
    content: [
      "java.io.File represents a pathname. You can construct one and examine getName() or getParentFile() before anything exists on disk. Calls such as exists() and isFile() instead consult the filesystem.",
      "Use a parent and child to construct a path with the appropriate separator for the operating system. To use newer filesystem operations with richer error reporting, convert the File to a Path with toPath().",
    ],
    examples: [{
      title: "Read folder and file names from a path",
      code: javaProgram(`File report = new File(new File("reports"), "weekly.txt");
System.out.println(report.getName());
System.out.println(report.getParentFile().getName());`, ["java.io.File"]),
      result: "The output is weekly.txt followed by reports. These path operations create no files.",
    }],
    quizzes: [{
      question: "Which method returns just weekly.txt?",
      options: ["report.getPath()", "report.getName()", "report.getParent()"],
      answer: 1,
      explanation: "getName returns the final name component of the path.",
    }],
    reading: { title: "Java SE 17 · File", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/File.html" },
  },
  {
    title: "FileInputStream",
    summary: "Read unsigned byte values and detect the end of a file.",
    content: [
      "FileInputStream reads raw bytes. Its single-byte read() returns an int from 0 through 255, or −1 at the end. Keeping the result in an int preserves the distinction between byte value 255 and the end marker.",
      "Create a temporary two-byte file and read past its end. A try-with-resources block closes the stream before the finally block removes the temporary file.",
    ],
    examples: [{
      title: "Distinguish 255 from end of file",
      code: javaProgram(`Path path = Files.createTempFile("byte-input-", ".bin");
try {
    Files.write(path, new byte[] {0, (byte) 255});
    try (var input = new FileInputStream(path.toFile())) {
        System.out.println(input.read());
        System.out.println(input.read());
        System.out.println(input.read());
    }
} finally {
    Files.deleteIfExists(path);
}`, ["java.io.FileInputStream", "java.nio.file.Files", "java.nio.file.Path"]),
      result: "The three values are 0, 255 and -1. The third read finds no byte remaining.",
    }],
    quizzes: [{
      question: "Why does read() return int?",
      options: ["A file can hold only integers", "A Java byte always holds 255", "An extra value is needed to represent the end"],
      answer: 2,
      explanation: "An int can represent every unsigned byte and a distinct negative sentinel.",
    }],
    reading: { title: "Java SE 17 · FileInputStream", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileInputStream.html" },
  },
  {
    title: "FileOutputStream",
    summary: "Write a group of raw bytes to a file.",
    content: [
      "FileOutputStream accepts binary data. write(byte[]) writes the array contents in order. Opening the stream with its usual non-append constructor truncates an existing file. A constructor with append=true instead adds bytes at the end.",
      "Close the stream before checking the result. Files.size measures bytes, so the example can verify the signature without interpreting its bytes as text.",
    ],
    examples: [{
      title: "Write a three-byte signature",
      code: javaProgram(`Path path = Files.createTempFile("signature-", ".bin");
try {
    try (var output = new FileOutputStream(path.toFile())) {
        output.write(new byte[] {70, 77, 1});
    }
    System.out.println(Files.size(path));
} finally {
    Files.deleteIfExists(path);
}`, ["java.io.FileOutputStream", "java.nio.file.Files", "java.nio.file.Path"]),
      result: "The file contains three bytes and the program prints 3.",
    }],
    quizzes: [{
      question: "Which constructor would preserve existing bytes and add new ones at the end?",
      options: ["new FileOutputStream(path.toFile(), true)", "new FileOutputStream(path.toFile())", "new FileInputStream(path.toFile())"],
      answer: 0,
      explanation: "The true append flag positions new writes after the existing contents.",
    }],
    reading: { title: "Java SE 17 · FileOutputStream", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileOutputStream.html" },
  },
  {
    title: "FileReader",
    summary: "Decode a file's bytes into characters using a chosen charset.",
    content: [
      "FileReader is a character reader for text files. Supply the same charset that was used to encode the text. read() returns a UTF-16 code unit as an int, and −1 at end of input.",
      "A character's encoded byte length can differ from the number of UTF-16 code units read. The single letter in this example occupies two UTF-8 bytes and one UTF-16 code unit.",
    ],
    examples: [{
      title: "Decode a UTF-8 letter",
      code: javaProgram(`Path path = Files.createTempFile("letter-", ".txt");
try {
    Files.writeString(path, "é", StandardCharsets.UTF_8);
    try (var reader = new FileReader(path.toFile(), StandardCharsets.UTF_8)) {
        System.out.println(reader.read());
        System.out.println(reader.read());
    }
} finally {
    Files.deleteIfExists(path);
}`, ["java.io.FileReader", "java.nio.charset.StandardCharsets", "java.nio.file.Files", "java.nio.file.Path"]),
      result: "The lines are 233 (the code unit for é) and -1.",
    }],
    quizzes: [{
      question: "Which setting determines how the file's bytes are decoded?",
      options: ["Its filename extension", "The charset passed to FileReader", "The number of read calls"],
      answer: 1,
      explanation: "The reader's charset defines how encoded bytes correspond to characters.",
    }],
    reading: { title: "Java SE 17 · FileReader", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileReader.html" },
  },
  {
    title: "FileWriter",
    summary: "Encode text using a charset and choose whether to append.",
    content: [
      "FileWriter translates characters into bytes for a file. Its constructor can take a Charset and an append flag. Use an explicit charset so another reader can decode the same file consistently.",
      "When several writes open the file separately, use append mode for the writes that should preserve earlier text. Closing each writer flushes pending output.",
    ],
    examples: [{
      title: "Append a label to a temporary note",
      code: javaProgram(`Path path = Files.createTempFile("label-", ".txt");
try {
    try (var first = new FileWriter(path.toFile(), StandardCharsets.UTF_8)) {
        first.write("Room");
    }
    try (var next = new FileWriter(path.toFile(), StandardCharsets.UTF_8, true)) {
        next.write(" 12");
    }
    System.out.println(Files.readString(path, StandardCharsets.UTF_8));
} finally {
    Files.deleteIfExists(path);
}`, ["java.io.FileWriter", "java.nio.charset.StandardCharsets", "java.nio.file.Files", "java.nio.file.Path"]),
      result: "The text reads Room 12 because the second writer appends to the first write.",
    }],
    quizzes: [{
      question: "What would the second writer produce with its append flag set to false?",
      options: ["Room 12 12", "Room", "A space followed by 12"],
      answer: 2,
      explanation: "Opening the file for a fresh write truncates the earlier text.",
    }],
    reading: { title: "Java SE 17 · FileWriter", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/FileWriter.html" },
  },
  {
    title: "HashMap Methods",
    summary: "Build a count per key and supply defaults for missing keys.",
    content: [
      "HashMap associates unique keys with values and supports lookup by an equal key. put inserts or replaces a mapping. getOrDefault reads either the mapped value or a fallback for a missing key.",
      "merge(key, value, combine) inserts the supplied value for a missing or null-valued key. With an existing non-null value it calls the combining function. This can express a tally in a single operation.",
    ],
    examples: [{
      title: "Count repeat visitors by name",
      code: javaProgram(`var counts = new HashMap<String, Integer>();
for (String name : List.of("Bo", "Ari", "Bo")) {
    counts.merge(name, 1, Integer::sum);
}
System.out.println(counts.get("Bo"));
System.out.println(counts.getOrDefault("Kim", 0));`, ["java.util.HashMap", "java.util.List"]),
      result: "The output is 2 and then 0. Looking up Kim with a default leaves the map unchanged.",
    }],
    quizzes: [{
      question: "How many distinct keys are present after both lookups?",
      options: ["2", "3", "4"],
      answer: 0,
      explanation: "Only Bo and Ari were inserted. getOrDefault never inserts its fallback.",
    }],
    reading: { title: "Java SE 17 · HashMap", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html" },
  },
  {
    title: "HashSet Methods",
    summary: "Use a set's method results to recognize first occurrences.",
    content: [
      "HashSet stores one representative of each group of equal elements. add returns true only when the set gains a new member. contains tests membership, and remove reports whether it removed an element.",
      "Use the boolean result directly when recording a visit that should count once. HashSet has no guaranteed iteration order, so use membership or size for predictable assertions.",
    ],
    examples: [{
      title: "Detect a repeat ticket scan",
      code: javaProgram(`var scanned = new HashSet<String>();
System.out.println(scanned.add("A1"));
System.out.println(scanned.add("A1"));
System.out.println(scanned.size());`, ["java.util.HashSet"]),
      result: "The first scan returns true, the repeat returns false and the set size is 1.",
    }],
    quizzes: [{
      question: "What will scanned.remove(\"A1\") return immediately after this example?",
      options: ["false", "true", "The string A1"],
      answer: 1,
      explanation: "A1 is present, so removing it changes the set and returns true.",
    }],
    reading: { title: "Java SE 17 · HashSet", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashSet.html" },
  },
  {
    title: "Integer Methods",
    summary: "Parse a string in a specified base and format the resulting integer.",
    content: [
      "Integer.parseInt(text, radix) accepts digits valid in the supplied base and returns a primitive int. Invalid input or a value outside the int range raises NumberFormatException. Integer.valueOf can instead supply an Integer object.",
      "Integer.toString(value, radix) converts a stored value to a positional string. Choosing another display base changes the text but preserves the numeric value.",
    ],
    examples: [{
      title: "Convert a hexadecimal room code",
      code: javaProgram(`int room = Integer.parseInt("1E", 16);
System.out.println(room);
System.out.println(Integer.toString(room, 2));`),
      result: "The decimal value is 30. Its binary representation is 11110.",
    }],
    quizzes: [{
      question: "What does Integer.parseInt(\"10\", 16) return?",
      options: ["10", "2", "16"],
      answer: 2,
      explanation: "The digit in the sixteens position contributes sixteen.",
    }],
    reading: { title: "Java SE 17 · Integer", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Integer.html" },
  },
  {
    title: "Iterator Methods",
    summary: "Traverse a collection and remove the most recently returned item.",
    content: [
      "An Iterator moves forward through its source. hasNext checks whether another element is available and next retrieves it. After exhaustion, next throws NoSuchElementException.",
      "For an iterator that supports removal, call remove once after a successful next to delete that returned element. Use the iterator consistently for structural edits during the traversal.",
    ],
    examples: [{
      title: "Drop empty labels during traversal",
      code: javaProgram(`var labels = new ArrayList<>(List.of("East", "", "West"));
Iterator<String> it = labels.iterator();
while (it.hasNext()) {
    if (it.next().isEmpty()) {
        it.remove();
    }
}
System.out.println(labels);`, ["java.util.ArrayList", "java.util.List", "java.util.Iterator"]),
      result: "The blank label is removed and the program prints [East, West].",
    }],
    quizzes: [{
      question: "Which operation establishes the element a subsequent remove() will delete?",
      options: ["next()", "hasNext()", "Creating the iterator"],
      answer: 0,
      explanation: "remove applies to the element most recently returned by next.",
    }],
    reading: { title: "Java SE 17 · Iterator", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Iterator.html" },
  },
  {
    title: "LinkedHashMap Methods",
    summary: "Predict how key iteration changes in access-order mode.",
    content: [
      "A default LinkedHashMap iterates in insertion order. The constructor with an access-order flag of true instead orders entries from least recently accessed to most recently accessed.",
      "A successful get moves that entry to the recent end of an access-ordered map. Iterate keySet() to inspect the order after a lookup.",
    ],
    examples: [{
      title: "Trace recently viewed exhibits",
      code: javaProgram(`var views = new LinkedHashMap<String, Integer>(16, 0.75f, true);
views.put("Map", 1);
views.put("Clock", 2);
views.put("Quilt", 3);
views.get("Map");
System.out.println(views.keySet());`, ["java.util.LinkedHashMap"]),
      result: "The order is [Clock, Quilt, Map]. Viewing Map makes it the most recently accessed entry.",
    }],
    quizzes: [{
      question: "Which key is least recently accessed at the end?",
      options: ["Map", "Clock", "Quilt"],
      answer: 1,
      explanation: "Clock is the oldest untouched entry after Map moves to the recent end.",
    }],
    reading: { title: "Java SE 17 · LinkedHashMap", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedHashMap.html" },
  },
  {
    title: "LinkedHashSet Methods",
    summary: "Keep unique items in the order they first arrive.",
    content: [
      "LinkedHashSet combines set membership with insertion-order iteration. Adding an equal element again leaves the original entry in its place. Iterating the set therefore gives distinct elements in their first-seen order.",
      "Removing an element and then adding it again makes it a new insertion. That moves it to the end and is useful when explicitly revising the order.",
    ],
    examples: [{
      title: "Update a queue of distinct destinations",
      code: javaProgram(`var stops = new LinkedHashSet<>(List.of("Park", "Pier", "Park"));
System.out.println(stops);
stops.remove("Park");
stops.add("Park");
System.out.println(stops);`, ["java.util.LinkedHashSet", "java.util.List"]),
      result: "The first order is [Park, Pier]. The second is [Pier, Park].",
    }],
    quizzes: [{
      question: "What would adding Pier again at the end do?",
      options: ["Move Pier to the last position", "Insert a second Pier", "Keep the order [Pier, Park]"],
      answer: 2,
      explanation: "Reinserting an existing member leaves its insertion position unchanged.",
    }],
    reading: { title: "Java SE 17 · LinkedHashSet", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedHashSet.html" },
  },
  {
    title: "LinkedList Methods",
    summary: "Use deque operations at both ends of a linked list.",
    content: [
      "LinkedList implements List and Deque. addFirst and addLast insert at the ends. peekFirst inspects the first item, while pollFirst returns and removes it. Both return null for an empty deque.",
      "A deque with non-null items can use pollFirst until a null result signals exhaustion. removeFirst instead raises an exception if the deque is empty.",
    ],
    examples: [{
      title: "Serve an urgent request first",
      code: javaProgram(`var requests = new LinkedList<String>();
requests.addLast("Regular");
requests.addFirst("Urgent");
System.out.println(requests.peekFirst());
System.out.println(requests.pollFirst());
System.out.println(requests);`, ["java.util.LinkedList"]),
      result: "The first two lines both read Urgent. The remaining list is [Regular].",
    }],
    quizzes: [{
      question: "Which method inspects the first item without removing it?",
      options: ["peekFirst()", "pollFirst()", "removeFirst()"],
      answer: 0,
      explanation: "peekFirst leaves the deque intact so the next removal retrieves the same head.",
    }],
    reading: { title: "Java SE 17 · LinkedList", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedList.html" },
  },
  {
    title: "Math Methods",
    summary: "Round a fractional capacity calculation in the direction the task requires.",
    content: [
      "Math.ceil returns the smallest integral double at least as large as its argument. Math.floor rounds toward negative infinity and Math.round selects a nearest integer using its documented tie rule.",
      "Force floating-point division before rounding. If both operands are integers, division discards the fraction before ceil can use it.",
    ],
    examples: [{
      title: "Find the number of vans needed",
      code: javaProgram(`int riders = 17;
int seats = 8;
int vans = (int) Math.ceil((double) riders / seats);
System.out.println(vans);`),
      result: "The result is 3. Two vans hold sixteen people, leaving one rider for a third van.",
    }],
    quizzes: [{
      question: "What does Math.ceil(17 / 8) return?",
      options: ["3.0", "2.0", "2.125"],
      answer: 1,
      explanation: "Integer division computes 2 before the value reaches ceil.",
    }],
    reading: { title: "Java SE 17 · Math", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Math.html" },
  },
  {
    title: "Optional Methods",
    summary: "Transform a possible value and supply a fallback when absent.",
    content: [
      "Optional.ofNullable accepts a reference that may be null. map transforms a present value and filter retains it only when a predicate succeeds. Operations on an empty Optional in this chain produce another empty Optional.",
      "Finish with orElse for a simple fallback or orElseGet for a fallback calculated on demand. The example treats a blank label as absent after trimming.",
    ],
    examples: [{
      title: "Choose a display label",
      code: javaProgram(`String raw = "   ";
String label = Optional.ofNullable(raw)
    .map(String::strip)
    .filter(text -> !text.isEmpty())
    .orElse("Untitled");
System.out.println(label);`, ["java.util.Optional"]),
      result: "The program prints Untitled. Stripping the spaces yields an empty string, which the filter rejects.",
    }],
    quizzes: [{
      question: "If raw is \" Map \", what gets printed?",
      options: ["Untitled", " Map with both spaces", "Map"],
      answer: 2,
      explanation: "strip produces Map and the nonempty result passes the filter.",
    }],
    reading: { title: "Java SE 17 · Optional", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Optional.html" },
  },
  {
    title: "Output Methods",
    summary: "Choose PrintStream methods for continuing, finishing and formatting a line.",
    content: [
      "System.out is a PrintStream. print writes a value and leaves the line open, while println finishes the line. printf combines a format string with arguments. In a format string, %n emits the platform line separator.",
      "Formatting numbers can depend on the default locale. Pass Locale.ROOT when an example needs a consistent decimal point across machines.",
    ],
    examples: [{
      title: "Print a receipt label",
      code: javaProgram(`System.out.print("Total ");
System.out.printf(Locale.ROOT, "%.2f%n", 7.5);
System.out.println("Paid");`, ["java.util.Locale"]),
      result: "The two lines are Total 7.50 and Paid.",
    }],
    quizzes: [{
      question: "Which part requests exactly two digits after the decimal point?",
      options: ["%.2f", "%n", "Locale.ROOT"],
      answer: 0,
      explanation: "The precision on the floating-point conversion controls the number of fractional digits.",
    }],
    reading: { title: "Java SE 17 · PrintStream", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/PrintStream.html" },
  },
  {
    title: "Random Methods",
    summary: "Generate repeatable choices within a bounded range.",
    content: [
      "Random.nextInt(bound) returns a pseudorandom integer from zero up to but excluding a positive bound. Adding one shifts that interval to one through the bound, as for a die roll.",
      "Two Random objects created with the same seed and given the same sequence of method calls produce matching outputs. This helps reproduce a test case whose input was generated.",
    ],
    examples: [{
      title: "Reproduce the first roll in a game test",
      code: javaProgram(`Random first = new Random(42);
Random replay = new Random(42);
int roll = first.nextInt(6) + 1;
System.out.println(roll >= 1 && roll <= 6);
System.out.println(roll == replay.nextInt(6) + 1);`, ["java.util.Random"]),
      result: "Both lines are true. The roll is in range and the second generator repeats it.",
    }],
    quizzes: [{
      question: "Which expression chooses a valid index in a nonempty list of size n?",
      options: ["nextInt(n) + 1", "nextInt(n)", "nextInt(n + 1)"],
      answer: 1,
      explanation: "Valid indices start at zero and stop before n, matching nextInt(n).",
    }],
    reading: { title: "Java SE 17 · Random", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Random.html" },
  },
  {
    title: "RegEx Methods",
    summary: "Find repeated matches and extract a captured part of each match.",
    content: [
      "Pattern.compile prepares a regular expression. Its matcher(text) method creates a Matcher with a search position. matches tests the entire region, while repeated find calls advance through matching subsequences.",
      "Parentheses capture part of the match. After find succeeds, group(0) returns the whole match and group(1) returns the first captured group. Call group only when a match is available.",
    ],
    examples: [{
      title: "Read the numbers from shelf labels",
      code: javaProgram(`Pattern shelf = Pattern.compile("S-([0-9]+)");
Matcher matches = shelf.matcher("Use S-12 then S-7");
while (matches.find()) {
    System.out.println(matches.group(1));
}`, ["java.util.regex.Pattern", "java.util.regex.Matcher"]),
      result: "The program prints 12 and 7 on separate lines.",
    }],
    quizzes: [{
      question: "What would group(0) yield on the first successful find?",
      options: ["12", "Use S-12 then S-7", "S-12"],
      answer: 2,
      explanation: "Group zero contains the entire matched subsequence, including the S- prefix.",
    }],
    reading: { title: "Java SE 17 · Matcher", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Matcher.html" },
  },
  {
    title: "Scanner Methods",
    summary: "Separate token-oriented reads from line-oriented reads.",
    content: [
      "Scanner divides input into tokens using whitespace by default. hasNextInt checks whether the next token can be read as an int without consuming it. nextInt then consumes that token.",
      "nextLine behaves differently. It takes the rest of the current line and advances past its terminator. After a number immediately followed by a newline, that remainder is an empty string.",
    ],
    examples: [{
      title: "Read a ticket count and a full name",
      code: javaProgram(`try (var input = new Scanner("2\\nAri Lee\\n")) {
    int tickets = input.nextInt();
    input.nextLine();
    String name = input.nextLine();
    System.out.println(name + " booked " + tickets);
}`, ["java.util.Scanner"]),
      result: "The result is Ari Lee booked 2. The first nextLine consumes the empty remainder after 2.",
    }],
    quizzes: [{
      question: "What would name contain if the first nextLine were removed?",
      options: ["An empty string", "Ari Lee", "2"],
      answer: 0,
      explanation: "After nextInt stops at the end of the numeric token, the current line has no further characters.",
    }],
    reading: { title: "Java SE 17 · Scanner", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html" },
  },
  {
    title: "String Methods",
    summary: "Normalize and slice a label with immutable string operations.",
    content: [
      "String methods such as strip, replace and substring return text values. Assign their results or chain the calls to keep the transformation. equals compares content and startsWith tests a prefix.",
      "substring(begin, end) uses a zero-based, included start and an excluded end. For this ASCII code the first three positions hold the location identifier.",
    ],
    examples: [{
      title: "Normalize and split a location code",
      code: javaProgram(`String raw = "  HUB-204  ";
String code = raw.strip();
System.out.println(code.substring(0, 3));
System.out.println(code.endsWith("204"));`),
      result: "The output is HUB and true. raw still includes its original spaces.",
    }],
    quizzes: [{
      question: "Which expression returns 204 from code?",
      options: ["code.substring(3)", "code.substring(4)", "code.substring(0, 4)"],
      answer: 1,
      explanation: "Index three contains the hyphen and index four starts the number.",
    }],
    reading: { title: "Java SE 17 · String", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html" },
  },
  {
    title: "StringBuilder Methods",
    summary: "Edit a mutable character sequence and then take a string snapshot.",
    content: [
      "A StringBuilder accumulates text in a mutable buffer. append adds at the end, insert adds at an offset and replace substitutes an index range with an excluded end. These operations change the same builder.",
      "Call toString when a stable string is needed. Subsequent edits to the builder leave that earlier string value intact.",
    ],
    examples: [{
      title: "Create a draft and then change its number",
      code: javaProgram(`var label = new StringBuilder("Room");
label.append(" 12");
String draft = label.toString();
label.replace(5, 7, "14");
System.out.println(draft);
System.out.println(label);`),
      result: "The saved draft is Room 12. The updated builder reads Room 14.",
    }],
    quizzes: [{
      question: "Which indices does replace(5, 7, \"14\") remove?",
      options: ["5, 6 and 7", "6 and 7", "5 and 6"],
      answer: 2,
      explanation: "The replacement begins at five and stops just before seven.",
    }],
    reading: { title: "Java SE 17 · StringBuilder", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/StringBuilder.html" },
  },
  {
    title: "System Methods",
    summary: "Copy a range between positions with System.arraycopy.",
    content: [
      "System exposes runtime utilities, standard streams and system properties. For elapsed-time measurements use differences between System.nanoTime readings. For bulk array transfers use its static arraycopy method.",
      "arraycopy takes source, source start, destination, destination start and element count. It supports overlapping regions of the same array as if the source range were first copied aside.",
    ],
    examples: [{
      title: "Shift three slots to the right",
      code: javaProgram(`int[] slots = {1, 2, 3, 4};
System.arraycopy(slots, 0, slots, 1, 3);
System.out.println(Arrays.toString(slots));`, ["java.util.Arrays"]),
      result: "The array becomes [1, 1, 2, 3]. The original first three values are copied into positions one through three.",
    }],
    quizzes: [{
      question: "What does the final argument 3 specify?",
      options: ["The number of elements to copy", "The last source index", "The new size of the array"],
      answer: 0,
      explanation: "arraycopy interprets its final int as a length.",
    }],
    reading: { title: "Java SE 17 · System", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/System.html" },
  },
  {
    title: "Thread Methods",
    summary: "Start a worker and wait for its writes before reading its result.",
    content: [
      "Calling start schedules a new thread to run its task. Calling run directly simply executes that code on the caller. Each Thread instance can be started once.",
      "join waits for that thread to finish. After a successful join, the caller can observe writes performed by the completed worker. This example uses one writer and reads only after joining.",
    ],
    examples: [{
      title: "Collect a worker's computed answer",
      code: javaProgram(`int[] result = {0};
Thread worker = new Thread(() -> result[0] = 6 * 7);
worker.start();
worker.join();
System.out.println(result[0]);`),
      result: "The program prints 42 after the worker terminates.",
    }],
    quizzes: [{
      question: "Which operation waits for completion?",
      options: ["worker.start()", "worker.join()", "worker.getName()"],
      answer: 1,
      explanation: "join makes the calling thread wait for the target thread's termination.",
    }],
    reading: { title: "Java SE 17 · Thread", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.html" },
  },
  {
    title: "TreeMap Methods",
    summary: "Look up a value at the nearest ordered key.",
    content: [
      "TreeMap keeps keys ordered by their natural ordering or a supplied comparator. floorEntry(key) returns the entry with the greatest key at or below the target. ceilingEntry uses the smallest key at or above it.",
      "Store the start of each pricing band as a key, then use floorEntry to find the active band. Handle null when a target falls below the smallest key.",
    ],
    examples: [{
      title: "Find a group's admission tier",
      code: javaProgram(`var price = new TreeMap<Integer, Integer>();
price.put(1, 12);
price.put(5, 10);
price.put(10, 8);
System.out.println(price.floorEntry(7).getValue());
System.out.println(price.ceilingKey(7));`, ["java.util.TreeMap"]),
      result: "Seven visitors qualify for price 10. The next threshold above seven is 10 visitors.",
    }],
    quizzes: [{
      question: "Which call finds the current threshold for exactly five visitors?",
      options: ["price.lowerKey(5)", "price.higherKey(5)", "price.floorKey(5)"],
      answer: 2,
      explanation: "floorKey includes an exact matching key and otherwise moves downward.",
    }],
    reading: { title: "Java SE 17 · TreeMap", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html" },
  },
  {
    title: "TreeSet Methods",
    summary: "Choose inclusive or strict neighbors in a sorted set.",
    content: [
      "TreeSet combines unique elements with sorted iteration. lower and higher find strict neighbors. floor and ceiling include an equal value if present. These navigation methods return null when there is no suitable element.",
      "subSet(from, fromInclusive, to, toInclusive) provides a view over a bounded range. The explicit flags make the endpoints of a search window visible.",
    ],
    examples: [{
      title: "Find neighboring departure times",
      code: javaProgram(`var departures = new TreeSet<>(List.of(9, 12, 15, 18));
System.out.println(departures.lower(12));
System.out.println(departures.ceiling(12));
System.out.println(departures.subSet(12, true, 18, false));`, ["java.util.TreeSet", "java.util.List"]),
      result: "The results are 9, 12 and [12, 15]. The range excludes its upper bound.",
    }],
    quizzes: [{
      question: "Which call yields the first departure strictly after 12?",
      options: ["departures.higher(12)", "departures.ceiling(12)", "departures.floor(12)"],
      answer: 0,
      explanation: "higher skips an equal element and chooses the next larger one.",
    }],
    reading: { title: "Java SE 17 · TreeSet", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeSet.html" },
  },
]);
