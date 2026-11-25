import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "type-colour");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"type-colour"} />;
}
