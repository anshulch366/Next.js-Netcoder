import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "course-passwords");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"course-passwords"} />;
}
