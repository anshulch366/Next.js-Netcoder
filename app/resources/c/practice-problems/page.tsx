import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "practice-problems");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"practice-problems"} />;
}
