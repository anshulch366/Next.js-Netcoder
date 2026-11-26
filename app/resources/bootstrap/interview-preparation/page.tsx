import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "interview-prep");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"interview-prep"} />;
}
