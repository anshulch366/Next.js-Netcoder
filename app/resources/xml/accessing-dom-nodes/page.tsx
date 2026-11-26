import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "dom-accessing");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"dom-accessing"} />;
}
