import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angularjs", "course-sql");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angularjs"} lessonId={"course-sql"} />;
}
