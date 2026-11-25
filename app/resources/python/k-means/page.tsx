import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-k-means");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-k-means"} />;
}
