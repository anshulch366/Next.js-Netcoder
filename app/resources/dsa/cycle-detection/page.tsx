import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-cycle-detection");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-cycle-detection"} />;
}
