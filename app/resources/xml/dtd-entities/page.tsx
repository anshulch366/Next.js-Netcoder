import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dtd-entities");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dtd-entities"} />;
}
