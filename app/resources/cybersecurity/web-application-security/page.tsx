import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "course-web-applications");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"course-web-applications"} />;
}
