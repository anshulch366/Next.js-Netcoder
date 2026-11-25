import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-remove-list-duplicates");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-remove-list-duplicates"} />;
}
