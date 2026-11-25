import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-confusion-matrix");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-confusion-matrix"} />;
}
