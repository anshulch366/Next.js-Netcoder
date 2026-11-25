import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-random-module");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-random-module"} />;
}
