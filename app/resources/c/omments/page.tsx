import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "comments");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"comments"} />;
}
