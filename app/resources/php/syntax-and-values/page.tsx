import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("php", "syntax");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"php"} lessonId={"syntax"} />;
}
