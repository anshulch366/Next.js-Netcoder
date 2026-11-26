import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "linked-lists");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"linked-lists"} />;
}
