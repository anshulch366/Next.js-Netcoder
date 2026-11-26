import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("xml", "web-services");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"xml"} lessonId={"web-services"} />;
}
