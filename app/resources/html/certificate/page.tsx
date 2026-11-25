import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-certificate-html-certificate");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-certificate-html-certificate"} />;
}
