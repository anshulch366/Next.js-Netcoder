import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-merge-sort");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-merge-sort"} />;
}
