import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "course-ado-error");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"course-ado-error"} />;
}
