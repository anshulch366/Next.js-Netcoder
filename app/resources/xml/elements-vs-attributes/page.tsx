import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dtd-elements-vs-attributes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dtd-elements-vs-attributes"} />;
}
