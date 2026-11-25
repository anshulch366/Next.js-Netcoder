import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-structure-html-iframes");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-structure-html-iframes"} />;
}
