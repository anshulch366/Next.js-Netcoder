import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xpath-axes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xpath-axes"} />;
}
