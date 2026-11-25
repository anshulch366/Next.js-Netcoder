import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "pointers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"pointers"} />;
}
