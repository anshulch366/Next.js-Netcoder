import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("python", "py-mongodb-create-db");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"python"} lessonId={"py-mongodb-create-db"} />;
}
