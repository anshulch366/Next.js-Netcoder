import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-raspi-button");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-raspi-button"} />;
}
