import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-turtle-text");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-turtle-text"} />;
}
