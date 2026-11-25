import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "encoding");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"encoding"} />;
}
