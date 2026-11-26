import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "rss");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"rss"} />;
}
