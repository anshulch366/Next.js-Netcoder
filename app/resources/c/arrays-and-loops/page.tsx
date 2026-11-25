import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "arrays");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"arrays"} />;
}
