import { PageLink as Link } from "@/components/layout/PageTransition";
import type { Topic } from "@/types/course";
import { courses } from "@/data/courses";
import { resources } from "@/data/resources";
import { resourceHref } from "@/data/resource-navigation";

export default function TopicGuide({ topic }: { topic: Topic }) {
  const course = courses.find((course) => course.slug === topic)!;
  return <section className="reading"><Link className="text-link" href="/resources">Resource library</Link>
    <div className="intro"><span className={`tab ${topic}`}>{course.language}</span><h1>{course.language} field guide</h1><p>References for {course.title}.</p></div>
    {(topic === "javascript" || topic === "python") && <Link className="text-link" href={resourceHref(topic)}>Start the {course.language} tutorial</Link>}
    {resources[topic].map((item) => <article className="reference" key={item.url}><h2><a href={item.url}>{item.title}</a></h2><p>{item.description}</p><small>{new URL(item.url).hostname}</small></article>)}
    <Link className="text-link" href={`/courses/${topic}`}>Explore the {course.language} course</Link>
  </section>;
}
