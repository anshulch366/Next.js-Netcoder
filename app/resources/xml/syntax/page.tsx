import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "syntax");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"syntax"} />;
}
