import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angularjs", "course-expressions");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angularjs"} lessonId={"course-expressions"} />;
}
