import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"classes"} />;
}
