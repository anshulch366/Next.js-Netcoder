import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "validator");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"validator"} />;
}
