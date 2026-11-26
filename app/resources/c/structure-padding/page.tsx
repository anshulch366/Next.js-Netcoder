import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "struct-padding");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"struct-padding"} />;
}
