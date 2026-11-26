import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-hash-sets");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-hash-sets"} />;
}
