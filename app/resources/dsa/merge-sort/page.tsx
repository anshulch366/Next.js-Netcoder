import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-merge-sort");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-merge-sort"} />;
}
