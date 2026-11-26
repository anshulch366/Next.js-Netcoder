import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "elements");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"elements"} />;
}
