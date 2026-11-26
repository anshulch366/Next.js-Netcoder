import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "keywords");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"keywords"} />;
}
