import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-interview-questions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-interview-questions"} />;
}
