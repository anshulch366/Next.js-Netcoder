import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-cmath-module");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-cmath-module"} />;
}
