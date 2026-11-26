import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "enums");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"enums"} />;
}
