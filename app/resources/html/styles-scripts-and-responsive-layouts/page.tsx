import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "integration");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"integration"} />;
}
