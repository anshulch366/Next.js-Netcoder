import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "flex-alignment");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"flex-alignment"} />;
}
