import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-structure-html-buttons");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-structure-html-buttons"} />;
}
