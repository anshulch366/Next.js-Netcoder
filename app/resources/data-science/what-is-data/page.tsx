import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("data-science", "course-what-is-data");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"data-science"} lessonId={"course-what-is-data"} />;
}
