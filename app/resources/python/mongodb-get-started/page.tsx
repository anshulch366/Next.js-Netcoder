import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-mongodb-get-started");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-mongodb-get-started"} />;
}
