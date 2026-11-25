import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "cert-layout");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"cert-layout"} />;
}
