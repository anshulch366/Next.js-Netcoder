import { javaChapter, javaProgram } from "./chapter";

export const streams = javaChapter("Java I/O Streams", "Intermediate", [
  {
    title: "Java I/O Streams",
    summary: "Move bytes from a source to a destination in chunks.",
    content: [
      "An InputStream supplies bytes and an OutputStream accepts them. The same transfer loop can work with memory buffers or open files. Each successful read reports how many slots in the supplied buffer contain fresh data.",
      "This three-byte input needs two reads with a two-byte buffer. Pass the count from each read to write so the final chunk contributes only one byte.",
    ],
    examples: [{
      title: "Copy the last partial chunk correctly",
      code: javaProgram(`byte[] source = {10, 20, 30};
try (var input = new ByteArrayInputStream(source);
     var output = new ByteArrayOutputStream()) {
    byte[] buffer = new byte[2];
    int count;
    while ((count = input.read(buffer)) != -1) {
        output.write(buffer, 0, count);
    }
    System.out.println(Arrays.toString(output.toByteArray()));
}`, ["java.io.ByteArrayInputStream","java.io.ByteArrayOutputStream","java.util.Arrays"]),
      result: "The output is [10, 20, 30]. On the last read, only buffer[0] holds a newly read byte.",
    }],
    quizzes: [{
      question: "Why pass count instead of buffer.length to write?",
      options: ["To discard the first byte", "To write only fresh bytes from the latest read", "To reserve another buffer"],
      answer: 1,
      explanation: "The final read fills only one of the two positions. Writing both would copy a stale byte.",
    }],
  },
  {
    title: "Java FileInputStream",
    summary: "Recognize the entire byte range and the end-of-file marker.",
    content: [
      "A FileInputStream reads raw bytes. Its single-byte read method returns an int from 0 through 255, or -1 at the end. Storing the result in an int keeps byte value 255 distinct from the end marker.",
      "The test file contains the bit patterns for 0 and 255. Java's byte type is signed, so the array uses a cast for 255. The reader returns both values as nonnegative integers.",
    ],
    examples: [{
      title: "Read two byte values and the end marker",
      code: javaProgram(`Path sample = Files.createTempFile("java-input-", ".bin");
try {
    Files.write(sample, new byte[]{0, (byte) 255});
    try (FileInputStream input = new FileInputStream(sample.toFile())) {
        System.out.println(input.read());
        System.out.println(input.read());
        System.out.println(input.read());
    }
} finally {
    Files.deleteIfExists(sample);
}`, ["java.io.FileInputStream","java.nio.file.Files","java.nio.file.Path"]),
      result: "The three calls print 0, 255 and -1 on separate lines.",
    }],
    quizzes: [{
      question: "Which result tells a reading loop that no bytes remain?",
      options: ["0", "255", "-1"],
      answer: 2,
      explanation: "All values from 0 through 255 represent possible file data. The negative value marks the end.",
    }],
  },
  {
    title: "Java FileOutputStream",
    summary: "Write a binary header and extend it with another byte.",
    content: [
      "FileOutputStream writes raw bytes. Opening it with the single-file constructor truncates an existing file. Its append constructor accepts true when a new write should begin at the end.",
      "Use a byte array for the two header bytes and append a single byte for the version. Close each stream before opening the next one so the example has clear boundaries between operations.",
    ],
    examples: [{
      title: "Add a version byte to a header",
      code: javaProgram(`Path packet = Files.createTempFile("java-output-", ".bin");
try {
    try (FileOutputStream header = new FileOutputStream(packet.toFile())) {
        header.write(new byte[]{65, 66});
    }
    try (FileOutputStream version = new FileOutputStream(packet.toFile(), true)) {
        version.write(3);
    }
    System.out.println(Arrays.toString(Files.readAllBytes(packet)));
} finally {
    Files.deleteIfExists(packet);
}`, ["java.io.FileOutputStream","java.nio.file.Files","java.nio.file.Path","java.util.Arrays"]),
      result: "Reading the completed file yields [65, 66, 3].",
    }],
    quizzes: [{
      question: "What would the final byte array contain if the second constructor used false?",
      options: ["[3]", "[65, 66, 3]", "[65, 66]"],
      answer: 0,
      explanation: "Opening the stream without append truncates the file, so only the new version byte remains.",
    }],
  },
  {
    title: "Java BufferedReader",
    summary: "Read text until the input is exhausted, preserving blank lines.",
    content: [
      "A BufferedReader groups character reads into a buffer and offers readLine for line-oriented input. readLine returns the text without its line terminator. A blank line produces an empty string, while the end of the stream produces null.",
      "Count all lines, including empty ones, by testing the read result against null. StringReader supplies a small in-memory sample so the distinction is visible without a file.",
    ],
    examples: [{
      title: "Count the blank line between two labels",
      code: javaProgram(`String data = "East\\n\\nWest";
try (BufferedReader reader = new BufferedReader(new StringReader(data))) {
    int lines = 0;
    int blank = 0;
    String line;
    while ((line = reader.readLine()) != null) {
        lines++;
        if (line.isEmpty()) {
            blank++;
        }
    }
    System.out.println(lines + " lines, " + blank + " blank");
}`, ["java.io.BufferedReader","java.io.StringReader"]),
      result: "The reader reports 3 lines, 1 blank. It includes the final line even though West has no trailing newline.",
    }],
    quizzes: [{
      question: "What does readLine return between East and West?",
      options: ["null", "An empty string", "A string containing the newline"],
      answer: 1,
      explanation: "Two successive line separators enclose an empty line. Its content has zero characters.",
    }],
  },
  {
    title: "Java BufferedWriter",
    summary: "Build a text file one line at a time with a buffered writer.",
    content: [
      "A BufferedWriter accumulates characters before passing them to its underlying destination. Its newLine method writes the platform's line separator. Closing the writer flushes pending text and releases its underlying resource.",
      "Use Files.newBufferedWriter for a UTF-8 file. Write the report inside the resource block and read it after that block finishes, so the reader sees all buffered characters.",
    ],
    examples: [{
      title: "Write a two-line inventory report",
      code: javaProgram(`Path report = Files.createTempFile("java-report-", ".txt");
try {
    try (BufferedWriter writer = Files.newBufferedWriter(report)) {
        writer.write("Pencils 4");
        writer.newLine();
        writer.write("Pens 2");
    }
    System.out.println(Files.readAllLines(report));
} finally {
    Files.deleteIfExists(report);
}`, ["java.io.BufferedWriter","java.nio.file.Files","java.nio.file.Path"]),
      result: "The program prints [Pencils 4, Pens 2]. The line separator divides the two entries.",
    }],
    quizzes: [{
      question: "Why read the report after the inner try block?",
      options: ["Closing the reader changes character encoding", "newLine closes the file", "The writer has flushed and closed by then"],
      answer: 2,
      explanation: "Leaving try-with-resources closes the writer, including its final buffer flush.",
    }],
  },
]);
