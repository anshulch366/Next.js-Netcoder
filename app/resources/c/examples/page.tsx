import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "examples");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"examples"} />;
}
