import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "js-async-basics");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"js-async-basics"} />;
}
