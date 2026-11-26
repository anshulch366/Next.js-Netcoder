import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-linked-types");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-linked-types"} />;
}
