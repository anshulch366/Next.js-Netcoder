import ResourceLessonPage, { resourceLessonMetadata } from "@/components/resources/ResourceLessonPage";

export function generateMetadata() {
  return resourceLessonMetadata("css", "css-grid-grid-intro");
}

export default function Page() {
  return <ResourceLessonPage subjectId={"css"} lessonId={"css-grid-grid-intro"} />;
}
