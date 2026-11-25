import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "cert-baseline");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"cert-baseline"} />;
}
