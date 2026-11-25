import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "questions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"questions"} />;
}
