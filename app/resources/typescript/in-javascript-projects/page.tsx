import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("typescript", "js-projects");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"typescript"} lessonId={"js-projects"} />;
}
