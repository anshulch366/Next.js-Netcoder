import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-add-two-numbers");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-add-two-numbers"} />;
}
