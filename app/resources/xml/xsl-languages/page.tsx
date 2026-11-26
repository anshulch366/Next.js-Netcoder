import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "xsl-languages");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"xsl-languages"} />;
}
