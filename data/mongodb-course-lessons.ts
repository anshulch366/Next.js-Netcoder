import type { LearningLesson } from "./learning-resources";

type Row = [string, string, string, string];
const rows: Row[] = [
  ["home","MongoDB Home","MongoDB Tutorial","MongoDB is a document database that stores BSON documents in collections inside databases."],
  ["get-started","Get Started with MongoDB","MongoDB Tutorial","Connect to a local or hosted MongoDB deployment with mongosh or an official language driver."],
  ["query-api","MongoDB Query API","MongoDB Tutorial","The MongoDB Query API finds and changes documents using filters, update operators, and aggregation pipelines."],
  ["create-database","Create a Database","MongoDB Tutorial","MongoDB creates a database when data is first stored in it or an explicit create command is run."],
  ["collection","Create a Collection","MongoDB Tutorial","Collections group documents and can be created explicitly with options such as validators or capped size."],
  ["insert","Insert Documents","MongoDB Tutorial","Insert operations add one or more documents and assign an _id when one is not supplied."],
  ["find","Find Documents","MongoDB Tutorial","find and findOne retrieve documents that match a filter document."],
  ["update","Update Documents","MongoDB Tutorial","Update operations select documents with a filter and apply operators such as $set or $inc."],
  ["delete","Delete Documents","MongoDB Tutorial","Delete operations remove documents matching a filter; deleteOne and deleteMany have different scopes."],
  ["query-operators","Query Operators","MongoDB Tutorial","Query operators express comparisons, logical combinations, array matches, and field existence conditions."],
  ["update-operators","Update Operators","MongoDB Tutorial","Update operators modify selected fields or array values without replacing the entire document."],
  ["aggregation","Aggregation Pipelines","MongoDB Tutorial","Aggregation pipelines pass documents through stages that filter, reshape, group, and calculate results."],
  ["indexing-search","Indexes and Search","MongoDB Tutorial","Indexes can speed up selected queries and sorts, while MongoDB Search supports richer text search in supported deployments."],
  ["validation","Schema Validation","MongoDB Tutorial","Collection validation rules can enforce required fields and value types while retaining document flexibility."],
  ["data-api","MongoDB Data API","MongoDB Tutorial","A Data API can expose database operations over HTTP when enabled for an appropriate hosted environment."],
  ["drivers","MongoDB Drivers","MongoDB Tutorial","Official drivers connect applications to MongoDB and provide language-specific CRUD and aggregation APIs."],
  ["node-driver","MongoDB Node.js Driver","MongoDB Tutorial","The official Node.js driver uses MongoClient to connect and collection methods to access documents."],
  ["charts","MongoDB Charts","MongoDB Tutorial","MongoDB Charts can build visualizations from MongoDB data in supported Atlas deployments."],
  ["certificate","MongoDB Certificate Preparation","MongoDB Cert","Prepare by reviewing document modeling, CRUD, query operators, aggregation, indexes, and validation."],
  ["exercises","MongoDB Exercises","MongoDB Exercises","Exercises help practice inserting, filtering, updating, deleting, and aggregating sample documents."],
  ["syllabus","MongoDB Syllabus","MongoDB Exercises","A study path moves from documents and collections through CRUD, query operators, aggregation, indexes, and drivers."],
  ["study-plan","MongoDB Study Plan","MongoDB Exercises","A study plan combines short documentation readings with safe queries against disposable sample data."],
];

const examples: Record<string, string> = {
  "create-database":`use reading_room\ndb.createCollection("books")`,
  collection:`db.createCollection("books", {\n  validator: {\n    $jsonSchema: {\n      bsonType: "object",\n      required: ["title"],\n      properties: { title: { bsonType: "string" } }\n    }\n  }\n})`,
  insert:`db.books.insertOne({\n  title: "River Maps",\n  year: 2024,\n  tags: ["maps", "travel"]\n})`,
  find:`db.books.find(\n  { year: { $gte: 2020 } },\n  { title: 1, year: 1, _id: 0 }\n).sort({ year: -1 }).limit(10)`,
  update:`db.books.updateOne(\n  { title: "River Maps" },\n  { $set: { featured: true }, $inc: { views: 1 } }\n)`,
  delete:`db.books.deleteOne({ title: "Retired Guide" })`,
  "query-operators":`db.books.find({\n  year: { $gte: 2020, $lt: 2026 },\n  tags: { $in: ["maps", "history"] }\n})`,
  "update-operators":`db.books.updateMany(\n  { year: { $lt: 2000 } },\n  { $set: { archive: true }, $addToSet: { tags: "archive" } }\n)`,
  aggregation:`db.orders.aggregate([\n  { $match: { status: "paid" } },\n  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },\n  { $sort: { total: -1 } }\n])`,
  "indexing-search":`db.books.createIndex({ title: 1, year: -1 })\n\n// Inspect a query plan before adding indexes.\ndb.books.find({ title: "River Maps" }).explain("executionStats")`,
  validation:`db.runCommand({\n  collMod: "books",\n  validator: { $jsonSchema: {\n    bsonType: "object", required: ["title"],\n    properties: { title: { bsonType: "string" }, year: { bsonType: "int" } }\n  } }\n})`,
  "node-driver":`import { MongoClient } from "mongodb";\n\nconst client = new MongoClient(process.env.MONGODB_URI);\ntry {\n  const books = client.db("reading_room").collection("books");\n  const book = await books.findOne({ title: "River Maps" });\n  console.log(book);\n} finally {\n  await client.close();\n}`,
  drivers:`// Node.js driver: call collection methods from an app server.\nconst books = db.collection("books");\nconst result = await books.find({ year: { $gte: 2020 } }).toArray();`,
  "query-api":`db.books.find({\n  $and: [\n    { year: { $gte: 2020 } },\n    { tags: { $exists: true } }\n  ]\n})`,
  "data-api":`// Send only from a trusted server environment.\n// Store API keys in protected server configuration.\n// Never expose privileged database credentials in browser code.`,
  charts:`// In MongoDB Charts, select a data source and a field.\n// Example metric: count books by year.\ndb.books.aggregate([\n  { $group: { _id: "$year", count: { $sum: 1 } } },\n  { $sort: { _id: 1 } }\n])`,
};

function makeLesson([id, title, section, summary]: Row): LearningLesson {
  const code = examples[id] ?? `// ${title}\ndb.books.find({ year: { $gte: 2020 } }).limit(10)`;
  const secure = ["node-driver", "drivers", "data-api"].includes(id);
  return {
    id: `course-${id}`, title, section, level: "Beginner", summary, contentLanguage: "en",
    content: [summary,
      "MongoDB stores BSON documents in collections. A collection can contain documents with flexible shapes, while validation rules can enforce the fields that an application depends on. Model data around common access patterns and document relationships deliberately.",
      secure ? "Keep connection strings and API keys in protected server configuration, grant the app only the database permissions it needs, and never put privileged credentials in browser code. Use official drivers and check their compatibility guidance." : "Use narrow filters for updates and deletes, inspect query plans when performance matters, and test aggregation stages with a small sample. A write is atomic for one document; multi-document workflows may require transactions depending on the deployment and consistency needs.",
      "Walkthrough: adapt the collection and field names to your sample data. First run a read query to confirm the target documents, then try any change against disposable practice data and inspect the result.",
    ],
    example: code,
    examples: [{ title: "MongoDB example", code, result: "Output depends on the documents in the selected database and collection." }],
    reading: { title: "Official MongoDB documentation", url: id === "node-driver" || id === "drivers" ? "https://www.mongodb.com/docs/drivers/node/current/" : "https://www.mongodb.com/docs/manual/" },
    quiz: { question: `What is a good practice for ${title.toLowerCase()}?`, options: ["Use a precise filter and verify the selected documents", "Run updates without a filter to save time", "Expose database credentials in frontend code"], answer: 0, explanation: "Precise filters help avoid unintended changes, and credentials should remain on trusted server systems." },
  };
}

export const mongodbCourseLessons: LearningLesson[] = rows.map(makeLesson);
