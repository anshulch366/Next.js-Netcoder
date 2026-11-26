import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("cybersecurity", "course-mapping-scanning");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"cybersecurity"} lessonId={"course-mapping-scanning"} />;
}
