import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "exploration");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"exploration"} />;
}
