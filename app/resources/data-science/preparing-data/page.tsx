import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "course-data-preparation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"course-data-preparation"} />;
}
