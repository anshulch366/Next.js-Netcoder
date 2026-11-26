import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xslt-apply");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xslt-apply"} />;
}
