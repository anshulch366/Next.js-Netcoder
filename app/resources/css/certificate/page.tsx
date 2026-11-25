import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-cert-certificate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-cert-certificate"} />;
}
