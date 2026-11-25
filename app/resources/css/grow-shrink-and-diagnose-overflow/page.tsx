import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "flex-sizing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"flex-sizing"} />;
}
