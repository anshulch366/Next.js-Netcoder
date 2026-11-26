import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-raspi-components");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-raspi-components"} />;
}
