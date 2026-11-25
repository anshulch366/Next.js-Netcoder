import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("django", "project");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"django"} lessonId={"project"} />;
}
