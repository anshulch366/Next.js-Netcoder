import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xlink");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xlink"} />;
}
