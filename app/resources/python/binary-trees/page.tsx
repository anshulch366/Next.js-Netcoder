import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-binary-trees");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-binary-trees"} />;
}
