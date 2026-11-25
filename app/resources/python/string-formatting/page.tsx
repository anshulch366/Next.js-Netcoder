import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-string-formatting");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-string-formatting"} />;
}
