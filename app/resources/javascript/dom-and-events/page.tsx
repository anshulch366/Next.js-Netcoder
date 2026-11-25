import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("javascript", "dom");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"javascript"} lessonId={"dom"} />;
}
