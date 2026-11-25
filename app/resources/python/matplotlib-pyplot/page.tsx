import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-matplotlib-pyplot");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-matplotlib-pyplot"} />;
}
