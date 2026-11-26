import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-counting-sort");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-counting-sort"} />;
}
