import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xslt-examples");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xslt-examples"} />;
}
