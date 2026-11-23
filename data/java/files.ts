import { javaChapter, javaProgram } from "./chapter";

export const files = javaChapter("Java File Handling", "Intermediate", [
  {
    title: "Java Files",
    summary: "Distinguish a path value from the file stored at that location.",
    content: [
      "Path represents a location. Calling resolve joins a child name to that path without touching storage. Files supplies operations that query or change the filesystem, such as exists, writeString and size.",
      "Create a temporary folder and resolve a child name inside it. The child starts out absent. Writing two ASCII characters using the default UTF-8 encoding produces a two-byte file.",
    ],
    examples: [{
      title: "Inspect a note before and after saving",
      code: javaProgram(`Path folder = Files.createTempDirectory("java-files-");
Path note = folder.resolve("note.txt");
try {
    System.out.println(Files.exists(note));
    Files.writeString(note, "OK");
    System.out.println(note.getFileName() + " uses " + Files.size(note) + " bytes");
} finally {
    Files.deleteIfExists(note);
    Files.deleteIfExists(folder);
}`, ["java.nio.file.Files","java.nio.file.Path"]),
      result: "The output is false followed by note.txt uses 2 bytes. An empty temporary folder made the first test predictable.",
    }],
    quizzes: [{
      question: "Which line creates note.txt?",
      options: ["folder.resolve(\"note.txt\")", "Files.exists(note)", "Files.writeString(note, \"OK\")"],
      answer: 2,
      explanation: "Resolving the name builds a Path. The first write creates the file at that path.",
    }],
  },
  {
    title: "Java Create Files",
    summary: "Create an empty file while protecting existing content.",
    content: [
      "Files.createFile asks the filesystem to create a new entry. The existence check and creation happen as one operation. This matters when another program could create the same name at the same time.",
      "The first call creates reservations.csv in a fresh directory. The second call demonstrates FileAlreadyExistsException and leaves the first file intact.",
    ],
    examples: [{
      title: "Reserve a new filename",
      code: javaProgram(`Path folder = Files.createTempDirectory("java-create-");
Path sheet = folder.resolve("reservations.csv");
try {
    Files.createFile(sheet);
    System.out.println("Created " + sheet.getFileName());
    try {
        Files.createFile(sheet);
    } catch (FileAlreadyExistsException ex) {
        System.out.println("Name already in use");
    }
} finally {
    Files.deleteIfExists(sheet);
    Files.deleteIfExists(folder);
}`, ["java.nio.file.Files","java.nio.file.Path","java.nio.file.FileAlreadyExistsException"]),
      result: "The first message is Created reservations.csv. The repeated attempt prints Name already in use.",
    }],
    quizzes: [{
      question: "What should happen if createFile encounters a file already at that path?",
      options: ["It adds an empty line", "It reports the conflict", "It resets the existing file"],
      answer: 1,
      explanation: "The operation requires an unused filename, so an existing entry makes creation fail.",
    }],
  },
  {
    title: "Java Write Files",
    summary: "Control whether a text write replaces content or appends to it.",
    content: [
      "Files.writeString encodes characters as UTF-8 by default. With the default options it creates the file when necessary and truncates an existing file. Pass APPEND to add text to a file that already exists.",
      "Write two event names into a temporary journal. Supply the newline between events yourself so the second write begins a separate line.",
    ],
    examples: [{
      title: "Append a return event to a loan journal",
      code: javaProgram(`Path journal = Files.createTempFile("java-journal-", ".txt");
try {
    Files.writeString(journal, "borrowed\\n");
    Files.writeString(journal, "returned\\n", StandardOpenOption.APPEND);
    System.out.print(Files.readString(journal));
} finally {
    Files.deleteIfExists(journal);
}`, ["java.nio.file.Files","java.nio.file.Path","java.nio.file.StandardOpenOption"]),
      result: "The journal contains borrowed on the first line and returned on the second.",
    }],
    quizzes: [{
      question: "What would the journal contain after the second write if APPEND were omitted?",
      options: ["Only returned and its newline", "Both lines twice", "Only borrowed"],
      answer: 0,
      explanation: "A default writeString call truncates the existing file before writing the replacement text.",
    }],
  },
  {
    title: "Java Read Files",
    summary: "Read a small UTF-8 file as lines and preserve its ordering.",
    content: [
      "Files.readAllLines returns the complete text as a list of lines. Each element excludes the line separator. This representation is convenient for a small roster or configuration file that fits in memory.",
      "The example prepares two station names, reads them back and uses a zero-based index to build one-based labels. For a file too large to hold in memory, read incrementally using BufferedReader.",
    ],
    examples: [{
      title: "Display a numbered station roster",
      code: javaProgram(`Path roster = Files.createTempFile("java-stops-", ".txt");
try {
    Files.writeString(roster, "Hill\\nGrove\\n");
    List<String> stops = Files.readAllLines(roster);
    for (int i = 0; i < stops.size(); i++) {
        System.out.println((i + 1) + ". " + stops.get(i));
    }
} finally {
    Files.deleteIfExists(roster);
}`, ["java.nio.file.Files","java.nio.file.Path","java.util.List"]),
      result: "The console displays 1. Hill and 2. Grove on separate lines.",
    }],
    quizzes: [{
      question: "What is the value of stops.get(1)?",
      options: ["1. Hill", "Grove", "2. Grove"],
      answer: 1,
      explanation: "The second list element contains the line's text. The loop supplies the number only when printing.",
    }],
  },
  {
    title: "Java Delete Files",
    summary: "Handle a repeated cleanup attempt with deleteIfExists.",
    content: [
      "Files.delete requires the path to exist. Files.deleteIfExists reports whether it actually removed an entry, so you can repeat cleanup when an earlier attempt already succeeded. Other I/O failures can still raise exceptions.",
      "This example creates its own uniquely named scratch file and calls deleteIfExists twice on its exact path. The second call exercises the already-absent case without touching any user file.",
    ],
    examples: [{
      title: "Remove one disposable draft",
      code: javaProgram(`Path draft = Files.createTempFile("java-draft-", ".txt");
System.out.println("First cleanup: " + Files.deleteIfExists(draft));
System.out.println("Second cleanup: " + Files.deleteIfExists(draft));`, ["java.nio.file.Files","java.nio.file.Path"]),
      result: "The two lines are First cleanup: true and Second cleanup: false.",
    }],
    quizzes: [{
      question: "What does false mean on the second call?",
      options: ["Deletion was denied", "The file is still open", "The path was already absent"],
      answer: 2,
      explanation: "An absent entry gives false. Other failures, such as denied access, can throw an exception.",
    }],
  },
]);
