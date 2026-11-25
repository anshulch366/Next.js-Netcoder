import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "exhibit-layout");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"exhibit-layout"} />;
}
