import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("aws", "connectivity");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"aws"} lessonId={"connectivity"} />;
}
