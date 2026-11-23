import { javaChapter, javaProgram } from "./chapter";

export const structures = javaChapter("Java Data Structures", "Intermediate", [
  {
    title: "Java Data Structures",
    summary: "Select a representation from the questions your program must answer.",
    content: [
      "Start by asking how data will be retrieved. A list keeps a position for each entry, a set tracks membership, and a map associates a key with a value. Each structure preserves different information about the same input.",
      "A visitor log includes repeated visits and their arrival order. Construct a set from the same log to count distinct visitors while keeping the original list for questions about individual visits.",
    ],
    examples: [{
      title: "Count visits and people separately",
      code: javaProgram(`List<String> visits = List.of("Ira", "Mei", "Ira");
Set<String> visitors = new HashSet<>(visits);
System.out.println("Visits: " + visits.size());
System.out.println("People: " + visitors.size());
System.out.println("First: " + visits.get(0));`, ["java.util.List","java.util.Set","java.util.HashSet"]),
      result: "The counts are 3 visits and 2 people. The first visit belongs to Ira.",
    }],
    quizzes: [{
      question: "Which structure should retain all three visits in arrival order?",
      options: ["List", "Set", "A single counter"],
      answer: 0,
      explanation: "A list preserves repetition and positions, so either visit by Ira remains identifiable by its index.",
    }],
  },
  {
    title: "Java Collections",
    summary: "Program to a collection interface and reuse operations across implementations.",
    content: [
      "Collection describes common operations such as size, contains and iteration. List and Set extend it. Map has a separate interface for key-value associations. Collections, with a final s, is a utility class containing algorithms.",
      "Both variables use the Collection<String> interface. Pass either one to Collections.frequency to count elements equal to the requested value. A set can contribute at most one match.",
    ],
    examples: [{
      title: "Compare the frequency of a value across collections",
      code: javaProgram(`Collection<String> log = List.of("oak", "ash", "oak");
Collection<String> types = new HashSet<>(log);
System.out.println(Collections.frequency(log, "oak"));
System.out.println(Collections.frequency(types, "oak"));`, ["java.util.Collection","java.util.Collections","java.util.List","java.util.HashSet"]),
      result: "The list contains oak twice, while the set contains it once. The program prints 2 then 1.",
    }],
    quizzes: [{
      question: "Why can frequency accept both arguments?",
      options: ["Both preserve duplicates", "Both implement Collection", "Both are arrays"],
      answer: 1,
      explanation: "The method works with the operations exposed by Collection, an interface both arguments implement.",
    }],
  },
  {
    title: "Java List",
    summary: "Use zero-based positions to read, replace and insert items.",
    content: [
      "A List represents an ordered sequence that can contain duplicates. get reads a position. On a modifiable list, set replaces an existing element and add(index, value) inserts an element, shifting later entries to the right.",
      "Copy the starting stops into a mutable ArrayList. Replace a stop to correct its name, then insert a new stop before it. Compare the final list with the original two positions.",
    ],
    examples: [{
      title: "Revise an ordered route",
      code: javaProgram(`List<String> route = new ArrayList<>(List.of("Gate", "Hall"));
route.set(1, "Library");
route.add(1, "Garden");
System.out.println(route);
System.out.println(route.get(2));`, ["java.util.List","java.util.ArrayList"]),
      result: "The route becomes [Gate, Garden, Library]. Library moves to index 2 after insertion.",
    }],
    quizzes: [{
      question: "Which operation changes a value without changing the size?",
      options: ["add(1, value)", "remove(1)", "set(1, value)"],
      answer: 2,
      explanation: "set replaces the existing element at index 1 and preserves the remaining positions.",
    }],
  },
  {
    title: "Java ArrayList",
    summary: "Track list size as a resizable array grows and shrinks.",
    content: [
      "ArrayList stores elements in a resizable array. Indexed access is efficient, and appending usually uses spare capacity. Inserting or removing in the middle requires moving the following elements to close or open a gap.",
      "Capacity is room for future elements. A new list constructed with capacity ten still has size zero. In a list of Integer, remove(int) takes an index. Pass an Integer object to remove a matching value.",
    ],
    examples: [{
      title: "Remove a ticket number by value",
      code: javaProgram(`ArrayList<Integer> tickets = new ArrayList<>(10);
tickets.add(8);
tickets.add(3);
tickets.add(8);
tickets.remove(Integer.valueOf(8));
System.out.println(tickets);
System.out.println(tickets.size());`, ["java.util.ArrayList"]),
      result: "Removing the first occurrence of 8 leaves [3, 8], with size 2.",
    }],
    quizzes: [{
      question: "What would tickets.remove(1) remove from the final list?",
      options: ["The value 8 at index 1", "The integer value 1", "The entire backing array"],
      answer: 0,
      explanation: "Passing a primitive int selects the indexed removal overload.",
    }],
  },
  {
    title: "Java LinkedList",
    summary: "Use both ends of a linked sequence to manage a work queue.",
    content: [
      "LinkedList connects adjacent nodes in both directions and implements the Deque interface. Adding and removing at either end suits queue operations. Looking up an arbitrary numeric index can require traversing several nodes.",
      "Put normal jobs at the back and an urgent job at the front. pollFirst returns and removes the first item, or returns null when the deque is empty.",
    ],
    examples: [{
      title: "Prioritize a print queue",
      code: javaProgram(`Deque<String> jobs = new LinkedList<>();
jobs.addLast("poster");
jobs.addLast("map");
jobs.addFirst("urgent label");
System.out.println(jobs.pollFirst());
System.out.println(jobs.peekFirst());
System.out.println(jobs.size());`, ["java.util.Deque","java.util.LinkedList"]),
      result: "The program prints urgent label, poster and 2. Peeking at poster leaves it in the queue.",
    }],
    quizzes: [{
      question: "Which call observes the next job while keeping it queued?",
      options: ["pollFirst()", "peekFirst()", "removeFirst()"],
      answer: 1,
      explanation: "peekFirst returns the front element without changing the deque.",
    }],
  },
  {
    title: "Java List Sorting",
    summary: "Sort a mutable list with a comparator that states the intended order.",
    content: [
      "List.sort rearranges a modifiable list in place. A comparator compares two elements and can order them by a derived value. List sorting is stable, so items that compare equal keep their previous relative order.",
      "Sort room names by length. Two names have length three. Their relative order after sorting reveals what happens when the comparator returns zero.",
    ],
    examples: [{
      title: "Group labels by increasing length",
      code: javaProgram(`List<String> rooms = new ArrayList<>(List.of("North", "Bay", "Lab", "A"));
rooms.sort(Comparator.comparingInt(String::length));
System.out.println(rooms);`, ["java.util.List","java.util.ArrayList","java.util.Comparator"]),
      result: "The order is [A, Bay, Lab, North]. Bay stays ahead of Lab because both have length three.",
    }],
    quizzes: [{
      question: "How could you order tied lengths alphabetically as well?",
      options: ["Call clear() before sorting", "Compare only the first element", "Add a secondary comparator with thenComparing"],
      answer: 2,
      explanation: "thenComparing consults the next ordering rule when the first comparator reports a tie.",
    }],
  },
  {
    title: "Java Set",
    summary: "Find the members shared by two groups.",
    content: [
      "A Set contains each distinct element once. add returns whether an element was newly inserted. Set operations express relationships between whole groups. retainAll keeps the intersection and mutates its receiver.",
      "Copy a day's attendee set into a mutable HashSet before taking its intersection with another day. The resulting membership test can tell whether a participant attended both events.",
    ],
    examples: [{
      title: "Find the participants who returned",
      code: javaProgram(`Set<String> monday = Set.of("Nia", "Ali", "Bo");
Set<String> friday = Set.of("Bo", "Nia", "Kai");
Set<String> returning = new HashSet<>(monday);
returning.retainAll(friday);
System.out.println(returning.size());
System.out.println(returning.contains("Ali"));`, ["java.util.Set","java.util.HashSet"]),
      result: "The shared members are Nia and Bo. The program prints 2 and false.",
    }],
    quizzes: [{
      question: "Why make a mutable copy before calling retainAll?",
      options: ["To update a separate working set while preserving monday", "To allow duplicates in returning", "To alphabetize the members"],
      answer: 0,
      explanation: "retainAll changes the receiver. A mutable copy supports that operation and preserves the original set.",
    }],
  },
  {
    title: "Java HashSet",
    summary: "Detect duplicate identifiers without depending on their iteration order.",
    content: [
      "HashSet uses hashing and equality to recognize values. Under typical hash distribution its basic membership operations have constant expected cost. It gives no guarantee about traversal order.",
      "Use the Boolean result of add to distinguish a first scan from a repeated scan in one call. Iterate over the original sequence so the duplicate report follows the incoming events.",
    ],
    examples: [{
      title: "Report repeated barcode scans",
      code: javaProgram(`Set<String> scanned = new HashSet<>();
for (String code : List.of("B7", "B9", "B7", "B1")) {
    if (!scanned.add(code)) {
        System.out.println("Repeat " + code);
    }
}
System.out.println("Distinct: " + scanned.size());`, ["java.util.Set","java.util.HashSet","java.util.List"]),
      result: "The second B7 prints Repeat B7. The final distinct count is 3.",
    }],
    quizzes: [{
      question: "What does add return for the second B7?",
      options: ["true", "false", "null"],
      answer: 1,
      explanation: "The equal string is already present, so the set is unchanged and add returns false.",
    }],
  },
  {
    title: "Java TreeSet",
    summary: "Use a sorted set to find the next available value.",
    content: [
      "TreeSet maintains unique elements in their natural order or a supplied comparator's order. It exposes navigation operations such as floor and ceiling. ceiling returns the smallest stored element at least as large as the search key.",
      "Use sorted appointment times to find the next slot without scanning them in arrival order. The exact match illustrates that ceiling includes equality, whereas higher moves strictly beyond the key.",
    ],
    examples: [{
      title: "Locate the next appointment slot",
      code: javaProgram(`TreeSet<Integer> slots = new TreeSet<>(List.of(11, 9, 14, 11));
System.out.println(slots);
System.out.println(slots.ceiling(10));
System.out.println(slots.higher(11));`, ["java.util.TreeSet","java.util.List"]),
      result: "The stored slots are [9, 11, 14]. The first slot at or after 10 is 11, and the next slot after 11 is 14.",
    }],
    quizzes: [{
      question: "What would slots.ceiling(15) return?",
      options: ["14", "15", "null"],
      answer: 2,
      explanation: "No stored slot is greater than or equal to 15.",
    }],
  },
  {
    title: "Java LinkedHashSet",
    summary: "Remove duplicates while preserving first-encounter order.",
    content: [
      "LinkedHashSet combines set membership with a linked encounter order. New elements appear at the end. Adding an element that is already present leaves its original position intact.",
      "Copy the signup sequence into a LinkedHashSet. The names print in first-signup order even when a participant registers again later.",
    ],
    examples: [{
      title: "Build a first-come workshop roster",
      code: javaProgram(`List<String> signups = List.of("Zoe", "Ben", "Zoe", "Ari");
Set<String> roster = new LinkedHashSet<>(signups);
roster.add("Ben");
System.out.println(roster);`, ["java.util.List","java.util.Set","java.util.LinkedHashSet"]),
      result: "The roster prints [Zoe, Ben, Ari]. Neither repeat signup moves an existing name.",
    }],
    quizzes: [{
      question: "If Ben is removed and then added again, where does Ben appear?",
      options: ["At the end", "At the beginning", "In alphabetical order"],
      answer: 0,
      explanation: "Removal drops the old position. The later insertion creates a new position after the remaining entries.",
    }],
  },
  {
    title: "Java Map",
    summary: "Associate each key with one current value.",
    content: [
      "A Map supports lookup by key and can store the same value for different keys. Calling put with an existing key replaces that key's value and returns the previous value. Use containsKey to ask whether a mapping exists.",
      "Assign lockers to pupils using their names. Moving a pupil to a new locker changes one mapping. The size still counts distinct names, even if a key receives several updates.",
    ],
    examples: [{
      title: "Move a locker assignment",
      code: javaProgram(`Map<String, Integer> lockers = new HashMap<>();
lockers.put("Kai", 12);
lockers.put("Rin", 14);
int previous = lockers.put("Kai", 18);
System.out.println(previous + " -> " + lockers.get("Kai"));
System.out.println(lockers.size());`, ["java.util.Map","java.util.HashMap"]),
      result: "The output is 12 -> 18 and then 2. Kai and Rin remain the two keys.",
    }],
    quizzes: [{
      question: "What is being counted by lockers.size()?",
      options: ["Every call to put", "The sum of locker numbers", "The current distinct keys"],
      answer: 2,
      explanation: "Each name has a single mapping, so revising Kai's assignment leaves the size unchanged.",
    }],
  },
  {
    title: "Java HashMap",
    summary: "Build a frequency table with a hash-based map.",
    content: [
      "HashMap locates keys using hashCode and equals. A key's equality and hash code should remain stable while it is in the map. Immutable keys such as strings suit this requirement.",
      "Use merge to accumulate votes. When the key is absent, merge inserts the supplied initial count. When it has a value, Integer::sum combines the existing count and the incoming count. Look up particular keys to display predictable results.",
    ],
    examples: [{
      title: "Tally trail votes",
      code: javaProgram(`Map<String, Integer> votes = new HashMap<>();
for (String trail : List.of("Lake", "Ridge", "Lake")) {
    votes.merge(trail, 1, Integer::sum);
}
System.out.println(votes.get("Lake"));
System.out.println(votes.getOrDefault("Creek", 0));`, ["java.util.Map","java.util.HashMap","java.util.List"]),
      result: "Lake has two votes. The missing Creek key yields the fallback 0.",
    }],
    quizzes: [{
      question: "After getOrDefault(\"Creek\", 0), what is votes.containsKey(\"Creek\")?",
      options: ["false", "true", "It throws an exception"],
      answer: 0,
      explanation: "getOrDefault reads a value or returns a fallback without inserting it.",
    }],
  },
  {
    title: "Java TreeMap",
    summary: "Find the rule whose starting boundary covers a given value.",
    content: [
      "A TreeMap maintains keys in sorted order. floorEntry(k) returns the entry with the greatest key less than or equal to k. This makes it useful for tables of thresholds. A query below the lowest key returns null.",
      "Store each reading level under its minimum score. Because the example includes zero as the lowest boundary, a nonnegative score has a matching threshold.",
    ],
    examples: [{
      title: "Choose a level from minimum scores",
      code: javaProgram(`TreeMap<Integer, String> levels = new TreeMap<>();
levels.put(80, "Advanced");
levels.put(0, "Foundation");
levels.put(60, "Intermediate");
System.out.println(levels.floorEntry(74).getValue());
System.out.println(levels.floorEntry(80).getValue());`, ["java.util.TreeMap"]),
      result: "74 selects Intermediate and the exact boundary 80 selects Advanced.",
    }],
    quizzes: [{
      question: "Which threshold matches a score of 59?",
      options: ["60", "0", "80"],
      answer: 1,
      explanation: "Zero is the greatest stored minimum that does not exceed 59.",
    }],
  },
  {
    title: "Java LinkedHashMap",
    summary: "Update keyed values while retaining a predictable encounter order.",
    content: [
      "A default LinkedHashMap iterates in key insertion order. Replacing a value for an existing key keeps that key in its original position. Iterating over entrySet gives each key and its current value together.",
      "Track signups by group. Correct the first group's count, then print the report. The original signup order survives the correction.",
    ],
    examples: [{
      title: "Revise the first entry in an ordered report",
      code: javaProgram(`Map<String, Integer> groups = new LinkedHashMap<>();
groups.put("Choir", 4);
groups.put("Art", 2);
groups.put("Choir", 5);
for (var entry : groups.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}`, ["java.util.Map","java.util.LinkedHashMap"]),
      result: "The lines are Choir 5 and Art 2. Updating Choir preserves its first position.",
    }],
    quizzes: [{
      question: "What decides which group prints first in this example?",
      options: ["The greatest count", "The alphabetical group name", "The order in which keys were first inserted"],
      answer: 2,
      explanation: "The example uses the default insertion-order LinkedHashMap constructor.",
    }],
  },
  {
    title: "Java Iterator",
    summary: "Remove the item just visited while traversing a mutable collection.",
    content: [
      "An Iterator tracks a position between entries. hasNext checks whether another item remains and next returns it while advancing. Calling next after exhaustion throws NoSuchElementException.",
      "On an ArrayList iterator, remove deletes the element last returned by next. Use it at most once per next call to keep the cursor and list consistent while filtering.",
    ],
    examples: [{
      title: "Remove empty labels during traversal",
      code: javaProgram(`List<String> labels = new ArrayList<>(List.of("East", "", "West", ""));
Iterator<String> cursor = labels.iterator();
while (cursor.hasNext()) {
    String label = cursor.next();
    if (label.isEmpty()) {
        cursor.remove();
    }
}
System.out.println(labels);`, ["java.util.List","java.util.ArrayList","java.util.Iterator"]),
      result: "The remaining labels are [East, West]. Both empty strings were removed on their own visits.",
    }],
    quizzes: [{
      question: "When can this iterator's remove be called?",
      options: ["Once after next has returned the item to delete", "Before the first next call", "Twice per next call"],
      answer: 0,
      explanation: "Iterator removal applies to the most recently returned element, and each such element can be removed once.",
    }],
  },
  {
    title: "Java Algorithms",
    summary: "Read a binary search result as either a matching index or an insertion point.",
    content: [
      "Collections.binarySearch looks up a key in a list already sorted using the same ordering as the search. On a sorted list with distinct keys, a nonnegative result identifies the matching index. A negative result encodes the position where the missing key belongs.",
      "Decode a negative result with -result - 1. Insert the missing page number there so the list remains sorted. Sorting once can support many later searches.",
    ],
    examples: [{
      title: "Insert a page number in sorted order",
      code: javaProgram(`List<Integer> pages = new ArrayList<>(List.of(8, 2, 5));
Collections.sort(pages);
int found = Collections.binarySearch(pages, 6);
if (found < 0) {
    pages.add(-found - 1, 6);
}
System.out.println(found);
System.out.println(pages);`, ["java.util.List","java.util.ArrayList","java.util.Collections"]),
      result: "The search returns -3. Index 2 is the insertion point, so the list becomes [2, 5, 6, 8].",
    }],
    quizzes: [{
      question: "What must be true before calling this binary search?",
      options: ["The list contains no missing numbers", "The list is sorted in the ordering used by the search", "Each number equals its own index"],
      answer: 1,
      explanation: "The search discards half of the remaining positions using comparisons that assume the list is sorted.",
    }],
  },
]);
