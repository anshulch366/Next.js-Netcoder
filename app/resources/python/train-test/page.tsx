import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-train-test");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-train-test"} />;
}
