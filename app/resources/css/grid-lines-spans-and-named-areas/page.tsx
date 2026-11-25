import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "grid-areas");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"grid-areas"} />;
}
