import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("nodejs", "course-mongo-create-db");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"nodejs"} lessonId={"course-mongo-create-db"} />;
}
