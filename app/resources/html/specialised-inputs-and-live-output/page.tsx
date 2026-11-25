import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "special-inputs");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"special-inputs"} />;
}
