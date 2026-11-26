import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dtd-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dtd-intro"} />;
}
