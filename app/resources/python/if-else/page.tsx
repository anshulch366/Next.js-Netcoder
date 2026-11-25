import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-if-else");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-if-else"} />;
}
