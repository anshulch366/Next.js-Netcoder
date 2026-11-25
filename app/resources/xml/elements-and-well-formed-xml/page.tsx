import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "well-formed");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"well-formed"} />;
}
