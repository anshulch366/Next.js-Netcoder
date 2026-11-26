import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xslt-client");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xslt-client"} />;
}
