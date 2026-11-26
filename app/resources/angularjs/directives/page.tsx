import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angularjs", "course-directives");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angularjs"} lessonId={"course-directives"} />;
}
