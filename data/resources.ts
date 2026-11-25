import type { Topic } from "@/types/course";
import type { Resource } from "@/types/resource";

export const resources: Record<Topic, Resource[]> = {
  python: [
    { title: "The Python tutorial", description: "Follow the official introduction to the language, from expressions to modules.", url: "https://docs.python.org/3/tutorial/" },
    { title: "Built-in functions", description: "Look up sum(), len(), sorted(), and the other tools available in every script.", url: "https://docs.python.org/3/library/functions.html" },
  ],
  javascript: [
    { title: "JavaScript guide", description: "Explore the language through examples of functions, collections, and control flow.", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { title: "DOM events", description: "Read how browsers dispatch events and how listeners respond to user input.", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events" },
  ],
  sql: [
    // SQL lessons and practice are provided directly in the learning guide.
  ],
};
