import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("jquery", "editor");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"jquery"} lessonId={"editor"} />;
}
