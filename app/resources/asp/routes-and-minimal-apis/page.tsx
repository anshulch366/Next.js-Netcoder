import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("asp", "minimal-api");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"asp"} lessonId={"minimal-api"} />;
}
