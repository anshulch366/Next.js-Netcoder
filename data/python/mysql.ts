import { pythonChapter } from "./chapter";

const serverSetup = "Use a local MySQL server and install the driver in your Python environment with python -m pip install mysql-connector-python. Set MYSQL_USER and MYSQL_PASSWORD to credentials for a local practice account.";
const labSetup = "Complete MySQL Create Database first. Use the same local practice account with permission to create temporary tables in netcoder_python_lab. This example builds its own sample data for each run.";

const makeTable = `cur.execute("""
    CREATE TEMPORARY TABLE books (
        id INT PRIMARY KEY,
        title VARCHAR(80) NOT NULL,
        pages INT NOT NULL
    )
""")`;
const seedBooks = `${makeTable}
cur.executemany(
    "INSERT INTO books (id, title, pages) VALUES (%s, %s, %s)",
    [(1, "River", 96), (2, "Forest", 160), (3, "Coast", 96)]
)
db.commit()`;

function session(body: string, selectLab = true) {
  return `import os
import mysql.connector

with mysql.connector.connect(
    host="127.0.0.1",
    user=os.environ["MYSQL_USER"],
    password=os.environ["MYSQL_PASSWORD"],${selectLab ? '\n    database="netcoder_python_lab",' : ""}
) as db:
    with db.cursor() as cur:
${body.split("\n").map(line => line ? "        " + line : "").join("\n")}`;
}

function bookSession(body: string) {
  return session(seedBooks + "\n\n" + body);
}

export const mysql = pythonChapter("Python MySQL", "Intermediate", [
  {
    title: "MySQL Get Started",
    summary: "Connect to a local MySQL server and fetch a single result.",
    content: [serverSetup, "A connection represents a session on the database server. A cursor sends SQL through that session and reads the result. SELECT can evaluate an expression before you have created any tables."],
    examples: [{ title: "Check a local connection", code: session(`cur.execute("SELECT 6 * 7")
print(cur.fetchone()[0])`, false), result: "The server computes the expression and the Python script prints 42." }],
    quizzes: [{ question: "What does fetchone() return for this query?", options: ["The SQL string", "A row containing 42", "The server address"], answer: 1, explanation: "A default cursor returns a row tuple. Index zero retrieves its first column." }],
  },
  {
    title: "MySQL Create Database",
    summary: "Create a named workspace for the remaining practice queries.",
    content: [serverSetup, "Use a practice account authorized to create the database netcoder_python_lab. IF NOT EXISTS lets you repeat the setup. USE selects that database for the current session. Later scripts can select it when connecting."],
    examples: [{ title: "Prepare the practice database", code: session(`cur.execute("CREATE DATABASE IF NOT EXISTS netcoder_python_lab")
cur.execute("USE netcoder_python_lab")
cur.execute("SELECT DATABASE()")
print(cur.fetchone()[0])`, false), result: "The script prints netcoder_python_lab. The practice database remains available for later sessions." }],
    quizzes: [{ question: "Which statement selects the database for the current connection?", options: ["USE netcoder_python_lab", "SELECT DATABASE()", "COMMIT"], answer: 0, explanation: "USE sets the current database. SELECT DATABASE() reports the selection." }],
  },
  {
    title: "MySQL Create Table",
    summary: "Define columns, types, and a primary key for a catalog.",
    content: [labSetup, "CREATE TABLE describes the shape of each row. The primary key identifies a book, VARCHAR bounds the title length, and NOT NULL requires a value. TEMPORARY makes the table private to this database session and removes it at disconnect."],
    examples: [{ title: "Inspect a catalog schema", code: session(`${makeTable}
cur.execute("DESCRIBE books")
print([row[0] for row in cur.fetchall()])`), result: "The column names print as ['id', 'title', 'pages']." }],
    quizzes: [{ question: "What would happen if two rows used the same id?", options: ["MySQL would merge the titles", "Both would be accepted", "The duplicate primary key would be rejected"], answer: 2, explanation: "The primary-key constraint requires a unique id in each row." }],
  },
  {
    title: "MySQL Insert",
    summary: "Insert a row using a parameterized statement.",
    content: [labSetup, "List the columns explicitly so the values and their order are clear. Connector/Python accepts %s placeholders with values in a separate tuple. It handles quoting and types. Commit a successful change to finish the transaction."],
    examples: [{ title: "Add one book", code: session(`${makeTable}
cur.execute(
    "INSERT INTO books (id, title, pages) VALUES (%s, %s, %s)",
    (4, "Night Sky", 120)
)
db.commit()
cur.execute("SELECT title FROM books WHERE id = 4")
print(cur.fetchone()[0])`), result: "The new row's title is Night Sky." }],
    quizzes: [{ question: "Where should a book title entered by a user go?", options: ["In the table name", "In the separate parameter tuple", "Directly inside the SQL string"], answer: 1, explanation: "Passing the value separately lets the connector bind it as data." }],
  },
  {
    title: "MySQL Select",
    summary: "Return specific columns and unpack each result row.",
    content: [labSetup, "SELECT lists the columns needed by the program. Each fetched tuple follows that same column order. ORDER BY id gives the three sample books a predictable display order."],
    examples: [{ title: "Print a reading list", code: bookSession(`cur.execute("SELECT title, pages FROM books ORDER BY id")
for title, pages in cur.fetchall():
    print(f"{title}: {pages} pages")`), result: "The list shows River with 96 pages, Forest with 160, and Coast with 96." }],
    quizzes: [{ question: "What does the first item of each returned tuple contain?", options: ["The title", "The id", "The page count"], answer: 0, explanation: "title is the first expression in this SELECT list." }],
  },
  {
    title: "MySQL Where",
    summary: "Filter rows on the server using a comparison.",
    content: [labSetup, "A WHERE condition decides which rows enter the result. The inclusive <= operator keeps books at or below the supplied page count. A single SQL parameter still needs a one-element tuple, written with a trailing comma."],
    examples: [{ title: "Find shorter books", code: bookSession(`cur.execute(
    "SELECT title FROM books WHERE pages <= %s ORDER BY id",
    (100,)
)
print([row[0] for row in cur.fetchall()])`), result: "The list contains River and Coast. Forest exceeds 100 pages." }],
    quizzes: [{ question: "Which limit would include all three books with this condition?", options: ["95", "96", "160"], answer: 2, explanation: "Forest has 160 pages and the <= comparison includes an exact match." }],
  },
  {
    title: "MySQL Order By",
    summary: "Sort results with an explicit rule for ties.",
    content: [labSetup, "ORDER BY applies its sort keys from left to right. DESC puts larger numbers first, while ASC arranges increasing values. A second key gives tied page counts a predictable order."],
    examples: [{ title: "List long books first", code: bookSession(`cur.execute("SELECT title FROM books ORDER BY pages DESC, title ASC")
print([row[0] for row in cur.fetchall()])`), result: "The order is Forest, Coast, River. Coast precedes River among the 96-page books." }],
    quizzes: [{ question: "Why does Forest appear first?", options: ["Its title sorts first", "It has the highest pages value", "Its id is lowest"], answer: 1, explanation: "The primary sort key is pages in descending order. Titles break ties." }],
  },
  {
    title: "MySQL Delete",
    summary: "Remove a single catalog row by its primary key.",
    content: [labSetup, "DELETE FROM removes rows satisfying its WHERE condition. A primary key matches at most one row, giving this edit a predictable scope. Inspect rowcount immediately after the statement to see how many rows were removed."],
    examples: [{ title: "Remove a sample book", code: bookSession(`cur.execute("DELETE FROM books WHERE id = %s", (2,))
print("Deleted:", cur.rowcount)
db.commit()
cur.execute("SELECT COUNT(*) FROM books")
print("Remaining:", cur.fetchone()[0])`), result: "The script reports one deleted row and two remaining rows in its temporary table." }],
    quizzes: [{ question: "What happens if the id is changed to 99 in this sample?", options: ["The delete affects zero rows", "The first book is removed", "The table is dropped"], answer: 0, explanation: "None of the three sample rows has id 99, so no row satisfies WHERE." }],
  },
  {
    title: "MySQL Drop Table",
    summary: "Remove the definition and contents of a temporary table.",
    content: [labSetup, "A table can outlive all its rows. DROP TEMPORARY TABLE removes the temporary table itself, so subsequent queries cannot use its columns. Using TEMPORARY explicitly restricts this example to a session-local table."],
    examples: [{ title: "Discard a scratch table", code: session(`cur.execute("CREATE TEMPORARY TABLE review_notes (message VARCHAR(50))")
cur.execute("INSERT INTO review_notes VALUES (%s)", ("Checked",))
cur.execute("DROP TEMPORARY TABLE review_notes")
cur.execute("CREATE TEMPORARY TABLE review_notes (score INT)")
cur.execute("DESCRIBE review_notes")
print([row[0] for row in cur.fetchall()])`), result: "The name can be used for a new table. Its only column is now score." }],
    quizzes: [{ question: "How would DELETE FROM review_notes differ from dropping it?", options: ["DELETE also removes the schema", "DELETE renames the columns", "DELETE leaves an empty table with its original columns"], answer: 2, explanation: "DELETE operates on rows. DROP removes the table definition." }],
  },
  {
    title: "MySQL Update",
    summary: "Change a field on a selected row.",
    content: [labSetup, "SET assigns the new column value. WHERE identifies which rows receive it. Bind the page count and the book id in placeholder order, then read the row back to check the updated value."],
    examples: [{ title: "Correct a page count", code: bookSession(`cur.execute("UPDATE books SET pages = %s WHERE id = %s", (104, 1))
db.commit()
cur.execute("SELECT title, pages FROM books WHERE id = 1")
print(cur.fetchone())`), result: "The result is ('River', 104). The other books retain their original values." }],
    quizzes: [{ question: "What would omitting WHERE do in this UPDATE?", options: ["Update the first row only", "Set pages to 104 on every row", "Create a new column"], answer: 1, explanation: "Without a filtering condition every row qualifies for the assignment." }],
  },
  {
    title: "MySQL Limit",
    summary: "Take a predictable slice of an ordered result.",
    content: [labSetup, "LIMIT caps the number of returned rows and OFFSET skips rows first. Combine these clauses with a stable ordering. Here the unique id acts as the final sort key when books have the same page count."],
    examples: [{ title: "Fetch the second shortest book", code: bookSession(`cur.execute("""
    SELECT title FROM books
    ORDER BY pages ASC, id ASC
    LIMIT 1 OFFSET 1
""")
print(cur.fetchone()[0])`), result: "Coast is returned. River comes first in the tie on 96 pages because its id is smaller." }],
    quizzes: [{ question: "What does OFFSET 1 do?", options: ["Skip the first ordered row", "Return only id 1", "Skip the last row"], answer: 0, explanation: "The database skips one row of the ordered result before applying the one-row limit." }],
  },
  {
    title: "MySQL Join",
    summary: "Match rows from related tables using their keys.",
    content: [labSetup, "An inner join pairs a row from one table with each matching row in the other. The loans table stores a book id so a title can be looked up from the catalog. The ON condition defines the relationship."],
    examples: [{ title: "Match borrowers to book titles", code: bookSession(`cur.execute("CREATE TEMPORARY TABLE loans (book_id INT, borrower VARCHAR(40))")
cur.execute("INSERT INTO loans VALUES (%s, %s)", (2, "Mira"))
cur.execute("""
    SELECT loans.borrower, books.title
    FROM loans JOIN books ON loans.book_id = books.id
""")
print(cur.fetchall())`), result: "The joined result is [('Mira', 'Forest')]. Books without a loan have no matching row." }],
    quizzes: [{ question: "Why does River have no result row?", options: ["JOIN suppresses short titles", "Only one book may be in a catalog", "No loan references its id"], answer: 2, explanation: "An inner join needs a match satisfying the ON condition in both tables." }],
  },
]);
