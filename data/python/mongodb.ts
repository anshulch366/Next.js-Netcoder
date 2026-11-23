import { pythonChapter } from "./chapter";

const mongoSetup = "Run a local MongoDB server and install the Python driver with python -m pip install pymongo. These scripts connect to localhost. If your local server requires credentials, set MONGODB_URI to its authenticated connection string.";
const collectionSetup = "Use the local server and PyMongo setup from MongoDB Get Started. Each run creates a uniquely named practice collection in netcoder_python_lab and removes that collection when it finishes. The practice account needs permission to create, read, write, and drop collections there.";

function connection(body: string) {
  return `import os
from uuid import uuid4
from pymongo import MongoClient

uri = os.environ.get("MONGODB_URI", "mongodb://127.0.0.1:27017")
with MongoClient(uri, serverSelectionTimeoutMS=5000) as client:
${body.split("\n").map(line => line ? "    " + line : "").join("\n")}`;
}

const seed = `books.insert_many([
    {"_id": 1, "title": "River", "pages": 96},
    {"_id": 2, "title": "Forest", "pages": 160},
    {"_id": 3, "title": "Coast", "pages": 96},
])`;

function collectionExample(body: string, withBooks = true) {
  const activity = withBooks ? seed + "\n\n" + body : body;
  return connection(`db = client["netcoder_python_lab"]
name = "books_" + uuid4().hex
books = db.create_collection(name)
try:
${activity.split("\n").map(line => line ? "    " + line : "").join("\n")}
finally:
    books.drop()`);
}

export const mongodb = pythonChapter("Python MongoDB", "Intermediate", [
  {
    title: "MongoDB Get Started",
    summary: "Connect a Python program to a MongoDB server and test it.",
    content: [mongoSetup, "A MongoClient manages a pool of connections. Constructing one may return before a connection has been established. Send a ping command to check whether the server responds. The context manager closes the client when the example ends."],
    examples: [{ title: "Ping the practice server", code: connection(`reply = client.admin.command("ping")
print(reply["ok"])`), result: "A reachable server returns a success value of 1.0." }],
    quizzes: [{ question: "Which line asks the server to do work?", options: ["Importing MongoClient", "Reading MONGODB_URI", "client.admin.command('ping')"], answer: 2, explanation: "ping issues a server command and waits for the response." }],
  },
  {
    title: "MongoDB Create DB",
    summary: "Select a database and observe when MongoDB stores data in it.",
    content: [collectionSetup, "Looking up a database by name returns a Python handle immediately. MongoDB creates a previously unused database when you create a collection or store its first data. Selecting its name alone does not create stored records."],
    examples: [{ title: "Write the first record to a practice collection", code: collectionExample(`books.insert_one({"title": "Field notes"})
print(db.name, books.count_documents({}))`, false), result: "The script prints netcoder_python_lab 1 while the collection exists. Its cleanup removes the practice collection." }],
    quizzes: [{ question: "Which operation here first creates server-side storage in an unused database?", options: ["db.create_collection(name)", "db = client['netcoder_python_lab']", "Reading db.name"], answer: 0, explanation: "create_collection sends an explicit request to create a collection in the selected database." }],
  },
  {
    title: "MongoDB Collection",
    summary: "Group related documents under a collection name.",
    content: [collectionSetup, "A database can hold multiple collections. A collection groups documents and can have its own indexes and validation rules. create_collection requests creation immediately. Looking up db[name] gives you a handle to use in later operations."],
    examples: [{ title: "Locate the newly created collection", code: collectionExample(`handle = db[name]
print(handle.name == name)
print(name in db.list_collection_names())`, false), result: "Both checks print True. The Python handle and the server's list refer to the same collection." }],
    quizzes: [{ question: "Which call retrieves collection names from the server?", options: ["handle.name", "db.list_collection_names()", "uuid4().hex"], answer: 1, explanation: "list_collection_names reads the database's collection listing." }],
  },
  {
    title: "MongoDB Insert",
    summary: "Store a Python dictionary as a document with a unique identifier.",
    content: [collectionSetup, "insert_one writes one document. Each document has a unique _id within its collection. If you omit it, the driver supplies an ObjectId. Keep the result's inserted_id to look the document up again."],
    examples: [{ title: "Save and retrieve a new book", code: collectionExample(`added = books.insert_one({"title": "Night Sky", "pages": 120})
saved = books.find_one({"_id": added.inserted_id})
print(saved["title"], saved["pages"])`, false), result: "The generated id locates the saved document and the script prints Night Sky 120." }],
    quizzes: [{ question: "Which value reliably identifies this particular insert?", options: ["The title length", "The page count", "added.inserted_id"], answer: 2, explanation: "inserted_id identifies the document by its unique _id field." }],
  },
  {
    title: "MongoDB Find",
    summary: "Read a document and select which fields to return.",
    content: [collectionSetup, "find_one returns a matching document, or None if no match exists. Its first argument filters documents. Its second argument is a projection. Setting title to 1 includes that field. Explicitly exclude _id when you only need the title."],
    examples: [{ title: "Read a single catalog title", code: collectionExample(`book = books.find_one({"_id": 2}, {"title": 1, "_id": 0})
print(book)
print(books.find_one({"_id": 999}))`), result: "The first line prints {'title': 'Forest'} and the second prints None." }],
    quizzes: [{ question: "What would the first projection include if '_id': 0 were removed?", options: ["title and _id", "Only pages", "Every document in the database"], answer: 0, explanation: "An inclusion projection returns _id by default along with the requested fields." }],
  },
  {
    title: "MongoDB Query",
    summary: "Use a comparison operator to filter a set of documents.",
    content: [collectionSetup, "A query document describes the criteria for a match. Nest $gte under a field name to require a value greater than or equal to a threshold. find returns a cursor that supplies matching documents as you iterate."],
    examples: [{ title: "Find books with at least 120 pages", code: collectionExample(`matches = books.find({"pages": {"$gte": 120}})
for book in matches:
    print(book["title"])`), result: "Only Forest prints because its page count is 160." }],
    quizzes: [{ question: "Would a book of exactly 120 pages match?", options: ["Only if its _id equals 120", "Yes, because $gte includes equality", "No, because $gte means strictly greater"], answer: 1, explanation: "The lower bound of a $gte comparison is inclusive." }],
  },
  {
    title: "MongoDB Sort",
    summary: "Sort documents using primary and secondary fields.",
    content: [collectionSetup, "Pass a list of (field, direction) pairs to sort a cursor. A direction of 1 means ascending and -1 means descending. Later keys break ties between earlier keys. A unique final key makes ordering consistent even for equal titles."],
    examples: [{ title: "Sort by length and title", code: collectionExample(`ordered = books.find().sort([("pages", -1), ("title", 1), ("_id", 1)])
print([book["title"] for book in ordered])`), result: "The titles print in the order Forest, Coast, River. Coast and River tie on pages." }],
    quizzes: [{ question: "Which change would put River before Coast among the two tied books?", options: ["Sort pages ascending only", "Remove the pages field from all books", "Use ('title', -1) as the second key"], answer: 2, explanation: "A descending alphabetical tie-break places River ahead of Coast." }],
  },
  {
    title: "MongoDB Delete",
    summary: "Delete one specific document and inspect the outcome.",
    content: [collectionSetup, "delete_one applies a filter and removes at most one matching document. Filtering by _id selects a particular document. The result's deleted_count reports how many documents were removed, including zero when none matched."],
    examples: [{ title: "Remove one borrowed sample", code: collectionExample(`result = books.delete_one({"_id": 2})
print(result.deleted_count)
print(books.count_documents({}))`), result: "The code prints 1 deleted document and a remaining count of 2 in the practice collection." }],
    quizzes: [{ question: "What would deleting _id 2 again return for deleted_count?", options: ["0", "1", "2"], answer: 0, explanation: "After the first delete there is no longer a matching document." }],
  },
  {
    title: "MongoDB Drop Collection",
    summary: "Remove an entire practice collection from its database.",
    content: [collectionSetup, "Dropping a collection removes its documents and indexes along with its server-side entry. Create an isolated collection for the demonstration and check the database's collection names before and after the drop."],
    examples: [{ title: "Observe the collection's removal", code: connection(`db = client["netcoder_python_lab"]
name = "scratch_" + uuid4().hex
scratch = db.create_collection(name)
try:
    scratch.insert_one({"note": "draft"})
    print(name in db.list_collection_names())
finally:
    scratch.drop()
print(name in db.list_collection_names())`), result: "The first check prints True and the second prints False." }],
    quizzes: [{ question: "How does delete_many({}) differ from drop()?", options: ["Both remove the collection's indexes", "delete_many({}) leaves the collection and its indexes in place", "drop() removes only one document"], answer: 1, explanation: "delete_many removes matching documents. Dropping also removes the collection itself." }],
  },
  {
    title: "MongoDB Update",
    summary: "Change one field while preserving the rest of a document.",
    content: [collectionSetup, "update_one takes a filter and an update document. The $set operator assigns a value to the named field while preserving other fields. Check matched_count for matches and modified_count for actual changes."],
    examples: [{ title: "Correct a book's page count", code: collectionExample(`result = books.update_one({"_id": 1}, {"$set": {"pages": 104}})
print(result.matched_count, result.modified_count)
print(books.find_one({"_id": 1})["pages"])`), result: "The first line prints 1 1 because River changed. The stored page count is now 104." }],
    quizzes: [{ question: "If you immediately set the same pages value again, what counts would you get?", options: ["0 matched, 0 modified", "1 matched, 1 modified", "1 matched, 0 modified"], answer: 2, explanation: "The id still matches, but the field already has the requested value." }],
  },
  {
    title: "MongoDB Limit",
    summary: "Retrieve a bounded number of documents from a sorted cursor.",
    content: [collectionSetup, "limit caps how many matched documents you receive. Sorting first defines which documents belong in a top-two result. Use an additional unique key to resolve ties consistently."],
    examples: [{ title: "Find the two shortest books", code: collectionExample(`first_two = books.find().sort([("pages", 1), ("_id", 1)]).limit(2)
print([book["title"] for book in first_two])`), result: "River and Coast are returned in id order, both with 96 pages." }],
    quizzes: [{ question: "How many documents can limit(2) return if only one document matches?", options: ["One", "Exactly two", "None"], answer: 0, explanation: "The limit is an upper bound. It does not create additional matches." }],
  },
]);
