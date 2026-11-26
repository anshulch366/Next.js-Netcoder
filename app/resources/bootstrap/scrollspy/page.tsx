import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "scrollspy");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"scrollspy"} />;
}
