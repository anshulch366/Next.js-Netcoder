import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "real-life-examples");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"real-life-examples"} />;
}
