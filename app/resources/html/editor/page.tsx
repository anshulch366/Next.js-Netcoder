import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-practice-html-editor");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-practice-html-editor"} />;
}
