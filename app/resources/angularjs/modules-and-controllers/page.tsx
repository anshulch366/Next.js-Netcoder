import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("angularjs", "modules");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"angularjs"} lessonId={"modules"} />;
}
