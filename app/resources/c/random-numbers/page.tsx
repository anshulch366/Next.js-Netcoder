import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "random-numbers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"random-numbers"} />;
}
