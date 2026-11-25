import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-counting-sort");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-counting-sort"} />;
}
