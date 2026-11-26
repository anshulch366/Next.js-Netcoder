import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("dsa", "course-certificate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"dsa"} lessonId={"course-certificate"} />;
}
