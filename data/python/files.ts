import { pythonChapter } from "./chapter";

export const files = pythonChapter("File Handling", "Beginner", [
  {
    title: "Python File Handling",
    summary: "Open a file with a context manager and choose a mode for the task.",
    content: [
      "A file object tracks both the open file and a current position. Opening a text file with a specified encoding tells Python how to translate between characters and bytes. A with statement closes the handle when its block ends, including when an exception exits the block.",
      "Use a temporary file to practice the read/write cycle. Here w+ supports both writing and reading. The write leaves the position at the end, so seek(0) rewinds before the read.",
    ],
    examples: [{
      title: "Write a note and rewind",
      code: `from tempfile import TemporaryFile

with TemporaryFile(mode="w+", encoding="utf-8") as note:
    note.write("Gallery opens at ten")
    note.seek(0)
    print(note.read())`,
      result: "Gallery opens at ten. Leaving the block closes the temporary file.",
    }],
    quizzes: [{
      question: "What would read() return if seek(0) were removed?",
      options: ["The complete note","An empty string","The file name"],
      answer: 1,
      explanation: "The current position is already at the end after the write.",
    }],
  },
  {
    title: "Python Read Files",
    summary: "Process text line by line and handle line endings deliberately.",
    content: [
      "Opening a text file in r mode begins at the start of an existing file. Iterating over the file produces one line at a time and works for files too large to read into a single string.",
      "Lines usually include their newline terminator. Trim that terminator before using print, which supplies its own newline. This example creates its own practice file in a temporary directory.",
    ],
    examples: [{
      title: "Number lines in a reading list",
      code: `from pathlib import Path
from tempfile import TemporaryDirectory

with TemporaryDirectory() as folder:
    path = Path(folder) / "reading.txt"
    path.write_text("Atlas\\nTides\\n", encoding="utf-8")
    with path.open("r", encoding="utf-8") as books:
        for number, line in enumerate(books, start=1):
            print(number, line.rstrip("\\n"))`,
      result: "The lines are 1 Atlas and 2 Tides, with no extra blank line between them.",
    }],
    quizzes: [{
      question: "Which operation consumes all remaining text into one string?",
      options: ["books.read()","books.readline()","enumerate(books)"],
      answer: 0,
      explanation: "read with no size argument reads from the current position through the end of the file.",
    }],
  },
  {
    title: "Python Write/Create Files",
    summary: "Choose exclusive creation, replacement or append mode.",
    content: [
      "Mode x creates a fresh file and raises FileExistsError if that path already exists. Mode w creates or truncates a file, and a appends at the end. Choose the behavior based on what should happen to existing text.",
      "write uses exactly the characters supplied. Include a newline when each entry should occupy its own line. This practice log starts inside a newly allocated temporary directory.",
    ],
    examples: [{
      title: "Create a log and append an entry",
      code: `from pathlib import Path
from tempfile import TemporaryDirectory

with TemporaryDirectory() as folder:
    log = Path(folder) / "visits.txt"
    with log.open("x", encoding="utf-8") as entries:
        entries.write("Monday\\n")
    with log.open("a", encoding="utf-8") as entries:
        entries.write("Tuesday\\n")
    print(log.read_text(encoding="utf-8"), end="")`,
      result: "Monday and Tuesday appear on separate lines in their original order.",
    }],
    quizzes: [{
      question: "What would opening with w instead of a do on the second open?",
      options: ["Raise FileExistsError","Insert Tuesday before Monday","Erase the previous contents before writing Tuesday"],
      answer: 2,
      explanation: "Write mode truncates an existing file when it opens successfully.",
    }],
  },
  {
    title: "Python Delete Files",
    summary: "Remove a disposable file by its exact path.",
    content: [
      "Path.unlink removes a file's directory entry. A later read through that path fails unless another file has been created there. Directories have different removal operations.",
      "Create the example's file inside a temporary directory and close it before deletion. missing_ok=True allows a repeated cleanup call to succeed if the file has already gone.",
    ],
    examples: [{
      title: "Clean up a generated preview",
      code: `from pathlib import Path
from tempfile import TemporaryDirectory

with TemporaryDirectory() as folder:
    preview = Path(folder) / "preview.txt"
    preview.write_text("Draft", encoding="utf-8")
    print(preview.is_file())
    preview.unlink()
    preview.unlink(missing_ok=True)
    print(preview.exists())`,
      result: "True then False. The second unlink tolerates the already-missing file.",
    }],
    quizzes: [{
      question: "What does missing_ok=True handle?",
      options: ["Any permission problem","A file path that is already absent","A directory containing many files"],
      answer: 1,
      explanation: "It suppresses the missing-file error and leaves other filesystem errors visible.",
    }],
  },
]);
