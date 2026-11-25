import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-built-in-modules");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-built-in-modules"} />;
}
