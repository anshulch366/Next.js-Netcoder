import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "nodejs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"nodejs"} />;
}
