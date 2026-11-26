import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "sorting");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"sorting"} />;
}
