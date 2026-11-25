import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "search-sort");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"search-sort"} />;
}
