import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xslt-choose");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xslt-choose"} />;
}
