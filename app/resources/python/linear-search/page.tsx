import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-linear-search");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-linear-search"} />;
}
