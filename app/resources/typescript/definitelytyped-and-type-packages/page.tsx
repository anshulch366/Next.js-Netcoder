import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "definitely-typed");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"definitely-typed"} />;
}
