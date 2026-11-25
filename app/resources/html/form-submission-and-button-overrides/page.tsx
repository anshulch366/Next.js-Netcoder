import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "submission");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"submission"} />;
}
