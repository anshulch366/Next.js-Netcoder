import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xslt-server");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xslt-server"} />;
}
