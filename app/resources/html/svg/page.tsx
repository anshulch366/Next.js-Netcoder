import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("html", "study-drawing-html-svg");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"html"} lessonId={"study-drawing-html-svg"} />;
}
