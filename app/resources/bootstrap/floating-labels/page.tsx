import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("bootstrap", "floating-labels");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"bootstrap"} lessonId={"floating-labels"} />;
}
