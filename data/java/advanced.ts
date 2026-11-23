import { javaChapter, javaProgram } from "./chapter";

export const advanced = javaChapter("Java Advanced", "Intermediate", [
  {
    title: "Java Wrapper Classes",
    summary: "Use object representations of primitives in generic collections.",
    content: [
      "Generic type arguments must be reference types. Integer wraps an int and lets a List<Integer> hold whole-number values. Adding an int to that list can automatically box it, and arithmetic on a non-null Integer can automatically unbox it.",
      "Use parseInt when the result should be a primitive and valueOf when an Integer is useful. Unboxing a null reference throws NullPointerException, so handle missing values before using arithmetic.",
    ],
    examples: [{
      title: "Total counts stored as objects",
      code: javaProgram(`List<Integer> counts = new ArrayList<>();
counts.add(3);
counts.add(Integer.valueOf("12"));
int total = counts.get(0) + counts.get(1);
System.out.println(total);`, ["java.util.ArrayList","java.util.List"]),
      result: "15. Adding 3 boxes the number, and adding the retrieved elements unboxes them for arithmetic.",
    }],
    quizzes: [{
      question: "What would happen if counts.get(1) returned null here?",
      options: ["The sum would skip it", "It would count as zero", "Unboxing would throw NullPointerException"],
      answer: 2,
      explanation: "The arithmetic operation needs an int value and cannot obtain one from null.",
    }],
  },
  {
    title: "Java Generics",
    summary: "Use a type parameter to express a relationship between inputs and results.",
    content: [
      "A type parameter stands for a reference type that is chosen when a generic class or method is used. Defining a generic method as <T> T last(List<T> items) makes the result match the element type in the argument.",
      "Callers can retrieve a String from a list of strings or an Integer from a list of integers through the same implementation. Deciding how to handle an empty list is a separate part of the method's contract.",
    ],
    examples: [{
      title: "Retrieve the last item without a cast",
      code: javaProgram(`String stop = last(List.of("Pier", "Square"));
int seat = last(List.of(3, 7, 11));
System.out.println(stop + " " + seat);`, ["java.util.List"], `static <T> T last(List<T> items) {
    if (items.isEmpty()) {
        throw new IllegalArgumentException("Expected at least one item");
    }
    return items.get(items.size() - 1);
}`),
      result: "Square 11. The compiler infers String for the first call and Integer for the second, whose result is unboxed into seat.",
    }],
    quizzes: [{
      question: "For last(List.of(\"red\", \"blue\")), what result type does the compiler infer?",
      options: ["String", "List<String>", "Integer"],
      answer: 0,
      explanation: "The list elements are strings, so T is String and the method returns one string.",
    }],
  },
  {
    title: "Java Annotations",
    summary: "Use @Override to ask the compiler to check an intended override.",
    content: [
      "Annotations attach metadata to declarations and other program elements. Some have compile-time meaning, and libraries can inspect annotations at runtime when their retention policy allows it.",
      "@Override checks that the method really overrides a supertype method. A spelling error or a mismatched parameter list becomes a compile error at the declaration. The overridden method in this example formats an object for printing.",
    ],
    examples: [{
      title: "Catch mistakes in a display method",
      code: javaProgram(`System.out.println(new Seat(12));`, [], `static class Seat {
    final int number;

    Seat(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "Seat " + number;
    }
}`),
      result: "Seat 12. Printing the object uses its toString implementation.",
    }],
    quizzes: [{
      question: "What happens if the annotated method is renamed tostring() with a lowercase s?",
      options: ["The JVM automatically corrects its spelling", "Compilation fails at @Override", "Both spellings override Object.toString()"],
      answer: 1,
      explanation: "Java names are case-sensitive, and tostring() does not override the intended method.",
    }],
  },
  {
    title: "Java RegEx",
    summary: "Compile a pattern and extract the pieces of a structured label.",
    content: [
      "Pattern represents a compiled regular expression. A Matcher applies it to one input. matches() requires the whole input to match, while find() searches for the next matching part. Parentheses capture groups you can read after a successful match.",
      "A Java string literal and a regular expression each interpret backslashes. The character classes [A-Z] and [0-9] used here express the required characters without needing doubled backslashes.",
    ],
    examples: [{
      title: "Split a valid inventory label into two groups",
      code: javaProgram(`Pattern label = Pattern.compile("([A-Z]{2})-([0-9]{3})");
Matcher match = label.matcher("BK-042");
if (match.matches()) {
    System.out.println(match.group(1) + " " + match.group(2));
}
System.out.println(label.matcher("old BK-042").matches());`, ["java.util.regex.Matcher","java.util.regex.Pattern"]),
      result: "BK 042 is printed first. The second line is false because the second input has extra text.",
    }],
    quizzes: [{
      question: "Which call would locate BK-042 inside the longer input?",
      options: ["group(2) before any match attempt", "matches()", "find()"],
      answer: 2,
      explanation: "find searches for a matching region instead of requiring the entire input to match.",
    }],
  },
  {
    title: "Java Threads",
    summary: "Start a worker and wait for its result before reading it.",
    content: [
      "Construct a Thread with a Runnable describing its work. start schedules the task on a new thread of execution. Calling run directly would execute the task synchronously on the caller's thread.",
      "join waits for a started worker to terminate. A successful return makes the worker's completed writes visible to the joining thread. Here only the worker writes to the result, and main reads it after joining.",
    ],
    examples: [{
      title: "Add work counts on a background thread",
      code: javaProgram(`int[] result = {0};
Thread worker = new Thread(() -> {
    for (int count : new int[]{2, 4, 6}) {
        result[0] += count;
    }
});
worker.start();
try {
    worker.join();
} catch (InterruptedException interrupted) {
    Thread.currentThread().interrupt();
    return;
}
System.out.println(result[0]);`),
      result: "On normal completion the program prints 12. If the waiting thread is interrupted, it restores the interrupt flag and exits the method.",
    }],
    quizzes: [{
      question: "Why place the print after join?",
      options: ["To wait for completion and observe the final sum", "To run the worker twice", "To make every array operation atomic"],
      answer: 0,
      explanation: "After a successful join the worker has finished its updates and they are visible to the caller.",
    }],
    reading: { title: "Java 17 Thread API", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Thread.html" },
  },
  {
    title: "Java Lambda",
    summary: "Pass a small operation through a functional interface.",
    content: [
      "A lambda supplies an implementation for the single abstract operation of a functional interface. The target type tells the compiler what parameters and result are expected. An IntPredicate takes an int and produces a boolean.",
      "Pass the rule as an argument so the same counting loop can serve several decisions. Try changing the predicate to count only values equal to 70 and predict which entries still pass.",
    ],
    examples: [{
      title: "Count scores meeting a supplied rule",
      code: javaProgram(`int[] marks = {65, 70, 82};
System.out.println(countMatches(marks, score -> score >= 70));`, ["java.util.function.IntPredicate"], `static int countMatches(int[] values, IntPredicate rule) {
    int matches = 0;
    for (int value : values) {
        if (rule.test(value)) {
            matches++;
        }
    }
    return matches;
}`),
      result: "2. The values 70 and 82 both satisfy the lambda's threshold.",
    }],
    quizzes: [{
      question: "What would countMatches(marks, score -> score == 70) return?",
      options: ["0", "1", "2"],
      answer: 1,
      explanation: "Only one value equals 70 exactly.",
    }],
  },
  {
    title: "Java Optional",
    summary: "Transform a possible result and supply a fallback when it is absent.",
    content: [
      "Optional<T> can represent a present value or the absence of a result. A search can return an Optional so the caller handles both outcomes explicitly. map transforms a present value and preserves an empty result.",
      "Use orElse to provide a simple default at the point where a concrete result is required. When an expensive default should be computed only on absence, orElseGet accepts a supplier.",
    ],
    examples: [{
      title: "Look up a name and display its length",
      code: javaProgram(`List<String> names = List.of("Mira", "Sol");
for (String initial : List.of("M", "Z")) {
    Optional<String> found = names.stream()
        .filter(name -> name.startsWith(initial))
        .findFirst();
    int length = found.map(String::length).orElse(0);
    System.out.println(initial + " " + length);
}`, ["java.util.List","java.util.Optional"]),
      result: "M 4 and Z 0. Mira supplies a four-character name, and no name begins with Z.",
    }],
    quizzes: [{
      question: "What happens to an empty Optional when map(String::length) is called?",
      options: ["It contains null", "It contains zero immediately", "It remains empty"],
      answer: 2,
      explanation: "map runs its function only when a value is present. orElse supplies zero afterward.",
    }],
    reading: { title: "Java 17 Optional API", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Optional.html" },
  },
  {
    title: "Java Advanced Sorting",
    summary: "Combine a descending primary key with an ascending tie-breaker.",
    content: [
      "A Comparator describes how two elements should be ordered. comparingInt builds a numerical comparison from an integer key. reversed changes the direction of the comparator built so far. thenComparing adds another rule to resolve ties.",
      "Here points are ranked from highest to lowest, with names alphabetized within each score. Apply reversed before adding the name rule so it affects only the point comparison. Sort a mutable list when you want its order to change.",
    ],
    examples: [{
      title: "Rank scores and break ties by name",
      code: javaProgram(`List<Entry> scores = new ArrayList<>(List.of(
    new Entry("Bo", 9),
    new Entry("Ada", 9),
    new Entry("Ira", 7)
));
scores.sort(Comparator.comparingInt(Entry::points)
    .reversed()
    .thenComparing(Entry::name));
for (Entry entry : scores) {
    System.out.println(entry.name() + " " + entry.points());
}`, ["java.util.ArrayList","java.util.Comparator","java.util.List"], `record Entry(String name, int points) {}`),
      result: "Ada 9, Bo 9 and Ira 7 appear on separate lines. The two top scores are ordered by name.",
    }],
    quizzes: [{
      question: "Why does Ada appear before Bo?",
      options: ["Their points tie, so the name comparator decides", "reversed puts every name in descending order", "Ada was inserted first"],
      answer: 0,
      explanation: "thenComparing consults the second key only when the first key compares as equal.",
    }],
    reading: { title: "Java 17 Comparator API", url: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html" },
  },
]);
