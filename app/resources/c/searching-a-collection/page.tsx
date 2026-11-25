import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-searching");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-searching"} />;
}
