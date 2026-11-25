import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "selector-index");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"selector-index"} />;
}
