import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-interview-q-a");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-interview-q-a"} />;
}
