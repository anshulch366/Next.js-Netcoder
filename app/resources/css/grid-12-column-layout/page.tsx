import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-grid-grid-12-column-layout");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-grid-grid-12-column-layout"} />;
}
