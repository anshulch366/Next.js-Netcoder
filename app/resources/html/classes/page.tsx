import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-structure-html-classes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-structure-html-classes"} />;
}
