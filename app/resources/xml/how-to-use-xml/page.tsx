import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "how-to-use");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"how-to-use"} />;
}
