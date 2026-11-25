import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "text");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"text"} />;
}
