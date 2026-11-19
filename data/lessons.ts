import type { Lesson } from "@/types/lesson";
import type { Topic } from "@/types/course";

export const lessons: Lesson[] = [
  {
    "course": "python",
    "slug": "name-a-value",
    "title": "Name a value",
    "minutes": 5,
    "explanation": "A variable gives a value a name. Start a reading log by storing a book title and a count, then combine the two values in an f-string.",
    "code": "title = \"The Dispossessed\"\npages = 24\nprint(f\"{title}: {pages} pages\")",
    "walkthrough": "Python substitutes the values inside the braces. The printed line reads “The Dispossessed: 24 pages”.",
    "exercise": "Add 12 to the page count and print the updated count.",
    "solution": "pages += 12\nprint(pages)  # 36"
  },
  {
    "course": "python",
    "slug": "loop-over-a-list",
    "title": "Loop over a list",
    "minutes": 7,
    "explanation": "A list keeps related values together. A for loop visits each item in order. Add the entries in a reading log to find the weekly total.",
    "code": "sessions = [24, 18, 32]\ntotal = 0\nfor pages in sessions:\n    total += pages\nprint(total)  # 74",
    "walkthrough": "The running total takes the values 24, 42, and 74. Indentation puts the addition inside the loop.",
    "exercise": "Count how many sessions contained at least 20 pages.",
    "solution": "count = 0\nfor pages in sessions:\n    if pages >= 20:\n        count += 1\nprint(count)  # 2"
  },
  {
    "course": "python",
    "slug": "write-a-function",
    "title": "Write a function",
    "minutes": 8,
    "explanation": "Wrap the average calculation in a function so other reading logs can reuse it. An early return handles an empty list.",
    "code": "def average_pages(sessions):\n    if not sessions:\n        return 0\n    return sum(sessions) / len(sessions)\n\nprint(average_pages([10, 20]))  # 15.0",
    "walkthrough": "The argument becomes the local variable sessions. Returning 0 for an empty list avoids division by zero.",
    "exercise": "Use the function to find the average of 12, 15, and 21 pages.",
    "solution": "print(average_pages([12, 15, 21]))  # 16.0"
  },
  {
    "course": "javascript",
    "slug": "store-a-count",
    "title": "Store a count",
    "minutes": 5,
    "explanation": "Use let for a value that changes. A counter starts at zero and increases each time you record a practice session.",
    "code": "let count = 0;\ncount += 1;\nconsole.log(count); // 1",
    "walkthrough": "The assignment updates the stored value. Run the second line again and the count becomes two.",
    "exercise": "Create a second counter called minutes and add a 15-minute session.",
    "solution": "let minutes = 0;\nminutes += 15;\nconsole.log(minutes); // 15"
  },
  {
    "course": "javascript",
    "slug": "listen-for-a-click",
    "title": "Listen for a click",
    "minutes": 7,
    "explanation": "A button emits a click event when activated. Place this markup in an HTML file and open it in a browser.",
    "code": "<button id=\"add\">Log a session</button>\n<script>\n  let count = 0;\n  const button = document.querySelector('#add');\n  button.addEventListener('click', () => {\n    count += 1;\n    console.log(count);\n  });\n</script>",
    "walkthrough": "The script comes after the button, so the element exists when the query runs. Each click executes the listener once.",
    "exercise": "Change the listener to record five minutes per click.",
    "solution": "button.addEventListener('click', () => {\n  count += 5;\n  console.log(count);\n});"
  },
  {
    "course": "javascript",
    "slug": "render-the-result",
    "title": "Render the result",
    "minutes": 7,
    "explanation": "Show a counter on the page with an output element. Its textContent property accepts the text you want the reader to see.",
    "code": "<button id=\"add\">Log a session</button>\n<output id=\"total\">0</output>\n<script>\n  let count = 0;\n  const total = document.querySelector(\"#total\");\n  document.querySelector(\"#add\").onclick = () => {\n    count += 1;\n    total.textContent = String(count);\n  };\n</script>",
    "walkthrough": "The listener changes both the stored number and its visible representation. Refreshing this example resets the count.",
    "exercise": "Update the display to read “Sessions logged: 3” after the third click.",
    "solution": "total.textContent = `Sessions logged: ${count}`;"
  },
  {
    "course": "sql",
    "slug": "read-a-table",
    "title": "Read a table",
    "minutes": 5,
    "explanation": "Paste this sample into SQLite. Each row records minutes spent on one topic. SELECT chooses the columns to include in the result.",
    "code": "CREATE TABLE study (topic TEXT, minutes INTEGER);\nINSERT INTO study VALUES\n  ('Python', 20), ('SQL', 15), ('Python', 30);\n\nSELECT topic, minutes FROM study;",
    "walkthrough": "The final statement returns all three study sessions. Keep this table for the next two lessons.",
    "exercise": "Return just the minutes column.",
    "solution": "SELECT minutes FROM study;"
  },
  {
    "course": "sql",
    "slug": "filter-and-sort",
    "title": "Filter and sort",
    "minutes": 7,
    "explanation": "Use the study table from the first lesson. WHERE tests each row, and ORDER BY controls the order of the rows that pass.",
    "code": "SELECT topic, minutes\nFROM study\nWHERE minutes >= 20\nORDER BY minutes DESC;",
    "walkthrough": "Both Python sessions pass the filter. DESC puts the 30-minute session before the 20-minute session.",
    "exercise": "Find sessions under 20 minutes, shortest first.",
    "solution": "SELECT topic, minutes FROM study\nWHERE minutes < 20\nORDER BY minutes ASC;"
  },
  {
    "course": "sql",
    "slug": "group-your-results",
    "title": "Group your results",
    "minutes": 8,
    "explanation": "Group the study table by topic to turn individual sessions into a summary. SUM adds up the minutes inside each group.",
    "code": "SELECT topic, SUM(minutes) AS total\nFROM study\nGROUP BY topic\nORDER BY total DESC;",
    "walkthrough": "Python has 50 minutes across two sessions. SQL has 15 minutes in one session.",
    "exercise": "Count the number of sessions for each topic.",
    "solution": "SELECT topic, COUNT(*) AS sessions\nFROM study\nGROUP BY topic;"
  }
];

export function lessonsFor(course: Topic) {
  return lessons.filter((lesson) => lesson.course === course);
}
