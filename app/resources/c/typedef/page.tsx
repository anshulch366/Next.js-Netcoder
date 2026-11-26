import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "typedef");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"typedef"} />;
}
