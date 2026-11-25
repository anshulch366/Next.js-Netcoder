import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "rules-index");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"rules-index"} />;
}
