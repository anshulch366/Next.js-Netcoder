import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angularjs", "course-scopes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angularjs"} lessonId={"course-scopes"} />;
}
