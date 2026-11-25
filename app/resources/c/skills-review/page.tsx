import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("c", "c-certificate-preparation");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"c"} lessonId={"c-certificate-preparation"} />;
}
